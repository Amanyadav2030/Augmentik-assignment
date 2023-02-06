import { Heading, HStack, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiEdit, FiMail } from 'react-icons/fi';
import { FaUserCog } from 'react-icons/fa';
import { MdOutlineContactMail, MdOutlineContactPhone } from 'react-icons/md';
import styles from './Users.module.css'
import UserCard from './UserCard';
const Users = () => {
    return (
        <VStack className={styles.table} w={'100%'} >
            <Heading>User Management</Heading>
            <Table overflowX={'auto'}>
                <Thead background={'#2C3539'}>
                    <Tr>
                        <Th>
                            Name
                        </Th>
                        <Th>
                            <HStack>
                                <Text>Contact</Text>
                                <MdOutlineContactPhone style={{ fontSize: '1.15rem' }} />
                            </HStack>
                        </Th>
                        <Th>
                            <HStack>
                                <Text>Email</Text>
                                <MdOutlineContactMail style={{ fontSize: '1.15rem' }} />
                            </HStack>
                        </Th>
                        <Th>
                            <HStack>
                                <Text>Role</Text>
                                <FaUserCog style={{ fontSize: '1.1rem' }} />
                            </HStack>
                        </Th>
                        <Th>
                            <HStack>
                                <Text>Edit</Text>
                                <FiEdit style={{ fontSize: '0.9rem' }} />
                            </HStack>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <UserCard role='admin' />
                </Tbody>
            </Table>
        </VStack>
    )
}

export default Users