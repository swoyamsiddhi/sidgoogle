import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from './Search';

const tabs = [
    { label: ' Search', path: '/search' },
    { label: ' Images', path: '/images' },
    { label: ' News',   path: '/news' },
    { label: ' Videos', path: '/videos' },
];

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    const { pathname } = useLocation();

    return (
        <div className="p-5 pb-0 flex flex-col border-b dark:border-gray-700 border-gray-200">
           
            <div className="flex justify-between items-center w-full mb-3">
                <Link to="/">
                    <p className="text-2xl font-bold text-white hidden sm:block bg-blue-500 py-1 px-3 rounded-3xl">SidGoogle 🔍</p>
                    <p className="text-2xl font-bold text-white block sm:hidden bg-blue-500 py-1 px-3 rounded-3xl">SG</p>
                </Link>
                <Search />
                <button
                    type="button"
                    onClick={() => setDarkTheme(!darkTheme)}
                    className="text-xl font-bold bg-white dark:bg-gray-700 dark:text-white border dark:border-gray-600 rounded-full px-3 py-1 hover:shadow-lg ml-4 whitespace-nowrap"
                >
                    {darkTheme ? 'Light💡' : 'Dark🌙'}
                </button>
            </div>
           
            <div className="flex space-x-4 sm:ml-48 md:ml-72 overflow-x-auto">
                {tabs.map(({ label, path }) => (
                    <Link
                        key={path}
                        to={path}
                        className={`pb-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                            pathname === path
                                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                        }`}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </div>
    );
};