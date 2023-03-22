const words = [
"python",
"javascript",
"mongodb",
"json",
"java",
"html",
"css",
"c",
"csharp",
"golang",
"kotlin",
"php",
"sql",
"ruby"
];

function randomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

export { randomWord };