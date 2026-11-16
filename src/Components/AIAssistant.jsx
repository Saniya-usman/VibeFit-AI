import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import FashionMascot from "./FashionMascot";
 // <-- your provided import

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams(); // product id from URL
  const recognitionRef = useRef(null);

  // find product by id (if present in URL)
  const product = id ? products.find((p) => String(p.id) === String(id)) : null;

  // Browser feature detection
  const SpeechRecognition =
    typeof window !== "undefined" &&
    (window.SpeechRecognition || window.webkitSpeechRecognition);
  const speechSynthesisAvailable =
    typeof window !== "undefined" && "speechSynthesis" in window;

  useEffect(() => {
    // initialize recognition once
    if (!SpeechRecognition) return;

    const recog = new SpeechRecognition();
    recog.lang = "en-US";
    recog.continuous = false;
    recog.interimResults = false;

    recog.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim().toLowerCase();
      addMessage("user", transcript);
      setListening(false);
      handleCommand(transcript);
    };

    recog.onerror = (err) => {
      console.error("Speech recognition error:", err);
      setListening(false);
      addMessage("assistant", "I couldn't hear clearly — try again.");
    };

    recognitionRef.current = recog;

    // cleanup on unmount
    return () => {
      try {
        recog.onresult = null;
        recog.onerror = null;
        recog.stop && recog.stop();
      } catch (e) {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // re-create if route id changes (optional)

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const speak = (text) => {
    if (!speechSynthesisAvailable) {
      addMessage("assistant", text);
      return;
    }
    setSpeaking(true);
    const ut = new SpeechSynthesisUtterance(text);
    ut.lang = "en-US";
    ut.onend = () => setSpeaking(false);
    window.speechSynthesis.cancel(); // stop any existing speech
    window.speechSynthesis.speak(ut);
    addMessage("assistant", text);
  };

  const startListening = () => {
    if (!SpeechRecognition) {
      addMessage("assistant", "Sorry, your browser doesn't support voice input.");
      return;
    }
    try {
      setListening(true);
      recognitionRef.current && recognitionRef.current.start();
    } catch (e) {
      console.error("startListening error", e);
      setListening(false);
      addMessage("assistant", "Unable to start listening.");
    }
  };

  const handleCommand = (msg) => {
    // quick helpers
    const has = (keywords) => keywords.some((k) => msg.includes(k));
    const speakProductNotOpen = () =>
      speak("Please open a product details page so I can tell you about that product.");

    // greetings
    if (has(["hello", "hi", "hey"])) {
      return speak("Hey! I'm your fashion assistant. Ask me about price, sizes, material or say 'show images'.");
    }

    // navigation intents
    if (has(["home", "go home", "open home"])) {
      navigate("/");
      return speak("Taking you to the home page.");
    }
    if (has(["kids", "kids section", "open kids"])) {
      navigate("/kids");
      return speak("Opening the kids collection.");
    }
    if (has(["back", "go back"])) {
      navigate(-1);
      return speak("Going back.");
    }
    if (has(["products", "show products", "catalog"])) {
      navigate("/products");
      return speak("Showing product catalog.");
    }

    // product-specific queries
    if (has(["price", "how much", "cost"])) {
      if (!product) return speakProductNotOpen();
      const price = product.price ?? "price not available";
      return speak(`The price of ${product.title} is ${price}.`);
    }

    if (has(["old price", "original price", "was"])) {
      if (!product) return speakProductNotOpen();
      return speak(
        product.oldPrice
          ? `Original price was ${product.oldPrice}. Now it's ${product.price} with ${product.discount ?? "no discount info"}.`
          : "Original price not available for this product."
      );
    }

    if (has(["discount", "off"])) {
      if (!product) return speakProductNotOpen();
      return speak(product.discount ? `This product has ${product.discount}.` : "No discount info available.");
    }

    if (has(["size", "sizes", "available sizes"])) {
      if (!product) return speakProductNotOpen();
      return speak(
        product.sizes && product.sizes.length
          ? `Available sizes are: ${product.sizes.join(", ")}.`
          : "Size information is not available."
      );
    }

    if (has(["rating", "reviews"])) {
      if (!product) return speakProductNotOpen();
      return speak(product.rating ? `This product has a rating of ${product.rating} out of 5.` : "No rating available.");
    }

    if (has(["material", "fabric", "material composition", "material type"])) {
      if (!product) return speakProductNotOpen();
      const details = product.details ?? {};
      const mat =
        details.materialComposition || details.materialType || details.material || "Material information not available.";
      return speak(`Material: ${mat}`);
    }

    if (has(["about", "detail", "details", "about item"])) {
      if (!product) return speakProductNotOpen();
      const details = product.details ?? {};
      const about = details.aboutItem;
      if (Array.isArray(about) && about.length) {
        // speak first line and offer more
        speak(about[0]);
        addMessage("assistant", "Say 'more about this' to hear more details.");
        return;
      }
      return speak("No extended product description available.");
    }

    if (has(["more about", "more details", "tell me more", "more"])) {
      if (!product) return speakProductNotOpen();
      const about = (product.details && product.details.aboutItem) || null;
      if (Array.isArray(about) && about.length) {
        // speak up to 3 lines to avoid very long speech
        const text = about.slice(0, 3).join(" ");
        return speak(text);
      }
      return speak("No further details are available for this product.");
    }

    if (has(["image", "images", "photos", "show images"])) {
      if (!product) return speakProductNotOpen();
      if (Array.isArray(product.images) && product.images.length) {
        // navigate to product page route (already here) — we can instruct user to open gallery
        return speak(`I see ${product.images.length} images. Scroll up to view them, or click the product image to open gallery.`);
      }
      return speak("No product images found.");
    }

    if (has(["brand", "manufacturer", "made by"])) {
      if (!product) return speakProductNotOpen();
      const manufacturer = product.details?.additionalInfo?.manufacturer || "Manufacturer information not available.";
      return speak(manufacturer);
    }

    // fallback: try to match short search queries like "show black kurtis" or "show maroon"
    if (has(["show", "find", "search", "filter"])) {
      // simple extractor: look for a color or keyword after 'show' or 'find'
      // quick and simple heuristic:
      const tokens = msg.split(" ");
      // words to ignore
      const stop = ["show", "find", "show me", "find me", "search", "for", "the", "in", "under", "with"];
      const keywords = tokens.filter((t) => !stop.includes(t));
      if (keywords.length) {
        // we'll navigate to products page and add a query param (you can read it there)
        const q = keywords.join(" ");
        navigate(`/products?q=${encodeURIComponent(q)}`);
        return speak(`Searching products for ${q}.`);
      }
    }

    // If nothing matched
    speak("Sorry, I didn't understand that. Try asking about price, sizes, material, rating, or say 'show images'.");
  };

  const mascotStatus = listening ? "listening" : speaking ? "speaking" : "idle";

  return (
    <>
      {/* Mascot floating button (closed) */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-50">
          <FashionMascot
            status={mascotStatus}
            size={90}
            onClick={() => setOpen(true)}
            className="cursor-pointer"
          />
        </div>
      )}

      {/* Popup */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 bg-white shadow-2xl rounded-2xl p-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="font-semibold">Fashion Assistant</h3>
              <p className="text-xs text-gray-500">{location.pathname}</p>
            </div>
            <div className="flex items-center gap-2">
              {/* show small mascot inside header */}
              <div className="w-10 h-10">
                <FashionMascot status={mascotStatus} size={40} />
              </div>
              <button onClick={() => setOpen(false)}>
                <X size={20} />
              </button>
            </div>
          </div>

          {/* If on a product page show title */}
          {product ? (
            <div className="mb-2">
              <div className="text-sm font-semibold">{product.title}</div>
              <div className="text-xs text-gray-600">
                {product.price} {product.discount ? `• ${product.discount}` : ""}
              </div>
            </div>
          ) : (
            <div className="mb-2 text-sm text-gray-600">No product open — open a product details page to ask about it.</div>
          )}

          <div className="h-44 overflow-y-auto bg-gray-100 p-2 rounded-lg">
            {messages.length === 0 ? (
              <p className="text-sm text-gray-600">Say "Hello" or ask about price, sizes, material, or navigate.</p>
            ) : (
              messages.map((m, i) => (
                <p
                  key={i}
                  className={`text-sm my-1 ${m.sender === "assistant" ? "text-pink-600" : "text-gray-900"}`}
                >
                  <strong className="capitalize">{m.sender}:</strong> {m.text}
                </p>
              ))
            )}
          </div>

          <button
            onClick={startListening}
            className={`w-full mt-3 p-3 rounded-xl text-white ${listening ? "bg-red-500" : "bg-pink-600"}`}
          >
            {listening ? "Listening..." : "Speak 🎤"}
          </button>
        </div>
      )}
    </>
  );
}
