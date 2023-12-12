import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { ProductCategory } from '../../app/models/products';
import { useNavigate } from 'react-router-dom';
import { setProductParams } from '../catalog/catalogSlice';
import { useAppDispatch } from '../../app/store/ConfigureStore';

interface Props {
  productCategory: ProductCategory;
}

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

export default function CategoryCard({productCategory}: Props) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCategoryClick = () => {
    dispatch(
      setProductParams({
        types: [productCategory.name],
      })
    );
    navigate('/catalog');
  };

  return (
        <ImageButton
          focusRipple
          key={productCategory.name}
          style={{
            width: '100%',
          }}
          onClick={handleCategoryClick}
        >
          <img
            src={productCategory.pictureUrl}
            alt={productCategory.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="h5"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme: { spacing: (arg0: number) => any; }) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {productCategory.name}
            </Typography>
          </Image>
        </ImageButton>
  );
}
