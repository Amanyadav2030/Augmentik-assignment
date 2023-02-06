import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css';
const Navbar = () => {
  const redirect = useNavigate();
  return (
    <HStack w={'100%'} justify={'space-around'} fontSize={'1.2rem'} p={'2rem'}>
      <Box fontWeight={'500'}><Text><b>Find</b>House</Text></Box>
      <HStack className={styles.links} gap={'2.2rem'}>
        <Link to={'/'}>
          Home
        </Link>
        <Link to={'/'}>
          About
        </Link>
        <Link to={'/'}>
          Type of house
        </Link>
        <Link to={'/'}>
          Contact
        </Link>
        <Link to={'/'}>
          Log
        </Link>
        height: 2.3rem;
        font-size: 1.1rem;
        padding: 1.2rem 2rem;
        <Button colorScheme={'blue'} onClick={() => redirect('/signup')} fontSize={'1.1rem'} p={'1.2rem 2rem'} h={'2.3rem'}>Sign up</Button>
      </HStack>
    </HStack>
  )
}

export default Navbar