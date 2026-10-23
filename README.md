# Flexbox Card Layout Component

A simple, responsive, and modern **Card Component** built using pure HTML and CSS Flexbox. It features fluid dimensions, elegant drop shadows, smooth hover transitions, and a mobile-optimized layout.

## 🚀 Features

*   **Flexbox Grid Layout:** Cards wrap cleanly and stay perfectly aligned using modern CSS Flexbox.
*   **Fluid & Responsive Design:** Automatically transitions to full-width cards on mobile displays (`max-width: 674px`).
*   **Smooth Hover Effects:** Interactive depth changes with a `0.4s` smooth shadow transition.
*   **Clean CSS Architecture:** Includes a global box-sizing reset for consistent cross-browser spacing.

## 📁 Project Structure

```text
├── index.html   # Main layout file
└── App.css      # Component styling (Flex container & Card rules)
```
### CSS Key Breakdown (`App.css`)
*   **`.container`**: Manages alignment, handles wrapping flow, and applies uniform spacing gaps between components.
*   **`.card`**: Controls individual card aesthetics including padding, modern rounded borders, and subtle layout styling.
*   **`@media (max-width: 674px)`**: Triggers mobile layout optimizations to stretch cards fully across smaller views.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
