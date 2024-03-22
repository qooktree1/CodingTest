const NUMBERS_IN_WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

const solution = numbers => {
    for (let i=0; i<NUMBERS_IN_WORD.length; i++) {
        numbers = numbers.replaceAll(NUMBERS_IN_WORD[i], i)
    }
    return +numbers
}