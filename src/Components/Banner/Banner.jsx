

const Banner = () => {
    return (
        <div>
            <div className=" relative mb-12">
                <img className="h-[70vh] w-full bg-white opacity-10" src={"https://i.ibb.co/9c4d31W/depositphotos-104272164-stock-photo-human-hands-raising-up.webp"} alt="" />

                <div className="absolute md:top-36 lg:top-44 top-28 md:left-44 lg:left-72 left-10 ">
                    <h2 className="text-5xl font-bold mb-7">I Grow By Helping People In Need</h2>
                    <div className="text-center">
                        <input className="p-3 focus: border-dotted border-2" type="text" placeholder="Search here...." />
                        <button className="bg-red-600 text-white p-3">Search</button>
                    </div>
                </div>
                
            </div>


        </div>
    );
};

export default Banner;