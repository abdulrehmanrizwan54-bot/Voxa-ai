import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  try {
    const { prompt } = req.body;

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY
    });

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });

    res.status(200).json({
      text: result.text
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
