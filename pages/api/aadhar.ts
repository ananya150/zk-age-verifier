import { NextApiRequest, NextApiResponse } from 'next';

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

    res.status(200).json({dob});
  }