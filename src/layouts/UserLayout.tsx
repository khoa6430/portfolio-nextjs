// ** React Imports
import { ReactNode, useEffect, useState } from 'react'

// ** MUI Imports
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
// !Do not remove this Layout import
import Layout from 'src/@core/layouts/Layout'

// ** Navigation Imports
import VerticalNavItems from 'src/navigation/vertical'
import HorizontalNavItems from 'src/navigation/horizontal'
import HorizontalNavsCustom from 'src/navigation/horizontalNav'

import VerticalAppBarContent from './components/vertical/AppBarContent'
import HorizontalAppBarContent from './components/horizontal/AppBarContent'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'
import ServerSideNavItems from './components/vertical/ServerSideNavItems'

interface Props {
  children: ReactNode
  customConfig: any
}

const UserLayout = ({ customConfig, children }: Props) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()

  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical OverlayLayout Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/material-ui/react-use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const navItems = ServerSideNavItems()
  return (
    <Layout
      hidden={hidden}
      settings={settings}
      customConfig={customConfig}
      saveSettings={saveSettings}
      {...(settings.layout === 'horizontal'
        ? {
            // ** Navigation Items
            horizontalNavItems: [
              ...HorizontalNavsCustom()
              // ...HorizontalNavItems(),
            ],
            horizontalAppBarContent: () => (
              <HorizontalAppBarContent hidden={hidden} settings={settings} saveSettings={saveSettings} />
            )
          }
        : {
            verticalNavItems: navItems,
            verticalAppBarContent: props => (
              <VerticalAppBarContent
                hidden={hidden}
                settings={settings}
                saveSettings={saveSettings}
                toggleNavVisibility={props.toggleNavVisibility}
                verticalNavItems={props.verticalNavItems}
              />
            )
          })}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
