import React from 'react';

const Example = ({
    className = '',
    name = '',
    price = '',
    showBtn = false,
    handleBtnClick = null
}) => (
    <div className={`wrapper ${className ? className : 'example'}`}>
        <h1 className="name">hello~ {name ? name : 'no body'}</h1>
        <p className="price">{price ? `price is: ${price}` : '--'}</p>
        {
            showBtn && handleBtnClick
                ? (
                    <button
                        className="example-btn"
                        onClick={handleBtnClick}
                    >click me!!</button>
                )
                : null
        }
    </div>
)

export default Example