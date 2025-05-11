import { NextResponse } from "next/server";
import openai from "@/lib/openai";

export const runtime = "edge";

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        if( !messages || !Array.isArray(messages) ) {
            return NextResponse.json({ error: "Invalid request" }, { status: 400 });
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: 'system',
                    content: 'You are a helpful assistant for SoftSell, a platform for selling unused software licenses. Provide concise, accurate answers about the platform’s services, such as license selling, valuation, and payment processes.',
                },
                ...messages
            ],
            stream: false,
        });

        const respone = completion.choices[0].message;

        return NextResponse.json({
            output: respone || "No response",
        }, { status: 200 });
    } catch (error: any) {
        console.error("Error in chat completion:", error);

        if (error?.error?.code === 'insufficient_quota') {
            return NextResponse.json(
              { error: 'Insufficient OpenAI quota. Please try again later or contact support.' },
              { status: 429 }
            );
          }
      
          return NextResponse.json(
            { error: 'Failed to generate response. Please try again.' },
            { status: 500 }
          );
    }
}
