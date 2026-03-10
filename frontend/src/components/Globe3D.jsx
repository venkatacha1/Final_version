
import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const Globe3D = () => {
    const globeEl = useRef();
    const [points, setPoints] = useState([]);

    useEffect(() => {
        // approximate coordinates (lat, lng)
        const countries = [
            // Middle East
            { name: "Bahrain", lat: 26.0667, lng: 50.5577 },
            { name: "Kuwait", lat: 29.3117, lng: 47.4818 },
            { name: "Oman", lat: 21.4735, lng: 55.9754 },
            { name: "Qatar", lat: 25.3548, lng: 51.1839 },
            { name: "Saudi Arabia", lat: 23.8859, lng: 45.0792 },
            { name: "UAE", lat: 23.4241, lng: 53.8478 },

            // Asia
            { name: "India", lat: 20.5937, lng: 78.9629 },
            { name: "Malaysia", lat: 4.2105, lng: 101.9758 },
            { name: "Singapore", lat: 1.3521, lng: 103.8198 },
            { name: "China", lat: 35.8617, lng: 104.1954 },

            // Europe & Russia
            { name: "Europe", lat: 51.1657, lng: 10.4515 }, // Centered approx on Germany
            { name: "Russia", lat: 61.5240, lng: 105.3188 },

            // North America
            { name: "USA", lat: 37.0902, lng: -95.7129 }
        ];

        setPoints(countries.map(c => ({
            ...c,
            size: 0.5,
            color: '#FFD700', // Gold/Yellowish for visibility
            label: c.name
        })));

        // Auto-rotate
        if (globeEl.current) {
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.5;
        }
    }, []);

    return (
        <div className="w-full h-[600px] flex justify-center items-center bg-transparent">
            <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                pointsData={points}
                pointLat="lat"
                pointLng="lng"
                pointColor="color"
                pointAltitude={0}
                pointRadius="size"
                pointsMerge={true}
                animateIn={true}
                htmlElementsData={points}
                htmlElement={d => {
                    const el = document.createElement('div');
                    // Zero-size anchor at coordinate
                    el.style.width = '0px';
                    el.style.height = '0px';
                    el.style.position = 'relative';
                    el.innerHTML = `
                        <!-- Label: Centered horizontally, positioned above the pin -->
                        <div style="
                            position: absolute;
                            bottom: 24px;
                            left: 50%;
                            transform: translateX(-50%);
                            color: #fff; 
                            padding: 2px 4px; 
                            font-family: sans-serif; 
                            font-weight: bold; 
                            font-size: 14px;
                            white-space: nowrap;
                            text-shadow: 0 2px 4px rgba(0,0,0,0.8);
                            pointer-events: none;
                        ">${d.name}</div>
                        
                        <!-- Pin: Centered on the coordinate (overlap dot) -->
                        <div style="
                            position: absolute;
                            top: 0;
                            left: 0;
                            transform: translate(-50%, -50%);
                            pointer-events: none;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        ">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.5));">
                                <path d="M12 0C7.58 0 4 3.58 4 8C4 14.25 12 24 12 24C12 24 20 14.25 20 8C20 3.58 16.42 0 12 0ZM12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11Z" fill="#ff0000"/>
                                <path d="M12 0C7.58 0 4 3.58 4 8C4 14.25 12 24 12 24C12 24 20 14.25 20 8C20 3.58 16.42 0 12 0ZM12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11Z" fill="url(#grad1)"/>
                                <defs>
                                    <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="25%" fy="25%">
                                        <stop offset="0%" style="stop-color:rgb(255,100,100);stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:rgb(200,0,0);stop-opacity:1" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                    `;
                    return el;
                }}
                htmlLat="lat"
                htmlLng="lng"
                htmlAltitude={0}
                width={800}
                height={600}
                backgroundColor="rgba(0,0,0,0)"
            />
        </div>
    );
};

export default Globe3D;
