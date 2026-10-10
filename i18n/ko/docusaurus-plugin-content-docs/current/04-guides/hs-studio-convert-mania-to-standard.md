---
title: "mania 히트사운드를 standard 히트사운드로 변환"
author: "OliBomby"
id: convert-mania-to-standard-hs
description: Hitsound Studio로 osu!mania 히트사운드를 osu!standard 히트사운드로 변환하는 방법입니다.
keywords:
  - 문서
  - Mapping Tools
  - Hitsound Studio
  - 히트사운드
  - 히트사운드 변환
---

osu!mania에서는 같은 틱에 노트를 여러 개 배치할 수 있습니다. 여러 샘플 세트나 사용자 지정 샘플을 동시에 사용할 수 있어 osu!mania 히트사운드 작업의 자유도가 높습니다. 하지만 osu!standard에서는 틱마다 노트를 하나만 둘 수 있어 osu!mania의 히트사운드를 복사하기가 더 어렵습니다. Hitsound Studio로 osu!mania 히트사운드를 osu!standard 히트사운드로 변환해 다양한 히트사운드 작업을 할 수 있습니다.

## 1단계: Hitsound Studio 설정 {#1}

Mapping Tools에서 Hitsound Studio를 여세요. **Project** 메뉴를 클릭하고 **New project**를 누릅니다. 현재 Hitsound Studio 설정을 잃고 싶지 않다면 먼저 **Save project**로 저장하세요.

## 2단계: 히트사운드 레이어 가져오기 {#2}

창 오른쪽 아래의 더하기 버튼을 누르면 가져오기 창이 열립니다. **Import hitsounds** 탭으로 이동해 비트맵의 모든 히트사운드를 가져오세요. **Source beatmap**에서 변환할 osu!mania 히트사운드가 있는 비트맵을 선택합니다. **Detect duplicate samples**와 **Remove duplicate hitsounds**를 선택하고, 맵에서 히트사운드의 일부를 채우는 스토리보드 샘플을 사용한다면 **Include storyboarded samples**도 선택하세요. **Accept**를 누르면 히트사운드를 가져옵니다. Hitsound Studio에 히트사운드 레이어 목록이 표시됩니다.

## 3단계: 설정 {#3}

아래쪽에서 **Base beatmap**과 **Default sample**을 설정합니다. **Base beatmap**으로 변환할 맵을 선택하세요. 이 비트맵의 메타데이터, 타이밍, 볼륨 레벨이 사용됩니다.

**Default sample**은 원하는 방식에 따라 몇 가지 옵션 중에서 선택할 수 있습니다. 히트사운드 레이어에 hitnormal 사운드가 없을 때 기본 샘플이 사용됩니다. osu!standard에서는 hitnormal 사운드를 항상 재생해야 하기 때문입니다. 비워 둔 다음 Soft sample set을 선택하고 볼륨에 `-1`을 입력해도 됩니다.

## 4단계: 내보내기 {#4}

창 오른쪽 아래의 실행 버튼을 누릅니다. 내보내기 옵션 대화상자에서 **Export mode**와 **Export gamemode**를 모두 **Standard**로 설정하세요. 파일 크기를 줄이도록 모든 샘플을 `.ogg`로 변환하려면 **Sample file format**과 **Mixed sample file format**을 **Vorbis (.ogg)**로 변경할 수도 있습니다. **Accept**를 눌러 히트사운드 내보내기를 시작하세요.

Hitsound Studio의 내보내기가 끝나면 내보내기 폴더에서 osu!standard 히트사운드 변경 사항이 담긴 `.osu` 파일과 히트사운드 재생에 필요한 오디오 파일을 확인할 수 있습니다. 모든 파일을 osu!standard 맵셋에 복사한 뒤 Hitsound Copier로 히트사운드 변경 사항을 복사하세요.
