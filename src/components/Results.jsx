import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
    const { results, imageResults, isLoading, searchTerm, getResults } = useResultContext();
    const location = useLocation();

    useEffect(() => {
        if (searchTerm) {
            if (location.pathname === '/images') {
                getResults(`/imagesearch?q=${searchTerm}&gl=us&lr=lang_en&num=30&page=1`);
            } else {
                getResults(`/search?q=${searchTerm}&gl=us&lr=lang_en&num=40&page=1`);
            }
        }
    }, [searchTerm, location.pathname]);

    if (isLoading) return <Loading />;

    switch (location.pathname) {
        case '/search':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56 p-4'>
                    {results?.items?.map(({ link, title, snippet, displayLink }, index) => (
                        <div key={index} className='md:w-2/5 w-full'>
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className='text-xs text-green-700 dark:text-green-400 mb-1'>{displayLink}</p>
                                <p className='text-lg dark:text-blue-300 text-blue-600 hover:underline hover:underline-offset-2'>
                                    {title}
                                </p>
                            </a>
                            <p className='text-sm dark:text-gray-300 text-gray-600 mt-1'>
                                {snippet}
                            </p>
                        </div>
                    ))}
                </div>
            );
        case '/images':
            return (
                <div className='flex flex-wrap justify-center items-center gap-4 mt-4 p-4'>
                    {imageResults?.map(({ url, width, height, imageUrl }, index) => (
                        <a key={index} href={url} target="_blank" rel="noreferrer">
                            <img
                                src={imageUrl}
                                alt={`result-${index}`}
                                loading='lazy'
                                className='h-36 w-36 object-cover rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform'
                            />
                        </a>
                    ))}
                </div>
            );
        case '/news':
            return (
                <div className='flex flex-col space-y-6 sm:px-56 p-4'>
                    {results?.items?.map(({ link, title, snippet, displayLink }, index) => (
                        <div key={index} className='w-full border-b dark:border-gray-700 pb-4'>
                            <p className='text-xs text-green-700 dark:text-green-400 mb-1'>{displayLink}</p>
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className='text-lg dark:text-blue-300 text-blue-600 hover:underline'>{title}</p>
                            </a>
                            <p className='text-sm dark:text-gray-300 text-gray-600 mt-1'>{snippet}</p>
                        </div>
                    ))}
                </div>
            );
        case '/videos':
            return (
                <div className='flex flex-col space-y-4 sm:px-56 p-4'>
                    <p className='text-gray-500 dark:text-gray-400'>Video results coming soon.</p>
                </div>
            );
        default:
            return (
                <div className='p-4 text-gray-500 dark:text-gray-400'>
                    Start searching to see results.
                </div>
            );
    }
}