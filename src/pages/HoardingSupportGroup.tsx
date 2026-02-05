const HoardingSupportGroup = () => {
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

  const navItems = [
    { label: "HOARDING HELP HOME", href: "/", alt: "Hoarding Cleanup, Help for Hoarders, Nationwide Hoarding Help" },
    { label: "SERVICES", href: "/services", alt: "Hoarding Clean up" },
    { label: "NATIONAL RESOURCES", href: "/national-resources", alt: "National Resources" },
    { label: "ABOUT US", href: "/about-us", alt: "About Hoarding Cleanup, Clutter Cleanup" },
    { label: "CONTACT", href: "/contact", alt: "Hoarding Cleanup, Clutter Cleanup, Hoarding Cleanup, Help for Hoarders" },
    { label: "HOARDING SUPPORT GROUP", href: "/hoarding-support-group", alt: "Support Group", active: true },
    { label: "MESSAGE BOARD", href: "/message-board", alt: "Message Board" },
    { label: "HELP FOR FAMILIES", href: "https://www.hoardingcleanup.com/help-for-families", alt: "For Families" },
    { label: "HELP FOR HOARDERS", href: "https://www.hoardingcleanup.com/help-for-hoarders", alt: "For Hoarders" },
    { label: "LINKS", href: "https://www.hoardingcleanup.com/links", alt: "Links" },
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
    { label: "Help For Hoarders", href: "https://www.hoardingcleanup.com/help-for-hoarders" },
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
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className={`block px-3 py-2 text-xs md:text-sm font-medium rounded transition-colors ${
                    item.active 
                      ? "bg-accent text-accent-foreground" 
                      : "hover:bg-primary hover:text-primary-foreground"
                  }`}
                  title={item.alt}
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
            {/* Online Support Group Section */}
            <section className="bg-card rounded-xl shadow-lg p-6 mb-6" aria-labelledby="support-group-heading">
              <h2 id="support-group-heading" className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">
                Online Hoarding Support Group  Meetings:
              </h2>
              
              <div className="prose prose-lg max-w-none text-foreground space-y-5">
                <p className="text-base leading-relaxed text-center">
                  Join our anonymous online Hoarding Support Group every Sunday night at 5:00pm (West Coast)/8:00pm (East Coast), and Tuesday nights at 6:00pm PST/9:00pm EST. The online Hoarding Support Group is completely anonymous and is open to hoarders, family members of hoarders, therapists, and anyone else that works with hoarders. This is an open forum where people can finally speak openly with one another and not feel judged. Click on the Red Online Support button in the right for information or to log in or go to the link below.
                </p>
                <p className="text-center">
                  <a 
                    href="https://HoardingCleanup.com/chat_room" 
                    className="text-primary font-semibold hover:underline text-lg"
                  >
                    https://HoardingCleanup.com/chat_room
                  </a>
                </p>
              </div>
            </section>

            {/* Message Boards Section */}
            <section className="bg-card rounded-xl shadow-lg p-6 mb-6" aria-labelledby="message-boards-heading">
              <h2 id="message-boards-heading" className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">
                MESSAGE BOARDS
              </h2>
              
              <div className="prose prose-lg max-w-none text-foreground space-y-5">
                <p className="text-base leading-relaxed text-center">
                  We welcome you to join our message boards and ask questions or just read what others are saying. Click below to join us.
                </p>
                <p className="text-center">
                  <a 
                    href="http://www.hoardingcleanup.com/Message_Board" 
                    className="text-primary font-semibold hover:underline text-lg"
                  >
                    www.HoardingCleanup.com/Message_Board
                  </a>
                </p>
              </div>
            </section>

            {/* Encouraging Message */}
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent rounded-r-lg p-6 mb-6">
              <p className="text-lg font-medium text-foreground text-center">
                You are not alone. Whether you're a hoarder, a family member, or a professional, our support community is here to help you take the first step toward a calmer, clutter-free life.
              </p>
            </div>
          </article>

          {/* Right Sidebar - Interactive Help */}
          <aside className="lg:col-span-3 order-3" aria-labelledby="interactive-help-heading">
            <div className="bg-card rounded-xl shadow-lg p-5 sticky top-20">
              <h2 id="interactive-help-heading" className="text-lg font-bold text-primary text-center mb-4 leading-tight">
                Interactive Hoarding Help<br />Click Boxes Below
              </h2>

              <div className="space-y-4">
                {/* Live Chat Widget Placeholder */}
                <a href="https://www.hoardingcleanup.com/chat_room" className="block hover:opacity-90 transition-opacity">
                  <div className="bg-muted rounded-lg p-4 text-center border border-border">
                    <div className="w-8 h-8 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <p className="text-xs text-muted-foreground">Offline</p>
                    <p className="text-sm font-semibold text-primary mt-1">PLEASE LEAVE A MESSAGE</p>
                  </div>
                </a>

                {/* Message Boards Link */}
                <a href="http://www.hoardingcleanup.com/Message_Board" className="block hover:opacity-90 transition-opacity">
                  <div className="bg-primary text-primary-foreground rounded-lg p-4 text-center">
                    <span className="font-bold text-lg">MESSAGE BOARDS</span>
                    <p className="text-xs mt-1 opacity-80">(Click Here)</p>
                  </div>
                </a>

                {/* Online Support Group Link */}
                <a href="https://www.hoardingcleanup.com/chat_room" className="block hover:opacity-90 transition-opacity">
                  <div className="bg-destructive text-destructive-foreground rounded-lg p-4 text-center">
                    <span className="font-bold text-lg">ONLINE SUPPORT GROUP</span>
                    <p className="text-xs mt-1 opacity-80">(Click Here)</p>
                  </div>
                </a>

                {/* Hoarding Webinars Link */}
                <a href="https://www.hoardingcleanup.com/hoarding_webinars" className="block hover:opacity-90 transition-opacity">
                  <div className="bg-secondary rounded-lg p-4 text-center border border-border">
                    <span className="font-bold text-primary">Hoarding Webinars</span>
                    <p className="text-xs text-muted-foreground mt-1">(Click Here)</p>
                  </div>
                </a>

                {/* Hoarders TV Show */}
                <a href="https://www.aetv.com/shows/hoarders/cast/cory-chalmers" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
                  <div className="bg-secondary rounded-lg p-4 text-center border border-border">
                    <span className="font-bold text-primary text-sm">HOARDERS TV SHOW</span>
                    <p className="text-xs text-muted-foreground mt-1">APPLY HERE TODAY</p>
                  </div>
                </a>

                {/* Hit Counter */}
                <div className="text-center pt-4 border-t border-border">
                  <div className="bg-muted rounded px-3 py-1 inline-block">
                    <span className="text-xs font-mono text-muted-foreground">Visitor Counter</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6 text-sm" aria-label="Footer navigation">
            {footerLinks.map((link, index) => (
              <span key={link.href} className="flex items-center">
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
                {index < footerLinks.length - 1 && <span className="ml-4">|</span>}
              </span>
            ))}
          </nav>
          
          <div className="text-center space-y-2">
            <a 
              href="https://www.hoardingcleanup.com" 
              className="hover:underline font-semibold"
            >
              HoardingCleanup.com
            </a>
            <p className="text-sm opacity-80">"Cleaning with Care and Compassion, LTd"</p>
            <p className="text-lg font-bold">Hoarding Cleanup</p>
            <p className="text-sm opacity-80">Nationwide Hoarding Resources Directory</p>
            <p className="text-sm opacity-70 mt-4">Copyright 2009 - 2024 HoardingCleanup.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HoardingSupportGroup;
