import React from 'react';
import cn from 'classnames';

import { Button } from 'design-troopers';
import IcShoppingCart from 'material-svg-react-icons/dist/IcShoppingCart';


function AddToCartButton(props) {
  return (
    <Button
      data-name="AddToCartButton"
      appearance="primary"
      {...props}
      className={cn(props.className, "dt-text-xl shadow-xl")}
    >
      Add To Cart
      <IcShoppingCart className="dt-text-white dt-fill-current dt-text-2xl dt-ml-3" />
    </Button>
  );
}

export { AddToCartButton };
