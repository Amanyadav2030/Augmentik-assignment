import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
  Select
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
const Signup = () => {
  const redirect = useNavigate();
  const toast = useToast()
  const [info, setInfo] = React.useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    role: "explorer"
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // signupApi(info).then((res) => {
    //   console.log(res.data)
    //   toast({
    //     title: 'Login successfully',
    //     status: 'success',
    //     isClosable: true,
    //   })
    //   setTimeout(() => {
    //     redirect('/login')
    //   }, 1000);

    // }).catch((err) => {
    //   // console.log(err.message)
    //   toast({
    //     title: `${err.response.data} ${err.message}`,
    //     status: 'error',
    //     isClosable: true,
    //   })
    // })
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input  type="text" name={'name'} onChange={handleChange} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" name={'lastname'} onChange={handleChange} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' onChange={handleChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Contact Number</FormLabel>
                <Input type="number"  name='contact' onChange={handleChange} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} name={'password'} onChange={handleChange} />
                  <InputRightElement h={'full'}>
                    <span
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <FaRegEyeSlash style={{ fontSize: '1.5rem', cursor: 'pointer' }} /> : <FaRegEye style={{ fontSize: '1.5rem', cursor: 'pointer' }} />}
                    </span>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              {/* <FormLabel>Role</FormLabel>
              <Select onChange={handleChange} mt={'0.5rem'} name={'role'} placeholder='Select your Role'>
                <option value='writer'>User</option>
                <option value='explorer'>Admin</option>
              </Select> */}
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  type={'submit'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link onClick={() => redirect('/login')} color={'blue.400'} >Login</Link>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>

  )
}

export default Signup