import { FC, ReactNode } from 'react';
import { Container } from '@chakra-ui/react';
import {  Header } from 'components/modules';
import Head from 'next/head';

const Default: FC<{ children: ReactNode; pageName: string; className: string }> = ({ children, pageName, className }) => (
  <div className={`h-screen ${className}`}>
    {/* <img className='opacity-[20%] absolute left-0 top-0 w-[50%] h-[50%] -z-10' src='/bg1.jpg' alt='background' />
    <img className='opacity-[20%] absolute left-1/2 top-1/2 w-[50%] h-[50%] -z-10' src='/bg1.jpg' alt='background' />
    <img className='opacity-[20%] absolute left-0 top-1/2 w-[50%] h-[50%] -z-10' src='/bg1.jpg' alt='background' />
    <img className='opacity-[20%] absolute left-1/2 top-0 w-[50%] h-[50%] -z-10' src='/bg1.jpg' alt='background' /> */}
    <Head>
      <title>{`${pageName} | ZK-Verifier`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@500&display=swap" rel="stylesheet"></link>
    </Head>
    <Header />
    <Container maxW="container.lg" p={3} marginTop={100} as="main" minH="70vh">
      {children}
    </Container>
  </div>
);

export default Default;
