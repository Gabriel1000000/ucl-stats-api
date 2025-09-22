import {badRequest, creat, noContent, ok } from "../util/http-helper";
import {httpResponse} from "../model/httpRespomse-model"
// import {findAllPlayers,findbYIdPlayers} from "../repositories/plsyers-repository"
import * as player from "../repositories/plsyers-repository"
import { PlayerModel } from "../model/players-model";
import { insertPlayers } from "../repositories/plsyers-repository";


export const getPlayersData = async ()=>{
    const data = await player.findAllPlayers();
     let response: httpResponse;
    if(data){
        response = await ok(data);
    }else{
        response = await noContent();
    }

    return response ;
};

export const getByIdPlayersData = async (id:number)=>{
    const data = await player.findByIdPlayers(id);
     let response: httpResponse;
    if(data){
        response = await ok(data);
    }else{
        response = await noContent();
    }

    return response ;
};

export const creatPlayersData = async (player:PlayerModel)=>{
    let respo: httpResponse | null = null;
    if(player && Object.keys(player).length !== 0){
        await insertPlayers(player);
        respo = await creat()
        console.log(player);
        }else{
        respo = await badRequest();
    }

    return respo;
};