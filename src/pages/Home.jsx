import React, { useState } from 'react';
import Placeholder from './../assets/placeholders-images/Horizontal-Placeholder-Image.jpg';

export default function HomePage() {
  const teaser = {
    homeTitle: 'Energia limpa para um futuro melhor',
    teaserBackground: Placeholder,
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
  const toggleFaq = (i) => setOpenFaqIndex(openFaqIndex === i ? null : i);

  return (
    <>
      <section className="relative pb-5">
        <img
          src={teaser.teaserBackground}
          alt=""
          className="absolute inset-0 w-full h-full object-cover aspect-[3/2]"
        />

        <div className="relative z-10 mx-auto flex flex-col items-center justify-center w-8/12 max-w-[480px]">
          <h1 className="mb-0 text-center font-roboto-condensed text-2xl lg:text-3xl text-white">
            {teaser.homeTitle}
          </h1>
          <img src={teaser.logo} alt="Logo" className="w-full mt-5 mb-5" />
        </div>

        <div className="relative z-10 mx-auto mt-5 flex flex-col justify-center gap-5 w-8/12 max-w-[400px] h-[190px] bg-white rounded-[31px]">
          {teaser.buttons.map(({ buttonText, buttonUrl }, idx) => (
            <a
              key={buttonText}
              href={buttonUrl}
              className={`flex items-center justify-center mx-auto px-4
                          ${idx === 0 ? 'bg-[#E07719]' : 'bg-[#0B599B]'}
                          h-8 md:h-10 md:w-[280px] rounded-md
                          text-white font-roboto-condensed text-base md:text-lg
                          transition-transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg`}
            >
              {buttonText}
            </a>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8">
        <div className="mx-4 my-6 md:mx-auto max-w-[960px] bg-white rounded-lg p-6">
          <h2 className="font-roboto-condensed text-xl md:text-2xl text-[#0B599B] mb-4 md:text-left text-center">
            {sobreNos.title}
          </h2>
          <p className="font-roboto-condensed text-base md:text-lg text-black">
            {sobreNos.description}
          </p>
        </div>
      </section>

      <section className="bg-[#0B599B]">
        <div className="flex flex-col gap-2 px-4 pt-10 pb-10">
          <h2 className="font-roboto-condensed text-xl md:text-2xl text-white text-center mb-9">
            {projetos.title}
          </h2>

          <div className="flex flex-col items-center gap-8 md:flex-row md:px-8 md:max-w-[960px] md:mx-auto">
            {[projetos.image1, projetos.image2].map((img) => (
              <img
                key={img}
                src={img}
                alt=""
                className="w-1/2 md:w-1/2 rounded-lg transition-transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg"
              />
            ))}
          </div>

          {projetos.buttons.map(({ buttonText, buttonUrl }) => (
            <a
              key={buttonText}
              href={buttonUrl}
              className="mt-5 mx-auto px-4 h-8 md:h-10 md:w-[280px] flex items-center justify-center
                         bg-[#E07719] rounded-md text-white font-roboto-condensed
                         transition-transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {buttonText}
            </a>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 py-10 max-w-[960px] mx-auto">
        <h2 className="font-roboto-condensed text-xl md:text-2xl text-[#0B599B] mb-5">
          {faq.title}
        </h2>

        {faq.listOfFaq.map(({ question, answer }, idx) => (
          <div
            key={question}
            className="mb-4 rounded-lg bg-[#FFBC27] overflow-hidden"
          >
            <button
              onClick={() => toggleFaq(idx)}
              className="w-full text-left pl-4 py-2 font-roboto-condensed text-base md:text-lg text-white
                         hover:text-[#0B599B] transition-colors"
            >
              {question}
            </button>

            {openFaqIndex === idx && (
              <div className="bg-white pl-4 py-2 font-roboto-condensed text-base md:text-lg text-black">
                {answer}
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
