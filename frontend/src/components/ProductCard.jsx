import React from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'

const ProductCard = ({product}) => {
  const navigate = useNavigate();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div onClick={() => navigate(`/product/${product?._id}`)} className='w-[250px] bg-gray-100'>
      <Slider {...settings}>
      {
        product?.images?.map((image,i) => (
          <img key={i} src={image.url} alt="" />
        ))
      }
      </Slider>
      <div className='text-1xl px-3'>{product?.name}</div>
      <div className='text-2xl px-3'>{product?.price} TL</div>
    </div>
  )
}

export default ProductCard
