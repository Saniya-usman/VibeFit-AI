

import React, { useEffect, useState } from "react";

export default function VoiceAssistant({ product }) {
  if (!product) return null;
  const Recognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const [listening, setListening] = useState(false);
  const [text, setText] = useState("");
  const [reply, setReply] = useState("");
  const [detectedLang, setDetectedLang] = useState("en-IN");

  const detectLanguage = (transcript) => {
    const lower = transcript.toLowerCase();
    if (lower.includes("आकार") || lower.includes("कीमत") || lower.includes("कपड़ा") || lower.includes("नमस्ते") || lower.includes("धन्यवाद")) {
      return "hi-IN";
    } else if (lower.includes("ಗಾತ್ರ") || lower.includes("ಬೆಲೆ") || lower.includes("ಬಟ್ಟೆ") || lower.includes("ನಮಸ್ಕಾರ") || lower.includes("ಧನ್ಯವಾದಗಳು")) {
      return "kn-IN";
    } else {
      return "en-IN";
    }
  };

  useEffect(() => {
    if (product) {
      speak(
        `Welcome! You are viewing ${product.title}. You can ask me about sizes, price, or fabric.`
      );
    }
  }, [product]);

  const startListening = () => {
    if (!Recognition) {
      alert("SpeechRecognition not supported in this browser");
      return;
    }
    const rec = new Recognition();
    rec.lang = "en-IN";
    rec.onresult = (e) => {
      const transcript = e.results[0][0].transcript.toLowerCase();
      setText(transcript);
      const lang = detectLanguage(transcript);
      setDetectedLang(lang);
      handleQuestion(transcript, lang);
    };
    rec.onend = () => setListening(false);
    rec.start();
    setListening(true);
  };

  const handleQuestion = (q) => {
    if (!product) {
      setReply("Sorry, I couldn't find product details.");
      speak("Sorry, I couldn't find product details.");
      return;
    }

    const lower = q.toLowerCase();
    let answer = "Sorry, I can answer only about sizes, price, or fabric.";

    if (lower.includes("size") || lower.includes("sizes")) {
      answer = `Available sizes are ${product.sizes?.join(", ") || "not specified"}.`;
    } else if (
      lower.includes("price") ||
      lower.includes("cost") ||
      lower.includes("how much") ||
      lower.includes("rupees")
    ) {
      answer = `This ${product.title} costs ${product.price} inclusive of all taxes.`;
    } else if (lower.includes("fabric") || lower.includes("material")) {
      answer = `The fabric is ${
        product.details?.materialComposition || "not specified"
      }.`;
    } else if (lower.includes("sleeve")) {
      answer = `Sleeve type: ${product.details?.sleeveType || "not specified"}.`;
    } else if (lower.includes("neck")) {
      answer = `Neck style: ${product.details?.neckStyle || "not specified"}.`;
    } else if (lower.includes("origin") || lower.includes("country")) {
      answer = `Country of origin: ${
        product.details?.countryOfOrigin || "not specified"
      }.`;
    }

    setReply(answer);
    speak(answer);
  };

  const speak = (msg, lang = "en-IN") => {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(msg);
    utter.lang = lang;
    window.speechSynthesis.speak(utter);
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3">
      {/* Mic button with animated aura */}
      <div className="relative">
  {listening && (
    <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
  )}
  <button
    onClick={startListening}
    className={`relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition transform hover:scale-110 hover:shadow-xl ${
      listening ? "ring-4 ring-cyan-300 animate-bounce" : ""
    } bg-gradient-to-br from-cyan-700 via-cyan-500 to-cyan-600`}
  >
    {/* Mic icon when idle */}
    {!listening && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3z" />
      <path d="M19 11a7 7 0 0 1-14 0" stroke="white" strokeWidth="1.5" />
      <path d="M12 17v4" stroke="white" strokeWidth="1.5" />
      <path d="M8 21h8" stroke="white" strokeWidth="1.5" />
      </svg>
    )}

    {/* Waveform animation when listening */}
    {listening && (
      <div className="flex gap-[2px] items-end h-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-[3px] bg-white rounded-full animate-wave`}
            style={{
              animationDelay: `${i * 0.1}s`,
              height: `${6 + i * 2}px`,
            }}
          />
        ))}
      </div>
    )}
  </button>
</div>


      {/* Response panel with fade-in */}
      {(text || reply) && (
        <div className="bg-white shadow-2xl rounded-xl p-4 w-80 animate-fadeIn">
          {text && (
            <p className="text-sm text-gray-600">
              <strong>You:</strong> {text}
            </p>
          )}
          {reply && (
            <p className="text-sm text-gray-800 mt-2">
              <strong>Assistant:</strong> {reply}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
