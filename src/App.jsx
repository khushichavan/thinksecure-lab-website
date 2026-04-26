import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Phone,
  MapPin,
  Droplets,
  Radar,
  Footprints,
  Blinds,
  Cctv,
  DoorOpen,
  Sun,
  Settings,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  Building2,
  Home,
  Sparkles,
  Zap,
  Camera,
} from "lucide-react";

const services = [
  { title: "Water Level Control", description: "Automatic tank monitoring to prevent overflow, water wastage, and dry-run motor issues.", icon: Droplets },
  { title: "Motion Sensor", description: "Detects movement and activates lights, alarms, cameras, or alerts for better safety.", icon: Radar },
  { title: "Step Automation", description: "Smart staircase lighting that turns on automatically when someone walks on the steps.", icon: Footprints },
  { title: "Curtain Motor", description: "Motorized curtain opening and closing for homes, offices, and smart interiors.", icon: Blinds },
  { title: "CCTV Installation", description: "Professional camera setup for homes, shops, offices, and buildings.", icon: Cctv },
  { title: "Gate Automation", description: "Automatic gate operation for safe, smooth, and convenient entry and exit.", icon: DoorOpen },
  { title: "Solar Installation", description: "Solar installation support for energy saving and clean power usage.", icon: Sun },
  { title: "Customized Automation", description: "Automation designed according to customer needs and property type.", icon: Settings },
];

const gallery = [
  {
    title: "Smart Home Security",
    text: "Modern security monitoring for safer homes.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "CCTV Surveillance",
    text: "Reliable camera setup for continuous monitoring.",
    image: "https://images.unsplash.com/photo-1589935447067-5531094415d1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Solar Power Setup",
    text: "Energy-saving solar solution for smart spaces.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  },
];

const whyChoose = [
  "Professional installation and service support",
  "Smart solutions for homes, shops, offices, and apartments",
  "Security, comfort, automation, and energy-saving features",
  "Customized automation based on customer requirements",
  "Clean and modern smart-home experience",
  "Local service support in Hubli / Hubballi",
];

export default function App() {
  const [open, setOpen] = useState(false);
  const phoneOne = "9741816534";
  const phoneTwo = "9741849561";
  const address = "#137, Industrial Estate, Maruti Nagar, Gokul Road, Hubli - 580030";

  const scrollToSection = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-[#fbf4e8] text-[#2d2118]">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#e9d6be] bg-[#fbf4e8]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 lg:px-14">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8b5e3c] text-white shadow-lg shadow-[#8b5e3c]/20">
              <ShieldCheck size={27} />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-black tracking-tight">ThinkSecure</h1>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#8b5e3c]">Lab</p>
            </div>
          </button>

          <div className="hidden items-center gap-8 text-sm font-bold text-[#5b4634] md:flex">
            <button onClick={() => scrollToSection("home")} className="hover:text-[#8b5e3c]">Home</button>
            <button onClick={() => scrollToSection("services")} className="hover:text-[#8b5e3c]">Services</button>
            <button onClick={() => scrollToSection("gallery")} className="hover:text-[#8b5e3c]">Gallery</button>
            <button onClick={() => scrollToSection("about")} className="hover:text-[#8b5e3c]">About</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-[#8b5e3c]">Contact</button>
          </div>

          <button className="rounded-xl border border-[#d8b995] p-2 md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-[#e9d6be] bg-[#fbf4e8] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4 font-bold text-[#5b4634]">
              <button onClick={() => scrollToSection("home")} className="text-left">Home</button>
              <button onClick={() => scrollToSection("services")} className="text-left">Services</button>
              <button onClick={() => scrollToSection("gallery")} className="text-left">Gallery</button>
              <button onClick={() => scrollToSection("about")} className="text-left">About</button>
              <button onClick={() => scrollToSection("contact")} className="text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#fffaf2] via-[#f6ead9] to-[#e8d0b4] pt-24">
        <div className="absolute -right-32 top-20 h-[430px] w-[430px] rounded-full bg-[#c69c6d]/25 blur-3xl" />
        <div className="absolute -left-32 bottom-8 h-[430px] w-[430px] rounded-full bg-[#8b5e3c]/20 blur-3xl" />

        <div className="mx-auto grid min-h-[calc(100vh-96px)] w-full max-w-[1600px] items-center gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-14">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d8b995] bg-white/70 px-4 py-2 text-sm font-black text-[#8b5e3c] shadow-sm">
              <Sparkles size={16} /> Home Security & Automation Systems
            </p>
            <h2 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-[#2d2118] sm:text-6xl xl:text-7xl">
              Smart Protection for a <span className="text-[#8b5e3c]">Safer Modern Home</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#604b39]">
              ThinkSecure Lab installs and services CCTV, motion sensors, gate automation, water level control, curtain motors, solar installation, and customized automation solutions for homes, offices, shops, and buildings.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => scrollToSection("services")} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#8b5e3c] px-7 py-4 font-black text-white shadow-xl shadow-[#8b5e3c]/25 transition hover:bg-[#6f4529]">
                Explore Services <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollToSection("gallery")} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#d8b995] bg-white/75 px-7 py-4 font-black text-[#8b5e3c] shadow-sm transition hover:bg-white">
                View Gallery <Camera size={18} />
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-[#ead8c0] bg-white/75 p-5 shadow-sm">
                <Home className="mb-3 text-[#8b5e3c]" />
                <h3 className="font-black">Home</h3>
                <p className="text-sm text-[#7b6653]">Smart living</p>
              </div>
              <div className="rounded-3xl border border-[#ead8c0] bg-white/75 p-5 shadow-sm">
                <Building2 className="mb-3 text-[#8b5e3c]" />
                <h3 className="font-black">Office</h3>
                <p className="text-sm text-[#7b6653]">Smart safety</p>
              </div>
              <div className="rounded-3xl border border-[#ead8c0] bg-white/75 p-5 shadow-sm">
                <Zap className="mb-3 text-[#8b5e3c]" />
                <h3 className="font-black">Automation</h3>
                <p className="text-sm text-[#7b6653]">Easy control</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative hidden lg:block">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-[2rem] bg-[#8b5e3c]/20" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-[10px] border-white bg-white shadow-2xl shadow-[#8b5e3c]/20">
              <img src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1400&q=80" alt="Smart home automation" className="h-[650px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d2118]/75 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] bg-[#fff8ef]/95 p-6 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8b5e3c] text-white">
                    <ShieldCheck size={34} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2d2118]">ThinkSecure Lab</h3>
                    <p className="font-bold text-[#8b5e3c]">We Install & Service Home Security & Automation Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="w-full bg-[#fffaf2] px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-[1600px]">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="font-black uppercase tracking-[0.35em] text-[#8b5e3c]">Our Services</p>
            <h2 className="mt-3 text-4xl font-black text-[#2d2118] md:text-5xl">Complete Smart Security Solutions</h2>
            <p className="mt-4 text-[#604b39]">All details from the card are presented in a professional, full-width website layout.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.03 }} className="group rounded-[1.7rem] border border-[#ead8c0] bg-white p-6 shadow-lg shadow-[#8b5e3c]/5 transition hover:-translate-y-1 hover:border-[#c69c6d] hover:shadow-xl hover:shadow-[#8b5e3c]/10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1dfc8] text-[#8b5e3c] transition group-hover:bg-[#8b5e3c] group-hover:text-white">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-[#2d2118]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6c5643]">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="w-full bg-[#f4e6d4] px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 max-w-3xl">
            <p className="font-black uppercase tracking-[0.35em] text-[#8b5e3c]">Visual Experience</p>
            <h2 className="mt-3 text-4xl font-black text-[#2d2118] md:text-5xl">Modern Automation Look & Feel</h2>
            <p className="mt-4 text-[#604b39]">A premium visual style suitable for home security, CCTV, solar installation, and smart automation service websites.</p>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {gallery.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-[2rem] border-[8px] border-white bg-white shadow-xl shadow-[#8b5e3c]/10">
                <img src={item.image} alt={item.title} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#2d2118]">{item.title}</h3>
                  <p className="mt-2 text-[#6c5643]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="w-full bg-[#fffaf2] px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2.5rem] border-[10px] border-white shadow-2xl shadow-[#8b5e3c]/10">
            <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80" alt="Modern smart building" className="h-[560px] w-full object-cover" />
          </div>
          <div>
            <p className="font-black uppercase tracking-[0.35em] text-[#8b5e3c]">About Us</p>
            <h2 className="mt-3 text-4xl font-black text-[#2d2118] md:text-5xl">Making everyday spaces safer, smarter, and easier to control</h2>
            <p className="mt-6 text-lg leading-8 text-[#604b39]">
              ThinkSecure Lab provides installation and service for home security and automation systems. These solutions improve safety, reduce manual work, save energy, and make devices easier to manage.
            </p>
            <div className="mt-7 grid gap-4">
              {whyChoose.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#ead8c0] bg-white p-4 shadow-sm">
                  <CheckCircle2 className="shrink-0 text-[#8b5e3c]" />
                  <p className="font-bold text-[#5b4634]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full bg-[#2d2118] px-5 py-24 text-white sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.35em] text-[#d8b995]">Contact Details</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">ThinkSecure Lab</h2>
            <p className="mt-5 text-lg leading-8 text-[#ead8c0]">
              For home security, CCTV, gate automation, solar installation, and customized automation service, contact ThinkSecure Lab using the details below.
            </p>
          </div>
          <div className="space-y-4">
            <a href={`tel:${phoneOne}`} className="flex items-center gap-4 rounded-2xl bg-[#fffaf2] p-5 font-black text-[#2d2118] transition hover:bg-white">
              <Phone className="text-[#8b5e3c]" /> {phoneOne}
            </a>
            <a href={`tel:${phoneTwo}`} className="flex items-center gap-4 rounded-2xl bg-[#fffaf2] p-5 font-black text-[#2d2118] transition hover:bg-white">
              <Phone className="text-[#8b5e3c]" /> {phoneTwo}
            </a>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noreferrer" className="flex items-start gap-4 rounded-2xl bg-[#fffaf2] p-5 font-black text-[#2d2118] transition hover:bg-white">
              <MapPin className="mt-1 shrink-0 text-[#8b5e3c]" /> {address}
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#fbf4e8] px-6 py-8 text-center text-sm font-bold text-[#6c5643]">
        © 2026 ThinkSecure Lab. Home Security & Automation Systems.
      </footer>
    </div>
  );
}