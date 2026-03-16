import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: env.GMAIL_USER,
        pass: env.GMAIL_APP_PASSWORD
      }
    });
  }
  return transporter;
}

export interface EmailOptions {
  to?: string;
  subject: string;
  html: string;
}

export async function sendEmail(options: EmailOptions): Promise<void> {
  const transport = getTransporter();
  await transport.sendMail({
    from: `"IT Valley Notify" <${env.GMAIL_USER}>`,
    to: options.to || env.NOTIFY_TO,
    subject: options.subject,
    html: options.html
  });
}
