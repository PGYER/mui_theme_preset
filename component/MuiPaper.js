import boxShadow from '../style/BoxShadow'

const MuiPaper = (theme, palette) => {
  return {
    rounded: {
      'border-radius': 4
    },
    elevation0: {
      boxShadow: 'none'
    },
    elevation1: {
      boxShadow: 'none'
    },
    elevation2: {
      boxShadow: boxShadow(theme, palette).default // Mui-Popover
    },
    elevation3: {
      boxShadow: 'none'
    },
    elevation4: {
      boxShadow: 'none'
    },
    elevation5: {
      boxShadow: 'none'
    },
    elevation6: {
      boxShadow: 'none'
    },
    elevation7: {
      boxShadow: 'none'
    },
    elevation8: {
      boxShadow: boxShadow(theme, palette).default // Mui-Paper
    }
  }
}

export default MuiPaper
