import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import styles from './changelog.module.css';

const num_releases = 10;

const Changelog: React.FC = () => {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/repos/OliBomby/Mapping_Tools/releases?per_page=${num_releases}`, {
        method: 'GET',
      });

      const _data = await response.json();

      setData(_data.map(release => (
        {
          tag: release.tag_name,
          date: new Date(release.published_at).toLocaleDateString(),
          author: release.author.login,
          description: release.body.replace(/\r/g, "").split(/\n/).join('<br>'),
        }
      )));
    }
    
    fetchData();
  }, []);

  return (
    <Layout
      title="Changelog"
      description="Mapping Tools changelog"
    >
      <div className={clsx("container padding-vert--lg", styles.content)}>
        <h1>Latest Releases</h1>
        {data ? (
            <div className="menu">
              <ul className="menu__list">
                {data && data.map(({tag, date, author, description}, i) => (
                  <li
                    key={i}
                    className={clsx("card menu__list-item", open!==i && "menu__list-item--collapsed")}
                    onClick={() => setOpen(open===i ? -1 : i)}
                  >
                    <div className={clsx("menu__link menu__link--sublist", styles.release)}>
                      <div>{tag}</div>
                      <div>{date}</div>
                    </div>
                    <ul className="menu__list">
                      <li className="menu__list-item">
                        <div className={styles.releaseBody} dangerouslySetInnerHTML={{__html: description}} />
                        <hr className={styles.hr} />
                        by {author}
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <h4>Loading...</h4>
          )
        }
      </div>
    </Layout>
  );
}

export default Changelog;