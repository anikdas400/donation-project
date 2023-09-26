

const Banner = () => {
    return (
        <div>
            <div className=" relative mb-12  ">
                <img className="h-[70vh] w-full bg-white opacity-10" src="/src/assets/img/Donation.jpg" alt="" />

                <div className="absolute top-44 left-80">
                    <h2 className="text-4xl font-bold mb-7 text-center ">I Grow By Helping People In Need</h2>
                    <div className=" text-center">
                        <input className="p-3 focus: border-dotted border-2" type="text" placeholder="Search here...." />
                        <button className="bg-red-600 text-white p-3">Search</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;