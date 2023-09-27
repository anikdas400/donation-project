import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/localStorage";
import Favourite from "../Favorite/Favourite";


const Donation = () => {
    const donations = useLoaderData()
    const [donateAdd,setDonateAdd]=useState([])
    const [datalength,setDataLength]=useState(4)
    useEffect(()=>{
        const storedDonatrId = getStoredDonation()
        if(donations.length > 0){
        
        const addDonates =[]
        for(const id of storedDonatrId){
            const donate =donations.find(donate=>donate.id ===id)
            if(donate){
                addDonates.push(donate)
            }
        }
        setDonateAdd(addDonates)
    }
        
        
        
    }
    ,[])
    return (
        <div className="mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            
            {
                donateAdd.slice(0,datalength).map(donate=><Favourite key={donate.id} donate={donate}></Favourite>)
            }
            
        </div>
        <div className={datalength===donateAdd.length ? 'hidden':''}>
                <div className="text-center mt-3">
                <button className="bg-green-700 hover:text-green-700 btn text-white " onClick={()=>setDataLength(donateAdd.length)}>See All</button>
                </div>
            </div>

        </div>
    );
};

export default Donation;
