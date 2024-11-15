/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import styles from "./AdminLayoutLeftBox.module.scss";

const AdminLayoutLeftBox = ({ children }) => {
  return (
    <Box className={styles.adminLeftBox} sx={{ boxShadow: 3 }}>
      {children}
    </Box>
  );
};

AdminLayoutLeftBox.propTypes = {
  children: PropTypes.node
};

export default AdminLayoutLeftBox;
