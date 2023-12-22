import clsx from "clsx";
function getClassName({className}){
    return clsx(
        'text-white text-lg font-bold rounden-xl transection duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-50',
        className
    )
}
// const size = {
//     small:'px-4 py-3',
// }
const Button  = ({children}) =>{
    return (
        <button>
            {children}
        </button>
    )
}

export default Button;