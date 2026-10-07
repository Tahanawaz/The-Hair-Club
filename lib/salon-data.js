export const salon = {
  name: "THE HAIR CLUB", descriptor: "SIGNATURE BY AYYAN AZHAR", whatsapp: "923011700071",
  phone: "+92 301 1700071", email: "appointments@thehairclub.pk",
  address: "223 A Block Ali Town, Shan Bhatti Road, near Noor Autos, Lahore 53700, Pakistan", mapUrl: "https://maps.app.goo.gl/cmdCqrwY6bvtaiGEA?g_st=aw",
  mapEmbedUrl: "https://www.google.com/maps?q=The+Hair+Club+Luxury+Salon,+223+A+Block+Ali+Town,+Shan+Bhatti+Road,+near+Noor+Autos,+Lahore+53700,+Pakistan&output=embed",
  socials: { instagram: "#", facebook: "#", tiktok: "#" },
  hours: [{ days: "Monday – Saturday", time: "10:00 AM – 9:00 PM" }, { days: "Sunday", time: "12:00 PM – 8:00 PM" }],
};
export const services = [
  { name:"Haircut", description:"Consultation-led cut, wash and tailored finish.", price:"Rs. 300", icon:"Scissors" },
  { name:"Signature Styling", description:"Event-ready styling with a natural, lasting finish.", price:"Rs. 500", icon:"Sparkles" },
  { name:"Beard Sculpting", description:"Shape, line-up, hot towel and beard conditioning.", price:"Rs. 200", icon:"Badge" },
  { name:"Hair Color", description:"Expert grey coverage or a custom tonal refresh.", price:"Rs. 1000", icon:"Palette" },
  { name:"Hair & Scalp Ritual", description:"Deep cleanse, massage and restorative treatment.", price:"Rs. 1000", icon:"Waves" },
  { name:"Men's Facial", description:"Skin analysis, deep cleanse and hydration treatment.", price:"Rs. 2,500", icon:"ScanFace" },
  { name:"Keratin Treatment", description:"Smoothing care for stronger, manageable hair.", price:"Rs. 7,500", icon:"Droplets" },
  { name:"Manicure", description:"Nail shaping, cuticle care and clean matte finish.", price:"Rs. 1,500", icon:"Hand" },
  { name:"Pedicure", description:"Complete foot care with scrub and relaxing massage.", price:"Rs. 1,800", icon:"Footprints" },
  { name:"Groom Package", description:"Hair, beard, facial and finishing for your big day.", price:"Rs. 12,000", icon:"Crown" },
  { name:"Highlights with Glossing & Base Color", description:"Dimensional highlights finished with glossing and a customized base color.", price:"Rs. 15,000", icon:"Palette" },
  { name:"Nano Plastia Treatment", description:"Advanced smoothing treatment for softer, shinier and more manageable hair.", price:"Rs. 8,000", icon:"Droplets" },
  { name:"Active Oxygen Treatment", description:"Revitalizing oxygen care designed to refresh and restore stressed hair.", price:"Rs. 7,000", icon:"Sparkles" },
  { name:"DOD Pre Fiber Restructure Treatment", description:"Intensive pre-fiber restructuring care for damaged and weakened hair.", price:"Rs. 10,000", icon:"Waves" },
];
export const testimonials = [
  { name:"Hamza R.", role:"Regular client", review:"The consultation is never rushed. My cut grows out clean, and the team remembers exactly how I like it." },
  { name:"Usman K.", role:"Groom package", review:"Booked the groom package for my wedding. Calm atmosphere, precise work and genuinely excellent service." },
  { name:"Daniyal A.", role:"Beard & facial", review:"Premium without feeling pretentious. The beard detailing and facial were both first-class." },
];
export const packages = [
  { name:"Essential Reset", tag:"Everyday", price:"Rs. 2,200", save:"Save Rs. 300", duration:"60 min", featured:false, includes:["Precision Haircut","Signature Styling","Hair Wash"] },
  { name:"Executive Detail", tag:"Most popular", price:"Rs. 3,800", save:"Save Rs. 700", duration:"90 min", featured:true, includes:["Precision Haircut","Beard Sculpting","Hot Towel Ritual","Signature Styling"] },
  { name:"The Groom Edit", tag:"Wedding", price:"Rs. 12,000", save:"Complete preparation", duration:"3 hrs", featured:false, includes:["Consultation & Haircut","Beard Sculpting","Men’s Facial","Manicure","Event Styling"] },
  { name:"Total Reset", tag:"Full care", price:"Rs. 7,500", save:"Save Rs. 1,500", duration:"2.5 hrs", featured:false, includes:["Precision Haircut","Beard Sculpting","Hair & Scalp Ritual","Men’s Facial","Manicure"] },
];
export const whatsappUrl = message => `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(message)}`;
export const serviceMessage = service => `Hello The Hair Club, I would like to book ${service}. Please share the available dates and timings. Thank you.`;
