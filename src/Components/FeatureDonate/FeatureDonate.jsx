import { useEffect } from "react";
import { useState } from "react";
import Donate from "../Donate/Donate";


const FeatureDonate = () => {
    const [donates,setDonates]=useState([])
    
    useEffect(()=>{
        fetch('donation.json')
        .then(res =>res.json())
        .then(data=>setDonates(data))
    }
        ,[])
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-7 ">
            {
                donates.map(donate =><Donate key={donate.id} donate={donate}></Donate>)
            }
            {/* <div className={datalength===donates.length ? 'hidden':''}>
                <button className="bg-green-800 btn text-white" onClick={()=>setDatalength(donates.length)}>See All</button>
            </div> */}

            
        </div>
        // 
        
    );
};

export default FeatureDonate;