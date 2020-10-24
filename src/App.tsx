import React from 'react';
import { 
  FiArrowDown,
  FiClock,
  FiDollarSign,
  FiSettings,
  FiBatteryCharging

} from 'react-icons/fi';

import { Link, animateScroll as scroll } from 'react-scroll';


import logoImg from './assets/logo.svg';

import { Container, DownSide, Footer } from './styles';

const App: React.FC = () => {
  function ScrollToContent() {
    scroll.scrollToBottom();
  }
  return (
    <>
        <Container>
        <div className="content-wrapper">
          <img src={logoImg} alt="digi4corp"/>
          
          <main>
            <h1>Digitalizar sua empresa é nossa prioridade.</h1>
            <p>Soluções ageis, modernas e de alto desempenho</p>
          </main>

          <div className="developer">
            <strong>lintsday</strong>
          </div>

          <Link to="#" onClick={ScrollToContent} className='enter-app'>
            <FiArrowDown size={26} color="#fff" />
          </Link>
          
        </div>
    </Container>

    <DownSide>
    <h1>O que oferecemos a sua empresa?</h1>
      <div className="content">
        
      <div className="table">
        <div className="row">
            <div className="column">
              <FiClock size={70} color="#a65089"/>
              <span>Agilidade no Processo de Vendas.</span>
            </div>
            <div className="column">
              <FiBatteryCharging size={70} color="#a65089"/>
              <span>Mais força para sua empresa.</span>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <FiSettings size={70} color="#a65089"/>
              <span>Interação de forma construtiva.</span>
            </div>
            <div className="column">
              <FiDollarSign size={70} color="#a65089"/>
              <span>Redução de dispesas.</span>
            </div>
          </div>
      </div>

        <div className="paragraph">
          <p className="paragraph-left">Nossa missão é trazer para seus clientes uma visão diferente e atualizada de sua empresa onde mesmo distante, as pessoas estarão conectadas a sua empresa e por cima de tudo com o que há de novo.</p>
          <p className="paragraph-right">Com tecnologias de ponta a Digi4corp apresenta soluções ágeis, modernas e de alto desempenho, que permitem agilidade a sua empresa, ao mesmo tempo, priorizam o conforto do cliente.</p>
        </div>

        
      </div>

      <Footer>
    
        <img src={logoImg} alt="digi4corp"/>
        <div className="contato">
          <h1>Contato</h1>
          <div className="info">
            <span>suporte@digi4corp.com.br</span>
            <span>(11)4136-2201</span>
          </div>

        </div>
      </Footer>
    </DownSide>



    </>

  );
}

export default App;
