/* eslint-disable no-unused-vars */
import { Box, Modal, Button, Typography, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
  "& h2": {
    margin: "10px auto"
  },
  "& button": {
    margin: "10px auto"
  }
};

const BulkUpload = ({ open, setOpen, handleOpen, handleClose }) => {
  const [fileUpload, setFileUpload] = useState(false);

  const handleFileUploadChange = (e) => {
    setFileUpload(e.target.files[0]);
  };

  const handleUploadFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileUpload);
    formData.append("fileName", fileUpload.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios
      .post(
        "http://localhost:8000/api/v1/admin/addProductsInBulk",
        formData,
        config
      )
      .then((response) => {
        console.log("res", response);
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Upload File
          </Typography>
          <form onSubmit={() => handleUploadFile(event)}>
            <TextField type="file" onChange={handleFileUploadChange} />
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<CloudUploadIcon />}
              type="submit"
            >
              Upload File
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

BulkUpload.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func
};

export default BulkUpload;
