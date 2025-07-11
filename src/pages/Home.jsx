import React, { useState } from 'react';

export default function HomePage() {
  const teaser = {
    homeTitle: 'Energia limpa para um futuro melhor',
    teaserBackground: '/assets/teaser-bg.jpg',
    logo: '/assets/teaser-logo.svg',
    buttons: [
      { buttonText: 'Conheça nossos projetos', buttonUrl: '#projetos' },
      { buttonText: 'Fale Conosco',            buttonUrl: '#contato'  },
    ],
  };

  const sobreNos = {
    title: 'Quem Somos',
    description:
      'Somos a Global Energia, especialistas em soluções fotovoltaicas que reduzem custos e impacto ambiental.',
  };

  const projetos = {
    title: 'Projetos em Destaque',
    image1: '/assets/project-1.jpg',
    image2: '/assets/project-2.jpg',
    buttons: [{ buttonText: 'Ver todos os projetos', buttonUrl: '/projetos' }],
  };

  const faq = {
    title: 'Perguntas Frequentes',
    listOfFaq: [
      {
        question: 'Quanto posso economizar na conta de luz?',
        answer:
          'A economia pode chegar a até 90 %, dependendo do seu perfil de consumo.',
      },
      {
        question: 'A manutenção dos painéis solares é cara?',
        answer:
          'Não. Normalmente basta a limpeza semestral dos módulos para manter a eficiência.',
      },
    ],
  };

  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const toggleFaq = (index) =>
    setOpenFaqIndex(openFaqIndex === index ? null : index);

  return (
    <>
      {/* Main Teaser Home */}
      <section className="container">
        <img
          src={teaser.teaserBackground}
          alt="Teaser Background"

        />
        <div className="container">
          <h1>{teaser.homeTitle}</h1>
          <img
            src={teaser.logo}
            alt="Logo"

          />
        </div>
        <div className="container">
          {teaser.buttons.map(({ buttonText, buttonUrl }) => (
            <div key={buttonText}>
              <a href={buttonUrl}>
                {buttonText}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="container">
        <div className="container">
          <h2>{sobreNos.title}</h2>
          <p>{sobreNos.description}</p>
        </div>
      </section>

      {/* Projects */}
      <section className="container">
        <div className="container">
          <h2>{projetos.title}</h2>
          <div>
            <img
              src={projetos.image1}
              alt="Project Image 1"
            />
            <img
              src={projetos.image2}
              alt="Project Image 2"
            />
          </div>
          {projetos.buttons.map(({ buttonText, buttonUrl }) => (
            <div key={buttonText}>
              <a href={buttonUrl}>
                {buttonText}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container">
        <h2>{faq.title}</h2>
        {faq.listOfFaq.map(({ question, answer }, index) => (
          <div key={question}>
            <div
              onClick={() => toggleFaq(index)}
              style={{ cursor: 'pointer', fontWeight: 'bold' }}
            >
              {question}
            </div>
            {openFaqIndex === index && (
              <div
                style={{ marginTop: '8px', paddingLeft: '16px' }}
              >
                {answer}
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
