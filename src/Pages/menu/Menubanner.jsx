import { Parallax } from 'react-parallax';

const Menubanner = ({ img, heading, paragraph }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="pic"
            strength={-200}
        >
            <div
                className="hero min-h-96"
                // style={{
                //     backgroundImage: `url(${img})`,
                // }}
                >
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md bg-black bg-opacity-30 p-4 rounded-xl">
                        <h1 className="mb-5 text-5xl font-bold uppercase font-robotocondence">{heading}</h1>
                        <p className="mb-5">{paragraph}</p>

                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Menubanner;