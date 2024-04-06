// total = yellow + brown = width * height
// yellow = (width - 2) * (height - 2)
// yellow = width * height - 2 * (width + height) + 4
const solution = (brown, yellow) => {
   const total = brown + yellow
   
   for (let width=total-1; width > 0; width--) {
       if (total % width) continue
       
       const height = total / width
       const y = (width - 2) * (height - 2)
       const b = total - yellow
       
       if (yellow == y && b === brown) return [width, height]
   }
}