import { Default } from 'components/layouts/Default';
import { Home } from 'components/templates/home';
import type { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { getProof } from './api/db';
import { useState, useEffect } from 'react';
import Proof from 'components/templates/home/proof';

const HomePage: NextPage = (props: any) => {
  console.log(props);
  const [proof , setProof] = useState<any>(null)

  useEffect(() => {
    if(props.status){
      setProof(props.proof);
    }
  },[])

  return (
    <Default pageName="Home">
      {proof? <Proof proof={proof} /> : <Home setProof={setProof} />}
    </Default>
  );
};

export default HomePage;

export const getServerSideProps = async (context: any) => {
  // check if signedIn 
  const session = await getSession(context);
  console.log(session)
  if(!session?.user) {
    console.log('session not found')
    return {
      redirect: {
        destination: '/connect'
      }
    }
  }
  const {address} = session.user;
  const user = await getProof(address);
  return {
    props: user
  }
}
