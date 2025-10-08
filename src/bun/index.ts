import { BrowserWindow } from "electrobun/bun";

// Create the main application window
const mainWindow = new BrowserWindow({
  title: "Buncord",
  url: "views://splash/index.html",
  frame: {
    width: 300,
    height: 350,
    x: 200,
    y: 200,
  },
  titleBarStyle: 'hiddenInset',
});

console.log("Hello Electrobun app started!");