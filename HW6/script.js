const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }}, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }}, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }}];

function convertKey(key) {
const remove = key.replace ("_", " ");
return remove[0].toUpperCase() + remove.slice(1).toLowerCase();
}
function getSubjects(students) {
    return students.map ((student) => 
    Object.keys(student.subjects).map((subject) =>
    convertKey(subject)));   
};
console.log(getSubjects(students));

function getAverageMark(students) {
    let result = Object.values(students.subjects).reduce((a, b) => [...a, ...b]);
    let average = (result.reduce ((a, b) => a + b) / result.lenght).toFixed(2);
    return average   
}
console.log(getAverageMark(students[0]));

const getStudentInfo = students.map((student) => {
    return {
        course: student.course,
        name: student.name,
        high: getAverageMark(student)
    };
});
console.log(getStudentInfo[0]);

function getCorrect(students) {
    return students.map((student) => student.name).sort();
};
console.log(getCorrect(students));

const highes = students.map((student) => {
    return {
        name: student.name,
        high: getAverageMark(student)
    };
});
const getBestStudent = highes.sort((a, b) => {
    return b.high - a.high;
});
console.log(getBestStudent[0].name, "rating ", getBestStudent[0].high);

function calculateWordLetters(imia) {
    let info = {};
    imia = imia.toLowerCase().split("");
    imia.forEach((v) => (info[v] = (info[v]) ? ++info[v] : 1));
    return info
}
console.log(calculateWordLetters("KKKKoooooEEEENniGGGsssegg"));