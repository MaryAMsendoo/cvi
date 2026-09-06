import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/23407011308129?text=Hello%20CVI";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with CVI on WhatsApp"
      title="Chat with CVI on WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-white p-1 shadow-[0_8px_24px_rgba(31,44,50,0.2)] transition-transform hover:scale-105 focus-visible:outline-accent sm:bottom-7 sm:right-7"
    >
      <Image
        src="/watsapicon.png"
        alt=""
        width={58}
        height={58}
        className="h-12 w-12 rounded-full"
      />
    </a>
  );
}
