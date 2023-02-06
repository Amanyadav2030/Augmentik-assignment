import { Heading, VStack, Button } from '@chakra-ui/react'
import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { BiSearch, BiHeart } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa"
import { MdOutlineAddBox } from "react-icons/md"
import { FiUsers } from "react-icons/fi"
import { useNavigate } from 'react-router-dom';
const LeftSideBar = ({ showUser, setShowUser }) => {
    const redirect = useNavigate()
    return (
        <VStack p={'1rem 0rem'} bgColor={'white'} minH={'100vh'} maxH={'100vh'} borderRight={'1px solid #2C3539'} w={'21%'}>
            <Heading fontFamily={'cursive'}>FindHouse</Heading>
            <VStack w={'87.5%'} h={'90vh'} align={'center'} pt={'3rem '} justify={'space-between'}>
                <VStack w={'100%'} >
                    <Button _hover={{
                        background: '#fafafa'
                    }} gap={'0.6rem'} onClick={() => setShowUser(false)} background={!showUser ? '#fafafa' : 'white'} fontWeight={400} rounded={'6rem'} fontSize={'1.15rem'} p={'1.4rem 0.6rem'} w={'90%'} justifyContent={'start'} leftIcon={<FaDatabase style={{ fontSize: '1.5rem' }} />} colorScheme='white' color={'black'}>
                        Content
                    </Button>
                    <Button _hover={{
                        background: '#fafafa'
                    }} onClick={() => setShowUser(true)} background={showUser ? '#fafafa' : 'white'} gap={'0.6rem'} fontWeight={400} rounded={'6rem'} fontSize={'1.15rem'} p={'1.4rem 0.6rem'} w={'90%'} justifyContent={'start'} leftIcon={<FiUsers style={{ fontSize: '1.5rem' }} />} colorScheme='white' color={'black'}>
                        Users
                    </Button>
                </VStack>
                <Button _hover={{
                    background: '#fafafa'
                }} gap={'0.6rem'} onClick={() => redirect('/')} fontWeight={400} rounded={'6rem'} fontSize={'1.15rem'} p={'1.4rem 0.6rem'} w={'90%'} justifyContent={'start'} leftIcon={<AiFillHome style={{ fontSize: '1.5rem' }} />} colorScheme='white' color={'black'}>
                    Home
                </Button>

            </VStack>
        </VStack >
    )
}

export default LeftSideBar