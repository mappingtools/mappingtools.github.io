import React from "react";

import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Link from "@docusaurus/Link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import styles from "./index.module.css";

const HomepageFeature = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{marginBottom: 30 + "px"}}>{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx("row", styles.buttonsContainer)}>
          <div className={styles.buttons}>
            <Link
              className="button button--outline button--secondary button--lg"
              to={useBaseUrl('docs/documentation/getting-started')}
            >
              Get Started
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link className={clsx('button button--outline button--primary button--lg', styles.downloadButton)} to={useBaseUrl('download/')}>
              <FontAwesomeIcon icon={faDownload} />&nbsp;Download
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomepageFeature;