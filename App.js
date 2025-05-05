import React from 'react';
import ReactDOM from 'react-dom/client';
import { jsx } from 'react/jsx-runtime';

// React.createElement => ReactElement-JS Object =>HTMLElement(render)
const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Core React heading'
);

console.log(heading);
// JSX (transpiled before it render the JS)- PARCEL - BABEL

// JSX => React.createElement => ReactElement-JS Object =>HTMLElement(render)

const jsxHeading = <h1 id="heading">JSX heading</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);

//When we need to render multiple objects.
// root.render(<div> {heading} {jsxHeading}</div>)
