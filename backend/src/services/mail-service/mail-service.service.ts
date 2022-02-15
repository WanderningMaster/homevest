import nodeMailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASSWORD,
    APP_URL
} = process.env;

class MailService {
    transporter: nodeMailer.Transporter;
    constructor(){
        this.transporter = nodeMailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT),
            secure: false,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASSWORD
            }
        });
    }

    public async sendActivationMail(to: string, link: string): Promise<void>{
        await this.transporter.sendMail({
            from: SMTP_USER,
            to,
            subject: 'Homevest account activation',
            text: '',
            html: `
                    <div>
                        <h1>Activation link</h1>
                        <a href="http://${APP_URL}/api/v1/auth/activate/${link}">http://${APP_URL}/api/v1/auth/activate/${link}</a>
                    </div>
            `
        })
    }    
}

export { MailService };
