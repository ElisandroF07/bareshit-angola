"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// import styles bundle
import 'swiper/css/bundle';

export default function OurServices() {
    return (
        <section className="w-full h-max bg-slate-100 py-[100px] flex flex-col items-center justify-center">
            <h1 className="text-slate-600 text-[2rem] font-[600] mb-[100px] rubik-bold">Nossos principais serviços</h1>
            <div className="flex items-center justify-center w-[80%] h-max">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                >
                    <SwiperSlide>
                        <div className="w-[400px] h-[450px] px-[20px] py-[40px] rounded-[20px] relative overflow-hidden flex items-end justify-start">
                            <div className="logistica absolute top-0 left-0 w-[400px] h-[450px] bg-cover" />
                            <div className='flex items-start justify-start gap-2'>
                                <h1 style={{lineHeight: '90px'}} className="rubik-bold text-slate-100 z-10 text-[5rem]">1</h1>
                                <p className='rubik-bold text-slate-100 z-10 text-[1.8rem]'>Procurement e logística</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[400px] h-[450px] px-[20px] py-[40px] rounded-[20px] relative overflow-hidden flex items-end justify-start">
                            <div className="limpeza absolute top-0 left-0 w-[400px] h-[450px]" />
                            <h1 className="rubik-bold text-slate-700 z-100">2</h1>
                            <div className='flex items-start justify-start gap-2'>
                                <h1 style={{lineHeight: '20px'}} className="rubik-bold text-slate-100 z-10 text-[5rem]">2</h1>
                                <p className='rubik-bold text-slate-100 z-10 text-[1.8rem]'>Limpeza</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[400px] h-[450px] px-[20px] py-[40px] rounded-[20px] relative overflow-hidden flex items-end justify-start">
                            <div className="alpinismo absolute top-0 left-0 w-[400px] h-[450px]" />
                            <div className='flex items-start justify-start gap-2'>
                                <h1 style={{lineHeight: '20px'}} className="rubik-bold text-slate-100 z-10 text-[5rem]">3</h1>
                                <p className='rubik-bold text-slate-100 z-10 text-[1.8rem]'>Alpinismo industrial</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[400px] h-[450px] px-[20px] py-[40px] rounded-[20px] relative overflow-hidden flex items-end justify-start">
                            <div className="papelaria absolute top-0 left-0 w-[400px] h-[450px]" />
                            <div className='flex items-start justify-start gap-2'>
                                <h1 style={{lineHeight: '90px'}} className="rubik-bold text-slate-100 z-10 text-[5rem]">4</h1>
                                <p className='rubik-bold text-slate-100 z-10 text-[1.8rem]'>Consumíveis e papelaria</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[400px] h-[450px] px-[20px] py-[40px] rounded-[20px] relative overflow-hidden flex items-end justify-start">
                            <div className="catering absolute top-0 left-0 w-[400px] h-[450px]" />
                            <div className='flex items-start justify-start gap-2'>
                                <h1 style={{lineHeight: '20px'}} className="rubik-bold text-slate-100 z-10 text-[5rem]">5</h1>
                                <p className='rubik-bold text-slate-100 z-10 text-[1.8rem]'>Catering</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[400px] h-[450px] px-[20px] py-[40px] rounded-[20px] relative overflow-hidden flex items-end justify-start">
                            <div className="guard absolute top-0 left-0 w-[400px] h-[450px]" />
                            <div className='flex items-start justify-start gap-2'>
                                <h1 style={{lineHeight: '90px'}} className="rubik-bold text-slate-100 z-10 text-[5rem]">6</h1>
                                <p className='rubik-bold text-slate-100 z-10 text-[1.8rem]'>Segurança privada <br /> e proteção</p>
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