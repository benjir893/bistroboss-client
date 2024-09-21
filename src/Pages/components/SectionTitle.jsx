

const SectionTitle = ({ subheading, heading }) => {
    return (
        <div className="my-10 text-center w-full">
            <p className='text-orange-400 border-solid border-t-2 border-b-2 border-base-200 w-60 text-center mx-auto'>{subheading}</p>
            <h className="text-blue-900 text-2xl font-robotocondence font-semibold text-center p-4 border-solid border-b-2 border-base-200 uppercase">{heading}</h>
        </div>
    );
};

export default SectionTitle;