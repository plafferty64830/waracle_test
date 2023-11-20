import { Box, Container, FlexProps, Grid, GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useState, useEffect, ReactNode } from "react";
import { Cat } from "../types/Cat";
import { fetchCats } from "../api/cats/getCats";
import { CatView } from "../components/Cat";

export type PageListProps = FlexProps;

export const ListCats: React.FC<PageListProps> = ({ children }) => {

    const [contentReady, setContentReady] = useState<Boolean>(false);
    const [catContent, setCatContent] = useState<Array<ReactNode>>([]);
    const [fetched, setFetched] = useState<Boolean>(false);

    useEffect(() => {
        if (!fetched) {
            fetchCats().then((data: Array<Cat>) => generateCatView(data))
        }
    });

    const generateCatView = (catData: Array<Cat>) => {
        setFetched(true)
        const tempCatCont: Array<ReactNode> = [];
        catData.forEach((catItem) => {
            tempCatCont.push(<CatView Cat={catItem} />)
        });

        setCatContent(tempCatCont)
        setContentReady(true)
    }

    return (
        <Box>
            {contentReady ? (
                <SimpleGrid columns={4} spacing={15}>
                    {catContent}
                </SimpleGrid>
            ) : (
                <Spinner size='xl' />
            )}

        </Box>
    )

}
