import React from 'react';

function SearchBox({ searchChange }) {

    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--green'
            type='search' 
            placeholder='Search Items..'
            onChange={searchChange} />
    </div>
    )
}

export default SearchBox