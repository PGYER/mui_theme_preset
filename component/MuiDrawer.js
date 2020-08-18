const MuiDrawer = (theme, palette) => {
  return {
    paper: {
      backgroundColor: palette.background.main,
      padding: theme.spacing(1) + 'px ' + theme.spacing(3) + 'px'
    },
    paperAnchorDockedLeft: {
      borderRight: '1px solid ' + palette.border
    }
  }
}

export default MuiDrawer
