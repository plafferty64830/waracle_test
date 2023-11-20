type Category = {
    id: number;
    name: string;
}

export type Cat = {
    breeds: Array<string>;
    categories: Array<Category>;
    id: string;
    url: string;
    width: number;
    height: number;
    favourite: boolean;
    fav_id: string;
    numVotes: number;
}