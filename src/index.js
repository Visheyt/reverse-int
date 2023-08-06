module.exports = function reverse (n) {
    const number = String(n);
    let newStr = ""
    if (number.startsWith("-")) {
      const newNumber = number.slice(1);
    for (let i = newNumber.length -1;i>=0 ; i--) {
      newStr+=newNumber[i]
    }
    return Number(newStr)
    }
    else {
      for (let i = number.length -1;i>=0 ; i--) {
      newStr+=number[i]
    }
    return Number(newStr)
    }
}
