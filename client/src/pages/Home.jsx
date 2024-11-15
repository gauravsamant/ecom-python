import { useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import MainLayout from "../Layout/MainLayout";
import Products from "../components/Products";
import { fetchProducts } from "../redux";

import styles from "./Home.module.scss";

const Home = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <MainLayout>
      <Box className={styles.main_container}>
        {products ? <Products products={products} /> : <h1>Loading...</h1>}
      </Box>
    </MainLayout>
  );
};

export default Home;
