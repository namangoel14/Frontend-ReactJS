import React from 'react';
import ReactDOM from 'react-dom/client';
import { jsx } from 'react/jsx-runtime';

// JSX (transpiled before it render the JS)- PARCEL - BABEL

// JSX => React.createElement => ReactElement-JS Object =>HTMLElement(render)

const jsxHeading = <h1 id="heading">JSX heading</h1>;

console.log('jsxHeading:', jsxHeading);

// Functional component
const HeadingComponent1 = () => {
  return <h1>This is the functional component of HeadingComponent1</h1>;
};

const number = 10000;
const CreateComponent = () => (
  <div>
    <h2> {number} </h2>
    <h1 id="injection">Injecting javascript code inside the jsx code</h1>
  </div>
);

const title = <h1 className="reactElement">react element</h1>;
// Below process is known as Component Composition!!
const HeadingComponent2 = () => (
  <div id="functional">
    {title}
    <HeadingComponent1 />
    <CreateComponent />
    <h1 className="heading">
      This is an functional component of HeadingComponent2
    </h1>
  </div>
);

console.log(HeadingComponent2);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    {jsxHeading}
    <HeadingComponent2 />
  </>
);

//When we need to render multiple objects.
// root.render(<div> {heading} {jsxHeading}</div>)

// We can inject and peace of javascript code inside the jsx code.
