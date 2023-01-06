// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Legundo SMP Docs',
  tagline: 'Be good gang. <3',
  url: 'https://docs.ryzech.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ryzech', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ]
    
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/ryzech/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ryzech/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SMP Docs',
        logo: {
          alt: 'SMP Logo',
          src: 'img/icon.webp',
        },
        items: [
          {
            type: 'doc',
            docId: 'coreprotect',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'News', position: 'left'},
          {
            href: 'https://github.com/ryzech/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/coreprotect',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://legundo.com/discord',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/legundo',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/c/legundo'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ryzech/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} all rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
