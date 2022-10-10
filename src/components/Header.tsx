import React from 'react';

export const Header: React.FC = () => {

  return (<header style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }}>
    <figure className='forsta-logo'></figure>
    <h1 className='uppercase'>Task tracker</h1>
  </header>)
}

export default Header;