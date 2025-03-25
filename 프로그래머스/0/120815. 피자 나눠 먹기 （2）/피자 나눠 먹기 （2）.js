function solution(n) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    return (6 * n) / gcd(6, n) / 6;
    }
    
 
//n 피자를 나눠먹을 수가 매개변수가 주어짐 주문한 피자를 남기지 않고 모두 같은 수 -> 6으로 나눠지는 공배수를 구하는건가?