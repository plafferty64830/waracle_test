import { apiKey } from "../../globalVars/apiKey";
import { FavResp } from "../../types/FavResp";

/**
 * used to mark a cat as a favourite
 */
export const createFavourite = (image: string) => {

    return new Promise(async function (resolve, reject) {

        //create the request object to be passed to the api
        const rawBody = JSON.stringify({
            "image_id":image,
            "sub_id":"plaffertyWaracle"
        });

        //set the request url
        const url = 'https://api.thecatapi.com/v1/favourites';

        //make the request
        const newFav = await fetch(
            url, 
                {
                    method: 'POST',
                    headers: { 'x-api-key': apiKey} ,
                    body: rawBody
                }
            )

        console.log(newFav)
                
        // //process the response and resolve the promise
        // const response = await newFav.json();

        // resolve(response);
    });

}