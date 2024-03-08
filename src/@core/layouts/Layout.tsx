// ** React Import
import { useEffect, useRef } from 'react'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

// ** Layout Components
import VerticalLayout from './VerticalLayout'
import HorizontalLayout from './HorizontalLayout'

const Layout = (props: LayoutProps) => {
  // ** Props
  const { hidden, children, settings, saveSettings, customConfig } = props

  // ** Ref
  const isCollapsed = useRef(settings.navCollapsed)

  useEffect(() => {
    if (hidden) {
      if (settings.navCollapsed) {
        saveSettings({ ...settings, navCollapsed: false, layout: 'vertical' })
        isCollapsed.current = true
      } else {
        saveSettings({ ...settings, layout: 'vertical' })
      }
    } else {
      if (isCollapsed.current) {
        saveSettings({ ...settings, navCollapsed: true, layout: settings.lastLayout })
        isCollapsed.current = false
      } else {
        saveSettings({ ...settings, layout: settings.lastLayout })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hidden])

  const newProp = {...props, settings: {...settings, ...(customConfig || {})}}

  if (settings.layout === 'horizontal') {
    return <HorizontalLayout {...newProp }>{children}</HorizontalLayout>
  }

  return <VerticalLayout {...newProp }>{children}</VerticalLayout>
}

export default Layout
