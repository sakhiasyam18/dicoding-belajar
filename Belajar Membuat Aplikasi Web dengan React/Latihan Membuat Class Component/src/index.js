import React from 'react';
// import { createRoot } from 'react-dom/client';

class counter extends React.Component {
  constructor(props) {
    super(props);
    console.log('Component created');
  }

  render() {
    return <p>Hello Asyam, {this.props.name}</p>;
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <MyComponent name="Asyam" />
    <MyComponent name="John" />
    <MyComponent name="Yuhuuu" />
  </div>
);
