export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
  return [...set]
    .filter((obj) => obj.startsWith(startString))
    .map((obj) => obj.slice(startString.length))
    .join('-');
}
