---
title: FAQ
author: OliBomby, aehrea
---

# FAQ

## 비트맵에 변경 사항이 보이지 않습니다. 왜 그런가요?

애플리케이션 위쪽의 파란색 표시줄에 있는 **Selected Map**을 확인해 비트맵 경로를 올바르게 설정했는지 확인하세요.

도구를 실행한 뒤에는 **저장하지 않은 상태로 편집기를 새로고침**해야 합니다. 편집기에서 맵을 저장하면 이전 버전의 비트맵이 .osu 파일에 덮어써져 도구가 적용한 변경이 되돌려집니다. 편집기에서 `Ctrl+L`을 누르고 `Enter`를 누르면 맵을 빠르게 새로고침할 수 있습니다.

## 도구를 실행하면 "Could not find part of the path" 또는 "Empty path name is not legal" 오류가 발생합니다.

창 위쪽의 **비트맵 이름에 마우스 커서를 올리면** 전체 경로가 표시됩니다. 이 경로가 실제로 존재하나요? Songs 폴더가 올바른 위치에 있나요? Songs 폴더가 기본 AppData 위치에 없다면 **Preferences**에서 해당 폴더의 올바른 경로를 지정하세요.

## 특정 맵에서 도구를 실행할 때마다 오류가 나지만, 다른 맵에서는 괜찮습니다.

편집하려는 맵이 지원하지 않는 오래된 파일 형식을 사용하거나 손상되었을 수 있습니다. 편집기에서 맵을 열고 저장하세요. 그러면 osu!가 맵을 Mapping Tools와 호환되는 최신 파일 형식으로 업데이트합니다.

## 도구가 맵을 손상시켰습니다. 어떻게 복구하나요?

Mapping Tools는 비트맵을 변경할 때마다 백업을 만듭니다. **About > Open backup folder**로 백업을 확인하세요. **File > Load backup**으로 백업을 **Current Map**에 불러올 수도 있고, **Preferences**에서 활성화할 수 있는 QuickUndo 단축키를 사용할 수도 있습니다.

## 'Open Current Beatmap'이 작동하지 않거나 선택한 히트오브젝트를 가져오지 못합니다.

이 기능은 osu! 클라이언트의 메모리를 읽어야 합니다. 메모리 읽기가 간혹 작동하지 않을 수 있으며, 이런 경우 보통 osu! 또는 컴퓨터를 다시 시작하면 해결됩니다. 다른 원인과 해결 방법은 다음과 같습니다.

- 방화벽이나 바이러스 백신이 Mapping Tools를 차단하고 있습니다. 바이러스 백신을 비활성화하거나 Mapping Tools를 예외로 추가한 뒤 다시 시도하세요.
- Mapping Tools가 최신 버전이 아닙니다. osu!의 변경 사항을 지원하기 위해 Mapping Tools 업데이트가 필요할 수 있습니다.
- osu!가 최신 버전이 아닙니다. 비공식 서버 사용을 중단하고 공식 osu!를 최신 버전으로 업데이트하세요.
- osu!가 업데이트되면서 메모리 오프셋이 다시 바뀌었습니다. 문제를 해결할 수 있도록 알려 주세요.
- Mapping Tools를 Windows 7 이하에서 사용 중입니다. .NET Framework 4.5.1 이상이 설치되어 있는지 확인하세요.
- Windows가 아닌 운영체제에서 Mapping Tools를 사용 중입니다. [설치 안내](/docs/mapping-tools/installation)를 참고하세요.

## 히트사운드를 복사하지 않고 슬라이더 끝을 음소거하려면 어떻게 하나요?

슬라이더 끝만 음소거하려면 **Copy hitsounds from** 필드는 비워 두고 **Copy hitsounds to** 필드에 슬라이더 끝을 음소거할 맵을 추가하세요. 히트사운드는 복사하지 않지만 슬라이더 끝은 음소거됩니다.

슬라이더 끝을 음소거하면서 히트사운드도 복사하면, 도구는 원본 비트맵의 오브젝트를 기준으로 처리합니다. 따라서 원본에서 히트사운드를 추가한 위치의 슬라이더 끝은 음소거되지 않습니다. 슬라이더 끝 음소거가 별도의 도구가 아닌 Hitsound Copier의 기능인 이유입니다.

## Mapping Tools를 시작할 때 .NET을 설치하라는 메시지가 나오지만 이미 설치했습니다.

현재 Mapping Tools 버전은 .NET 10을 대상으로 하며 필요한 런타임을 포함해 배포되므로 .NET을 별도로 설치할 필요가 없습니다.

.NET 설치 메시지가 계속 표시된다면 최신 Mapping Tools 버전을 실행하고 있는지 확인하세요. 웹사이트에서 애플리케이션을 다시 다운로드해 새로 설치하세요.

## Mapping Tools는 osu! lazer에서 작동하나요?

네. Mapping Tools의 대부분 기능은 lazer에서 작동합니다. 자세한 내용은 [가이드](/docs/guides/use-mt-in-lazer)를 참고하세요.

## 목록에 없는 질문이 있거나 버그를 발견했습니다.

[Discord](https://discord.gg/YfjKN2yjQV)의 `mt-techsupport` 채널에서 질문하거나, Discord에서 `olibomby`에게 직접 문의하거나, [GitHub](https://github.com/OliBomby/Mapping_Tools/issues)에 새 이슈를 등록하세요.
