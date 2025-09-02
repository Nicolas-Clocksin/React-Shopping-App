import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/esm/Button";
import CardBody from "react-bootstrap/esm/CardBody";
import { itemList } from "../api/items";
import { CategoriesList } from "../api/catergories";
function CategoryList(){
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    itemList().then(setItems);
  }, []);
  useEffect(()=>{
    CategoriesList().then(setCategories);
  }, []);

    return (
        <div className="categoryList">
          {categories.map((category) => (
            <div key={category.id}>
              <h1>{category.name}</h1>
              <div className="categoryItems">
                <ul className="d-flex overflow-auto gap-3 px-1 list-unstyled m-0">
                  {items
                    .filter((item) => item.category === category.id)
                    .map((item) => (
                      <li key={item.id}>
                          <Card onClick={(item)=>itemClicked(item)} style={{ width: '18rem', height: '315px'}}>
                              <Card.Img style={{maxHeight: '180px', objectFit: 'contain'}} variant="top" src={item.imgUrl} />
                              <CardBody className="card-body">
                                  <Card.Title>{item.name}</Card.Title>
                                  <Card.Text>${item.price} USD</Card.Text>
                                <div>
                                  <Button size="sm">Add to Cart</Button>
                                  </div>
                              </CardBody>
                          </Card>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      );
}

export default CategoryList