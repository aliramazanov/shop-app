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
  return (
    <div>
      <Welcome />
      <ProductList
        isBasketPage={false}
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
