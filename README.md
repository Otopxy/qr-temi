# qr-temi
# QR Code Generator with Dark/Light Mode and Background Music 🎶

This is a **QR Code Generator** web application built with **HTML**, **CSS**, and **JavaScript**. The app allows users to:
- Generate QR codes from URLs.
- Toggle between dark and light modes.
- Enjoy continuous background music while using the app.

## 🚀 Features

- **QR Code Generation**: Input a URL, and the app generates a QR code for that URL. 🎯
- **Dark/Light Mode Toggle**: Switch between dark and light themes for a personalized experience. 🌙 / 🌞
- **Background Music**: Continuous background music plays on the page to enhance the user experience. 🎶
- **Download QR Code**: Once generated, you can download the QR code as a PNG image. ⬇️

## 🛠️ Technologies Used

- **JavaScript**: For QR code generation using the `qrcode.js` library.
- **HTML**: To structure the webpage and handle form submissions.
- **CSS**: For styling the app, including dark/light mode toggle and layout responsiveness.
- **Local Storage**: To save the user’s theme preference.

## 🔧 How It Works

1. **QR Code Generation**:  
   The app takes a URL input from the user, and using the `qrcode.js` library, it generates a QR code for that URL. The generated QR code is displayed as an image, and the user can download it.

2. **Theme Toggle**:  
   The user can toggle between light and dark mode using the theme switcher button. The app saves this preference using `localStorage`, so the theme persists even after the page is refreshed.

3. **Background Music**:  
   The app features background music that plays continuously. The music is integrated in a way that it doesn't interfere with the QR code generation process but enhances the overall experience.

## 🖥️ How to Use

1. **Clone or Download the Repository**:  
   You can clone or download the project to your local machine.

   ```bash
   git clone https://github.com/otopxy/qr-temi.git
