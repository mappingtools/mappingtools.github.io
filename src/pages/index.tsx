import React, { ReactNode } from 'react';

import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';
import HomepageHeader from "../components/HomepageHeader";
import HomepageFeatures from "../components/HomepageFeatures";

const Home: React.FC = () => {
  return (
    <Layout
      title={translate({ id: 'homepage.title', message: 'Home' })}
      description={translate({ id: 'homepage.description', message: 'Mapping Tools for osu!' })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

export default Home;
