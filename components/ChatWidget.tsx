import { useState } from 'react';
import { motion } from 'framer-motion';
import { BotMessageSquare, X } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
}

const exampleQuestions: string[] = [
  'How do I sell my license?',
  'What types of licenses do you accept?',
  'How long does the process take?',
];

const mockResponses: { [key: string]: string } = {
  'How do I sell my license?': 'To sell your license, upload the details via our secure form, receive a valuation, and get paid quickly!',
  'What types of licenses do you accept?': 'We accept SaaS, perpetual, and subscription-based software licenses.',
  'How long does the process take?': 'The valuation typically takes 1-2 business days, and payment is processed within 24 hours after approval.',
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const toggleWidget = () => setIsOpen((prev) => !prev);

  const handleMockResponse = (question: string) => {
    const response = mockResponses[question] || 'Sorry, I don’t have an answer for that. Please contact support!';
    setMessages((prev) => [...prev, { text: response, isUser: false }]);
  };

  const handleQuestionClick = async (question: string) => {
    const userMessage: Message = { text: question, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    await fetchResponse([{ role: 'user', content: question }], question);
  };

  const fetchResponse = async (chatMessages: { role: string; content: string }[], originalQuestion: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatMessages }),
      });

      const data = await response.json();
      if (data.error) {
        const errorMessage: Message = {
          text: data.error,
          isUser: false,
        };
        setMessages((prev) => [...prev, errorMessage]);
        return;
      }

      const aiMessage: Message = {
        text: data.output.content || 'Sorry, I don’t have an answer for that. Please contact support!',
        isUser: false,
      }

      setMessages((prev) => [...prev, aiMessage]);

    } catch (error: any) {
      console.error('Error fetching response:', error);
      let errorMessage: string;

      if (error.message.includes('Insufficient OpenAI quota')) {
        // Fallback to mock response
        handleMockResponse(originalQuestion);
        errorMessage = 'Using fallback response due to quota limits.';
      } else {
        errorMessage = 'Sorry, something went wrong. Please try again or contact support.';
      }

      setMessages((prev) => [...prev, { text: errorMessage, isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    const question = input;
    setInput('');

    await fetchResponse([{ role: 'user', content: input }], question);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-white border border-[#3A5DD8] w-80 h-96 rounded-lg shadow-xl flex flex-col"
        >
          <div className="flex justify-between items-center p-4 border-b border-[#3A5DD8]">
            <h3 className="text-lg font-semibold text-[#1F1F1F]">SoftSell Assistant</h3>
            <button
              onClick={toggleWidget}
              className="text-[#1F1F1F]"
              aria-label="Close chat"
            >
              <X />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-[#6D7C79]">
                <p className="mb-2">Try asking:</p>
                {exampleQuestions.map((q, index) => (
                  <button
                    key={index}
                    onClick={() => handleMockResponse(q)}
                    className="block text-left text-[#6D7C79] hover:underline mb-1"
                    disabled={isLoading}
                  >
                    {q}
                  </button>
                ))}
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      msg.isUser
                        ? 'text-[#6D7C79]'
                        : 'text-[#1F1F1F]'
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))
            )}
            {isLoading && (
              <div className="text-left">
                <span className="inline-block p-2 rounded-lg bg-[#3A5DD8] text-white">
                  Typing...
                </span>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="w-full p-2 border rounded-lg bg-white text-[#6D7C79]"
              disabled={isLoading}
            />
          </form>
        </motion.div>
      ) : (
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={toggleWidget}
          className="bg-[#3A5DD8] text-white p-4 rounded-full shadow-lg"
          aria-label="Open chat"
        >
          <BotMessageSquare size={24} />
        </motion.button>
      )}
    </div>
  );
}