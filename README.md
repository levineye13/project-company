# Проекты в России

**<ins>[На данном сайте](https://levineye13.github.io/project-company/)</ins> представленны самые крупные проекты России.**

## Технологии

![HTML5](https://img.shields.io/badge/-HTML5-ff4500?style=flat&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-0000cd?style=flat&logo=CSS3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-ffff00?style=flat&logo=JavaScript&logoColor=ff4500)
![Webpack](https://img.shields.io/badge/-Webpack-00ffff?style=flat&logo=Webpack&logoColor=blue)

- _БЭМ_
  - [Основные понятия](https://ru.bem.info/methodology/key-concepts/)
  - [Файловая структура](https://ru.bem.info/methodology/filestructure/)
- [Flexbox](https://www.w3.org/TR/css-flexbox-1/)
- [Grid Layout](https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Адаптивная верстка](https://developer.mozilla.org/ru/docs/Web/CSS/@media)
- [DOM](https://developer.mozilla.org/ru/docs/DOM/DOM_Reference/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5)
- [JavaScript](https://learn.javascript.ru/)
- [ООП](https://developer.mozilla.org/ru/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
- [Webpack](https://webpack.js.org/)
- [Npm](https://docs.npmjs.com/)

## Доступные скрипты

### `npm run dev`

Запускает приложение в режиме разработки.
Откройте [http://localhost:8080](http://localhost:8080) для просмотра в браузере.

### `npm run build`

Собирает готовое приложение в папку `dist`.

## Деплой проекта на GitHub Pages

### 1. Установите `gh-pages`

    npm install --D gh-pages

### 2. Добавьте `скрипты` для деплоя в `package.json`

    "scripts": {
      "predeploy": "npm run build",   +
      "deploy": "gh-pages -d dist",  +
      "dev": "webpack-dev-server --open --watch",
      "build": "rimraf dist && webpack",
    }

### 3. Разверните сайт, запустив `npm run deploy`

    npm run deploy

### 4. Убедитесь, что в настройках проекта используется `gh-pages`

<img src="https://i.imgur.com/HUjEr9l.png" width=500 />
