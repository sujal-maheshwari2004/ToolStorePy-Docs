import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type FeatureItem = {
  eyebrow: string;
  title: string;
  description: ReactNode;
};

const featureList: FeatureItem[] = [
  {
    eyebrow: 'Build',
    title: 'Generate one MCP server from many repos',
    description: (
      <>
        ToolStorePy resolves an index, runs retrieval plus reranking, clones the
        winning repositories, and synthesises a single
        <code> mcp_unified_server.py </code>
        output.
      </>
    ),
  },
  {
    eyebrow: 'Index',
    title: 'Bring your own tool index',
    description: (
      <>
        Custom catalogs can start from a JSON manifest or any structured source,
        flow through embeddings and ChromaDB, and later be served back into the
        build pipeline with <code>--index-url</code>.
      </>
    ),
  },
  {
    eyebrow: 'Safety',
    title: 'Review supply-chain risk before runtime',
    description: (
      <>
        Static AST scanning, merged secret templates, and explicit approval for
        high-severity findings keep trust decisions visible while composing tools.
      </>
    ),
  },
];

function Feature({eyebrow, title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.intro}>
          <p className={styles.kicker}>Documentation pillars</p>
          <Heading as="h2">ToolStorePy is both a builder and an index engine</Heading>
          <p>
            These docs cover the packaged CLI workflow and the index-authoring
            workflow together, because the retrieval layer is a core product
            capability rather than a side topic.
          </p>
        </div>
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
