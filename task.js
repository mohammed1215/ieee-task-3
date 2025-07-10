const user = {
  name: "Ashraf Ben Sharqy",
  age: 29,
  teams: ["Wydad", "Al Hilal", "Zamalek", "Al Gazira", "Al-Rayyan"],
  nationalTeam: {
    name: "Morroco",
    best: {
      africanCupOfNations: ["Champion", 2018],
      worldCup: ["4th", 2022],
    },
  },
}

let {
  teams: [, , name],
  nationalTeam: {
    best: {
      worldCup: [number],
    },
  },
} = user

console.log(`team is ${name},which world cups is ${number}`)

// task 2

const player = {
  name: "Samir Kamona",
  club: "Al Ahly",
  score: 25,
}

const fantasyPlayer = { ...player, score: 50, position: "ST" }

// task 3 filtering array

function filteration(arr) {
  let filtered = arr.filter((word) => /^(hand).*(s|y|le)$/i.test(word))
  console.log(filtered)
}

filteration([
  "handOn",
  "hands",
  "hanDLes",
  "Handcuffs",
  "handmade",
  "in-hands",
  "HANDINGLY",
])
