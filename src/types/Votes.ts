export type Vote = {
    id: string;
    image_id: string;
    sub_id: string;
    create_id: string;
    value: number;
    country_code: string;
    image: Image;
}

export type VoteResp = {
    image_id: string;
    sumVotes: number;
}

type Image = {
    id: string;
    url: string;
}


