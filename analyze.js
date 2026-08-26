import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  const image = fs.readFileSync('public/student-result.png');
  const response = await ai.models.generateContent({
    model: 'gemini-3.6-flash',
    contents: [
      {
        role: 'user',
        parts: [
          {
            inlineData: {
              data: image.toString('base64'),
              mimeType: 'image/png'
            }
          },
          { text: 'Describe this before and after image in detail. What are the key differences? Describe the student state before and after.' }
        ]
      }
    ]
  });
  console.log(response.text);
}
run();
