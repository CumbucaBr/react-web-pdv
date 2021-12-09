import React from 'react';
import './styles/header.css';
import './styles/optionsColumn.css';
import './styles/generic.css';

const App = () => {
    return (
        <div>

            <header className="header-pdv">
                <div className="grid-header">
                    <div className="logo-header">
                    <a href="http://localhost:3000/"><img src="https://logospng.org/download/mercado-pago/logo-mercado-pago-icone-1024.png" alt="Logo-mercado" /></a>
                    </div>
                    <div className="right-col-header">
                        <div className="about-header">
                            <a href="https://tibia.com/">USUÁRIO</a>
                            <p>▾</p>
                        </div>
                        <div className="settings-header">
                            <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/05/Desenho-Engrenagem-PNG.png" alt="Configurações" />
                        </div>
                        <div className="reload-header">
                            <img src="https://www.freeiconspng.com/uploads/reload-icon-18.png" alt="Recarregar" />
                        </div>
                        <div className="infos-header">
                            <p>06/12/2021</p>
                            <p>19:38</p>
                        </div>
                        <div className="total-header">
                            <h4>TOTAL</h4>
                            <p>R$1938,00</p>
                        </div>
                    </div>
                </div>
            </header>

            <section>
                <div className="left-column-options">
                    <div className="home-option">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Homepage" />
                        <p>Home</p>
                    </div>
                    <div className="sell-option">
                        <img src="https://image.flaticon.com/icons/png/512/126/126083.png" alt="Shopping" />
                        <p>Vendas</p>
                    </div>
                    <div className="customer-option">
                        <img src="http://cdn.onlinewebfonts.com/svg/img_135335.png" alt="Shopping" />
                        <p>Vendas</p>
                    </div>
                    <div className="products-option">
                    <img src="https://cdn-icons-png.flaticon.com/512/81/81960.png" alt="Shopping" />
                        <p>Produtos</p>
                    </div>
                    <div className="reports-option">
                    <img src="https://image.flaticon.com/icons/png/512/90/90417.png" alt="Shopping" />
                        <p>Relatórios</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default App
