import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';

const features = [
  {
    title: 'Easy to Understand',
    imageUrl: 'img/blogger.svg',
    description: (
      <>
        This website prepared for beginners especially for <strong>Mechanical engineers</strong>. 
        Each article in this website is <strong>self-contained</strong>. These articles written 
        in <strong>easy to understand language</strong> so that normal people can understand it.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/developer.svg',
    description: (
      <>
        Each article has <strong>Table of Content</strong> on right side. 
        By using this, you can directly go to your interested area of article. 
        <em>This will help you to focus what matters to you.</em>
      </>
    ),
  },
  {
    title: 'Future Path',
    imageUrl: 'img/opensource.svg',
    description: (
      <>
        Currently, I am focusing on 2 things for this blog. 
        1) Userform tutorials for each SOLIDWORKS article. 
        2) Adding videos in SOLIDWORKS articles. 
        I am also thinking of starting <strong>SOLIDWORKS C# API</strong> tutorial articles. 
        Let me know what you think about it.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Head>
        <div>
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-8158659264340002"
              data-ad-slot="6644001766"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
      </Head>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/vba-in-sw')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
