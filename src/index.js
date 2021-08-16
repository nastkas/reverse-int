module.exports = function rev (n) {
    n=Math.abs(n);
    var digits = n.toString().split('');
    var realDigits = digits.map(Number)
    const reversed = realDigits.reverse().join();
    let str = realDigits.join('')
    
    return str
}


