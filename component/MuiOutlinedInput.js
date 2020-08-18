const MuiOutlinedInput = (theme, palette) => {
  return {
    multiline: {
      padding: '6.5px ' + theme.spacing(2) + 'px'
    },
    root: {
      borderColor: palette.border,
      '&:hover': {
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: palette.border
        }
      }
    },
    input: {
      padding: '6.5px ' + theme.spacing(2) + 'px'
    },
    notchedOutline: {
      borderColor: palette.border
    }
  }
}

export default MuiOutlinedInput
