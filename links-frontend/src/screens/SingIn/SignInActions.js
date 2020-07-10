export const SIGN_IN = 'SIGN_IN';

export const sign_In = (data)=>{
//fazer a requisição api  
    return {type: SIGN_IN, payload: data};
}