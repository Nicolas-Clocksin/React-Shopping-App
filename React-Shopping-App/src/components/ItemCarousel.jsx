import React, {useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import { itemList } from '../api/items';
function ItemCarousel() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    itemList().then(setItems);
  }, []);
    return (
      <div className='hero-carousel'>
        <Carousel indicators controls interval={5000}>
          {items.map((item, index) => (
           
            <Carousel.Item key={item.id || index}>
              <Link to={`/item/${item.id}`}>
              <div className="carousel-frame">
                <img
                  className='carouselImage'
                  src={item.imgUrl}
                  alt={item.name}
                />
              </div>
                <Carousel.Caption className="carouselCaption">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
           
          ))}
        </Carousel>
      </div>
    );
  }
  
export default ItemCarousel
