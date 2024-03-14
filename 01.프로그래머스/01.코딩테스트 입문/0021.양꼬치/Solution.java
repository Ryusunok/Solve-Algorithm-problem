class Solution {
    public int solution(int n, int k) {
        final int PRICE_ONE_DRINK = 2000;
        final int PRICE_ONE_MEAT = 12000;
        
        return PRICE_ONE_MEAT * n + PRICE_ONE_DRINK * (k - n/10);
    }
}
