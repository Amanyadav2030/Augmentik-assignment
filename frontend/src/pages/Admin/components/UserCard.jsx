import { Select, Td, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'

const UserCard = ({ first_name, last_name, contact, email, role }) => {
  const [myRole, setMyRole] = useState(role);
  const handleChange = (e) => {
    const { value } = e.target;
    setMyRole(value);
  }
  return (
    <Tr>
      <Td>
        Aman yadav
      </Td>
      <Td>
        9423423423
      </Td>
      <Td>
        amanofficial2030@gmail.com
      </Td>
      <Td>
        admin
      </Td>
      <Td >
        <Select cursor={'pointer'} onChange={handleChange} value={myRole} name='role'>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </Select>
      </Td>
    </Tr>
  )
}

export default UserCard