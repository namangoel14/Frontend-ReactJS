import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1', key: 'child1' }, [
    React.createElement(
      'h1',
      { key: 'child1-h1' },
      "I'm an child1 h1 Tag.............!"
    ),
    React.createElement(
      'h2',
      { key: 'child1-h2' },
      "I'm an chlid1 h2 Tag.....!"
    ),
  ]),
  React.createElement('div', { id: 'child2', key: 'child2' }, [
    React.createElement('h1', { key: 'child2-h1' }, "I'm an child2 h2 Tag!"),
    React.createElement('h2', { key: 'child2-h2' }, "I'm an chlid2 h2 Tag!"),
  ]),
]);
console.log('Heading: ', heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
