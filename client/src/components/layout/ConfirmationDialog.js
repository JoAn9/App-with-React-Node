import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ConfirmationDialog = ({ question, textCancel, textConfirm, doAction }) => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <div className="my-2">
        <button className="btn btn-danger" onClick={handleClickOpen}>
          <i className="fas fa-user" /> Delete my account
        </button>
      </div>
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
          <button  className="btn btn-light" onClick={handleClose} autoFocus>
            {textCancel}
          </button>
          <button className="btn btn-danger" onClick={() => doAction()}>{textConfirm}</button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationDialog;
