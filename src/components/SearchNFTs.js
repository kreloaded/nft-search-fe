import React, { useState } from 'react';
import axios from 'axios';

const SearchNFTs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.post('http://localhost:5001/search', {
                term: searchTerm,
            });
            setResults(response.data);
        } catch (error) {
            console.error('Error searching NFTs:', error);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>NFT Metadata Search</h1>
            <input
                type="text"
                placeholder="Search NFTs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '300px', padding: '10px', marginRight: '10px' }}
            />
            <button onClick={handleSearch} style={{ padding: '10px 20px' }}>
                Search
            </button>

            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                {results.map((nft) => (
                    <div
                        key={nft._id}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '10px',
                            margin: '10px',
                            width: '250px',
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src={nft._source.Logo}
                            alt={nft._source.Name}
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                        <h3>{nft._source.Name}</h3>
                        <p>Category: {nft._source.Category || 'N/A'}</p>
                        <p>Floor Price: ${nft._source.Floor_Price_USD || 'N/A'} USD</p>
                        <a
                            href={nft._source.Website}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                marginTop: '10px',
                                padding: '5px 10px',
                                backgroundColor: '#007bff',
                                color: '#fff',
                                borderRadius: '4px',
                                textDecoration: 'none',
                            }}
                        >
                            Visit Website
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchNFTs;
