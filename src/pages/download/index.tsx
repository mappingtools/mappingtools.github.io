import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import styles from './index.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faFileZipper } from '@fortawesome/free-solid-svg-icons';

type ReleaseAsset = {
  name: string;
  browser_download_url: string;
};

const LATEST_RELEASE_API_URL = 'https://api.github.com/repos/OliBomby/Mapping_Tools/releases/latest';
const LATEST_RELEASE_URL = 'https://github.com/OliBomby/Mapping_Tools/releases/latest';

const downloadColumns = [
  {
    id: 'windows',
    label: 'Windows',
    cards: [
      {
        label: 'Windows x64',
        icon: faWindows,
        rid: 'win-x64',
        options: [
          { label: 'Installer', suffix: '-Setup.exe', icon: faDownload },
          { label: 'Portable', suffix: '-Portable.zip', icon: faFileZipper },
        ],
      },
      {
        label: 'Windows x86',
        icon: faWindows,
        rid: 'win-x86',
        options: [
          { label: 'Installer', suffix: '-Setup.exe', icon: faDownload },
          { label: 'Portable', suffix: '-Portable.zip', icon: faFileZipper },
        ],
      },
    ],
  },
  {
    id: 'linux',
    label: 'Linux',
    cards: [
      {
        label: 'Linux x64',
        icon: faLinux,
        rid: 'linux-x64',
        options: [
          { label: 'AppImage', suffix: '.appimage', icon: faDownload },
        ],
      },
      {
        label: 'Linux ARM64',
        icon: faLinux,
        rid: 'linux-arm64',
        options: [
          { label: 'AppImage', suffix: '.appimage', icon: faDownload },
        ],
      },
    ],
  },
  {
    id: 'macos',
    label: 'macOS',
    cards: [
      {
        label: 'macOS ARM64',
        icon: faApple,
        rid: 'osx-arm64',
        options: [
          { label: 'Installer', suffix: '.pkg', icon: faDownload },
          { label: 'Portable', suffix: '-Portable.zip', icon: faFileZipper },
        ],
      },
      {
        label: 'macOS x64',
        icon: faApple,
        rid: 'osx-x64',
        options: [
          { label: 'Installer', suffix: '.pkg', icon: faDownload },
          { label: 'Portable', suffix: '-Portable.zip', icon: faFileZipper },
        ],
      },
    ],
  },
];

function findReleaseAsset(assets: ReleaseAsset[], rid: string, suffix: string) {
  const target = rid.toLowerCase();
  const fileSuffix = suffix.toLowerCase();

  return assets.find((asset) => {
    const name = asset.name.toLowerCase();
    return name.includes(target) && name.endsWith(fileSuffix);
  });
}

const Download: React.FC = () => {
  const [releaseAssets, setReleaseAssets] = useState<ReleaseAsset[] | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetch(LATEST_RELEASE_API_URL)
      .then((response) => {
        if (!response.ok) throw new Error('Could not load release assets.');
        return response.json();
      })
      .then((release) => {
        if (isMounted) setReleaseAssets(release.assets);
      })
      .catch(() => {
        if (isMounted) setReleaseAssets([]);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Layout title="Download" description="Download Mapping Tools for Windows, macOS, and Linux">
      <div className={clsx('container padding-vert--lg', styles.content)}>
        <h1>Download</h1>
        <h4 className={styles.subtitle}>Download Mapping Tools for your operating system</h4>

        {releaseAssets?.length === 0 && (
          <p className={styles.releaseFallback}>
            Download links are unavailable. <a href={LATEST_RELEASE_URL}>Browse the latest release on GitHub.</a>
          </p>
        )}

        <div className={styles.downloadGrid}>
          {downloadColumns.map(({ id, label, cards }) => (
            <section key={id} className={styles.osColumn} aria-label={`${label} downloads`}>
              {cards.map(({ label: cardLabel, icon, rid, options }) => (
                <article
                  key={rid}
                  className={clsx('card', styles.customCard, styles.cardNotCurrentOs)}>
                  <div className="card__header">
                    <h3 className={styles.cardTitle}>
                      <FontAwesomeIcon icon={icon} />
                      &nbsp; {cardLabel}
                    </h3>
                  </div>
                  <div className="card__body">
                    {options.map((option) => {
                      const asset = releaseAssets
                        ? findReleaseAsset(releaseAssets, rid, option.suffix)
                        : null;

                      return asset ? (
                        <a
                          key={option.label}
                          className={clsx('button button--block button--secondary', styles.downloadOption)}
                          href={asset.browser_download_url}>
                          <FontAwesomeIcon icon={option.icon} />
                          <span className={styles.itemText}>{option.label}</span>
                        </a>
                      ) : (
                        <div
                          key={option.label}
                          className={styles.downloadUnavailable}>
                          <FontAwesomeIcon icon={option.icon} />
                          <span className={styles.itemText}>
                            {`${option.label} ${releaseAssets === null ? 'loading…' : 'unavailable'}`}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </article>
              ))}
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Download;
