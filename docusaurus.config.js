// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hey hi, AI',
  tagline: "K's AI Blog",
  url: 'https://docusaurus-rex.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
        title: 'Hey Hi, AI',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Korean Portfolio Site',
            items: [
              {
                label: '한국어 포트폴리오',
                to: 'https://kyeongsupChoi.github.io',
              },
            ],
          },
          {
            title: 'Social Links',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/KyeongsupChoi',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/kyeongsup-choi/',
              },
              {
                label: 'Kaggle',
                href: 'https://www.kaggle.com/kyeongsupchoi',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hey Hi, AI. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
