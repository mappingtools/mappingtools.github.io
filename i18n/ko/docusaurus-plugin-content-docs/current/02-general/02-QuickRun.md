---
title: "QuickRun"
author: "OliBomby"
id: quickrun
description: Mapping Tools의 QuickRun에 관한 모든 내용입니다.
keywords:
  - 문서
  - Mapping Tools
  - QuickRun
  - SmartQuickRun
  - QuickUndo
---

QuickRun을 사용하면 Mapping Tools를 더 빠르게 사용할 수 있습니다. 단축키를 눌러 도구를 실행하고 편집기를 자동으로 새로고침하므로, 버튼 한 번으로 도구 사용을 마칠 수 있습니다.

**Preferences**에서 QuickRun을 활성화할 수 있습니다.

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="QuickRun 예시 이미지"
  sources={{
    light: useBaseUrl('./img/quickrun_example_light.png'),
    dark: useBaseUrl('./img/quickrun_example_dark.png'),
  }}
/>
```

## 설정 {#setup}

QuickRun을 활성화하려면 **Preferences**로 이동해 **QuickRun hotkey** 항목에 단축키를 지정하세요. 이제 단축키를 누르면 Mapping Tools에서 현재 열려 있는 도구가 실행됩니다.

`Alt+M`은 osu! 편집기의 기본 단축키와 겹치지 않아 사용하기 좋은 단축키입니다.

**Auto reload after QuickRun**을 활성화하면 도구 작업이 끝난 뒤 Mapping Tools가 osu! 클라이언트에 명령을 보내 편집기를 자동으로 새로고침합니다. 덕분에 직접 새로고침할 필요가 없습니다.

:::info
QuickRun으로 도구를 실행하면 Mapping Tools에서 선택한 맵이 아니라 **편집기에서 현재 열려 있는 비트맵**을 사용한다는 점을 기억하세요.
:::

## SmartQuickRun {#smartquickrun}

QuickRun 단축키 항목 오른쪽의 체크박스를 선택하면 **SmartQuickRun**이 활성화됩니다. 이 기능은 편집기에서 선택한 오브젝트 수에 따라 서로 다른 도구를 QuickRun으로 실행합니다.

SmartQuickRun은 다음 세 가지 경우를 구분합니다.

- **None**: 히트오브젝트를 선택하지 않은 경우. `N=0`
- **Single**: 히트오브젝트 하나만 선택한 경우. `N=1`
- **Multiple**: 히트오브젝트를 둘 이상 선택한 경우. `N>1`

## QuickUndo {#quickundo}

**QuickUndo**는 가장 최근 백업을 편집기에 불러와 직전에 실행한 도구를 되돌리는 단축키입니다. QuickRun과 마찬가지로 **자동 새로고침** 기능도 지원합니다. QuickRun과 함께 사용하는 것을 권장합니다.

`Ctrl+Shift+Z`는 QuickUndo에 사용하기 좋은 단축키입니다.
