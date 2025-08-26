import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemCarousel({ items, setItemSelected }) {
  function itemClicked(item){
    setItemSelected(item)
  }
    return (
      <div className='carousel'>
        <Carousel>
          {items.map((item, index) => (
            <Carousel.Item key={item.id || index} onClick={(item)=>itemClicked(item)}>
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