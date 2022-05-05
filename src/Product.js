import React from 'react';
import data from './data';
// eslint-disable-next-line react/prop-types
export default function Product({ input, handleShowClick }) {
  const filteredData = data.filter(objectitem => {
    // eslint-disable-next-line react/prop-types
    if (input === '') {
      return objectitem;
    } else {
      // eslint-disable-next-line react/prop-types
      return objectitem.name.toLowerCase().includes(input);
    }
  });

  // function showClick(id) {
  //   console.log('showing id' + id);
  //   const singleProduct = filteredData.filter(objectitem => {
  //     if (objectitem.id == id) {
  //       return objectitem;
  //     }
  //   });
  //   console.log(singleProduct);
  // }

  const filteredElement = filteredData.map(item => {
    return (
      <li
        onClick={() => handleShowClick(item.id)}
        className="item"
        key={item.id}
      >
        <img className="productimage" src={item.image} />
        <div className="productdesc">
          <div>{item.name}</div>
          <div className="productprice">₹ {item.price}</div>
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul className="unordered">{filteredElement}</ul>
    </div>
  );
}
