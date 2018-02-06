export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name:'Monitor',
    url:'/dashboard',
    children:[
      {
        name:'Person',
        url:'/dashboard',
        icon: 'icon-star'
      },
      {
        name:'Topic',
        url:'/dashboard',
        icon: 'icon-star'
      },
      {
        name:'Place',
        url:'/dashboard',
        icon: 'icon-star'
      },
      {
        name:'Event',
        url:'/dashboard',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Discovery',
    url: '/dashboard'
  },
  {
    name:'Trend',
    url:'/dashboard'
  },
  {
    name:'Reports',
    url: '/dashboard',
    children: [
      {
        name:'Report 1',
        url:'/dashboard',
        icon: 'icon-puzzle'
      },
      {
        name:'Report 2',
        url:'/dashboard',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name:'Map',
    url:'/map'
  },
  {
    title: true,
    name: 'UI elements'
  },
  {
    name: 'Components',
    url: '/components',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Buttons',
        url: '/components/buttons',
        icon: 'icon-puzzle'
      },
      {
        name: 'Social Buttons',
        url: '/components/social-buttons',
        icon: 'icon-puzzle'
      },
      {
        name: 'Cards',
        url: '/components/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/components/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Modals',
        url: '/components/modals',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/components/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/components/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/components/tabs',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/pages/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/pages/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/pages/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/pages/500',
        icon: 'icon-star'
      }
    ]
  }
];
