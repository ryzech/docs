
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','a62'),
    exact: true
  },
  {
    path: '/blog/2021/12/31/testing',
    component: ComponentCreator('/blog/2021/12/31/testing','1ab'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','79a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','bf6'),
    routes: [
      {
        path: '/docs/banmanager',
        component: ComponentCreator('/docs/banmanager','896'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatManagement',
        component: ComponentCreator('/docs/ChatManagement','8b1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/coreprotect',
        component: ComponentCreator('/docs/coreprotect','cac'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Examples',
        component: ComponentCreator('/docs/Examples','908'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/InventoryManagement',
        component: ComponentCreator('/docs/InventoryManagement','6a7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Logging',
        component: ComponentCreator('/docs/Logging','388'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Philosophy',
        component: ComponentCreator('/docs/Philosophy','352'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/StaffChat',
        component: ComponentCreator('/docs/StaffChat','df9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
