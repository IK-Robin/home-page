import { Link } from "react-router-dom";

const SteriCleanCalifornia = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded z-50">
        Skip to main content
      </a>

      {/* Top Bar */}
      <div className="bg-[hsl(210,70%,25%)] text-primary-foreground">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-end py-2 text-sm space-x-4">
            <Link to="/site-map" className="hover:underline flex items-center gap-1">
              <span>📄</span> site map
            </Link>
            <span className="text-primary-foreground/50">|</span>
            <Link to="/contact" className="hover:underline flex items-center gap-1">
              <span>✉️</span> contact
            </Link>
          </div>
        </div>
      </div>

      {/* Header Banner */}
      <div 
        className="bg-[hsl(210,70%,25%)] cursor-pointer"
        onClick={() => window.location.href = '/'}
      >
        <div className="max-w-5xl mx-auto">
          <div className="h-[120px] bg-gradient-to-r from-[hsl(210,75%,20%)] to-[hsl(210,70%,30%)] flex items-center justify-center">
            <div className="text-center text-primary-foreground">
              <h1 className="text-3xl font-bold tracking-wide">Steri-Clean</h1>
              <p className="text-lg">Hoarding Cleanup Specialists</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-black" aria-label="Main navigation">
        <div className="max-w-5xl mx-auto px-4">
          <ul className="flex flex-wrap justify-center py-2 gap-1 text-sm">
            <li><Link to="/" className="text-white hover:text-accent px-2 py-1 block">Home</Link></li>
            <li><Link to="/services" className="text-white hover:text-accent px-2 py-1 block">Services</Link></li>
            <li><Link to="/national-resources" className="text-white hover:text-accent px-2 py-1 block">National Resources</Link></li>
            <li><Link to="/about-us" className="text-white hover:text-accent px-2 py-1 block">About Us</Link></li>
            <li><Link to="/contact" className="text-white hover:text-accent px-2 py-1 block">Contact</Link></li>
            <li><Link to="/hoarding-support-group" className="text-white hover:text-accent px-2 py-1 block">Support Group</Link></li>
            <li><Link to="/message-board" className="text-white hover:text-accent px-2 py-1 block">Message Board</Link></li>
            <li><Link to="/help-for-families" className="text-white hover:text-accent px-2 py-1 block">For Families</Link></li>
            <li><Link to="/help-for-hoarders" className="text-white hover:text-accent px-2 py-1 block">Help For Hoarders</Link></li>
            <li><Link to="/links" className="text-white hover:text-accent px-2 py-1 block">Links</Link></li>
          </ul>
        </div>
      </nav>

      {/* Decorative Banner */}
      <div className="bg-gradient-to-r from-[hsl(210,70%,35%)] to-[hsl(160,55%,42%)] h-16"></div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 py-6 bg-white">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Sidebar */}
          <aside className="lg:w-36 flex-shrink-0" aria-label="Steri-Clean Locations">
            <div className="sticky top-20">
            <div className="mb-6 text-center">
              <h2 className="text-lg font-bold text-[hsl(0,100%,30%)] mb-2">Hoarding Cleanup Service<br/>Steri-Clean Locations</h2>
            </div>
            
            <div className="mb-6">
              <img 
                src="https://hoardingcleanup.com/i/u/10021204/i/Steri-Clean_Location_Header_Hoarding_Cleanup.png" 
                alt="Steri-Clean Location Header" 
                className="w-full"
              />
            </div>
            
            <nav className="text-base space-y-1 max-h-[50vh] overflow-y-auto" aria-label="State locations">
              <a href="https://hoardingcleanup.com/steri_clean_arizona_hoarding_cleanup" className="block text-[hsl(0,100%,30%)] hover:underline">Arizona</a>
              <a href="https://hoardingcleanup.com/steri_clean_california" className="block text-[hsl(0,100%,30%)] hover:underline font-bold">California</a>
              <a href="https://hoardingcleanup.com/steri_clean_colorado" className="block text-[hsl(0,100%,30%)] hover:underline">Colorado</a>
              <a href="http://hoardingcleanup.com/steri_clean_connecticut" className="block text-[hsl(0,100%,30%)] hover:underline">Connecticut</a>
              <a href="https://hoardingcleanup.com/steri_clean_delaware_hoarding_clean_up" className="block text-[hsl(0,100%,30%)] hover:underline">Delaware</a>
              <a href="https://hoardingcleanup.com/steri_clean_florida/" className="block text-[hsl(0,100%,30%)] hover:underline">Florida</a>
              <a href="https://hoardingcleanup.com/steri_clean_georgia" className="block text-[hsl(0,100%,30%)] hover:underline">Georgia</a>
              <a href="https://hoardingcleanup.com/idaho/" className="block text-[hsl(0,100%,30%)] hover:underline">Idaho</a>
              <a href="https://hoardingcleanup.com/steri_clean_illinois" className="block text-[hsl(0,100%,30%)] hover:underline">Illinois</a>
              <a href="https://hoardingcleanup.com/steri_clean_indiana" className="block text-[hsl(0,100%,30%)] hover:underline">Indiana</a>
              <a href="https://hoardingcleanup.com/steri_clean_iowa/" className="block text-[hsl(0,100%,30%)] hover:underline">Iowa</a>
              <a href="https://hoardingcleanup.com/steri_clean_kansas" className="block text-[hsl(0,100%,30%)] hover:underline">Kansas</a>
              <a href="https://hoardingcleanup.com/steri_clean1" className="block text-[hsl(0,100%,30%)] hover:underline">Kentucky</a>
              <a href="https://hoardingcleanup.com/steri_clean_new_england/" className="block text-[hsl(0,100%,30%)] hover:underline">Maine</a>
              <a href="https://hoardingcleanup.com/steri_clean_maryland" className="block text-[hsl(0,100%,30%)] hover:underline">Maryland</a>
              <a href="https://hoardingcleanup.com/steri_clean_massachusetts/" className="block text-[hsl(0,100%,30%)] hover:underline">Massachusetts</a>
              <a href="https://hoardingcleanup.com/steri_clean_michigan" className="block text-[hsl(0,100%,30%)] hover:underline">Michigan</a>
              <a href="https://hoardingcleanup.com/steri_clean_minnesota/" className="block text-[hsl(0,100%,30%)] hover:underline">Minnesota</a>
              <a href="https://hoardingcleanup.com/steri_clean_missouri" className="block text-[hsl(0,100%,30%)] hover:underline">Missouri</a>
              <a href="https://hoardingcleanup.com/steri_clean_nebraska" className="block text-[hsl(0,100%,30%)] hover:underline">Nebraska</a>
              <a href="https://hoardingcleanup.com/steri-clean-las-vegas" className="block text-[hsl(0,100%,30%)] hover:underline">Nevada</a>
              <a href="https://hoardingcleanup.com/steri_clean_new_england/" className="block text-[hsl(0,100%,30%)] hover:underline">New Hampshire</a>
              <a href="https://hoardingcleanup.com/steri_clean_new_jersey" className="block text-[hsl(0,100%,30%)] hover:underline">New Jersey</a>
              <a href="https://hoardingcleanup.com/steri_clean_new_york" className="block text-[hsl(0,100%,30%)] hover:underline">New York</a>
              <a href="https://hoardingcleanup.com/steri_clean_north_carolina" className="block text-[hsl(0,100%,30%)] hover:underline">North Carolina</a>
              <a href="https://hoardingcleanup.com/steri_clean_ohio" className="block text-[hsl(0,100%,30%)] hover:underline">Ohio</a>
              <a href="https://hoardingcleanup.com/steri_clean_oregon" className="block text-[hsl(0,100%,30%)] hover:underline">Oregon</a>
              <a href="https://hoardingcleanup.com/steri_clean_pennsylvania" className="block text-[hsl(0,100%,30%)] hover:underline">Pennsylvania</a>
              <a href="https://hoardingcleanup.com/steri_clean_rhode_island" className="block text-[hsl(0,100%,30%)] hover:underline">Rhode Island</a>
              <a href="https://hoardingcleanup.com/steri_clean_south_carolina" className="block text-[hsl(0,100%,30%)] hover:underline">South Carolina</a>
              <a href="https://hoardingcleanup.com/steri-clean-south-dakota/" className="block text-[hsl(0,100%,30%)] hover:underline">South Dakota</a>
              <a href="https://hoardingcleanup.com/steri_clean_texas" className="block text-[hsl(0,100%,30%)] hover:underline">Texas</a>
              <a href="https://hoardingcleanup.com/steri_clean_utah" className="block text-[hsl(0,100%,30%)] hover:underline">Utah</a>
              <a href="https://hoardingcleanup.com/steri_clean_new_england/" className="block text-[hsl(0,100%,30%)] hover:underline">Vermont</a>
              <a href="https://hoardingcleanup.com/steri_clean_virginia" className="block text-[hsl(0,100%,30%)] hover:underline">Virginia</a>
              <a href="https://hoardingcleanup.com/steri_clean_washington" className="block text-[hsl(0,100%,30%)] hover:underline">Washington</a>
              <a href="https://hoardingcleanup.com/steri-clean-west-virginia" className="block text-[hsl(0,100%,30%)] hover:underline underline">West Virginia</a>
            </nav>

            {/* Partner Links */}
            <div className="mt-6 space-y-4">
              <a href="http://1800hoarders.com" target="_blank" rel="noopener noreferrer">
                <img src="https://hoardingcleanup.com/i/u/10021204/i/Hoarders.com_Click_Link.jpg" alt="1800Hoarders.com" className="w-full border" />
              </a>
              <a href="http://challengingdisorganization.org" target="_blank" rel="noopener noreferrer">
                <img src="https://hoardingcleanup.com/i/u/10021204/i/ICD.png" alt="Institute for Challenging Disorganization" className="w-full border" />
              </a>
              <a href="http://crimescenecleanupfranchise.com" target="_blank" rel="noopener noreferrer">
                <img src="https://hoardingcleanup.com/i/u/10021204/i/Hoarding_Clean_Up_Help_2.png" alt="Crime Scene Cleanup Franchise" className="w-full" />
              </a>
            </div>
            </div>
          </aside>

          {/* Main Content */}
          <main id="main-content" className="flex-1 max-h-[calc(100vh-200px)] overflow-y-auto lg:max-h-none lg:overflow-visible">
            {/* Hero Section */}
            <section className="text-center mb-8">
              <img 
                src="https://hoardingcleanup.com/zirw/1519060468208/i/u/10021204/i/Steri-Clean-Logo-4clr.jpg" 
                alt="Steri-Clean Logo" 
                className="mx-auto max-w-full h-auto mb-4"
                style={{ maxWidth: '600px' }}
              />
              <h1 className="text-3xl font-bold text-[hsl(0,100%,30%)] mb-2">California Hoarding Cleanup</h1>
              <p className="text-lg text-[hsl(0,100%,30%)] font-bold">Statewide Offices (800) 462-7337</p>
              <p className="text-lg text-[hsl(0,100%,30%)] font-bold">(List of local numbers at bottom of page)</p>
              <img 
                src="//o.b5z.net/i/u/10021204/i/Before_and_After_Hoarding_Photos_Slider2.jpg" 
                alt="Before and After Hoarding Photos" 
                className="mx-auto mt-4 max-w-full"
              />
            </section>

            {/* Introduction */}
            <section className="mb-8 text-justify">
              <h2 className="text-lg font-bold text-[hsl(0,100%,30%)] mb-3">Hoarding Cleanup Help in California:</h2>
              <p className="mb-4">
                Steri-Clean California has been helping people in California who struggle with clutter and/or hoarding for well over 2 decades. We take a different approach, where the human factor comes first. Every plan is not the same, in fact no 2 plans can be the same! The Steri-Clean method is so effective, we have successfully cleaned over 15,000 homes!
              </p>
              <p className="mb-4">
                Our first priority is to actually HELP our client, not make their situation worse. For this reason, we don't advertise on our vehicles. All of our vehicles are plain white and unmarked for discretion, or have a simple Steri-Clean logo with no description of what we do.
              </p>
              <p className="mb-4">
                We are blessed and truly thankful to have not just helped people declutter and clean their homes, but help them regain control of their lives! Hoarding is not caused by laziness, but is a much bigger issue. Hoarding is typically a complex issue with many layers. It is important that we realize how to allow our customers to remain in control while we help them unravel all the layers. This will not only allow the best progress at restoring functionality and safety to their home, but will also allow them to work on the many underlying issues that cause the hoarding behavior in the first place.
              </p>
              <p className="mb-4">
                We understand the position our California hoarding and clutttered clients are in and will provide everything they could need for a fresh start. Contact us today for hoarding cleanup help and start the road to recovering from this debilitating lifestyle. We offer free hoarding clean up estimates!
              </p>
            </section>

            {/* Yelp Badge */}
            <div className="text-center mb-8">
              <iframe 
                height="59" 
                width="124" 
                style={{ display: 'inline-block', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}
                src="https://www.yelp.com/biz_embedded_content/CbsHIvCgVHbvKQpnz_X1vQ/badge/rrc" 
                frameBorder="0" 
                scrolling="no"
                title="Yelp Rating"
              />
            </div>

            {/* Services and Contact Form Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Services List */}
              <section>
                <h2 className="text-lg font-bold text-[hsl(0,50%,25%)] mb-4">Steri-Clean Hoarding Clean Up Services:</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Free Photo Estimates</li>
                  <li>Unmarked Vehicles</li>
                  <li>Trained Staff Members</li>
                  <li>Customized Cleaning Plans</li>
                  <li>Sorting/Categorizing</li>
                  <li>Organizing</li>
                  <li>Donation/Transportation</li>
                  <li>Recycling</li>
                  <li>Disposal/Dump Trucks/Roll-Offs</li>
                  <li>Storage Of Items</li>
                  <li>Hoarding Support Groups</li>
                  <li>One On One Hoarding Help Program</li>
                  <li>Biohazard Cleaning</li>
                  <li>Animal Hoarding Cleanup</li>
                  <li>Proper Disinfection</li>
                  <li>Restoration Referral Program</li>
                  <li>Phone Support 7 days a week!</li>
                </ul>
              </section>

              {/* Contact Form */}
              <section>
                <h2 className="text-lg font-bold text-[hsl(0,100%,20%)] text-center mb-4">Have Questions? Contact Us Now!</h2>
                <div className="border rounded p-4 bg-muted/30">
                  <iframe 
                    src="https://cleannet.steri-clean.com/hoarders/Schedule/workorderform.aspx" 
                    width="100%" 
                    height="680" 
                    style={{ overflow: 'auto', border: 0 }}
                    title="Contact Form"
                  />
                </div>
              </section>
            </div>

            {/* Local Phone Numbers */}
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-center mb-2">Hoarding Cleanup California</h2>
              <h3 className="text-3xl font-bold text-center mb-6">Contact us - Local Numbers</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 max-w-lg mx-auto text-lg">
                <div>Fresno</div><div className="text-right">559-401-4011</div>
                <div>Glendale</div><div className="text-right">818-471-4058</div>
                <div>Hayward</div><div className="text-right">510-270-2370</div>
                <div>Inland Empire</div><div className="text-right">909-481-2285</div>
                <div>Long Beach</div><div className="text-right">424-903-8003</div>
                <div>Los Angeles</div><div className="text-right">213-550-4468</div>
                <div>Modesto</div><div className="text-right">209-683-1019</div>
                <div>Orange County</div><div className="text-right">714-899-4225</div>
                <div>Riverside</div><div className="text-right">951-707-4407</div>
                <div>Sacramento</div><div className="text-right">916-236-4548</div>
                <div>San Gabriel Valley</div><div className="text-right">626-594-2610</div>
                <div>San Bernardino</div><div className="text-right">909-277-3405</div>
                <div>San Diego</div><div className="text-right">858-412-3187</div>
                <div>San Francisco</div><div className="text-right">415-630-1320</div>
                <div>San Jose</div><div className="text-right">408-610-0215</div>
                <div>Santa Barbara</div><div className="text-right">805-504-3093</div>
                <div>Santa Rosa</div><div className="text-right">707-595-0028</div>
                <div>Stockton</div><div className="text-right">209-888-4185</div>
                <div>Temecula/Murrieta</div><div className="text-right">951-600-1277</div>
                <div>Ventura</div><div className="text-right">805-620-5320</div>
              </div>
            </section>

            {/* Therapists Section */}
            <section className="mb-8">
              <div className="text-center mb-6">
                <img 
                  src="https://hoardingcleanup.com/i/u/10021204/i/hoardingtherapy.png" 
                  alt="Hoarding Therapy" 
                  className="mx-auto"
                />
              </div>
              
              <p className="mb-6">
                Whether you have already successfully received hoarding cleanup assistance, or you aren't quite ready for that yet, we strongly recommend working with a hoarding thearpist in California that is trained in hoarding and/or Cognitive Behavioral Therapy. This list below provides the contact information for therapists in California that we know and trust to work with our clients showing signs of hoarding behavior.
              </p>

              {/* Therapist Listings */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold">Berkeley:</h3>
                  <p>Deborah Efron, LCSW<br/>
                  1760 Solano Avenue – Suite 301<br/>
                  Berkeley, CA 94707<br/>
                  Phone: (510) 717-1415<br/>
                  Email: efron@sbcglobal.net</p>
                  <p className="mt-2">Melinda White, MFT<br/>
                  1635 Solano Avenue<br/>
                  Berkeley, CA 94707<br/>
                  Phone: (510).526.8208<br/>
                  Email: mwhite@berkeleytherapist.net</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Beverly Hills:</h3>
                  <p>Joel L. Becker, PhD<br/>
                  9171 Wilshire Blvd.<br/>
                  Beverly Hills, CA 90210<br/>
                  Phone: (310) 858-3831 or (310) 858-3832<br/>
                  Email: jbecker@ucla.edu</p>
                  <p className="mt-2">Jayson Mystkowski, PhD<br/>
                  9400 Brighton Way – Suite 407<br/>
                  Beverly Hills, CA 90210<br/>
                  Phone: (310) 858-3831<br/>
                  Email: Jlmyst@ucla.edu</p>
                  <p className="mt-2">Marie K. Lee, PhD<br/>
                  9777 Wilshire Blvd<br/>
                  Suite 707<br/>
                  Beverly Hills, CA 90212<br/>
                  Phone: (310).464.6363<br/>
                  Email: drlee@marieklee.com</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Calabasas:</h3>
                  <p>Dr. Lance Steinberg<br/>
                  23504 Park Sorrento<br/>
                  Suite 101<br/>
                  Calabasas, CA 91302<br/>
                  Phone: (818) 224-3540<br/>
                  Fax: (818) 224-3639</p>
                  <p className="mt-2">Karron Maidment - RN, MFT<br/>
                  5000 N Parkway Calabasas, Suite 218<br/>
                  Calabasas, CA 91302<br/>
                  Phone: (310).285.2280</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Carpinteria:</h3>
                  <p>Roland Rotz., PhD<br/>
                  Clinical Psychologist<br/>
                  Lifespan Development Center<br/>
                  CA Lic.#psy12424<br/>
                  957 Maple Ave<br/>
                  Carpinteria, CA 93013<br/>
                  805-566-0441<br/>
                  email- DocRotz@DocRotz.com</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Costa Mesa:</h3>
                  <p>Harish Kavirajan, MD<br/>
                  950 South Coast Drive – Suite 202<br/>
                  Costa Mesa, CA 92626<br/>
                  Phone: (949) 422-6814<br/>
                  Fax: (714) 424-0012</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Cypress:</h3>
                  <p>S. Leiann Harker, PsyD<br/>
                  5300 Orange Avenue<br/>
                  Suite 226<br/>
                  Cypress, CA 90630<br/>
                  Phone: (714) 652-3637</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Encino:</h3>
                  <p>Diane Gilbert, MFCT<br/>
                  16055 Ventura Boulevard #719<br/>
                  Encino, CA 91436<br/>
                  Phone: (818) 788-3160<br/>
                  Fax: (818) 788-0313</p>
                  <p className="mt-2">Tanya N. Rishwain, MSW, LCSW<br/>
                  16055 Ventura Boulevard—Suite 1025<br/>
                  Encino, CA 91436 US<br/>
                  Phone: (818) 788-0577<br/>
                  Fax: (818) 343-0255</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Escondido:</h3>
                  <p>Lori Riddle-Walker, MFT<br/>
                  502 W El Norte Parkway<br/>
                  Escondido, CA 92026<br/>
                  Phone: (760) 715-7273<br/>
                  Email: LLRWalker@sbcglobal.net</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Fullerton:</h3>
                  <p>Joan Land, MFT<br/>
                  1370 Brea Blvd.<br/>
                  Fullerton, CA 92835<br/>
                  phone: (714) 526-8433<br/>
                  fax: (714) 257-1017</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Garza Garciz:</h3>
                  <p>Nancy Padilla – BTI Graduate<br/>
                  Rio Villagran #621 Col del Valle<br/>
                  Garza Garciz Mexico, CA 66220 CA<br/>
                  Phone: 81.837.82609<br/>
                  Fax: 81.83560024<br/>
                  Email: nancypadillage@Hotmail.ca</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Glendale:</h3>
                  <p>Rodney P. Boone, PhD<br/>
                  116 N. Maryland Ave. – Suite 230<br/>
                  Cognitive Behavior Therapy Center of So Cal<br/>
                  Glendale, CA 91206<br/>
                  Phone: (818) 547-2623<br/>
                  Fax: (310).831.4319<br/>
                  Email: rpboone@cbtsocal.com</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Glendora:</h3>
                  <p>Raymond Jones, MFT, CAS<br/>
                  541 S. Glendora – Suite 1F<br/>
                  Glendora, CA 91741<br/>
                  Phone: (626) 914-1456<br/>
                  Fax: (626) 914-1456</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Kentfield:</h3>
                  <p>Jeffrey R. Martin, PhD<br/>
                  1010 Sir Francis Drake Blvd – Suite 2E<br/>
                  Kentfield, CA 94904<br/>
                  Phone: (415).461.3175</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">La Jolla:</h3>
                  <p>Brett Johnson, MD<br/>
                  4225 Executive Square<br/>
                  Suite 1130<br/>
                  La Jolla, CA 92137<br/>
                  Phone: (858)455.9712<br/>
                  Fax: (858).455.9713<br/>
                  Email: johnson@psychiatryca.com</p>
                  <p className="mt-2"><strong>Sanjaya Saxena, MD.</strong><br/>
                  UCSD Obsessive-Compulsive Disorders Program<br/>
                  La Jolla, CA 92037<br/>
                  For appointments, contact<br/>
                  Mylene Eduvala: (858) 534-6200</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">La Mesa:</h3>
                  <p>Jeff Schanowitz, PhD<br/>
                  7484 University Avenue<br/>
                  Suite 330<br/>
                  La Mesa, CA 91941<br/>
                  Phone: (619).252.3713<br/>
                  Fax: (858).536.7084<br/>
                  Email: jeffs686@yahoo.com</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Lafayette:</h3>
                  <p>Edward Abramson, PhD<br/>
                  901 Moraga Road – Suite D<br/>
                  Lafayette, CA 94549<br/>
                  Phone: (925) 299-9011<br/>
                  Email: Abramson@jps.net</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Los Altos:</h3>
                  <p>John N. Marquis, PhD<br/>
                  745 Distel Drive (Upstairs)<br/>
                  Los Altos, CA 94022<br/>
                  Phone: (650) 965-2422<br/>
                  Email: Jnmarquis@comcast.net</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Los Angeles:</h3>
                  <p>Karron Maidment, Coordinator, UCLA OCD<br/>
                  Partial Hospitalization Program<br/>
                  Los Angeles, CA<br/>
                  310-794-7305, 310-794-7577<br/>
                  Outpatient services: Call Access Center of Anxiety Disorders Clinic at: 310-825-9989</p>
                  <p className="mt-2">Alexander Bystritsky, MD, PhD<br/>
                  300 UCLA Medical Plaza # 2335<br/>
                  Los Angeles, CA 90095<br/>
                  Phone: (310) 206-5133<br/>
                  Email: Abystritsky@medunit.ucla.edu</p>
                  <p className="mt-2">Tom Corboy, MFT<br/>
                  OCD Center of LA<br/>
                  10921 Wilshire Blvd-Suite 502<br/>
                  Los Angeles, CA 90024<br/>
                  Phone: (310) 335-5443<br/>
                  Email: director@ocdla.com</p>
                  <p className="mt-2">James Feusner, MD<br/>
                  300 UCLA Medical Center<br/>
                  Room 2345<br/>
                  Los Angeles, CA 90095<br/>
                  Phone: (310).206.4951<br/>
                  Fax: (323).443.3593<br/>
                  Email: Jfeusner@mednet.ucla.edu</p>
                  <p className="mt-2">Eda Gorbis, Ph.D., MFCC<br/>
                  UCLA OCD Research Program<br/>
                  921 Westwood Boulevard – Suite 223<br/>
                  Los Angeles, CA 90024<br/>
                  Phone: (323) 651-1199<br/>
                  Email: edagorbis@yahoo.com</p>
                  <p className="mt-2">Denise Nelson, PhD<br/>
                  10921 Wilshire Blvd – Suite 1206<br/>
                  Los Angeles, CA 90024<br/>
                  Phone: (310) 963-4891</p>
                  <p className="mt-2">Tanya Vapnik, PhD, RN<br/>
                  10921 Wilshire Blvd #702<br/>
                  Los Angeles, CA 990024<br/>
                  Phone: (310).335.2202<br/>
                  Fax: (310).209.0444<br/>
                  Email: tvapnik@sbcglobal.net</p>
                  <p className="mt-2">Linda Trozzolino, PhD<br/>
                  12011 San Vincente Boulevard – # 402<br/>
                  Los Angeles, CA 90049<br/>
                  Phone: (310) 471-8574</p>
                  <p className="mt-2">Jenny Yip, PsyD<br/>
                  11633 San Vicente Boulevard<br/>
                  Suite 306<br/>
                  Los Angeles, CA 90049<br/>
                  Phone: (310).820.8186<br/>
                  Email: drjyip@yahoo.com</p>
                  <p className="mt-2">Abraham Havivi, MD<br/>
                  921 Westwod Blvd #216<br/>
                  Los Angeles, CA 90048<br/>
                  Phone: (310).208.1770<br/>
                  Email: ahavivi@Ucla.edu</p>
                  <p className="mt-2">Lilly Rousseva-Stoyanova, Ph.D.<br/>
                  Los Angeles, CA 90024<br/>
                  310-335-2202</p>
                  <p className="mt-2">Michael E. Cameron, PhD<br/>
                  Suite 226<br/>
                  1081 Westwood Blvd<br/>
                  Los Angeles, CA 90024<br/>
                  Phone: (310).208.3909</p>
                  <p className="mt-2">R. Lindsey Bergman, PhD<br/>
                  10850 Wilshire Blvd, Suite 1210<br/>
                  Los Angeles, CA 90024<br/>
                  Phone: (310).880.8867<br/>
                  Fax: (310).825.0106<br/>
                  Email: lberman@ucla.edu</p>
                  <p className="mt-2">Shana Doronn, LCSW, PsyD<br/>
                  1923 1/2 Westwood Boulevard Suite 2<br/>
                  Los Angeles, CA 90025<br/>
                  Phone: (310).903.7115<br/>
                  Fax: sdoronn@mednet.ucla.edu</p>
                  <p className="mt-2">Neal Goldberg, LCSW<br/>
                  10350 Santa Monica Blvd Suite 310<br/>
                  Los Angeles, CA 90025<br/>
                  Phone: (310).557.1537</p>
                  <p className="mt-2">Mary De Van, LCSW<br/>
                  Mary works with people both individually and in small groups and offers consultations to family members of clutterers. She participates in the LA County Hoarding Task Force, helping to assist seniors with Hoarding problems and educate other professionals re: hoarding.<br/>
                  (323) 227-6279</p>
                  <p className="mt-2">Paul Bohn, MD, PsyD<br/>
                  12300 Wilshire Blvd # 330<br/>
                  West Los Angeles, CA<br/>
                  Phone: (310) 829-1924<br/>
                  Fax: (310) 829-3877<br/>
                  Hoarding/ ERP/CBT</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Menlo Park:</h3>
                  <p>Joyce Nash, PhD<br/>
                  1220 University Drive – Suite 104<br/>
                  Menlo Park, CA 94025<br/>
                  Phone: (650) 329-1000<br/>
                  Fax: (650) 851-0103</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Mill Valley:</h3>
                  <p>Alexandra Matthews, Ph.D. (Psy16219)275<br/>
                  Miller Avenue, Suite 203<br/>
                  Mill Valley, CA 94941<br/>
                  ph: (415) 388-0800<br/>
                  fax: (415) 383-6320 am@amatthewsphd.com</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Mission Viejo:</h3>
                  <p>Leslie Gustafson, MFT<br/>
                  24772 Chrisanta Drive<br/>
                  Mission Viejo, CA 92691<br/>
                  Phone: (714) 284-7445</p>
                  <p className="mt-2">Barbara Zebb, PhD<br/>
                  Suite 275<br/>
                  27401 Los Altos<br/>
                  Mission Viejo, CA 92691<br/>
                  Phone: (877).230.5429</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Modesto:</h3>
                  <p>John J. Jacisin, MD, DFAPA<br/>
                  Psychiatric Medical Group<br/>
                  3425 Coffee Road – Suite 2A<br/>
                  Modesto, CA 95335<br/>
                  Phone: (209) 524-9401<br/>
                  Email: drjjj42@insearch.com</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Napa:</h3>
                  <p>Jennifer Ash IMF 51800<br/>
                  Office of Fred Hollander MFT 35282<br/>
                  832 School St # 3<br/>
                  Napa, CA 94558<br/>
                  Phone: (707).260.4910<br/>
                  Email: jennifer.ash@sbcglobal.net</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Newport Beach:</h3>
                  <p>Karen M. Simon, PhD<br/>
                  Center for Cognitive Therapy<br/>
                  1101 Dove Street – Suite 235<br/>
                  Newport Beach, CA 92660<br/>
                  Phone: (949)725-3800<br/>
                  Fax: (949)553.1083<br/>
                  Email: karen.simon@cox.net</p>
                  <p className="mt-2">Marie K. Lee, PhD<br/>
                  4060 Campus Drive Suite 120<br/>
                  Newport Beach, CA 92660<br/>
                  Phone: (310).464.6363<br/>
                  Email: drlee@marieklee.com</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Novato:</h3>
                  <p>Daniel Kalb, PhD<br/>
                  200 Professional Center Drive<br/>
                  Suite 200<br/>
                  Novato, CA 94947<br/>
                  Phone: (415) 898-9015 x 525<br/>
                  Email: dkalb@lvha.net</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Oakland:</h3>
                  <p><strong>Michael A. Tompkins, Ph.D.<br/>
                  San Francisco Bay Area Center for Cognitive Therapy<br/>
                  Oakland, CA</strong><br/>
                  (510) 652-4455<br/>
                  <strong>3/08: currently not taking new patients.</strong></p>
                  <p className="mt-2">Sharon F. Smith, MSW, MFT (*Limited Hoarding treatment)<br/>
                  445 Bellevue Ave # 201<br/>
                  Oakland, CA 94610 US<br/>
                  Phone: (510) 891-9430<br/>
                  Fax: (510) 653-3814</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Olympic Valley:</h3>
                  <p>Robb Gaffney, MD<br/>
                  1604 Christy Hill Road<br/>
                  Olympic Valley, CA 96146<br/>
                  Phone: (530).583.4233<br/>
                  Fax: (530).583.1742</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Orange County, California</h3>
                  <p>Mark Odom, LCSW 714-504-0671<br/>
                  Mark Odom is a Licensed Clinical Social Worker who provides individual and family consultation, counseling, and practical help for excessive clutter and hoarding behavior. He is the past chairperson of and currently serves as the clinical consultant to the Orange County Task Force on Hoarding. E-mail: info@MarkOdomLCSW.com</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Orinda:</h3>
                  <p>Lynn Martin, NP, MS, RN, CS<br/>
                  61 Avenida de Orinda # 100<br/>
                  Orinda, CA 94563<br/>
                  Phone: (925) 377-0410<br/>
                  Email: martincbt@comcast.net</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Palo Alto:</h3>
                  <p>Beverly E. Taylor, CH, CSC, CLP<br/>
                  Certified Hypnotherapist<br/>
                  Director, Easy Key to Life Center<br/>
                  Offices in Peninsula and East Bay<br/>
                  Palo Alto, CA<br/>
                  (866) 326-EASY (3279)<br/>
                  Beverly@easykeytolife.com<br/>
                  Beverly Taylor was the hypnotherapist on the TLC TV "Help! I'm a Hoarder" While the show ended up with hypnosis looking like a "magic cure", it portrayed what actually happened (no special effects other than they sped up the morning's cleaning). Beverly has worked with hoarders with OCD, but it takes a lot longer for them to see results (e.g., 12 or more sessions versus 3 to 6 for clutterers).</p>
                  <p className="mt-2">Hugh Baras, PhD<br/>
                  415 Cambridge Avenue # 14<br/>
                  Palo Alto, CA 94306<br/>
                  Phone: (650) 325-9002<br/>
                  Email: Baras@bigfoot.com</p>
                  <p className="mt-2">Heidi Hartston, PhD<br/>
                  707 Welch Road<br/>
                  Suite 207 Building B<br/>
                  Palo Alto, CA 94304<br/>
                  Phone: (650).888.0820<br/>
                  Fax: (510).482.4258<br/>
                  Email: hhartston@yahoo.com</p>
                  <p className="mt-2">Dr. Marina Bystritsky, PhD<br/>
                  Suite 23<br/>
                  467 Homer Avenue<br/>
                  Palo Alto, CA 94301<br/>
                  Phone: 650.525.5522<br/>
                  Fax: 484.351.2558</p>
                  <p className="mt-2">Ernest Schmidt, LCSW<br/>
                  407 Sherman Avenue<br/>
                  Palo Alto, CA 94306 US<br/>
                  Phone: (650).384.0342<br/>
                  Fax: (650).327.9151</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Pasadena:</h3>
                  <p>Dr. Steven Dilfaver, MD<br/>
                  Haraszti & Associates<br/>
                  2810 East Del Mar Boulevard<br/>
                  Suite 8<br/>
                  Pasadena, CA 91107<br/>
                  Phone: (626).356.0363</p>
                  <p className="mt-2">Michael E. Jones<br/>
                  127 N Madison Avenue # 302<br/>
                  Pasadena, CA 91101<br/>
                  Phone: (818).974.2158</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Petaluma:</h3>
                  <p>June Taylor<br/>
                  Petaluma, CA 95492<br/>
                  Phone: (707).838.4697 x 707<br/>
                  Email: ocdtaylor@comcast.net</p>
                  <p className="mt-2">Doris R. Sami, DSW, LCSW, BCD –<br/>
                  BTI Graduate<br/>
                  35 Maria Drive Suite 861<br/>
                  Petaluma, CA 94954<br/>
                  Phone: (707)544.0821<br/>
                  Email: doris@sami.org</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Redding:</h3>
                  <p>Dr. Barbara Sachs, PhD<br/>
                  Suite 107- 999 Mission De Oro<br/>
                  Redding, CA 96003<br/>
                  Phone: (530)722.1077<br/>
                  Fax: (530).221.4411</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Redondo Beach:</h3>
                  <p>Paula Van Doren, LCSW, BCD<br/>
                  205 Avenue I, # 11<br/>
                  Redondo Beach, CA 90277<br/>
                  Phone: (310).245.6814</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Roseville:</h3>
                  <p>Dr. Barbara Sachs, PhD<br/>
                  Suite 110<br/>
                  805 Douglas Boulevard<br/>
                  Roseville, CA 95678<br/>
                  Phone: (530)722.1077<br/>
                  Fax: (530).221.4411</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Sacramento:</h3>
                  <p>Felicity Sapp, PhD<br/>
                  8980 Aldderson Avenue<br/>
                  Sacramento, CA 95826<br/>
                  Phone: (916).366.0647 x 2<br/>
                  Email: fsapp.sac@sbcglobal.net</p>
                  <p className="mt-2">Robin Zasio, PsyD<br/>
                  The Anxiety Treatment Center of Sacramento<br/>
                  8980 Alderson Avenue<br/>
                  Sacramento, CA 95826<br/>
                  Phone: (916) 366-0647<br/>
                  Fax: (916) 487-4408<br/>
                  Email: drrobin@sierrabg.com</p>
                  <p className="mt-2">Susan Haverty, MFT<br/>
                  3067 Freeport Blvd<br/>
                  Sacramento, CA 95818<br/>
                  Phone: (916).355.8721<br/>
                  Email: susanhavertymft@Yahoo.com</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">San Diego:</h3>
                  <p>Jim Hatton, PhD,MFT<br/>
                  5665 Oberlin Drive – Suite 201<br/>
                  San Diego, CA 92121<br/>
                  Phone: (858) 457-8428<br/>
                  Email: jdhatton@ucsd.edu</p>
                  <p className="mt-2">Paul C. Lee, MD<br/>
                  7770 Regents Road #113305<br/>
                  San Diego, CA 92122<br/>
                  Phone: (858).646.9877<br/>
                  Fax: (858).824.1916</p>
                  <p className="mt-2">Jeffrey Schanowitz, PhD<br/>
                  7484 University Avenue Suite 330<br/>
                  San Diego, CA 91941<br/>
                  Phone: (619).252.3713</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">San Francisco:</h3>
                  <p>Milam Freitag, PhD<br/>
                  Suite 420 – 55 New Montgomery Street<br/>
                  San Francisco, CA 94105<br/>
                  Phone: (415) 522-2953<br/>
                  Email: milamfreitag@sbcglobal.net<br/>
                  Hoarding/Home Visits/Sliding Scale/ERP/CBT</p>
                  <p className="mt-2">David L. Levine, MD<br/>
                  2107 Van Ness Ave – Suite 305<br/>
                  San Francisco, CA 94109<br/>
                  Phone: (415) 441-4171<br/>
                  Fax: (415) 352-2050<br/>
                  Hoarding/ERP/CBT</p>
                  <p className="mt-2">Dr. James Reich, MD<br/>
                  2406 Clay Street<br/>
                  San Francisco, CA 94115<br/>
                  Phone: (415) 673-2950<br/>
                  Hoarding/ ERP/CBT</p>
                  <p className="mt-2">Dr. Bridget Flynn Walker, PhD<br/>
                  760 Market Street – Suite 945<br/>
                  San Francisco, CA 94102<br/>
                  Phone: (415) 263-5711<br/>
                  Home Visits/Sliding Scale/Support Group/ERP/CBT</p>
                  <p className="mt-2">William A. Dickman, MD<br/>
                  9 Funston Avenue<br/>
                  San Francisco, CA 94129<br/>
                  Phone: (415)561.3140<br/>
                  Fax: (415).482.9712<br/>
                  Hoarding/ERP/CBT</p>
                  <p className="mt-2">Jill Warburton, PsyD<br/>
                  2481 Clay Street<br/>
                  Suite 202B<br/>
                  San Francisco, CA 94115<br/>
                  Phone: (415).922.7793<br/>
                  Fax: (415).474.6409<br/>
                  Email: jillwartburton@gmail.com<br/>
                  Hoarding/Sliding Scale/Home Visit on case by case basis/ERP/CBT</p>
                  <p className="mt-2"><strong>Oasis Office of Self Help –</strong><br/>
                  tel: 575-1400<br/>
                  1095 Market Street, Suite 202- – Offers various support groups. Has a variety of community resources (perhaps some counseling resources?)</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">San Jose:</h3>
                  <p>Donald B. Dufford, PhD<br/>
                  3880 S. Bascom Avenue – Suite 212<br/>
                  San Jose, CA 95124 US<br/>
                  Phone: (408) 559-9088 or (408) 377-7833<br/>
                  Hoarding/Support Group/Exposure Response Prevention/Cognitive Behavioral Therapy</p>
                  <p className="mt-2">Karen Radella, PhD,LMFT –<br/>
                  BTI Graduate<br/>
                  1302 Lincoln Avenue # 205<br/>
                  San Jose, CA 95125<br/>
                  Phone: (408) 866-8570<br/>
                  Fax: (408)278-9030<br/>
                  Email: Karenradella@yahoo.com<br/>
                  <strong>Home Visits</strong>/Exposure & Response Prevention/Cognitive Behavioral Therapy</p>
                  <p className="mt-2">James M. Boyers, PhD – BTI Graduate<br/>
                  1130 McKendrie Street<br/>
                  San Jose, CA 95126<br/>
                  Phone: (408).248.7728<br/>
                  Email: jimboyers@sbcglobal.net<br/>
                  Hoarding/ERP/CBT</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">San Luis Obispo:</h3>
                  <p>Eric Goodman, PhD – BTI Graduate<br/>
                  Coastal Center for Anxiety Treatment<br/>
                  Suite B-2, 1428 Phillips Lane<br/>
                  San Luis Obispo, CA 93401<br/>
                  Phone: (805) 473-3388<br/>
                  Fax: (805).548.0815<br/>
                  Hoarding/Home Visits/Support Group/ERP/CBT</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">San Mateo:</h3>
                  <p>Scott Granet LCSW<br/>
                  161 W. 25th Street – Suite 101<br/>
                  San Mateo, CA 94403 US<br/>
                  Phone: (650) 599-3325<br/>
                  Hoarding/ Home Visits/Sliding Scale/Support Group/ERP/CBT</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">San Raphael:</h3>
                  <p>Pamela A. Marcucci, PhD<br/>
                  1050 Northgate Drive<br/>
                  Suite 480 San Rafael, CA 94903<br/>
                  Phone: (415) 456-2975<br/>
                  Fax: (415).456.7062<br/>
                  Email: pammarc@comcast.net</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Santa Barbara:</h3>
                  <p>Michael I. Beiley, PhD<br/>
                  Anxiety & Panic Dis. Clinic<br/>
                  115 W. Arrellaga Street<br/>
                  Santa Barbara, CA 93101<br/>
                  Phone: (805) 962-2869<br/>
                  Email: Beileyfam@aol.com<br/>
                  Hoarding/ Home Visits/ERP/CBT</p>
                  <p className="mt-2"><strong>Addtl. resource:</strong><br/>
                  Professional Organizer:<br/>
                  Heidi Schulz, CPO-CD<br/>
                  Collaborative Therapy for Clutter Management with Dr. Roland Rotz. 805-569-5288</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Santa Monica:</h3>
                  <p>Gerald Tarlow, PhD<br/>
                  Suite 600 2730 Wilshire Blvd<br/>
                  Santa Monica, CA 90403<br/>
                  Phone: (310) 208-4077<br/>
                  Fax: (818) 222-1390<br/>
                  Email: Gtarlow@ucla.edu<br/>
                  Hoarding/ Home Visits/ERP/CBT</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Santa Rosa:</h3>
                  <p>Doris R. Sami, DSW, LCSW<br/>
                  132 Leland Street<br/>
                  Santa Rosa, CA 95404<br/>
                  Phone: (707) 544-0821 ext.2<br/>
                  Fax: (415) 479-7959</p>
                  <p className="mt-2">Heather Stone, PhD<br/>
                  1023 College Avenue<br/>
                  Santa Rosa, CA 95404<br/>
                  Phone: (707).291.7386<br/>
                  Hoarding/ Home Visits/ERP/CBT</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Saratoga:</h3>
                  <p>Tamara Hartl, PhD<br/>
                  18809 Cox Avenue<br/>
                  Suite 290<br/>
                  Saratoga, CA 95070 US<br/>
                  Phone: (408).603.9857<br/>
                  Email: tamhartl@msn.com<br/>
                  Hoarding/Home Visits/ERP/CBT</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Sherman Oaks:</h3>
                  <p>Charles D. Weinstein, PhD, ABPP-<br/>
                  BTI graduate<br/>
                  4849 Van Nuys Blvd – Suite 210<br/>
                  Sherman Oaks, CA 91403<br/>
                  Phone: (818) 995-4840<br/>
                  Fax: (676) 441-6940<br/>
                  Email: cweinsteinphd@sbcglobal.net<br/>
                  Hoarding/Sliding Scale/Home Visits/ERP/CBT<br/>
                  Behavior Therapy Institute Graduate</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Soquel:</h3>
                  <p>Donald B. Dufford, PhD<br/>
                  5905 Soquel Drive – Suite 400<br/>
                  Soquel, CA 95073<br/>
                  Phone: (831) 479-1960<br/>
                  Fax: (408) 377-7833<br/>
                  Email: drdufford@sbcglobal.net<br/>
                  Hoarding /Sliding Scale/Exposure & Response Prevention/Cognitive Therapy</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Stanford:</h3>
                  <p>Dr. Lorrin M. Koran, MD –<br/>
                  OCD Research Unit Clinic<br/>
                  Dept of Psychiatry – Room 2363<br/>
                  Stanford Medical Center<br/>
                  401 Quarry Road<br/>
                  Stanford, CA 94305<br/>
                  Phone: (650) 723-5154<br/>
                  Hoarding/ERP/CBT<br/>
                  Behavior Therapy Institute Faculty</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Thousand Oaks:</h3>
                  <p>Teresa Rattray, PhD – BTI Graduate<br/>
                  325 E Hillcrest Drive # 115<br/>
                  Thousand Oaks, CA 91360<br/>
                  Phone: (805) 370-8700<br/>
                  Hoarding/Home Visits/ERP/CBT<br/>
                  Behavior Therapy Institute Graduate</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Torrance:</h3>
                  <p>Marie K. Lee, PhD<br/>
                  24445 Hawthorne Blvd – Suite 105<br/>
                  Torrance, CA 90505 US<br/>
                  Phone: (310).464.6363<br/>
                  Email: drlee@marieklee.com<br/>
                  Hoarding/ERP/CBT</p>
                  <p className="mt-2">Rodney Boone, PhD.<br/>
                  University of California at Los Angeles<br/>
                  310-375-4855 (Torrance, CA)<br/>
                  818-547-2623 (Glendale, CA)</p>
                </div>
                <hr className="border-border"/>

                <div>
                  <h3 className="font-bold">Tustin:</h3>
                  <p>Leslie D. Gustafson, MFT<br/>
                  14751 Plaza Drive – Unit F<br/>
                  Tustin, CA 92602<br/>
                  Phone: (714) 284-7445</p>
                </div>
              </div>
            </section>
          </main>

          {/* Right Sidebar */}
          <aside className="lg:w-52 flex-shrink-0" aria-label="Interactive resources">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-[hsl(0,100%,30%)]">Interactive Hoarding Help<br/>Click Boxes Below</h2>
            </div>

            <div className="space-y-4">
              <Link to="/message-board" className="block">
                <img 
                  src="https://hoardingcleanup.com/i/u/10021204/i/Message_Boards2.jpg" 
                  alt="Message Boards" 
                  className="w-full border-2"
                />
              </Link>
              <Link to="/chat-room" className="block">
                <img 
                  src="https://hoardingcleanup.com/i/u/10021204/i/Online_Support.png" 
                  alt="Online Support Group" 
                  className="w-full border-2"
                />
              </Link>
              <Link to="/webinars" className="block">
                <img 
                  src="https://hoardingcleanup.com/i/u/10021204/i/Hoarding_Webinars.png" 
                  alt="Hoarding Webinars" 
                  className="w-full border-2"
                />
              </Link>
              <Link to="/hoarders-tv-show" className="block">
                <img 
                  src="https://hoardingcleanup.com/zirw/1513095988160/i/u/10021204/i/Hoarders_Logo.png" 
                  alt="Hoarders TV Show" 
                  className="w-full max-w-[181px] mx-auto"
                />
              </Link>
            </div>

            {/* Visitor Counter */}
            <div className="mt-6 text-center">
              <div className="inline-block border border-gray-500 px-2 py-1">
                <span className="font-mono text-lg">13946415</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Decorative Bottom Banner */}
      <div className="bg-gradient-to-r from-[hsl(160,55%,42%)] to-[hsl(210,70%,35%)] h-16"></div>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="max-w-5xl mx-auto px-4">
          {/* Footer Navigation */}
          <nav className="flex flex-wrap justify-center gap-2 text-sm mb-4" aria-label="Footer navigation">
            <Link to="/" className="hover:underline">Hoarding Help Home</Link>
            <span>|</span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span>|</span>
            <Link to="/national-resources" className="hover:underline">National Resources</Link>
            <span>|</span>
            <Link to="/about-us" className="hover:underline">About Us</Link>
            <span>|</span>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <span>|</span>
            <Link to="/hoarding-support-group" className="hover:underline">Hoarding Support Group</Link>
            <span>|</span>
            <Link to="/message-board" className="hover:underline">Message Board</Link>
            <span>|</span>
            <Link to="/help-for-families" className="hover:underline">Help For Families</Link>
            <span>|</span>
            <Link to="/help-for-hoarders" className="hover:underline">Help For Hoarders</Link>
            <span>|</span>
            <Link to="/links" className="hover:underline">LINKS</Link>
          </nav>

          <div className="text-center">
            <p className="italic mb-2">"Cleaning with Care and Compassion TM"</p>
            <p className="text-lg font-bold">Hoarding Cleanup</p>
            <p>Nationwide Hoarding Resources Directory</p>
            <p className="mt-4">Copyright 2009 - 2024 HoardingCleanup.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SteriCleanCalifornia;
