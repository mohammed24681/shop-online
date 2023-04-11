import React from "react";

import { FaLocationArrow } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { SlEnvolope } from "react-icons/sl";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h3>about</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem, facilis similique unde fuga rerum placeat consequuntur
          deserunt iusto officiis obcaecati.
        </p>
      </div>
      <div>
        <h3>contact</h3>
        <ul>
          <li>
            <FaLocationArrow className="translate-y-2" />
            <p>
              address: punnamada, kottankulangara, alappuzha, kerala, 688006
            </p>
          </li>
          <li>
            <GiSmartphone />
            <p>phone: 01014817792</p>
          </li>
          <li>
            <SlEnvolope />
            <p>email: shop-online@email.com</p>
          </li>
        </ul>
      </div>
      <div>
        <h3>categories</h3>
        <ul>
          <li>headphone</li>
          <li>smart watches</li>
          <li>bluetooth speakers</li>
          <li>wireless earbuds</li>
          <li>home theatre</li>
          <li>projectors</li>
        </ul>
      </div>
      <div>
        <h3>pages</h3>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>privacy policy</li>
          <li>returns</li>
          <li>terms & conditions</li>
          <li>contact us</li>
        </ul>
      </div>
    </div>
  );
}
