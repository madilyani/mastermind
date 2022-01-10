import React from "react";
import Hero from "../../Base/Hero";
import Autocomplete from "./Autocomplete";
import { City } from "./Autocomplete/City";
import { Country } from "./Autocomplete/Country";
export default function Bill() {
  return (
    <Hero>
      <div className="bill">
        <div className="bill__header">
          <div className="bill__header-icon">
            <img src="images/icons/coupon.png" alt="coupon" />
          </div>
          <div className="bill__header-text">
            Have a Coupon?
            <span> Click here to enter your code</span>
          </div>
        </div>
        <form className="bill__body">
          <h3>Billing details</h3>
          <div className="input__row">
            <div className="input__outer">
              <label htmlFor="">Phone number</label>
              <input type="number" placeholder="Phone" />
            </div>
            <div className="input__outer">
              <label htmlFor="">Street</label>
              <input type="text" placeholder="Street" />
            </div>
            <div className="input__outer">
              <label htmlFor="">Town/City</label>
              <Autocomplete list={City} placeholder={"Town/City"} />
            </div>
            <div className="input__outer">
              <label htmlFor="">State</label>
              <input type="text" placeholder="State" />
            </div>
            <div className="input__outer">
              <label htmlFor="">Country/region</label>
              <Autocomplete list={Country} placeholder={"Country/region"} />
            </div>
            <div className="input__outer">
              <label htmlFor="">Postal code</label>
              <input type="number" placeholder="Postal code" />
            </div>
          </div>
        </form>
        <div className="bill__footer">
          <button className="button primary">Submit</button>
        </div>
      </div>
    </Hero>
  );
}
