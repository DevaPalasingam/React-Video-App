import React from 'react';

const App = () => {
  return (
    <div className="app">
      <div className="landing">
        <h1>Video App</h1>
        <input type="text" placeholder="Search" />
        <a>or Browse All</a>
      </div>
    </div>
  )
};

export default class ClientApp extends React.Component {
  render () {
    return App();
  }
}

