ULA Travel Project








Live Demo: [ulatravel.netlify.app](https://ulatravel.netlify.app/)

A sleek and modern tourist booking web application tailored for exploring the breathtaking travel spots across Southern India. Harnessing the power of React + TypeScript, this app enables users to seamlessly submit travel package requests, which are then delivered straight to the owner via EmailJS.

Features

Browse a curated gallery of Southern Indian tourist destinations

Effortlessly book travel packages using a streamlined form

Instant booking details sent to the admin through EmailJS

Fully responsive design—works beautifully on mobile and desktop

Built for speed and maintainability with React + TypeScript

Tech Stack

Frontend: React (TypeScript)

Styling: CSS (with optional Tailwind utility if used)

Email Delivery: EmailJS

Build Tool: Vite (or CRA, whichever you used)

Getting Started
1. Clone the Repository
git clone https://github.com/balasrinivas11/ula-travel-project.git
cd ula-travel-project

2. Install Dependencies
npm install
or
yarn install

3. Configure EmailJS

Set up an account on EmailJS


Create your Email Service, Template, and Public Key.

Add your credentials into your booking component:

emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  formData,
  "YOUR_PUBLIC_KEY"
);

4. Run in Development Mode
npm run dev
or
yarn dev

5. Build for Production
npm run build

Screenshoots : 
<img width="1885" height="942" alt="image" src="https://github.com/user-attachments/assets/0ce29ed9-d2f4-4ee0-9d45-9ea0d01fe5b2" />

<img width="913" height="883" alt="image" src="https://github.com/user-attachments/assets/28894b83-a831-4a87-bbb9-6c5f81efde2f" />

![WhatsApp Image 2025-08-25 at 21 45 14_fc922710](https://github.com/user-attachments/assets/4119a981-e68c-450a-a080-3aab56f00970)



