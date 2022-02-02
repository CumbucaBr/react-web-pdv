import React from 'react';
import '../TopBar/topbar.css';

const TopBar = () => {
  const [login, setLogin] = React.useState('Fazer Login');

  return (
  <div className="container-topbar">
    <div className="logo"></div>
    <a href="http://tibia.com/">
      <img src="" alt="" />
    </a>
  </div>
  );
};

export default TopBar;
