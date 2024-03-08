// Create a function that accepts a string in Array format
// Order students by marks in descending order
// Returns an array with the students ordered
const students = [{name: 'John', mark: 85}, {name: 'Lia', mark: 90}, {name: 'Steven', mark: 88}, {name: 'Ana', mark: 77}]

const sortbyMarksDescending = (studentsArray) => {
    return studentsArray.sort( (a,b) => { return b.mark - a.mark})
}

console.log(sortbyMarksDescending(students))