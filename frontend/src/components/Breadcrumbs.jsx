import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (location.pathname === '/') return null;

    // Helper to format path segments into titles
    const formatSegment = (segment) => {
        return segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <nav className="flex animate-fadeIn" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link
                        to="/"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-theme-primary transition-colors"
                    >
                        <Home className="w-4 h-4 mr-2" />
                        Home
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return (
                        <li key={to}>
                            <div className="flex items-center">
                                <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                                {last ? (
                                    <span className="ml-1 text-sm font-bold text-theme-primary md:ml-2">
                                        {formatSegment(value)}
                                    </span>
                                ) : (
                                    <Link
                                        to={to}
                                        className="ml-1 text-sm font-medium text-gray-500 hover:text-theme-primary md:ml-2 transition-colors"
                                    >
                                        {formatSegment(value)}
                                    </Link>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
