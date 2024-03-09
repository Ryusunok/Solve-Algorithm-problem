[주소]
https://school.programmers.co.kr/learn/courses/30/lessons/120903
  
[문제 설명]
두 배열이 얼마나 유사한지 확인해보려고 합니다.
문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
  
[풀이]
class Solution {
    public int solution(String[] s1, String[] s2) {
        int answer = 0;
        for(String partS1 : s1) {
            for(String partS2 : s2) {
                if(partS1.equals(partS2)) {
                    answer++;
                    break;
                }
                    
            }
        }
        return answer;
    }
}
