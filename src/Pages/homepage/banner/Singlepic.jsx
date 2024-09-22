
import './singlepie.css'

const Singlepic = ({header, paragraph}) => {
    return (
        <div className='singlepicbg bg-fixed text-center p-5' >
            <div className="text-center mx-auto w-1/2 p-10 bg-white rounded-lg">

            <h1 className='text-center text-2xl text-blue-900 font-semibold font-robotocondence mt-5 uppercase'>{header}</h1>
            <p className=''>{paragraph}</p>
            </div>

        </div>
    );
};

export default Singlepic;