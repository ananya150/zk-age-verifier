import { NextApiRequest, NextApiResponse } from 'next';

export default async (req:NextApiRequest , res: NextApiResponse) => {
    const {num} = req.body;
    const secretKey = process.env.NEXT_PUBLIC_AADHAR_SEC_KEY;
    const clientId = process.env.NEXT_PIBLIC_AADHAR_CLIENT_ID;
    const data = {
        "aadhaarNumber": `${num}`
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
  
    const response = await fetch(`https://api.emptra.com/aadhaarVerification/requestOtp`, options);
    const resp = await response.json();
    console.log(resp);

    res.status(200).json(resp);
  }