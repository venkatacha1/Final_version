# MakeEasyFilings VPS Deployment (Ubuntu + Nginx + PM2 + SSL)

## 1) VPS Base Setup
```bash
sudo apt update
sudo apt install -y curl git nginx certbot python3-certbot-nginx
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
node -v
npm -v
```

## 2) Clone Project
```bash
cd /var/www
sudo mkdir -p /var/www/makeeasy
sudo chown -R $USER:$USER /var/www/makeeasy
cd /var/www/makeeasy
git clone <YOUR_GITHUB_REPO_URL> makeeasyfilings
cd makeeasyfilings
```

## 3) Backend Setup
```bash
cd /var/www/makeeasy/makeeasyfilings/backend
npm install
cp .env.example .env
nano .env
```

Set `.env` values:
```env
PORT=5000
MONGO_URI=<YOUR_MONGODB_ATLAS_URI>
JWT_SECRET=<STRONG_RANDOM_SECRET>
NODE_ENV=production
FRONTEND_URL=https://makeeasyfilings.com
```

Start backend with PM2:
```bash
cd /var/www/makeeasy/makeeasyfilings/backend
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup
```

## 4) Frontend Build
```bash
cd /var/www/makeeasy/makeeasyfilings/frontend
npm install
cp .env.example .env
npm run build
```

Deploy build to Nginx web root:
```bash
sudo mkdir -p /var/www/makeeasy/makeeasyfilings/frontend/build
sudo rsync -a --delete /var/www/makeeasy/makeeasyfilings/frontend/dist/ /var/www/makeeasy/makeeasyfilings/frontend/build/
```

## 5) Nginx Site Config
Create file:
```bash
sudo nano /etc/nginx/sites-available/makeeasyfilings.com
```

Use:
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name makeeasyfilings.com www.makeeasyfilings.com;

    root /var/www/makeeasy/makeeasyfilings/frontend/build;
    index index.html;

    location /api/ {
        proxy_pass http://127.0.0.1:5000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    location /uploads/ {
        proxy_pass http://127.0.0.1:5000/uploads/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location / {
        try_files $uri /index.html;
    }
}
```

Enable config:
```bash
sudo ln -s /etc/nginx/sites-available/makeeasyfilings.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 6) SSL via Certbot
```bash
sudo certbot --nginx -d makeeasyfilings.com -d www.makeeasyfilings.com
sudo systemctl status certbot.timer
```

## 7) MongoDB Atlas Whitelist
1. Open MongoDB Atlas -> Network Access.
2. Add VPS public IPv4 address.
3. Save and wait until status is Active.
4. Ensure Atlas DB user has correct username/password used in `MONGO_URI`.

## 8) Useful Commands
```bash
pm2 status
pm2 logs makeeasyfilings-backend
pm2 restart makeeasyfilings-backend
sudo systemctl reload nginx
curl http://127.0.0.1:5000/api/health
```
