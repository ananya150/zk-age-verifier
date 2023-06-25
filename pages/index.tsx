import { Default } from 'components/layouts/Default';
import { Home } from 'components/templates/home';
import type { NextPage } from 'next';
import { getSession } from 'next-auth/react';

const HomePage: NextPage = () => {
  return (
    <Default pageName="Home">
      <Home />
    </Default>
  );
};

export default HomePage;

export const getServerSideProps = async (context: any) => {
  // check if signedIn 
  const session = await getSession(context);
  console.log("abcd")
  console.log(session)
  if(!session?.user) {
    console.log('session not found')
    return {
      redirect: {
        destination: '/connect'
      }
    }
  }
    const obj = {a: 10}
    return {
      props: obj
    }
  
}
