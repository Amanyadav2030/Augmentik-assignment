import { HStack, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import LeftSideBar from './components/LeftSideBar';
import Users from './components/Users';

const Admin = () => {
    const [showUser, setShowUser] = useState(false);
    return (
        <>
            <HStack align={'start'} overflowX={'hidden'}>
                <LeftSideBar showUser={showUser} setShowUser={setShowUser} />
                <VStack w={'79%'}>
                    <Users />
                </VStack>
            </HStack>
        </>
    )
}

export default Admin