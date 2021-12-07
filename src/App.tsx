import React from 'react';
import './header.css';

const App = () => {
    return (
        <div>

            <header className="header-pdv">
                <div className="grid-header grid-layout-1252">
                    <div className="logo-header">
                        <img src="https://logospng.org/download/mercado-pago/logo-mercado-pago-icone-1024.png" alt="Logo-mercado" />
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
                <div className="grid-layout-1252">
                    <div className="infos-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/15/15766.png" alt="Homepage" />
                        <p>HOME</p>
                    </div>
                    <div>
                        <p>VENDAS</p>
                    </div>
                    <div>
                        <p>PRODUTOS</p>
                    </div>
                    <div>
                        <p>RELATÓRIOS</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default App
