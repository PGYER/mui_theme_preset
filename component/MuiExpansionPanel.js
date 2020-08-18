const MuiExpansionPanel = (theme, palette) => {
  return {
    root: {
      '&$disabled': {
        opacity: 1
      },
      '&$expanded': {
        margin: 0
      },
      '&:before': {
        display: 'none'
      }
    }
  }
}

export default MuiExpansionPanel
