import {  } from '@chakra-ui/icons';
import { Heading, VStack, Text, Button } from '@chakra-ui/react';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export const postDataToAPI = async (endpoint: any , params: any) => {
  const options = {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
  };

  const res = await fetch(`/api/${endpoint}`, options);
  const resp = await res.json();
  return resp;
}

const Home = () => {

  const [num , setNum] = useState<any>(null);
  const [showOTP , setShowOTP] = useState(false);
  const [Otp , setOtp] = useState<any>(null);
  const [client_id , setClient_id] = useState('');
  const [loading , setLoading] = useState(false);
  const { data } = useSession();


  const handleNext = async () => {
    console.log(num);
    setLoading(true);
    const param = {num}
    const resp = await postDataToAPI("/otp" , param);
    const cid = resp.result.data.client_id;
    setClient_id(cid);
    console.log(resp);
    setShowOTP(true);
    setLoading(false);
  }

  const handleSubmit = async () => {
    setLoading(true);
    const address = data?.user?.address;
    console.log(Otp);
    const param = {otp: Otp , client_id , address}
    const resp = await postDataToAPI("/aadhar" , param);
    setClient_id('');
    console.log(resp);
    setShowOTP(true);
    setLoading(false);
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
        {loading? <Button colorScheme='green' isLoading loadingText={"Submitting"}>Next</Button>  : <Button colorScheme='green' onClick={handleNext}>Next</Button>}
      </div>}
      {showOTP && <div className='w-[200px] flex-col space-y-6 py-24'>
        <Text>Enter OTP</Text>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <InfoIcon color='gray.300' />
          </InputLeftElement>
          <Input value={Otp} onChange={(e) => {setOtp(e.target.value)}} type='tel' placeholder='OTP' />
        </InputGroup>
        {loading? <Button colorScheme='pink' isLoading loadingText={"Submitting"}>Next</Button>  : <Button colorScheme='pink' onClick={handleSubmit}>Submit</Button>}
      </div>}
    </VStack>
  );
};

export default Home;
