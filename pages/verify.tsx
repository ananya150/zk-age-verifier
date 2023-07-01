import React from 'react'
import { Default } from 'components/layouts/Default';
import VerifyProof from 'components/templates/verify/verifyProof';


const verify = () => {
  return (
    <Default className='bg-black' pageName="Verify">
      <VerifyProof />
    </Default>
  )
}

export default verify