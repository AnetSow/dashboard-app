import { useState, useEffect } from "react";
import { getAllProducts } from "../../api";
import Product from "../Product/Product";
import { ProductsBarchart } from "../BarCharts/ProductsBarchart";
import { ProductsDoughnutchart } from "../DoughnutCharts/ProductsDoughnutchart";

// komponent wykonujący metodę pobierania danych
const Products = () => { // komponenty z dużej litery

    // 1. Deklarujemy stan danych
    const [products, setProducts] = useState([]); // useState zwraca tablicę stanu i metodę, która ustawia ten stan. Poprzez "[]" inicjalizujemy stan jako pustą tablicę

    // 2. Pobieramy dane (po utworzeniu komponentu w App)
    useEffect(() => { // useEffect zawsze wywołujemy w komponencie. Hooki definiujemy na początku 
        gettingProducts();
    }, []); // tablica dependencji zabezpiecza przed wywoływaniem tej metody w kółko

    // 3. Wykonujemy zapytanie
    const gettingProducts = async () => { // metoda asynchroniczna wykonujaca request. met. asynchroniczna = bilecikowa ; synchroniczna = kolejkowa
        const response = await getAllProducts() // await - poczekaj na wynik funkcji
        // console.log(response.data.products);
        // response to obiekt, który można zdestrukturyzować czyli wyciągnąć klucze/properties:
        const { products } = response.data;
        console.log(products);
        setProducts(products);
    } 
    // title, price, rating, brand, category

    return (          
        <>
            <div style={{height:"60vh",position:"relative", marginBottom:"1%", padding:"1%"}}>
                <h2 className="text-xl font-italic"> Prices of all products </h2>      
                    <ProductsBarchart 
                        titles = {products.map(item => item.title)}
                        prices = {products.map(item => item.price)}
                    />
            </div>
            

            <div style={{height:"500px",position:"relative", marginBottom:"1%", padding:"1%"}}>
                <h2 className="text-xl font-italic"> Product categories </h2>  
                    <ProductsDoughnutchart 
                        categories = {products.map(item => item.category)}
                    />
            </div>


            {/* {products.map((item) => (
                <Product 
                    title = {item.title}
                    price = {item.price}
                    rating = {item.rating}
                    brand = {item.brand}
                    category = {item.category}
                />
            ))} */}
        </>
    )
};

export default Products;