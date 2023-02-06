import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const redirect = useNavigate();
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value
    })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // loginApi(info).then((res) => {

    //   localStorage.setItem('token', res.data.token);
    //   toast({
    //     title: 'Login successfully',
    //     status: 'success',
    //     isClosable: true,
    //   })
    //   redirect('/')
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
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Login
        </Heading>
        <form onSubmit={handleSubmit} >
          <Stack w={'100%'} spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="user@gmail.com"
                _placeholder={{ color: 'gray.500' }}
                type="email"
                name='email'
                onChange={handleChange}
              />
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
            <Stack spacing={6}>
              <Button
                bg={'blue.400'}
                color={'white'}
                type={'submit'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </form>
        <Text cursor={'pointer'} onClick={() => redirect('/signup')} color={'blue.500'}>Don't have an account?</Text>
      </Stack>
    </Flex>
  );
}