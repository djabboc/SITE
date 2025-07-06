#!/bin/bash

# 获取当前日期（格式：YYYY-MM-DD）
current_date=$(date +"%Y-%m-%d")

# 执行 Git 操作
git add .
git commit -m "更新 $current_date"
git push
