import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import Layout from '@theme/Layout';

import styles from './index.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple, faAppStoreIos, faGithub, faLinux, faWindows, } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDownload, faFileArchive } from '@fortawesome/free-solid-svg-icons';

const OS_SUPPORT = Object.freeze({
  undefined: {
    name: "undefined",
    supported: false
  },
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
    win64: {
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
    os: OS_SUPPORT.windows.win64,
    icon: faWindows,
    items: [
      {
        icon: faDownload,
        text: "Installer",
        onClick: () => window.open("https://github.com/OliBomby/Mapping_Tools/releases/latest/download/mapping_tools_installer_x64.exe"),
      },
      {
        icon: faFileArchive,
        text: "Portable",
        onClick: () => window.open("https://github.com/OliBomby/Mapping_Tools/releases/latest/download/release_x64.zip"),
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
      },
      {
        icon: faFileArchive,
        text: "Portable",
        onClick: () => window.open("https://github.com/OliBomby/Mapping_Tools/releases/latest/download/release.zip"),
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
      },
      {
        icon: faFileArchive,
        text: "Portable",
        onClick: () => { },
      }
    ],
  }
];

const getOs = () => {
  const userAgent = window.navigator.userAgent;

  const winX64Pattern = /\b(x86_x64|x86-64|Win64|x64;|amd64|WOW64|x64_x64)\b/gi;

  if (winX64Pattern.test(userAgent)) {
    return OS_SUPPORT.windows.win64;
  }

  const platform = window.navigator.platform;

  const windowsPlatforms = Object.keys(OS_SUPPORT.windows);

  for (let i = 0; i < windowsPlatforms.length; i++) {
    const os = OS_SUPPORT.windows[windowsPlatforms[i]];
    if (os.name === platform) return os;
  }

  const macPlatforms = Object.keys(OS_SUPPORT.macos);

  for (let i = 0; i < macPlatforms.length; i++) {
    const os = OS_SUPPORT.macos[macPlatforms[i]];
    if (os.name === platform) return os;
  }

  const iosPlatforms = Object.keys(OS_SUPPORT.ios);

  for (let i = 0; i < iosPlatforms.length; i++) {
    const os = OS_SUPPORT.ios[iosPlatforms[i]];
    if (os.name === platform) return os;
  }

  if (/Android/.test(userAgent)) {
    return OS_SUPPORT.android;
  }

  if (/Linux/.test(platform)) {
    return OS_SUPPORT.linux
  }

  return OS_SUPPORT.undefined;
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
                <div className={clsx("card", styles.customCard, currentOs === os ? styles.cardCurrentOs : styles.cardNotCurrentOs)}>
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
