export const imagePool = [
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1577327966244-999949c7e884?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1759393852314-59dc00faeed3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
];

export const defaults = {
  siteSettings: {
    siteName: "SOMI Agency",
    brandName: "somi",
    footerBrand: "somi the agency",
    primaryEmail: "hello@somiagency.com",
    footerEmail: "info@somiagency.co",
    instagramUrl: "https://instagram.com",
    instagramUsername: "somiagency",
    facebookUrl: "https://facebook.com",
    metaTitle: "SOMI Agency",
    metaDescription: "Strategic content creation and social media management.",
    theme: {
      palm: "#143503",
      flower: "#a7d1ae",
      sail: "#bcdbf0",
      serenade: "#fff2e6",
      ink: "#10220b",
      paper: "#ffffff",
      muted: "#52624d",
      line: "rgba(20, 53, 3, 0.16)",
      lineSoft: "rgba(20, 53, 3, 0.12)",
      lineStrong: "rgba(20, 53, 3, 0.18)",
      inputLine: "rgba(20, 53, 3, 0.46)",
      shadow: "0 24px 70px rgba(20, 53, 3, 0.16)",
      shadowSoft: "0 8px 20px rgba(20, 53, 3, 0.08)",
      onDark: "#fff2e6",
      onDarkMuted: "rgba(255, 242, 230, 0.82)",
      onDarkLine: "rgba(255, 242, 230, 0.22)",
      onDarkLineSoft: "rgba(255, 242, 230, 0.18)",
      onDarkLineStrong: "rgba(255, 242, 230, 0.65)",
      textMax: "rgba(20, 53, 3, 0.9)",
      textStrong: "rgba(20, 53, 3, 0.86)",
      textSoft: "rgba(20, 53, 3, 0.72)",
      textFaint: "rgba(20, 53, 3, 0.52)",
      imageWash: "rgba(20, 53, 3, 0.08)",
      overlayDark: "rgba(20, 53, 3, 0.72)",
      paperSoft: "rgba(255, 255, 255, 0.56)",
      paperPanel: "rgba(255, 255, 255, 0.72)",
      adminBg: "#f7f3ee",
      adminInk: "#142014",
      adminMuted: "rgba(20, 32, 20, 0.78)",
      adminMutedSoft: "rgba(20, 32, 20, 0.58)",
      danger: "#9f2d2d",
      onDanger: "#ffffff",
      portfolioGradientOne: "linear-gradient(135deg, rgba(20, 53, 3, 0.88), rgba(20, 53, 3, 0.22))",
      portfolioGradientTwo: "linear-gradient(135deg, rgba(167, 209, 174, 0.88), rgba(20, 53, 3, 0.84))",
      portfolioGradientThree: "linear-gradient(135deg, rgba(20, 53, 3, 0.82), rgba(188, 219, 240, 0.7))"
    }
  },
  navigation: {
    headerLinks: [
      { label: "Services", path: "/services", order: 1 },
      { label: "About", path: "/about", order: 2 },
      {
        label: "Portfolio",
        path: "#",
        order: 3,
        isDropdown: true,
        children: [
          { label: "Video Portfolio", path: "/video-portfolio" },
          { label: "Photo Portfolio", path: "/photo-portfolio" },
          { label: "Our Clients", path: "/our-clients" }
        ]
      },
      { label: "Our Clients", path: "/our-clients", order: 4 },
      { label: "Contact", path: "/contact", order: 5 }
    ]
  },
  pages: {
    home: {
      hero: {
        title: "Brands made",
        highlightedTitle: "unforgettable.",
        description: "We create strategic, scroll-stopping brand identities and content systems that transform your digital presence and turn attention into growth.",
        buttonText: "Learn more",
        buttonUrl: "/about",
        image: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=80"
      },
      servicesMarqueeTitle: "Our Services",
      servicePreviewItems: [
        { label: "The brand subscription", image: imagePool[0] },
        { label: "Content Days", image: imagePool[4] },
        { label: "Social media management", image: imagePool[2] },
        { label: "Strategy Deck", image: imagePool[1] }
      ],
      aboutPreview: {
        title: "Meet SOMI,",
        highlightedTitle: "the founders of sticky brands.",
        paragraphs: [
          "SOMI was born from a desire to help brands move from being seen to being remembered. With strategy, content, and creative direction, we shape digital presence that lands where it matters most.",
          "Whether it is a visual identity, a campaign, or social media built for consistency, every choice is intentional and every touchpoint has a role."
        ],
        image: imagePool[2],
        buttonText: "Learn more",
        buttonUrl: "/about"
      },
      trustedSection: {
        title: "Trusted by",
        highlightedWord: "brands",
        suffix: "globally."
      },
      portfolioPreview: {
        backgroundImage: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=1600&q=80",
        buttonText: "View our portfolio",
        buttonUrl: "/photo-portfolio"
      }
    },
    services: {
      hero: {
        title: "Our Services",
        subtitle: "Strategic content creation & social media management",
        description: "Ready to take your content to the next level & grow on socials? Whether you need captivating photo and video content, strategic social media management, or a combination of both, we are here to help you achieve your goals and start seeing real results!"
      },
      enquireCta: { text: "Enquire to work with us", url: "/contact" },
      contentPortfolioBlock: {
        marqueeText: "Content Creation Portfolio",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80",
        description: "Our content creation packages are ideal for clients seeking fresh, high-quality content for their social channels. From relatable short-form videos to aesthetic, professional stills, we offer both photo and video options to fit your content needs.",
        buttonText: "Content Creation Portfolio",
        buttonUrl: "/photo-portfolio"
      },
      socialResultsBlock: {
        marqueeText: "Social Management Results",
        description: "For businesses looking to elevate their social media presence and hand over the daily task of running their socials. If you're struggling with your strategy or not seeing sales through social media, this is for you!",
        buttonText: "Work with us!",
        buttonUrl: "/contact"
      },
      finalCta: {
        title: "Got something else in mind?",
        image: imagePool[2],
        buttonText: "get in touch!",
        buttonUrl: "/contact"
      }
    },
    about: {
      hero: {
        titlePrefix: "Say",
        emphasizedWord: "hello",
        brandName: "SOMI",
        paragraphs: [
          "Hello! We are the creative founders behind SOMI Agency.",
          "Here is a little backstory: we have always been drawn to helping people and brands communicate better. From making films for friends to documenting ideas, campaigns, launches, and everyday moments, creating content is second nature to us.",
          "As we began offering brand strategy and social media management services independently, we noticed the same thing with many clients: they were overwhelmed by creating content that really sticks and speaks to their audience.",
          "After a few strategy sessions and late-night chats, we knew it was time to build something that delivered exactly what brands needed: creative direction, content, and systems that attract the right people and build real connections.",
          "And so, SOMI was born. An agency run by passionate creatives dedicated to helping brands produce authentic, engaging content that sparks conversations and builds trust.",
          "We are so excited to have you here. Here is to making brands stick!"
        ],
        image: imagePool[0]
      },
      story: {
        paragraphs: [
          "SOMI was created by two creatives naturally drawn to helping brands grow. We do not just execute tasks. We partner at a strategic level so every visual, caption, campaign, and touchpoint has a clear job.",
          "Our mission is to provide creative vision, strategic clarity, and execution excellence for ambitious brands at every stage of their journey."
        ]
      },
      values: [
        { title: "Bold & Decisive", description: "Strong ideas, human communication, polished delivery, and creative choices backed by strategy." },
        { title: "Warm & Collaborative", description: "Strong ideas, human communication, polished delivery, and creative choices backed by strategy." },
        { title: "Creative & Intentional", description: "Strong ideas, human communication, polished delivery, and creative choices backed by strategy." },
        { title: "Sharp & Professional", description: "Strong ideas, human communication, polished delivery, and creative choices backed by strategy." }
      ]
    },
    "photo-portfolio": {
      hero: {
        eyebrow: "Portfolio",
        title: "Photo examples",
        description: "A visual wall for brand shoots, campaigns, social content, launch assets, and editorial direction."
      },
      marqueeTitle: "Photo Examples",
      nextPageCta: { title: "View our video portfolio", buttonText: "Explore videos", buttonUrl: "/video-portfolio" }
    },
    "video-portfolio": {
      hero: {
        eyebrow: "Portfolio",
        title: "Video examples",
        description: "Short-form, campaign, launch, and story-led video concepts for brands that need movement with meaning."
      },
      marqueeTitle: "Video Portfolio",
      nextPageCta: { title: "View our photo portfolio", buttonText: "Explore photos", buttonUrl: "/photo-portfolio" }
    },
    clients: {
      hero: {
        eyebrow: "Our clients",
        title: "Built for brands that are ready to grow.",
        description: "SOMI works with founders, SMEs, lifestyle brands, established businesses, personal brands, and launch teams.",
        image: imagePool[4]
      }
    },
    contact: {
      hero: {
        eyebrow: "Want to work with us?",
        title: "Let's chat.",
        description: "Drop your details below and we will shape the next step with you.",
        image: imagePool[5]
      },
      contactSection: {
        eyebrow: "Contact",
        title: "Tell us what you want to make stick.",
        description: "Whether you need identity, content, ads, PR, campaign direction, or a long-term creative partner, start here.",
        email: "hello@somiagency.com",
        instagramUrl: "https://instagram.com",
        instagramUsername: "somiagency",
        submitButtonText: "Send enquiry",
        projectTypes: ["Brand strategy", "Social media management", "Content creation", "Campaign execution"]
      }
    }
  },
  services: [
    {
      title: "The Content Subscription",
      image: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=80",
      description: "Constantly running out of content to post on socials? Our content shoots ensure you have a steady stream of high-quality and intentional content to post in line with your internal goals and industry trends.",
      included: ["Ongoing strategy in line with your monthly goals", "Creative direction & trend research", "10 fully edited photos per month", "10 fully edited Reels/TikToks per month", "Monthly brainstorming session", "Monthly competitor analysis", "Full usage rights", "Access to team faces"],
      order: 1,
      isActive: true
    },
    {
      title: "Content days",
      image: imagePool[4],
      description: "Receive a day's worth of raw footage that is yours to edit and use however you like. Perfect for businesses that need a versatile bank of raw content.",
      included: ["Pre-content planning session", "Raw photos & videos for your content bank", "Authentic footage of your product or service", "Full usage rights", "Option to add edited photos and Reels"],
      linkText: "Find out more.",
      linkUrl: "/contact",
      order: 2,
      isActive: true
    },
    {
      title: "Social Media Management",
      image: imagePool[2],
      description: "Let us take social media off your plate and craft a strategy that drives real results. Includes strategy, content calendar creation, captions, posting and engagement.",
      included: ["Full management of your Instagram /TikTok", "Strategy", "Feed & story creation", "Trend research", "Caption writing", "Hashtag research", "Scheduling", "Community Management", "Option to add monthly content shoot"],
      order: 3,
      isActive: true
    },
    {
      title: "Strategy Deck",
      image: imagePool[1],
      description: "Not ready for full management yet? Our personalised strategy deck gets you unstuck and gives you everything you need to confidently take control of your content.",
      included: ["Profile Audit", "Content Pillars", "Content Types You Need to Post", "6 Personalised Templates", "Feed Plan", "2 Content Plan with tailored prompts"],
      order: 4,
      isActive: true
    }
  ],
  portfolio: [
    ...["Identity shoot", "Founder portraits", "Product launch", "Lifestyle stills", "Event story", "Campaign flatlays", "Social content", "Editorial set", "Brand refresh", "Retail campaign", "Launch detail", "Team culture"].map((title, index) => ({
      title,
      type: "photo",
      image: imagePool[index % imagePool.length],
      order: index + 1,
      isActive: true
    })),
    ...["Launch Reel", "Campaign Film", "Founder Story", "UGC Series", "Product Demo", "Event Recap"].map((title, index) => ({
      title,
      type: "video",
      thumbnail: imagePool[(index + 2) % imagePool.length],
      videoUrl: "",
      order: index + 1,
      isActive: true
    }))
  ],
  clients: [
    { name: "Early-stage Founders", quote: "For founders building from scratch who need identity, strategy, and presence shaped together.", order: 1, showInTrustedStrip: false, showOnClientsPage: true, isActive: true },
    { name: "Growing SMEs", quote: "For businesses ready to elevate how they appear, compete, and communicate online.", order: 2, showInTrustedStrip: false, showOnClientsPage: true, isActive: true },
    { name: "Product & Lifestyle Brands", quote: "For brands that rely on visual storytelling, content quality, and consistent output.", order: 3, showInTrustedStrip: false, showOnClientsPage: true, isActive: true },
    { name: "Established Businesses", quote: "For teams that need a refresh, new energy, or sharper direction without starting over.", order: 4, showInTrustedStrip: false, showOnClientsPage: true, isActive: true },
    { name: "Personal Brands", quote: "For creators, speakers, and entrepreneurs whose digital presence must match their reputation.", order: 5, showInTrustedStrip: false, showOnClientsPage: true, isActive: true },
    { name: "Launch Teams", quote: "For businesses bringing a product, event, campaign, or new offer into the market.", order: 6, showInTrustedStrip: false, showOnClientsPage: true, isActive: true },
    ..."KIVA & CO,MORI,Lumi Lagos,LOOKFANTASTIC,BROWERA,LEDDA,THE GREEN ROOM".split(",").map((name, index) => ({ name, quote: "", order: index + 20, showInTrustedStrip: true, showOnClientsPage: false, isActive: true }))
  ],
  stats: [
    { label: "Profile activity", value: 9305, order: 1, isActive: true },
    { label: "Accounts reached", value: 103644, order: 2, isActive: true },
    { label: "Profile activity", value: 42151, order: 3, isActive: true },
    { label: "Accounts reached", value: 7564, order: 4, isActive: true }
  ]
};
