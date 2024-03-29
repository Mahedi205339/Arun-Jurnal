import './title.css'
const Title = ({ headline, subHeadline }) => {
    return (
        <div>
            <div >
                <h1 className='title-heading text-center text-2xl md:text-3xl lg:text-5xl font-bold'>
                    {headline}
                </h1>
            </div>

            <p className='text-center text-neutral-700 my-4'>
                {subHeadline}
            </p>
        </div>
    );
};

export default Title;