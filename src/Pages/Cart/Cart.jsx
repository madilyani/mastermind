import React from "react";
import Hero from "../../Base/Hero";

export default function Cart() {
  return (
    <Hero>
      <div className="cart">
        <div className="cart__table">
          <div className="cart__table-header">
            <div className="cart__table-row">
              <div className="cart__table-col">Product</div>
              <div className="cart__table-col">Price</div>

              <div className="cart__table-col">Quantity</div>
              <div className="cart__table-col">Subtotal</div>
            </div>
          </div>
          <div className="cart__table-body">
            <div className="cartLine">
              <div className="cartLine__delete">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0002 0.918514C10.796 0.71432 10.519 0.599609 10.2302 0.599609C9.94136 0.599609 9.66436 0.71432 9.46011 0.918514L5.87335 4.50527L2.2866 0.918514C2.08117 0.720106 1.80604 0.610321 1.52045 0.612802C1.23486 0.615284 0.961678 0.729835 0.75973 0.931782C0.557783 1.13373 0.443232 1.40692 0.44075 1.6925C0.438269 1.97809 0.548054 2.25322 0.746462 2.45865L4.33322 6.0454L0.746462 9.63216C0.642432 9.73263 0.559454 9.85282 0.502369 9.98571C0.445285 10.1186 0.415238 10.2615 0.413982 10.4061C0.412725 10.5508 0.440284 10.6942 0.49505 10.8281C0.549816 10.9619 0.630693 11.0835 0.732961 11.1858C0.83523 11.2881 0.956842 11.3689 1.0907 11.4237C1.22456 11.4785 1.36799 11.506 1.51261 11.5048C1.65723 11.5035 1.80016 11.4735 1.93305 11.4164C2.06594 11.3593 2.18612 11.2763 2.2866 11.1723L5.87335 7.58554L9.46011 11.1723C9.66553 11.3707 9.94067 11.4805 10.2263 11.478C10.5118 11.4755 10.785 11.361 10.987 11.159C11.1889 10.9571 11.3035 10.6839 11.306 10.3983C11.3084 10.1127 11.1987 9.83759 11.0002 9.63216L7.41349 6.0454L11.0002 2.45865C11.2044 2.25439 11.3191 1.9774 11.3191 1.68858C11.3191 1.39976 11.2044 1.12277 11.0002 0.918514Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="cart__table-row">
                <div className="cart__table-col">
                  <div className="cartLine__image">
                    <img src="images/products/1 (1).png" alt="product" />
                  </div>
                  <div className="cartLine__desc">
                    NUU B15 4G LTE Unlocked Android Smartphone | 6.78” FHD+
                    Display with 90Hz Refresh Rate
                  </div>
                </div>
                <div className="cart__table-col">
                  <div className="cartLine__price">$199.99</div>
                </div>
                <div className="cart__table-col">
                  <div className="cartLine__quantity">
                    <input type="number" placeholder="0" />
                  </div>
                </div>
                <div className="cart__table-col">
                  <div className="cartLine__price">$199.99</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart__table-footer"></div>
        </div>
      </div>
    </Hero>
  );
}