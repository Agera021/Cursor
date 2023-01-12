class Student{
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.Marks = [5, 4, 4, 5];
        this.Active = true;
    }
    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }

    get marks() {
        return this.Active ? this.Marks : null;
    }

    set marks(newMarks){
        if (this.Active) {
            this.Marks.push(newMarks);
        }
    
    }
    getAverageMark() {
        return this.Marks.reduce((a,b) => a + b, 0 ) / this.Marks.length    
    }

    dismiss() {
        this.Active = false;
    }
    recover() {
        this.Active = true;
    }

}

let newStudent = new Student ('Вищої Школи Психотерапії м.Одеса', '1', 'Остап Родоманський Бендер');
console.log(newStudent.getInfo());

console.log(newStudent.marks);
newStudent.marks = 5;

console.log(newStudent.getAverageMark());

newStudent.dismiss();
console.log(newStudent.marks);

newStudent.recover();
console.log(newStudent.marks);

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
      super(university, course, fullName);
      setInterval(
        () => console.log("getScholarship - " + this.getScholarship()),
        30000
      );
    }
    getMarks() {
      return (this.marks = [5, 4, 4, 5]);
    }
    getScholarship() {
      this.getMarks();
      if (this.marks === null || this.getAverageMark() < 4) {
        return "Оцінки низькі, Ви не маєте стипендії";
      } else {
        return "Вы отримуєте 1400 грн. стипендії";
      }
    }
  }
  
  let newsStudent = new BudgetStudent(
    "Energy coledge",
    "4",
    "Horacio Pagani"
  );
  
  console.log(newsStudent);
  console.log("getScholarship - " + newsStudent.getScholarship());