import type { NextPage } from 'next';
import { Card  , CardBody , Heading , Text, CardFooter , Button   , CardHeader  } from '@chakra-ui/react';
import Image from 'next/image';
import {  Header } from 'components/modules';
import Head from 'next/head';
import { useRouter } from 'next/router';

const CardCompnent = () => {
  const router = useRouter();
  return (
    <div className='md:flex md:justify-center md:space-x-10 space-y-16 md:space-y-0 bg-black p-6 pb-20 '>
      <Card className='hover:scale-105 duration-100 hover:text-red-300 md:w-[430px]' backgroundColor="#141414">
        <CardHeader>
          <Heading size='md'> Generating Age Proofs</Heading>
        </CardHeader>
        <CardBody>
          <Text>We use your date of birth from your Aadhaar Card to generate a Zero-Knowledge Proof that you are above 21 years.</Text>
        </CardBody>
        <CardFooter>
          <Button className='hover:text-blue-300' onClick={() => {router.push('/proof')}}>Generate Proof</Button>
        </CardFooter>
      </Card>
      <Card className='hover:scale-105 duration-100 hover:text-red-300 md:w-[430px]' backgroundColor="#141414">
        <CardHeader>
          <Heading size='md'> Verifying Age Proofs </Heading>
        </CardHeader>
        <CardBody>
          <Text>To proof anyone that you are above 21 years of age, just give them the generated proof and poove that you own your address.</Text>
        </CardBody>
        <CardFooter>
        <Button className='hover:text-blue-300' onClick={() => {router.push('/verify')}}>Verify Proof</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

const HomePage: NextPage = () => {

  return (
    <div className='bg-black h-screen'>
      <Head>
        <title>{`Home | ZK-Verifier`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@500&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <div className='hidden md:block z-10'>
        <Image className=' absolute opacity-30 left-[10px] top-[90px] w-[20%] h-[20%]' src='/4x4.jpg' alt='background' width={100} height={100} />
        <Image className=' absolute opacity-30 left-[10px] top-[290px] w-[20%] h-[20%]' src='/4x4.jpg' alt='background' width={100} height={100} />
        <Image className=' absolute opacity-30 left-[10px] top-[490px] w-[20%] h-[20%]' src='/4x4.jpg' alt='background' width={100} height={100} />
        <Image className=' absolute opacity-30 left-[10px] top-[690px] w-[20%] h-[20%]' src='/4x4.jpg' alt='background' width={100} height={100} />
        <Image className=' absolute opacity-30 right-[10px] top-[90px] w-[20%] h-[20%]' src='/4x4.jpg' alt='background' width={100} height={100} />
        <Image className=' absolute opacity-30 right-[10px] top-[290px] w-[20%] h-[20%]' src='/4x4.jpg' alt='background' width={100} height={100} />
        <Image className=' absolute opacity-30 right-[10px] top-[490px] w-[20%] h-[20%]' src='/4x4.jpg' alt='background' width={100} height={100} />
        <Image className=' absolute opacity-30 right-[10px] top-[690px] w-[20%] h-[20%]' src='/4x4.jpg' alt='background' width={100} height={100} />
      </div>

      <div className='z-20'>
        <div className='mt-28 text-center'>
          <div className='font-satoshi md:-ml-32 text-[40px] md:text-[80px] hover:text-red-500 duration-100'>Zero-Knowledge</div>
          <div className='md:ml-40 ml-28 text-[40px] md:text-[80px] font-satoshi hover:text-red-500 duration-100'>Age Verifier</div>
        </div>

      <div className='mt-36'>
        <CardCompnent />
      </div>

      </div>
    </div>
  );
};

export default HomePage;

