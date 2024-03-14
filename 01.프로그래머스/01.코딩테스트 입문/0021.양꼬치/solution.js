function solution(n, k) {
    const priceOneDrink = 2000;
    const priceOneMeat = 12000;
        
    return priceOneMeat * n + priceOneDrink * (k - Math.floor(n/10));
}
