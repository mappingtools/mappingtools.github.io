import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import styles from './download.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple, faAppStoreIos, faGithub, faLinux, faWindows, } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDownload, faFileArchive } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const OS_SUPPORT = Object.freeze({
  macos: {
    Macintosh: false,
    MacIntel: false,
    MacPPC: false,
    Mac68K: false,
  },
  windows: {
    Win32: true,
    Win64: true,
    Windows: true,
    WinCE: true,
  },
  ios: {
    iPhone: false,
    iPad: false,
    iPod: false,
  },
  android: false,
  linux: false,
});

const githubCode = () => {
  window.open('https://github.com/OliBomby/Mapping_Tools');
}

const githubZip = () => {
  window.location.href ='https://github.com/OliBomby/Mapping_Tools/archive/master.zip';
}

const windowsDl = () => {

}

const windowsZip = () => {

}

const macDl = () => {

}

const macZip = () => {

}

const linuxDl = () => {

}

const linuxZip = () => {

}

const androidDl = () => {

}

const androidZip = () => {

}

const iosDl = () => {

}

const iosZip = () => {

}

const cards = [
  {
    label: 'Windows',
    icon: faWindows,
    supported: Object.values(OS_SUPPORT.windows).some(s => s === true),
    items: [
      {
        icon: faDownload,
        onClick: windowsDl,
      },
      {
        icon: faFileArchive,
        onClick: windowsZip,
      },
    ],
  },
  {
    label: 'GitHub Source',
    icon: faGithub,
    supported: true,
    items: [
      {
        icon: faCode,
        onClick: githubCode,
      },
      {
        icon: faFileArchive,
        onClick: githubZip,
      },
    ],
  },
  {
    label: 'Mac',
    icon: faApple,
    supported: Object.values(OS_SUPPORT.macos).some(s => s === true),
    items: [
      {
        icon: faDownload,
        onClick: macDl,
      },
      {
        icon: faFileArchive,
        onClick: macZip,
      },
    ],
  },
  {
    label: 'Linux',
    icon: faLinux,
    supported: OS_SUPPORT.linux === true,
    items: [
      {
        icon: faDownload,
        onClick: linuxDl,
      },
      {
        icon: faFileArchive,
        onClick: linuxZip,
      },
    ],
  },
  {
    label: 'Android',
    icon: faAndroid,
    supported: OS_SUPPORT.android === true,
    items: [
      {
        icon: faDownload,
        onClick: androidDl,
      },
      {
        icon: faFileArchive,
        onClick: androidZip,
      },
    ],
  },
  {
    label: 'iOS',
    icon: faAppStoreIos,
    supported: Object.values(OS_SUPPORT.ios).some(s => s === true),
    items: [
      {
        icon: faDownload,
        onClick: iosDl,
      },
      {
        icon: faFileArchive,
        onClick: iosZip,
      },
    ],
  },
]

const Download: React.FC = () => {
  const [os, setOs] = useState(null);

  useEffect(() => {
    setOs(getOs());
  });

  return (
    <Layout
      title="Download"
      description="download Mapping Tools"
    >
      <div className={clsx("container padding-vert--lg", styles.content)}>
        <h1>Download</h1>
        <h4 className={styles.autodetect}>
          {os ? (
            `[Auto Detected: ${os.os}] is ${!os.supported && 'not yet'} supported`
          ) : (
            `Detecting OS...`
          )}
        </h4>
        <div className={clsx("container", styles.downloadsContainer)}>
          <div className="row">
            {cards.map(({label, icon, supported, items}, i) => (
              <div key={i} className={clsx('col col--4', styles.dlCol)}>
                <div className="card">
                  <div className="card__header">
                    <h3 className={styles.cardTitle}>
                      <FontAwesomeIcon icon={icon}/>
                      &nbsp;{label}
                    </h3>
                  </div>
                  <div className="card__body">
                    {items.map((item, j) => (
                      <button
                        key={j}
                        className={clsx(
                          'button button--block button--secondary button--outline',
                          !supported && 'disabled',
                          styles.downloadOption
                        )}
                        onClick={item.onClick}
                      >
                        <FontAwesomeIcon icon={item.icon} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Download;

const getOs = () => {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;

  if(OS_SUPPORT.windows.hasOwnProperty(platform)) {
    return {
      os: 'Windows',
      supported: OS_SUPPORT.windows[platform] === true,
    };
  }
  if(OS_SUPPORT.macos.hasOwnProperty(platform)) {
    return {
      os: 'MacOS',
      supported: OS_SUPPORT.macos[platform] === true,
    };
  } 
  if(OS_SUPPORT.ios.hasOwnProperty(platform)) {
    return {
      os: 'iOS',
      supported: OS_SUPPORT.ios[platform] === true,
    };
  }
  if(/Android/.test(userAgent)) {
    return {
      os: 'Android',
      supported: OS_SUPPORT.android === true,
    };
  }
  if(/Linux/.test(platform)) {
    return {
      os: 'Linux',
      supported: OS_SUPPORT.linux === true,
    };
  }

  return {
    os: undefined,
    supported: false,
  }
};