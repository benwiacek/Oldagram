# Oldagram

An Instagram clone featuring famous artists' humorous selfies. Built entirely with JavaScript - no static HTML posts.

<img width="600" height="400" alt="oldagram-screenshot" src="https://github.com/user-attachments/assets/dcb5a569-c7fa-4fea-96a2-ddd864425579" />

[**Live Demo**](https://oldagram-ben.netlify.app/)

## Features

- Fully dynamic post rendering from JavaScript data array
- Like functionality via heart icon click or double-tap on image
- Real-time like counter updates
- Responsive feed layout with artist profiles (Munch, Kahlo, van Gogh, etc.)

## Built with

JavaScript, HTML, CSS

## How it works

- All posts stored in a JavaScript array of objects
- DOM manipulation renders posts dynamically on page load
- Event listeners handle likes on both heart icons and post images (double-click)
- Toggle class to track liked state and update counters in real-time
