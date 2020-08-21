const MuiPaginationItem = (theme, palette) => {
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
