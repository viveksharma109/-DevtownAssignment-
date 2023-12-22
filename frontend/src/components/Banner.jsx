import Mobile from '../assets/images/Mobile.png'
import Button from './Elements/Button'
export const Banner = () => {
    return (
        <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between my-7">
            <div className="banner-deescription  w-full md:w-1/2 p-3">
                <h2 className='mb-1 text-3xl font-bold text-white' style={{marginTop: "100px"}}>
                    Best Services
                </h2>
                <p className='font-semibold xx-l text-lg text-red-600 py-3'>
                25% Off !!!
                </p>
                <div className='btn-container'>
                    <Button >Order Now</Button>
                    {/* <a href='/menu' className='text-yellow-400 hower:text-yellow-500 font-bold text-decoration-line px-3'>
                        See Menu
                    </a> */}
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
                <img src={Mobile} alt='mobile' className='max-h-95 w-50 h-50' />
            </div>
        </div>
    )
}