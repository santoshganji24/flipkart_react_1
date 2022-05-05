import React from 'react';
import Form from './Form';
// eslint-disable-next-line react/prop-types
export default function Header({ handleChange }) {
  return (
    <>
      <div className="header">
        <div className="headerflex">
          <div>
            <img
              className="headerimage"
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="Flipkart"
            />
          </div>
          <Form handleChange={handleChange} />
          <div>
            <button className="login">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}
