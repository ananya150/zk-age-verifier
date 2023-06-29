import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {CheckIcon, CloseIcon, SpinnerIcon} from '@chakra-ui/icons';
import { verifyProof } from 'utils/ethers';

const VerifyProof = () => {

  type State = {
    loading: boolean,
    accepted: boolean,
    rejected: boolean
  }

  const initialState: State = {
    loading: false,
    accepted: false,
    rejected: false
  }

  const [state , setState] = useState<State>(initialState);
  const [proof,setProof] = useState<string>('')

  const handleSubmit = async () => {
    setState(initialState);
    setState((prevState) => ({
        ...prevState , loading: true
    }))
    const result = await verifyProof(proof);
    if(result) {
        setState((prevState) => ({
            ...prevState , loading: false , accepted:true
        }))
    }else{
        setState((prevState) => ({
            ...prevState , loading: false , rejected: true
        }))
    }
  }

  return (
    <div className=''>
        <div className='text-center'>
          <span className=' font-semibold text-5xl'>Verify Age Proof</span>
        </div>
        <div className='mt-32 flex space-x-12 items-center'>
            <Input placeholder='Enter ZK proof' value={proof} onChange={(e) => {setProof(e.target.value)}} size='lg' />
            {state.loading && <SpinnerIcon color="blue.400" w={6} h={6} className='animate-spin' />}
            {state.accepted && <CheckIcon color="green.400" w={6} h={6} />}
            {state.rejected && <CloseIcon color="red.400" w={6} h={6} />}
        </div>
        <div className='flex justify-center mt-12'>
          <Button onClick={handleSubmit} colorScheme="green">
              Verify
          </Button>
        </div>
    </div>
  )
}

export default VerifyProof;