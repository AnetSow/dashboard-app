
const Product = (props) => {

    const { title, price, rating, brand, category } = props;
    
    return(
        <div className="flex">
            <p>{title}</p>
            <p>{price}</p>
            {/* <p>{rating}</p> */}
            {/* <p>{brand}</p> */}
            {/* <p>{category}</p> */}
        </div>

    )
}

export default Product;