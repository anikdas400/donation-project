

const Favourite = ({ donate }) => {
    const { id, picture, category, title, card_bg_color, text_color, category_bg_color,price } = donate
    return (
        <div style={{backgroundColor:card_bg_color}} className="card card-side shadow-xl">
            <figure><img src={picture} /></figure>
            <div className="card-body">
            <h2><span className="p-2 font-semibold rounded-lg text-lg" style={{backgroundColor:category_bg_color,color:text_color}}>{category}</span></h2>
            <p className="text-lg font-bold">{title}</p>
            <h3 className="text-lg font-semibold" style={{color:text_color}}>${price}</h3>
                <div className="card-actions">
                    <button style={{backgroundColor:text_color}} className="btn text-white">View Details</button>
                </div>
            </div>
            
        </div>
    );
};

export default Favourite;