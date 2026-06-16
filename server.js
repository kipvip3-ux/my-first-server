// Подключаем встроенный модуль 'http' для создания сервера
const http = require('http');

// Создаем сервер. При каждом запросе он вызывает функцию (req, res)
const server = http.createServer((req, res) => {
    // Устанавливаем код ответа 200 (все хорошо) и тип контента HTML
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // Отправляем ответ с заголовком <h1>
    res.end('<h1>Привет, Октагон!</h1>');
});

// Запускаем сервер на порту 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});