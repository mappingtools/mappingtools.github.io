import React, {ReactNode} from "react";

import clsx from 'clsx';
import useBaseUrl from "@docusaurus/useBaseUrl";

import FadeIn from "../FadeIn";

import styles from "./index.module.css";

import {features} from "./features";

interface FeatureProps {
    imageUrl: string,
    title: string,
    description: ReactNode,
    position: number,
}

const Feature: React.FC<FeatureProps> = ({imageUrl, title, description, position}) => {
    const imgUrl = useBaseUrl(imageUrl);

    return (
      <FadeIn className={clsx('col col--4', styles.feature)} delay={`${300+300*(position%3)}ms`}>
          {
            imgUrl && (
              <div className="text--center">
              <img className={styles.featureImage} src={imgUrl} alt={title} />
              </div>
            )
          }
          <h3>{title}</h3>
          <p>{description}</p>
      </FadeIn>
    );
}

const HomepageFeature: React.FC = () => {
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {
              features.map((props, position) => (
                <Feature key={position} {...props} position={position} />
              ))
            }
          </div>
        </div>
      </section>
    );
}

export default HomepageFeature;