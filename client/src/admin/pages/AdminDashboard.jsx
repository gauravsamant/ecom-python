/* eslint-disable no-unused-vars */
import { Box, Divider, List, ListItem, ListItemText } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { showProductsAdmin } from "../../redux";
import AdminLayout from "../layout/AdminLayout";
import AdminLayoutLeftBox from "../components/AdminLayoutLeftBox";
import AdminLayoutRightBox from "../components/AdminLayoutRightBox";

import styles from "./AdminDashboard.module.scss";

const AdminDashBoard = () => {
  const showProducts = useSelector((state) => state.product.showProducts);

  const dispatch = useDispatch();
  return (
    <AdminLayout>
      <AdminLayoutLeftBox>
        <List>
          <ListItem
            className={styles.listmenu}
            onClick={() => dispatch(showProductsAdmin())}
          >
            <ListItemText primary="Products" />
          </ListItem>
          <Divider
            sx={{
              opacity: 0.6,
              color: "#fff",
              borderColor: "rgba(255,255,255,0.8)"
            }}
          />
          <ListItem className={styles.listmenu}>
            <ListItemText primary="User" />
          </ListItem>
          <Divider
            sx={{
              opacity: 0.6,
              color: "#fff",
              borderColor: "rgba(255,255,255,0.8)"
            }}
          />
          <ListItem className={styles.listmenu}>
            <ListItemText primary="Vendor" />
          </ListItem>
          <Divider
            sx={{
              opacity: 0.6,
              color: "#fff",
              borderColor: "rgba(255,255,255,0.8)"
            }}
          />
          <ListItem className={styles.listmenu}>
            <ListItemText primary="Sales" />
          </ListItem>
        </List>
      </AdminLayoutLeftBox>
      <AdminLayoutRightBox></AdminLayoutRightBox>
    </AdminLayout>
  );
};

export default AdminDashBoard;
