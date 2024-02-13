import Products from "./components/Products/Products";

function App() {

  return (
    <> {/* wywołanie komponentu Reactowego zawierającego 1 element HTML i 1 komponenet reactowy*/}
      <h1 className="text-3xl font-bold"> Dynamic charts </h1>
      <Products/> {/* tworzy komponent Products */}
    </>
  )
}

export default App;


