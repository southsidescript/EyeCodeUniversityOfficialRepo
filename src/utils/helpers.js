export function setTotalCalc(a,b,c,d){
    let result = (a + b + c + d) / arguments.length;
    console.trace(result)
   return result;
}

export function  fidnUser(user_id,data){
    const result = data.filter((user) => user.id === user_id); 

    return result[0];
}