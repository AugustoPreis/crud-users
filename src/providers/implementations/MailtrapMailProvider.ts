import { IMailProvider, IMessage } from '../IMailProvider';
import nodemailder from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export class MailtrapMailProvider implements IMailProvider {
	private transporter: Mail;

	constructor() {
		this.transporter = nodemailder.createTransport({
			host: 'your mail host here',
			port: 2525,
			auth: {
				user: 'your user here',
				pass: 'your password here',
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