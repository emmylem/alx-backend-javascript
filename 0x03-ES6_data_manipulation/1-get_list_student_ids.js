export default function getListStudentIds(student_info) {
  if (Array.isArray(student_info)) {
    return student_info.map((info) => info.id);
  }
  return [];
}
