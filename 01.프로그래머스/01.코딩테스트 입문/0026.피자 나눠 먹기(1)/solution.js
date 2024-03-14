function solution(n) {
    if(n < 7) return 1;
    if(n === 7) return 1;
    if(n > 7 && n % 7 === 0) return Math.floor(n/7);
    if(n > 7 && n % 7 !== 0) return Math.floor(n/7) + 1;
}
