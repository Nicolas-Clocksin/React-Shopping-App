import React from "react";
function CategoryList({categories, items}){
    return (
        <div>
          {categories.map((category) => (
            <div key={category.id}>
              <h1>{category.name}</h1>
              <ul>
                {items
                  .filter((item) => item.category === category.id)
                  .map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      );
}

export default CategoryList