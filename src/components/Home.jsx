import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react'
import '../index.css'
import invite from '../Images/Invite_people.png';
import rupee from '../Images/rupee.png';
import wallet from '../Images/wallet.png';
import discount from '../Images/discount.png';
import referral from '../Images/referral_coupon.png';
import { Link } from 'react-router-dom';

const Home = () => {
    const handleClick = () => {
        
      };
  return (
    <Box marginBottom={'30px'}>
        <Breadcrumb spacing='4px' fontSize={"14px"} separator={<ChevronRightIcon color='gray.500' />} marginLeft={["50px","150px"]} marginTop={"20px"}>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>UI/UX</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Refer & Earn</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent={'space-evenly'} alignItems={'center'} flexDirection={['column','row']} marginTop={'30px'}>
            <Box
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"                
                // box-shadow= "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
                padding="30px"
                borderRadius="md"
                width={['90%', '30%']}
                textAlign={'left'}
            >
                <SimpleGrid columns={[2, null, 3]} spacing={'10px'}>
                    <Box>
                        <Text fontSize={"14px"} color={"#800080"}>Referral Earning</Text>
                        <Text fontSize={"24px"} fontWeight={'medium'} >₹2500</Text>
                    </Box>
                    <Box>
                        <Text fontSize={"14px"} color={"#800080"}>Total Referrals</Text>
                        <Text fontSize={"24px"} fontWeight={'medium'} >7</Text>
                    </Box>
                    <Box>
                        <Text fontSize={"14px"} color={"#800080"}>Wallet Balance</Text>
                        <Text fontSize={"24px"} fontWeight={'medium'} >₹500</Text>
                    </Box>
                    <Box>
                        <Button bg={"#800080"} w={['140px','150px']} color={"white"} borderRadius={"18px"} marginTop={['20px','40px']} marginLeft={['-30px','105px']}><Link to='/friendrefer' onClick={handleClick}>Withdraw Balance</Link></Button>
                    </Box>
                </SimpleGrid>
            </Box>
            <Box marginTop={['30px', '-130px']} marginLeft={['0px', '-150px']}>
                <Heading as="h6" color={"#800080"} marginBottom={'20px'} fontSize={'xl'}>Your Referral Code</Heading>
                <Box border={'2px solid #b63c6d'} size={'xl'} paddingLeft={'50px'}  paddingRight={'50px'}  textAlign={'center'} borderRadius={'lg'}><Text fontSize={'2xl'} color={'#800080'} style={{ wordSpacing: '0.5em' }}>E  D  C  H  5  4</Text></Box>
            </Box>
        </Flex>
        <Box w={'80%'} margin={'auto'} marginTop={"40px"} >
            <Heading as='h4' fontSize={'xl'} color={'#800080'}>How does it work ?</Heading>
            <SimpleGrid columns={[1, 2]} w={['100%','80%']} h={'350px'}  marginTop={'25px'}>
            {/* gap={'10px'} */}
                <Flex justifyContent={'space-evenly'} margin={'10px'}>
                    <Box
                        width="70px"
                        height="70px"
                        borderRadius="50%"
                        bg="#f5f5f5"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image src={invite} alt='invite' w={'30px'}/> 
                    </Box>
                   <Box w={'65%'}>
                        <Heading as='h6' fontSize={'sm'}>Invite your Friends</Heading>
                        <Text color={'#4D4D4D'}>Share the link tutedude.com with your friends</Text>
                   </Box>
                </Flex>
                <Flex justifyContent={'space-evenly'} margin={'10px'}>
                    <Box
                    width="70px"
                    height="70px"
                    borderRadius="50%"
                    bg="#f5f5f5"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Image src={referral} alt='referral' w={'20px'}/> 
                    </Box>
                   <Box w={'65%'}>
                        <Heading as='h6' fontSize={'sm'}>Friend purchases any course</Heading>
                        <Text color={'#4D4D4D'}>Using your REFERRAL CODE in the payments page</Text>
                   </Box>
                </Flex>
                <Flex justifyContent={'space-evenly'} alignItems={'center'} margin={'10px'}>
                    <Box
                        width="70px"
                        height="70px"
                        borderRadius="50%"
                        bg="#f5f5f5"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image src={rupee} alt='rupee' w={'20px'}/> 
                    </Box>
                   <Box w={'65%'}> 
                        <Heading as='h6' fontSize={'sm'}>You get ₹ 200 as referral money</Heading>
                        <Text color={'#4D4D4D'}>On total purchase the friend makes, into your wallet</Text>
                   </Box>
                </Flex>
                <Flex justifyContent={'space-evenly'} margin={'10px'}>
                    <Box
                        width="70px"
                        height="70px"
                        borderRadius="50%"
                        bg="#f5f5f5"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image src={discount} alt='discount' w={'20px'}/> 
                    </Box>
                   <Box w={'65%'}>
                        <Heading as='h6' fontSize={'sm'}>Your Friend gets ₹ 200 Off </Heading>
                        <Text color={'#4D4D4D'} w={'80%'}>On his overall fee on successful purchase using your referral code </Text>
                   </Box>
                </Flex>
                <Flex justifyContent={'space-evenly'} margin={'10px'}>
                    <Box
                        width="70px"
                        height="70px"
                        borderRadius="50%"
                        bg="#f5f5f5"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image src={wallet} alt='wallet' w={'20px'}/> 
                    </Box>
                   <Box w={'65%'}>
                        <Heading as='h6' fontSize={'sm'}>Transfer money from wallet</Heading>
                        <Text color={'#4D4D4D'}>When the wallet balance reaches ₹200 or more, you can withdraw it</Text>
                   </Box>
                </Flex>
            </SimpleGrid>
        </Box>
        <Box w={'80%'} margin={'auto'} marginTop={["380px","30px"]} gap={'20px'}>
            <Heading as='h6' color='#800080' fontSize={'sm'}><Link to='/friendrefer' onClick={handleClick}>Friends Who Enrolled</Link></Heading>
            <Heading as='h6' color='#800080' fontSize={'sm'} marginTop={'10px'}>Terms & Conditions</Heading>
        </Box>
    </Box> 
  )
}

export default Home