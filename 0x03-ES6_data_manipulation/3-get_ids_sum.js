export default function getListStudentIds(student_info) {
  if (Array.isArray(student_info)) {
    return student_info.reduce((a, b) => a + b.id, 0);
  }
  return [];
}
