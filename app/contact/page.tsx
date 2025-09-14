export default function ContactPage() {
  return (
    <main className="bg-brand-900 text-neutral-100 min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-12 mt-10">
        {/* Contact Information */}
        <section>
          <h1 className="text-4xl font-bold text-mint-500 mb-6">
            Contact Us
          </h1>
          <div className="space-y-2 text-neutral-100">
            <p><span className="font-semibold">Address:</span>AddisAbeba, Kirkos, Woreda 01</p>
            <p><span className="font-semibold">Phone:</span> Insert Phone Number</p>
            <p><span className="font-semibold">Email:</span> Insert Email Address</p>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-3xl font-bold text-mint-500 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6 bg-brand-800 p-8 rounded-xl shadow-md">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-semibold text-neutral-100">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="p-3 rounded-md bg-brand-900 text-neutral-100 border border-brand-700 focus:outline-none focus:border-mint-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold text-neutral-100">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="p-3 rounded-md bg-brand-900 text-neutral-100 border border-brand-700 focus:outline-none focus:border-mint-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-semibold text-neutral-100">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your Message"
                className="p-3 rounded-md bg-brand-900 text-neutral-100 border border-brand-700 focus:outline-none focus:border-mint-500"
              />
            </div>

            <button
              type="submit"
              className="bg-mint-500 text-brand-900 font-semibold px-6 py-3 rounded-md hover:bg-mint-400 transition w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
