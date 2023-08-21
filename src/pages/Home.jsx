import React from "react";
import ProductList from "../components/ProductList/ProductList";
import Welcome from "../components/Welcome/Welcome";
import Modal from "../components/Modal/Modal";

export default function Home({
  favourites,
  products,
  handleOpenModalButton,
  toggleFavourite,
  isModalOpen,
  currentModalData,
  closeModal,
  handleContinueButtonClick,
  selectedProduct,
}) {
  console.log(isModalOpen);
  return (
    <div>
      <Welcome />
      <ProductList
        favourites={favourites}
        products={products}
        handleOpenModalButton={handleOpenModalButton}
        toggleFavourite={toggleFavourite}
      />
      {isModalOpen && (
        <Modal
          details={currentModalData}
          closeModal={closeModal}
          handleContinueButtonClick={handleContinueButtonClick}
        />
      )}
    </div>
  );
}
