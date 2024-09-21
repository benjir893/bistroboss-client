import moment from 'moment';
import SectionTitle from "./SectionTitle";
import featuredpic from '../../assets/home/featured.jpg';
import './feature.css';

const Featured = () => {
    return (
        <div className='featureitem bg-fixed my-10 p-4'>
            <SectionTitle
            subheading={"---check it----"} heading={"featured item"}></SectionTitle>
            <div className="md:flex flex-row justify-center items-center space-x-5 p-10 bg-slate-600 opacity-80">
                <img className='ml-60 w-64 h-64 rounded-lg' src={featuredpic} alt="" />
                <div className="text-white">
                    <p>{moment().format('MMMM DD, YYYY')}</p>
                    <h1 className='uppercase font-robotocondence font-semibold text-lg '>where can i get some</h1>
                    <p className='w-1/2 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora omnis vitae facilis, provident atque laudantium nostrum pariatur maiores temporibus ea earum culpa magni quis recusandae sint, velit accusamus aliquid quam at.</p>
                    <button className="btn btn-secondary border-0 border-b-2 border-white bg-transparent hover:bg-lime-600">Secondary</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;