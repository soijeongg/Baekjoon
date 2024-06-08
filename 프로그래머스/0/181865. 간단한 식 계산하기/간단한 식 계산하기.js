function solution(binomial) {
    binomial = binomial.split(" ")
    if (binomial[1]=="+") {
     return  binomial[0]*1+binomial[2]*1
    }else if(binomial[1] == "-") {
        return binomial[0]*1-binomial[2]*1
    }
    else {
        return  binomial[0]*1*binomial[2]*1
    }
}

//문자열이 매개변수로 주어짐 이 문자열은 띄어쓰기로 나눠져 있음 이걸 나눠서 가운데 기호에따라 연산 
