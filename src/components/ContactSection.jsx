import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_gihvoni",
        "template_vvsx1p6",
        e.target,
        "F4AdxF-kfh5imu-dk"
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });

          setIsSubmitting(false);
          e.target.reset();
        },
        () => {
          toast({
            title: "Failed to send message",
            description: "Please try again later.",
            variant: "destructive",
          });

          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:adityasuryawanshi6476@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    adityasuryawanshi6476@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <span className="text-muted-foreground">9511884564</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">Pune, India</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="linkedin.com/in/aditya-suryawanshi9511884564" target="Linkdin"><Linkedin /></a>
                <a href="#" target="_blank"><Twitter /></a>
                <a href="#" target="_blank"><Instagram /></a>
                <a href="#" target="_blank"><Twitch /></a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
