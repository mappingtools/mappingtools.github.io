import React, { createRef, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import styles from './changelog.module.css';

const numReleases = 10;

const Changelog: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/repos/OliBomby/Mapping_Tools/releases?per_page=${numReleases}`, {
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

  const [active, setActive] = useState(null);
  const [collapseHeights, setCollapseHeights] = useState(new Array(numReleases).fill(undefined));
  const collapseRefs: any = useRef(Array.from({length: numReleases}, _ => createRef())).current;

  const onClick = (i) => (() => {
    const clickedActive = active === i;
    
    if(active !== null) {
      collapseHeights[active] = undefined;
    }
    if(!clickedActive) {
      if(collapseRefs[i]?.current) {
        const {marginTop, marginBottom} = window.getComputedStyle(collapseRefs[i].current);
        collapseHeights[i] = `calc(${collapseRefs[i].current.offsetHeight}px + ${marginTop} + ${marginBottom})`;
      }
    }
    
    setCollapseHeights(collapseHeights);
    setActive(clickedActive ? null : i);
  });

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
                    className={clsx("card menu__list-item", active!==i && "menu__list-item--collapsed")}
                    onClick={onClick(i)}
                  >
                    <div className={clsx("menu__link menu__link--sublist", styles.release)}>
                      <div>{tag}</div>
                      <div>{date}</div>
                    </div>
                    <ul
                      className="menu__list"
                      style={{height: collapseHeights[i]}}
                    >
                      <li
                        className="menu__list-item"
                        ref={collapseRefs[i]}
                      >
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