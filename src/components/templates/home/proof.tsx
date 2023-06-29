import React from 'react'
import { Textarea } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {CopyIcon} from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react'

const Proof = ({proof}: any) => {

  const toast = useToast()

  const handleCopy = () => {
    navigator.clipboard.writeText(proof);
    toast({
      title: 'Copied.',
      status: 'success',
      duration: 2000,
      isClosable: false,
    })

  }

  return (
    <div className=''>
        <div className='text-center'>
          <span className=' font-semibold text-4xl'>Your ZK Proof</span>
        </div>
        <div className='mt-32 '>
          <Textarea className='truncate' value={proof} isDisabled placeholder='Here is a sample placeholder' />
        </div>
        <div className='flex justify-center mt-12'>
          <Button onClick={handleCopy} colorScheme="green">
            <div className='flex space-x-3'>
              <CopyIcon />
              <span>Copy</span>
            </div>
          </Button>
        </div>
    </div>
  )
}

export default Proof