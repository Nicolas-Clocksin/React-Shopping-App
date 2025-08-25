import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemCarousel({ items }) {
    return (
      <div className='carousel'>
        <Carousel>
          {items.map((item, index) => (
            <Carousel.Item key={item.id || index}>
              <img
                className='carouselImage'
                src={item.imgUrl}
                alt={item.name}
              />
              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
  
export default ItemCarousel