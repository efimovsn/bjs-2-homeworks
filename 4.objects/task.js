function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;  
}

let student1  = new Student("Василиса", "женский", 19);
let student2  = new Student("Артём", "мужской", 25);
let marks = [];

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks){
    if(this.marks === undefined){
        this.marks = marks;   
    } else {
        this.marks = this.marks.concat(marks);
    }
}

Student.prototype.getAverage = function () {
    const sum = mark.reduce((acc, mark) => acc + mark, 0);
    const length = mark.length;
    return sum / length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason; 
}

