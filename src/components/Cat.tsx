import React from 'react'
import { Cat } from '../types/Cat'
import { Box, Button, Container, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { createFavourite } from '../api/favourites/createFavourite'
import { deleteFavourite } from '../api/favourites/deleteFavourite'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { makeVote } from '../api/votes/makeVote'

type Props = {
    Cat: Cat
}

/**
 * used to export a user interface for the Cat
 */
export const CatView: React.FC<Props> = ({ Cat }) => {

    const toggleFavourite = (newFavVal: boolean, Cat: Cat) => {
        if (newFavVal) {
            createFavourite(Cat.id).catch((error) => console.log(error));
        } else {
            deleteFavourite(Cat.fav_id).catch((error) => console.log(error));
        }
    }

    const vote = (image_id: string, direction: string) => {
        makeVote(image_id, direction).catch((error) => console.log(error));
    }

    return (
        <Container>
            <Box>
                {/* using fixed width/height becuase the values in the api are disportionate */}
                <Image style={{ width: '75%', height: '75%' }} src={Cat.url} />
            </Box>
            <Box>
                <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>Votes: {Cat.numVotes}</Text>
            </Box>
            <SimpleGrid columns={3} spacing={2}>
                <Button onClick={() => toggleFavourite(!Cat.favourite, Cat)}>
                    {Cat.favourite ? (<FaHeart color='red' />) : (<FaRegHeart color='red' />)}
                </Button>
                <Button onClick={() => vote(Cat.id, 'up')}>
                    <ArrowUpIcon />
                </Button>
                <Button onClick={() => vote(Cat.id, 'down')}>
                    <ArrowDownIcon />
                </Button>
            </SimpleGrid>


        </Container>


    )
}