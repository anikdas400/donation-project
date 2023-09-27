import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-32">
            <h2 className="text-3xl mb-10">Oops!!!</h2>
            <h3 className="text-5xl mt-3 mb-10 font-bold"><span className="text-red-600">404 </span>Not Found </h3>
            <Link to='/'><button className="btn bg-gray-500 font-bold text-white hover:text-green-600">Go Back Home</button></Link>
            
        </div>
    );
};

export default ErrorPage;