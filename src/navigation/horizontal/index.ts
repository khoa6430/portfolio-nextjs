// ** Icon imports
import Apps from 'mdi-material-ui/Apps'
import Menu from 'mdi-material-ui/Menu'
import Table from 'mdi-material-ui/Table'
import Lifebuoy from 'mdi-material-ui/Lifebuoy'
import ChartLine from 'mdi-material-ui/ChartLine'
import CogOutline from 'mdi-material-ui/CogOutline'
import ChartDonut from 'mdi-material-ui/ChartDonut'
import FormSelect from 'mdi-material-ui/FormSelect'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import CartOutline from 'mdi-material-ui/CartOutline'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import LockOutline from 'mdi-material-ui/LockOutline'
import FileOutline from 'mdi-material-ui/FileOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import ShieldOutline from 'mdi-material-ui/ShieldOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import DotsHorizontal from 'mdi-material-ui/DotsHorizontal'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import ArchiveOutline from 'mdi-material-ui/ArchiveOutline'
import ChartBellCurve from 'mdi-material-ui/ChartBellCurve'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import BookOpenOutline from 'mdi-material-ui/BookOpenOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import VectorArrangeBelow from 'mdi-material-ui/VectorArrangeBelow'
import FileDocumentOutline from 'mdi-material-ui/FileDocumentOutline'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'
import ChartTimelineVariant from 'mdi-material-ui/ChartTimelineVariant'
import PackageVariantClosed from 'mdi-material-ui/PackageVariantClosed'
import PaletteSwatchOutline from 'mdi-material-ui/PaletteSwatchOutline'
import CheckboxMarkedOutline from 'mdi-material-ui/CheckboxMarkedOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import ChartBellCurveCumulative from 'mdi-material-ui/ChartBellCurveCumulative'
import CheckboxMarkedCircleOutline from 'mdi-material-ui/CheckboxMarkedCircleOutline'

// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      icon: HomeOutline,
      title: 'Dashboards',
      children: [
        {
          icon: ChartDonut,
          title: 'CRM',
          path: '/docs/dashboards/crm'
        },
        {
          icon: ChartTimelineVariant,
          title: 'Analytics',
          path: '/docs/dashboards/analytics'
        },
        {
          icon: CartOutline,
          title: 'eCommerce',
          path: '/docs/dashboards/ecommerce'
        }
      ]
    },
    {
      icon: Apps,
      title: 'Apps',
      children: [
        {
          title: 'Email',
          icon: EmailOutline,
          path: '/docs/apps/email'
        },
        {
          title: 'Chat',
          icon: MessageOutline,
          path: '/docs/apps/chat'
        },
        {
          title: 'Calendar',
          icon: CalendarBlankOutline,
          path: '/docs/apps/calendar'
        },
        {
          title: 'Invoice',
          icon: FileDocumentOutline,
          children: [
            {
              title: 'List',
              path: '/docs/apps/invoice/list'
            },
            {
              title: 'Preview',
              path: '/docs/apps/invoice/preview'
            },
            {
              title: 'Edit',
              path: '/docs/apps/invoice/edit'
            },
            {
              title: 'Add',
              path: '/docs/apps/invoice/add'
            }
          ]
        },
        {
          title: 'User',
          icon: AccountOutline,
          children: [
            {
              title: 'List',
              path: '/docs/apps/user/list'
            },
            {
              title: 'View',
              path: '/docs/apps/user/view'
            }
          ]
        },
        {
          title: '1Roles & Permissions',
          icon: LockOutline,
          children: [
            {
              title: 'Roles',
              path: '/docs/apps/roles'
            },
            {
              title: 'Permissions',
              path: '/docs/apps/permissions'
            }
          ]
        }
      ]
    },
    {
      icon: PaletteSwatchOutline,
      title: 'UI',
      children: [
        {
          title: 'Typography',
          icon: FormatLetterCase,
          path: '/docs/ui/typography'
        },
        {
          title: 'Icons',
          path: '/docs/ui/icons',
          icon: GoogleCirclesExtended
        },
        {
          title: 'Cards',
          icon: CreditCardOutline,
          children: [
            {
              title: 'Basic',
              path: '/docs/ui/cards/basic'
            },
            {
              title: 'Statistics',
              path: '/docs/ui/cards/statistics'
            },
            {
              title: 'Advanced',
              path: '/docs/ui/cards/advanced'
            },
            {
              title: 'Gamification',
              path: '/docs/ui/cards/gamification'
            },
            {
              title: 'Actions',
              path: '/docs/ui/cards/actions'
            },
            {
              title: 'Widgets',
              path: '/docs/ui/cards/widgets'
            }
          ]
        },
        {
          title: 'Components',
          icon: ArchiveOutline,
          children: [
            {
              title: 'Accordion',
              path: '/docs/components/accordion'
            },
            {
              title: 'Alerts',
              path: '/docs/components/alerts'
            },
            {
              title: 'Avatars',
              path: '/docs/components/avatars'
            },
            {
              title: 'Badges',
              path: '/docs/components/badges'
            },
            {
              title: 'Buttons',
              path: '/docs/components/buttons'
            },
            {
              title: 'Button Group',
              path: '/docs/components/button-group'
            },
            {
              title: 'Chips',
              path: '/docs/components/chips'
            },
            {
              title: 'Dialogs',
              path: '/docs/components/dialogs'
            },
            {
              title: 'List',
              path: '/docs/components/list'
            },
            {
              title: 'Menu',
              path: '/docs/components/menu'
            },
            {
              title: 'Pagination',
              path: '/docs/components/pagination'
            },
            {
              title: 'Ratings',
              path: '/docs/components/ratings'
            },
            {
              title: 'Snackbar',
              path: '/docs/components/snackbar'
            },
            {
              title: 'Tabs',
              path: '/docs/components/tabs'
            },
            {
              title: 'Timeline',
              path: '/docs/components/timeline'
            },
            {
              title: 'Toasts',
              path: '/docs/components/toast'
            },
            {
              title: 'Tree View',
              path: '/docs/components/tree-view'
            },
            {
              title: 'More',
              path: '/docs/components/more'
            }
          ]
        }
      ]
    },
    {
      icon: FileOutline,
      title: 'Pages',
      children: [
        {
          title: 'Authentication',
          icon: LockOutline,
          children: [
            {
              title: 'Login',
              children: [
                {
                  openInNewTab: true,
                  title: 'Login v1',
                  path: '/docs/pages/auth/login-v1'
                },
                {
                  openInNewTab: true,
                  title: 'Login v2',
                  path: '/docs/pages/auth/login-v2'
                },
                {
                  openInNewTab: true,
                  title: 'Login With AppBar',
                  path: '/docs/pages/auth/login-with-appbar'
                }
              ]
            },
            {
              title: 'Register',
              children: [
                {
                  openInNewTab: true,
                  title: 'Register v1',
                  path: '/docs/pages/auth/register-v1'
                },
                {
                  openInNewTab: true,
                  title: 'Register v2',
                  path: '/docs/pages/auth/register-v2'
                }
              ]
            },
            {
              title: 'Forgot Password',
              children: [
                {
                  openInNewTab: true,
                  title: 'Forgot Password v1',
                  path: '/docs/pages/auth/forgot-password-v1'
                },
                {
                  openInNewTab: true,
                  title: 'Forgot Password v2',
                  path: '/docs/pages/auth/forgot-password-v2'
                }
              ]
            },
            {
              title: 'Reset Password',
              children: [
                {
                  openInNewTab: true,
                  title: 'Reset Password v1',
                  path: '/docs/pages/auth/reset-password-v1'
                },
                {
                  openInNewTab: true,
                  title: 'Reset Password v2',
                  path: '/docs/pages/auth/reset-password-v2'
                }
              ]
            }
          ]
        },
        {
          icon: CogOutline,
          title: 'Account Settings',
          path: '/docs/pages/account3-settings'
        },
        {
          title: 'Pricing',
          icon: CurrencyUsd,
          path: '/docs/pages/pricing'
        },
        {
          title: 'FAQ',
          path: '/docs/pages/faq',
          icon: HelpCircleOutline
        },
        {
          icon: BookOpenOutline,
          title: 'Knowledge Base',
          path: '/docs/pages/knowledge-base'
        },
        {
          title: 'Miscellaneous',
          icon: FileOutline,
          children: [
            {
              openInNewTab: true,
              title: 'Coming Soon',
              path: '/docs/pages/misc/coming-soon'
            },
            {
              openInNewTab: true,
              title: 'Under Maintenance',
              path: '/docs/pages/misc/under-maintenance'
            },
            {
              openInNewTab: true,
              title: 'Page Not Found - 404',
              path: '/docs/pages/misc/404-not-found'
            },
            {
              openInNewTab: true,
              title: 'Not Authorized - 401',
              path: '/docs/pages/misc/401-not-authorized'
            },
            {
              openInNewTab: true,
              title: 'Server Error - 500',
              path: '/docs/pages/misc/500-server-error'
            }
          ]
        },
        {
          icon: VectorArrangeBelow,
          title: 'Dialog Examples',
          path: '/docs/pages/dialog-examples'
        }
      ]
    },
    {
      title: 'Forms & Tables',
      icon: CheckboxMarkedOutline,
      children: [
        {
          title: 'Form Elements',
          icon: FormSelect,
          children: [
            {
              title: 'Text Field',
              path: '/docs/forms/form-elements/text-field'
            },
            {
              title: 'Select',
              path: '/docs/forms/form-elements/select'
            },
            {
              title: 'Checkbox',
              path: '/docs/forms/form-elements/checkbox'
            },
            {
              title: 'Radio',
              path: '/docs/forms/form-elements/radio'
            },
            {
              title: 'Textarea',
              path: '/docs/forms/form-elements/textarea'
            },
            {
              title: 'Autocomplete',
              path: '/docs/forms/form-elements/autocomplete'
            },
            {
              title: 'Date Pickers',
              path: '/docs/forms/form-elements/pickers'
            },
            {
              title: 'Switch',
              path: '/docs/forms/form-elements/switch'
            },
            {
              title: 'File Uploader',
              path: '/docs/forms/form-elements/file-uploader'
            },
            {
              title: 'Editor',
              path: '/docs/forms/form-elements/editor'
            },
            {
              title: 'Slider',
              path: '/docs/forms/form-elements/slider'
            },
            {
              title: 'Input Mask',
              path: '/docs/forms/form-elements/input-mask'
            }
          ]
        },
        {
          icon: CubeOutline,
          title: 'Form Layouts',
          path: '/docs/forms/form-layouts'
        },
        {
          title: 'Form Validation',
          path: '/docs/forms/form-validation',
          icon: CheckboxMarkedCircleOutline
        },
        {
          title: 'Form Wizard',
          path: '/docs/forms/form-wizard',
          icon: PackageVariantClosed
        },
        {
          title: 'Table',
          icon: Table,
          path: '/docs/tables/mui'
        },
        {
          title: 'Mui DataGrid',
          icon: Table,
          path: '/docs/tables/data-grid'
        }
      ]
    },
    {
      title: 'Charts',
      icon: ChartDonut,
      children: [
        {
          title: 'Apex',
          icon: ChartLine,
          path: '/docs/charts/apex-charts'
        },
        {
          title: 'ChartJS',
          path: '/docs/charts/chartjs',
          icon: ChartBellCurveCumulative
        }
      ]
    },
    {
      title: 'Others',
      icon: DotsHorizontal,
      children: [
        {
          path: '/docs/acl',
          action: 'read',
          subject: 'acl-page',
          icon: ShieldOutline,
          title: 'Access Control'
        },
        {
          title: 'Menu Levels',
          icon: Menu,
          children: [
            {
              title: 'Menu Level 2.1'
            },
            {
              title: 'Menu Level 2.2',
              children: [
                {
                  title: 'Menu Level 3.1'
                },
                {
                  title: 'Menu Level 3.2'
                }
              ]
            }
          ]
        },
        {
          title: 'Disabled Menu',
          icon: EyeOffOutline,
          disabled: true
        },
        {
          title: 'Raise Support',
          icon: Lifebuoy,
          externalLink: true,
          openInNewTab: true,
          path: 'https://pixinvent.ticksy.com/'
        },
        {
          title: 'Documentation',
          icon: FileDocumentOutline,
          externalLink: true,
          openInNewTab: true,
          path: 'https://pixinvent.com/demo/materialize-mui-react-nextjs-admin-template/documentation'
        }
      ]
    }
  ]
}

export default navigation
