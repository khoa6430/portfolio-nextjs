// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

// ** MUI import

const navigation = (): VerticalNavItemsType => {
  const menuContent = [
    {
      title: 'Home',
      path: '/apps/home',
      isMainPage: true
    },
    {
      title: 'Cửa Nhôm',
      path: '/san-pham/cua-nhom-maxpro',
      isMainPage: true
    },
    {
      title: 'Cửa nhôm Slim',
      path: '/san-pham/cua-nhom-maxpro',
      isMainPage: true
    },
    {
      title: 'Cửa nhôm Xingfa',
      path: '/san-pham/cua-nhom-maxpro'
    }
  ]

  return menuContent
}

export default navigation
