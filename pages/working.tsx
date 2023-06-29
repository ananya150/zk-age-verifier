import React from 'react'
import { Default } from 'components/layouts/Default';
import { Card, CardBody, Heading , Stack , StackDivider , Text , Box } from '@chakra-ui/react'

const Working = () => {
  return (
    <Default pageName="Working">
      <div className=''>
        <div className='text-center'>
          <span className=' font-semibold text-5xl'>How it works?</span>
        </div>
        <div className='mt-40'>
        <Card>
          <CardBody>
            <Stack divider={<StackDivider />} spacing='6'>
              <Box pt="4">
                <Heading size='md' textTransform='uppercase'>
                  Generating Proof
                </Heading>
                <Text pt='6' fontSize='md'>
                  We generate a ZK proof that your age is above 21 based on Date of Birth on your aadhar card.
                </Text>
                <Text pt="2" fontSize='xs' className='text-red-500'>WE DO NOT STORE ANY OTHER INFO. OUR CODE IS PUBLIC HERE.</Text>
              </Box>
              <Box pt='4'>
                <Heading size='md' textTransform='uppercase'>
                  Verifying Proof
                </Heading>
                <Text pt='6' fontSize='md'>
                  To Verify your age to someone just prove you own the address and give them the zk proof to verify.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        </div>
      </div>
    </Default>
  )
}

export default Working