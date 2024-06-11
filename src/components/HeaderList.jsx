import React from 'react';
import HeaderCard from './HeaderCard';
import velik from '../images/velik.png'
import velik2 from '../images/velik2.png'
import color1 from '../images/color1.png'
import color2 from '../images/color2.png'
import color3 from '../images/color3.png'
import color4 from '../images/color4.png'
import './ProductList.css';


const HeaderList = () => {
    const products = [
        {
            title: 'Electric Ace',
            subtitle: 'Two',
            price: '€69,07 NET/MONTH',
            images: [velik, velik2,velik, velik2],
            colorImages: [color1, color2 , color3 ,color4]
        },
        {
            title: 'Electric Ivy',
            subtitle: 'Two',
            price: '€69,07 NET/MONTH',
            images: [[velik], [velik2],[velik], velik2],
            colorImages: [color1, color2 , color3 ,color4]
        }
    ];

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <HeaderCard
                    key={index}
                    title={product.title}
                    subtitle={product.subtitle}
                    price={product.price}
                    images={product.images}
                    colorImages={product.colorImages}
                />
            ))}
        </div>
    );
};
export default HeaderList;
