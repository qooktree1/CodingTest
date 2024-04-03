const solution = (sizes) => {
  let maxWidth = 0,
    maxHeight = 0;
  for (const size of sizes) {
    maxWidth = Math.max(maxWidth, Math.max(size[0], size[1]));
    maxHeight = Math.max(maxHeight, Math.min(size[0], size[1]));
  }
  return maxWidth * maxHeight;
};
