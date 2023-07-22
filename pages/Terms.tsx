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
                    Điều khoản và điều kiện
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
                    Chào mừng đến với Monarchs! Những điều khoản và điều kiện ("Điều khoản") này điều chỉnh việc sử dụng trang web và dịch vụ của chúng tôi được cung cấp bởi Monarchs, một nền tảng kết nối các doanh nghiệp drone nông nghiệp với những người nông dân. Bằng cách truy cập hoặc sử dụng trang web và dịch vụ của chúng tôi, nếu bạn đồng ý tuân thủ những Điều khoản này. Vui lòng đọc kỹ chúng.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    1. Điều kiện sử dụng dịch vụ
                </h2>
                <span>
                    Để sử dụng dịch vụ của chúng tôi, bạn phải đủ 18 tuổi và có khả năng ký kết hợp đồng pháp lý. Bằng cách sử dụng Monarchs, bạn đại diện và bảo đảm rằng bạn đáp ứng những yêu cầu đủ điều kiện này.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    2. Tài khoản người dùng
                </h2>
                <span>
                    Việc tạo tài khoản người dùng là bắt buộc để truy cập đầy đủ vào dịch vụ của chúng tôi. Bạn có  trách nhiệm duy trì tính bảo mật của thông tin đăng nhập tài khoản của bạn và bất kỳ hoạt động nào xảy ra dưới tài khoản của bạn. Vui lòng thông báo cho chúng tôi ngay lập tức nếu bạn nghi ngờ bất kỳ việc sử dụng tài khoản của bạn không được ủy quyền.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    3. Đăng ký nhà điều khiển drone
                </h2>
                <span>
                    Những người điều khiển drone đã trải qua quá trình đăng ký chặt chẽ, bao gồm cung cấp thông tin chính xác và cập nhật. Monarchs có quyền xác minh tính hợp lệ của thông tin đã được đăng ký và có thể từ chối hoặc tạm ngừng đăng ký theo quyết định của chúng tôi.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    4. Dịch vụ và Giao dịch
                </h2>
                <span>
                    Monarchs tạo điều kiện cho kết nối giữa nhà điều khiển drone và người nông dân. Chúng tôi không vận hành hoặc kiểm soát các drone và tất cả các dịch vụ được cung cấp bởi các nhà điều khiển drone độc lập. Bất kỳ giao dịch nào được thực hiện thông qua nền tảng của chúng tôi đều chỉ liên quan giữa nhà điều khiển drone và người nông dân. Monarchs không phải là một bên trong các giao dịch này và từ chối bất kỳ trách nhiệm phát sinh từ chúng.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    5. Nghĩa vụ của doanh nghiệp sở hữu drone
                </h2>
                <span>
                    Những doanh nghiệp sở hữu drone phải tuân thủ tất cả các luật, quy định và tiêu chuẩn ngành nghề áp dụng. Họ chịu trách nhiệm duy trì chức năng của drone, bao gồm các giấy phép, giấy tờ cần thiết và bảo hiểm. Những doanh nghiệp sở hữu drone cũng phải tôn trọng quyền sở hữu tài sản và quyền riêng tư của người nông dân trong quá trình thực hiện dịch vụ.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    6. Nghĩa vụ của người nông dân
                </h2>
                <span>
                    Những người nông dân sử dụng nền tảng của chúng tôi phải đảm bảo yêu cầu của họ tuân thủ các quy định địa phương và có được bất kỳ phép phù hợp nào để chúng tôi bàn giao drone qua lô đất của họ. Người nông dân phải cung cấp thông tin chính xác về các nhiệm vụ mà họ yêu cầu drone thực hiện.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    7. Nội dung vi phạm
                </h2>
                <span>
                    Người dùng không được đăng nội dung xúc phạm, gây hại hoặc lừa đảo trên nền tảng của chúng tôi. Monarchs có quyền loại bỏ hoặc sửa đổi bất kỳ nội dung nào vi phạm các hướng dẫn này.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    8. Thanh toán và Phí
                </h2>
                <span>
                    Thanh toán cho các dịch vụ drone sẽ được xử lý thông qua hệ thống thanh toán an toàn của chúng tôi. Monarchs có thể tính phí dịch vụ cho việc kết nối người nông dân với nhà điều khiển drone. Bất kỳ khoản phí nào được áp dụng và các điều khoản thanh toán sẽ được thông báo rõ ràng cho người dùng.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    9. Sở hữu trí tuệ
                </h2>
                <span>
                    Tất cả nội dung và tài sản trí tuệ trên trang web của Monarchs, bao gồm logo, văn bản, đồ họa và phần mềm, là tài sản của Monarchs hoặc các nhà cấp phép và được bảo vệ bởi luật bản quyền và các luật sở hữu trí tuệ khác. Người dùng không được sử dụng, sao chép hoặc phân phối bất kỳ nội dung nào mà không có sự cho phép bằng văn bản của chúng tôi.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    10. Giới hạn trách nhiệm:
                </h2>
                <span>
                    Monarchs sẽ không chịu trách nhiệm cho bất kỳ thiệt hại nào phát sinh từ việc sử dụng dịch vụ của chúng tôi hoặc bất kỳ hành động nào của nhà điều khiển drone hay người nông dân. Chúng tôi không đảm bảo chất lượng các dịch vụ drone hoặc độ chính xác của dữ liệu được thu thập. Người dùng đồng ý sử dụng nền tảng của chúng tôi trên quyền riêng của họ.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    11. Giải quyết bồi thường
                </h2>
                <span>
                    Người dùng đồng ý đền bù và bảo vệ Monarchs, các công ty liên kết của chúng tôi và các sĩ quan, giám đốc và nhân viên tương ứng khỏi bất kỳ khiếu nại, thiệt hại hoặc trách nhiệm nào phát sinh từ việc sử dụng dịch vụ của chúng tôi hoặc vi phạm các Điều khoản này.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    12. Sửa đổi và Chấm dứt hợp đồng/dịch vụ
                </h2>
                <span>
                    Monarchs có quyền sửa đổi, tạm ngừng hoặc chấm dứt dịch vụ hoặc các Điều khoản này vào bất kỳ thời điểm nào, có hoặc không có thông báo.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    13. Luật điều hành và Thẩm quyền
                </h2>
                <span>
                    Các Điều khoản này được quy định theo luật pháp của [Thẩm quyền], và bất kỳ tranh chấp nào sẽ phải tuân thủ thẩm quyền độc quyền của các tòa án tại [Thẩm quyền].
                </span>
                <br />
                <br />
                <span >
                    Bằng việc sử dụng trang web và dịch vụ của Monarchs. Nếu bạn không đồng ý với các Điều khoản này, bạn không thể sử dụng dịch vụ của chúng tôi.
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
