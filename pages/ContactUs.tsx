import { Nunito } from 'next/font/google'

import '@/app/globals.css';
import ClientOnly from '@/app/components/ClientOnly';
import Footer from '@/app/components/Footer';

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const font = Nunito({
    subsets: ['latin'],
});

function Hero() {
    return (
        <div className="bg-brand-300 w-full h-fit py-32">
            <div className='py-8 px-12'>
                <h1 className='text-5xl font-bold text-white tracking-wide'>
                    Cần giúp đỡ?
                </h1>
            </div>
        </div>
    )
}

const PROBLEMS = [
    { problem: '-' },
    { problem: 'Giao dịch của tôi' },
    { problem: 'Tài khoản của tôi' },
    { problem: 'Danh sách của tôi' },
    { problem: 'Công cụ trả tiền của người bán' },
    { problem: 'Trải nghiệm trò chuyện' },
    { problem: 'Trải nghiệm tìm kiếm' },
    { problem: 'Báo cáo người dùng hoặc danh sách' },
]

function Body() {
    const [selected, setSelected] = useState(PROBLEMS[0])
    return (
        <div className="pb-24 sm:pb-48 pt-8">
            <div className="w-full px-8 sm:px-24 pt-6 space-y-9">
                <h2 className='text-xl tracking-wide'>
                    Bạn cần giúp về?
                </h2>
                <div className=" w-full">
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-brand-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-100">
                                <span className="block truncate">{selected.problem}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {PROBLEMS.map((problem, id) => (
                                        <Listbox.Option
                                            key={id}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-brand-50 text-brand-300' : 'text-gray-900'
                                                }`
                                            }
                                            value={problem}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {problem.problem}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-200">
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                </div>

                <form>
                    <label className='text-xl tracking-wide'>
                        <div >
                            <span>
                                Nó nói về cái gì
                            </span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            className='w-full shadow-md border-1 rounded-lg my-4 h-9 pl-3 text-sm'
                            placeholder='Thêm chi tiết về vấn đề bạn đang gặp phải.' />
                    </label>
                    <label className='text-xl tracking-wide'>
                        <div >
                            <span>
                                Sự miêu tả
                            </span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            className='w-full shadow-md border-1 rounded-lg my-4 h-24 pl-3 text-sm'
                            placeholder='Thêm chi tiết về vấn đề bạn đang gặp phải.' />
                    </label>
                    <label className='text-xl tracking-wide'>
                        <div >
                            <span>
                                Quốc gia
                            </span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            className='w-full shadow-md border-1 rounded-lg my-4 h-9 pl-3 text-sm'
                            placeholder='Việt Nam' />
                    </label>
                    <label className='text-xl tracking-wide'>
                        <div >
                            <span>
                                Địa chỉ email của bạn*
                            </span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            className='w-full shadow-md border-1 rounded-lg my-4 h-9 pl-3 text-sm'
                            placeholder='example@gmail.com' />
                    </label>
                    <label
                        className='text-xl tracking-wide'
                    >
                        <div >
                            <span>
                                Tên người dùng Monarch*
                            </span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            className='w-full shadow-md border-1 rounded-lg my-4 h-9 pl-3 text-sm'
                            placeholder='tên người dùng ví dụ'
                        />
                    </label>

                    <input
                        type="submit"
                        value="Nộp"
                        className='mt-9 px-6 py-2 bg-brand-50 rounded-lg font-bold border-2 border-brand-300 hover:bg-brand-100 transition-all'
                    />
                </form>

            </div>
        </div>
    )
}

export default function ContactUs() {

    return (
        <ClientOnly>
            <Hero />
            <Body />
            <Footer />
        </ClientOnly>
    )
}
