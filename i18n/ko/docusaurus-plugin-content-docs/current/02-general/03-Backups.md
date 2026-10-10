---
title: "백업"
author: "OliBomby"
id: backups
description: Mapping Tools의 백업에 관한 모든 내용입니다.
keywords:
  - 문서
  - Mapping Tools
  - 백업
---

Mapping Tools는 설정된 백업 폴더에 비트맵 백업을 저장합니다. **About > Open backups folder**로 폴더를 열거나 **Preferences**에서 위치를 변경하세요.

실시간 편집기 상태 읽기를 설정한 경우 백업에 편집기의 최신 미저장 상태가 포함될 수 있습니다. 그렇지 않으면 Mapping Tools가 디스크에서 접근할 수 있는 비트맵 파일을 백업합니다.

## 자동 백업 {#automatic-backups}

활성화하면 Mapping Tools가 도구 실행으로 비트맵을 변경하기 전에 백업을 만듭니다. 도구 실행을 되돌리고 싶을 때 이 백업을 복원 지점으로 사용할 수 있습니다. **Preferences**에서 백업 폴더와 보관 개수를 설정할 수 있습니다. 개수 제한에 도달하면 가장 오래된 백업부터 삭제됩니다.

## 주기 백업 {#periodic-backups}

활성화하면 Mapping Tools가 실시간 편집기 상태를 읽을 수 있는 동안 현재 비트맵을 주기적으로 백업합니다. 이전 백업 이후 비트맵이 바뀌지 않았다면 백업을 건너뜁니다. 주기 백업 파일명에는 `PB`가 포함됩니다.

## 수동 백업 {#manual-backups}

**File** 메뉴에서 대상 비트맵의 백업을 만들거나 백업을 불러올 수 있습니다. 수동 백업 파일명에는 `UB`가 포함됩니다. **QuickUndo**는 osu!에서 현재 열려 있는 비트맵에 가장 최근의 주기 백업이 아닌 백업을 복원합니다.
