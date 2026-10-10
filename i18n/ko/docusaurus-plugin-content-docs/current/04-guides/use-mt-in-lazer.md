---
title: "osu! lazer에서 Mapping Tools 사용하기"
author: "OliBomby"
id: use-mt-in-lazer
description: osu! lazer에서 Mapping Tools를 사용하는 방법입니다.
keywords:
  - 문서
  - Mapping Tools
  - lazer
  - 호환성
---

[osu! lazer](https://github.com/ppy/osu)는 osu!stable과 다른 비트맵 편집 작업 흐름을 사용합니다. Mapping Tools는 두 클라이언트의 비트맵 파일을 편집할 수 있습니다. lazer에서는 외부 편집 작업 흐름을 사용하고 일부 기능에는 제한이 있다는 점을 알아 두세요.

## osu! lazer에서 Mapping Tools 사용하기

osu! lazer 편집기에서 **File > Edit externally**를 클릭하세요. 현재 편집 중인 맵셋의 모든 파일이 임시 폴더에 생성됩니다. Mapping Tools가 이 폴더를 자동으로 감지해 대상 비트맵으로 설정합니다. Mapping Tools에서 편집을 마치면 **Finish editing and import changes**를 눌러 osu! lazer로 변경 내용을 가져올 수 있습니다.

![File > Edit externally](assets/osu_TAqF8oqGPr.png)

## 호환성

Mapping Tools의 모든 기능이 osu! lazer에서 작동하는 것은 아닙니다. 여기에는 각 기능의 호환성을 정리했습니다.

Editor Reader를 사용하는 기능은 osu! lazer에서 작동하지 않습니다. osu! lazer만 사용할 예정이라면 **Preferences**에서 Editor Reader를 비활성화하는 것을 권장합니다.

### 일반

- :x: **Open current beatmap**을 사용하는 기능은 작동하지 않습니다.
- :x: **Current editor time**을 사용하는 기능은 작동하지 않습니다.
- :x: **Selected hit objects**를 사용하는 기능은 작동하지 않습니다.
- :white_check_mark: **Generate backup**은 작동합니다.
- :white_check_mark: **Load backup**은 작동합니다.
- :white_check_mark: 여러 구간 유형이 있는 **Slider paths**를 완전히 지원합니다.

### 도구

- :x: **Geometry Dashboard**는 작동하지 않습니다. Editor Reader에 의존합니다.
- :white_check_mark: **Hitsound Copier**는 작동합니다.
- :large_orange_diamond: **Hitsound Studio**는 작동하지만, 임시 폴더가 삭제되면 가져온 샘플과 비트맵 참조가 끊깁니다.
- :white_check_mark: **Pattern Gallery**는 작동합니다.
- :white_check_mark: **Property Transformer**는 작동합니다.
- :white_check_mark: **Sliderator**는 작동하지만 lazer 편집기에서 매우 느립니다.
- :white_check_mark: **Tumour Generator 2**는 작동합니다.
- :large_orange_diamond: **Auto-fail Detector**는 작동하지만 lazer에는 오토 페일이 없습니다.
- :white_check_mark: **Combo Colour Studio**는 작동합니다.
- :white_check_mark: **Hitsound Preview Helper**는 작동합니다.
- :white_check_mark: **Map Cleaner**는 작동합니다.
- :white_check_mark: **Mapset Merger**는 작동합니다.
- :white_check_mark: **Metadata Manager**는 작동합니다.
- :white_check_mark: **Rhythm Guide**는 작동합니다.
- :white_check_mark: **Slider Completionator**는 작동합니다.
- :white_check_mark: **Slider Merger**는 작동합니다.
- :large_orange_diamond: **Slider Picturator**는 작동하지만, 이미지 슬라이더가 lazer에서 표시되지 않습니다.
- :white_check_mark: **Timing Copier**는 작동합니다.
- :white_check_mark: **Timing Helper**는 작동합니다.

## lazer 호환성에 관한 안내

osu! lazer는 활발히 개발 중이므로 파일 형식과 클라이언트가 바뀔 수 있으며, 이로 인해 Mapping Tools가 작동하지 않을 수 있습니다.
목록에 없는 osu! lazer 사용 문제가 있다면 **About > Report an issue**로 제보하세요.
