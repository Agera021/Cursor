const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівня', 'Теорія автоманів', 'Алгоритми і структури даних'];
const marks = [4, 5, 5, 3, 4, 5];

function getBoys (arr) {
    const boys = [];
    for (let i=0; i<students.length; i++){
        if (arr [i] === 'Олександр' || arr [i] === 'Ігор' || arr [i] === 'Олексій' ){
            boys.push(arr[i]);
        }
    }
    return boys;
}

function getGirls(arr) {
	const girls = [];
	for (let i = 0; i < students.length; i++){
		if (arr[i] === 'Олена' || arr[i] === 'Іра' || arr[i] === 'Світлана'){
			girls.push(arr[i]);
		} 
	}
	return girls;
}
function getPairs(boys, girls) {
    let eachPair = '';
    const pairs = [];
    for (let i=0; i<students.length / 2; i++) {
        eachPair = boys.slice (i, i+1);
        eachPair.push(girls[i]);
        eachPair = eachPair.join ('i');
    }
    return pairs
}

function getPairsThemes (pairs, themesCopy){
    const studentsPlusTheme = [];
    let studentGenderArray = [...pairs];
    let studentGenderString = [];
    for (let i=0; i < studentGenderArray.length; i++){
    const studentsEach = studentGenderArray.slice([i], [i+1]);
    studentGenderString.push (studentsEach.pop (studentsEach.length - 1));
studentGenderString.push(themesCopy[i]);
studentsPlusTheme.push(studentGenderString);
studentGenderString = [];
    }
return studentsPlusTheme;    
}

getPairsThemes(getPairs(getBoys(students), getGirls(students)), themes);

function giveStudentMark (students, marks) {
    const studentsMark = [];
    for (let i= 0; i < students.length; i++) {
    let eachStudent = students.slice (i, i+1);
    eachStudent.push (marks[i]);
    studentsMark.push (eachStudent);
    }
    return  studentsMark;
}

function getPairsThemeAndMarks (studentsTheme, marks) {
const studentsFinalResult = [];
let studentsPlusThemeCopy = [...studentsTheme];
let eachStudentThemeArray = [];
for (let i=0; i <= studentsPlusThemeCopy.length - 1; i++) {
    const randomMark = Math.floor (Math.random() * (5 - 1 + 1)) + 1;
    let eachStudentTheme = studentsPlusThemeCopy.slice([i], [i+1]);
    eachStudentThemeArray = eachStudentTheme.pop(eachStudentTheme.length - 1);
    eachStudentThemeArray.push(randomMark);
    studentsFinalResult.push(eachStudentThemeArray);
}   
return studentsFinalResult;
}

const container=document.querySelector("#container");
container.innerHTML=`
<p>Pairs: ${getPairs(getBoys(students) , getGirls(students))};</p>
<p>Student/Mark: ${giveStudentMark(students, marks)};</p>
<p>Final result: ${getPairsThemeAndMarks(getPairsThemes(getPairs(getBoys(students) , getGirls(students)) , themes) , marks)};</p>
`;