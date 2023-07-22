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
                    Xin chào!
                    <br />
                    Làm thế nào chúng tôi có thể giúp bạn?
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
        question: "Giới thiệu về Monarchs?",
        answer: "Monarchs là một công ty khởi nghiệp tiên phong đã cách mạng hóa ngành nông nghiệp với nền tảng đột phá của mình, hoạt động dựa trên một khái niệm tương tự như Airbnb nhưng đặc biệt dành riêng cho máy bay không người lái trong nông nghiệp. Là dịch vụ đầu tiên theo phương pháp này, Monarchs kết hợp các doanh nghiệp sở hữu máy bay không người lái và các nhà nông trong một thị trường số thuận tiện, cung cấp giải pháp hiệu quả và tiết kiệm chi phí cho việc giám sát cây trồng từ trên cao và nông nghiệp chính xác. Nhà nông có thể dễ dàng truy cập vào một loạt các máy bay không người lái được chứng nhận và có kinh nghiệm, trang bị với thiết bị hiện đại, để thực hiện các nhiệm vụ quan trọng như kiểm tra cây trồng, phát hiện sâu bệnh và đánh giá sức khỏe cây trồng. Thông qua giao diện thân thiện với người dùng của Monarchs, nhà nông có thể dễ dàng lên lịch bay máy bay không người lái, theo dõi tiến độ và nhận thông tin và phân tích chi tiết để tối ưu hóa phương pháp trồng trọt của họ. Bằng cách tiếp nhận công nghệ đột phá này, Monarchs đang hỗ trợ nhà nông đưa ra các quyết định dựa trên dữ liệu, tăng năng suất và giảm tác động đến môi trường, điều này cuối cùng dẫn đến một tương lai bền vững và hiệu quả hơn cho nông nghiệp.",
    },
    {
        question: "Cách đăng ký và bắt đầu thuê trên Monarchs?",
        answer: "Đăng nhập vào trang Monarchs.com và nhấp vào 'Đăng ký'. Làm theo các bước để đăng ký tài khoản người dùng. Sau khi hoàn tất đăng ký, bạn có thể ngay lập tức bắt đầu thuê drone ưa thích của mình.",
    },
    {
        question: "Có phí đăng ký thành viên trên Monarchs không?",
        answer: "Chúng tôi không có bất kỳ chi phí nào cho người dùng. Chúng tôi thu một số tiền hoa hồng từ mỗi giao dịch để cải thiện hệ thống và cung cấp dịch vụ bảo hành.",
    },
    {
        question: "Làm thế nào để đảm bảo chất lượng thiết bị tốt từ Monarchs?",
        answer: "Tất cả các thiết bị được liệt kê trên Monarchs đều đảm bảo chất lượng tốt vì: 1. Mọi yêu cầu đăng ký đối tác sẽ được phê duyệt bởi đội ngũ Monarchs dựa trên nền tảng và trình độ của chúng tôi. 2. Tất cả các thiết bị được liệt kê bởi đối tác đều được xem xét bởi đội ngũ Monarchs trước khi được đưa vào dịch vụ để đảm bảo thông tin chính xác và tuổi thọ thiết bị được chấp nhận. Nếu không đạt yêu cầu này thì chúng tôi sẽ từ chối đăng ký thiết bị đó. 3. Nếu thiết bị được giao không đúng theo thông số kỹ thuật và không sử dụng được, toàn bộ số tiền sẽ được hoàn lại cho bạn hoặc chúng tôi sẽ thay thế nó bằng thiết bị tương đương. Bên cạnh đó, thông tin về thương hiệu, model, hình ảnh thiết bị, thông số kỹ thuật và năm sản xuất cũng sẽ được cung cấp cho bạn khi tìm kiếm thiết bị. Điều này sẽ giúp bạn đưa ra quyết định tốt hơn về thiết bị phù hợp với nhu cầu của mình.",
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