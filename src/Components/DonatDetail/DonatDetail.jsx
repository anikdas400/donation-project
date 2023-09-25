
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savemostDonation } from "../Utility/localStorage";


const DonatDetail = () => {
    const dotates =useLoaderData() 
    const {id} =useParams()
    const idInt = parseInt(id)
    const donate =dotates.find(donate=>donate.id === idInt)
    const handleDonate =()=>{
        savemostDonation(idInt)

        toast("You have successfully danate");
    }
    return (
        <div>
            
            <div>
                <div className="relative ">
                    <img className="w-full h-[550px]" src={donate.picture} alt="" />
                    <div className="absolute -mt-20 ml-10  ">
                    <button onClick={handleDonate} className=" text-xl text-white p-3 rounded-lg " style={{backgroundColor:donate.text_color}}>Donate $ <span>{donate.price}</span></button>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl mt-3 mb-3 font-bold">{donate.title}</h2>
                    <p>{donate.description}</p>
                </div>
            </div>
            <ToastContainer />
            
        </div>
    );
};

export default DonatDetail;