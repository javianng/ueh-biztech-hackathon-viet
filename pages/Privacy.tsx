import { Nunito } from 'next/font/google'

import '@/app/globals.css';
import ClientOnly from '@/app/components/ClientOnly';
import Footer from '@/app/components/Footer';

const font = Nunito({
    subsets: ['latin'],
});

export default function Privacy() {

    return (
        <html lang="en">
            <body className={font.className}>
                <ClientOnly>
                    <Footer />
                </ClientOnly>
            </body>
        </html>
    )
}
