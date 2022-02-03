import React from 'react';
import '../TopBar/topbar.css';
import logoEcommerce from '../../images/amazon-logo.png'

const TopBar = () => {
  // const [loginStatus, setLoginStatus] = React.useState('Fazer Login');

  return (
    <div className="site-header">
      {/*a partir daqui container que engloba tudo  */}
      <div className="container-topbar">
        {/*container esquerda */}
        <div className="left-container-topbar">
          <a href="https://google.com/">
            <img src={logoEcommerce} alt="Logo do Ecommerce" className="logo" />
          </a>
        </div>
        {/*container direita */}
        <div className="right-container-topbar">
          <div className="main-navigation">
            <ul className="navigation-list">
              <li className="navigation-item">PRODUTOS</li>
              {/* <li className="navigation-item"></li> */}
              <li className="navigation-item">LOG IN ⮟</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
