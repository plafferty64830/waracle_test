import { apiKey } from "../../globalVars/apiKey";
import { FavResp } from "../../types/FavResp";

/**
 * used to mark a cat as a favourite
 */
export const deleteFavourite = (fav_id: string) => {

    return new Promise<FavResp>(async function (resolve, reject) {

        //create the request object to be passed to the api
        const requestData = {
            favouriteId: fav_id
        }

        //set the request url
        const url = 'https://api.thecatapi.com/v1/favourites';

        //make the request
        const deleteFav = await fetch(url, {
            method: 'DELETE',
            headers: { 'x-api-key': apiKey},
            body: JSON.stringify(requestData)
        });

        //process the response and resolve the promise
        const response = await deleteFav.json();

        resolve(response);
    });

}