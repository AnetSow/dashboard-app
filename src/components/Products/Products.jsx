import { useState, useEffect } from "react";
import { getAllProducts } from "../../api";
import Product from "../Product/Product";
import { ProductsBarchart } from "../BarCharts/ProductsBarchart";

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
            <h2 className="text-xl font-bold"> moje produkty: </h2>

            <ProductsBarchart 
                titles = {products.map(item => item.title)}
                prices = {products.map(item => item.price)}
            />

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