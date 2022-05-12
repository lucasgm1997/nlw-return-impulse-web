import { MailAdapter, SendMailData } from "../adapters/mail_adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2369894c108bd5",
      pass: "bac9a0c461caa8"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    
    

    async sendMail({subject, body}: SendMailData) {
        
        transport.sendMail({
            from: 'Equipe feedget <oi@feedget.com>',
            to: 'Lucas Mendes <f6gampeplay@gmail.com>',
            subject: subject, 
            html: body
        });
    }

}