let answer = "";
for (let i = 1 ; i <= 1000 ; i++ ) {
    if (i % 2 === 0 ) {
        if (i !== 2) {
            answer += ", ";
        }
        answer += i;
    }
}
console.log(answer);