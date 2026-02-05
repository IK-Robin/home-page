const NationalResources = () => {
  const stateLocations = [
    { name: "Arizona", href: "https://hoardingcleanup.com/steri_clean_arizona_hoarding_cleanup" },
    { name: "California", href: "https://hoardingcleanup.com/steri_clean_california" },
    { name: "Colorado", href: "https://hoardingcleanup.com/steri_clean_colorado" },
    { name: "Connecticut", href: "http://hoardingcleanup.com/steri_clean_connecticut" },
    { name: "Delaware", href: "https://hoardingcleanup.com/steri_clean_delaware_hoarding_clean_up" },
    { name: "Florida", href: "https://hoardingcleanup.com/steri_clean_florida/" },
    { name: "Georgia", href: "https://hoardingcleanup.com/steri_clean_georgia" },
    { name: "Idaho", href: "https://hoardingcleanup.com/idaho/" },
    { name: "Illinois", href: "https://hoardingcleanup.com/steri_clean_illinois" },
    { name: "Indiana", href: "https://hoardingcleanup.com/steri_clean_indiana" },
    { name: "Iowa", href: "https://hoardingcleanup.com/steri_clean_iowa/" },
    { name: "Kansas", href: "https://hoardingcleanup.com/steri_clean_kansas" },
    { name: "Kentucky", href: "https://hoardingcleanup.com/steri_clean1" },
    { name: "Maine", href: "https://hoardingcleanup.com/steri_clean_new_england/" },
    { name: "Maryland", href: "https://hoardingcleanup.com/steri_clean_maryland" },
    { name: "Massachusetts", href: "https://hoardingcleanup.com/steri_clean_massachusetts/" },
    { name: "Michigan", href: "https://hoardingcleanup.com/steri_clean_michigan" },
    { name: "Minnesota", href: "https://hoardingcleanup.com/steri_clean_minnesota/" },
    { name: "Missouri", href: "https://hoardingcleanup.com/steri_clean_missouri" },
    { name: "Nebraska", href: "https://hoardingcleanup.com/steri_clean_nebraska" },
    { name: "Nevada", href: "https://hoardingcleanup.com/steri-clean-las-vegas" },
    { name: "New Hampshire", href: "https://hoardingcleanup.com/steri_clean_new_england/" },
    { name: "New Jersey", href: "https://hoardingcleanup.com/steri_clean_new_jersey" },
    { name: "New York", href: "https://hoardingcleanup.com/steri_clean_new_york" },
    { name: "North Carolina", href: "https://hoardingcleanup.com/steri_clean_north_carolina" },
    { name: "Ohio", href: "https://hoardingcleanup.com/steri_clean_ohio" },
    { name: "Oregon", href: "https://hoardingcleanup.com/steri_clean_oregon" },
    { name: "Pennsylvania", href: "https://hoardingcleanup.com/steri_clean_pennsylvania" },
    { name: "Rhode Island", href: "https://hoardingcleanup.com/steri_clean_rhode_island" },
    { name: "South Carolina", href: "https://hoardingcleanup.com/steri_clean_south_carolina" },
    { name: "South Dakota", href: "https://hoardingcleanup.com/steri-clean-south-dakota/" },
    { name: "Texas", href: "https://hoardingcleanup.com/steri_clean_texas" },
    { name: "Utah", href: "https://hoardingcleanup.com/steri_clean_utah" },
    { name: "Vermont", href: "https://hoardingcleanup.com/steri_clean_new_england/" },
    { name: "Virginia", href: "https://hoardingcleanup.com/steri_clean_virginia" },
    { name: "Washington", href: "https://hoardingcleanup.com/steri_clean_washington" },
    { name: "West Virginia", href: "https://hoardingcleanup.com/steri-clean-west-virginia" },
  ];

  const navItems = [
    { label: "HOARDING HELP HOME", href: "/", alt: "Hoarding Cleanup, Help for Hoarders, Nationwide Hoarding Help" },
    { label: "SERVICES", href: "/services", alt: "Hoarding Clean up" },
    { label: "NATIONAL RESOURCES", href: "/national-resources", alt: "National Resources", active: true },
    { label: "ABOUT US", href: "/about-us", alt: "About Hoarding Cleanup, Clutter Cleanup" },
    { label: "CONTACT", href: "/contact", alt: "Hoarding Cleanup, Clutter Cleanup, Hoarding Cleanup, Help for Hoarders" },
    { label: "HOARDING SUPPORT GROUP", href: "/hoarding-support-group", alt: "Support Group" },
    { label: "MESSAGE BOARD", href: "/message-board", alt: "Message Board" },
    { label: "HELP FOR FAMILIES", href: "https://www.hoardingcleanup.com/help-for-families", alt: "For Families" },
    { label: "HELP FOR HOARDERS", href: "/help-for-hoarders", alt: "Help For Hoarders" },
    { label: "LINKS", href: "https://www.hoardingcleanup.com/links", alt: "Hoarding Help for Hoarders, Resources, Hoarding Cleanup, Clutter Clean up" },
  ];

  const footerLinks = [
    { label: "Hoarding Help Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "National Resources", href: "/national-resources" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
    { label: "Hoarding Support Group", href: "/hoarding-support-group" },
    { label: "Message Board", href: "/message-board" },
    { label: "Help For Families", href: "https://www.hoardingcleanup.com/help-for-families" },
    { label: "Help For Hoarders", href: "/help-for-hoarders" },
    { label: "LINKS", href: "https://www.hoardingcleanup.com/links" },
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
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  title={item.alt}
                  className={`block px-3 py-2 text-xs md:text-sm font-medium rounded transition-colors ${
                    item.active 
                      ? "bg-accent text-accent-foreground" 
                      : "hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar - State Locations */}
          <aside className="lg:col-span-3 order-2 lg:order-1" aria-label="State locations">
            <div className="bg-card rounded-lg border border-border p-4 shadow-sm">
              <h2 className="text-lg font-bold text-primary text-center mb-4">
                Hoarding Cleanup Service<br />
                <span className="text-destructive">Steri-Clean Locations</span>
              </h2>
              
              {/* Steri-Clean Logo Placeholder */}
              <div className="bg-gradient-to-b from-accent to-primary rounded-lg p-4 mb-4 text-center">
                <div className="text-white font-bold text-lg">Steri-Clean</div>
                <div className="text-white text-xs">RESTORING HOMES AND LIVES®</div>
                <div className="bg-destructive text-white text-sm font-bold py-1 px-2 rounded mt-2">
                  Click Your State
                </div>
              </div>

              {/* State Links */}
              <nav aria-label="State navigation">
                <ul className="space-y-1">
                  {stateLocations.map((state) => (
                    <li key={state.name}>
                      <a 
                        href={state.href}
                        className="text-primary hover:text-accent hover:underline text-base transition-colors block py-0.5"
                      >
                        {state.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Partner Logos */}
              <div className="mt-6 space-y-4">
                <a 
                  href="http://1800hoarders.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-card border border-border rounded-lg p-3 hover:shadow-md transition-shadow"
                  aria-label="Hoarders.com - Hoarding Experts"
                >
                  <div className="text-center">
                    <div className="font-bold text-primary text-lg">HOARDERS.com</div>
                    <div className="text-sm text-foreground font-semibold">Hoarding Experts</div>
                    <div className="text-xs text-muted-foreground">*Cleanup *Sorting</div>
                    <div className="text-xs text-muted-foreground">*Organizing *Training</div>
                    <div className="text-xs text-muted-foreground">*Lectures *Planning</div>
                  </div>
                </a>

                <a 
                  href="http://challengingdisorganization.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-card border border-border rounded-lg p-3 hover:shadow-md transition-shadow"
                  aria-label="Institute for Challenging Disorganization"
                >
                  <div className="text-center">
                    <div className="text-primary font-bold">INSTITUTE FOR</div>
                    <div className="text-primary font-bold text-lg">CHALLENGING</div>
                    <div className="text-primary font-bold">DISORGANIZATION</div>
                  </div>
                </a>

                <a 
                  href="http://crimescenecleanupfranchise.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-destructive text-white rounded-lg p-3 hover:opacity-90 transition-opacity"
                  aria-label="Hoarding/Biohazard Cleanup Franchise"
                >
                  <div className="text-center">
                    <div className="font-bold">Hoarding/Biohazard</div>
                    <div className="font-bold">Cleanup Franchise</div>
                    <div className="text-sm mt-1">All States Available</div>
                    <div className="text-xs underline">Click Here for Info</div>
                  </div>
                </a>
              </div>
            </div>
          </aside>

          {/* Center Content */}
          <section className="lg:col-span-6 order-1 lg:order-2">
            {/* Section Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-2 rounded-t-lg mb-6">
              <h2 className="text-lg font-semibold">
                National Hoarding Cleanup Help <span className="text-accent">&amp; National Hoarding Resources</span>
              </h2>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-8">
              <p className="text-3xl md:text-4xl font-black text-destructive mb-4" style={{ fontFamily: "'Arial Black', sans-serif" }}>
                Click on Your State
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-[hsl(210,50%,15%)] mb-4">
                Hoarding Cleanup Help
              </h1>
              <p className="text-xl md:text-2xl font-bold text-[hsl(210,50%,15%)] mb-2">
                8:00 - 5:00 Live Call Center
              </p>
              <a 
                href="tel:(800) 462-7337" 
                className="text-2xl md:text-3xl font-bold text-primary hover:text-accent transition-colors"
              >
                (800) 462-7337
              </a>
            </div>

            {/* YouTube Video Embed */}
            <div className="mb-8">
              <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/7lLUEJUCtxs"
                  title="Hoarding Behavior - Cory Chalmers Hoarders Commercial May 2015"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                5% of the population suffer from Hoarding Behavior
              </p>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="bg-muted rounded-lg p-8">
                <p className="text-muted-foreground text-lg font-medium mb-2">Interactive US Map</p>
                <p className="text-sm text-muted-foreground">Click your state above for local hoarding cleanup services</p>
              </div>
            </div>
          </section>

          {/* Right Sidebar - Interactive Help */}
          <aside className="lg:col-span-3 order-3" aria-label="Interactive resources">
            <div className="bg-card rounded-lg border border-border p-4 shadow-sm">
              <h2 className="text-lg font-bold text-destructive text-center mb-4">
                Interactive<br />
                Hoarding Help<br />
                <span className="text-primary">Click Boxes Below</span>
              </h2>

              {/* Resource Links */}
              <div className="space-y-4">
                <a 
                  href="http://hoardingcleanup.com/message_board"
                  className="block bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-4 text-center font-bold hover:opacity-90 transition-opacity shadow-md"
                  aria-label="Message Boards"
                >
                  <div className="text-xl">MESSAGE</div>
                  <div className="text-xl">BOARDS</div>
                  <div className="text-sm font-normal">(Click Here)</div>
                </a>

                <a 
                  href="http://hoardingcleanup.com/chat_room"
                  className="block bg-gradient-to-r from-destructive to-destructive/80 text-white rounded-lg p-4 text-center font-bold hover:opacity-90 transition-opacity shadow-md"
                  aria-label="Online Support Group"
                >
                  <div className="text-xl">ONLINE</div>
                  <div className="text-xl">SUPPORT</div>
                  <div className="text-lg">GROUP</div>
                </a>

                <a 
                  href="http://hoardingcleanup.com/webinars"
                  className="block bg-gradient-to-r from-accent to-accent/80 text-white rounded-lg p-4 text-center font-bold hover:opacity-90 transition-opacity shadow-md"
                  aria-label="Hoarding Webinars"
                >
                  <div className="text-lg">Hoarding</div>
                  <div className="text-xl">Webinars</div>
                  <div className="text-sm font-normal">(Click Here)</div>
                </a>

                <a 
                  href="http://hoardingcleanup.com/hoarders_tv_show"
                  className="block bg-card border-2 border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                  aria-label="Hoarders TV Show - Apply Here Today"
                >
                  <div className="font-bold text-foreground text-xl mb-2">HOARDERS</div>
                  <div className="text-sm text-muted-foreground mb-2">TV SHOW</div>
                  <div className="bg-destructive text-white text-sm font-bold py-1 px-2 rounded">
                    APPLY HERE TODAY
                  </div>
                </a>

                {/* Visitor Counter */}
                <div className="bg-muted rounded-lg p-3 text-center">
                  <div className="font-mono text-lg font-bold text-foreground tracking-wider">
                    13942892
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Footer Navigation */}
          <nav aria-label="Footer navigation" className="mb-6">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mailing List */}
          <div className="text-center mb-4">
            <a 
              href="https://www.hoardingcleanup.com/inc/UserReg"
              className="hover:text-accent transition-colors text-sm"
            >
              Site Mailing List
            </a>
          </div>

          {/* Tagline & Company Info */}
          <div className="text-center">
            <p className="italic mb-4 opacity-80">"Cleaning with Care and Compassion TM"</p>
            <p className="text-lg font-bold mb-1">Hoarding Cleanup</p>
            <p className="opacity-80 mb-4">Nationwide Hoarding Resources Directory</p>
            <p className="text-sm opacity-60">Copyright 2009 - 2024 HoardingCleanup.com</p>
          </div>

          {/* Powered By */}
          <div className="text-center mt-6 text-xs opacity-60">
            <p>Design Your Own Website, Today!</p>
            <a 
              href="http://www.ibuilt.net/" 
              className="hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              iBuilt Design Software<br />
              Give it a try for Free
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NationalResources;
