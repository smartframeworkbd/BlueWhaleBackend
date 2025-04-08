import axios  from "axios";
const SendSMS = async (mobileNo, sms) => {
    const apiURL = process.env.SMS_API_SEND_URL;
    const apiKey = process.env.SMS_API_KEY;
    const secretKey = process.env.SMS_API_SECRET_KEY;
    const callerID = process.env.SMS_API_NON_MASKING_CALLER_ID;
  

    try {
        // Format the mobile number
        mobileNo = "88"+mobileNo.trim();

        // Trim and urlencode the SMS content
        sms = encodeURIComponent(sms.trim());

        const sendApi = `${apiURL}?apikey=${apiKey}&secretkey=${secretKey}&callerID=${callerID}&toUser=${mobileNo}&messageContent=${sms}`;

        const response = await axios.get(sendApi);
      
        if (response.status === 200) {
    
          return true;
        } else {
          // console.error('Error1:', response.status);
         
          return false;
        }
    } catch (error) {
        console.error('Error2:', error.message);
      
        return false;
      }


};
export default SendSMS;