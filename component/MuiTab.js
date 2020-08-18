const MuiTab = (theme, palette) => {
  return {
    root: {
      // boxSizing: 'content-box',
      minHeight: theme.spacing(5),
      padding: '0px ' + theme.spacing(3) + 'px',
      [theme.breakpoints.up('sm')]: {
        minWidth: '0px'
      }
    },
    textColorPrimary: {
      color: palette.text.light,
      '&$selected': {
        color: palette.text.main
      },
      '&:hover': {
        color: palette.text.main
      }
    }
  }
}

export default MuiTab
