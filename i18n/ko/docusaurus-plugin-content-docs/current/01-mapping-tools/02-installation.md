---
title: "설치"
author: "aehrea"
id: installation
description: Windows, Linux, macOS에서 Mapping Tools를 설치하는 방법입니다.
keywords:
  - 문서
  - Mapping Tools
  - 매핑 도구
  - 설치
---

Mapping Tools는 **Windows, Linux, macOS**용 네이티브 데스크톱 빌드를 제공합니다. 사용 중인 프로세서에 맞는 빌드를 [다운로드 페이지](/download) 또는 [GitHub 릴리스](https://github.com/OliBomby/Mapping_Tools/releases/latest)에서 받으세요.

모든 패키지는 자체 실행형이며 .NET 10 런타임을 포함합니다.

## 패키지 선택

- **Windows**: 설치 프로그램 또는 포터블 ZIP을 사용하세요. 대부분의 시스템에는 x64가 적합하고, x86은 32비트 Windows용입니다.
- **Linux**: x64 또는 ARM64용 AppImage나 포터블 ZIP을 사용하세요.
- **macOS**: Intel(x64) 또는 Apple silicon(ARM64)용 포터블 ZIP을 다운로드한 다음, 압축을 푼 폴더에서 **Mapping Tools.app**을 여세요.

## 기능 호환성 {#editor-integration-by-platform}

✅ 지원 · ❌ 지원 안 함. 지원되는 기능에도 아래 설정이 필요할 수 있습니다.

<div className="feature-compatibility">

| OS | osu! 클라이언트 | 비트맵 읽기/쓰기 | 현재 비트맵 가져오기 | 실시간 편집기 상태 읽기 | 자동 새로고침 | 전역 단축키 | Geometry Dashboard 오버레이 |
| --- | --- | :---: | :---: | :---: | :---: | :---: | :---: |
| Windows | stable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Windows | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Windows | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Linux | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| macOS | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |

</div>

- **osu! stable**: Windows에서는 현재 비트맵 감지와 실시간 편집기 상태 읽기에 메모리 연동을 사용하고, 자동 새로고침에는 키 입력 시뮬레이션을 사용합니다. Linux와 macOS에서는 stable을 Wine으로 실행하고 호환되는 **Gosumemory/Tosu** API를 `127.0.0.1:24050`에서 실행하면 현재 비트맵을 가져올 수 있습니다. Preferences에서 **Songs folder**를 설정하세요.
- **osu! lazer**: **File > Edit externally**를 사용해 비트맵 파일을 외부에 노출하세요. Mapping Tools가 외부 편집 중인 비트맵을 자동으로 감지하며, 표에서는 이를 현재 비트맵 가져오기로 표시합니다. 변경 사항을 적용하려면 lazer에서 **Finish editing and import changes**를 사용하세요. [lazer 가이드](/docs/guides/use-mt-in-lazer)를 참고하세요.
- **osu! unstable**: 현재 비트맵 가져오기, 실시간 편집기 상태 읽기, 편집기 새로고침을 사용하려면 Preferences에서 **MTIPC**를 선택하세요. 이 기능을 사용하려면 클라이언트의 MTIPC 서버가 필요합니다. Linux와 macOS에서는 실시간 편집기 상태 읽기와 편집기 새로고침이 기본적으로 비활성화되어 있습니다.
- **전역 단축키**: Linux에서는 X11 또는 전역 단축키 포털을 지원하는 데스크톱 환경이 필요합니다. macOS에서는 시스템이 요청하는 키보드 접근 권한을 허용하세요.

**File > Open beatmap**으로 언제든지 비트맵을 직접 선택할 수 있습니다.

## 설정 {#setup}

Mapping Tools를 설치한 뒤 왼쪽 위 버튼을 눌러 탐색 메뉴를 열고 **Preferences**로 이동해 Mapping Tools를 설정하세요.

먼저 다음 항목을 설정하는 것이 좋습니다.

- **osu! folder**: _osu!_가 설치된 폴더의 경로입니다.
- **Songs folder**: 모든 맵이 들어 있는 폴더의 경로입니다. 보통 _osu!_ 폴더 바로 안에 있습니다.
- **osu! config user file**: osu! 사용자 설정 파일의 경로입니다. 보통 _osu!_ 폴더 바로 안에 있는 `osu.[username].cfg` 파일입니다.

:::note

osu!stable을 사용한다면 이 경로가 올바른지 확인하세요. 경로가 잘못되면 Mapping Tools가 제대로 작동하지 않을 수 있습니다.

:::
