
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
    component: ComponentCreator('/blog','2f0'),
    exact: true
  },
  {
    path: '/blog/2021-10-07-patch-notes',
    component: ComponentCreator('/blog/2021-10-07-patch-notes','e58'),
    exact: true
  },
  {
    path: '/blog/2021-11-29-toxicity-ai',
    component: ComponentCreator('/blog/2021-11-29-toxicity-ai','db7'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/ai',
    component: ComponentCreator('/blog/tags/ai','314'),
    exact: true
  },
  {
    path: '/blog/tags/minecraft',
    component: ComponentCreator('/blog/tags/minecraft','79e'),
    exact: true
  },
  {
    path: '/blog/tags/plugins',
    component: ComponentCreator('/blog/tags/plugins','0f9'),
    exact: true
  },
  {
    path: '/blog/tags/programming',
    component: ComponentCreator('/blog/tags/programming','c01'),
    exact: true
  },
  {
    path: '/blog/tags/python',
    component: ComponentCreator('/blog/tags/python','e39'),
    exact: true
  },
  {
    path: '/blog/tags/smp',
    component: ComponentCreator('/blog/tags/smp','2f5'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','4ca'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
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
