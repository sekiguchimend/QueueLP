import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, company, subject, message } = req.body;

  // メール送信の設定
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // TLS
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  // メール本文の作成
  const mailBody = `
お問い合わせがありました。

お名前: ${name}
メールアドレス: ${email}
${company ? `会社名: ${company}` : ''}
件名: ${subject}

【お問い合わせ内容】
${message}
`;

  try {
    // 管理者へのメール送信
    await transporter.sendMail({
      from: `"ワークメイトAI" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      subject: `[お問い合わせ] ${subject}`,
      text: mailBody,
    });

    // 自動返信メール
    await transporter.sendMail({
      from: `"ワークメイトAI" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
      to: email,
      subject: 'お問い合わせありがとうございます',
      text: `
${name} 様

お問い合わせありがとうございます。
以下の内容で承りました。

件名: ${subject}
${company ? `会社名: ${company}` : ''}

【お問い合わせ内容】
${message}

担当者より順次ご連絡させていただきます。

--
ワークメイトAI
`,
    });

    res.status(200).json({ message: 'メール送信成功' });
  } catch (error) {
    console.error('メール送信エラー:', error);
    res.status(500).json({ message: 'メール送信に失敗しました', error: error.message });
  }
} 