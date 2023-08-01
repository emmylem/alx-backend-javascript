export default function updateStudentGradeByCity(student_info, city,
newGrades) {
  if (Array.isArray(student_info)) {
    return [];
  }
  if (Array.isArray(newGrades)) {
    return [];
  }
  return student_info
    .filter(student_info => student.location === city)
    .map(student_info => {
      const [newGrades] = newGrades.filter(info => info.studentId === student.id);
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A,
	}
       });
}
