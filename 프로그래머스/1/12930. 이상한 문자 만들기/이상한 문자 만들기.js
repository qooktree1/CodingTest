const solution = (s) => {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((c, idx) => (idx % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
        .join("")
    )
    .join(" ");
};
