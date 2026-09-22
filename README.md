[![Actions Status](https://github.com/moisova/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/moisova/frontend-project-46/actions)


---

## Особенности проекта

* **Поддержка форматов файлов:** Поддержка сравнения пар файлов `.json` и `.yml` / `.yaml`.
* **Рекурсивное сравнение:** Алгоритм построения дерева различий для корректной работы с глубоко вложенными объектами и структурами данных.
* **Форматы вывода:**
  * `stylish` *(по умолчанию)* — древовидная структура с цветовой индикацией добавленных (`+`), удаленных (`-`) и неизмененных полей;
  * `plain` — плоский текстовый отчет с описанием изменений по путям;
  * `json` — структурированный вывод разницы в формате JSON.

---

## Стек

* **Платформа:** Node.js
* **CLI-интерфейс:** Commander.js
* **Парсеры:** js-yaml
* **Тесты:** Jest
* **CI/CD:** GitHub Actions

### Formatter stylish
[![asciicast](https://asciinema.org/a/ArQmqgfCmJqyDYMb.svg)](https://asciinema.org/a/ArQmqgfCmJqyDYMb)
### Formatter plain
[![asciicast](https://asciinema.org/a/zI9qHeZGnEhPG6eG.svg)](https://asciinema.org/a/zI9qHeZGnEhPG6eG)
### Formatter json
[![asciicast](https://asciinema.org/a/LzflQ0JFYN4Y87DC.svg)](https://asciinema.org/a/LzflQ0JFYN4Y87DC)
