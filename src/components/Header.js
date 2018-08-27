import React, { Component } from 'react';
import { HeaderContainer } from './styled';

export class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <h1 style={{ marginBottom: 0 }}>Display Data</h1>
      </HeaderContainer>
    );
  }
}

export default Header;
