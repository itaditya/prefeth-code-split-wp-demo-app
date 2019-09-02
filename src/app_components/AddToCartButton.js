import React from 'react';

import { Button } from 'design-troopers/dist/Buttons';

function AddToCartButton(props) {
  return <Button data-name="AddToCartButton" variant="primary" className="shadow-xl" {...props}>Add To Cart Button</Button>
}

export { AddToCartButton };
