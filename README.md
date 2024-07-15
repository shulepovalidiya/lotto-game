# Проект: игра «Лото»

## Как запустить проект локально:
1. Клонировать репозиторий с проектом:
```
git clone https://github.com/shulepovalidiya/lotto-game.git
```
2. Перейти в директорию с проектом:
```
cd lotto-game
```
3. Установить зависимости:
```
npm install
```
4. Запустить проект — он автоматически откроется в браузере по адресу http://localhost:3000/
```
npm run dev
```
## Технические требования
- Реализовать логику правил игры. Правила описаны в директории `docs` — 
ознакомиться можно по [ссылке](https://github.com/shulepovalidiya/lotto-game/blob/main/docs/games/8_out_of_19.md)
- Аккуратный, чистый код с использованием линтеров (ESLint) приветствуется
- При разработке использовать React любой предпочитаемой версии. Для быстрой первоначальной настройки проекта допустимо использовать Create React App
- Адаптивная mobile-first вёрстка, условно приближенная к [макету](https://www.figma.com/file/VDraSBJhGzDKP33eS4IBbp6Z/Finch_test)
- Реализовать генерацию случайно выбранных полей в билете в соответствии с правилами лотереи по нажатию на значок волшебной палочки
- Реализовать логику отправки выбранных чисел на сервер по любому url. Отправка должна происходить после нажатия на кнопку "Показать результат". В данных отправки должен быть объект:
```javascript
{
  selectedNumber: { 
    firstField: [ ... ], 
    secondField: [ ... ] 
  },
  isTicketWon: ...
}
```
Нужно предусмотреть ситуацию, что в ответ придёт код не `200 OK`, а любой другой. 
В таком случае требуется отправлять запрос ещё два раза с интервалом 2 секунды. Если ответ `200 OK` так и не пришёл, то выдать какое-либо уведомление об ошибке.