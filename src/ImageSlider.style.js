import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(() => ({
  rootcontainer: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    position: "relative",
    background: "#555",
    flex: 1,
    minHeight: 0
  },
  nextButton: {
    "&.MuiButton-root": {
      backgroundColor: "#0000FF48",
      color: "white",
      width: "200px",
      position: "absolute",
      top: "50%",
      right: 0
    }
  },
  prevButton: {
    "&.MuiButton-root": {
      backgroundColor: "#0000FF48",
      color: "white",
      width: "200px",
      position: "absolute",
      top: "50%",
      left: 0
    }
  },
  counter: {
    position: "absolute",
    bottom: 0,
    left: "50%"
  }
}));
