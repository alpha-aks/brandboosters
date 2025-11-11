import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, goal, email, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
  
  if (!discordWebhookUrl) {
    console.error('DISCORD_WEBHOOK_URL is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const embed = {
    title: 'New Contact Form Submission',
    color: 0x00ff00, // Green color
    fields: [
      { name: 'Name', value: name, inline: true },
      { name: 'Email', value: email, inline: true },
      { name: 'Company', value: company || 'Not provided', inline: true },
      { name: 'Looking For', value: goal || 'Not specified', inline: true },
      { name: 'Budget', value: budget || 'Not specified', inline: true },
      { name: 'Message', value: message || 'No message provided' },
    ],
    timestamp: new Date().toISOString(),
  };

  try {
    const discordResponse = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    });

    if (!discordResponse.ok) {
      throw new Error('Failed to send message to Discord');
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending message to Discord:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
