const DAY_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

const solution = (a, b) => DAY_OF_WEEK[new Date(`2016-${a}-${b}`).getDay()]