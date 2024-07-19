import React, { Component } from 'react';

async function getData() {
  const url = 'http://localhost:3000/api';
  try {
    const response = await fetch(url);
    // if (!response.ok) {
    //   throw new Error(`Response status: ${response.status}`);
    //   console.log(Error)
    // }
    console.log('response', response);

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error('error with fetch', error.message);
  }
}

getData();
class App extends Component {
  render() {
    return <div>Hello from the top level of the app, i guess? </div>;
  }
}

export default App;
