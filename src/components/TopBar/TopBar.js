import React from 'react';
import '../TopBar/topbar.css';
import logoEcommerce from '../../images/amazon-logo.png'

const TopBar = () => {

  return (
    <div className="site-header">
      <div className="container-topbar">
        <div className="left-container-topbar">
          <a href="/">
            <img src={logoEcommerce} alt="Logo do Ecommerce" className="logo" />
          </a>
        </div>
        {/*container direita */}
        <div className="right-container-topbar">
          <div className="main-navigation">
            <ul className="navigation-list">
            <li className="navigation-item">PRODUTOS DISPONÍVEIS</li>
            <li className="navigation-item">CRIAR PRODUTOS</li>
              <li className="navigation-item navigation-item-arrow">LOG IN</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
