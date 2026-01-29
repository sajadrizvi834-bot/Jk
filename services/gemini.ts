
import { GoogleGenAI } from "@google/genai";

export const getAiConsultantResponse = async (userPrompt: string) => {
  const env = (globalThis as any).process?.env || {};
  const apiKey = env.API_KEY;

  if (!apiKey) {
    return "Our website sales consultant is currently offline. Please contact us directly at labbaikwelferfoundation5@gmail.com to buy your professional real estate website.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const systemInstruction = `
    You are the "JK Web Consultant". Your job is to sell professional real estate website packages to property dealers, builders, and agents.
    
    Our Website Sale Packages:
    1. Starter Website (999/mo): A professional landing page for individual agents.
    2. Professional Website (1999/mo): A full-featured site with CRM, unlimited listings, and lead tracking.
    3. AI-Premium Website (4999/mo): The ultimate site with a built-in AI assistant to talk to visitors and close deals for the owner.
    
    Key Selling Points:
    - We build the site for you.
    - Optimized for Google (SEO).
    - Works perfectly on mobile.
    - Built-in management dashboard.
    
    Contact for Sales:
    - Email: labbaikwelferfoundation5@gmail.com
    - Encourage users to send an email for a custom quote or to start their order.
    
    Tone: Sales-oriented, professional, and convincing. You are closing the sale.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response. Please email labbaikwelferfoundation5@gmail.com to start your order.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting. Please contact labbaikwelferfoundation5@gmail.com to discuss our website packages.";
  }
};
