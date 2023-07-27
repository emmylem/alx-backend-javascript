export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name != 'string') {
      throw TypeError ('name must be a string');
    }
    if (typeof length != 'number') {
      throw TypeError ('length must be a Number');
    }
    if (!Array.isArray(students)) {
      throw TypeError ('students must be an array');
    }
    if (students.some((student) => typeof name != 'string')) {
      throw TypeError ('students must be an array of Strings');
    }
  this._name = name;
  this._length = length;
  this._students = students;
}

get name() {
  return this._name;
}

set name(value) {
  if (typeof value != 'string') {
      throw TypeError ('name must be a string');
    }
    this._name = value;
}

get length() {
  return  this._length;
}

set length(value) {
  if (typeof value != 'number') {
      throw TypeError ('length must be a Number');
    }
    this._length = value;
}

get students() {
  return this._students;
}

set students(value) {
  if (!Array.isArray(students)) {
      throw TypeError ('students must be an array');
    }
  if (value.some((student) => typeof name != 'string')) {
    throw TypeError ('students must be an array of Strings');
  }
  this._students = value
  }
}