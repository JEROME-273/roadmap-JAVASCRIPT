# Week 4 Project: Student Grade Manager

## Project Overview

Build a comprehensive student management system that stores student information, calculates grades, and generates reports. This project uses arrays, objects, and array methods extensively.

## Features to Implement

1. Store multiple students with their information
2. Track multiple grades per student
3. Calculate average grades
4. Find top performers
5. Generate class statistics
6. Filter students by performance
7. Display formatted reports

## Data Structure

```javascript
const students = [
  {
    id: 1,
    name: "Alice Johnson",
    grades: [85, 92, 88, 95],
    email: "alice@school.com",
  },
  // ... more students
];
```

## Required Functions

1. `addStudent(students, student)` - Add new student
2. `calculateAverage(grades)` - Get average of grades array
3. `getStudentAverage(student)` - Get student's average
4. `getClassAverage(students)` - Get class average
5. `getTopStudents(students, n)` - Get top n students
6. `getFailingStudents(students)` - Students with average < 60
7. `displayStudentReport(student)` - Show formatted info
8. `displayClassReport(students)` - Show class statistics

## Success Criteria

✅ All functions work correctly
✅ Data is organized with objects and arrays
✅ Uses array methods (map, filter, reduce, sort)
✅ Calculations are accurate
✅ Reports are well-formatted
✅ Code is clean and organized

## Bonus Challenges

🌟 Add grade letter (A, B, C, D, F) calculation
🌟 Track attendance
🌟 Add subject-wise grades
🌟 Generate charts/graphs (ASCII art)
🌟 Search students by name
🌟 Sort students by different criteria

Start with `student-manager.js`!
