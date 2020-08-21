# mui-theme-preset

## 概述

`mui-theme-preset` 提供基于 mui 的基础组件样式和基于项目的调色板。

## 安装和配置

1. 使用 `yarn` 或 `npm` 安装组件包

```shell

    yarn add git+ssh:git@codefever.pgyer.com:PGYER/mui_theme_preset.git@latest
    yarn upgrade @pgyer/mui-theme-preset

```

## l18n

`mui-theme-preset` 不包含额外的 `l18n` 设置和内容

## a11y

`mui-theme-preset` 不包含额外的 `a11y` 设置和内容

## 使用

1. 引入

```javascript

  import makePreset from '@pgyer/mui-theme-preset'

```

2. 辅助生成主题样式

```jsx

    import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

    ...

    const theme = createMuiTheme(makePreset(originTheme, 'Seed'))

    ...

    <MuiThemeProvider theme={theme} >
      ...
    </MuiThemeProvider>

```

3. 补充或添加自定义样式

```jsx

    import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

    ...

    const baseTheme = makePreset(createMuiTheme({}), 'Seed')
    const theme = createMuiTheme({
      ...baseTheme,
      overwriteItem: {
        ...overwriteTheme
      }
    })

    ...

    <MuiThemeProvider theme={theme} >
      ...
    </MuiThemeProvider>

```


## 参数列表

| 参数顺序 名称 | 类型 | 默认值 | 说明 |
| :---- | :---- | :---- | :---- |
| 0 originTheme | Object | {} | 必须由 `createMuiTheme` 函数生成至少包含其中的 helper 函数 |
| 1 presetName | String | '' | `Seed`, `CodeFever`, `FrontJS` 的一种, 否则以默认值传入 |
