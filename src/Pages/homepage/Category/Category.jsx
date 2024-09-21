import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../components/SectionTitle';

const Category = () => {
    return (
        <div className="">
            <div>
                <SectionTitle
                subheading={"from 9:00am to 10:00am"} heading={"chef recommend"}></SectionTitle>
                {/* <p className='text-orange-400 bordder border-solid border-t-2 border-b-2 border-base-200 w-60 text-center mx-auto'>from 9:00am to 10:00am</p>
                <h className="text-blue-900 text-2xl font-robotocondence font-semibold text-center p-4 uppercase">chef recommend</h> */}
            </div>
            <div className="">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={2}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-10"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h1 className='text-base-300 text-center text-4xl font-robotocondence -mt-16 uppercase'>salad</h1></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="" />
                        <h1 className='text-base-300 text-center text-4xl font-robotocondence -mt-16 uppercase'>pizza</h1></SwiperSlide>
                    <SwiperSlide><img src={slide3} alt="" /><h1 className='text-base-300 text-center text-4xl font-robotocondence -mt-16 uppercase'>soup</h1></SwiperSlide>
                    <SwiperSlide><img src={slide4} alt="" /><h1 className='text-base-300 text-center text-4xl font-robotocondence -mt-16 uppercase'>cake</h1></SwiperSlide>
                    <SwiperSlide><img src={slide5} alt="" /><h1 className='text-base-300 text-center text-4xl font-robotocondence -mt-16 uppercase'>salad</h1></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Category;