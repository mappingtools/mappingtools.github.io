import React from "react";

import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Link from "@docusaurus/Link";

import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from "./index.module.css";

const HomepageFeature = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__subtitle", styles.tagLine)}>
          <img className={clsx(styles.logo)} src="/img/logo.svg"></img>
          <span className={clsx(styles.span)}>Mapping Tools is an <b>all-in-one</b> application for <b>efficient</b> and <b>creative</b> mapping in osu</span>
        </h1>
        <div className={clsx("row", styles.buttonsContainer)}>
          <div className={styles.buttons}>
            <Link className={clsx("button button--secondary button--lg", styles.introButton)} to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link className={clsx('button button--primary button--lg', styles.downloadButton)} to={useBaseUrl('download/')}>
              <FontAwesomeIcon icon={faDownload} />&nbsp;Download
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomepageFeature;