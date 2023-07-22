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
                    Chính sách bảo mật
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
                    Tại Monarchs, chúng tôi cam kết bảo vệ sự riêng tư và an ninh thông tin cá nhân của người dùng. Chính sách bảo mật này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn khi bạn truy cập vào trang web và sử dụng dịch vụ của chúng tôi.Sử dụng Monarchs đồng nghĩa với việc bạn cần đồng thuận với các thông lệ được miêu tả trong chính sách này. Nếu bạn không đồng ý với bất kỳ khía cạnh nào của Chính sách bảo mật này, vui lòng không sử dụng dịch vụ của chúng tôi.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    1. Thông tin chúng tôi thu thập
                </h2>
                <span>
                    Chúng tôi có thể thu thập hai loại thông tin từ người dùng của mình:
                </span>
                <br />
                <br />
                <span>
                    a. Thông tin cá nhân: Bao gồm thông tin được cung cấp trong quá trình đăng ký tài khoản, như tên, địa chỉ email, thông tin liên hệ và thông tin thanh toán.
                </span>
                <br />
                <span>
                    b. Thông tin sử dụng: Chúng tôi tự động thu thập dữ liệu liên quan đến tương tác của bạn trên trang web và dịch vụ của chúng tôi, bao gồm địa chỉ IP, thông tin thiết bị và hoạt động duyệt web.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    2. Chúng tôi sử dụng thông tin của bạn như thế nào
                </h2>
                <span>
                    Chúng tôi sử dụng thông tin chúng tôi thu thập cho các mục đích sau:
                </span>
                <br />
                <br />
                <span>
                    a. Cung cấp và cải tiến dịch vụ của chúng tôi, bao gồm kết nối nông dân với nhà điều hành máy bay không người lái và xử lý giao dịch.
                </span>
                <br />
                <span>
                    b. Tương tác với bạn thông qua tài khoản của bạn, cập nhật dịch vụ và các chương trình khuyến mại.
                </span>
                <br />
                <span>
                    c. Cá nhân hóa trải nghiệm của bạn trên nền tảng của chúng tôi và tối ưu hóa tính năng của trang web của chúng tôi.
                </span>
                <br />
                <span>
                    d. Phân tích hành vi và nhu cầu của người dùng để nâng cao dịch vụ và hiệu suất trang web của chúng tôi.
                </span>
                <br />
                <span>
                    e. Tuân thủ các nghĩa vụ pháp lý và thực thi Điều khoản và Điều kiện của chúng tôi.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    3. Chia sẻ và tiết lộ dữ liệu
                </h2>
                <br />
                <span>
                    a. Chúng tôi có thể chia sẻ thông tin của bạn với nhà điều hành máy bay điều khiển từ xa và những người nông dân cần đến chúng để hỗ trợ yêu cầu dịch vụ và giao dịch.
                </span>
                <br />
                <span>
                    b. Chúng tôi có thể chia sẻ dữ liệu với các nhà cung cấp dịch vụ, đối tác kinh doanh hoặc nhà thầu bên thứ ba giúp chúng tôi vận hành, cải tiến hoặc quảng cáo nền tảng của chúng tôi.
                </span>
                <br />
                <span>
                    c. Monarchs sẽ không bán, giao dịch hoặc cho thuê thông tin cá nhân của bạn cho bên thứ ba để tiếp thị mà không có sự đồng ý rõ ràng của bạn.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    4. Bảo mật dữ liệu
                </h2>
                <span>
                    Chúng tôi triển khai các biện pháp bảo mật tiêu chuẩn ngành để bảo vệ dữ liệu của bạn khỏi việc truy cập, thay đổi, tiết lộ hoặc phá rối trái phép. Tuy nhiên, không có dữ liệu nào qua Internet là hoàn toàn an toàn, và chúng tôi không thể đảm bảo tuyệt đối về an ninh thông tin của bạn.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    5. Cookies và Công nghệ theo dõi
                </h2>
                <span>
                    Chúng tôi sử dụng cookies và các công nghệ theo dõi tương tự để thu thập thông tin về cách sử dụng và nâng cao trải nghiệm người dùng. Bạn có thể chủ động thay đổi cookies của mình thông qua cài đặt trình duyệt của bạn.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    6. Liên kết đến bên thứ ba
                </h2>
                <span>
                    Trang web của chúng tôi có thể chứa các liên kết đến các trang web hoặc dịch vụ của bên thứ ba. Vui lòng lưu ý rằng Chính sách bảo mật này chỉ áp dụng cho Monarchs. Chúng tôi không kiểm soát các thực tiễn bảo mật của bên thứ ba, và bạn nên xem xét các chính sách riêng của họ.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    7. Chính sách bảo mật đối với trẻ em
                </h2>
                <span>
                    Dịch vụ của Monarchs không dành cho cá nhân dưới 18 tuổi. Chúng tôi không có ý định thu thập hoặc lưu trữ thông tin cá nhân của trẻ em.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    8. Quyền của khách hàng
                </h2>
                <span>
                    Bạn có quyền truy cập, cập nhật, sửa đổi và xóa thông tin cá nhân của mình. Nếu bạn muốn thực hiện những quyền này hoặc có bất kỳ lo ngại nào về dữ liệu của bạn, vui lòng liên hệ với chúng tôi bằng thông tin được cung cấp bên dưới.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    9. Thay đổi Chính sách Bảo mật
                </h2>
                <span>
                    Chúng tôi có thể cập nhật Chính sách Bảo mật này từ thời gian này đến thời gian khác để phản ánh các thay đổi trong thực tiễn hoạt động hoặc vì lý do pháp lý, hoạt động hoặc quy định. Bất kỳ sửa đổi nào trên trang này cũng sẽ đều được chúng tôi đăng lên, và Chính sách Bảo mật đã được cập nhật sẽ có hiệu lực ngay sau khi đăng bài.
                </span>
                <h2 className='font-bold text-xl pb-2'>
                    10. Liên hệ với chúng tôi
                </h2>
                <span>
                    Nếu bạn có bất kỳ câu hỏi, quan ngại hoặc yêu cầu nào liên quan đến Chính sách Bảo mật này hoặc thực tiễn về dữ liệu của chúng tôi, vui lòng liên hệ với chúng tôi theo địa chỉ email / số điện thoại liên hệ monarchs@gmail.com.
                </span>
                <span >
                    Chính sách Bảo mật này đã được cập nhật lần cuối vào 22 July 2023.
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
