# Virtual Clothing Project

A modern React-based virtual clothing application that allows users to explore fashion items, try them on virtually, and interact with a voice assistant for product information.

## Features

- **Virtual Try-On**: Experience clothes virtually using advanced overlay technology
- **Voice Assistant**: Ask questions about products in English, Hindi, and Kannada
- **Product Categories**: Browse through Men's, Women's, and Kids' fashion items
- **Interactive UI**: Smooth animations, responsive design, and user-friendly navigation
- **Product Details**: Comprehensive information including size, price, fabric, and more
- **Search & Filter**: Find products easily with category-based navigation

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Speech Recognition**: Web Speech API
- **Build Tool**: Vite
- **Linting**: ESLint

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Mini_project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- Navigate through different product categories (Men's, Women's, Kids')
- Click on products to view details and use the voice assistant
- Use the virtual try-on feature to see how clothes look
- Ask the voice assistant questions about size, price, fabric, color, etc.

## Project Structure

```
Mini_project/
├── public/
│   ├── images/
│   └── ...
├── src/
│   ├── assets/
│   ├── Components/
│   │   ├── navbar/
│   │   ├── product/
│   │   ├── tryon/
│   │   └── ...
│   ├── pages/
│   │   ├── Mens/
│   │   ├── Kids/
│   │   ├── Dresses/
│   │   └── ...
│   ├── data/
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

## Key Components

- **VoiceAssistant**: Handles voice queries in multiple languages
- **TryOnCanvas**: Virtual try-on functionality
- **ProductCard**: Displays product information
- **Navbar/Footer**: Navigation components

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes.
