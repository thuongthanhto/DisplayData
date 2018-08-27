import React, { Component } from 'react';
import { Header } from '../components/Header';
import { MainTab } from '../components/MainTab';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainTab />
      </div>
    );
  }
}

export default App;
