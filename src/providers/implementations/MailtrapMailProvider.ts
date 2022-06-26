import { IMailProvider, IMessage } from '../IMailProvider';
import nodemailder from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';


export class MailtrapMailProvider implements IMailProvider {
	private transporter: Mail;

	constructor() {
		this.transporter = nodemailder.createTransport({
			host: 'smtp.mailtrap.io',
			port: 2525,
			auth: {
				user: '0473bf0a2d677e',
				pass: '295002edae4d15',
			}
		})
	}

	async sendMail(message: IMessage): Promise<void> {
		await this.transporter.sendMail({
			to: {
				name: message.to.name,
				address: message.to.email,
			},
			from: {
				name: message.from.name,
				address: message.from.email,
			},
			subject: message.subject,
			html: message.body,
		})
	}
}