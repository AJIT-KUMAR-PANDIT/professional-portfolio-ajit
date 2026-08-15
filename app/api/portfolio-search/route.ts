import { generateText } from 'ai'
import { NextResponse } from 'next/server'

const portfolioContext = `Ajit Kumar Pandit is a Full Stack MERN Developer based in Jamshedpur, India. He builds scalable web applications, cloud systems, and AI-powered products. Skills: React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Redux, Node.js, Express.js, MongoDB, RESTful API Design, AWS EC2, MinIO open-source S3, Docker, CI/CD, Linux, Cloudflare, Vercel, Deep Learning, Neural Networks, TensorFlow, PyTorch, Computer Vision, and AI integration. Experience includes independent product engineering from 2023 to present, plus work connected to Tata Steel and Samsung R&D Institute. Education: M.Tech in Computer Science and Engineering, B.E. Computer Science at Chandigarh University (2020-2023), Diploma in Computer Engineering at NTTF (2017-2020), and Fullstack Web Development Certification from Cuvette (2023-2024). Projects focus on scalable digital products, AI-powered experiences, and engineering for scale. Contact: ajit@nakprc.com, +91 6200281082.`

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const query = typeof body?.query === 'string' ? body.query.trim().slice(0, 500) : ''
    if (!query) return NextResponse.json({ answer: 'Ask me anything about Ajit\'s work, skills, education, or experience.' }, { status: 400 })

    const { text } = await generateText({
      model: 'openai/gpt-5-mini',
      system: `You are Ajit\'s portfolio assistant. Answer only from the portfolio context below. Be concise, warm, and useful. If the answer is not in the context, say you can help with his skills, work, education, or contact details instead.\n\n${portfolioContext}`,
      prompt: query,
      maxOutputTokens: 180,
    })

    return NextResponse.json({ answer: text })
  } catch {
    return NextResponse.json({ answer: 'The assistant is taking a short break. Try again or email Ajit directly at ajit@nakprc.com.' }, { status: 500 })
  }
}
