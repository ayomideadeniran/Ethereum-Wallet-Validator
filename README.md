# Ethereum Wallet Validator

A simple web application built with React (using Vite) to validate a list of Ethereum wallet addresses.

## Description

This tool allows users to input multiple Ethereum addresses (either one per line or comma-separated) and validates each address based on standard Ethereum address formats. It provides clear visual feedback for valid and invalid addresses and offers a convenient way to copy only the valid ones.

## Features

*   **Multiple Address Input:** Accepts addresses separated by newlines or commas.
*   **Address Validation:**
    *   Must start with `0x`.
    *   Must be exactly 42 characters long.
    *   Must contain only hexadecimal characters (0–9, a–f, A–F) after `0x`.
*   **Visual Feedback:**
    *   Displays ✅ `Valid` for correctly formatted addresses.
    *   Displays ❌ `Invalid` for incorrectly formatted addresses, highlighting the invalid address text in red.
*   **Clear Input:** A "Clear" button to easily reset the input field and results.
*   **Copy Valid Addresses:**
    *   Provides a dedicated section to display only the valid addresses.
    *   Offers valid addresses formatted one per line and comma-separated for easy copying.
*   **Responsive UI:** Centered layout for a clean user experience.
*   **Dummy Data:** Pre-fills the input field with example addresses on load for quick testing.

## Technologies Used

*   **React:** JavaScript library for building user interfaces.
*   **Vite:** Next-generation frontend tooling for fast development.
*   **JavaScript (ES6+):** Core programming language.
*   **HTML5:** Standard markup language.
*   **CSS3:** Styling the application.

## Getting Started

### Prerequisites

*   Node.js (which includes npm or yarn) installed on your system.

### Installation & Running Locally

1.  **Clone the repository (if applicable, otherwise navigate to your project directory):**
    ```bash
    # git clone <your-repository-url>
    # cd <your-project-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
    The application will typically be available at `http://localhost:5173` (or another port if 5173 is in use).

## How to Use

1.  Open the application in your web browser.
2.  The input field will be pre-filled with example addresses. You can modify these or paste your own list of Ethereum addresses (one per line or comma-separated).
    For example, you can try pasting the following list:
    ```
    0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B
    notAnAddress
    0x12345
    0x742d35Cc6634C0532925a3b844Bc454e4438f44e
    ```
3.  Click the "Validate Addresses" button.
4.  The results will be displayed below, indicating whether each address is valid or invalid.
5.  If there are valid addresses, a "Valid Addresses" section will appear, allowing you to copy them.
6.  Click the "Clear" button to reset the input and results.


