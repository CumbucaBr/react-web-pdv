import '../TopBar/topbar.css';
import { Link } from 'react-router-dom';
import logoEcommerce from '../../images/amazon-logo.png';

const TopBar = () => {
  return (
    <div className="site-header">
      <div className="container-topbar">
        <div className="left-container-topbar">
          <Link to="/home" className="redirection-link">
            <img src={logoEcommerce} alt="Logo do Ecommerce" className="logo" />
          </Link>
        </div>
        <div className="right-container-topbar">
          <div className="main-navigation">
            <ul className="navigation-list">
              <Link to="/listproducts" className="redirection-link">
                <li className="navigation-item">PRODUTOS DISPONÍVEIS</li>
              </Link>
              <Link to="/createproducts" className="redirection-link">
                <li className="navigation-item">CRIAR PRODUTOS</li>
              </Link>
              <Link to="/registry" className="redirection-link">
              <li className="navigation-item navigation-item-arrow">
                LOG IN
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
