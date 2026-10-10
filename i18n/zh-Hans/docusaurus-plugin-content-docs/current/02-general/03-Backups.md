---
title: "备份"
author: "OliBomby"
id: backups
description: Mapping Tools 备份功能的完整说明。
keywords:
  - docs
  - mapping tools
  - backups
---

Mapping Tools 会将谱面备份保存在已配置的备份文件夹中。你可以通过 **About > Open backups folder** 打开该文件夹，也可以在 **Preferences** 中更改其位置。

配置好实时编辑器状态读取后，备份可以包含编辑器中的最新未保存状态。否则，Mapping Tools 会备份它能从磁盘访问到的谱面文件。

## 自动备份 {#automatic-backups}

启用此功能后，Mapping Tools 在工具修改谱面前会创建备份。如果你想撤销此次工具运行，这份备份可让你恢复到修改前的状态。你可以在 **Preferences** 中设置备份文件夹和保留数量上限。达到上限时，最旧的备份会被删除。

## 周期性备份 {#periodic-backups}

启用此功能后，只要 Mapping Tools 能读取实时编辑器状态，就会定期备份当前谱面。如果谱面自上次备份后没有更改，则会跳过此次备份。周期性备份的文件名中含有 `PB`。

## 手动备份 {#manual-backups}

使用 **File** 菜单可以为已选谱面创建备份，或将备份载入已选谱面。手动备份的文件名中含有 `UB`。**QuickUndo** 会将最新的非周期性备份还原到 osu! 中当前打开的谱面。
