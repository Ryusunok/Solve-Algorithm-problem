[주소]
https://school.programmers.co.kr/learn/courses/30/lessons/120817

[문제 설명]
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

[풀이]
class Solution {
    public double solution(int[] numbers) {
        int sum = 0;
        for(int e : numbers) 
            sum += e;
        return (double)sum/numbers.length;
    }
}
