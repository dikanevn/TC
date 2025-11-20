#!/bin/bash

# Инициализация git репозитория
if [ ! -d .git ]; then
  git init
fi

# Добавление remote (если еще не добавлен)
if ! git remote | grep -q origin; then
  git remote add origin https://github.com/dikanevn/TC.git
else
  git remote set-url origin https://github.com/dikanevn/TC.git
fi

# Добавление всех файлов
git add .

# Коммит
git commit -m "Initial commit: Vite + React + TypeScript counter app"

# Переименование ветки в main (если нужно)
git branch -M main

# Пуш в GitHub
git push -u origin main

echo "✅ Код успешно запушен в GitHub!"
echo "📦 Деплой на GitHub Pages запустится автоматически через GitHub Actions"
echo "🌐 После деплоя приложение будет доступно на: https://dikanevn.github.io/TC/"

