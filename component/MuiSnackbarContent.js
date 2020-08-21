const MuiSnackbarContent = (theme, palette) => {
  return {
    root: {
      backgroundColor: palette.background.light
    },
    action: {
      marginRight: '0px',
      color: palette.text.light
    },
    message: {
      color: palette.text.light
    }
  }
}

export default MuiSnackbarContent
