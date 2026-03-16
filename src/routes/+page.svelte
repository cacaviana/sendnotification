<script lang="ts">
</script>

<div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: 'Segoe UI', sans-serif; background: #f8f9fc;">
  <div style="text-align: center; padding: 48px; background: white; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); max-width: 500px;">
    <div style="width: 64px; height: 64px; background: #4a1d8e; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
      <span style="font-size: 28px; color: white;">&#9993;</span>
    </div>
    <h1 style="color: #1a1d2e; font-size: 24px; margin: 0 0 8px;">SendNotification</h1>
    <p style="color: #6b7294; font-size: 14px; margin: 0 0 24px;">API de notificações por email - IT Valley</p>
    <div style="background: #f5f0fc; padding: 16px; border-radius: 8px; text-align: left;">
      <p style="margin: 0 0 8px; font-size: 13px; color: #4a1d8e; font-weight: 600;">Endpoint</p>
      <code style="font-size: 13px; color: #35146a;">POST /api/notify</code>
      <p style="margin: 16px 0 8px; font-size: 13px; color: #4a1d8e; font-weight: 600;">Body (JSON)</p>
      <pre style="font-size: 12px; color: #35146a; margin: 0; white-space: pre-wrap;">&#123;
  "api_key": "sua-chave",
  "subject": "Assunto (opcional)",
  "message": "Sua mensagem aqui"
&#125;</pre>
    </div>
  </div>
</div>
