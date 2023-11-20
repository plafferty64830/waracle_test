import { apiKey } from "../../globalVars/apiKey";
import { FavResp } from "../../types/FavResp";

/**
 * used to vote up/down for a cat
 */
export const makeVote = (image: string, voteDirection: string) => {

    return new Promise(async function (resolve, reject) {

        //create the request object to be passed to the api
        const rawBody = JSON.stringify({
            "image_id": image,
            "sub_id": "plaffertyWaracle",
            "value": voteDirection === "up" ? 1 : -1
        });

    
        //set the request url
        const url = 'https://api.thecatapi.com/v1/votes';

        //make the request
        const madeVote = await fetch(
            url, 
                {
                    method: 'POST',
                    headers: { 'x-api-key': apiKey} ,
                    body: rawBody
                }
            )

        console.log(madeVote)
                
        //process the response and resolve the promise
        const response = await madeVote.json();

        resolve(response);
    });

}