import {httpResponse} from "../model/httpRespomse-model"

export const ok = async (data:any):Promise<httpResponse>=>{
    return {
        statusCode:200,
        body:data,
    };

}
export const creat = async ():Promise<httpResponse>=>{
    return {
        statusCode:201,
        body:{message:"Sucesseful"},
    };
}
export const noContent = async ():Promise<httpResponse>=>{
    return {
        statusCode:204,
        body:null,
    };
}

export const badRequest = async ():Promise<httpResponse>=>{
    return {
        statusCode: 400,
        body: null,
    };
}
