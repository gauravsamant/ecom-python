import { Box, Container } from "@mui/material";

import PropTypes from "prop-types";

import styles from "./MainLayout.module.scss";
import GlobalHeader from "../components/GlobalHeader";

const MainLayout = ({ children }) => {
  return (
    <Container disableGutters maxWidth={false} className={styles.container}>
      <GlobalHeader />
      <Box className={styles.main_box}>{children}</Box>
    </Container>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
