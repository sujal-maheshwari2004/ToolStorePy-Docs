import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const FEATURES = [
  {
    tag: 'Build',
    title: 'One server from many repos',
    body: 'Resolves an index, runs semantic retrieval + reranking, clones winning repos, and synthesizes a single mcp_unified_server.py. No manual wiring.',
    icon: '⬡',
  },
  {
    tag: 'Index',
    title: 'Bring your own tool index',
    body: 'Author catalogs from a JSON manifest, embed them locally into ChromaDB, and distribute via URL. Custom discovery, no hardcoding.',
    icon: '◈',
  },
  {
    tag: 'Security',
    title: 'Supply-chain visibility',
    body: 'Static AST scanning flags shell exec, network access, deserialization, and env leaks before build approval. Audit before runtime.',
    icon: '◉',
  },
];

const PIPELINE = [
  { step: '01', label: 'queries.json', desc: 'Natural-language tool descriptions' },
  { step: '02', label: 'Semantic retrieval', desc: 'SentenceTransformer + ChromaDB top-k' },
  { step: '03', label: 'Cross-encoder rerank', desc: 'Precision pass over candidate set' },
  { step: '04', label: 'Clone + scan', desc: 'AST security scan, env merge, approval' },
  { step: '05', label: 'MCP synthesis', desc: 'Single auditable server file' },
];

const SEVERITY = [
  { name: 'HIGH', desc: 'Shell exec, dynamic eval, outbound network, unsafe deserialization', color: '#f43f5e' },
  { name: 'MEDIUM', desc: 'Filesystem access, env variable access, reflection', color: '#f59e0b' },
  { name: 'LOW', desc: 'Crypto primitives, deprecated modules, potential secret logging', color: '#22d3ee' },
];

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid} />
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              semantic tool discovery · mcp builder · index engine
            </div>

            <Heading as="h1" className={styles.heroTitle}>
              Tool<span className={styles.heroAccent}>Store</span>Py
            </Heading>

            <p className={styles.heroTagline}>
              // describe tools in plain english. get a running mcp server.
            </p>

            <p className={styles.heroBody}>
              ToolStorePy takes a <code>queries.json</code> of natural-language tool
              requests, semantically retrieves matched repositories from a curated index,
              runs security scanning, merges secret templates, and synthesizes one
              runnable <code>mcp_unified_server.py</code> — with full build-time
              auditability.
            </p>

            <div className={styles.heroActions}>
              <Link className="button button--primary button--lg" to="/docs/quickstart">
                Quickstart
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/creating-custom-tool-indexes">
                Build an Index →
              </Link>
            </div>

            <div className={styles.heroPip}>
              <code className={styles.pipInstall}>pip install toolstorepy</code>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelDot} style={{background:'#f43f5e'}} />
              <span className={styles.panelDot} style={{background:'#f59e0b'}} />
              <span className={styles.panelDot} style={{background:'#22d3ee'}} />
              <span className={styles.panelFile}>queries.json → build</span>
            </div>
            <pre className={styles.panelCode}>{`# 1. describe what you need
$ cat queries.json
[
  {
    "tool_description":
      "evaluate arithmetic expressions"
  },
  {
    "tool_description":
      "convert units of measurement"
  }
]

# 2. build
$ toolstorepy build \\
    --queries queries.json \\
    --index core-tools

[✓] retrieved: calculator (0.94)
[✓] retrieved: unit-converter (0.91)
[!] scanning repos...
[✓] build complete

# 3. run
$ python mcp_unified_server.py`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function PipelineSection() {
  return (
    <section className={styles.pipelineSection}>
      <div className="container">
        <p className={styles.sectionEyebrow}>Architecture</p>
        <Heading as="h2" className={styles.sectionTitle}>
          Build pipeline
        </Heading>
        <div className={styles.pipelineTrack}>
          {PIPELINE.map((item, i) => (
            <div key={i} className={styles.pipelineStep}>
              <div className={styles.stepCircle}>{item.step}</div>
              <div className={styles.stepContent}>
                <div className={styles.stepLabel}>{item.label}</div>
                <div className={styles.stepDesc}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <p className={styles.sectionEyebrow}>Capabilities</p>
        <Heading as="h2" className={styles.sectionTitle}>
          Core surface
        </Heading>
        <div className={styles.featureGrid}>
          {FEATURES.map((f, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <p className={styles.featureTag}>{f.tag}</p>
              <Heading as="h3" className={styles.featureTitle}>{f.title}</Heading>
              <p className={styles.featureBody}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section className={styles.securitySection}>
      <div className="container">
        <div className={styles.securityInner}>
          <div className={styles.securityCopy}>
            <p className={styles.sectionEyebrow}>Security Scanner</p>
            <Heading as="h2" className={styles.sectionTitle}>
              Trust boundaries
            </Heading>
            <p className={styles.securityBody}>
              Every cloned repository passes through a static AST scanner before
              contributing to the final MCP server. Findings are tiered by severity
              and HIGH findings require explicit approval — no silent inclusion.
            </p>
            <Link className="button button--primary" to="/docs/security-model">
              Read the security model
            </Link>
          </div>
          <div className={styles.severityCards}>
            {SEVERITY.map((s, i) => (
              <div key={i} className={styles.severityCard}>
                <span className={styles.severityBar} style={{background: s.color}} />
                <code className={styles.severityName} style={{color: s.color}}>{s.name}</code>
                <span className={styles.severityDesc}>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaInner}>
          <Heading as="h2" className={styles.ctaTitle}>
            Stop wiring tools by hand.
          </Heading>
          <p className={styles.ctaBody}>
            ToolStorePy is open source. Describe what you need, retrieve the best
            match, audit the supply chain, ship the server.
          </p>
          <div className={styles.ctaActions}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Read the docs
            </Link>
            <a
              className="button button--secondary button--lg"
              href="https://github.com/sujal-maheshwari2004/ToolStore"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
          <div className={styles.ctaCode}>
            toolstorepy build --queries queries.json --index core-tools
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="ToolStorePy — Semantic MCP Server Builder"
      description="ToolStorePy turns plain-English tool requests into a unified MCP server. Semantic retrieval, security scanning, and custom index authoring.">
      <HeroSection />
      <PipelineSection />
      <FeaturesSection />
      <SecuritySection />
      <CtaSection />
    </Layout>
  );
}
