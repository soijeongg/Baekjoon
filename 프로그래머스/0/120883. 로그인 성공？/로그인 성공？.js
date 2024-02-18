function solution(id_pw, db) {
    var answer = 'fail';
    let id = id_pw[0] 
    let pw = id_pw[1]
    for(let i of db){
        if(i[0]==id){
            if(i[1]==pw){
                return "login"
            }else{
                return "wrong pw"
            }
            }
        
    }
    return answer;
}