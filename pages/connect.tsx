import { Default } from 'components/layouts/Default';
import type { NextPage } from 'next';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HomePage: NextPage = () => {

  const router = useRouter();

  const {data , status} = useSession();
  useEffect(() => {
    console.log(data?.user)
    if(data?.user){
      router.push('/proof')
    }
  }, [status])

  return (
    <Default className='' pageName="Home">
      <div className='flex justify-center'>
        Please Connect your wallet!
      </div>
    </Default>
  );
};

export default HomePage;

export const getServerSideProps = async (context: any) => {
  // check if signedIn 
  const session = await getSession(context);
  if(session?.user) {
    return {
      redirect: {
        destination: '/proof'
      }
    }
  }
  const obj = {a: 10}
  return {
    props: obj
  }
}
