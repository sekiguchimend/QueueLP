import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, company, message } = req.body;

  // メール送信用のトランスポーター設定
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // 資料ファイルのパスを設定
    const documentPath = path.join(process.cwd(), "public", "QueuePdf.pdf");

    // 資料ファイルが存在するか確認
    if (!fs.existsSync(documentPath)) {
      console.error("Document path:", documentPath);
      throw new Error("Document file not found");
    }

    // ファイルをBufferとして読み込む
    const fileBuffer = fs.readFileSync(documentPath);

    // お客様への自動返信メール
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "【ワークメイトAI】資料請求ありがとうございます",
      text: `
${name} 様

この度は、ワークメイトAIの資料請求をいただき、誠にありがとうございます。
ご請求いただいた資料を添付いたしましたので、ご確認ください。

ご不明な点がございましたら、お気軽にお問い合わせください。

--
ワークメイトAI
      `,
      attachments: [
        {
          filename: "QueuePdf.pdf",
          content: fileBuffer,
          contentDisposition: 'attachment',
          contentType: "application/pdf"
        },
      ],
    });

    // 管理者への通知メール
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "【ワークメイトAI】新規資料請求",
      text: `
新規資料請求がありました。

【お客様情報】
お名前: ${name}
メールアドレス: ${email}
会社名: ${company || "未入力"}

【ご質問・ご要望】
${message || "なし"}

--
ワークメイトAI
      `,
    });

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
} 