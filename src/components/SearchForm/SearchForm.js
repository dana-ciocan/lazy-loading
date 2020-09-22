import React from 'react';
import './SearchForm.css';

function SearchForm({ topic, setTopic, setMethod, setShowImages, methodLookup}) {
    return (
        <div className="search-form">
            <div className="form-row">
            <label htmlFor="topic">Topic</label>
            <input
                type="text"
                id="topic"
                value={topic}
                onChange={e => { setTopic(e.target.value); setShowImages(false); }}
            />
            </div>
            <div className="form-row">
            <label htmlFor="method">Method</label>
            <select
                id="method"
                onChange={e => { setMethod(e.target.value); setShowImages(false); }}
            >
                {methodLookup && Object.keys(methodLookup).map(method => {
                    return <option value={method} key={method}>{methodLookup[method]}</option>
                })}
            </select>
            <button onClick={() => setShowImages(true)}>OK</button>
            </div>
        </div>
    );
}

export default SearchForm;
