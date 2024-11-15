/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  ButtonGroup,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
  IconButton,
  TextField
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { showProductsAdmin, fetchProducts } from "../../redux";

import styles from "./AdminLayoutRightBox.module.scss";
import BulkUpload from "./BulkUpload";

const AdminLayoutRightBox = ({ children }) => {
  const showProducts = useSelector((state) => state.product.showProducts);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <Box className={styles.adminRightBox} sx={{ boxShadow: 3 }}>
      {children}
      {showProducts && (
        <>
          <ButtonGroup fullWidth>
            <Button variant="contained">Upload Product</Button>
            <Divider
              orientation="vertical"
              sx={{
                opacity: 0.6,
                color: "#fff",
                borderColor: "rgba(255,255,255,0.8)"
              }}
            />
            <Button variant="contained" onClick={handleOpen}>
              Upload product in bulk
            </Button>
          </ButtonGroup>
          <BulkUpload
            open={open}
            setOpen={setOpen}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </>
      )}
      <List>
        {showProducts &&
          products.map((product) => (
            <>
              <ListItem disablePadding key={product.id}>
                <ListItemText primary={product.title} />
              </ListItem>
              <Divider />
            </>
          ))}
      </List>
    </Box>
  );
};

AdminLayoutRightBox.propTypes = {
  children: PropTypes.node
};

export default AdminLayoutRightBox;
