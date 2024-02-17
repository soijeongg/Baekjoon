function solution(my_string, queries) {
    my_string = my_string.split("")
    for(let i of queries){
       let a = my_string.slice(i[0], i[1] + 1);
        a.reverse();
      my_string = my_string.slice(0, i[0]).concat(a, my_string.slice(i[1] + 1));
    }
    return my_string.join("");
}