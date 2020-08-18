import * as innerPalette from '@material-ui/core/colors'

import CodeFeverColorPresets from './color-presets/CodeFever'
import SeedColorPresets from './color-presets/Seed'
import FrontJSColorPresets from './color-presets/FrontJS'

import boxShadow from './style/BoxShadow'
import typography from './style/Typography'

import MuiAppBar from './component/MuiAppBar'
import MuiAvatar from './component/MuiAvatar'
import MuiBackdrop from './component/MuiBackdrop'
import MuiButton from './component/MuiButton'
import MuiDivider from './component/MuiDivider'
import MuiDrawer from './component/MuiDrawer'
import MuiExpansionPanel from './component/MuiExpansionPanel'
import MuiExpansionPanelDetails from './component/MuiExpansionPanelDetails'
import MuiExpansionPanelSummary from './component/MuiExpansionPanelSummary'
import MuiIconButton from './component/MuiIconButton'
import MuiInput from './component/MuiInput'
import MuiInputAdornment from './component/MuiInputAdornment'
import MuiInputBase from './component/MuiInputBase'
import MuiListItem from './component/MuiListItem'
import MuiListItemIcon from './component/MuiListItemIcon'
import MuiListSubheader from './component/MuiListSubheader'
import MuiMenu from './component/MuiMenu'
import MuiMenuItem from './component/MuiMenuItem'
import MuiOutlinedInput from './component/MuiOutlinedInput'
import MuiPaginationItem from './component/MuiPaginationItem'
import MuiPaper from './component/MuiPaper'
import MuiSnackbar from './component/MuiSnackbar'
import MuiSnackbarContent from './component/MuiSnackbarContent'
import MuiTab from './component/MuiTab'
import MuiTable from './component/MuiTable'
import MuiTableBody from './component/MuiTableBody'
import MuiTableRow from './component/MuiTableRow'
import MuiTabs from './component/MuiTabs'
import MuiTooltip from './component/MuiTooltip'

function makeTheme (originTheme, colorPresetName) {
  const presetPalette = {
    Seed: SeedColorPresets,
    CodeFever: CodeFeverColorPresets,
    FrontJS: FrontJSColorPresets
  }[colorPresetName] || {}

  const palette = {
    ...innerPalette,
    ...presetPalette
  }

  return {
    palette,
    boxShadow: boxShadow(originTheme, palette),
    typography: typography(originTheme, palette),
    overrides: {
      MuiAppBar: MuiAppBar(originTheme, palette),
      MuiAvatar: MuiAvatar(originTheme, palette),
      MuiBackdrop: MuiBackdrop(originTheme, palette),
      MuiButton: MuiButton(originTheme, palette),
      MuiDivider: MuiDivider(originTheme, palette),
      MuiDrawer: MuiDrawer(originTheme, palette),
      MuiExpansionPanel: MuiExpansionPanel(originTheme, palette),
      MuiExpansionPanelDetails: MuiExpansionPanelDetails(originTheme, palette),
      MuiExpansionPanelSummary: MuiExpansionPanelSummary(originTheme, palette),
      MuiIconButton: MuiIconButton(originTheme, palette),
      MuiInput: MuiInput(originTheme, palette),
      MuiInputAdornment: MuiInputAdornment(originTheme, palette),
      MuiInputBase: MuiInputBase(originTheme, palette),
      MuiListItem: MuiListItem(originTheme, palette),
      MuiListItemIcon: MuiListItemIcon(originTheme, palette),
      MuiListSubheader: MuiListSubheader(originTheme, palette),
      MuiMenu: MuiMenu(originTheme, palette),
      MuiMenuItem: MuiMenuItem(originTheme, palette),
      MuiOutlinedInput: MuiOutlinedInput(originTheme, palette),
      MuiPaginationItem: MuiPaginationItem(originTheme, palette),
      MuiPaper: MuiPaper(originTheme, palette),
      MuiSnackbar: MuiSnackbar(originTheme, palette),
      MuiSnackbarContent: MuiSnackbarContent(originTheme, palette),
      MuiTab: MuiTab(originTheme, palette),
      MuiTable: MuiTable(originTheme, palette),
      MuiTableBody: MuiTableBody(originTheme, palette),
      MuiTableRow: MuiTableRow(originTheme, palette),
      MuiTabs: MuiTabs(originTheme, palette),
      MuiTooltip: MuiTooltip(originTheme, palette)
    }
  }
}

export default makeTheme
