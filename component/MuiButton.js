const MuiButton = (theme, palette) => {
  return {
    root: {
      fontSize: 14,
      fontWeight: 'normal',
      minWidth: theme.spacing(13),
      height: theme.spacing(4),
      textDecoration: 'none'
    },
    sizeSmall: {
      minWidth: theme.spacing(8)
    },
    contained: {
      padding: theme.spacing(0.25) + 'px ' + theme.spacing(3) + 'px',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none'
      },
      '&:active': {
        boxShadow: 'none'
      },
      '&$focusVisible': {
        boxShadow: 'none'
      },
      '&$disabled': {
        color: palette.primary.contrastText
      }
    },
    containedPrimary: {
      color: palette.primary.contrastText,
      '&:hover': {
        backgroundColor: palette.primary.light
      },
      '&:active': {
        backgroundColor: palette.primary.dark
      }
    },
    containedSecondary: {
      color: palette.secondary.contrastText,
      '&:hover': {
        backgroundColor: palette.secondary.light
      },
      '&:active': {
        backgroundColor: palette.secondary.dark
      }
    },
    outlined: {
      padding: theme.spacing(0.25) + 'px ' + theme.spacing(3) + 'px',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none'
      },
      '&:active': {
        boxShadow: 'none'
      }
    },
    outlinedPrimary: {
      border: '1px solid ' + palette.border,
      color: palette.text.light,
      '&:hover': {
        border: '1px solid ' + palette.primary.dark,
        color: palette.primary.dark
      },
      '&:active': {
        border: '1px solid ' + palette.primary.light,
        color: palette.primary.light
      }
    },
    outlinedSecondary: {
      border: '1px solid ' + palette.border,
      color: palette.text.light,
      '&:hover': {
        border: '1px solid ' + palette.secondary.dark,
        color: palette.secondary.dark
      },
      '&:active': {
        border: '1px solid ' + palette.secondary.light,
        color: palette.secondary.light
      }
    },
    text: {
      padding: theme.spacing(0.5) + 'px ' + theme.spacing(1) + 'px',
      minWidth: theme.spacing(2),
      '&:hover': {
        color: palette.primary.main,
        backgroundColor: palette.primary.lighter
      },
      '&:active': {
        color: palette.primary.main,
        backgroundColor: palette.primary.lighter
      },
      '&$focusVisible': {
        color: palette.primary.main,
        backgroundColor: palette.primary.lighter
      }
    },
    label: {
      textTransform: 'none'
    }
  }
}

export default MuiButton
