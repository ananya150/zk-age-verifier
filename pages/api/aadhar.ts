/* eslint-disable etc/no-commented-out-code */
import { NextApiRequest, NextApiResponse } from 'next';
// @ts-expect-error because the module has no type defined
import {groth16} from 'snarkjs';
import path from 'path'

const generateProof = async ( address: string) => {
    const wasmPath = path.resolve('./static/circuit.wasm');
    const zkeyPath = path.resolve('./static/circuit_0000.zkey');
    

    const { proof, publicSignals } = await groth16.fullProve(
        {age: 22, ageLimit: 21, address}, 
        wasmPath, 
        zkeyPath);

    const call = await groth16.exportSolidityCallData(proof, publicSignals);
    return call;
}

function isAbove21(dobString: string) {
    const dob = new Date(dobString);
    dob.setFullYear(dob.getFullYear() + 21);
    const now = new Date();
    return dob <= now;
}

export default async (req:NextApiRequest , res: NextApiResponse) => {
    const {otp , client_id , address} = req.body;
    const secretKey = process.env.NEXT_PUBLIC_AADHAR_SEC_KEY;
    const clientId = process.env.NEXT_PIBLIC_AADHAR_CLIENT_ID;
    const data = {
        "client_id": `${client_id}`,
        "otp": `${otp}`
    }

    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'secretKey': `${secretKey}`,
            'clientId': `${clientId}`
          },
          body: JSON.stringify(data),
    };
  
    const response = await fetch(`https://api.emptra.com/aadhaarVerification/submitOtp`, options);
    const resp = await response.json();

    const {dob} = resp.result.data;
    console.log(address);
    console.log(dob)

    const above21 = isAbove21(dob);
    
    if(above21){
        const proof = await generateProof(address);
        res.status(200).json({proof});
    }else{
        const proof = 'You are not above 21 to generate a valid proof.'
        res.status(200).json({proof})
    }

  }