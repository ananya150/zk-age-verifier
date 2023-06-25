import { Default } from 'components/layouts/Default';
import type { NextPage } from 'next';
import { getSession } from 'next-auth/react';

const HomePage: NextPage = () => {
  return (
    <Default pageName="Home">
      <div>

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
        destination: '/'
      }
    }
  }
  const obj = {a: 10}
  return {
    props: obj
  }
}
