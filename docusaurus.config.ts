import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as OpenApiDocsOptions} from 'docusaurus-plugin-openapi-docs';

const config: Config = {
  title: 'CheckVIES',
  tagline: 'Validate VAT numbers via VIES efficiently',
  favicon: 'img/favicon.ico',

  url: 'https://docs.checkvies.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'checkvies',
  projectName: 'checkvies-docs',

  future: {
    faster: true,
    v4: true,
  },

  onBrokenLinks: 'throw',
  markdown: {
    format: 'detect',
    mermaid: true,
    preprocessor: ({filePath, fileContent}) => {
      return fileContent;
    },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: '@theme/ApiItem', // Derived from docusaurus-theme-openapi-docs
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          checkvies: {
            specPath: 'openapi/spec.yaml',
            outputDir: 'docs/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiDocsOptions,
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig: {
    // Replace with your project's social card here
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'CheckVIES',
      logo: {
        alt: 'CheckVIES Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/api/checkvies-automated-api',
          label: 'API Reference',
          position: 'left',
        },
        {
          to: '/docs/clients',
          label: 'Client Examples',
          position: 'left',
        },
        {
          href: 'https://github.com/checkvies/docs',
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
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'API',
          items: [
            {
              label: 'API Reference',
              to: '/docs/api/checkvies-automated-api',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/checkvies/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CheckVIES. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'kotlin', 'java'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
