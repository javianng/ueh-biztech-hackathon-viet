import Container from "@/app/components/Container";
import Logo from "./navbar/Logo";
import { getYear } from "date-fns";
import Link from "next/link";

function Copyright() {
    return (
        <p className="text-xs sm:text-sm">Copyright © {getYear(new Date())}</p>
    )
};

export default function Footer() {
    return (
        <div className="bg-brand-200 mt-20 bottom-0 w-full fixed z-10">
            <Container>
                <div className="flex flex-col sm:flex-row text-brand-50 py-3 sm:py-8 items-center justify-between">
                    <div className="sm:flex flex-col hidden">
                        <Logo />
                        <Copyright />
                    </div>
                    <div className="space-x-2">
                        <Link href="/" className="hover:underline">Nhà</Link>
                        <Link href="/ContactUs" className="hover:underline">Liên hệ với</Link>
                        <Link href="/HelpCentre" className="hover:underline">Trung tâm trợ giúp</Link>
                        <Link href="/Terms" className="hover:underline">Điều khoản</Link>
                        <Link href="/Privacy" className="hover:underline">Sự riêng tư</Link>
                    </div>
                </div>
            </Container >
        </div >
    )
}