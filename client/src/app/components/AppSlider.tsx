import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from '@mui/material';
import { useNavigate  } from 'react-router-dom';

interface Props {
  products: any[]
}

export default function AppSlider({ products }: Props) {
  const navigate = useNavigate();

  const handleImageClick = (id: any) => {
    navigate(`/catalog/${id}`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  return (
      <Slider {...settings} >
        {products.map((product, index) => (
          <Card 
            key={index} 
            sx={{ height: 480,  img: {  height: '100%', width: '100%'}, }}
          >
            <img 
              src={product.pictureUrl} 
              alt={product.name} 
              onClick={() => handleImageClick(product.id)}
            />
          </Card>
        ))}
      </Slider>
  );
};
