# React Word Document Generator

This React application allows users to fill out a form with their name and last name, and then generates a new Word document from an existing template by replacing placeholders in the template with the user's input.

## Features

- Simple form to collect user input.
- Generates a new Word document based on a template.
- Replaces placeholders in the template with form data.
- Downloads the generated Word document to the user's computer.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OkanShr/Docx-Generator.git
   cd test-docx

   ```

2. Install the dependencies:
   npm install docxtemplater pizzip file-saver

3. Place your Word document template (template.docx) in the src/components directory.
   This template should contain placeholders like {name} and {lastName}.
