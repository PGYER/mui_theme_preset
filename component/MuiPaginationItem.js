const MuiPaginationItem = (theme, palette) => {
  console.log(palette.background.paginationHover)
  return {
    page: {
      '&:hover': {
        color: palette.primary.main,
        backgroundColor: palette.background.paginationHover
      }
    }
  }
}

export default MuiPaginationItem
