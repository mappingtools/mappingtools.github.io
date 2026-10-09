import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const numReleases = 10;
const RELEASES_API_URL = `https://api.github.com/repos/OliBomby/Mapping_Tools/releases?per_page=${numReleases}`;

type Release = {
  tag: string;
  date: string;
  author: string;
  description: string;
};

const Changelog: React.FC = () => {
  const [releases, setReleases] = useState<Release[] | null>(null);
  const [expandedReleases, setExpandedReleases] = useState<Set<string>>(new Set());

  useEffect(() => {
    let isMounted = true;

    fetch(RELEASES_API_URL)
      .then((response) => {
        if (!response.ok) throw new Error('Could not load release notes.');
        return response.json();
      })
      .then((items) => {
        if (!isMounted) return;

        const latestReleases = items.map((release) => ({
          tag: release.tag_name,
          date: new Date(release.published_at).toLocaleDateString(),
          author: release.author.login,
          description: release.body.replace(/\r/g, '').split(/\n/).join('<br>'),
        }));

        setExpandedReleases(new Set(latestReleases.map(({ tag }) => tag)));
        setReleases(latestReleases);
      })
      .catch(() => {
        if (isMounted) setReleases([]);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Layout title="Changelog" description="Mapping Tools changelog">
      <div className={`container padding-vert--lg ${styles.content}`}>
        <h1>Latest Releases</h1>
        {releases === null ? (
          <p>Loading releases…</p>
        ) : releases.length === 0 ? (
          <p>Release notes are currently unavailable.</p>
        ) : (
          <section className={styles.releaseList} aria-label="Latest releases">
            {releases.map(({ tag, date, author, description }, index) => {
              const isExpanded = expandedReleases.has(tag);
              const detailsId = `release-details-${index}`;

              return (
                <article key={tag} className={styles.releaseCard}>
                  <button
                    type="button"
                    className={styles.releaseToggle}
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    onClick={() => setExpandedReleases((current) => {
                      const next = new Set(current);
                      if (next.has(tag)) {
                        next.delete(tag);
                      } else {
                        next.add(tag);
                      }
                      return next;
                    })}>
                    <span>{tag}</span>
                    <time>{date}</time>
                  </button>
                  <div id={detailsId} className={styles.releaseDetails} hidden={!isExpanded}>
                    <div className={styles.releaseBody} dangerouslySetInnerHTML={{ __html: description }} />
                    <hr className={styles.hr} />
                    <span>by {author}</span>
                  </div>
                </article>
              );
            })}
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Changelog;
