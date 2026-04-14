import React, { createContext, useContext } from 'react';

const ResultContext = createContext();

const baseUrl = 'https://google-search74.p.rapidapi.com/?query=Nike&limit=10&related_keywords=true';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [type, setType] = useState('web');
    const [imageResults, setImageResults] = useState([]);
    

    const getResults = async (query) => {
        setIsLoading(true);
        const res = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'dekstop',
                'X-RapidAPI-Host': 'google-search74.p.rapidapi.com',
                'X-RapidAPI-Key': '7996327430mshb46281f5da697f1p1a89cejsn52a81eaf64cd',
            },
        });
        const data = await response.json();
        setResults(data);
        setIsLoading(false);
            
    }
    return (
        <ResultContext.Provider value={{ results, isLoading, searchTerm, type, imageResults, getResults }}>
            {children}
        </ResultContext.Provider>
    );
}
export const useResultContext = () => useContext(ResultContext);