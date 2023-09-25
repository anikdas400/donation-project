import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/localStorage";


const Donation = () => {
    const donations = useLoaderData()
    const [donateAdd,setDonateAdd]=useState([])
    useEffect(()=>{
        const storedDonatrId = getStoredDonation()
        // if(donations.length > 0){
        //     const addDonates = donations.filter(addDonate=>storedDonatrId.includs(addDonate.id))

        //     setDonateAdd(addDonates)
        const addDonates =[]
        for(const id of storedDonatrId){
            const donate =donations.find(donate=>donate.id ===id)
            if(donate){
                addDonates.push(donate)
            }
        }
        setDonateAdd(addDonates)
        
        
        
    }
    ,[])
    return (
        <div>
            <h2 className="text-3xl">this is donation:{donateAdd.length}</h2>
            {
                donateAdd.map(donat => <span className="" key={donat.id}><div >
                    <div className="grid grid-cols-2"><img src={donat.picture} alt="" />
                    <div>
                        <h2>{donat.category}</h2>
                        <h3>{donat.title}</h3>
                        <p>${donat.price}</p>
                        <button>View Details</button>
                    </div>
                    </div>
                    
                    </div></span>)
            }
            
        </div>
    );
};

export default Donation;