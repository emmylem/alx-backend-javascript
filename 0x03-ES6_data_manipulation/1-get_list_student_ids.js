export default function getListStudentIds(studentinfo) {
  if (Array.isArray(studentinfo)) {
    return studentinfo.map((info) => info.id);
  }
  return [];
}
