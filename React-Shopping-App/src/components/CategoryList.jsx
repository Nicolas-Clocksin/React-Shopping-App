import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/esm/Button";
import CardBody from "react-bootstrap/esm/CardBody";
import {Link} from 'react-router-dom'
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
              <div className="categoryListHeader">
                <h1>{category.name}</h1>
                <Link className="seeAllLink" to={`/category/${category.id}`}>
                  See All
                </Link>
              </div>
              <div className="categoryItems">
                <ul className="d-flex overflow-auto gap-3 px-1 list-unstyled m-0">
                  {items
                    .filter((item) => item.category === category.id)
                    .map((item) => (
                      <li key={item.id}>
                          <Card onClick={(item)=>itemClicked(item)} className="category-card">
                            <Link to={`/item/${item.id}`}>
                              <Card.Img variant="top" src={item.imgUrl} />
                              <CardBody className="card-body">
                                  <Card.Title>{item.name}</Card.Title>
                                  <Card.Text>${item.price} USD</Card.Text>
                                <div>
                                  <Button size="sm">Add to Cart</Button>
                                  </div>
                              </CardBody>
                              </Link>
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
