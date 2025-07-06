---
title: "Mqtt.fx 问题总结"
date: 2025-02-07T13:00:00+08:00
draft: true
categories: 
- 工作
---

## Mqtt.fx v5

v5 似乎无法支持 mqtt3.1 协议

实际使用过程发现，无法连接别人阿里云服务器上的 MQTT Broker（47.98.xxx.xxx）

> 不知道服务器用的哪个 Broker，但应该不是 mosquitto
> 
> 亲测 v5 可以兼容 mosquitto

报错如下：

CONNECT failed as CONNACK contained an Error Code: UNSUPPORTED PROTOCOL VERSION.

解决办法：切换版本 v1.7

## Mqtt.fx v1.7

v1.7 安装之后，运行 exe 报错：

Unable to invoke public void de.jensd.mqttfx.cdi.FXMLView.init() on de.jensd.mqttfx.ui.main.MainPane@34cd17b0

问题定位：

1. v5 可以正常打开，说明 JRE 没有问题（实际上 Mqtt.fx 无需安装 JRE）


2. 别人电脑可以正常安装打开 v1.7，说明软件本身没有问题

---

网上没有找到相关资料，这个问题好像是我独有的

所以猜测可能问题出在环境冲突，于是打算卸载 v5，重装 v1.7

但是仍然存在相同报错

---

猜测可能卸载不是很彻底

于是删除系统里面所有 v5 残留问题（特别是 mqttfx-config.xml 这个文件）

此时终于能够正常打开

这个问题浪费两个小时时间，太尴尬了




