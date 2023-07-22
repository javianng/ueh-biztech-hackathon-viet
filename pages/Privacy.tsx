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
                    Privacy Policy
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
                    At Monarchs, we are committed to safeguarding the privacy and security of our users' personal information. This Privacy Policy outlines how we collect, use, and protect your data when you access our website and use our services. By using Monarchs, you consent to the practices described in this policy. If you do not agree with any aspect of this Privacy Policy, please do not use our services.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    1. Information We Collect:
                </h2>
                <span>
                    We may collect two types of information from our users:
                </span>
                <br />
                <br />
                <span>
                    a. Personal Information: This includes information provided during account registration, such as your name, email address, contact details, and payment information.
                </span>
                <br />
                <span>
                    b. Usage Information: We automatically collect data related to your interactions with our website and services, including IP addresses, device information, and browsing activity.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    2. How We Use Your Information:
                </h2>
                <span>
                    We use the information we collect for the following purposes:
                </span>
                <br />
                <br />
                <span>
                    a. To provide and improve our services, including connecting farmers with drone operators and facilitating transactions.
                </span>
                <br />
                <span>
                    b. To communicate with you regarding your account, service updates, and promotional offers.
                </span>
                <br />
                <span>
                    c. To personalize your experience on our platform and optimize our website's functionality.
                </span>
                <br />
                <span>
                    d. To analyze user behavior and preferences to enhance our services and website performance.
                </span>
                <br />
                <span>
                    e. To comply with legal obligations and enforce our Terms and Conditions.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    3. Data Sharing and Disclosure:
                </h2>
                <br />
                <span>
                    a. We may share your information with drone operators and farmers as necessary to facilitate service requests and transactions.
                </span>
                <br />
                <span>
                    b. We may share data with service providers, business partners, or third-party contractors who help us operate, improve, or promote our platform.
                </span>
                <br />
                <span>
                    c. Monarchs will not sell, trade, or rent your personal information to third parties for marketing purposes without your explicit consent.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    4. Data Security:
                </h2>
                <span>
                    We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet can be entirely secure, and we cannot guarantee the absolute security of your information.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    5. Cookies and Tracking Technologies:
                </h2>
                <span>
                    We use cookies and similar tracking technologies to collect usage information and enhance user experience. You can manage your cookie preferences through your browser settings.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    6. Third-Party Links:
                </h2>
                <span>
                    Our website may contain links to third-party websites or services. Please note that this Privacy Policy only applies to Monarchs. We have no control over the privacy practices of third parties, and you should review their respective policies.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    7. Children's Privacy:
                </h2>
                <span>
                    Monarchs' services are not intended for individuals under the age of 18. We do not knowingly collect or maintain personal information from children.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    8. Your Rights:
                </h2>
                <span>
                    You have the right to access, update, correct, and delete your personal information. If you wish to exercise these rights or have any concerns about your data, please contact us using the information provided below.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    9. Changes to this Privacy Policy:
                </h2>
                <span>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will post any revisions on this page, and the updated Privacy Policy will be effective upon posting.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    10. Contact Us
                </h2>
                <span>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at monarchs@gmail.com.
                </span>
                <span >
                    This Privacy Policy was last updated on 22 July 2023.
                </span>
            </div>
        </div>
    )
}

export default function Privacy() {

    return (
        <ClientOnly>
            <Hero />
            <Body />
            <Footer />
        </ClientOnly>
    )
}
