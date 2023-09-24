import React from 'react';
require('../styles/featuredSales.css');

// bluetick for verified sellers
const bluetick = require('../components-dependency/blue-tic.jpg');

// Type check for images or pdf files
type ImageOrPdfFile = string & {
    type: 'image.png' | 'image.jpeg' | 'image.jpg' | 'image.gif' | 'image.tiff' | 'application/json';
};

// Interface to enforce type safety for featured sales.
interface FeaturedSalesProps {
    name:string;
    type:string;
    img:ImageOrPdfFile;
    promoStatus:string;
    price:number;
}

const FeaturedSales:React.FC<FeaturedSalesProps> = ({name, type, img, promoStatus, price}) => {
    return(
        <section id="featured-item">
            <div id="featured-items-container-l1">
                <div id="featured-items-container-l2">
                    <div id="seller-status-promo-status">
                        <small id="seller-status">
                            Verified Seller <img id="bluetick" src={bluetick} alt ="" />
                        </small>
                        <small id="promo-status">{promoStatus = true? 'Promoted' : ''}</small>
                    </div>
                    <div id="item-container">
                        <img id="featured-item-img" src={img} alt={name} />
                        <div id="featured-item-details">
                            <h2 id="item-head">Resell Used Items</h2>
                            <div>
                                <p id="item-name">{name}<br /><br /><br />${price}<br /><br /><br />{type}</p>
                            </div>
                            <button id="purchase-btn">Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedSales;