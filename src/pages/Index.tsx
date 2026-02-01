const Index = () => {
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
    { label: "Hoarding Help Home", href: "/hoarding-help-home" },
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

  const testimonials = [
    {
      text: `Dear Mike, I wanted to let you know how thoroughly pleased I was with the cleaning job Steri-clean did at my apartment. You were so right about Eddie and Zach. Both young men were so pleasant, encouraging and hard working. Both would make excellent therapists should they choose a new line of work someday, but I would hope they don't as there are many out there like me who need their help. Eddie worked with me in my terribly cluttered room. He helped me move beyond my anxiety and get things organized all the while doing all the heavy work. All I had to do was say keep it, donate it or throw it away. Whenever I faltered, Eddie was there to make a quick, painless suggestion and that kept it easy.`,
      author: "C. Weston"
    },
    {
      text: `Thank you for the referral to a company in our area. We didn't even know there were companies like this. The firm you referred us to was very professional and treated us as if we were part of their own family. The cleanup went quicker than I had ever imagined. My mother now has a safe and beautiful home again, just like when I lived there as a child. You provide a great service to those in need.`,
      author: "A. Clamsey"
    },
    {
      text: `HoardingCleanup.com helped me find a wonderful cleaning company that we just had come out to our home. We were completely disgusted with the way our house had become so cluttered but couldn't seem to accomplish anything on our own. We made several attempts to clean without success. The cleaning crew arrived and in just the first day, they had half our house in tip top shape. They found things we didn't even know we had in there. Thanks again for referring us to them. They were fantastic!`,
      author: "B. Simpleton"
    },
    {
      text: `Cory, thank you for the referral. The company was better than you promised! I sincerely appreciate the work that you do, and your willingness to help others nationwide.`,
      author: "E. Allen"
    },
    {
      text: `HoardingCleanup saved my home! I was facing eviction and despite making several attempts at cleaning my apartment, I just couldn't find the energy to make any progress. They sent me the information for a wonderful company. When they first arrived to meet with me, I was scared to death. They were the nicest people and immediately I felt a wave of calm wash over me. They provided me with a very fair estimate and I had them start within a few days. My landlord let me stay, and now I will never let it look like that again.`,
      author: "J. Treevor"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content - Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>

      {/* Header / Navigation */}
      <header className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between text-sm">
            <span className="hidden md:block font-medium">Hoarding Cleanup Help | Nationwide Resources</span>
            <div className="flex items-center gap-4">
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Hoarding Clean Up Nationwide Resources
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            Hoarding Help | Hoarders Help | How to Help a Hoarder
          </p>
          <a 
            href="tel:1-800-462-7337" 
            className="inline-block text-3xl md:text-5xl font-bold mb-4 hover:opacity-80 transition-opacity"
            aria-label="Call us at 800-462-7337"
          >
            (800) 462-7337
          </a>
          <p className="text-lg md:text-xl font-medium">
            Live Help - 7 Days a Week 8:00 to 5:00
          </p>
        </div>
      </section>

      {/* Navigation Bar */}
      <nav className="bg-foreground/95 text-background sticky top-0 z-40 shadow-lg" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-1 md:gap-2 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="block px-3 py-2 text-xs md:text-sm font-medium hover:bg-primary hover:text-primary-foreground rounded transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Locations */}
          <aside className="lg:col-span-1 order-2 lg:order-1" aria-labelledby="locations-heading">
            <div className="bg-card rounded-xl shadow-lg p-6 sticky top-20">
              <h2 id="locations-heading" className="text-lg font-bold text-primary text-center mb-4">
                Hoarding Cleanup Service<br />Steri-Clean Locations
              </h2>
              <nav aria-label="State locations">
                <ul className="grid grid-cols-2 lg:grid-cols-1 gap-1 text-sm max-h-96 lg:max-h-[500px] overflow-y-auto">
                  {states.map((state) => (
                    <li key={state.name}>
                      <a 
                        href={state.url} 
                        className="block px-2 py-1.5 text-primary hover:bg-primary/10 rounded transition-colors"
                      >
                        {state.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              
              {/* Partner Logos */}
              <div className="mt-6 pt-6 border-t border-border space-y-4">
                <a href="http://1800hoarders.com" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <div className="bg-secondary/50 rounded-lg p-3 text-center">
                    <span className="font-bold text-primary text-sm">1800Hoarders.com</span>
                    <p className="text-xs text-muted-foreground mt-1">Hoarding Experts</p>
                  </div>
                </a>
                <a href="http://challengingdisorganization.org" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <div className="bg-secondary/50 rounded-lg p-3 text-center">
                    <span className="font-bold text-primary text-sm">Institute for Challenging Disorganization</span>
                  </div>
                </a>
                <a href="http://crimescenecleanupfranchise.com" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <div className="bg-secondary/50 rounded-lg p-3 text-center">
                    <span className="font-bold text-primary text-sm">Hoarding/Biohazard Cleanup Franchise</span>
                    <p className="text-xs text-muted-foreground mt-1">All States Available</p>
                  </div>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-2 order-1 lg:order-2">
            {/* Seasonal Message */}
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent rounded-r-lg p-6 mb-8">
              <p className="text-lg font-bold text-primary">
                Spring is in the air!! Spring cleaning can mean a completely NEW YOU!
              </p>
            </div>

            {/* Main Description */}
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
              <p className="text-justify leading-relaxed">
                Are you ready for a new home and a new you? Its time to create new goals and envision a new clutter free home. Spring is the perfect time for a new cleaning plan! This time of year can also can bring on the potential of visitors which can cause great discomfort for someone with a cluttered home! It is one of the biggest times of the year that our organizing experts get called from all over the country to help clients remove clutter. Because for many, this time of year is motivating with visions of a fresh start. This inspires the desire to tackle any cleaning tasks, small or large, hoarding cleanup, or simple decluttering. But for others, this is a time that causes sadness and depression. For either scenario, we are here to help! We can get your apartment, condo, house, mobile home, trailer, hotel room, or whatever you call home back into a safe and functional state at your pace. Don't fear company coming over, WELCOME them in with an amazing home!
              </p>

              <p className="text-justify leading-relaxed">
                Hoarding Cleanup is a national database of qualified hoarding specialists including hoarding cleaning companies, hoarding therapists, and psychiatrists across the United States (and a few other countries) that are all familiar with the hoarding disorder.
              </p>

              <p className="text-justify leading-relaxed">
                Hoarding Cleanup was developed by hoarding experts throughout the country to fill a huge void in finding qualified hoarding help. We created this site to help those suffering from hoarding and moderate to severe clutter, as well as their loved ones, find sincere and compassionate help no matter where they are located. Most of the cleaning companies listed on our site have been trained and certified by, or are a franchise of, Cory Chalmers, a nationally recognized hoarding expert in hoarding cleanup and the psychology behind the disorder. Mr. Chalmers has helped open people's eyes to just how common hoarding is by helping create, and is a regularly featured expert on, the A&E Emmy nominated TV series, "Hoarders", hosting 77 episodes over the past 15 seasons. Off the show, and even more impressive, is his companies success at cleaning over 40,000 hoarding homes throughout the United States over the past 30 years!
              </p>

              <p className="text-justify leading-relaxed">
                The resources on this site are all non-judgmental, compassionate, and ready to provide the necessary help for hoarders to succeed. One call to a HoardingCleanup.com listed company and you are on the road to a fresh start. Help for hoarders is now just a click away. If you or a loved one needs help with hoarding, let us assist them. From hoarding support groups and hoarding webinars to help with cleaning, organizing, and therapy, you can find the resources here.
              </p>

              <p className="text-justify leading-relaxed">
                Click <a href="https://hoardingcleanup.com/national_resources" className="text-primary font-semibold hover:underline">HERE</a> to be connected to our national database to find hoarding clean up help resources near you now.
              </p>
            </div>

            {/* Video Section */}
            <section className="my-12" aria-labelledby="video-heading">
              <h2 id="video-heading" className="sr-only">Company Introduction Video</h2>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl bg-foreground/5">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://youtube.com/embed/hucIjMDtkQs?wmode=transparent" 
                  frameBorder="0" 
                  allowFullScreen
                  title="Hoarding Cleanup | Steri Clean Inc"
                  className="absolute inset-0"
                />
              </div>
            </section>

            {/* Resources Grid */}
            <section className="grid md:grid-cols-2 gap-6 my-12" aria-labelledby="resources-heading">
              <h2 id="resources-heading" className="sr-only">Quick Resources</h2>
              <a 
                href="http://hoardingcleanup.com/national_resources" 
                className="group bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary/10 p-8 text-center">
                  <span className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    RESOURCES BY STATE
                  </span>
                  <p className="text-muted-foreground mt-2">(Click Here)</p>
                </div>
              </a>
              <a 
                href="http://hoardingcleanup.com/international_resources" 
                className="group bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary/10 p-8 text-center">
                  <span className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    INTERNATIONAL HELP
                  </span>
                  <p className="text-muted-foreground mt-2">(Click Here)</p>
                </div>
              </a>
            </section>

            {/* Before/After Preview - Static representation */}
            <section className="bg-secondary/30 rounded-xl p-6 my-8" aria-labelledby="results-heading">
              <h2 id="results-heading" className="text-xl font-bold text-center text-primary mb-4">Transformation Results</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-4 text-center">
                  <div className="bg-muted aspect-video rounded flex items-center justify-center">
                    <span className="text-muted-foreground font-medium">Before Cleanup</span>
                  </div>
                </div>
                <div className="bg-card rounded-lg p-4 text-center">
                  <div className="bg-accent/20 aspect-video rounded flex items-center justify-center">
                    <span className="text-accent font-medium">After Cleanup</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Info */}
            <div className="prose prose-lg max-w-none text-foreground/90 my-8">
              <p className="text-justify leading-relaxed">
                With an experienced company, hoarding clean up will go smoothly and efficiently. Hoarding cleanup not only entails clutter clean up, but the recovery of all the items in the home that are still useful, valuable and sentimental. A hoarding cleanup company should carry all insurances including general liability, workers compensation, automobile, and they must be bonded. If you find a hoarding cleanup company on this list to be anything but perfect, please let us know. We strive to keep our hoarding resources among the best in the nation. We know how hard is to find quality help for hoarders, so we update our list regularly to keep these hoarding resources accurate and up do date. Read through this site for many resources and useful tips on how to help a hoarder or how to help yourself!
              </p>
            </div>
          </article>

          {/* Right Sidebar - Resources & Testimonials */}
          <aside className="lg:col-span-1 order-3" aria-labelledby="sidebar-heading">
            <div className="space-y-6 sticky top-20">
              <h2 id="sidebar-heading" className="text-lg font-bold text-primary text-center">
                Interactive Hoarding Help<br />Click Boxes Below
              </h2>
              
              {/* Resource Links */}
              <nav className="space-y-3" aria-label="Resource links">
                <a 
                  href="http://hoardingcleanup.com/message_board" 
                  className="block bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="bg-primary text-primary-foreground p-4 text-center font-bold">
                    MESSAGE BOARDS
                  </div>
                </a>
                <a 
                  href="http://hoardingcleanup.com/chat_room" 
                  className="block bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="bg-accent text-accent-foreground p-4 text-center font-bold">
                    ONLINE SUPPORT GROUP
                  </div>
                </a>
                <a 
                  href="http://hoardingcleanup.com/webinars" 
                  className="block bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="bg-primary text-primary-foreground p-4 text-center font-bold">
                    Hoarding Webinars
                  </div>
                </a>
                <a 
                  href="http://hoardingcleanup.com/hoarders_tv_show" 
                  className="block bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="bg-secondary p-4 text-center">
                    <span className="font-bold text-primary text-lg">HOARDERS</span>
                    <p className="text-xs text-muted-foreground">TV SHOW - APPLY HERE TODAY</p>
                  </div>
                </a>
              </nav>

              {/* Testimonials */}
              <section className="bg-card rounded-xl shadow-lg p-6" aria-labelledby="testimonials-heading">
                <h3 id="testimonials-heading" className="text-lg font-bold text-primary mb-4">Testimonials</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {testimonials.map((testimonial, index) => (
                    <blockquote key={index} className="border-l-2 border-accent pl-4 py-2">
                      <p className="text-sm text-foreground/80 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <footer className="mt-2 text-sm font-medium text-primary">
                        — {testimonial.author}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </section>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Footer Navigation */}
          <nav className="mb-8" aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Content */}
          <div className="text-center space-y-4">
            <a href="/inc/UserReg" className="text-accent hover:underline">
              Site Mailing List
            </a>
            <p className="text-lg italic">"Cleaning with Care and Compassion TM"</p>
            <div>
              <p className="text-xl font-bold">Hoarding Cleanup</p>
              <p>Nationwide Hoarding Resources Directory</p>
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

export default Index;
