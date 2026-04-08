import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroCopy}>
          <div className={styles.badge}>Semantic tool discovery for MCP builders</div>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroBody}>
            Describe the tools you need in plain English, match them against a curated
            index, review the security findings, and generate one runnable MCP server.
            Authoring your own JSON-based index is a first-class workflow.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/quickstart">
              Start with Quickstart
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/creating-custom-tool-indexes">
              Bring Your Own Index
            </Link>
          </div>
        </div>

        <div className={styles.heroPanel}>
          <p className={styles.panelLabel}>Core workflow</p>
          <ol className={styles.workflowList}>
            <li>Author or download a semantic tool index.</li>
            <li>Match <code>queries.json</code> entries to repositories.</li>
            <li>Clone, scan, merge secrets, and synthesise one MCP server.</li>
          </ol>
          <div className={styles.codeBlock}>
            <code>toolstorepy build --queries queries.json --index core-tools</code>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Docs"
      description="ToolStorePy documentation for MCP server building, semantic search, and custom tool index authoring.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
