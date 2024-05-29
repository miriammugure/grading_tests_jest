// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
 
export const sciences = (marks) => {
  if (marks >= 70 && marks <= 100) return "A";
  if (marks >= 60 && marks <= 69) return "B";
  if (marks >= 50 && marks <= 59) return "C";
  if (marks >= 40 && marks <= 49) return "Pass";
  return "Sup";
};

export const humanities = (marks) => {
  if (marks >= 80 && marks <= 100) return "A";
  if (marks >= 70 && marks <= 79) return "B";
  if (marks >= 60 && marks <= 69) return "C";
  if (marks >= 50 && marks <= 59) return "Pass";
  return "Sup";
};

export const languages = (marks) => {
  if (marks >= 75 && marks <= 100) return "A";
  if (marks >= 65 && marks <= 74) return "B";
  if (marks >= 55 && marks <= 64) return "C";
  if (marks >= 45 && marks <= 54) return "Pass";
  return "Sup";
};


export const calculateGradeAverage = (student) => {
const grade ={
  name:student.name,
  math:sciences(student.math),
  che:sciences(student.che),
  phy:sciences(student.phy),
  kis:languages(student.kis),
  eng:languages(student.eng),
  re:humanities(student.re),
  comp:languages(student.comp),
};

  const averageScore =
   Math.floor
   ( (student.math +
      student.che +
      student.comp +
      student.kis +
      student.phy +
      student.re +
      student.eng)/
    7)
 grade.average=averageScore;
 return grade
};
const student = {
  name: "Miriam Mugure",
  math: 80,
  eng: 65,
  kis: 48,
  phy: 67,
  che: 56,
  re: 89,
  comp: 82,
};
const ouput =calculateGradeAverage(student);
console.log(ouput)
