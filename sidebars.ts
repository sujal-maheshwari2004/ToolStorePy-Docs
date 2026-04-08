import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'installation',
    'quickstart',
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      items: [
        'core-concepts/queries-json',
        'core-concepts/tool-index-toon-format',
        'core-concepts/vector-db-creation',
        'core-concepts/repo-cache',
        'core-concepts/mcp-builder',
      ],
    },
    {
      type: 'category',
      label: 'Pipeline Architecture',
      collapsed: false,
      items: [
        'pipeline-architecture/overview',
        'pipeline-architecture/semantic-search',
        'pipeline-architecture/cross-encoder-reranking',
        'pipeline-architecture/repo-loader',
        'pipeline-architecture/security-scanner',
        'pipeline-architecture/env-merger',
        'pipeline-architecture/ast-parser',
        'pipeline-architecture/mcp-synthesizer',
      ],
    },
    'creating-custom-tool-indexes',
    'security-model',
    'evaluation-results',
    'cli-reference',
    {
      type: 'category',
      label: 'Extending ToolStorePy',
      collapsed: false,
      items: ['extending-toolstorepy', 'publishing-a-tool-index'],
    },
  ],
};

export default sidebars;
