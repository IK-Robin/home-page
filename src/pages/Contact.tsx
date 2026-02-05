const Contact = () => {
  const states = [
    { name: "Arizona", url: "https://hoardingcleanup.com/steri_clean_arizona_hoarding_cleanup" },
    { name: "California", url: "https://hoardingcleanup.com/steri_clean_california" },
    { name: "Colorado", url: "https://hoardingcleanup.com/steri_clean_colorado" },
    { name: "Connecticut", url: "http://hoardingcleanup.com/steri_clean_connecticut" },
    { name: "Delaware", url: "https://hoardingcleanup.com/steri_clean_delaware_hoarding_clean_up" },
    { name: "Florida", url: "https://hoardingcleanup.com/steri_clean_florida/" },
    { name: "Georgia", url: "https://hoardingcleanup.com/steri_clean_georgia" },
    { name: "Idaho", url: "https://hoardingcleanup.com/idaho/" },
    { name: "Illinois", url: "https://hoardingcleanup.com/steri_clean_illinois" },
    { name: "Indiana", url: "https://hoardingcleanup.com/steri_clean_indiana" },
    { name: "Iowa", url: "https://hoardingcleanup.com/steri_clean_iowa/" },
    { name: "Kansas", url: "https://hoardingcleanup.com/steri_clean_kansas" },
    { name: "Kentucky", url: "https://hoardingcleanup.com/steri_clean1" },
    { name: "Maine", url: "https://hoardingcleanup.com/steri_clean_new_england/" },
    { name: "Maryland", url: "https://hoardingcleanup.com/steri_clean_maryland" },
    { name: "Massachusetts", url: "https://hoardingcleanup.com/steri_clean_massachusetts/" },
    { name: "Michigan", url: "https://hoardingcleanup.com/steri_clean_michigan" },
    { name: "Minnesota", url: "https://hoardingcleanup.com/steri_clean_minnesota/" },
    { name: "Missouri", url: "https://hoardingcleanup.com/steri_clean_missouri" },
    { name: "Nebraska", url: "https://hoardingcleanup.com/steri_clean_nebraska" },
    { name: "Nevada", url: "https://hoardingcleanup.com/steri-clean-las-vegas" },
    { name: "New Hampshire", url: "https://hoardingcleanup.com/steri_clean_new_england/" },
    { name: "New Jersey", url: "https://hoardingcleanup.com/steri_clean_new_jersey" },
    { name: "New York", url: "https://hoardingcleanup.com/steri_clean_new_york" },
    { name: "North Carolina", url: "https://hoardingcleanup.com/steri_clean_north_carolina" },
    { name: "Ohio", url: "https://hoardingcleanup.com/steri_clean_ohio" },
    { name: "Oregon", url: "https://hoardingcleanup.com/steri_clean_oregon" },
    { name: "Pennsylvania", url: "https://hoardingcleanup.com/steri_clean_pennsylvania" },
    { name: "Rhode Island", url: "https://hoardingcleanup.com/steri_clean_rhode_island" },
    { name: "South Carolina", url: "https://hoardingcleanup.com/steri_clean_south_carolina" },
    { name: "South Dakota", url: "https://hoardingcleanup.com/steri-clean-south-dakota/" },
    { name: "Texas", url: "https://hoardingcleanup.com/steri_clean_texas" },
    { name: "Utah", url: "https://hoardingcleanup.com/steri_clean_utah" },
    { name: "Vermont", url: "https://hoardingcleanup.com/steri_clean_new_england/" },
    { name: "Virginia", url: "https://hoardingcleanup.com/steri_clean_virginia" },
    { name: "Washington", url: "https://hoardingcleanup.com/steri_clean_washington" },
    { name: "West Virginia", url: "https://hoardingcleanup.com/steri-clean-west-virginia" },
  ];

  const navLinks = [
    { label: "Hoarding Help Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "National Resources", href: "/national-resources" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
    { label: "Hoarding Support Group", href: "/hoarding-support-group" },
    { label: "Message Board", href: "/message-board" },
    { label: "Help For Families", href: "/help-for-families" },
    { label: "Help For Hoarders", href: "/help-for-hoarders" },
    { label: "LINKS", href: "/links" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content - Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>

      {/* Top Bar */}
      <header className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-end text-sm gap-4">
            <a href="/site_map" className="hover:underline flex items-center gap-1" aria-label="Site map">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              site map
            </a>
            <a href="/contact" className="hover:underline flex items-center gap-1" aria-label="Contact us">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact
            </a>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
            HOARDING CLEANUP
          </h1>
          <p className="text-lg md:text-2xl mb-4 opacity-90">
            Nationwide Directory
          </p>
          <a 
            href="tel:1-800-462-7337" 
            className="inline-block text-2xl md:text-4xl font-bold hover:opacity-80 transition-opacity"
            aria-label="Call us at 800-462-7337"
          >
            (800) 462-7337
          </a>
        </div>
      </section>

      {/* Navigation Bar */}
      <nav className="bg-foreground text-background sticky top-0 z-40 shadow-lg" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-1 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={`block px-3 py-2 text-xs md:text-sm font-medium rounded transition-colors ${
                    link.href === "/contact" 
                      ? "bg-accent text-accent-foreground" 
                      : "hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Left Sidebar - Locations */}
          <aside className="lg:col-span-3 order-2 lg:order-1" aria-labelledby="locations-heading">
            <div className="bg-card rounded-xl shadow-lg p-5 sticky top-20">
              <h2 id="locations-heading" className="text-base font-bold text-primary text-center mb-4 leading-tight">
                Hoarding Cleanup Service<br />Steri-Clean Locations
              </h2>
              
              {/* Steri-Clean Logo */}
              <div className="mb-4">
                <img 
                  src="https://www.hoardingcleanup.com/i/u/10021204/i/Steri-Clean_Location_Header_Hoarding_Cleanup.png" 
                  alt="Steri-Clean - Restoring Homes and Lives" 
                  className="w-full"
                />
              </div>

              <nav aria-label="State locations">
                <ul className="space-y-0.5 text-sm max-h-[400px] overflow-y-auto">
                  {states.map((state) => (
                    <li key={state.name}>
                      <a 
                        href={state.url} 
                        className="block px-2 py-1 text-primary hover:bg-primary/10 rounded transition-colors"
                      >
                        {state.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              
              {/* Partner Logos */}
              <div className="mt-6 pt-4 border-t border-border space-y-3">
                <a href="http://1800hoarders.com" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <img 
                    src="https://www.hoardingcleanup.com/i/u/10021204/i/Hoarders.com_Click_Link.jpg" 
                    alt="Hoarders.com - Hoarding Experts, Cleanup, Sorting, Organizing, Training, Lectures, Planning" 
                    className="w-full rounded-lg border border-border"
                  />
                </a>
                <a href="http://challengingdisorganization.org" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <img 
                    src="https://www.hoardingcleanup.com/i/u/10021204/i/ICD.png" 
                    alt="Institute for Challenging Disorganization" 
                    className="w-full rounded-lg border border-border"
                  />
                </a>
                <a href="http://crimescenecleanupfranchise.com" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <img 
                    src="https://www.hoardingcleanup.com/i/u/10021204/i/Hoarding_Clean_Up_Help_2.png" 
                    alt="Hoarding/Biohazard Cleanup Franchise - All States Available - Click Here for Info" 
                    className="w-full rounded-lg"
                  />
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-6 order-1 lg:order-2">
            {/* Section Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-3 rounded-t-xl mb-6">
              <h2 className="text-lg font-semibold">Contact Us</h2>
            </div>

            {/* Trust Badge */}
            <div className="text-center mb-8">
              <img 
                src="http://challenge.livehelpnow.net/images/winner_images/2021/1.png" 
                alt="Live Help Now - Best Customer Service - Jan 2021" 
                className="mx-auto max-w-xs"
              />
              <p className="text-xl font-semibold text-primary mt-4">Click The Live Chat Button</p>
              <p className="text-lg text-accent">For Award Winning Customer Service</p>
            </div>

            {/* Hoarding Help Line */}
            <section className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">Hoarding Help Line</h3>
              <p className="text-xl md:text-2xl font-bold text-accent mb-4">
                <a href="tel:1-800-462-7337" className="hover:underline">(800) 462-7337</a> 7 Days a Week!
              </p>
              
              <h4 className="text-xl font-bold text-foreground underline mb-4">Daily Hours</h4>
              <div className="space-y-1 text-lg">
                <p>
                  <span className="font-bold text-primary">5:00AM - 5:00PM </span>
                  <span className="text-foreground">(PST)</span>
                </p>
                <p>
                  <span className="font-bold text-primary">6:00AM - 6:00PM </span>
                  <span className="text-foreground">(MST)</span>
                </p>
                <p>
                  <span className="font-bold text-primary">7:00AM - 7:00PM </span>
                  <span className="text-foreground">(CST)</span>
                </p>
                <p>
                  <span className="font-bold text-primary">8:00AM - 8:00PM </span>
                  <span className="text-foreground">(EST)</span>
                </p>
              </div>
            </section>

            {/* Company Info */}
            <div className="text-center mb-8 text-base">
              <p className="font-bold text-foreground">
                HoardingCleanup.com is run by:<br />
                Steri-Clean Inc. <a href="http://www.HOARDERS.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.HOARDERS.com</a>,
              </p>
              <p className="font-bold text-foreground">The Nations Leading Hoarding Cleanup Company</p>
            </div>

            {/* Contact Form Section */}
            <section className="bg-card rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">Contact Us Request Form</h3>
              <p className="text-sm text-muted-foreground text-right mb-4">* Mandatory fields</p>
              
              <form className="space-y-4" action="#" method="POST">
                <div>
                  <label htmlFor="name" className="sr-only">Your name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter your name *" 
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Your phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="Enter your phone" 
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Your email address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email address *" 
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Please enter address information of property needing cleaning. The local office of that address will contact you shortly.
                </p>
                
                <div>
                  <label htmlFor="address" className="sr-only">Your Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    placeholder="Enter your Address" 
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="sr-only">Your City</label>
                  <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    placeholder="Enter your City" 
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="sr-only">Your state</label>
                  <input 
                    type="text" 
                    id="state" 
                    name="state" 
                    placeholder="Enter your state" 
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="sr-only">Your zip</label>
                  <input 
                    type="text" 
                    id="zip" 
                    name="zip" 
                    placeholder="Enter your zip *" 
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="comments" className="sr-only">Your Comments/Questions</label>
                  <textarea 
                    id="comments" 
                    name="comments" 
                    placeholder="Your Comments/Questions here.." 
                    rows={4}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                  ></textarea>
                </div>
                
                <div className="flex gap-4 justify-center pt-4">
                  <button 
                    type="submit" 
                    className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    Save
                  </button>
                  <button 
                    type="reset" 
                    className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </section>
          </article>

          {/* Right Sidebar - Interactive Help */}
          <aside className="lg:col-span-3 order-3" aria-labelledby="interactive-help-heading">
            <div className="bg-card rounded-xl shadow-lg p-5 sticky top-20">
              <h2 id="interactive-help-heading" className="text-base font-bold text-primary text-center mb-4 leading-tight">
                Interactive Hoarding Help<br />Click Boxes Below
              </h2>

              {/* Interactive Help Links */}
              <div className="space-y-3">
                <a href="http://hoardingcleanup.com/message_board" className="block hover:opacity-80 transition-opacity">
                  <img 
                    src="https://www.hoardingcleanup.com/i/u/10021204/i/Message_Boards2.jpg" 
                    alt="Message Boards - Click Here" 
                    className="w-full rounded-lg border-2 border-border"
                  />
                </a>
                <a href="http://hoardingcleanup.com/chat_room" className="block hover:opacity-80 transition-opacity">
                  <img 
                    src="https://www.hoardingcleanup.com/i/u/10021204/i/Online_Support.png" 
                    alt="Online Support Group - Click Here" 
                    className="w-full rounded-lg border-2 border-border"
                  />
                </a>
                <a href="http://hoardingcleanup.com/webinars" className="block hover:opacity-80 transition-opacity">
                  <img 
                    src="https://www.hoardingcleanup.com/i/u/10021204/i/Hoarding_Webinars.png" 
                    alt="Hoarding Webinars - Click Here" 
                    className="w-full rounded-lg border-2 border-border"
                  />
                </a>
                <a href="http://hoardingcleanup.com/hoarders_tv_show" className="block hover:opacity-80 transition-opacity">
                  <img 
                    src="https://www.hoardingcleanup.com/zirw/1513095988160/i/u/10021204/i/Hoarders_Logo.png" 
                    alt="Hoarders TV Show - Apply Here Today" 
                    className="w-full"
                  />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <nav className="mb-6" aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-3 text-sm">
              <li><a href="/" className="hover:underline">Hoarding Help Home</a></li>
              <li className="opacity-50">|</li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li className="opacity-50">|</li>
              <li><a href="/national-resources" className="hover:underline">National Resources</a></li>
              <li className="opacity-50">|</li>
              <li><a href="/about-us" className="hover:underline">About Us</a></li>
              <li className="opacity-50">|</li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li className="opacity-50">|</li>
              <li><a href="/hoarding_support_group" className="hover:underline">Hoarding Support Group</a></li>
              <li className="opacity-50">|</li>
              <li><a href="/message-board" className="hover:underline">Message Board</a></li>
              <li className="opacity-50">|</li>
              <li><a href="/help-for-families" className="hover:underline">Help For Families</a></li>
              <li className="opacity-50">|</li>
              <li><a href="/help-for-hoarders" className="hover:underline">Help For Hoarders</a></li>
              <li className="opacity-50">|</li>
              <li><a href="/links" className="hover:underline">LINKS</a></li>
            </ul>
          </nav>
          <p className="text-sm opacity-80 mb-2">"Cleaning with Care and Compassion SM"</p>
          <p className="text-lg font-semibold mb-1">Hoarding Cleanup</p>
          <p className="text-sm opacity-80">Nationwide Hoarding Resources Directory</p>
          <p className="text-sm opacity-80 mt-4">Copyright 2009 - 2024 HoardingCleanup.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
