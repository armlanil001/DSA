function palindrome(x) {
    let rev = 0;
    let xCopy = x;

    while (x > 0) {
        let rem = x % 10;
        rev = rev * 10 + rem;
        x = Math.floor(x / 10);
    }

    return rev === xCopy ? 'Palindrome' : 'not Palindrome';
}

console.log(palindrome(121));