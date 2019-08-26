import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';

const Snackbar = ({
  alert: { msg, alertType, id },
  enqueueSnackbar,
  closeSnackbar,
}) => {
  useEffect(() => {
    enqueueSnackbar(
      msg,
      {
        key: id,
        variant: alertType,
        autoHideDuration: 3000,
        action: id => (
          <button
            type="button"
            className="btn button-delete"
            onClick={() => closeSnackbar(id)}
          >
            <i className="fas fa-times" />
          </button>
        ),
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        preventDuplicate: true,
      },
      [enqueueSnackbar]
    );
  });
  return null;
};

Snackbar.propTypes = {
  alert: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
  closeSnackbar: PropTypes.func.isRequired,
};

export default withSnackbar(Snackbar);
