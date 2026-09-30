# Difference Calculator (Gendiff)

Command-line tool for comparing two configuration files (JSON or YAML) and generating diff reports in various formats. Built as part of the Hexlet Frontend Development program.

## Overview

* **File Format Support:** Compares `.json` and `.yml` / `.yaml` files.
* **Tree Comparison (AST):** Builds an abstract syntax tree to recursively detect differences in deeply nested objects.
* **Output Formats:**
  * `stylish` (default) — Tree view with colored indicators for added, removed, and updated fields.
  * `plain` — Text report detailing property paths and changes.
  * `json` — Structured JSON output for programmatic use.
* **Code Quality:** Covered with unit tests using `Jest` and configured with `ESLint`.

## Tech Stack

* **Runtime:** Node.js (ES Modules)
* **CLI Parser:** Commander.js
* **YAML Parser:** js-yaml
* **Testing:** Jest
* **Code Style:** ESLint

## Getting Started

### Prerequisites

* Node.js (v18 or higher)
* npm

### Installation & Usage

1. Clone the repository:  
   git clone https://github.com/moisova/frontend-project-46.git  
   cd frontend-project-46

2. Install dependencies and link package globally:  
   make install  
   npm link

3. Compare files:  
   gendiff file1.json file2.json
