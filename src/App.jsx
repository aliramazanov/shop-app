import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import { fetchData } from "./api";
import modalData from "./modalData.jsx";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Basket from "./pages/Basket";
import About from "./pages/About";

import "./App.scss";

function App() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalData, setCurrentModalData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [basket, setBasket] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify([]));
    localStorage.setItem("favourites", JSON.stringify([]));
  });

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
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [basket, favourites]);

  const handleContinueButtonClick = () => {
    const updatedBasket = [...basket, selectedProduct];
    console.log(updatedBasket);
    localStorage.setItem("basket", updatedBasket);
    setBasket(updatedBasket);
    setIsModalOpen(false);
    setCurrentModalData(null);
    setSelectedProduct(null);
  };

  const toggleFavourite = (product) => {
    setFavourites((prevFavourites) => {
      const existingFavourite = prevFavourites.find(
        (item) => item.id === product.id
      );

      if (existingFavourite) {
        return prevFavourites.filter((item) => item.id !== product.id);
      } else {
        return [...prevFavourites, product];
      }
    });
  };

  const handleOpenModalButton = (modalId, product) => {
    console.log(modalId);
    const modalDataItem = findModalDataById(modalId);
    setSelectedProduct(product);
    setIsModalOpen(true);
    setCurrentModalData(modalDataItem);
  };

  const handleClosingOfModal = () => {
    setIsModalOpen(false);
    setCurrentModalData(null);
  };

  const findModalDataById = (modalId) => {
    return modalData.find(({ id }) => id === modalId);
  };

  const removeProduct = (productId) => {
    const updatedBasket = basket.filter((item) => item.id !== productId);
    setBasket(updatedBasket);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <header>
          <div className="header-wrapper">
            <div className="header-text-wrapper">
              <h1>Hobby Shop</h1>
            </div>
            <div className="routes">
              <NavLink className="navlinks" to="/">
                Home
              </NavLink>
              <NavLink className="navlinks" to="/favourites">
                Favourites: {favourites.length}
              </NavLink>
              <NavLink className="navlinks" to="/basket">
                Basket: {basket.length}
              </NavLink>
              <NavLink className="navlinks" to="/about">
                About
              </NavLink>
            </div>
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
                  favourites={favourites}
                  toggleFavourite={toggleFavourite}
                  handleOpenModalButton={handleOpenModalButton}
                />
              }
            />
            <Route
              path="/basket"
              element={
                <Basket
                  basket={basket}
                  toggleFavourite={toggleFavourite}
                  favourites={favourites}
                  removeProduct={removeProduct}
                />
              }
            />{" "}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
