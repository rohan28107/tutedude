import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Center,
  Image,
  Text,
} from '@chakra-ui/react';
import { BsPersonCircle } from 'react-icons/bs'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';


export default function Navbar() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box px={4} marginTop={"10px"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} padding={"10px"}>
          <Link to='/'>
            <Image src='https://tutedude.com/refundassets/Tutedude.png' alt='logo' width={["120px","150px"]}/>
          </Link>
          <Flex alignItems={'center'} justifyContent={'space-between'} w={["50%","35%"]} paddingLeft={["10px","50px"]} >
            <Box display={['none', 'flex']}>
              <Text color={'#e2c5e2'}>My Assignment</Text>
            </Box>
            <Box display={['none', 'flex']}>
              <Text color={'#e2c5e2'}>Chat with Mentors</Text>
            </Box>
            <Stack direction={'row'} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  size={['small', 'large']}
                  variant={'link'}
                  cursor={'pointer'}
                  color={['white','#800080']}
                  bg={['#800080', 'white']}
                  padding={"8px"}
                  minW={0}
                  leftIcon={<BsPersonCircle />}
                  rightIcon={<RiArrowDownSLine />}
                  >
                  <span fontsize={['small', 'large']}>ProfileName</span>
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <p>ProfileName</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>My Assignment</MenuItem>
                  <MenuItem>Chat with Mentors</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}