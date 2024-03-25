const solution = (s) => s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((c, idx) => (idx % 2 ? c.toLowerCase() : c.toUpperCase()))
        .join("")
    )
    .join(" ");