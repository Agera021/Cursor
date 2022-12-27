const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівня', 'Теорія автоматів', 'Алгоритми і структури даних'];
const marks = [4, 5, 5, 3, 4, 5];
const girls = students.filter((el) => el.slice(-1) === "а");
const boys = students.filter((el) => el.slice(-1) !== "а");


const getPairs = (girls, boys) => {
    let pair = [];
    for (let i=0; i<girls.length; i++) {
     pair = [...pair, [girls[i], boys[i]]]
    }
    return pair
};
const pair = getPairs(girls, boys)
console.log("Pair", pair);

const getPairAndThemes = (girls, boys, themes) => {
    let pairAndThemesArray = [];
    for (let i = 0; i < girls.length; i++) {
      pairAndThemesArray = [...pairAndThemesArray, [`${girls[i]} i ${boys[i]}`, themes[i]],];
    }
    return pairAndThemesArray;
  };
  const pairAndThemesArray = getPairAndThemes(girls,boys,themes);
  console.log("Pair and Themes", pairAndThemesArray);

  const getMarks = (students, marks) => {
    let studentsMarks = [];
    for (let i = 0; i < students.length; i++) {
      studentsMarks = [...studentsMarks, [students[i], marks[i]]];
    }
    return studentsMarks;
  };
  const studentsMarks = getMarks(students, marks);
  console.log("Students and marks", studentsMarks);

  const getPairsThemeAndMarks = (pairAndThemesArray) => {
    const studentsThemesAndMarks = pairAndThemesArray.map((el) => [...el,Math.floor(Math.random() * 5 + 1),]);
    return studentsThemesAndMarks;
  };
  const studentsThemesAndMarks = getPairsThemeAndMarks(pairAndThemesArray);
  console.log("Pairs and Themes and Marks", studentsThemesAndMarks);

document.write("Kоманди: ","</br>");
document.write("Команда 1: ", pair[0] , ";", "</br>");
document.write("Команда 2: ", pair[1] , ";", "</br>");
document.write("Команда 3: ", pair[2] , ".", "</br>");
document.writeln("</br>");
document.write("Kоманда  з темами: ",  "</br>");
document.write("Команда 1: ", pairAndThemesArray[0] , ";", "</br>");
document.write("Команда 2: ", pairAndThemesArray[1] , ";", "</br>");
document.write("Команда 3: ", pairAndThemesArray[2] , ".", "</br>");
document.writeln("</br>");
document.writeln("Студент + оцінка: ",  "</br>");
document.write("Студент: ", studentsMarks[0] , ";", "</br>");
document.write("Студент: ", studentsMarks[1] , ";", "</br>");
document.write("Студент: ", studentsMarks[2] , ";", "</br>");
document.write("Студент: ", studentsMarks[3] , ";", "</br>");
document.write("Студент: ", studentsMarks[4] , ";", "</br>");
document.write("Студент: ", studentsMarks[5] , ".", "</br>");
document.writeln("</br>");
document.write("Команда + оцінка: ", "</br>");
document.write("Команда 1: ", studentsThemesAndMarks[0] , ";", "</br>");
document.write("Команда 2: ", studentsThemesAndMarks[1] , ";", "</br>");
document.write("Команда 3: ", studentsThemesAndMarks[2] , ".", "</br>");