import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NavLink, NavGroup, VerticalNavItemsType } from 'src/@core/layouts/types'

const useActiveNavigation = (dataNav: VerticalNavItemsType | undefined) => {
  const [activePath, setActivePath] = useState<NavLink | undefined>(undefined)
  const [parentPathActive, setActiveParentPathActive] = useState<NavLink | undefined>(undefined)
  const route = useRouter()

  const findActiveParentNav = (NavItem: NavLink) => {
    return route.asPath === `/${NavItem.path}` || (findActiveChildNav(NavItem) && NavItem.path !== '/')
  }

  const findActiveChildNav = (NavLink: NavLink) => {
    return NavLink.children && NavLink.children.find((child: NavLink) => route.asPath === `/${child.path}`)
  }

  const currentChildActive = () => {
    dataNav?.forEach(item => {
      if (findActiveParentNav(item as NavLink)) {
        setActiveParentPathActive(item as NavLink)
      }
      if (findActiveChildNav(item as NavLink)) {
        setActivePath(findActiveChildNav(item as NavLink))
      }
    })
  }

  useEffect(() => {
    currentChildActive()
  }, [dataNav, route])

  return { activePath, parentPathActive }
}

export default useActiveNavigation
