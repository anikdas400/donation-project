
import { useLoaderData, useParams } from "react-router-dom";


const DonatDetail = () => {
    const dotates =useLoaderData() 
    const {id} =useParams()
    const idInt = parseInt(id)
    const donate =dotates.find(donate=>donate.id === idInt)
    return (
        <div>
            
            <div>
                <div className="relative ">
                    <img className="w-full h-[550px]" src={donate.picture} alt="" />
                    <div className="absolute -mt-20 ml-10  ">
                    <button className=" text-xl text-white p-3 rounded-lg " style={{backgroundColor:donate.text_color}}>Donate $ <span>{donate.price}</span></button>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl mt-3 mb-3 font-bold">{donate.title}</h2>
                    <p>{donate.description}</p>
                </div>
            </div>
            
        </div>
    );
};

export default DonatDetail;