

const Donate = ({ donate }) => {
    const { id,picture,category,title,card_bg_color,text_color,category_bg_color } = donate
    return (
        <div className="card card-compact  shadow-xl" style={{backgroundColor:card_bg_color}}>
            <figure><img src={picture} alt="donates" /></figure>
            <div className="card-body">
                <h2><span className="p-2 font-semibold rounded-lg text-lg" style={{backgroundColor:category_bg_color,color:text_color}}>{category}</span></h2>
                <p className="text-lg font-bold" style={{color:text_color}}>{title}</p>
                
            </div>
        </div>
    );
};

export default Donate;