import Button from "../../components/ui/button";

const Contacts = ({ contactForm, handleFormChange, handleMailtoClick }) => (
  <div className="space-y-4">
    <h2 className="text-3xl font-semibold">Get In Touch</h2>
    <p>Location: Lisbon, Portugal</p>
    <p>
      Email: <a href="mailto:ricardo.n.jesus+homepagecontact@outlook.com" className="underline">ricardo.n.jesus+homepagecontact@outlook.com</a>
    </p>
    <form onSubmit={handleMailtoClick} className="flex flex-col gap-2 mt-4">
      <input className="border p-2 rounded" type="text" name="name" value={contactForm.name} onChange={handleFormChange} placeholder="Your Name" required />
      <textarea className="border p-2 rounded" name="message" value={contactForm.message} onChange={handleFormChange} placeholder="Your Message" rows={4} required></textarea>
      <Button type="submit">Send Message</Button>
    </form>
  </div>
);

export default Contacts;
