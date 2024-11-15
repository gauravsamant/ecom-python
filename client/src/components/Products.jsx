import ProductDetails from "./ProductDetails";
import { Grid2 } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Products.module.scss";

const Products = ({ products }) => {
  console.log("inside product page", products);
  return (
    <Grid2 container spacing={2} className={styles.allProducts}>
      {products.map((product) => (
        <Grid2
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          sx={{ overflow: "none" }}
          key={product.id}
        >
          <ProductDetails product={product} />
        </Grid2>
      ))}
    </Grid2>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;
