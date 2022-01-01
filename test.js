const sortingFunction = (n) => {
  return [...n].sort(function (a, b) {
    return (a.age % 2) - (b.age % 2) || a.age - b.age;
  });
};

// const vaxArr = [
//   { name: "sunil", age: 21, temperature: 98 },
//   { name: "Biplap", age: 22, temperature: 98 },
//   { name: "Kabir", age: 36, temperature: 99 },
//   { name: "Paul", age: 42, temperature: 98 },
//   { name: "Nayem", age: 50, temperature: 100 },
//   { name: "Rahul", age: 37, temperature: 99 },
//   { name: "Sabnaj", age: 51, temperature: 101 },
//   { name: "Kat", age: 41, temperature: 98 },
// ];

const vaxTrail = (vaxArr) => {
  const vaxObject = {};
  const A = [];
  const B = [];
  const C = [];
  const D = [];

  vaxArr.forEach((vax) => {
    if (vax.temperature < 100 && vax.age >= 20 && vax.age <= 30) {
      console.log(vax.age);
      A.push(vax);
    } else if (vax.temperature < 100 && vax.age >= 31 && vax.age <= 40) {
      B.push(vax);
    } else if (vax.temperature < 100 && vax.age >= 41 && vax.age <= 50) {
      C.push(vax);
    } else if (vax.temperature >= 100) {
      D.push(vax);
    } else {
      console.log("error");
    }
  });

  sortedA = sortingFunction(A);
  sortedB = sortingFunction(B);
  sortedC = sortingFunction(C);
  sortedD = sortingFunction(D);
  console.log(sortedA);

  vaxObject.A = sortedA;
  vaxObject.B = sortedB;
  vaxObject.C = sortedC;
  vaxObject.D = sortedD;
  return vaxObject;
};

// console.log(vaxTrail(vaxArr));
