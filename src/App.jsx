import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { fetchData } from "./api";
import modalData from "./modalData.jsx";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Basket from "./pages/Basket";
import About from "./pages/About";
import Header from "./components/Header/Header";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalData, setCurrentModalData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [basket, setBasket] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetchData()
      .then((data) => {
        if (data.products) {
          setProducts(data.products);
        } else {
          console.error("Something is missing...");
        }
      })
      .catch((error) => console.error("Error when fetching:", error));
  }, []);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) ?? [];
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) ?? [];

    setBasket(storedBasket);
    setFavourites(storedFavourites);
  }, []);

  const toggleFavourite = (product) => {
    setFavourites((prevFavourites) => {
      const isAlreadyFavourite = prevFavourites.some(
        (item) => item.id === product.id
      );
      const updatedFavourites = isAlreadyFavourite
        ? prevFavourites.filter((item) => item.id !== product.id)
        : [...prevFavourites, product];
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      return updatedFavourites;
    });
  };

  const findModalDataById = (modalId) =>
    modalData.find(({ id }) => id === modalId);

  const handleOpenModalButton = (modalId, product) => {
    const modalDataItem = findModalDataById(modalId);
    setSelectedProduct(product);
    setIsModalOpen(true);
    setCurrentModalData(modalDataItem);
  };

  const handleClosingOfModal = () => {
    setIsModalOpen(false);
    setCurrentModalData(null);
  };

  const handleContinueButtonClick = () => {
    setBasket((prevBasket) => {
      const updatedBasket = [...prevBasket, selectedProduct];
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return updatedBasket;
    });
    setIsModalOpen(false);
  };

  const removeProduct = (productId) => {
    const indexToRemove = basket.findIndex((item) => item.id === productId);
    if (indexToRemove !== -1) {
      const updatedBasket = basket.slice();
      updatedBasket.splice(indexToRemove, 1);
      setBasket(updatedBasket);
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
    }
  };

  return (
    <div className="app">
      <BrowserRouter>
        <header>
          <div className="header-wrapper">
            <Header basket={basket} favourites={favourites} />
          </div>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isModalOpen={isModalOpen}
                  favourites={favourites}
                  products={products}
                  handleOpenModalButton={handleOpenModalButton}
                  toggleFavourite={toggleFavourite}
                  currentModalData={currentModalData}
                  closeModal={handleClosingOfModal}
                  handleContinueButtonClick={handleContinueButtonClick}
                />
              }
            />
            <Route
              path="/favourites"
              element={
                <Favourites
                  isModalOpen={isModalOpen}
                  favourites={favourites}
                  products={favourites}
                  currentModalData={currentModalData}
                  closeModal={handleClosingOfModal}
                  toggleFavourite={toggleFavourite}
                  handleOpenModalButton={handleOpenModalButton}
                  handleContinueButtonClick={handleContinueButtonClick}
                />
              }
            />
            <Route
              path="/basket"
              element={
                <Basket
                  basket={basket}
                  products={products}
                  toggleFavourite={toggleFavourite}
                  favourites={favourites}
                  removeProduct={removeProduct}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
