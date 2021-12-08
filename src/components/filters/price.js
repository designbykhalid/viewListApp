import React from 'react';

const PriceFilter = () => {
    return (
        <div className="filter-section">
            <form className="price-filter-form">
                <fieldset className="field-group">
                    <legend className="field-group__label">By Price</legend>
                    <ul className="field-list">
                        <li className="field field-list__item">
                            <input className="input price-checkbox" type="radio" id="cheapprice" name="byprice" value="" />
                            <label htmlFor="cheapprice" className="label ">500-1000</label>
                        </li>
                        <li className="field field-list__item">
                            <input className="input price-checkbox" type="radio" id="averageprice" name="byprice" value="" />
                            <label htmlFor="averageprice" className="label ">1000-1500</label>
                        </li>
                        <li className="field field-list__item">
                            <input className="input price-checkbox" type="radio" id="expensiveprice" name="byprice" value="" defaultChecked />
                            <label htmlFor="expensiveprice" className="label ">2000+</label>
                        </li>
                    </ul>
                </fieldset>
            </form>
        </div>
    )
}


export default PriceFilter;





