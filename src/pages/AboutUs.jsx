import React from 'react';

export default function AboutUs() {
    const aboutUs = {
        aboutTitle: 'Sobre',
        aboutTitle2: 'Nós'
    }

    const AboutDescription = {
        AboutDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }

    return (
        <section className='mt-auto flex'>
            <div className="md:h-[82vh] flex flex-col md:flex-row items-center justify-center max-w-[1024px] mx-auto px-4 gap-16 md:gap-32 text-center md:text-left pt-6 md:p-0">
                <div className="relative w-fit">
                    <span className="block bg-[#0B599B] text-white px-6 py-2 text-[46px] font-museo-sans-rounded leading-none relative left-[-10px]">
                        {aboutUs.aboutTitle.toUpperCase()}
                    </span>
                    <span className="block bg-[#FFBC27] text-[#0B599B] px-6 py-2 text-[46px] font-museo-sans-rounded leading-none relative left-[40px] mt-2">
                        {aboutUs.aboutTitle2.toUpperCase()}
                    </span>
                </div>

                <p className="max-w-2xl font-gotham text-[24px] md:text-lg leading-relaxed">
                    {AboutDescription.AboutDescription}
                </p>
            </div>
        </section>
    );
}