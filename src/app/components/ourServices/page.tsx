"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// import styles bundle
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';

export default function OurServices() {

    const [slidesPerView, setSlidesPerView] = useState(0)

    useEffect(() => {
        if (window.outerWidth < 540){
            setSlidesPerView(2)
        }
        else {
            setSlidesPerView(3)
        }
    }, [])


    return (
        <section className="w-full h-max bg-slate-100 py-[50px] lg:py-[100px] flex flex-col items-center justify-center">
            <h1 className="text-slate-600 text-[1.2rem] lg:text-[2rem] font-[600]  rubik-bold">Outros serviços</h1>
            <p className='text-slate-600 max-w-[600px] mb-[50px] lg:mb-[100px] text-center mx-4 text-[0.8rem] lg:text-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi sit cumque nam excepturi. Corrupti rem deserunt porro iure quos ipsam eligendi, amet aut quasi quidem blanditiis dolore quibusdam maxime?</p>
            <div className="flex items-center justify-center w-[95%] sm:w-[80%] h-max">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={slidesPerView}
                    className='w-full'
                >
                    <SwiperSlide className='w-[33%]'>
                        <div className="w-[full] h-[450px] px-[20px] py-[40px] rounded-[20px] relative overflow-hidden flex items-end justify-start">
                            <div className="logistica absolute top-0 left-0 w-[500px] h-[450px] bg-cover" />
                            <div className='flex items-end justify-start gap-2'>
                                <p className="rubik-bold text-slate-100 z-10 text-[2rem] h-max lg:text-[5rem]">1</p>
                                <p className='rubik-bold text-slate-100 z-10 text-[16px] lg:mb-8 lg:text-[20px]'>Procurement e Logistica</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-[33%]'>
                        <div className="w-full h-[450px] px-[20px] py-[40px] rounded-[20px] relative overflow-hidden flex items-end justify-start">
                            <div className="limpeza absolute top-0 left-0 w-[600px] h-[450px]" />
                            <div className='flex items-end justify-start gap-2'>
                                <p className="rubik-bold text-slate-100 z-10 text-[2rem] lg:text-[5rem]">2</p>
                                <p className='rubik-bold text-slate-100 z-10 text-[16px] lg:mb-8 lg:text-[20px]'>Tanclean e Limpeza</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-[33%]'>
                        <div className="w-full h-[450px] px-[20px] py-[40px] rounded-[20px] relative overflow-hidden flex items-end justify-start">
                            <div className="alpinismo absolute top-0 left-0 w-[600px] h-[450px]" />
                            <div className='flex items-end justify-start gap-2'>
                                <p className="rubik-bold text-slate-100 z-10 text-[2rem] lg:text-[5rem]">3</p>
                                <p className='rubik-bold text-slate-100 z-10 text-[16px] lg:mb-8 lg:text-[20px]'>Alpinismo industrial</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-[33%]'>
                        <div className="w-full h-[450px] px-[20px] py-[40px] rounded-[20px] relative overflow-hidden flex items-end justify-start">
                            <div className="papelaria absolute top-0 left-0 w-[600px] h-[450px]" />
                            <div className='flex items-end justify-start gap-2'>
                                <p  className="rubik-bold text-slate-100 z-10 text-[2rem] lg:text-[5rem]">4</p>
                                <p className='rubik-bold text-slate-100 z-10 text-[16px] lg:mb-8 lg:text-[20px]'>Papelaria e Consumíveis</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-[33%]'>
                        <div className="w-full h-[450px] px-[20px] py-[40px] rounded-[20px] relative overflow-hidden flex items-end justify-start">
                            <div className="catering absolute top-0 left-0 w-[600px] h-[450px]" />
                            <div className='flex items-end justify-start gap-2'>
                                <p className="rubik-bold text-slate-100 z-10 text-[2rem] lg:text-[5rem]">5</p>
                                <p className='rubik-bold text-slate-100 z-10 text-[16px] lg:mb-8 lg:text-[20px]'>Catering e Baring</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-[33%]'>
                        <div className="w-full h-[450px] px-[20px] py-[40px] rounded-[20px] relative overflow-hidden flex items-end justify-start">
                            <div className="guard absolute top-0 left-0 w-[600px] h-[450px]" />
                            <div className='flex items-end justify-start gap-2'>
                                <p  className="rubik-bold text-slate-100 z-10 text-[2rem] lg:text-[5rem]">6</p>
                                <p className='rubik-bold text-slate-100 z-10 text-[16px] lg:mb-8 lg:text-[20px]'>Segurança privada</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* {servicesData.map((item, _index) => (
                    <div key={_index} className="w-[300px] h-[450px] px-[20px] py-[40px] rounded-lg relative overflow-hidden flex items-end justify-start">
                        <Image src={item.image} alt={item.title} className="absolute top-0 left-0 w-[300px] h-[450px]" />
                        <h1>{item.title}</h1>
                    </div>
                ))} */}
            </div>
        </section>
    )
}