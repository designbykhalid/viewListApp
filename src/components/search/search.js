import React from 'react';


const Search = () => {
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="search-form" onSubmit={e => handleOnSubmit(e)}>
            <div className="search">
                <div className="search__button">
                    <input className="input button button--primary" id="button" name="button" type="submit" value="Search" />
                </div>
                <div className="search__input">
                    <label htmlFor="searchproduct" className="label search-label is-vishidden">Search Products</label>
                    <input className="input" id="searchproduct" className="search-input" name="searchproduct" type="search" placeholder="Search Products" />
                </div>
            </div>
        </form>
    );
};



export default Search;
