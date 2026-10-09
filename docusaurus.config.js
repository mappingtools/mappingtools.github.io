/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Mapping Tools',
  tagline: 'Utilities for osu! mapping',
  url: 'https://mappingtools.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
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
        'Join the Mapping Tools community on <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/YfjKN2yjQV">Discord</a> for support and discussion.',
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
          activeBasePath: 'docs',
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
          href: 'https://github.com/olibomby/mapping_tools',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: "right"
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
              label: 'Introduction',
              to: 'docs',
            },
            {
              label: 'Documentation',
              to: 'docs'
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
              to: 'docs/mapping-tools/contribute',
            },
            {
              label: 'Source code',
              href: 'https://github.com/OliBomby/Mapping_Tools',
            },
            {
              label: 'Website source',
              href: 'https://github.com/mappingtools/mappingtools.github.io',
            }
          ],
        },
        {
          title: "Support us",
          items: [
            {
              label: "Ko-fi",
              to: "https://ko-fi.com/olibomby"
            }
          ]
        }
      ],
      logo: {
        alt: 'Mapping Tools Logo',
        src: 'img/logo.svg',
        width: 72,
        height: 72,
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
