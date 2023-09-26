import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-32">
            <h2 className="text-4xl mb-10">Oops!!!</h2>
            <Link to='/'><button className="btn bg-gray-500 font-bold text-white hover:text-green-600">Go Back Home</button></Link>
            
        </div>
    );
};

export default ErrorPage;