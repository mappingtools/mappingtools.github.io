import React, { type ReactNode } from 'react';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import Layout from '@theme-original/Layout';
import type { Props } from '@theme/Layout';

function isLowValueBlogRoute(pathname: string): boolean {
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(?:-[A-Za-z0-9]+)?(?=\/)/, '');

  return /^\/blog\/(?:archive|authors|tags)(?:\/|$)/.test(pathWithoutLocale);
}

export default function LayoutWrapper(props: Props): ReactNode {
  const { pathname } = useLocation();

  return (
    <>
      {isLowValueBlogRoute(pathname) && (
        <Head>
          <meta name="robots" content="noindex, follow" />
        </Head>
      )}
      <Layout {...props} />
    </>
  );
}
