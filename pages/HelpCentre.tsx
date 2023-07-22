import { Nunito } from 'next/font/google'

import '@/app/globals.css';
import ClientOnly from '@/app/components/ClientOnly';
import Footer from '@/app/components/Footer';

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const font = Nunito({
    subsets: ['latin'],
});

function Hero() {
    return (
        <div className="bg-brand-300 w-full h-fit py-32">
            <div className='py-8 px-12'>
                <h1 className='text-5xl font-bold text-white tracking-wide'>
                    Hello!
                    <br />
                    How can we help you?
                </h1>
                <div className="pt-4 relative mx-auto text-gray-600">
                    <input
                        className="border-2 border-brand-100 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search" />
                    <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                    </button>
                </div>
            </div>
        </div>
    )
}

const DETAILS = [
    {
        question: "What is Monarchs?",
        answer: "Monarchs is a cutting-edge startup that has revolutionized the agriculture industry with its innovative platform, which operates on a concept similar to Airbnb but specifically tailored for agriculture drones. As the first-of-its-kind service, Monarchs brings together drone operators and farmers in a seamless digital marketplace, providing an efficient and cost-effective solution for aerial crop monitoring and precision agriculture. Farmers can easily access a wide array of certified and experienced drone pilots, equipped with state-of-the-art equipment, to carry out essential tasks such as crop scouting, pest detection, and crop health assessment. Through Monarchs' user-friendly interface, farmers can effortlessly schedule drone flights, track progress, and receive comprehensive data and analysis to optimize their farming practices. By embracing this groundbreaking technology, Monarchs is empowering farmers to make data-driven decisions, increase yields, and reduce environmental impact, ultimately leading to a more sustainable and productive future for agriculture.",
    },
    {
        question: "How do I sign up and start renting on Monarchs?",
        answer: "Log onto Monarchs.com and click 'Sign up'. Follow the steps to sign up as a user. After sign-up is completed, you can immediately start renting your preferred drone.",
    },
    {
        question: "Are there any membership fees to join Monarchs?",
        answer: "There are no charges to users. We take some commission from each purchase to improve our system and provide warantty services.",
    },
    {
        question: "How can I be assured of good quality equipment from Monarchs?",
        answer: "All equipment listed on Monarchs is of good quality because: 1. All Partner sign-up requests will be individually vetted and approved by Monarchs Team based on their background and qualifications. 2. All equipment listed by Partners will be individually reviewed by the Monarchs Team before being published to ensure accurate information and acceptable equipment age. Otherwise, we will reject the equipment listing. 3. If the equipment is delivered not according to specification and is not usable, the full amount will be refunded to you or we will replace it with equivalent equipment. Also, you will be presented with all the information when you search for your equipment. This includes the brand, model, equipment pictures, equipment specifications, and manufacturing year. This will help you make better decisions about the right equipment.",
    },
]

type DisclosureCardProps = {
    question: string;
    answer: string;
};

function DisclosureCard({ question, answer }: DisclosureCardProps) {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-brand-50 px-4 py-5 text-left font-medium text-brand-300 hover:bg-brand-50 focus:outline-none focus-visible:ring focus-visible:ring-brand-300 focus-visible:ring-opacity-75">
                        <span>{question}</span>
                        <ChevronUpIcon
                            className={`${open ? 'rotate-180 transform' : ''
                                } h-5 w-5 text-brand-100`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text text-gray-500">
                        {answer}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

function Body() {
    return (
        <div className="pb-36">
            <div className="w-full px-4 pt-6">
                <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-2 space-y-4">
                    {DETAILS.map((detail, i) => (
                        <DisclosureCard
                            key={i}
                            question={detail.question}
                            answer={detail.answer} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function HelpCentre() {
    return (
        <ClientOnly>
            <Hero />
            <Body />
            <Footer />
        </ClientOnly>
    )
}