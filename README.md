# Family Dental and Medical Centre — Website Demo & Client Presentation

A modern, responsive dental clinic website created for **FAMILY DENTAL AND MEDICAL CENTRE** (Kirari, Delhi-110086).

> **PRIVATE DEMO NOTICE:**
> This website concept has been created for demonstration purposes and is not the official website of the clinic. Fictional doctor profiles, sample reviews, and sample services are clearly labeled as demo content to prevent any misrepresentation.

---

## 📋 Real Clinic Information Used

- **Real Clinic Name:** FAMILY DENTAL AND MEDICAL CENTRE
- **Real Clinic Address:** B-405, INDER ENCLAVE-2, NEAR SHANI BAZAAR ROAD, KIRARI, DELHI-110086 KIRARI, Delhi
- **Real Contact / WhatsApp Number:** `+91 8586992673`
- **Secondary Contact (from clinic signboard):** `+91 8700456811`
- **Operating Hours:**
  - Morning: 9:00 AM – 2:00 PM
  - Evening: 5:00 PM – 10:00 PM
  - Monday to Saturday (Sunday by Appointment only)
- **Real Images:** Client-provided clinic exterior & operatory chair assets integrated in Hero, About, and Gallery.

---

## 🛠️ File and Folder Structure

```
├── index.html                   # HTML entry point with SEO meta tags & LocalBusiness Schema.org JSON-LD
├── metadata.json                # Project metadata
├── package.json                 # Scripts and dependencies (React 19, Tailwind CSS, Lucide React)
├── src/
│   ├── main.tsx                 # React entry point
│   ├── App.tsx                  # Master application orchestrating all sections & presentation toolbar
│   ├── index.css                # Global styles and Tailwind CSS imports
│   ├── vite-env.d.ts            # Asset module declarations for TypeScript
│   ├── types/
│   │   └── clinic.ts            # Clean TypeScript interfaces for clinic config, services, and gallery
│   ├── data/
│   │   └── clinicConfig.ts      # 🌟 SINGLE SOURCE OF TRUTH for all clinic data and demo content
│   ├── assets/
│   │   └── images/              # High-resolution clinic photography and specialist portraits
│   └── components/
│       ├── DemoDisclaimerBanner.tsx  # Required subtle private demo banner
│       ├── Navbar.tsx                # Sticky navbar with mobile call & appointment CTA
│       ├── Hero.tsx                  # High-conversion hero with real address, phone & imagery
│       ├── QuickActions.tsx          # 4 action cards (Call, WhatsApp, Appointment, Directions)
│       ├── AboutSection.tsx          # Professional intro with sample label
│       ├── DoctorsSection.tsx        # Sample specialist profiles labeled "DEMO CONTENT"
│       ├── ServicesSection.tsx       # 12 dental treatments with category tabs & search
│       ├── TreatmentDetailModal.tsx  # Detailed treatment guide modal with FAQs and booking
│       ├── WhyChooseUs.tsx           # Value cards labeled "Sample Demo Content"
│       ├── GallerySection.tsx        # Interactive photo gallery with Lightbox & client asset tags
│       ├── TestimonialsSection.tsx   # Testimonials labeled "SAMPLE DEMO TESTIMONIAL"
│       ├── FaqSection.tsx            # FAQs with unconfirmed timing notices
│       ├── LocationContactSection.tsx# Real address, Google Maps embed & enquiry form
│       ├── Footer.tsx                # Complete footer with copyright & private demo notice
│       ├── StickyMobileBottomBar.tsx # Sticky bottom action bar for smartphones (360/390/414px)
│       ├── FloatingWhatsApp.tsx      # WhatsApp floating button with pre-filled greeting
│       ├── AppointmentModal.tsx      # Multi-step appointment request modal
│       └── ClientPitchGuideModal.tsx # Client handover & smartphone simulator modal
```

---

## 🚀 How to Run the Website

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build
```

---

## ✏️ Where to Change Client Information

All clinic information is centralized in a single file:
👉 **`/src/data/clinicConfig.ts`**

To update any details:
1. Open `/src/data/clinicConfig.ts`
2. Edit `CLINIC_CONFIG`:
   - `clinicName`
   - `phone`
   - `whatsapp`
   - `address`
   - `email`
   - `openingHours`
3. All components across the website update automatically!

---

## 🖼️ Where to Replace Images

1. Place new `.jpg` or `.png` images in `/src/assets/images/`.
2. Open `/src/data/clinicConfig.ts` and update the import statements or URLs:
   - Hero background: `HERO_SLIDES`
   - Gallery images: `GALLERY_ITEMS`
   - Doctor portraits: `DEMO_DOCTORS`

---

## 🎨 Where to Change Colors & Brand Theme

The project uses Tailwind CSS:
- Primary Brand Color: **Teal** (`teal-600`, `teal-700`, `teal-800`)
- Accent Color: **Emerald** for WhatsApp & verification badges (`emerald-600`)
- Backgrounds: Clean neutral slate (`slate-50`, `white`, `slate-900`)
To switch themes (e.g. to Navy Blue or Cyan), adjust classes in `src/index.css` or replace `teal-*` with `sky-*` or `indigo-*` across components.

---

## 🌐 How to Connect a Real Domain Later

1. Build the production files: `npm run build`
2. Deploy the `dist/` directory to Vercel, Netlify, Cloud Run, or your hosting provider.
3. In your domain registrar (GoDaddy, Namecheap, Google Domains):
   - Add an **A Record** pointing `@` to your server's IP.
   - Add a **CNAME Record** pointing `www` to your hosting URL.
4. SSL/HTTPS certificates are generated automatically.

---

## 📅 How to Connect a Real Appointment Backend Later

In `src/components/AppointmentModal.tsx`:
- **Current Flow:** Validates form inputs, displays confirmation, and provides one-click forwarding to WhatsApp (`wa.me/918586992673`).
- **REST / API Endpoint:** Replace `setIsSubmitted(true)` with a `fetch('/api/appointments', { method: 'POST', body: JSON.stringify(formData) })`.
- **Database Options:** Connect to Firebase Firestore or Supabase to store patient records and alert reception staff via SMS or WhatsApp Business API.

---

## 💬 How to Connect Real WhatsApp / API / Payment Services

- **WhatsApp Business Cloud API:** You can use Meta's Cloud API or Twilio to automate slot bookings.
- **Payment Gateway (UPI / Razorpay / Stripe):** For advance consultation token payments, install `@razorpay/razorpay-js` or load Razorpay checkout in the appointment flow.
