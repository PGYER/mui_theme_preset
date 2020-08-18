const MuiExpansionPanelSummary = (theme, palette) => {
  return {
    root: {
      '&$expanded': {
        maxHeight: theme.spacing(5) + 'px',
        minHeight: theme.spacing(5) + 'px'
      },
      padding: 0,
      backgroundColor: palette.background.main,
      maxHeight: theme.spacing(5) + 'px',
      minHeight: theme.spacing(5) + 'px'
    },
    content: {
      '&$expanded': {
        margin: '4px 0'
      },
      paddingLeft: theme.spacing(3)
    }
  }
}

export default MuiExpansionPanelSummary
