import {  } from '@chakra-ui/icons';
import { Heading, VStack, Text, Button } from '@chakra-ui/react';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Home = () => {

  const [num , setNum] = useState<any>(null);
  const [showOTP , setShowOTP] = useState(false);
  const [Otp , setOtp] = useState<any>(null);

  const handleNext = () => {
    console.log(num);
    setShowOTP(true);
  }

  const handleSubmit = () => {
    console.log(Otp);
  }

  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        ZK-age-verifier
      </Heading>
      {!showOTP && <div className='w-[350px] flex-col space-y-6 py-24'>
        <Text>Enter Aadhaar Number</Text>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <InfoIcon color='gray.300' />
          </InputLeftElement>
          <Input value={num} onChange={(e) => {setNum(e.target.value)}} type='tel' placeholder='Aadhaar number' />
        </InputGroup>
        <Button colorScheme='green' onClick={handleNext}>Next</Button>
      </div>}
      {showOTP && <div className='w-[200px] flex-col space-y-6 py-24'>
        <Text>Enter OTP</Text>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <InfoIcon color='gray.300' />
          </InputLeftElement>
          <Input value={Otp} onChange={(e) => {setOtp(e.target.value)}} type='tel' placeholder='OTP' />
        </InputGroup>
        <Button colorScheme='pink' onClick={handleSubmit}>Submit</Button>
      </div>}
    </VStack>
  );
};

export default Home;
