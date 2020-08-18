import boxShadow from '../style/BoxShadow'

const MuiSnackbar = (theme, palette) => {
  return {
    root: {
      boxShadow: boxShadow(theme, palette).bar,
      borderRadius: theme.spacing(0.5)
    }
  }
}

export default MuiSnackbar
