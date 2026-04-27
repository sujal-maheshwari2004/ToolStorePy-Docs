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
      defaultMode: 'dark',
      disableSwitch: true,
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
          to: '/docs/pipeline-architecture/overview',
          label: 'Pipeline',
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
          title: 'Get Started',
          items: [
            { label: 'Introduction', to: '/docs/intro' },
            { label: 'Installation', to: '/docs/installation' },
            { label: 'Quickstart', to: '/docs/quickstart' },
          ],
        },
        {
          title: 'Architecture',
          items: [
            { label: 'Pipeline Overview', to: '/docs/pipeline-architecture/overview' },
            { label: 'Security Model', to: '/docs/security-model' },
            { label: 'Evaluation Results', to: '/docs/evaluation-results' },
          ],
        },
        {
          title: 'Index Authoring',
          items: [
            { label: 'Custom Tool Indexes', to: '/docs/creating-custom-tool-indexes' },
            { label: 'Publishing an Index', to: '/docs/publishing-a-tool-index' },
            { label: 'CLI Reference', to: '/docs/cli-reference' },
          ],
        },
        {
          title: 'Project',
          items: [
            { label: 'GitHub', href: 'https://github.com/sujal-maheshwari2004/ToolStore' },
            { label: 'Extending ToolStorePy', to: '/docs/extending-toolstorepy' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ToolStorePy — MIT License`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['python', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
