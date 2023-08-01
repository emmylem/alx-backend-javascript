export default function getListStudentIds(student_info, city) {
  if (Array.isArray(student_info)) {
    return student_info.filter((info) => info.location === city);
  }
  return [];
}
