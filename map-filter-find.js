const students =[
    {name: 'Tamanna Vatiya', id: 102, marks:78},
    {name: 'Kallani Priyadarshana', id: 105, marks:98},
    {name: 'jashi Khanna', id: 103, marks:69},
    {name: 'Abul Kalam', id: 108, marks:46}
]

const names = students.map(student => student.name);
const marks = students.map(student => student.marks* 0.75);
const goodStudents = students.filter(student => student.marks>60);
const goodStudent = students.find(student => student.marks>60);
console.log(goodStudent);