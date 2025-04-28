import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator"; // Optional separator
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactPage() {
  const emailAddress = "fedexiitm.admin@imail.iitm.ac.in"; // Define centrally
  const fullAddress =
    "NAC 1, Indian Institute of Technology Madras, Chennai, Tamil Nadu 600036"; // Define centrally
  const centerContact = "044 2257 9668";
  const keyContacts = [
    {
      name: "Ms. Geetha UdayaKumar", // Use placeholder or actual name if known
      title: "Smart Center Coordinator",
      email: emailAddress, // Use general admin email
      phone: "044 2257 9669", // Placeholder phone
    },
    {
      name: " Dr. Kelitha Cherian", // Placeholder - Replace with actual name
      title: "Senior Program Manager",
      email: "fedexiitm.pm@imail.iitm.ac.in", // Placeholder - Replace with actual email
      phone: "044 2257 9670", // Placeholder phone
    },
    {
      name: "Prof. Arshinder Kaur",
      title: "Professor, Dept. of Management Studies",
      email: "arshinder@iitm.ac.in", // Placeholder - Use official IITM email if known
      phone: "044 2257 4553", // Placeholder phone
    },
    {
      name: "Prof. N S Narayanaswamy",
      title: "Professor, Dept. of CSE, IIT Madras",
      email: "swamy@cse.iitm.ac.in", // Placeholder - Use official IITM email if known
      phone: "044 2257 4369", // Placeholder phone
    },
  ];
  return (
    <main className="defined-width px-4 py-16 0 flex flex-col gap-16">
      {/* Centered Header */}
      <section className="">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h1>
        <p className="text-muted-foreground">
          {`Have questions about our research, collaborations, or opportunities?
          We're here to help.`}
        </p>
      </section>

      {/* Contact Details Section */}
      <section className="">
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {keyContacts.map((contact, index) => (
              <Card key={index} className="flex flex-col">
                {" "}
                {/* Use Card for structure */}
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium text-primary">
                    {contact.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {contact.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm space-y-2 flex-grow">
                  {" "}
                  {/* Added flex-grow */}
                  {/* Email */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail size={16} className="shrink-0" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:text-primary transition-colors break-all" // Allow wrapping
                    >
                      {contact.email}
                    </a>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone size={16} className="shrink-0" />
                    <span>{contact.phone}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>{" "}
          {/* Increased spacing */}
          {/* Email */}
          <div className="flex gap-4"></div>
          <div className="flex items-start gap-4">
            <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="text-base font-semibold text-foreground mb-1">
                Phone
              </h3>
              <span className="text-muted-foreground hover:text-primary transition-colors break-all">
                {centerContact}
              </span>
            </div>
          </div>
          <Separator className="my-6 bg-border/60" />{" "}
          <div className="flex items-start gap-4">
            <Mail className="h-5 w-5 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="text-base font-semibold text-foreground mb-1">
                Email
              </h3>
              <a
                href={`mailto:${emailAddress}`}
                className="text-muted-foreground hover:text-primary transition-colors break-all" // Allow email to wrap/break
              >
                {emailAddress}
              </a>
              <p className="text-xs text-muted-foreground/80 mt-1">
                Best for general inquiries and partnership interests.
              </p>
            </div>
          </div>
          <Separator className="my-6 bg-border/60" />{" "}
          {/* Optional visual separator */}
          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="text-base font-semibold text-foreground mb-1">
                Address
              </h3>
              <p className="text-muted-foreground whitespace-pre-line">
                {" "}
                {/* Preserve line breaks if any */}
                {fullAddress}
              </p>
              {/* Optional: Link to Google Maps */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  fullAddress
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline mt-1 inline-block"
              >
                View on Google Maps
              </a>
            </div>
          </div>
          {/* Optional: Phone - Uncomment if needed, but often not primary for research centers */}
          {/* <Separator className="my-6 bg-border/60" />
          <div className="flex items-start gap-4">
             <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
             <div>
               <h3 className="text-base font-semibold text-foreground mb-1">Phone</h3>
               <p className="text-muted-foreground">
                 +91-XXX-XXXXXXX {/* Replace with actual number */}
          {/* </p>
             </div>
           </div> */}
        </div>
      </section>

      {/* Optional: Simple Map Embed Placeholder */}
      {/* <section className="mt-16">
         <h2 className="text-2xl font-semibold text-center mb-6">Our Location</h2>
         <div className="aspect-video bg-muted rounded-lg border border-border flex items-center justify-center text-muted-foreground">
            Map Embed Placeholder
            {/* Replace with actual iframe embed code from Google Maps
            <iframe
              src="YOUR_GOOGLE_MAPS_EMBED_URL" // Get this from Google Maps Share -> Embed
              width="100%"
              height="450" // Adjust height as needed
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FedEx SMART Center Location"
            ></iframe>
            */}
      {/*</div>*/}
      {/*</section> */}
    </main>
  );
}
