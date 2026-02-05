const MessageBoard = () => {
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
    { label: "NATIONAL RESOURCES", href: "/national-resources", alt: "National Resources" },
    { label: "ABOUT US", href: "/about-us", alt: "About Hoarding Cleanup, Clutter Cleanup" },
    { label: "CONTACT", href: "/contact", alt: "Hoarding Cleanup, Clutter Cleanup, Hoarding Cleanup, Help for Hoarders" },
    { label: "HOARDING SUPPORT GROUP", href: "/hoarding-support-group", alt: "Support Group" },
    { label: "MESSAGE BOARD", href: "/message-board", alt: "Message Board", active: true },
    { label: "HELP FOR FAMILIES", href: "/help-for-families", alt: "For Families" },
    { label: "HELP FOR HOARDERS", href: "/help-for-hoarders", alt: "Help For Hoarders" },
    { label: "LINKS", href: "/links", alt: "Hoarding Help for Hoarders, Resources, Hoarding Cleanup, Clutter Clean up" },
  ];

  const footerLinks = [
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

  const forumThreads = [
    {
      title: "Welcome to the new board!",
      description: "Please check in and say hi. Post new topics and lets help each other out.",
      href: "https://www.hoardingcleanup.com/message-board/?msgbrd=1",
      topics: 390,
      replies: 1844,
      lastAction: "31 January 2026 - 10:06 PM",
      lastPostBy: "Kim"
    },
    {
      title: "The Daily Chat",
      description: "Welcome one and all to the Daily Chat :D A place to gather with friends and talk about any and everything under the sun. Here we can encourage each other, give helpful advice and cheer every accomplishment. A place to sit down & catch up while taking a break. Hope you all enjoy it here. :)",
      href: "https://www.hoardingcleanup.com/message-board/?msgbrd=10",
      topics: 367,
      replies: 28429,
      lastAction: "05 February 2026 - 03:31 AM",
      lastPostBy: "Subclinical"
    },
    {
      title: "Job Openings in the Industry",
      description: "Want to help others? Know of openings? Look or Post here!",
      href: "https://www.hoardingcleanup.com/message-board/?msgbrd=16",
      topics: 9,
      replies: 11,
      lastAction: "14 December 2021 - 11:32 AM",
      lastPostBy: "Pat V"
    },
    {
      title: "Hoarding In The News",
      description: "Copy and past current hoarding events in the news here. Good or bad, lets share the stories out there!",
      href: "https://www.hoardingcleanup.com/message-board/?msgbrd=17",
      topics: 5,
      replies: 8,
      lastAction: "17 August 2014 - 07:13 AM",
      lastPostBy: "bitsy"
    },
    {
      title: "Why Do You Hoard? (NEW!)",
      description: "Please help others understand this disorder by explaining why you think you suffer from this disorder. It will truly help other sufferers as well as loved ones to understand that this is not about being lazy. There are literally endless reasons why people suffer from this and these posts will help outline the many causes. Thank you!",
      href: "https://www.hoardingcleanup.com/message-board/?msgbrd=14",
      topics: 34,
      replies: 209,
      lastAction: "14 August 2024 - 05:03 AM",
      lastPostBy: "Goodwin"
    },
    {
      title: "How to Help a Hoarder",
      description: "This message board thread is for all of you that know and love a hoarder and want to know how to help them.",
      href: "https://www.hoardingcleanup.com/message-board/?msgbrd=9",
      topics: 123,
      replies: 609,
      lastAction: "12 January 2026 - 06:28 PM",
      lastPostBy: "blackscreenspace"
    },
    {
      title: "Motivation Needed?",
      description: "If you are lacking motivation or just a little discouraged, feel free to post here and we will try to get you moving again.",
      href: "https://www.hoardingcleanup.com/message-board/?msgbrd=2",
      topics: 37,
      replies: 240,
      lastAction: "06 August 2025 - 06:57 AM",
      lastPostBy: "Subclinical"
    },
    {
      title: "Cleanup Help",
      description: "Have questions about cleaning a hoarding home either for yourself or a loved one? Ask your questions here and hoarding cleanup professional Cory Chalmers will answer them.",
      href: "https://www.hoardingcleanup.com/message-board/?msgbrd=3",
      topics: 237,
      replies: 671,
      lastAction: "17 December 2025 - 11:35 PM",
      lastPostBy: "Herman Todd"
    },
    {
      title: "The Weekly Task",
      description: "while this topic has ended, you can go back through and challenge yourself by trying some of our old weekly tasks. Good luck!",
      href: "https://www.hoardingcleanup.com/message-board/?msgbrd=12",
      topics: 12,
      replies: 108,
      lastAction: "01 November 2015 - 11:00 PM",
      lastPostBy: "AbiYah"
    },
    {
      title: "Hoarding Studies - Help Find Answers!",
      description: "Many organizations are conducting studies to help find answers on hoarding. Most are anonymous and very safe. Just fill out some information about your hoarding problem, and help us all understand it better. It is impossible to find these answers without your help! Please post your case studies here and lets all figure out if there isn't an answer out there somewhere to explain the hoarding disorder.",
      href: "https://www.hoardingcleanup.com/message-board/?msgbrd=11",
      topics: 27,
      replies: 53,
      lastAction: "12 January 2026 - 05:15 PM",
      lastPostBy: "kdadk"
    },
    {
      title: "Television Shows Looking for Hoarders",
      description: "There are always TV shows looking for people interested in having their homes cleaned for free. These TV shows can post here.",
      href: "https://www.hoardingcleanup.com/message-board/?msgbrd=5",
      topics: 69,
      replies: 203,
      lastAction: "01 December 2025 - 01:51 PM",
      lastPostBy: "Nancy Rice"
    },
    {
      title: "Talk About Your Fears",
      description: "Help us learn about your fears. What things prevent you from discarding an object or many objects. Your answers really do shed some light on the psychology behind hoarding and can help people better understand how you feel.",
      href: "https://www.hoardingcleanup.com/message-board/?msgbrd=6",
      topics: 32,
      replies: 179,
      lastAction: "02 January 2022 - 07:06 PM",
      lastPostBy: "Blueflower"
    },
    {
      title: "Success Stories",
      description: "We always love to hear success stories from people that have been able to manage their hoarding or clutter problems. If you have one, please share and help motivate others!",
      href: "https://www.hoardingcleanup.com/message-board/?msgbrd=7",
      topics: 18,
      replies: 69,
      lastAction: "11 January 2026 - 09:56 PM",
      lastPostBy: "blackscreenspace"
    },
    {
      title: "Hoarding Safety",
      description: "In this board, lets bring up some safety concerns related to hoarding and how to remove them when possible.",
      href: "https://www.hoardingcleanup.com/message-board/?msgbrd=8",
      topics: 12,
      replies: 46,
      lastAction: "31 December 2015 - 09:18 PM",
      lastPostBy: "Tillie"
    }
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

          {/* Center Content - Message Board */}
          <section className="lg:col-span-6 order-1 lg:order-2">
            {/* Section Header */}
            <div className="text-center mb-8">
              <p className="text-xl md:text-2xl font-bold text-primary mb-2">
                Questions...Answers...Support. Together we CAN beat this!
              </p>
              <p className="text-lg font-bold text-primary mb-4">
                Brought to you by:
              </p>
              <a href="http://www.Hoarders.com" target="_blank" rel="noopener noreferrer">
                <div className="inline-block bg-gradient-to-r from-accent to-primary text-white px-6 py-3 rounded-lg mb-4">
                  <div className="font-bold text-xl">Steri-Clean</div>
                  <div className="font-bold text-2xl">HOARDERS.com</div>
                  <div className="text-sm">RESTORING HOMES AND LIVES™</div>
                </div>
              </a>
              <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
                (800) 462-7337
              </p>
              <p className="text-lg font-bold text-foreground">
                8:00 AM to 5:00 PM Every Day!
              </p>
            </div>

            {/* Message Board Table */}
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-3">
                <h2 className="text-lg font-bold">Hoarding Help Message Boards</h2>
              </div>

              {/* Table Header */}
              <div className="bg-muted border-b border-border">
                <div className="grid grid-cols-12 gap-2 px-4 py-2 text-sm font-bold text-primary">
                  <div className="col-span-6">Forum</div>
                  <div className="col-span-1 text-center">Topics</div>
                  <div className="col-span-1 text-center">Replies</div>
                  <div className="col-span-4 text-center">Last Action</div>
                </div>
              </div>

              {/* Forum Threads */}
              <div className="divide-y divide-border">
                {forumThreads.map((thread, index) => (
                  <div 
                    key={index} 
                    className={`grid grid-cols-12 gap-2 px-4 py-3 ${index % 2 === 0 ? 'bg-card' : 'bg-muted/30'}`}
                  >
                    <div className="col-span-12 md:col-span-6">
                      <a 
                        href={thread.href}
                        className="text-primary font-medium hover:underline hover:text-accent transition-colors"
                      >
                        {thread.title}
                      </a>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {thread.description}
                      </p>
                    </div>
                    <div className="col-span-3 md:col-span-1 text-center text-sm text-foreground">
                      <span className="md:hidden text-xs text-muted-foreground">Topics: </span>
                      {thread.topics}
                    </div>
                    <div className="col-span-3 md:col-span-1 text-center text-sm text-foreground">
                      <span className="md:hidden text-xs text-muted-foreground">Replies: </span>
                      {thread.replies}
                    </div>
                    <div className="col-span-6 md:col-span-4 text-xs text-muted-foreground">
                      <div>{thread.lastAction}</div>
                      <div>Last Post by: <span className="font-semibold text-foreground">{thread.lastPostBy}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Help Button Placeholder */}
            <div className="mt-6 text-center">
              <div className="inline-block bg-muted border border-border rounded-lg px-6 py-3">
                <div className="text-sm text-muted-foreground">✦ Offline</div>
                <div className="font-bold text-primary">PLEASE LEAVE</div>
                <div className="font-bold text-primary">A MESSAGE</div>
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

              {/* Live Help Placeholder */}
              <div className="mb-4 text-center">
                <div className="inline-block bg-muted border border-border rounded-lg px-4 py-2">
                  <div className="text-xs text-muted-foreground">✦ Offline</div>
                  <div className="text-sm font-bold text-primary">PLEASE LEAVE</div>
                  <div className="text-sm font-bold text-primary">A MESSAGE</div>
                </div>
              </div>

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
                    13946265
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

export default MessageBoard;
