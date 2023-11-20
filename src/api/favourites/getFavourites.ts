import { apiKey } from "../../globalVars/apiKey";
import { FavList } from "../../types/FavResp";

/**
 * used to mark a cat as a favourite
 */
export const fetchFavourites = () => {

    return new Promise<Array<FavList>>(async function (resolve, reject) {

        //set the request url
        const url = 'https://api.thecatapi.com/v1/favourites?sub_id=plaffertyWaracle';

        //make the request
        const favourites = await fetch(url, {
            headers: { 
                'x-api-key': apiKey,
                "content-type": 'application/json'
            }
        });

        //process the response and resolve the promise
        const response = await favourites.json();

        let resultData = response.map((cat:any) => ({image_id: cat.image_id, fav_id: cat.id}));

        resolve(resultData)


    });

}