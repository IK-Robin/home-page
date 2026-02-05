const Webinars = () => {
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
    { label: "MESSAGE BOARD", href: "/message-board", alt: "Message Board" },
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

  const webinarSections = [
    {
      title: "The Webinar Overview",
      image: "https://hoardingcleanup.com/i/u/10021204/i/Simple_Look_ezr.jpg",
      description: "So many people are affected by hoarding and whether it is yourself, a family member or a friend you need to understand it. The first step to change is learning all you can about the hoarding disorder. This webinar will explain many factors you may have never thought of before. This webinar takes you through why people hoard, different types of hoarding, dangers of hoarding, how to work with a hoarder and the important component of aftercare.",
      contains: "This Section Contains: Hoarding overview, definitions, the most common reasons why people hoard and hoarding demographics.",
      slides: "Number of Slides in this section: 9"
    },
    {
      title: "Types of Hoarding Behavior",
      image: "https://hoardingcleanup.com/i/u/10021204/i/Hoarding_Types_ezr.jpg",
      description: "The misconception that a hoarder is just lazy will be dispelled in this webinar. We will focus on the many reasons people hoard and review the different types of hoarding behaviors out there. While some hoarders are a combination of different types, some are very clear behavioral patterns and can be explained. This section of the webinar outlines very specific types of hoarding behaviors that you will most likely be able to relate to.",
      contains: "This Section Contains: Types of Hoarders/Dozens of Photos",
      slides: "Number of Slides: 75"
    },
    {
      title: "Animal Hoarding",
      image: "https://hoardingcleanup.com/i/u/10021204/i/Animal_Hoarding_ezr.jpg",
      description: "While animal hoarding is a small percentage of the overall hoarding numbers out there, it is a huge problem. While this topic can be an 8 hour class by itself, we have chosen to add the most important parts of the discussion in this webinar series. Animal hoarding affects thousands of animals each year and this portion of the lecture will outline the different types of animal hoarders and is filled with many pictures of animal hoarding cases.",
      contains: "This Section Contains: Animal Hoarding by the Numbers/Types of Animal Hoarders/Animal & Human Illnesses",
      slides: "Number of Slides: 26",
      warning: "WARNING - This section contains photos of sick and deceased animals."
    },
    {
      title: "Hazards in Hoarding Homes",
      image: "https://hoardingcleanup.com/i/u/10021204/i/Hoarding_Dangers_ezr.jpg",
      description: "Whether you are a hoarder, know one or work with hoarders this is a must see. Many people overlook extreme dangers when entering a hoarding environment. Dozens of hoarders die each year in their homes and this section of the webinar will outline the dangers that most don't even think about.",
      contains: "This Section Contains: Numerous Hoarding Dangers/Photos of Real Examples inside hoarders homes",
      slides: "Number of Slides: 91",
      warning: "WARNING - This section contains photos of biohazardous waste and human waste not for entertainment purposes but to shed light on the complexities and adaptation that is found in 10% of hoarding cases."
    },
    {
      title: "Working With Hoarders",
      image: "https://hoardingcleanup.com/i/u/10021204/i/Working_With_Hoarders_ezr.jpg",
      description: "If you want to help a hoarder or have tried and failed there is a lot to understand. First, many hoarders do not want to be helped and simply won't be. Learn your best methods of helping a hoarder by following these quick and easy rules. Again, this portion of the lecture could be a 3 full day course, but this section will certainly give you the main topics needed to even begin to understand your best approach and if helping them is even possible.",
      contains: "This Section Contains: What you need to know to work with a hoarder, mostly lecture",
      slides: "Number of Slides: 6"
    },
    {
      title: "How to Help a Hoarder",
      image: "https://hoardingcleanup.com/i/u/10021204/i/How_to_Help_a_Hoarder_ezr.jpg",
      description: "This section of the webinar breaks down the most important things you need to know before you can begin helping someone suffering from the hoarding disorder. There are very basic understandings that you must have before making that attempt. Perhaps you have tried and failed to help a loved one? This section will help you understand why you failed and how to better approach it the next time. We also outline some of the cleaning process and give numerous photo examples of what you can expect under the clutter and what must be done once the clutter is gone to clean the actual structure.",
      contains: "This Section Contains: The most important factor, the cleaning process, and LOTS of photos",
      slides: "Number of Slides: 45"
    },
    {
      title: "Aftercare",
      image: "https://hoardingcleanup.com/i/u/10021204/i/Aftercare_ezr.jpg",
      description: "The most important part of helping a hoarder is not cleaning the house. The hoarding is present because of one or more underlying disorders. By setting a system in place and following the system, a hoarder can manage this disorder. Remember, psychological disorders are not cured, they are managed. Learn what is needed after the cleanup to successfully manage this and a hoarder can live a clutter free life!",
      contains: "This Section Contains: Aftercare Steps Mandatory for Ongoing Change!",
      slides: "Number of Slides: 6"
    }
  ];

  const testimonials = [
    {
      text: "Wow, I have been struggling with a family member for so long, and now I see why! I just learned more in 90 minutes than I have scouring the entire web for years. This information is really going to help me now. You have such an incredible understanding of this problem, which now I feel like I do too! That was so worth the money. Thank you so much. I am going to have to change everything I thought was right but I feel so much better!",
      author: "Shelly"
    },
    {
      text: "That webinar was awesome! I am still on a hoarding info high! This is truly fascinating and I want to be a part! I need to go through all of these notes, an I appreciate all of the ideas!!! I am already with NAPO and my little business is picking up!\n\nYou are so awesome! Thanks!\n\n*sorry for all the exclamation marks* I am just really excited about what I just learned.",
      author: "Rachel"
    },
    {
      text: "Just wanted to say thank you again for the webinar you gave us last Friday. We definitely gained some beneficial insights to this complex problem. We appreciate the time you took to educate us; your compassion for this cause is remarkable.\n\nThank you!",
      author: "Christine"
    },
    {
      text: "I just finished your webinar and all I can say is wow. I had no idea all of the stuff that goes into hoarding. I now have a much better understanding of my mother, and how to properly approach her. We have struggled for so many years and knowing a lot of the psychology behind her issues will really help us moving forward to make a plan. I hope to get my sister to join your next webinar she too can understand my mothers condition. Anyway, thank you again for the webinar and making it affordable unlike most webinars these days!",
      author: "Lisa"
    },
    {
      text: "Last week I attended your webinar on hoarding and I just wanted to thank you. I actually struggle with hoarding myself and was hoping to learn a little about myself and I certainly did. I never truly knew why I was collecting so much stuff and couldn't let go of it. I literally made no sense and I was losing my mind. You helped make me understand that first, I am certainly not alone, but that it is ok and help is available. While I still feel the items are important to me, I think knowing a little more about why this behavior is controlling me, I can now take the necessary steps to beginning to let go. When you outlined the reasons people hoard, I related to several of them. I guess for me just knowing that people are out there that truly understand my situation is really going to put my mind at ease. For years I thought I was the only person living like this and it was overwhelming. I will be contacting you for some personal assistance very soon. You are such a caring person and I am lucky to have heard about your webinar. I will be the first step to really turning my life around so thank you again for all you are doing.",
      author: "Steven"
    },
    {
      text: "I have been working with hoarders for a short time and I am fortunate to have sat through this last webinar. You covered topics I had never even thought about. It was very enlightening and very educational. If you have future webinars, please let me know. I want in on all of them!",
      author: "Sharon"
    },
    {
      text: "I am completely blown away right now. I have seen you on the Hoarders TV show and figured you had some good information, but that was incredible. Some of the photos you showed were unbelievable. I thought my dads case was bad but now I don't feel so bad! I learned more about hoarding in one hour with you then I have from any book out there. You really covered some great topics and I hope I can use this new found knowledge to help with my fathers home. I just wanted to thank you for taking the time out of your hectic schedule to put on these webinars. My mind is still completely racing with everything I saw and heard. You are great and I hope anyone that is looking to understand more about this disorder finds your website so they can sign up for this great class. You certainly know a lot about hoarders. When are you going to write a book for all of us, seriously?\n\nThanks so much!",
      author: "Pam"
    },
    {
      text: "I wasn't really sure what to expect from this webinar. I know a couple of people that would be considered hoarders so just hoped to learn a little about it. I am very glad to have signed up. It was very interesting. It definitely explains a lot about these people and I can look into their past and know why it started now. I will try using some of the techniques I learned to talk to them from now on. Really glad you offered this class. Take care.",
      author: "Paul"
    },
    {
      text: "Cory seriously you should be charging more for your webinars. I have attended conferences on hoarding and not learned this much. You certainly know more than most so called experts out there. You definitely know a lot more about the mind of a hoarder than most. I have paid a lot more money to attend the conferences and wish I would have just come to your webinar first. It was full of useful knowledge and not filled with a lot of pointless information to fill a time slot. This outlined everything I need to know so thank you for keeping it short and educational.\n\nSincerely,",
      author: "Catherine"
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
                  className="block px-3 py-2 text-xs md:text-sm font-medium rounded transition-colors hover:bg-primary hover:text-primary-foreground"
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
            {/* Webinar Header */}
            <div className="text-center mb-8">
              <img 
                src="https://hoardingcleanup.com/i/u/10021204/i/Chalmers__7_.JPG" 
                alt="Cory Chalmers" 
                className="mx-auto mb-4 rounded-lg shadow-md max-w-[200px]"
              />
              <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Hoarding: A Simple Look At A Complex Disorder
              </h1>
              <p className="text-lg text-foreground mb-2">
                Run Time: 1 hour 30 minutes
              </p>
              <p className="text-lg text-foreground">
                Presented By: <span className="font-semibold">Cory Chalmers Hoarding Expert and International Trainer/Speaker</span>
              </p>
              <p className="text-lg text-foreground mb-4">
                Regular Featured Specialist on A&E's "Hoarders"
              </p>
            </div>

            {/* Cost & Description */}
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <p className="text-xl font-bold text-primary mb-4">
                Cost: $35.00 - Sign up at the bottom of this page then watch at your convenience!
              </p>
              <p className="text-foreground mb-4 text-justify">
                We all know how frustrating the hoarding disorder can be for both the hoarder and their loved ones. It is impossible to move forward with any kind of progress without first understanding the disorder. Each person that suffers from hoarding, does so for different reasons. Most of them will fall into a certain category, but their story is unique to them. The best way to help someone with this disorder, or to help yourself is to learn everything you can about it. Understanding the psychology behind the disorder should be the first step. Understanding why a person does what they do, is key to making a plan to move forward. Learning their limitations, their strengths, their triggers and their motivation is essential. Join me, Cory Chalmers, hoarding expert and featured specialist on A&E's "Hoarders" for this serious look into the mind of a hoarder. Read the feedback below from past webinars. You won't be disapointed!
              </p>
              <p className="text-foreground">
                Email Info@Steri-Clean.com with any questions. You will be taken to the webinar as soon as you pay through PayPal below. Payments can also be made by calling us at 1-800-HOARDERS (1-800-462-7337)
              </p>
            </div>

            {/* Webinar Overview Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">Webinar Overview</h2>
              <p className="text-lg text-foreground">
                Below is a brief overview of the presentation. When purchased you will watch the entire presentation, including all topics below.
              </p>
            </div>

            {/* Webinar Sections */}
            <div className="space-y-6 mb-8">
              {webinarSections.map((section, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4 shadow-sm">
                  <div className="flex flex-col md:flex-row gap-4">
                    <img 
                      src={section.image} 
                      alt={section.title}
                      className="w-full md:w-48 h-36 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">{section.title}</h3>
                      <p className="text-foreground mb-3 text-justify">{section.description}</p>
                      <p className="text-foreground mb-1">{section.contains}</p>
                      <p className="text-destructive font-semibold">{section.slides}</p>
                      {section.warning && (
                        <p className="text-destructive font-bold mt-2">
                          <strong>{section.warning}</strong>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-destructive text-justify">
                  Pay by clicking on the Buy Now tab to the right. Once payment is made on Paypal, on the payment confirmation page, click the link that says "Back to (your email address)". Once clicked, you will see the webinar link page. Enjoy!
                </p>
                <p className="text-destructive text-justify mt-4">
                  You can also pay over the phone with your credit card by calling 1-800-462-7337 Monday-Friday 8:00am-5:00pm PST.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="5PDY3J9CLMR3A" />
                  <input 
                    type="image" 
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" 
                    name="submit" 
                    alt="PayPal - The safer, easier way to pay online!"
                    className="mx-auto"
                  />
                </form>
                <p className="text-sm text-muted-foreground mt-4">
                  IMPORTANT - Once you pay, click the "back to my email address" tab to be taken to the link for the webinar.
                </p>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Webinar Testimonials</h2>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-4 shadow-sm">
                    <p className="text-primary mb-4 whitespace-pre-line">{testimonial.text}</p>
                    <p className="text-primary font-semibold">{testimonial.author}</p>
                    {index < testimonials.length - 1 && (
                      <hr className="mt-4 border-border" />
                    )}
                  </div>
                ))}
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
                  href="/webinars"
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
                    13946369
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

export default Webinars;
