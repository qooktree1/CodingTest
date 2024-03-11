const solution = phoneNumber => new Array(phoneNumber.length - 4).fill('*').join('') + phoneNumber.slice(phoneNumber.length - 4)
