import { HorizontalNavItemsType } from 'src/@core/layouts/types'
import { HomeOutline, Lifebuoy } from 'mdi-material-ui'

const HorizontalNavItems = (): HorizontalNavItemsType => {
  const menuContent = [
    {
      title: 'HOME',
      icon: HomeOutline,
      path: '/',
      isHideDesktop: true
    },
    {
      title: 'CỬA NHÔM',
      path: '/danh-muc/cua-nhom',
      isHideDesktop: true,
      children: [
        {
          title: 'Cửa nhôm MaxPro',
          icon: HomeOutline,
          path: '/san-pham/cua-nhom-maxpro',
          isHideDesktop: true
        },
        {
          title: 'Cửa nhôm Slim',
          icon: HomeOutline,
          path: '/san-pham/cua-nhom-maxpro',
          isHideDesktop: true
        },
        {
          title: 'Cửa nhôm Xingfa',
          icon: HomeOutline,
          path: '/san-pham/cua-nhom-maxpro',
          isHideDesktop: true
        },
        {
          title: 'Cửa trượt quay',
          icon: HomeOutline,
          path: '/san-pham/cua-nhom-maxpro',
          isHideDesktop: true
        },
        {
          title: 'Cửa nhôm PMI',
          icon: HomeOutline,
          path: '/san-pham/cua-nhom-maxpro',
          isHideDesktop: true
        }
      ]
    },
    {
      title: 'KÍNH CƯỜNG LỰC',
      path: '/kinh',
      isHideDesktop: true,
      children: [
        {
          title: 'Cửa Kính Cường Lực',
          icon: HomeOutline,
          path: '/cuanhom',
          isHideDesktop: true
        },
        {
          title: 'Lan Can Kính Cường Lực',
          icon: HomeOutline,
          path: '/cuanhom',
          isHideDesktop: true
        },
        {
          title: 'Mái Kính Cường Lực',
          icon: HomeOutline,
          path: '/cuanhom',
          isHideDesktop: true
        },
        {
          title: 'Cầu Thang Kính Cường Lực',
          icon: HomeOutline,
          path: '/cuanhom',
          isHideDesktop: true
        },
        {
          title: 'Phòng Tắm Kính Cường Lực',
          icon: HomeOutline,
          path: '/cuanhom',
          isHideDesktop: true
        }
      ]
    },
    {
      title: 'NHÔM KÍNH',
      path: '/nhomkinh',
      isHideDesktop: true,
      children: [
        {
          title: 'Cửa nhôm MaxPro',
          icon: HomeOutline,
          path: '/cuanhom',
          isHideDesktop: true
        },
        {
          title: 'Cửa nhôm Slim',
          icon: HomeOutline,
          path: '/cuanhom',
          isHideDesktop: true
        },
        {
          title: 'Cửa nhôm Xingfa',
          icon: HomeOutline,
          path: '/cuanhom',
          isHideDesktop: true
        },
        {
          title: 'Cửa trượt quay',
          icon: HomeOutline,
          path: '/cuanhom',
          isHideDesktop: true
        },
        {
          title: 'Cửa nhôm PMI',
          icon: HomeOutline,
          path: '/cuanhom',
          isHideDesktop: true
        }
      ]
    },
    {
      title: 'VỀ KMYDA',
      path: '/nhomkinh',
      isHideDesktop: true,
      children: [
        {
          title: 'Giới Thiệu ',
          icon: HomeOutline,
          path: '/cuanhom',
          isHideDesktop: true
        },
        {
          title: 'Liên Hệ',
          icon: HomeOutline,
          path: '/cuanhom',
          isHideDesktop: true
        }
      ]
    }
  ]

  return menuContent
}

export default HorizontalNavItems
