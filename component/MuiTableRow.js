const MuiTableRow = (theme, palette) => {
  return {
    root: {
      '&:hover': {
        background: palette.background.dark + ' !important'
      }
    },
    head: {
      background: palette.background.main,
      '&:hover': {
        background: palette.background.main + ' !important'
      }
    }
  }
}

export default MuiTableRow
