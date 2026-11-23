import { mirevaCallUrl, mirevaWhatsAppUrl } from "@/lib/booking";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3 20.5l1.6-5A8.2 8.2 0 1 1 20.2 11.7Z" />
      <path d="M8.4 8.2c-.3.3-.5.8-.4 1.3.3 2.2 2.7 4.8 5 5.5.7.2 1.2.1 1.7-.3l1-.9-2.2-1.3-.8.9a8.1 8.1 0 0 1-2.7-2.7l.8-.8-1.4-2.2-1 .5Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5.5 3.5h3l1.4 4.2-1.6 1.6a15.5 15.5 0 0 0 6.4 6.4l1.6-1.6 4.2 1.4v3a2 2 0 0 1-2.2 2C10.1 20 4 13.9 3.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export default function ContactActions() {
  return (
    <nav className="contact-actions" aria-label="Quick contact">
      <a className="contact-actions-desktop" href={mirevaWhatsAppUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with Mireva on WhatsApp" title="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>
      <div className="contact-actions-mobile">
        <a href={mirevaCallUrl} className="contact-actions-call"><PhoneIcon /><span>Call us</span></a>
        <a href={mirevaWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="contact-actions-whatsapp"><WhatsAppIcon /><span>WhatsApp</span></a>
      </div>
    </nav>
  );
}
