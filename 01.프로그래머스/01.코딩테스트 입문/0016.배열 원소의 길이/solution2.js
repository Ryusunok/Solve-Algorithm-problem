function solution(strlist) {
    return strlist.reduce((before, now) => [...before, now.length], []);
}
