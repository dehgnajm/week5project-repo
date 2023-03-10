class student {
    constructor(name, major){
        this.name = name;
        this.major = major;
    }
    describe(){
        return `${this.name} studies ${this.major}.`;
    }

}

class university {
    constructor(name){
        this.name = name;
        this.student = [];
    }
    addStudent(student) {
        if (student instanceof student){
            this.students.push(student);
        } else {
            throw new Error (`You can only add an instance of student. Argument is not a student: ${student}`);
        }
}
describe() {
    return `${this.name} has ${this.students.length} students.`;
    
}

}

class Menu {
    constructor(){
        this.universities = [];
        this.selectedUniversity = null;
    }
    Start () {
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch(selection){
                case '1':
                    this.createUniversity();
                    break;
                case '2':
                    this.viewUniversity();
                    break;
                case '3':
                    this.deleteUniversity();
                    break;
                case '4':
                    this.displayUniversities();
                    break;
                    default:
                        selection = 0;
            }
            selection = this.showMainMenuOptions();
    
        }
        alert ('Goodbye!');
}
showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create new university
    2) view university
    3) delete university
    4) display all universities

    `);

}

    showUniversityMenuOptions(universityInfo){
        return prompt(`
        0) back
        1) create student
        2) delete student
        --------------
        ${universityInfo}
        `);
    }

    displayUniversities(){
        let universitystring = '';
        for (let i = 0; i < this.universities.length; i++){
            universitystring += i + ') ' + this.universities [i].name + `\n`;
        }
        alert(universitystring);
    }
    createUniversity(){
        let name = prompt('enter name for new university:');
        this.universities.push(new university(name));
    }
    viewUniversity(){
        let index = prompt('enter the index of the university you wish to view:');
        if (index > -1 && index < this.universities.length){
            this.selectedUniversity = this.universities[index];
            let description = 'university name : ' + this.selectedUniversity.name + '\n';

            for (let i=0; i< this.selectedUniversity.students.length; i++){
                description += i + ') ' + this.selectedUniversity.students[i].name + ' - ' + 
                this.selectedUniversity.students[i].major + '\n';
            }
        let selection = this.showUniversityMenuOptions(description);
        switch (selection){
            case '1':
                this.createStudent();
                break;
            case '2':
                this.deleteStudent();
        }
    }
    }
    deleteUniversity(){
        let index = prompt('enter the index of university you wish to delete:');
        if (index > -1 && index < this.university.length){
            this.university.plice(index, 1);
        } 
    }
    createStudent(){
        let name = prompt('enter name for new student:');
        let major = prompt('enter major for new student:');
        this.selectedUniversity.students.push(new students(name, major));
    }

    deletePlayer(){
        let index = prompt('enter the index of the student you wish to delete:');
        if (index > -1 && index < this.selectedUniversity.students.length){
            this.selectedUniversity.student.splice(index, 1);
        }
    }
}
let menu = new Menu();
menu.Start();
