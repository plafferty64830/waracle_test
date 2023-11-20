import { apiKey } from "../../globalVars/apiKey";
import { Cat } from "../../types/Cat";
import { FavList } from "../../types/FavResp";
import { VoteResp } from "../../types/Votes";
import { fetchFavourites } from "../favourites/getFavourites";
import { fetchVotes } from "../votes/getVotes";

/**
 * used to get a list of cat images
 */
export const fetchCats = () => {

    return new Promise<Array<Cat>>(function (resolve, reject) {

        const result: Array<Cat> = [];

        //get favoutite list first so heart can be filled for favourites
        fetchFavourites().then((favList: Array<FavList>) => {

            fetchVotes().then((voteList: Array<VoteResp>) => {

                const url = 'https://api.thecatapi.com/v1/images/search?limit=100&order=ASC&api_key=' + apiKey;

                //get raw json from the cat api
                fetch(url).then(async (response) => {
                    const cats = await response.json();

                    //loop through cats, if the image_id 
                    //if the image is a favourite or has votes associated, append the data accordingly
                    cats.forEach((catItem: any) => {

                        //create a cat temp object, this is so the favourite and sumVotes value can be set before pushing the content to the result array
                        let catTemp:Cat;

                        //attempt to find a favourite item in the favList
                        const favIndex = favList.findIndex((fav: any) => fav.image_id === catItem.image_id);
                        if (favIndex !== -1 ) {
                            catTemp = { ...catItem, favourite: true, fav_id: favList[favIndex].fav_id };
                        } else {
                            catTemp = { ...catItem, favourite: false };
                        }

                        //attempt to the vote content in voteList
                        const voteIndex = voteList.findIndex((vote: VoteResp) => vote.image_id === catItem.image_id);
                        if (voteIndex !== -1) {
                            catTemp = { ...catTemp, numVotes: voteList[voteIndex].sumVotes };
                        } else {
                            catTemp = { ...catTemp, numVotes: 0 };
                        }

                        result.push(catTemp)
                    });

                    //return the requested data to the parent function to process the data on the UI
                    resolve(result);

                }).catch((error) => console.log(error)); //fetchCats
            }).catch(error => console.log(error)); //fetchVotes
        }).catch(error => console.log(error)); //fetchFavourites

        //catch errors are currently logged out to the console for now.
        /* in a larger system that was being deployed to customers, 
           errors could be pushs to a realtime database in the cloud so 
           the dev team could be made aware of issues without delay.
        */

    });

}