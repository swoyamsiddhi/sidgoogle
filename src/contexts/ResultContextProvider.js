import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();

const baseUrl = 'https://google-search74.p.rapidapi.com';
const API_KEY = '7996327430mshb46281f5da697f1p1a89cejsn52a81eaf64cd';
const API_HOST = 'google-search74.p.rapidapi.com';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [type, setType] = useState('web');
    const [imageResults, setImageResults] = useState([]);
    

    const getResults = async (url) => {
        setIsLoading(true);
        const fullUrl = `${baseUrl}${url}`;
        console.log('🔍 Fetching:', fullUrl);
        try {
            const res = await fetch(fullUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-rapidapi-host': API_HOST,
                    'x-rapidapi-key': API_KEY,
                },
            });
            console.log('📡 Status:', res.status, res.statusText);
            const data = await res.json();
            console.log('📦 Data received:', data);
            if (url.includes('/imagesearch')) {
                setImageResults(data);
            } else if (url.includes('/search') || url.includes('query=')) {
                setResults(data);
            }
        } catch (error) {
            console.error(' Error fetching results:', error);
        }
        setIsLoading(false);
    }
    return (
        <ResultContext.Provider value={{ results, isLoading, searchTerm, setSearchTerm, type, setType, imageResults, getResults }}>
            {children}
        </ResultContext.Provider>
    );
}
export const useResultContext = () => useContext(ResultContext);