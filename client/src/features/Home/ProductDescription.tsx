import { Typography, Divider } from "@mui/material"

interface Props {
  productDescription: {
    title: string;
    description: string;
  };
}

export default function ProductDescription({productDescription}: Props) {

    return (
      <>
        <Typography 
          variant="h4" 
          align="center" 
          sx={{ fontWeight: 'bold', margin: 0 }}
        >
            {productDescription.title}
          </Typography>
          <Divider 
            style={{ 
              width: '100%', 
              margin: '10px 0', 
              borderColor: '#d3979f', 
              borderWidth: 2 }} 
            />
          <Typography variant="h5" sx={{ textAlign: 'justify', margin: 0 }}>
            {productDescription.description}
          </Typography>
      </>
    )
}