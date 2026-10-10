import React, { ReactNode } from 'react';

import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';
import HomepageHeader from "../components/HomepageHeader";
import HomepageFeatures from "../components/HomepageFeatures";

const Home: React.FC = () => {
  return (
    <Layout
      title={translate({ id: 'homepage.title', message: 'Home' })}
      description={translate({ id: 'homepage.description', message: 'Free tools for osu! beatmap creators. Clean timing points, shape sliders, create patterns, and manage hitsounds with Mapping Tools.' })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

export default Home;
