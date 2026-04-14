import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading'
export const Results = () => {
    const {results, isLoading, searchTerm} = useResultContext();
    const location = useLocation();
    if(isLoading) return <Loading />;
    console.log(location);
    switch(location.pathname) {
        case '/search':
            return 'Search';
        case '/images':
            return 'Images';
        case '/news':
            return 'News';
        case '/videos':
            return 'Videos';
        default:
            return 'Search';
    }
}