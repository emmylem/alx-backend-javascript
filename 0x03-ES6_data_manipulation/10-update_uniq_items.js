export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw Error('Cannot process');
  }

  items.forEach((v, k) => {
    if (v === 1) {
      items.set(k, 100);
    }
  });

  return items;
}
