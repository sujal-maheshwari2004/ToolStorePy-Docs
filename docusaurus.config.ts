import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ToolStorePy',
  tagline:
    'Automatic MCP server builder, semantic tool index engine, and index authoring framework.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://toolstorepy.example.com',
  baseUrl: '/',

  organizationName: 'sujal-maheshwari2004',
  projectName: 'toolstorepy-docs',

  onBrokenLinks: 'throw',

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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/toolstorepy-social-card.svg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'ToolStorePy',
      logo: {
        alt: 'ToolStorePy logo',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/creating-custom-tool-indexes',
          label: 'Custom Indexes',
          position: 'left',
        },
        {
          to: '/docs/cli-reference',
          label: 'CLI',
          position: 'left',
        },
        {
          href: 'https://github.com/sujal-maheshwari2004/ToolStore',
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
              label: 'Quickstart',
              to: '/docs/quickstart',
            },
            {
              label: 'Custom Tool Indexes',
              to: '/docs/creating-custom-tool-indexes',
            },
            {
              label: 'CLI Reference',
              to: '/docs/cli-reference',
            },
          ],
        },
        {
          title: 'Architecture',
          items: [
            {
              label: 'Pipeline Overview',
              to: '/docs/pipeline-architecture/overview',
            },
            {
              label: 'Security Model',
              to: '/docs/security-model',
            },
            {
              label: 'Evaluation Results',
              to: '/docs/evaluation-results',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Overview',
              to: '/docs/intro',
            },
            {
              label: 'Extension Points',
              to: '/docs/extending-toolstorepy',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sujal-maheshwari2004/ToolStore',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ToolStorePy docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
