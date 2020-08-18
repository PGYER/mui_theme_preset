const MuiMenuItem = (theme, palette) => {
  return {
    root: {
      height: 'auto',
      lineHeight: 1,
      '&:hover': {
        backgroundColor: palette.background.main
      },
      '&$selected': {
        color: palette.primary.main,
        backgroundColor: palette.primary.contrastText,
        '&:hover': {
          backgroundColor: palette.background.main
        }
      }
    }
  }
}

export default MuiMenuItem
