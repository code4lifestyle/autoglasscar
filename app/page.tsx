"use client"; // important for useState
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // inside  page component
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    if (!name || !phone || !email || !message) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const result = await emailjs.send(
        "service_0dlcdep", //EmailJS Service ID
        "template_lwze6y7", //EmailJS Template ID
        {
          user_name: name,
          user_email: email,
          user_phone: phone,
          message,
        },
        "ZG-km6DzpFrjbYTHL" //EmailJS Public Key
      );

      if (result.status === 200) {
        alert("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again later.");
    }
  };

  // our services
  const services = [
    {
      title: "Same-Day Windscreen Replacement",
      desc: "Complete windscreen replacement using high-quality glass with lifetime guarantee.",
      img: "/day.png",
      points: [
        "Brand New Glass",
        "Second-Hand Options",
        "Lifetime Guarantee",
        "Same Day Service",
      ],
    },
    {
      title: "Mobile Windscreen Service",
      desc: "We come to you! Professional mobile windscreen replacement at your location.",
      img: "/mobilw w.png",
      points: [
        "Home Service",
        "Office Service",
        "Roadside Service",
        "Convenient Scheduling",
      ],
    },
    {
      title: "High-Quality Glass & Guarantee",
      desc: "Premium quality glass installation with comprehensive lifetime guarantee.",
      img: "/high.png",
      points: [
        "OEM Quality Glass",
        "Lifetime Guarantee",
        "Expert Installation",
        "Quality Assured",
      ],
    },
  ];
  // Feature why choose us
  const features = [
    {
      icon: "🛠️",
      title: "Same Day Service",
      desc: "Most replacements completed within 2–4 hours",
    },
    {
      icon: "⚡",
      title: "Mobile Service",
      desc: "We come to your home, office, or anywhere convenient",
    },
    {
      icon: "💎",
      title: "Flexible Options",
      desc: "Brand new and second-hand glass options available",
    },
    {
      icon: "🚗",
      title: "Lifetime Guarantee",
      desc: "All our work comes with a comprehensive lifetime guarantee",
    },
  ];

  // Customer Reviews Data
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Birmingham",
      review:
        "Absolutely fantastic service! They came to my office within 2 hours of calling and replaced my windscreen while I was in meetings. Professional, efficient, and great value for money.",
      rating: "5.0",
      img: "sarah.png",
    },
    {
      name: "Mike Thompson",
      location: "Solihull",
      review:
        "Had a stone chip that turned into a crack overnight. AutoCar WindScreen  fixed it the same day and it's been perfect ever since. The technician was knowledgeable and explained everything clearly.",
      rating: "5.0",
      img: "Mike.png",
    },
    {
      name: "Emma Williams",
      location: "West Bromwich",
      review:
        "Needed a quick fix for my windscreen and they delivered exactly that. Professional service, lifetime guarantee, and very reasonable prices. Highly recommend!",
      rating: "5.0",
      img: "Emma.png",
    },
    {
      name: "David Brown",
      location: "Coventry",
      review:
        "Called them on a Sunday morning when my windscreen cracked badly. They were there within the hour and had me back on the road safely. Exceptional customer service!",
      rating: "5.0",
      img: "David.png",
    },
    {
      name: "Lisa Davis",
      location: "Dudley",
      review:
        "Third time using AutoCar WindScreen  over the years. Consistent quality, fair pricing, and always professional. They're my go-to for any Auto WindScreen  needs.",
      rating: "5.0",
      img: "Lisa.png",
    },
    {
      name: "James Wilson",
      location: "Walsall",
      review:
        "Competitive quote, same-day service, and lifetime guarantee. The technician was punctual and cleaned up perfectly after the job. Couldn't ask for better service.",
      rating: "5.0",
      img: "James.png",
    },
  ];

  return (
    <>
      {/* Navbar */}
      {/* COLLAPSIBLE NAVBAR */}
      <nav className="w-full bg-white/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-5 px-6">
        <div className="flex justify-between items-center">
          {/* Optional Logo */}
          <div className="text-xl font-bold text-gray-800">AutoCar WindScreen </div>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex flex-row gap-3 sm:gap-8 text-gray-800 font-medium">
            {[
              { name: "Home", href: "#home" },
              { name: "Services", href: "#services" },
              { name: "About", href: "#about" },
              { name: "Reviews", href: "#reviews" },
              { name: "Contact", href: "#contact" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block px-4 py-2 rounded-full border border-gray-200 transition-all duration-300 ease-in-out cursor-pointer hover:border-gray-400 hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <svg
              className="w-7 h-7 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Collapsible) */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col w-full bg-white border-t border-gray-200">
            {[
              { name: "Home", href: "#home" },
              { name: "Services", href: "#services" },
              { name: "About", href: "#about" },
              { name: "Reviews", href: "#reviews" },
              { name: "Contact", href: "#contact" },
            ].map((item, index) => (
              <li
                key={index}
                className="w-full border-b border-gray-100 last:border-b-0"
              >
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center py-4 text-gray-800 font-medium transition-all duration-200 hover:bg-gray-50 hover:text-blue-600"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero sectioon  */}
      <div
        id="home"
        className="bg-white  min-h-[87vh] mx-auto flex items-center justify-center px-5 sm:px-16 py-0"
      >
        <div className="max-w-full w-full grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-yellow-400 text-lg">★★★★★</div>
              <p className="text-gray-700 text-sm">5.0 Rating • 500+ Reviews</p>
            </div>

            {/* Title */}
            <h1 className="text-[2rem] sm:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
              Fast, Reliable <span className="">Auto WindScreen </span> Repair Service
            </h1>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Restore your view today with quality service and expert
              technicians. Same-day windscreen replacement in Birmingham with
              lifetime guarantee.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://wa.me/07466332215?text=Hi%20I%20need%20a%20quick%20windscreen%20repair!" // 👈 replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#3D3E42] hover:bg-[#53545a] text-white font-semibold px-5 py-3 rounded-md shadow-md transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5L19.5 6.75m0 0L23.25 10.5M19.5 6.75V18"
                  />
                </svg>
                Chat Now for Quick Fix
              </a>
              <a href="#contact" className="scroll-smooth">
                <button className="border border-[#3D3E42] text-[#3D3E42] hover:bg-[#53545a] hover:text-white font-semibold px-5 py-3 rounded-md shadow-md transition">
                  Book Now
                </button>
              </a>
            </div>

            {/* Service Icons */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <div className="text-green-500 text-2xl">✔</div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Same Day
                  </p>
                  <p className="text-xs text-gray-600">Service Available</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="text-green-500 text-2xl">🏅</div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Lifetime
                  </p>
                  <p className="text-xs text-gray-600">Guarantee</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="text-[#3D3E42] text-2xl">📱</div>
                <div>
                  <p className="text-sm font-semibold text-[#3D3E42]">Mobile</p>
                  <p className="text-xs text-[#3D3E42]">Service Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="bg-gray-50 shadow-lg rounded-2xl overflow-hidden p-5">
            <div>
              <Image
                src="/heroo.png"
                alt="Mechanic working"
                width={500}
                height={300}
                className="rounded-xl mx-auto object-cover "
              />
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900">
                Get Instant Quote
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Fast, reliable, professional service
              </p>
              <a
                href="tel:+447466332215"
                className="bg-[#3D3E42] hover:bg-[#53545a] text-white font-semibold px-4 py-2 rounded-full shadow-md"
              >
                Call Now: 07466 332215
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Our Servise  */}
      <section id="services" className="bg-white pt-20 pb-14  px-5 sm:px-16">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            Fast, reliable Auto WindScreen  repair services with expert technicians.
            Quality service you can trust for all your windscreen needs.
          </p>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                  <ul className="space-y-2 text-gray-700 text-sm mb-6">
                    {service.points.map((p, i) => (
                      <li key={i}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose Us  */}
      <section id="" className="bg-white  py-10 px-5 sm:px-16">
        <div className="max-w-full mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-900 mb-12 mx-auto">
            Why Choose Auto Car WindScreen Ltd?
          </h2>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gray-50 shadow-sm hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us  */}
      <section
        id="about"
        className="bg-white py-20 px-5 sm:px-16 flex flex-col justify-center"
      >
        <div className="mx-auto max-w-7xl xl:max-w-fit grid md:grid-cols-2 gap-6 items-stretch">
          {/* Left Box */}
          <div className="bg-gray-50 rounded-2xl p-10 shadow-md flex flex-col justify-between text-left h-full">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                About Auto Car WindScreen Ltd
              </h1>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Based in Birmingham, Auto Car WindScreen Ltd provides fast, reliable
                windscreen repair and replacement using premium glass to suit
                any budget. Our certified technicians offer same-day mobile
                service across the region, backed by a lifetime guarantee for
                your safety and peace of mind.
              </p>
              <div className="flex items-center mb-6">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  ● Available for work
                </span>
              </div>
            </div>
            <button className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300">
              Book a call with me
            </button>
          </div>

          {/* Right Box */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md flex items-center justify-center h-full">
            <img
              src="/about.png"
              alt="Creative workspace"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* what our customer says  */}

      <section
        id="reviews"
        className="bg-white w-full pt-20 pb-16 px-5 sm:px-10 overflow-hidden"
      >
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-black text-4xl font-semibold">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 mt-2 text-sm tracking-wide uppercase">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our service.
          </p>
        </div>
        <div className="w-full flex justify-center py-0 relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerGroup={1}
            centeredSlides={false}
            slidesOffsetBefore={0}
            slidesOffsetAfter={0}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full max-w-6xl pb-12"
            style={{
              overflow: "hidden",
              paddingTop: "3rem",
              paddingBottom: "3.5rem",
              minHeight: "480px", // keep Swiper tall so avatar visible
            }}
          >
            {reviews.map((card, i) => (
              <SwiperSlide
                key={i}
                className="flex justify-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "stretch",
                }}
              >
                <div
                  className="bg-gray-50 rounded-2xl pt-16 pb-0 px-5 text-center shadow-md w-full max-w-xs relative transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    minHeight: "280px",
                    maxHeight: "340px", 
                  }}
                >
                  {/* Profile Image */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
                    <img
                      src={card.img}
                      alt={card.name}
                      className="w-20 h-20 rounded-full border-4 border-gray-700 object-cover bg-white"
                    />
                  </div>

                  <p className="text-sm my-4 leading-relaxed">
                    "{card.review}"
                  </p>
                  <h4 className="font-semibold mb-1">{card.name}</h4>
                  <p className="text-gray-500 text-sm mb-2">{card.location}</p>

                  <div className="flex justify-center items-center mt-2">
                    <span className="text-yellow-400 font-bold text-base">
                      {card.rating}
                    </span>
                    <span className="text-yellow-400 text-lg ml-1">★</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Scoped Global Styles */}
          <style jsx global>{`
            .swiper-pagination {
              margin-top: 1rem !important;
              text-align: center !important;
            }

            .swiper-pagination-bullet {
              background: #d1d5db !important;
              opacity: 1 !important;
              transition: background 0.3s ease, transform 0.3s ease;
            }

            .swiper-pagination-bullet-active {
              background: #3d3e42 !important;
              transform: scale(1.2);
            }
          `}</style>
        </div>
      </section>
      {/* Contact Us  */}

      <section id="contact" className="bg-white py-20 px-5 sm:px-16">
        <div className="mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Map */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.89318907131!2d-0.12775800792082856!3d51.507351005119705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce2f56d7a9%3A0xdeb8a7f6b7e2f6b7!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1730170800000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          {/* Right Form */}
          <div className="bg-gray-50 p-10 rounded-2xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#515255] mb-6">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#777981] focus:ring-1 focus:ring-[#777981] outline-none transition"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#777981] focus:ring-1 focus:ring-[#777981] outline-none transition"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#777981] focus:ring-1 focus:ring-[#777981] outline-none transition"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#777981] focus:ring-1 focus:ring-[#777981] outline-none transition resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#3D3E42] hover:bg-[#52545a] text-white font-semibold py-3 shadow-md transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer  */}
      <div className="bg-[#1A1A1A] text-gray-300 py-10 px-5 sm:px-16">
        <div className=" mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Left Section (Logo and Description) */}
          <div className="md:w-1/2">
            <div className="text-3xl font-bold text-white mb-3">
              Auto Car WindScreen Ltd
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Fast, reliable Auto WindScreen  repair - restore your view today.
              Quality service and expert technicians serving Birmingham and
              surrounding areas..
            </p>
          </div>

          {/* Right Section (Contact Info) */}
          <div className="md:w-1/2 md:text-right">
            <div className="text-[#FACC15] text-sm font-semibold mb-2 tracking-wide">
              CONTACT
            </div>
            <p className="text-gray-400 text-sm mb-1">📞 07466 332215</p>
            <p className="text-gray-400 text-sm mb-1">
              ✉️ info@AutoCarWindScreen .co.uk
            </p>
            <p className="text-gray-400 text-sm">
              📍 74 The Radleys B33 OQX Birmingham
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Auto Car WindScreen Ltd. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default page;
