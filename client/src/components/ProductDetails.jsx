import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardHeader
} from "@mui/material";

import PropTypes from "prop-types";

const ProductDetails = ({ product }) => {
  return (
    <Card sx={{ width: "300px", margin: "auto" }}>
      <CardHeader title={product.title} />
      <CardMedia sx={{ height: 300 }} image={product.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Price - ${product.price}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductDetails;
