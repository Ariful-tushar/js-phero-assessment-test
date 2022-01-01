n = [1, 2, 3, 4, 5, 6, 7];

n = [
  {
    name: "Amni",
    age: 21,
  },
  {
    name: "Biplap",
    age: 22,
  },
  {
    name: "Biplap",
    age: 25,
  },
];

const sortingFunction = (n) => {
  return [...n].sort(function (a, b) {
    return (a.age % 2) - (b.age % 2) || a.age - b.age;
  });
};

console.log(sortingFunction(n));
