import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { AddToCartButton } from '_app_components/AddToCartButton.js';

// import { RightSideBar } from '_app/RightSideBar';

function App() {
  return (
    <div className="dt-flex dt-w-screen dt-h-screen dt-justify-center dt-items-center dt-bg-gray-200">
      <article className="dt-bg-white dt-py-6 dt-px-4 dt-rounded-lg dt-shadow-xl hover:dt-shadow-2xl">
        <h2 className="dt-text-3xl dt-mb-8 dt-text-lg">
          <span className="dt-font-bold dt-text-gray-700">Talk: </span>
          The tooling aspect of
          <a
            className="dt-font-bold dt-text-link dt-px-2 dt-underline"
            href="http://bit.ly/code-dstools"
            target="_blank"
          >
            Design Systems
          </a>
        </h2>
        <AddToCartButton className="dt-ml-auto" />
      </article>
    </div>
  );
}

export { App };
