export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* =========================
          NAVBAR
      ========================= */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-8 py-5">
        <div className="text-xl font-bold tracking-tight">
          🌎 My Web Worlds
        </div>

        <div className="flex items-center gap-8 text-sm font-medium">
  <a href="#home" className="hover:text-gray-500 transition">
  Home
</a>

  <a href="#products" className="hover:text-gray-500">
    Products
  </a>

  <a href="#about" className="hover:text-gray-500">
    About
  </a>

  <a href="#contact" className="hover:text-gray-500">
    Contact
  </a>
</div>
      </nav>

      {/* =========================
          HERO SECTION
      ========================= */}
      <section id="home" className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Quality. Simple. Useful.
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Travel Smarter.
              <br />
              Travel Better.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Premium travel accessories and essentials designed for modern explorers.
            </p>

            <div className="mt-8 flex gap-4">
              <a
  href="#products"
  className="rounded-full bg-black px-7 py-3 font-medium text-white hover:bg-gray-800"
>
  Explore Collection
</a>

              <a
  href="#products"
  className="rounded-full border border-gray-300 px-7 py-3 font-medium hover:bg-gray-100"
>
  Explore Products
</a>
            </div>
          </div>

          <div>
            <div className="flex h-[420px] items-center justify-center rounded-3xl bg-gray-100">

              <div className="text-center">

                <div className="mx-auto mb-5 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
                  <span className="text-4xl">✦</span>
                </div>

                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                  Your Next Favorite
                </p>

                <p className="mt-2 text-2xl font-bold">
                  Starts Here
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>

{/* =========================
          SHOP BY CATEGORY
      ========================= */}
<section id="categories" className="px-8 py-24 bg-white">
  <div className="mx-auto max-w-7xl">

    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
        Browse Categories
      </p>
      <h2 className="mt-3 text-4xl font-bold">
        Shop By Category
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-600">
        Explore our carefully selected collection across multiple categories.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-4">

      <div className="rounded-3xl bg-gray-50 p-8 text-center hover:shadow-lg transition">
        <div className="text-5xl">🌍</div>
        <h3 className="mt-4 text-xl font-bold">Travel</h3>
        <p className="mt-2 text-gray-600">
          Smart travel essentials and accessories.
        </p>
      </div>

      <div className="rounded-3xl bg-gray-50 p-8 text-center hover:shadow-lg transition">
        <div className="text-5xl">🏠</div>
        <h3 className="mt-4 text-xl font-bold">Home & Kitchen</h3>
        <p className="mt-2 text-gray-600">
          Useful products for everyday living.
        </p>
      </div>

      <div className="rounded-3xl bg-gray-50 p-8 text-center hover:shadow-lg transition">
        <div className="text-5xl">🎁</div>
        <h3 className="mt-4 text-xl font-bold">Gifts</h3>
        <p className="mt-2 text-gray-600">
          Thoughtful gifts for every occasion.
        </p>
      </div>

      <div className="rounded-3xl bg-gray-50 p-8 text-center hover:shadow-lg transition">
        <div className="text-5xl">📦</div>
        <h3 className="mt-4 text-xl font-bold">Organizers</h3>
        <p className="mt-2 text-gray-600">
          Keep your home and travel items organized.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* =========================
          FEATURED PRODUCTS
      ========================= */}
      <section id="products" className="bg-gray-50 px-8 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Shop Our Selection
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Featured Products
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Discover products carefully selected for quality, usefulness and everyday living.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {/* =========================
          PRODUCT 1
      ========================= */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200">

              <img
                src="/backpack.jpg"
                alt="Travel Backpack"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Travel Gear
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Travel Backpack
                </h3>

                <p className="mt-3 text-gray-600">
                  Spacious lightweight backpack designed for daily travel.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xl font-bold">
                    ₹1999
                  </p>

                  <button className="rounded-full bg-black px-5 py-2 text-sm text-white">
                    Add to Cart
                  </button>
                </div>

              </div>
            </div>

            {/* =========================
          PRODUCT 2
      ========================= */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200">

              <img
                src="/passport-wallet.jpg"
                alt="Passport Wallet"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Travel Essentials
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Passport Wallet
                </h3>

                <p className="mt-3 text-gray-600">
                  Keep travel documents organized in one place.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xl font-bold">
                    ₹599
                  </p>

                  <button className="rounded-full bg-black px-5 py-2 text-sm text-white">
                    Add to Cart
                  </button>
                </div>

              </div>
            </div>

            {/* =========================
          PRODUCT 3
      ========================= */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200">

              <img
                src="/organizer-kit.jpg"
                alt="Travel Organizer Kit"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Accessories
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Travel Organizer Kit
                </h3>

                <p className="mt-3 text-gray-600">
                  Organize cables, chargers and travel accessories.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xl font-bold">
                    ₹899
                  </p>

                  <button className="rounded-full bg-black px-5 py-2 text-sm text-white">
                    Add to Cart
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          WHY CHOOSE US
      ========================= */}
      <section id="why-us" className="px-8 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Travel Made Easier
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Thoughtfully selected travel accessories for modern travelers.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-gray-50 p-8 text-center">
              <div className="text-5xl">✈️</div>

              <h3 className="mt-5 text-xl font-bold">
                Travel Ready
              </h3>

              <p className="mt-3 text-gray-600">
                Perfect for vacations and business trips.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-8 text-center">
              <div className="text-5xl">🎒</div>

              <h3 className="mt-5 text-xl font-bold">
                Premium Quality
              </h3>

              <p className="mt-3 text-gray-600">
                Durable products built for everyday use.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-8 text-center">
              <div className="text-5xl">🌎</div>

              <h3 className="mt-5 text-xl font-bold">
                Worldwide Travel
              </h3>

              <p className="mt-3 text-gray-600">
                Suitable for travelers across the globe.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          ABOUT US
      ========================= */}
<section id="about" className="px-8 py-24">
  <div className="mx-auto max-w-4xl text-center">

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
      About Us
    </p>

    <h2 className="mt-3 text-4xl font-bold">
      Designed For Modern Travelers
    </h2>

    <p className="mt-6 text-lg leading-8 text-gray-600">
      We believe travel should be simple, organized and stress-free.
      Our carefully selected travel accessories help travelers stay
      prepared wherever their journey takes them.
    </p>

  </div>
</section>

{/* =========================
          CONTACT SECTION
      ========================= */}
<section id="contact" className="bg-gray-50 px-8 py-24">
  <div className="mx-auto max-w-4xl text-center">

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
      Contact Us
    </p>

    <h2 className="mt-3 text-4xl font-bold">
      Get In Touch
    </h2>

    <p className="mt-6 text-gray-600">
      Email: hello@mywebworlds.com
    </p>

    <p className="mt-2 text-gray-600">
      Phone: +91 98765 43210
    </p>

  </div>
</section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer className="border-t px-8 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

          <p className="font-semibold">
            🌎 My Web Worlds
          </p>

          <p className="text-sm text-gray-500">
            © 2026 🌎 My Web Worlds. All rights reserved.
          </p>

        </div>

      </footer>
<a
  href="https://wa.me/919594568470"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
>
  WhatsApp Us
</a>
    </main>
  );
}