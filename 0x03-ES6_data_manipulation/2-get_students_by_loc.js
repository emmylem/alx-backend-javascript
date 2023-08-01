export default function getListStudentIds(studentinfo, city) {
  if (Array.isArray(studentinfo)) {
    return studentinfo.filter((info) => info.location === city);
  }
  return [];
}
