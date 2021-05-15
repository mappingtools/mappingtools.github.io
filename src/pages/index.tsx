import React, { ReactNode } from 'react';

import Layout from '@theme/Layout';
import HomepageHeader from "../components/HomepageHeader";
import HomepageFeatures from "../components/HomepageFeatures";

const Home: React.FC = () => {
  return (
    <Layout title="Home" description="Mapping Tools for osu!">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

export default Home;