import React, { ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

import FadeIn from '../components/FadeIn';

interface FeatureProps {
  imageUrl: string,
  title: string,
  description: ReactNode,
  i: number,
}

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_mt_easy.svg',
    description: (
      <>
        With tooltips,&nbsp;
        <Link to="/docs">documentation</Link>, and a&nbsp;
        <a href="https://discord.gg/YfjKN2yjQV">community discord server</a>,
        picking up Mapping Tools is just a click away!
      </>
    ),
  },
  {
    title: 'Unleash Your Creativity',
    imageUrl: 'img/undraw_mt_creativity.svg',
    description: (
      <>
        Shape and manipulate sliders with a simple and intuitive user interface.
      </>
    ),
  },
  {
    title: 'Diversify Your Hitsounding',
    imageUrl: 'img/undraw_mt_hitsounding.svg',
    description: (
      <>
        Create and modify unique and complex hitsounding with ease.
      </>
    ),
  },
  {
    title: 'Clean and Polish Your Maps',
    imageUrl: 'img/undraw_mt_cleaning.svg',
    description: (
      <>
        Resnap all relevant timing points and remove unnecessary ones with the click of a button. 
      </>
    ),
  },
  {
    title: 'Bring Color to Your Maps',
    imageUrl: 'img/undraw_mt_colorhax.svg',
    description: (
      <>
        Colorhax without hassle, the way it always should've been.
      </>
    ),
  },
  {
    title: 'Reinforce Geometric Structure',
    imageUrl: 'img/undraw_mt_geometrydashboard.svg',
    description: (
      <>
        Effortlessly create perfect blankets, off-angle symmetry, hex grids, and more.
      </>
    ),
  },
];

const Feature: React.FC<FeatureProps> = ({imageUrl, title, description, i}) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <FadeIn
      className={clsx('col col--4', styles.feature)}
      delay={`${300+300*(i%3)}ms`}
    >
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </FadeIn>
  );
}

const Home: React.FC = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title="Home"
      description="Mapping Tools for osu!"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={clsx("row", styles.buttonsContainer)}>
            <div className={styles.buttons}>
              <Link
                className="button button--outline button--secondary button--lg"
                to={useBaseUrl('getting-started/')}
              >
                Get Started
              </Link>
            </div>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--primary button--lg',
                  styles.downloadButton,
                )}
                to={useBaseUrl('download/')}
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, i) => (
                  <Feature key={i} {...props} i={i} />
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