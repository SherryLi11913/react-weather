import React from 'react';
import './SearchBar.css';

export default function SearchBar({searchCity}) {
    const [search, setSearch] = React.useState('');

    const enterSearch = (e) => {
        if (e.key === 'Enter' && search.trim().length) {
            searchCity(search.trim());
            setSearch('');
        }
    }

    return (
        <div className="search-bar">
            <input 
                type="text"
                className="search-input"
                placeholder="Search city"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={enterSearch}
            />
        </div>
    )
};
