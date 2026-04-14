import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-full">
                <Link to="/" >
                    <p className="text-2xl font-bold text-white-500 hidden sm:block bg-blue-500 py-1 px-3 rounded-3xl">SidGoogle 🔍</p>
                </Link>
                <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl font-bold bg-white dark:bg-gray-50 dark:text-gray-900 border rounded-full px-3 py-1 hover:shadow-lg">
                    {darkTheme ? 'Light 💡' : 'Dark 🌙'}
                </button>
            </div>
        </div>
    );
};