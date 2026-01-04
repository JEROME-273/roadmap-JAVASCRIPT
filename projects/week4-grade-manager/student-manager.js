// Week 4 Project: Student Grade Manager
// Managing complex data with arrays and objects!

console.log("📚 Student Grade Management System 📚\n");

// Sample student data
const students = [
  {
    id: 1,
    name: "Alice Johnson",
    grades: [85, 92, 88, 95, 90],
    email: "alice@school.com",
  },
  {
    id: 2,
    name: "Bob Smith",
    grades: [78, 82, 75, 88, 80],
    email: "bob@school.com",
  },
  {
    id: 3,
    name: "Charlie Davis",
    grades: [95, 98, 92, 97, 96],
    email: "charlie@school.com",
  },
  {
    id: 4,
    name: "Diana Chen",
    grades: [70, 75, 72, 68, 74],
    email: "diana@school.com",
  },
  {
    id: 5,
    name: "Eve Martinez",
    grades: [88, 90, 85, 92, 87],
    email: "eve@school.com",
  },
];

// TODO: Calculate average of an array of numbers
function calculateAverage(grades) {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return sum / grades.length;
}

// TODO: Get letter grade from numeric grade
function getLetterGrade(average) {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
}

// TODO: Add average and letter grade to student object
function enrichStudentData(student) {
  const average = calculateAverage(student.grades);
  return {
    ...student,
    average: Math.round(average * 10) / 10, // Round to 1 decimal
    letterGrade: getLetterGrade(average),
  };
}

// TODO: Get all students with enriched data
function getEnrichedStudents(students) {
  return students.map(enrichStudentData);
}

// TODO: Display single student report
function displayStudentReport(student) {
  console.log("=".repeat(50));
  console.log(`Student ID: ${student.id}`);
  console.log(`Name: ${student.name}`);
  console.log(`Email: ${student.email}`);
  console.log(`Grades: ${student.grades.join(", ")}`);
  console.log(`Average: ${student.average}`);
  console.log(`Letter Grade: ${student.letterGrade}`);
  console.log("=".repeat(50) + "\n");
}

// TODO: Get top N students
function getTopStudents(students, n) {
  const enriched = getEnrichedStudents(students);
  return enriched.sort((a, b) => b.average - a.average).slice(0, n);
}

// TODO: Get failing students (average < 60)
function getFailingStudents(students) {
  const enriched = getEnrichedStudents(students);
  return enriched.filter((student) => student.average < 60);
}

// TODO: Get students by letter grade
function getStudentsByGrade(students, letterGrade) {
  const enriched = getEnrichedStudents(students);
  return enriched.filter((student) => student.letterGrade === letterGrade);
}

// TODO: Calculate class average
function getClassAverage(students) {
  const allGrades = students.flatMap((student) => student.grades);
  return calculateAverage(allGrades);
}

// TODO: Get class statistics
function getClassStatistics(students) {
  const enriched = getEnrichedStudents(students);
  const averages = enriched.map((s) => s.average);

  return {
    totalStudents: students.length,
    classAverage: Math.round(calculateAverage(averages) * 10) / 10,
    highestAverage: Math.max(...averages),
    lowestAverage: Math.min(...averages),
    gradeDistribution: {
      A: getStudentsByGrade(students, "A").length,
      B: getStudentsByGrade(students, "B").length,
      C: getStudentsByGrade(students, "C").length,
      D: getStudentsByGrade(students, "D").length,
      F: getStudentsByGrade(students, "F").length,
    },
  };
}

// TODO: Display class report
function displayClassReport(students) {
  console.log("\n" + "=".repeat(60));
  console.log("  CLASS REPORT");
  console.log("=".repeat(60));

  const stats = getClassStatistics(students);

  console.log(`Total Students: ${stats.totalStudents}`);
  console.log(`Class Average: ${stats.classAverage}`);
  console.log(`Highest Average: ${stats.highestAverage}`);
  console.log(`Lowest Average: ${stats.lowestAverage}`);

  console.log("\nGrade Distribution:");
  console.log(
    `  A: ${"█".repeat(stats.gradeDistribution.A)} (${
      stats.gradeDistribution.A
    })`
  );
  console.log(
    `  B: ${"█".repeat(stats.gradeDistribution.B)} (${
      stats.gradeDistribution.B
    })`
  );
  console.log(
    `  C: ${"█".repeat(stats.gradeDistribution.C)} (${
      stats.gradeDistribution.C
    })`
  );
  console.log(
    `  D: ${"█".repeat(stats.gradeDistribution.D)} (${
      stats.gradeDistribution.D
    })`
  );
  console.log(
    `  F: ${"█".repeat(stats.gradeDistribution.F)} (${
      stats.gradeDistribution.F
    })`
  );

  console.log("=".repeat(60) + "\n");
}

// TODO: Display top performers
function displayTopPerformers(students, n = 3) {
  console.log(`\n🏆 TOP ${n} STUDENTS 🏆\n`);
  const topStudents = getTopStudents(students, n);

  topStudents.forEach((student, index) => {
    const medal = index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉";
    console.log(
      `${medal} ${index + 1}. ${student.name} - Average: ${student.average} (${
        student.letterGrade
      })`
    );
  });
  console.log();
}

// TODO: Search student by name
function searchStudent(students, searchTerm) {
  return students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// TODO: Add new student
function addStudent(students, newStudent) {
  const id = Math.max(...students.map((s) => s.id)) + 1;
  return [...students, { id, ...newStudent }];
}

// TODO: Update student grades
function updateGrades(students, studentId, newGrades) {
  return students.map((student) =>
    student.id === studentId ? { ...student, grades: newGrades } : student
  );
}

// RUN THE PROGRAM
console.log("Initializing Student Management System...\n");

// Display class report
displayClassReport(students);

// Show top performers
displayTopPerformers(students, 3);

// Display individual student reports
console.log("📋 INDIVIDUAL STUDENT REPORTS\n");
const enrichedStudents = getEnrichedStudents(students);
enrichedStudents.forEach(displayStudentReport);

// Demonstrate filtering
console.log("🔍 STUDENTS WITH GRADE 'A'\n");
const aStudents = getStudentsByGrade(students, "A");
aStudents.forEach((student) => {
  console.log(`- ${student.name}: ${student.average}`);
});

// Demonstrate search
console.log("\n🔍 SEARCH RESULTS for 'an'\n");
const searchResults = searchStudent(students, "an");
searchResults.forEach((student) => {
  console.log(`- ${student.name}`);
});

// Demonstrate adding a student
console.log("\n➕ ADDING NEW STUDENT\n");
const updatedStudents = addStudent(students, {
  name: "Frank Wilson",
  grades: [82, 85, 88, 84, 87],
  email: "frank@school.com",
});
console.log(`Total students now: ${updatedStudents.length}`);

console.log("\n✅ Student Management System Demo Complete!");
console.log("💡 This project demonstrates:");
console.log("   - Working with arrays of objects");
console.log("   - Array methods (map, filter, reduce, sort)");
console.log("   - Data transformation and enrichment");
console.log("   - Complex data analysis");
console.log("   - Formatted output and reporting");
console.log("\n🎉 Congratulations on completing Week 4! 🎉\n");

// Run with: node student-manager.js
