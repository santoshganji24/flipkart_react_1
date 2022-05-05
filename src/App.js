import React from 'react';
import Header from './Header';
import { useState } from 'react';
import Product from './Product';
import './App.css';
import data from './data';
// import data from './data';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [singleData, setSingleData] = useState('');
  console.log('hurra', singleData);

  function handleChange(e) {
    setInputText(e.target.value.toLowerCase());
  }

  function showClick(id) {
    data.filter(objectitem => {
      if (objectitem.id == id) {
        setSingleData(objectitem);
      }
    });
  }

  // const singleElement = singleData.map(objectitem => {
  //   return (
  //     <li className="item" key={objectitem.id}>
  //       <img className="productimage" src={objectitem.image} />
  //       <div className="productdesc">
  //         <div>{objectitem.name}</div>
  //         <div className="productprice">₹ {objectitem.price}</div>
  //       </div>
  //     </li>
  //   );
  // });

  return (
    <div>
      <Header handleChange={handleChange} />
      <Product input={inputText} handleShowClick={showClick} />
      {/* <Product input={inputText} onhandleShowClick={showClick} /> */}
    </div>
  );
}
