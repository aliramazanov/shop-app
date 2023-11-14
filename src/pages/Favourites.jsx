import ProductList from "../components/ProductList/ProductList";
import PropTypes from "prop-types";
import Modal from "../components/Modal/Modal";
import "./PageStyles.scss";

export default function Favourites({
  favourites,
  toggleFavourite,
  handleOpenModalButton,
  isModalOpen,
  currentModalData,
  closeModal,
  handleContinueButtonClick,
}) {
  return (
    <div className="favourites-page">
      <h2 className="pages-hero">Discover Your Exquisite Collection</h2>
      <ProductList
        products={favourites}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
        isBasketPage={false}
        handleOpenModalButton={handleOpenModalButton}
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

Favourites.propTypes = {
  favourites: PropTypes.array.isRequired,
  toggleFavourite: PropTypes.func.isRequired,
};
