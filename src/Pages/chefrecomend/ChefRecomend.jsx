import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import SectionTitle from "../components/SectionTitle";

const ChefRecomend = () => {
    const [recomends, setRecomends] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => { setRecomends(data) })
    }, [])
    return (
        <div>
            <SectionTitle subheading={'----should try'} heading={'chef recommends'}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    recomends.map(recomend => <SwiperSlide key={recomend._id} recomend={recomend}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={recomend.image}
                                    alt="image" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{recomend.name}</h2>
                                <p>{recomend.recipe}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary font-robotocondence font-semibold bg-lime-500 hover:bg-lime-300 uppercase">add to cart</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
                {/* <SwiperSlide>Slide 1</SwiperSlide> */}

            </Swiper>
        </div>
    );
};

export default ChefRecomend;