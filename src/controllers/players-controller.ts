import express, {Request, Response, } from "express";
import { getPlayersData,getByIdPlayersData, creatPlayersData } from "../services/players-service";
import { badRequest, noContent } from "../util/http-helper";


export const getPlayer = async (request:Request, response:Response)=>{
        
    const httpResponse = await getPlayersData();
    
    response.status(httpResponse.statusCode).json(httpResponse.body);
    };

export const getFindByIdPlayer = async (request:Request, response:Response)=>{
    const id = parseInt(request.params.id)
    const httpResponse = await getByIdPlayersData(id);
    
    response.status(httpResponse.statusCode).json(httpResponse.body);
    };

export const postPlayer = async (request:Request, response:Response)=>{
    const body = request.body
    const httpResponse = await creatPlayersData(body);
    if(httpResponse){
        response.status(httpResponse.statusCode).json(httpResponse.body);
    }else{
        const respo = await badRequest();
        console.log(`status code: ${respo.statusCode}`)
        response.status(respo.statusCode).json(respo.body);
    }
};
