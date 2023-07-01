import { Default } from 'components/layouts/Default';
import type { NextPage } from 'next';
import { Card , Stack , CardBody , Heading , Text, CardFooter , Button  } from '@chakra-ui/react';
import Image from 'next/image';
import {  Header } from 'components/modules';
import Head from 'next/head';

const CardCompnent = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >

      <Stack>
        <CardBody>
          <Heading size='md'>The perfect latte</Heading>

          <Text py='2'>
            Caffè latte is a coffee beverage of Italian origin made with espresso
            and steamed milk.
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant='solid' colorScheme='blue'>
            Buy Latte
          </Button>
        </CardFooter>
      </Stack>
    </Card>
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
        <div className='mt-40'>
      </div>

      </div>
    </div>
  );
};

export default HomePage;

