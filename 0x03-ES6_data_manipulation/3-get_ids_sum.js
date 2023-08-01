export default function getListStudentIds(studentinfo) {
  if (Array.isArray(studentinfo)) {
    return studentinfo.reduce((a, b) => a + b.id, 0);
  }
  return [];
}
