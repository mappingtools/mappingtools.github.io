import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import Layout from '@theme/Layout';

import styles from './index.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple, faAppStoreIos, faGithub, faLinux, faWindows, } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDownload, faFileArchive } from '@fortawesome/free-solid-svg-icons';

const OS_SUPPORT = Object.freeze({
  macos: {
    macintosh: {
      name: "Macintosh",
      supported: false
    },
    macIntel: {
      name: "MacIntel",
      supported: false
    },
    macPPC: {
      name: "MacPPC",
      supported: false
    },
    mac86K: {
      name: "Mac68K",
      supported: false
    }
  },
  windows: {
    win32: {
      name: "Win32",
      supported: true
    },
    winx64: {
      name: "Win64",
      supported: true
    },
    win: {
      name: "Windows",
      supported: false
    },
    winCe: {
      name: "WinCE",
      supported: false
    }
  },
  ios: {
    iPhone: {
      name: "iPhone",
      supported: false
    },
    iPad: {
      name: "iPad",
      supported: false
    },
    iPod: {
      name: "iPod",
      supported: false
    }
  },
  android: {
    name: "Android",
    supported: false
  },
  linux: {
    name: "Linux",
    supported: false
  },
});

const cards = [
  {
    label: 'Windows x64',
    os: OS_SUPPORT.windows.winx64,
    icon: faWindows,
    items: [
      {
        icon: faDownload,
        text: "Installer",
        onClick: () => window.open("https://github.com/OliBomby/Mapping_Tools/releases/latest/download/mapping_tools_installer_x64.exe"),
      }
    ]
  },
  {
    label: 'Windows x86',
    os: OS_SUPPORT.windows.win32,
    icon: faWindows,
    items: [
      {
        icon: faDownload,
        text: "Installer",
        onClick: () => window.open("https://github.com/OliBomby/Mapping_Tools/releases/latest/download/mapping_tools_installer_x86.exe"),
      }
    ]
  },
  {
    label: 'Linux',
    os: OS_SUPPORT.linux,
    icon: faLinux,
    items: [
      {
        icon: faDownload,
        onClick: () => { },
      }
    ],
  }
];

const getOs = () => {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;

  const windowsPlatforms = Object.keys(OS_SUPPORT.windows);
  const macPlatforms = Object.keys(OS_SUPPORT.macos);
  const iosPlatforms = Object.keys(OS_SUPPORT.ios);

  for (let i = 0; i < windowsPlatforms.length; i++) {
    const os = OS_SUPPORT.windows[windowsPlatforms[i]];
    if (os.name === platform) return os;
  }

  for (let i = 0; i < macPlatforms.length; i++) {
    const os: { name: string, supported: boolean } = OS_SUPPORT.macos[macPlatforms[i]];
    if (os.name === platform) return os;
  }

  for (let i = 0; i < iosPlatforms.length; i++) {
    const os: { name: string, supported: boolean } = OS_SUPPORT.ios[iosPlatforms[i]];
    if (os.name === platform) return os;
  }

  if (/Android/.test(userAgent)) {
    return OS_SUPPORT.android;
  }

  if (/Linux/.test(platform)) {
    return OS_SUPPORT.linux
  }

  return {
    name: "undefined",
    supported: false
  };
};

function DetectOs(props) {
  if (props.os === null) {
    return <h4 className={styles.autodetect}>Detecting operating system ...</h4>
  }

  if (props.os.name === "undefined") {
    return <h4 className={styles.autodetect}>Cannot identify operating system!</h4>
  }

  return <h4 className={styles.autodetect}>Mapping Tools is {props.os.supported ? '' : 'not yet'} available for your operating system ({props.os.name})</h4>
}

const Download: React.FC = () => {
  const [currentOs, setOs] = useState(null);

  useEffect(() => {
    setOs(getOs());
  }, []);

  return (
    <Layout title="Download" description="download Mapping Tools">
      <div className={clsx("container padding-vert--lg pt-3", styles.content)}>
        <h1>Download</h1>
        <DetectOs os={currentOs} />
        <div className={clsx("container", styles.downloadsContainer)}>
          <div className="row">
            {cards.map(({ label, icon, os, items }, i) => (
              <div key={i} className={clsx('col col--4', styles.dlCol)}>
                <div className={clsx("card", styles.customCard, currentOs === os ? styles.cardCurrentOs : "")}>
                  <div className="card__header">
                    <h3 className={clsx(!os.supported && styles.disabledText, styles.cardTitle)}>
                      <FontAwesomeIcon icon={icon} />
                      &nbsp; {label}
                    </h3>
                  </div>
                  <div className="card__body">
                    {!os.supported
                      ? <p className={clsx(styles.comingSoon)}>Coming soon!</p>
                      : items.map((item, j) => (
                          <button key={j} className={clsx('button button--block button--secondary button--outline', !os.supported && clsx('disabled', styles.disabled), styles.downloadOption)} onClick={item.onClick}>
                            <FontAwesomeIcon icon={item.icon} />
                            <span className={clsx(styles.itemText)}>{item.text}</span>
                          </button>
                      ))
                    }
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
