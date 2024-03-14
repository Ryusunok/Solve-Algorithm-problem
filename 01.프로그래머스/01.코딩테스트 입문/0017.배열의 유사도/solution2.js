function solution(s1, s2) {
    //intersection을 구하는 문제
    const concatLists = [...s1, ...s2]; //a + 공 + b + 공 
    const concatSet = new Set(concatLists); // a + 공 + b
    return concatLists.length - concatSet.size;
}
