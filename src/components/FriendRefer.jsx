import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const FriendRefer = () => {
  return (
    <>
    <Breadcrumb spacing='4px' fontSize={"14px"} separator={<ChevronRightIcon color='gray.500' />} marginLeft={["50px","150px"]} marginTop={"20px"}>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>UI/UX</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Refer & Earn</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Friend Referral</BreadcrumbLink>
            </BreadcrumbItem>
      </Breadcrumb>
    
    <Box w={['90%','80%']} margin={'auto'}>
      
      <Flex justifyContent={'space-between'} w={['100%','90%']} alignItems={'center'} marginTop={'30px'}>
        <Box w={['50%','20%']}>
          <Heading as="h6" color={"#800080"} marginBottom={'20px'} fontWeight={'medium'} fontSize={['md','lg']}>Your Referral Code</Heading>
          <Box border={'2px solid #f5f5f5'} w={'80%'} textAlign={'center'} borderRadius={'lg'}><Text fontSize={['md','2xl']} style={{ wordSpacing: '0.3em' }}>E D C H 5 4</Text></Box>
        </Box>
        <Box
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                padding="15px"
                borderRadius="xl"
                width={['40%', '13%']}
                textAlign={'left'}
            >
              <Text fontSize={"14px"} fontWeight={'medium'} color={"#800080"}>Wallet Balance</Text>
              <Text fontSize={"24px"} fontWeight={'medium'} >₹500</Text>
        </Box>
      </Flex>
      <Flex margin={'auto'} marginTop={'70px'}>
        <Heading as='h5' color={'#800080'} fontSize={'lg'}>Friends who enrolled </Heading>
        <Heading fontWeight={'medium'} fontSize={'lg'} color='grey'>(3)</Heading>
      </Flex>
      <SimpleGrid columns={[1, 3]} alignItems={'center'} marginTop={'30px'} gap={'30px'} w={['80%', '90%']}>
        <Box
            w="350px"
            h="200px"
            bgGradient="linear(to-r, #FF864C ,#800080)"
            borderRadius="2xl"
            color={'white'}
            padding={'20px'}
        >
          <Flex justifyContent={'space-between'}>
            <Heading as='h3' fontSize={'md'}>Dhiraj Saxsena</Heading>
            <Text fontSize={'sm'}>14 Sep, 2022</Text>
          </Flex>
          <Text fontSize={'sm'}>Courses Enrolled(6)</Text>
          <SimpleGrid columns={'3'} gap={'15px'} marginTop={'15px'}>
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'65px'} textAlign={'center'}><Text>UI/UX</Text></Box>
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'95px'} textAlign={'center'}><Text>Photoshop</Text></Box>
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'95px'} textAlign={'center'}><Text>Illustrator</Text></Box>
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'75px'} textAlign={'center'}><Text>Python</Text></Box>
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'65px'} textAlign={'center'}><Text>MERN</Text></Box> 
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'65px'} textAlign={'center'}><Text>Java </Text></Box> 
          </SimpleGrid>
          <Flex marginTop={'10px'}>
            <Text fontSize={'sm'} marginTop={'3px'}>Referral Amount </Text>
            <Text fontSize={'lg'} fontWeight={'bold'} marginLeft={'5px'}>₹185</Text>
          </Flex>
        </Box>
        <Box
            w="350px"
            h="200px"
            bgGradient="linear(to-r, #FF864C ,#800080)"
            borderRadius="2xl"
            color={'white'}
            padding={'20px'}
        >
          <Flex justifyContent={'space-between'}>
            <Heading as='h3' fontSize={'md'}>Dhiraj Saxsena</Heading>
            <Text fontSize={'sm'}>14 Sep, 2022</Text>
          </Flex>
          <Text fontSize={'sm'}>Courses Enrolled(6)</Text>
          <SimpleGrid columns={'3'} gap={'15px'} marginTop={'15px'}>
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'65px'} textAlign={'center'}><Text>UI/UX</Text></Box>
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'95px'} textAlign={'center'}><Text>Photoshop</Text></Box>
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'75px'} textAlign={'center'}><Text>Python</Text></Box>
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'65px'} textAlign={'center'}><Text>MERN</Text></Box> 
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'65px'} textAlign={'center'}><Text>Java</Text></Box>
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'65px'} textAlign={'center'}><Text>C++</Text></Box> 
          </SimpleGrid>
          <Flex marginTop={'10px'}>
            <Text fontSize={'sm'} marginTop={'3px'}>Referral Amount </Text>
            <Text fontSize={'lg'} fontWeight={'bold'} marginLeft={'5px'}>₹185</Text>
          </Flex>
        </Box>
        <Box
            w="350px"
            h="200px"
            bgGradient="linear(to-r, #FF864C ,#800080)"
            borderRadius="2xl"
            color={'white'}
            padding={'20px'}
        >
          <Flex justifyContent={'space-between'}>
            <Heading as='h3' fontSize={'md'}>Dhiraj Saxsena</Heading>
            <Text fontSize={'sm'}>14 Sep, 2022</Text>
          </Flex>
          <Text fontSize={'sm'}>Courses Enrolled(6)</Text>
          <SimpleGrid columns={'3'} gap={'15px'} marginTop={'15px'}>
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'65px'} textAlign={'center'}><Text>UI/UX</Text></Box>
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'95px'} textAlign={'center'}><Text>Photoshop</Text></Box>
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'95px'} textAlign={'center'}><Text>Illustrator</Text></Box>
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'75px'} textAlign={'center'}><Text>Python</Text></Box>
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'65px'} textAlign={'center'}><Text>MERN</Text></Box> 
            <Box border={'1px solid white'} borderRadius={'2xl'} w={'65px'} textAlign={'center'}><Text>Java </Text></Box> 
          </SimpleGrid>
          <Flex marginTop={'10px'}>
            <Text fontSize={'sm'} marginTop={'3px'}>Referral Amount </Text>
            <Text fontSize={'lg'} fontWeight={'bold'} marginLeft={'5px'}>₹185</Text>
          </Flex>
        </Box> 

      </SimpleGrid>
      <Heading as='h6' color='#800080' fontSize={'sm'} marginTop={'150px'}>Terms & Conditions</Heading>
    </Box>
    </>
  )
}

export default FriendRefer