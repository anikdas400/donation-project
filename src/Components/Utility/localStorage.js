const getStoredDonation = ()=>{
    const storedDonation = localStorage.getItem('most-donation');
    if(storedDonation){
        return JSON.parse(storedDonation)
    }
    return [];
}

    const savemostDonation = id =>{
        const storedDonations = getStoredDonation()
        const exists = storedDonations.find(donatId=> donatId === id)
        if(!exists){
            storedDonations.push(id)
            localStorage.setItem('most-donation',JSON.stringify(storedDonations))
        }
    }

export {getStoredDonation,savemostDonation}