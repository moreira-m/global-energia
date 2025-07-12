import React from 'react';
import Placeholder from './../assets/placeholders-images/Horizontal-Placeholder-Image.jpg';


export default function Projects() {
    const aboutUs = {
        aboutTitle: 'Nossos',
        aboutTitle2: 'Projetos'
    }

    const projetos = {
        title: 'Projetos em Destaque',
        image1: Placeholder,
        image2: Placeholder,
        buttons: [{ buttonText: 'Ver todos os projetos', buttonUrl: '/projetos' }],
    };

    return (
        <section className='mt-auto flex flex-col gap-24'>
            <div className="flex flex-col md:flex-row items-center justify-center max-w-[1024px] mx-auto px-4 gap-16 md:gap-20 text-center md:text-left pt-20">
                <div className="relative w-fit">
                    <span className="block bg-[#0B599B] text-white px-6 py-2 text-[46px] font-museo-sans-rounded leading-none relative left-[-10px]">
                        {aboutUs.aboutTitle.toUpperCase()}
                    </span>
                    <span className="block bg-[#FFBC27] text-[#0B599B] px-6 py-2 text-[46px] font-museo-sans-rounded leading-none relative left-[40px] mt-2">
                        {aboutUs.aboutTitle2.toUpperCase()}
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-8 md:flex-row md:px-8 md:max-w-[960px] md:mx-auto my-12">
                {[projetos.image1, projetos.image2].map((img) => (
                    <img
                        key={img}
                        src={img}
                        alt=""
                        className="w-[80%] md:w-[45%] rounded-lg transition-transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg"
                    />
                ))}
            </div>
        </section>
    );
}