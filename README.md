# JavaScript Puzzle Game

### This is a fully responsive JavaScript game where you can play with an image or numbers.

<br />

## Note

This project is also built in ReactJS and can be found here: [ReactJS Puzzle Game](https://github.com/nicoPuegher/puzzle-game-react) 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Link](#link)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Notes](#notes)

<br />

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size
- Play with an image or numbers
- Choose a size
- Lose after 200 moves
- Win if the image or numbers are arranged in order (last block should be empty)

### Link

- Live Site URL: [GitHub Pages](https://nicopuegher.github.io/puzzle-game/)

## My process

### Built with

- HTML
- CSS
- Flexbox
- JavaScript Modules

### What I learned

- How to do a fairly good randomizer.

```js
for (let i = arr.length - 1; i > 0; i -= 1) {
  const random = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[random]] = [arr[random], arr[i]];
}
```

## Note

This project uses JavaScript modules so the index.html needs to run on a server such as "live server" in vscode.
