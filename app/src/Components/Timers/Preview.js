import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Box, Typography, Paper } from "@material-ui/core";

export const Preview = ({ hash }) => {
  let { id } = useParams();
  React.useEffect(() => {}, []);
  return (
    <Box padding={2} component={Paper}>
      <Typography>Preview:</Typography>
      <Box padding={2}>
        <img
          loading="eager"
          alt="preview"
          src={`https://mailtimer.com/api/ca/campaigns/${id}/Preview/false?${hash}`}
        />
      </Box>
      <Box padding={2}>
        <img
          loading="eager"
          alt="preview"
          src={`https://mailtimer.com/api/ca/campaigns/${id}/Preview/true?${hash}`}
        />
      </Box>
    </Box>
  );
};
Preview.propTypes = {
  hash: PropTypes.string.isRequired,
};
