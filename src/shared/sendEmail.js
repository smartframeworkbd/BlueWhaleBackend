import nodemailer from 'nodemailer'

const sendEmail = async (EmailTo, EmailText, EmailSubject) => {

    try {
        let transporter = nodemailer.createTransport({
            host: "mail.taxappealctg.gov.bd",
            port: 587,
            secure: false,
            auth: {
                user: "grs@taxappealctg.gov.bd",
                pass: "Qtr=WCKCLqZT",
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        // console.log(1)
        let mailOption = {
            from: "Grs Account <grs@taxappealctg.gov.bd>",
            to: EmailTo,
            subject: EmailSubject,
            html: EmailText,
        };


        const test = await transporter.sendMail(mailOption);
        console.log(test, 'aa')
        return true;

    } catch (error) {
                    console.error('Failed to send email notification to user',error);

        return false

    }
    // console.log("send email")

};
export default sendEmail