const Services = () => {
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
    { label: "National Resources", href: "/national_resources" },
    { label: "About Us", href: "/about_us" },
    { label: "Contact", href: "/contact" },
    { label: "Hoarding Support Group", href: "/hoarding_support_group" },
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
                    link.href === "/services" 
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
              
              {/* Steri-Clean Logo Placeholder */}
              <div className="bg-gradient-to-br from-accent/20 to-primary/10 rounded-lg p-4 mb-4 text-center">
                <span className="text-lg font-bold text-primary">Steri-Clean®</span>
                <p className="text-xs text-muted-foreground">RESTORING HOMES AND LIVES®</p>
                <p className="text-sm font-semibold text-accent mt-2">Click Your State</p>
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
                  <div className="bg-secondary rounded-lg p-3 text-center">
                    <span className="font-bold text-primary text-sm">Hoarders.com</span>
                    <p className="text-[10px] text-muted-foreground mt-1">Hoarding Experts • Cleanup • Sorting<br />Organizing • Training • Lectures • Planning</p>
                  </div>
                </a>
                <a href="http://challengingdisorganization.org" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <div className="bg-secondary rounded-lg p-3 text-center">
                    <span className="font-bold text-primary text-xs">INSTITUTE FOR<br />CHALLENGING<br />DISORGANIZATION</span>
                  </div>
                </a>
                <a href="http://crimescenecleanupfranchise.com" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg p-3 text-center">
                    <span className="font-bold text-xs">Hoarding/Biohazard<br />Cleanup Franchise</span>
                    <p className="text-[10px] mt-1 opacity-90">All States Available<br />Click Here for Info</p>
                  </div>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-6 order-1 lg:order-2">
            {/* Page Title */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg px-4 py-3 mb-6">
              <h2 className="text-lg font-bold">
                Hoarding Clean Up Services <span className="font-normal opacity-80">Hoarding Experts</span>
              </h2>
            </div>

            {/* Main Description */}
            <div className="prose prose-lg max-w-none text-foreground space-y-4 mb-8">
              <p className="text-base leading-relaxed">
                Hoarding cleanup is a specialized cleaning field. The companies across the nation that are listed in our database are not junk haulers and they are not a basic cleaning service. These companies specialize in hoarding clean up and can provide you with any or all of the following services:
              </p>

              {/* Services List */}
              <ul className="space-y-2 text-base list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Live Call Center 8:00 AM to 5:00 PM All Time Zones (800) 462-7337</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Hoarding and Clutter Clean up</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <a href="https://crimecleaners.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Biohazard Cleanup</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    <a href="https://rodentdroppingscleanup.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Rodent Cleanup</a>
                    {" & "}
                    <a href="https://pigeondroppingscleanup.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Pigeon Cleanup</a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Triage and Sorting of Contents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Recovery of Valuables and Sentimental Items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Paperwork Recovery and Storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Cleanup and Disposal of Animal and/or Human Waste</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Appliance Recycling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>E-Waste Recycling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Delivery of Storage Containers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Removal and Recycling of Non Running Vehicles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Photo/Video Documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Itemized Inventory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Deep Cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Home Repairs - Paint, Drywall, Carpet, Electrical, Plumbing, Etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Additional Follow Up Care (home visits, meals, weekly cleaning/maintenance, therapists)</span>
                </li>
              </ul>
            </div>

            {/* Video Call-to-Action */}
            <div className="text-center mb-6">
              <p className="text-base font-semibold text-foreground leading-relaxed">
                We don't just clean homes, we literally transform LIVES! Watch this video below and listen to our customers and our team talka bout the difference Steri-Clean makes. Then call us to start your NEW LIFE at 1-800-462-7337!
              </p>
            </div>

            {/* Video Section */}
            <section className="mb-8" aria-labelledby="video-heading">
              <h3 id="video-heading" className="sr-only">Company Introduction Video</h3>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl bg-foreground/5">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://youtube.com/embed/CeHZDoFhNFU?wmode=transparent" 
                  frameBorder="0" 
                  allowFullScreen
                  title="Steri-Clean, How We Change Lives"
                  className="absolute inset-0"
                />
              </div>
            </section>

            {/* Photo Gallery Placeholder */}
            <section className="bg-card rounded-xl shadow-lg p-4 mb-6" aria-labelledby="gallery-heading">
              <h3 id="gallery-heading" className="sr-only">Before and After Photos</h3>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                  <div key={num} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Photo {num}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2">
                <span className="px-3 py-1 bg-card border border-border rounded text-sm">1</span>
                <span className="px-3 py-1 bg-secondary rounded text-sm cursor-pointer hover:bg-muted">2</span>
                <span className="px-3 py-1 bg-secondary rounded text-sm cursor-pointer hover:bg-muted">3</span>
                <span className="px-3 py-1 bg-secondary rounded text-sm cursor-pointer hover:bg-muted">next</span>
              </div>
            </section>

            {/* Large Preview Image Placeholder */}
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                <span className="text-muted-foreground">Before/After Preview Image</span>
              </div>
            </div>
          </article>

          {/* Right Sidebar - Resources */}
          <aside className="lg:col-span-3 order-3" aria-labelledby="sidebar-heading">
            <div className="space-y-4 sticky top-20">
              <h2 id="sidebar-heading" className="text-base font-bold text-primary text-center leading-tight">
                Interactive Hoarding Help<br />Click Boxes Below
              </h2>
              
              {/* Live Chat Placeholder */}
              <div className="bg-card rounded-lg shadow-md p-3 text-center border-2 border-accent">
                <div className="text-xs text-muted-foreground mb-1">Offline</div>
                <span className="font-bold text-primary">PLEASE LEAVE<br />A MESSAGE</span>
              </div>
              
              {/* Resource Links */}
              <nav className="space-y-3" aria-label="Resource links">
                <a 
                  href="http://hoardingcleanup.com/message_board" 
                  className="block bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="p-4 text-center">
                    <span className="font-bold text-lg">MESSAGE<br />BOARDS</span>
                    <p className="text-xs opacity-80 mt-1">(Click Here)</p>
                  </div>
                </a>
                <a 
                  href="http://hoardingcleanup.com/chat_room" 
                  className="block bg-gradient-to-r from-accent to-accent/90 text-accent-foreground rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="p-4 text-center">
                    <span className="font-bold text-lg">ONLINE<br />SUPPORT<br />GROUP</span>
                    <p className="text-xs opacity-80 mt-1">(Click Here)</p>
                  </div>
                </a>
                <a 
                  href="http://hoardingcleanup.com/webinars" 
                  className="block bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="p-4 text-center">
                    <span className="font-bold">Hoarding<br />Webinars</span>
                    <p className="text-xs opacity-80 mt-1">(Click Here)</p>
                  </div>
                </a>
                <a 
                  href="http://hoardingcleanup.com/hoarders_tv_show" 
                  className="block bg-card border-2 border-primary rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="p-4 text-center">
                    <span className="font-bold text-primary text-xl">HOARDERS</span>
                    <p className="text-xs text-muted-foreground mt-1">TV SHOW<br />APPLY HERE TODAY</p>
                  </div>
                </a>
              </nav>

              {/* Visitor Counter */}
              <div className="bg-card rounded-lg shadow-md p-3 text-center border border-border">
                <div className="font-mono text-lg tracking-wider text-foreground">13929106</div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Footer Navigation */}
          <nav className="mb-6" aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm">
              {navLinks.map((link, index) => (
                <li key={link.href} className="flex items-center">
                  <a href={link.href} className="hover:text-accent transition-colors underline">
                    {link.label}
                  </a>
                  {index < navLinks.length - 1 && <span className="ml-2 md:ml-4">·</span>}
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Content */}
          <div className="text-center space-y-3">
            <a href="/inc/UserReg" className="text-accent hover:underline text-sm">
              Site Mailing List
            </a>
            <p className="text-base italic">"Cleaning with Care and Compassion TM"</p>
            <div>
              <p className="text-xl font-bold">Hoarding Cleanup</p>
              <p className="text-sm">Nationwide Hoarding Resources Directory</p>
            </div>
            <p className="text-sm text-background/70">
              Copyright 2009 - 2024 HoardingCleanup.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
