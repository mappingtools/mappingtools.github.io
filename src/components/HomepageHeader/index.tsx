import React from "react";

import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate from '@docusaurus/Translate';

import Link from "@docusaurus/Link";

import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from "./index.module.css";

const HomepageFeature = () => {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__subtitle", styles.tagLine)}>
          <img className={clsx(styles.logo)} src="/img/logo.svg" alt="" />
          <span className={clsx(styles.span)}>
            <Translate
              id="homepage.tagline"
              description="The homepage tagline"
              values={{
                allInOne: <b><Translate id="homepage.tagline.allInOne" description="The all-in-one phrase highlighted in the homepage tagline">all-in-one</Translate></b>,
                efficient: <b><Translate id="homepage.tagline.efficient" description="The efficient phrase highlighted in the homepage tagline">efficient</Translate></b>,
                creative: <b><Translate id="homepage.tagline.creative" description="The creative phrase highlighted in the homepage tagline">creative</Translate></b>,
              }}>
              Mapping Tools is an &#123;allInOne&#125; application for &#123;efficient&#125; and &#123;creative&#125; mapping in osu!
            </Translate>
          </span>
        </h1>
        <div className={clsx("row", styles.buttonsContainer)}>
          <div className={styles.buttons}>
            <Link className={clsx("button button--secondary button--lg", styles.introButton)} to={useBaseUrl('docs/')}>
              <Translate id="homepage.getStarted" description="Homepage button linking to the documentation">Get Started</Translate>
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link className={clsx('button button--primary button--lg', styles.downloadButton)} to={useBaseUrl('download/')}>
              <FontAwesomeIcon icon={faDownload} />&nbsp;
              <Translate id="homepage.download" description="Homepage download button">Download</Translate>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomepageFeature;
