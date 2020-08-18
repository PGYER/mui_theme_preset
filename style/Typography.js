const typography = (theme, palette) => {
  return {
    fontFamily: 'PingFang SC, Helvetica Neue, Hiragino Sans GB, Microsoft Yahei, WenQuanYi Micro Hei, Roboto, sans-serif',
    fontSize: 14,
    h1: {
      color: palette.text.main,
      fontSize: 20,
      fontWeight: 'bold'
    },
    h2: {
      color: palette.text.main,
      fontSize: 20,
      fontWeight: 'bold'
    },
    h3: {
      color: palette.text.main,
      fontSize: 20,
      fontWeight: 'bold'
    },
    h4: {
      color: palette.text.main,
      fontSize: 16,
      fontWeight: 'bold'
    },
    h5: {
      color: palette.text.main,
      fontSize: 16,
      fontWeight: 'bold'
    },
    h6: {
      color: palette.text.main,
      fontSize: 16,
      fontWeight: 'bold'
    },
    subtitle1: {
      color: palette.text.main,
      fontSize: 14,
      fontWeight: 'bold'
    },
    subtitle2: {
      color: palette.text.main,
      fontSize: 14,
      fontWeight: 'bold'
    },
    body1: {
      color: palette.text.main,
      fontWeight: 'normal',
      fontSize: 14
    },
    body2: {
      color: palette.text.light,
      fontWeight: 'normal',
      fontSize: 14
    },
    button: {
      color: palette.text.light,
      fontWeight: 'normal',
      fontSize: 14
    },
    caption: {
      color: palette.text.lighter,
      fontWeight: 'normal',
      fontSize: 12
    }
  }
}

export default typography
