function solution(my_string, overwrite_string, s) {
    let a  = my_string.slice(s,s+overwrite_string.length)
    var answer = my_string.substring(0, s)+overwrite_string+my_string.substring(s+overwrite_string.length)
    return answer;
}