import React, { type ReactNode } from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogPostPage from '@theme-original/BlogPostPage';
import type { Props } from '@theme/BlogPostPage';

export default function BlogPostPageWrapper(props: Props): ReactNode {
  const {
    i18n: { currentLocale, defaultLocale },
  } = useDocusaurusContext();

  return (
    <>
      {currentLocale !== defaultLocale && (
        <Head>
          <meta name="robots" content="noindex, follow" />
        </Head>
      )}
      <BlogPostPage {...props} />
    </>
  );
}
