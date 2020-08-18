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
      color: palette.text.light,
      '&>div>em': {
        width: theme.spacing(0.5),
        height: '100%',
        position: 'absolute',
        top: '0px',
        left: '0px',
        borderTopLeftRadius: theme.spacing(0.5),
        borderBottomLeftRadius: theme.spacing(0.5)
      }
    }
  }
}

export default MuiSnackbarContent
