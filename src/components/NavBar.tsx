'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon, ViewIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';


type NavLinkProps =  {
    children: React.ReactNode;
    onClick: Function
}

const Links = [{name: 'List Cats', path: '/'},{ name: 'Upload Cat', path: '/upload'}]

const NavLink: React.FC<NavLinkProps> = ({children, onClick}) => {

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      onClick={() => onClick()}
      href={'#'}>
      {children}
    </Box>
  )
}

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Image src={require('../assets/paws.png')} style={{width: '50px', height: '50px'}} />
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink onClick={() => window.location.replace(link.path)} key={link.name}>{link.name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<ViewIcon />}
              onClick={() => window.location.replace('/')}>
            </Button>
            
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink onClick={() => window.location.replace(link.path)} key={link.name}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      </Box>

  )
}