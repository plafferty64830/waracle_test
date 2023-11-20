import { apiKey } from "../../globalVars/apiKey";
import { FavList } from "../../types/FavResp";
import { Vote, VoteResp } from "../../types/Votes";

/**
 * used to fetch the vote content from the API
 */
export const fetchVotes = () => {

    return new Promise<Array<VoteResp>>(async function (resolve, reject) {

        //set the request url
        const url = 'https://api.thecatapi.com/v1/votes?sub_id=plaffertyWaracle';

        //make the request
        const votes = await fetch(url, {
            headers: { 
                'x-api-key': apiKey,
                "content-type": 'application/json'
            }
        });

        //process the response and resolve the promise
        const response = await votes.json();

        const tempResult:Array<VoteResp> = []

        //loop through the response data and create an object array containing a summary of the votes for each unique image
        response.forEach((voteItem: Vote) => {
            //check to see if there is an existing vote for this image in the response
            const existingVote = tempResult.findIndex(vote => vote.image_id === voteItem.image_id)

            //if the existingVote is -1, it doesn't exist therefore create it
            if(existingVote === -1){
                tempResult.push({image_id: voteItem.image_id, sumVotes: voteItem.value});
            //otherwise, use the index and add the voteItem.value to the value stored in the tempResult
            } else {
                tempResult[existingVote].sumVotes = tempResult[existingVote].sumVotes + voteItem.value;
            }
        });
        
        //when all votes have been counted, return the content the parent by resolving the promise
        resolve(tempResult)

    });

}

