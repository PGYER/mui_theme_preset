const MuiTable = (theme, palette) => {
  return {
    root: {
      border: '1px solid ' + palette.border,
      overflow: 'hidden',
      borderRadius: theme.spacing(0.5) + 'px',
      borderCollapse: 'inherit'
    }
  }
}

export default MuiTable
