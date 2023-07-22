import { Nunito } from 'next/font/google'

import '@/app/globals.css';
import ClientOnly from '@/app/components/ClientOnly';
import Footer from '@/app/components/Footer';

const font = Nunito({
    subsets: ['latin'],
});

function Hero() {
    return (
        <div className="bg-brand-300 w-full h-fit py-32">
            <div className='py-8 px-12'>
                <h1 className='text-5xl font-bold text-white tracking-wide'>
                    Terms and Conditions
                </h1>
            </div>
        </div>
    )
}

function Body() {
    return (
        <div className="pb-24 sm:pb-48 pt-8">
            <div className="w-full px-8 sm:px-24 pt-6 space-y-9">
                <span>
                    Welcome to Monarchs! These terms and conditions ("Terms") govern your use of our website and services provided by Monarchs, a platform that connects agriculture drone owners with farmers. By accessing or using our website and services, you agree to be bound by these Terms. Please read them carefully.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    1. User Eligibility
                </h2>
                <span>
                    To use our services, you must be at least 18 years old and capable of forming a legally binding contract. By using Monarchs, you represent and warrant that you meet these eligibility requirements.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    2. User Accounts
                </h2>
                <span>
                    Creating a user account is required to access our services fully. You are responsible for maintaining the confidentiality of your account credentials and any activities that occur under your account. Please notify us immediately if you suspect any unauthorized use of your account.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    3. Drone Operator Registration
                </h2>
                <span>
                    Drone operators must undergo a thorough registration process, including providing accurate and up-to-date information. Monarchs reserves the right to verify the validity of the submitted information and may decline or suspend registration at our discretion.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    4. Services and Transactions
                </h2>
                <span>
                    Monarchs facilitates the connection between drone operators and farmers. We do not operate or control the drones, and all services are provided by independent drone operators. Any transactions conducted through our platform are solely between the drone operator and the farmer. Monarchs is not a party to these transactions and disclaims any liability arising from them.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    5. Drone Operator Obligations
                </h2>
                <span>
                    Drone operators must comply with all applicable laws, regulations, and industry standards. They are responsible for maintaining their drone's proper functioning, including necessary licenses, permits, and insurance. Drone operators must also respect farmers' property and privacy rights while performing services.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    6. Farmer Obligations
                </h2>
                <span>
                    Farmers using our platform must ensure their requests comply with local regulations and obtain any necessary permissions for drone flights over their land. Farmers shall provide accurate information about the tasks they require the drone to perform.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    7. Content Guidelines:
                </h2>
                <span>
                    Users must not post offensive, harmful, or misleading content on our platform. Monarchs reserves the right to remove or modify any content that violates these guidelines.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    8. Payments and Fees
                </h2>
                <span>
                    Payments for drone services will be handled through our secure payment system. Monarchs may charge service fees for connecting farmers with drone operators. Any applicable fees and payment terms will be clearly communicated to users.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    9. Intellectual Property
                </h2>
                <span>
                    All content and intellectual property on the Monarchs website, including logos, text, graphics, and software, are the property of Monarchs or its licensors and are protected by copyright and other intellectual property laws. Users may not use, copy, or distribute any content without our express written permission.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    10. Limitation of Liability
                </h2>
                <span>
                    Monarchs shall not be liable for any damages arising from the use of our services or any actions taken by drone operators or farmers. We do not guarantee the quality of drone services or the accuracy of data collected. Users agree to use our platform at their own risk.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    11. Indemnity
                </h2>
                <span>
                    Users agree to indemnify and hold Monarchs, its affiliates, and their respective officers, directors, and employees harmless from any claims, damages, or liabilities arising out of their use of our services or violation of these Terms.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    12. Modifications and Termination
                </h2>
                <span>
                    Monarchs reserves the right to modify, suspend, or terminate the services or these Terms at any time, with or without notice.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    13. Governing Law and Jurisdiction
                </h2>
                <span>
                    These Terms are governed by and construed in accordance with the laws of the country, and any disputes shall be subject to the exclusive jurisdiction of the courts in the country.
                </span>
                <br />
                <br />
                <span >
                    By using Monarchs' website and services, you acknowledge that you have read, understood, and agreed to these Terms and conditions. If you do not agree to these Terms, you may not use our services.
                </span>
            </div>
        </div>
    )
}

export default function Term() {

    return (
        <ClientOnly>
            <Hero />
            <Body />
            <Footer />
        </ClientOnly>
    )
}
