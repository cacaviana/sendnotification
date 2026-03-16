import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { sendEmail } from '$lib/server/mailer';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  try {
    // Token via header Authorization: Bearer <token>
    const authHeader = request.headers.get('authorization') || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();

    if (!token || token !== env.API_KEY) {
      return json({ success: false, error: 'Token inválido ou ausente. Use header: Authorization: Bearer <token>' }, { status: 401 });
    }

    const body = await request.json();
    const { subject, message, to } = body;

    if (!message) {
      return json({ success: false, error: 'Campo "message" é obrigatório' }, { status: 400 });
    }

    const emailSubject = subject || 'Notificação IT Valley';
    const timestamp = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

    const html = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fc; padding: 24px;">
        <div style="background: #4a1d8e; color: white; padding: 20px 24px; border-radius: 12px 12px 0 0;">
          <h1 style="margin: 0; font-size: 20px;">IT Valley - Notificação</h1>
          <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.85;">${timestamp}</p>
        </div>
        <div style="background: white; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7f0; border-top: none;">
          <div style="white-space: pre-wrap; line-height: 1.6; color: #1a1d2e; font-size: 14px;">${message}</div>
        </div>
        <p style="text-align: center; font-size: 11px; color: #9ca3bf; margin-top: 16px;">
          Enviado via SendNotification API - IT Valley
        </p>
      </div>
    `;

    await sendEmail({ to, subject: emailSubject, html });

    return json({ success: true, message: 'Email enviado com sucesso' });
  } catch (err: any) {
    console.error('Erro ao enviar notificação:', err);
    return json({ success: false, error: err.message || 'Erro interno' }, { status: 500 });
  }
};

// Health check
export const GET: RequestHandler = async () => {
  return json({ status: 'ok', service: 'SendNotification API', version: '1.0.0' });
};
