export default function updateStudentGradeByCity(
  studentinfo,
  city,
  newGrades,
) {
  if (Array.isArray(studentinfo)) {
    return [];
  }
  if (Array.isArray(newGrades)) {
    return [];
  }
  return studentinfo
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.filter((info) => info.studentId === student.id);
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
