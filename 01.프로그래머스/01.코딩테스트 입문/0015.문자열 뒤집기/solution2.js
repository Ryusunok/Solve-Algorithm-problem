function solution(my_string) {
    let result = '';
    for(let i = my_string.length -1; i >= 0; i--) {
        result += my_string.charAt(i);
    }
    return result;
}
