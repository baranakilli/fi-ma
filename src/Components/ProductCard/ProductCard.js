import './ProductCard.css';

const ProductCard = ({title, imageUrl, onClickLink}) => {

  const redirectToSite = () => {
    window.location.href = onClickLink;
  };

  return (
    <div className="product-card bg-white dib br3 pa1 ma2 grow ba bw1 b--light-gray shadow-5 justify-center w-10" onClick={redirectToSite}>
      <img className='product-image' src={imageUrl} alt="product"/>
      <h6 className='product-title'>{title}</h6>
    </div>
  );
}

export default ProductCard;