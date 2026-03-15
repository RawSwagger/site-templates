"use client";

interface ContactFormProps {
  businessName: string;
}

export default function ContactForm({ businessName }: ContactFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Thanks for reaching out to ${businessName}! We'll be in touch soon.`);
      }}
      className="space-y-4 max-w-lg mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="demo-input" required />
        <input type="text" placeholder="Last Name" className="demo-input" required />
      </div>
      <input type="email" placeholder="Email Address" className="demo-input" required />
      <input type="tel" placeholder="Phone (optional)" className="demo-input" />
      <textarea placeholder="Your message..." className="demo-input min-h-[120px] resize-y" required />
      <button type="submit" className="btn-primary w-full">
        Send Message
      </button>
    </form>
  );
}
