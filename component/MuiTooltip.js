const MuiTooltip = (theme, palette) => {
  return {
    tooltip: {
      position: 'relative',
      background: palette.text.main + ' !important',
      fontSize: '12px',
      lineHeight: '13px',
      padding: '6px 16px',
      '&::after': {
        content: 'close-quote',
        display: 'block',
        position: 'absolute',
        top: '100%',
        left: '50%',
        marginTop: '-9px',
        marginLeft: '-6px',
        width: theme.spacing(1.5),
        height: theme.spacing(1.5),
        background: palette.text.main,
        transform: 'rotate(45deg)',
        zIndex: '-1 !important'
      }
    },
    tooltipPlacementBottom: {
      '&::after': {
        top: '6px'
      }
    }
  }
}

export default MuiTooltip
