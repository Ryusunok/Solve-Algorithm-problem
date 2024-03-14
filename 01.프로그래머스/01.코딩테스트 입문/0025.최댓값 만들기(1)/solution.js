function solution(numbers) {
    numbers.sort((x, y) => y - x);
    return numbers[0] * numbers[1];  
}
