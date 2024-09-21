import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

const Testimonials = () => {
    const[reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data =>{setReviews(data)})
    },[])
    return (
        <div className="my-10">
            <div className="">
                <SectionTitle
                    subheading={"----What our clients say----"}
                    heading={"testimonials"}></SectionTitle>
            </div>
            <div className="">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review =><SwiperSlide key={review._id} review ={review}>
                            <p className="w-2/3 mx-auto">{review.details}</p>
                            <p className="text-center text-2xl text-orange-400 font-robotocondence">{review.name}</p>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;