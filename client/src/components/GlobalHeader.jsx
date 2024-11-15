import { Box, Button, Typography } from "@mui/material";
import styles from "./GlobalHeader.module.scss";

const GlobalHeader = () => {
  return (
    <Box sx={{ boxShadow: 3 }} className={styles.global_header}>
      <Typography variant="h4" className={styles.logo}>
        Lifdesign
      </Typography>
      <Box className={styles.links_container}>
        <Typography>Products</Typography>
        <Typography>About</Typography>
      </Box>
      <Box className={styles.login_button_container}>
        <Button variant="contained">Login</Button>
        <Button variant="contained">Signup</Button>
      </Box>
    </Box>
  );
};

export default GlobalHeader;
