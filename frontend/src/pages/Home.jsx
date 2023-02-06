import { HStack, Text, VStack, Heading, Image, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { GoPlus } from 'react-icons/go';
import { getContent, getData } from '../utils/api';
const Home = () => {
    const [content, setContent] = useState({});
    const [statistics, setStatistics] = useState([]);
    useEffect(() => {
        getContent().then((res) => {
            setContent(res.data[0]);
        })
        getData().then((res) => {
            setStatistics(res.data);
        })
    }, []);
    console.log(content)
    return (
        <VStack bgColor={'#deefff'} minH={'100vh'}>
            <Navbar />
            <HStack w={'100%'} justify={'center'} gap={"3rem"}>
                <VStack w={'30%'} align={'start'} gap={'1.7rem'}>
                    <Text fontWeight={'700'} fontSize={'3rem'}>{content.heading}</Text>
                    <Text fontSize={'1.3rem'}>{content.description}</Text>
                    <HStack gap={'1.5rem'}>
                        {
                            statistics?.map((el) => (
                                <VStack key={el._id} >
                                    <Box position={'relative'}>
                                        <GoPlus style={{
                                            position: "absolute",
                                            right: "-1.2rem",
                                            fontSize: " 1.1rem",
                                            color: "#518fec",
                                            top: "-0.3rem",
                                        }} />
                                        <Heading as='h3' size={'lg'}>{el.value}</Heading>
                                    </Box>
                                    <Text fontSize={'0.9rem'}>{el.title}</Text>
                                </VStack>

                            ))
                        }
                    </HStack>
                </VStack>
                <Image w={'47%'} src={content.image} alt={'house image'} />
            </HStack>
        </VStack>
    )
}

export default Home