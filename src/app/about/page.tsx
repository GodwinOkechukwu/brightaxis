// import AppLayout from "@src/components/AppLayout";
// import Picture from "@src/components/picture/Picture";
// import { homeImage1 } from "@public/images";
// import Link from "next/link";

// const STATS = [
//   { value: "500+", label: "Products" },
//   { value: "40+", label: "Categories" },
//   { value: "10k+", label: "Happy Clients" },
//   { value: "5+", label: "Years Experience" },
// ];

// const VALUES = [
//   {
//     icon: "◈",
//     title: "Quality First",
//     description:
//       "Every product we stock is vetted for build quality, reliability, and performance. We only sell hardware we'd use ourselves.",
//   },
//   {
//     icon: "⬡",
//     title: "Customer Obsessed",
//     description:
//       "From browsing to delivery, we obsess over every touchpoint. Our support team is always on hand to help you make the right choice.",
//   },
//   {
//     icon: "✦",
//     title: "Trusted in Nigeria",
//     description:
//       "As a proud Nigerian distributor, we understand local needs. Fast nationwide delivery and local after-sales support set us apart.",
//   },
//   {
//     icon: "◉",
//     title: "Always Innovating",
//     description:
//       "We continuously expand our catalogue with the latest technology — so you're always ahead of the curve.",
//   },
// ];

// const TEAM = [
//   { name: "Godwin Eze", role: "Founder & CEO" },
//   { name: "Adaeze Obi", role: "Head of Operations" },
//   { name: "Emeka Nwosu", role: "Sales Director" },
// ];

// const page = () => {
//   return (
//     <AppLayout>
//       <main className="bg-[#0a0a0a] text-white mt-20 md:mt-24 overflow-x-hidden">

//         {/* ── Hero ── */}
//         <section className="relative w-full">
//           <Picture
//             src={heroBg}
//             alt="BrightAxis Limited"
//             className="w-full h-[460px] block"
//           />
//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 "linear-gradient(135deg, rgba(60,10,90,0.55) 0%, rgba(20,5,40,0.45) 50%, rgba(10,10,20,0.75) 100%)",
//             }}
//             aria-hidden="true"
//           />
//           <div
//             className="absolute bottom-0 left-0 right-0 h-1/2"
//             style={{ background: "linear-gradient(to top, #0a0a0a, transparent)" }}
//             aria-hidden="true"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
//             <p className="text-xs font-semibold tracking-[0.25em] uppercase text-pink-500 mb-4">
//               Our Story
//             </p>
//             <h1
//               className="text-white font-extrabold leading-tight tracking-tight"
//               style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
//             >
//               Nigeria's Home for
//               <br />
//               Premium Tech
//             </h1>
//             <p className="mt-4 text-[#aaa] text-sm sm:text-base max-w-lg leading-relaxed">
//               Trusted distributor of computer hardware and digital technology
//               solutions — built for businesses, gamers, creators, and students.
//             </p>
//           </div>
//         </section>

//         {/* ── Stats ── */}
//         <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
//           {STATS.map((s) => (
//             <div
//               key={s.label}
//               className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/[0.07] bg-[#111]"
//             >
//               <span className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
//                 {s.value}
//               </span>
//               <span className="text-xs text-[#666] tracking-widest uppercase">
//                 {s.label}
//               </span>
//             </div>
//           ))}
//         </section>

//         {/* ── Who We Are ── */}
//         <section className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div>
//             <p className="text-xs font-semibold tracking-[0.2em] uppercase text-pink-500 mb-3">
//               Who We Are
//             </p>
//             <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5">
//               Welcome to
//               <br />
//               BrightAxis
//               <br />
//               Innovations
//             </h2>
//             <p className="text-[#888] text-sm leading-[1.9] mb-4">
//               BrightAxis Limited is a trusted distributor of premium
//               computer hardware and digital technology solutions in Nigeria. We
//               provide a wide range of high-performance gadgets and IT equipment
//               designed to support businesses, gamers, creators, students, and
//               tech enthusiasts across the country.
//             </p>
//             <p className="text-[#888] text-sm leading-[1.9]">
//               From cutting-edge laptops and gaming accessories to CCTV security
//               systems and smart gadgets — everything we carry is built for
//               productivity, performance, and innovation.
//             </p>
//           </div>

//           {/* Product categories checklist */}
//           <div className="flex flex-col gap-3">
//             {[
//               "Laptops & Desktop Computers",
//               "Gaming Accessories",
//               "Computer Components",
//               "Networking Devices",
//               "Office Tech Equipment",
//               "Monitors, Keyboards & Mice",
//               "Printers & Storage Devices",
//               "CCTV & Security Systems",
//               "Smart Gadgets & Digital Accessories",
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/[0.06] bg-[#111] text-sm text-[#ccc]"
//               >
//                 <span className="text-pink-500 flex-shrink-0">✦</span>
//                 {item}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ── Our Values ── */}
//         <section className="bg-[#0d0d0d] py-20 px-6">
//           <div className="max-w-5xl mx-auto">
//             <div className="text-center mb-12">
//               <p className="text-xs font-semibold tracking-[0.2em] uppercase text-pink-500 mb-3">
//                 What Drives Us
//               </p>
//               <h2 className="text-3xl sm:text-4xl font-extrabold">Our Values</h2>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               {VALUES.map((v) => (
//                 <div
//                   key={v.title}
//                   className="p-7 rounded-2xl border border-white/[0.07] bg-[#111] flex gap-5 items-start"
//                 >
//                   <span className="text-2xl text-pink-500 flex-shrink-0 mt-0.5">
//                     {v.icon}
//                   </span>
//                   <div>
//                     <h3 className="text-white font-bold text-base mb-2">{v.title}</h3>
//                     <p className="text-[#777] text-sm leading-relaxed">{v.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── CTA ── */}
//         <section className="px-6 pb-24">
//           <div
//             className="max-w-4xl mx-auto rounded-3xl border border-[rgba(201,169,110,0.2)] px-8 py-16 text-center relative overflow-hidden"
//             style={{ background: "linear-gradient(135deg, #1a1610 0%, #16161a 60%)" }}
//           >
//             <div
//               className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none"
//               style={{
//                 background:
//                   "radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)",
//               }}
//               aria-hidden="true"
//             />
//             <p className="relative text-xs font-semibold tracking-[0.2em] uppercase text-pink-500 mb-4">
//               Ready to Shop?
//             </p>
//             <h2 className="relative text-3xl sm:text-4xl font-extrabold leading-tight mb-3">
//               Explore Our Full
//               <br />
//               Product Range
//             </h2>
//             <p className="relative text-[#777] text-sm mb-8 max-w-sm mx-auto">
//               Hundreds of products across every category — all backed by our
//               quality guarantee and local support.
//             </p>
//             <Link
//               href="/category"
//               className="relative inline-flex items-center gap-2 no-underline bg-white text-black font-bold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-pink-500 transition-all duration-300"
//             >
//               Shop Now
//             </Link>
//           </div>
//         </section>

//       </main>
//     </AppLayout>
//   );
// };

// export default page;

import AppLayout from "@src/components/AppLayout";
import Picture from "@src/components/picture/Picture";
import { homeImage1 } from "@public/images";
import Link from "next/link";

const STATS = [
  { value: "500+", label: "Products" },
  { value: "40+", label: "Categories" },
  { value: "10k+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
];

const VALUES = [
  {
    title: "Quality First",
    description:
      "Every product we stock is carefully selected for reliability, durability, and performance.",
  },
  {
    title: "Customer Focused",
    description:
      "We provide seamless shopping experiences with fast support and trusted service.",
  },
  {
    title: "Nationwide Reach",
    description:
      "Fast delivery and dependable after-sales support across Nigeria.",
  },
  {
    title: "Modern Technology",
    description:
      "We continuously update our catalog with the latest gadgets and hardware.",
  },
];

const CATEGORIES = [
  "Laptops & Desktop Computers",
  "Gaming Accessories",
  "Computer Components",
  "Networking Devices",
  "Office Tech Equipment",
  "Monitors & Displays",
  "Printers & Storage Devices",
  "CCTV & Security Systems",
];

const page = () => {
  return (
    <AppLayout>
      <main className="bg-white text-[#2F2F2F] mt-20 md:mt-24 overflow-x-hidden">
        {/* HERO */}
        <section className="relative px-4 sm:px-6 lg:px-10 pt-6">
          <div className="relative overflow-hidden rounded-[32px]">
            <Picture
              src={homeImage1}
              alt="BrightAxis Limited"
              className="w-full h-[500px] sm:h-[600px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <span className="bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-6">
                About Us
              </span>

              <h1 className="text-white font-black leading-[1] tracking-tight text-4xl sm:text-6xl lg:text-7xl max-w-5xl">
                Premium Hardware
                <br />
                Solutions For
                <br />
                Modern Technology
              </h1>

              <p className="mt-6 max-w-2xl text-sm sm:text-base text-gray-200 leading-relaxed">
                Trusted distributor of high-performance computer hardware,
                accessories, and digital technology solutions across Nigeria.
              </p>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {STATS.map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] border border-gray-200 bg-[#fafafa] p-8 text-center"
              >
                <h2 className="text-4xl sm:text-5xl font-black text-[#2F2F2F]">
                  {item.value}
                </h2>

                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-gray-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT */}
            <div>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400">
                Who We Are
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-black leading-tight">
                Welcome to
                <br />
                BrightAxis
                <br />
                Innovations
              </h2>

              <p className="mt-6 text-base leading-[2] text-gray-600">
                BrightAxis Limited is a trusted distributor of premium computer
                hardware and digital technology solutions in Nigeria. We provide
                high-performance gadgets and IT equipment designed for
                businesses, creators, gamers, students, and professionals.
              </p>

              <p className="mt-5 text-base leading-[2] text-gray-600">
                From cutting-edge laptops and gaming accessories to networking
                systems and smart gadgets — our products are built for
                productivity, innovation, and performance.
              </p>

              <Link
                href="/category"
                className="inline-flex mt-8 items-center justify-center rounded-full bg-[#2F2F2F] text-white px-8 py-4 text-sm font-semibold hover:bg-black transition-all duration-300 no-underline"
              >
                Explore Products
              </Link>
            </div>

            {/* RIGHT */}
            <div className="grid gap-4">
              {CATEGORIES.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-[#fafafa] px-6 py-5"
                >
                  <div className="h-3 w-3 rounded-full bg-[#2F2F2F]" />

                  <p className="text-sm sm:text-base font-medium text-[#2F2F2F]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-[#f8f8f8] py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400">
                Why Choose Us
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-black text-[#2F2F2F]">
                Our Core Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {VALUES.map((value, index) => (
                <div
                  key={value.title}
                  className="rounded-[28px] bg-white border border-gray-200 p-8"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-3xl font-black text-gray-300">
                      0{index + 1}
                    </span>

                    <div className="h-[1px] flex-1 bg-gray-200" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#2F2F2F] mb-4">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-[1.9]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-10 py-24">
          <div className="max-w-5xl mx-auto rounded-[40px] bg-[#2F2F2F] overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <Picture
                src={homeImage1}
                alt="CTA Background"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 px-8 py-20 text-center">
              <span className="text-sm tracking-[0.2em] uppercase text-gray-300">
                Ready To Shop?
              </span>

              <h2 className="mt-5 text-4xl sm:text-5xl font-black text-white leading-tight">
                Explore Our Full
                <br />
                Product Collection
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-gray-300 leading-relaxed">
                Discover premium hardware, smart gadgets, accessories, and
                digital technology solutions tailored for your lifestyle and
                business needs.
              </p>

              <Link
                href="/category"
                className="inline-flex mt-10 items-center justify-center rounded-full bg-white text-[#2F2F2F] px-8 py-4 text-sm font-bold hover:bg-gray-200 transition-all duration-300 no-underline"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
};

export default page;
