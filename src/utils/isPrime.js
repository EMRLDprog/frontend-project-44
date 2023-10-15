export default (num) => {
  if (num === 1) return false;
  if (num % 2 === 0 && num > 2) return false;

  const s = Math.sqrt(num);

  for (let i = 3; i <= s; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};
