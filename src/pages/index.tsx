import React from 'react';
import Head from 'next/head';

import logoImg from '../assets/logo.svg';
import logoAlphaImg from '../assets/logo-alpha.svg';
import facebookImg from '../assets/facebook.svg';
import githubImg from '../assets/github.svg';
import twitterImg from '../assets/twitter.svg';
import mockupImg from '../assets/mockup.svg';
import dataMockupImg from '../assets/data-mockup.svg';

import {
  HomeContainer,
  Header,
  ButtonsContainer,
  Main,
  ImageContainer,
  DataSection,
  FeatureSection,
  FaqSection,
  Question,
  Footer,
} from '../styles/pages/Home';

const Home: React.FunctionComponent = () => {
  const mock = [
    {
      id: 1,
      author: 'Arthur',
      message: 'Eu posso adotar um papagaio?',
    },
    {
      id: 2,
      author: 'Victória',
      message: 'Como faço para cadastrar minha Ong?',
    },
    {
      id: 3,
      author: 'Victória',
      message: 'Como doar para uma Ong?',
    },
    {
      id: 4,
      author: 'Arthur',
      message: 'Eu posso colocar algum doggo/cato a venda?',
    },
  ];

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <Head>
        <title>Pawee Space</title>
      </Head>
      <HomeContainer>
        <Header>
          <img src={logoImg} alt="Pawee" />
          <ButtonsContainer>
            <a href="login">Entrar</a>
            <a href="signup">Cadastrar-se</a>
          </ButtonsContainer>
        </Header>

        <Main>
          <div>
            <h1>Salve, apoie e adote.</h1>
            <p>
              A Pawee oferece visibilidade para
              <br />
              {' '}
              Ong’s e abrigos de animais, faça parte!
            </p>
            <a href="signup">
              <button type="button">Fazer Parte</button>
            </a>
          </div>
        </Main>
        <ImageContainer>
          <img src={mockupImg} alt="Pawee" />
        </ImageContainer>
      </HomeContainer>
      <DataSection>
        <h1>Dados importantes que nos deixam triste</h1>
        <p>Quanto maior os números mais animais em situação de risco e abandono.</p>

        <div>
          <div>
            <img src={dataMockupImg} alt="Data" />
            <h1>+ 55</h1>
            <p>Pequena Descrição</p>
          </div>
          <div>
            <img src={dataMockupImg} alt="Data" />
            <h1>+ 15,8%</h1>
            <p>Pequena Descrição</p>
          </div>
          <div>
            <img src={dataMockupImg} alt="Data" />
            <h1>3 anos</h1>
            <p>Pequena Descrição</p>
          </div>
        </div>
      </DataSection>
      <FeatureSection>
        <h1>Veja o que a Pawee Space pode oferecer as Ong’s e usuários. </h1>
        <p>Para aproveitar ainda mais, faça parte dessa rede.</p>
        <button type="button">Fazer Parte</button>

        <div>
          <div>
            <img src={dataMockupImg} alt="Data" />
            <h1>Mural</h1>
            <p>Breve descrição da Funcionalidade.</p>
          </div>
          <div>
            <img src={dataMockupImg} alt="Data" />
            <h1>Mural</h1>
            <p>Breve descrição da Funcionalidade.</p>
          </div>
          <div>
            <img src={dataMockupImg} alt="Data" />
            <h1>Mural</h1>
            <p>Breve descrição da Funcionalidade.</p>
          </div>
        </div>
      </FeatureSection>
      <FaqSection>
        <h1>Perguntas Frequentes</h1>
        <p>Tire alguma dúvidas com o nosso FAQ.</p>

        {mock.map((question) => (
          <Question key={question.id}>
            <a href={`https://pawee.space/faq/${question.id}`}>{question.message}</a>
          </Question>
        ))}
      </FaqSection>
      <Footer>
        <button type="button" onClick={topFunction}>
          <img src={logoAlphaImg} alt="Pawee" />
        </button>

        <a href="https://pawee.space/">Sobre</a>
        <a href="https://pawee.space/">Contato</a>
        <div>
          <a
            href="https://facebook.com/paweespace"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={facebookImg} alt="Facebook" />
          </a>
          <a
            href="https://instagram.com/PaweeSpace/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={twitterImg} alt="Instagram" />
          </a>
          <a
            href="https://github.com/Pawee-Space/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={githubImg} alt="Github" />
          </a>
        </div>
        <span>copyrigth 2020 © Pawee.Space</span>
      </Footer>
    </>
  );
};

export default Home;
