const MuiIconButton = (theme, palette) => {
  return {
    colorPrimary: {
      color: palette.text.light,
      '&:hover': {
        color: palette.primary.main,
        backgroundColor: palette.primary.light,
        '& svg': {
          color: palette.primary.main
        }
      }
    }
  }
}

export default MuiIconButton
