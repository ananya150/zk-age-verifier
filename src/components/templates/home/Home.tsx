/* eslint-disable etc/no-commented-out-code */
import {  } from '@chakra-ui/icons';
import {  VStack, Text, Button } from '@chakra-ui/react';
import { InputGroup, InputLeftElement, Input  } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { WarningIcon } from '@chakra-ui/icons';

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

const Home = ({setProof}: any) => {

  const [num , setNum] = useState<any>(null);
  const [showOTP , setShowOTP] = useState(false);
  const [Otp , setOtp] = useState<any>(null);
  const [client_id , setClient_id] = useState('');
  const [loading , setLoading] = useState(false);
  const { data } = useSession();
  const [err , setErr] = useState(false);


  const handleNext = async () => {
    console.log(num);
    setErr(false)
    setLoading(true);
    const param = {num}
    const resp = await postDataToAPI("/otp" , param);
    const cid = resp.result.data.client_id;
    if(resp.result.data.otp_sent){
      setClient_id(cid);
      console.log(resp);
      setShowOTP(true);
      setLoading(false);
    }else{
      setErr(true);
      setLoading(false);
    }
  }

  const handleSubmit = async () => {
    setLoading(true);
    const address = data?.user?.address;
    console.log(Otp);
    const param = {otp: Otp , client_id , address}
    const resp = await postDataToAPI("/aadhar" , param);
    setClient_id('');
    console.log(resp);
    setProof(resp.proof);
    setNum(null);
    setOtp(null)
    setShowOTP(false);
    setLoading(false);
  }


  return (
    <VStack w={'full'}>
        <div className='text-center mb-40'>
          <span className='font-satoshi text-[40px] md:text-[80px] hover:text-red-500 duration-100'>Generate Proof</span>
        </div>
      {!showOTP && <div className='w-[450px] flex-col space-y-6'>
        <Text>Enter Aadhaar Number (For indian residents only)</Text>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <InfoIcon color='gray.300' />
          </InputLeftElement>
          <Input value={num} onChange={(e) => {setNum(e.target.value)}} type='tel' placeholder='Aadhaar number' />
        </InputGroup>
        {err && 
          <div className='flex space-x-2 text-red-500 items-center'>
            <WarningIcon />
            <Text>Invalid Number</Text>
          </div>
        }
        {loading? <Button colorScheme='green' isLoading loadingText={"Submitting"}>Next</Button>  : <Button colorScheme='green' onClick={handleNext}>Next</Button>}
      </div>}
      {showOTP && <div className='w-[200px] flex-col space-y-6'>
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
