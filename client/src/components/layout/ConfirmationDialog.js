import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ConfirmationDialog = ({
  question,
  textButton,
  textCancel,
  textConfirm,
  doAction,
  iconClass,
}) => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Fragment>
      <button className="btn btn-danger" onClick={handleClickOpen}>
        <i className={iconClass} />
        {textButton}
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {question}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className="btn btn-light" onClick={handleClose} autoFocus>
            {textCancel}
          </button>
          <button className="btn btn-danger" onClick={doAction}>
            {textConfirm}
          </button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

ConfirmationDialog.propTypes = {
  question: PropTypes.string,
  textButton: PropTypes.string,
  textCancel: PropTypes.string,
  textConfirm: PropTypes.string,
  doAction: PropTypes.func,
  iconClass: PropTypes.string,
};

ConfirmationDialog.defaultProps = {
  question: 'Are you sure you want to delete?',
  textButton: ' Delete',
  textCancel: 'Cancel',
  textConfirm: 'Delete',
  doAction: () => {},
  iconClass: 'fas',
};

export default ConfirmationDialog;
