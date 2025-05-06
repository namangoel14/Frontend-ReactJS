import React from 'react';
import ReactDOM from 'react-dom/client';
import { jsx } from 'react/jsx-runtime';

// JSX (transpiled before it render the JS)- PARCEL - BABEL

// JSX => React.createElement => ReactElement-JS Object =>HTMLElement(render)

const jsxHeading = <h1 id="heading">JSX heading</h1>;

console.log(jsxHeading);

// Functional component
const HeadingComponent1 = () => {
  return <h1>This is the functional component of HeadingComponent1</h1>;
};

// Below process is known as Component Composition!!
const HeadingComponent2 = () => (
  <div id="functional">
    <HeadingComponent1 />
    <h1 className="heading">
      This is an functional component of HeadingComponent2
    </h1>
  </div>
);
console.log(HeadingComponent2);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent2 />);

//When we need to render multiple objects.
// root.render(<div> {heading} {jsxHeading}</div>)
