/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Mapping Tools',
  tagline: 'Utilities for osu! mapping',
  url: 'https://mappingtools.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mappingtools', // Usually your GitHub org/user name.
  projectName: 'mappingtools.github.io', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark"
    },
    image: 'img/logo.png',
    announcementBar: {
      id: 'discord_announcement', // Any value that will identify this message.
      content:
        'Mapping Tools now has a new <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/YfjKN2yjQV">discord</a>!',
      isCloseable: true,
    },
    navbar: {
      title: 'Mapping Tools',
      logo: {
        alt: 'Mapping Tools Logo',
        src: 'img/logo.svg',
      },
      hideOnScroll: true,
      items: [
        {
          to: 'download',
          label: 'Download',
          position: 'left',
        },
        {
          to: 'docs',
          activeBasePath: 'docs/documentation',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          to: 'changelog',
          label: 'Changelog',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: 'docs/contribute',
          activeBasePath: 'docs/contribute',
          label: 'Contribute',
          position: 'right',
        },
        {
          type: 'localeDropdown',
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
              label: 'Getting Started',
              to: 'docs/documentation/getting-started',
            },
            {
              label: 'Documentation',
              to: 'docs/'
            },
            {
              label: 'Download',
              to: 'download',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/YfjKN2yjQV',
            }
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'Overview',
              to: 'docs/contribute/',
            },
            {
              label: 'Client',
              to: 'docs/contribute/Client/contribute-mt-intro',
            },
            {
              label: 'Website',
              to: 'docs/contribute/Website/contribute-web-intro',
            }
          ],
        },
        {
          title: "Support us",
          items: [
            {
              label: "Patreon",
              to: "https://www.patreon.com/OliBomby"
            }
          ]
        }
      ],
      logo: {
        alt: 'Mapping Tools Logo',
        src: 'img/logo.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} OliBomby and the Mapping Tools documentation contributors.`,
    },
    colorMode: {
      defaultMode: 'dark',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/mappingtools/mappingtools.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/mappingtools/mappingtools.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      'zh-Hans',
      'ru',
      "de"
    ],
    localeConfigs: {
      'en': {
        label: 'English',
      },
      'zh-Hans': {
        label: '中文',
      },
      'ru': {
        label: 'Русский',
      },
      "de": {
        label: "Deutsch"
      }
    }
  },
};
