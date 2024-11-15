/* eslint-disable no-unused-vars */
import { Container } from "@mui/material";
import PropTypes from "prop-types";

import styles from "./AdminLayout.module.scss";

const AdminLayout = ({ children }) => {
  return (
    <Container className={styles.admin_container} maxWidth={false}>
      {children}
    </Container>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node
};

export default AdminLayout;
