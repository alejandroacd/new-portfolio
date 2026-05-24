export type PhotoSpan = "square" | "wide" | "tall" | "feature";

export type Photo = {
  src: string;
  alt: string;
  span?: PhotoSpan;
};

const photos: Photo[] = [
  { src: "/images/IMG_5769.jpeg",                              alt: "Memory", span: "feature" },
  { src: "/images/IMG_4003.jpeg",                              alt: "Memory", span: "square"  },
  { src: "/images/IMG_5094.jpeg",                              alt: "Memory", span: "tall"    },
  { src: "/images/IMG_4920.jpeg",                              alt: "Memory", span: "wide"    },
  { src: "/images/IMG_0048.jpeg",                              alt: "Memory", span: "square"  },
  { src: "/images/IMG_5200.jpeg",                              alt: "Memory", span: "square"  },
  { src: "/images/IMG_4573.jpeg",                              alt: "Memory", span: "tall"    },
  { src: "/images/16d2a4a9-0f2f-472b-b6b5-42cb77becd54.jpeg", alt: "Memory", span: "wide"    },
  { src: "/images/IMG_4143.jpeg",                              alt: "Memory", span: "square"  },
  { src: "/images/IMG_5366.jpeg",                              alt: "Memory", span: "feature" },
  { src: "/images/IMG_4186.jpeg",                              alt: "Memory", span: "square"  },
  { src: "/images/IMG_5022.jpeg",                              alt: "Memory", span: "tall"    },
  { src: "/images/IMG_4964.jpeg",                              alt: "Memory", span: "tall"    },
  { src: "/images/IMG_5126.jpeg",                              alt: "Memory", span: "square"  },
  { src: "/images/755C0866-FE61-4CE6-B0D7-D10B3FEDD985.jpeg", alt: "Memory", span: "square"  },
  { src: "/images/IMG_4803.jpeg",                              alt: "Memory", span: "square"    },
  { src: "/images/IMG_5135.jpeg",                              alt: "Memory", span: "square"  },
  { src: "/images/IMG_4102.jpeg",                              alt: "Memory", span: "tall"    },
  { src: "/images/IMG_4930.jpeg",                              alt: "Memory", span: "square"  },
  { src: "/images/IMG_5069.jpeg",                              alt: "Memory", span: "wide"    },
  { src: "/images/IMG_4304.jpeg",                              alt: "Memory", span: "square"  },
  { src: "/images/IMG_5216.jpeg",                              alt: "Memory", span: "tall"    },
  { src: "/images/IMG_4479.jpeg",                              alt: "Memory", span: "square"  },
  { src: "/images/IMG_5169.jpeg",                              alt: "Memory", span: "square"  },
];

export const profile = {
  name: "Ale Contreras",
  taglineFirst: "Frontend Architect",
  taglineSecondary: "Coffee enthusiast · Buenos Aires",
  bio: "Building polished interfaces by day, hunting good espresso by morning. Based in CABA, working remote with teams around the world. Always tinkering on side projects, always one more idea away from launching.",
  email: "alejandroalicd@gmail.com",
  avatar: "/images/PROFILE/IMG_4092.jpeg",
  location: {
    label: "CABA, Buenos Aires",
    coords: "-34.6° S, -58.4° W",
    timezone: "America/Argentina/Buenos_Aires",
    tzLabel: "GMT-3",
  },
  spotifyEmbedUrl:
    "https://open.spotify.com/embed/playlist/0GOpCl2UTHwoP78WJq9bn7?si=i4101tHsRceJMyEq80FN4A",
  socials: {
    github: {
      handle: "alejandroacd",
      url: "https://github.com/alejandroacd",
      tintRGB: "255 255 255",
    },
    twitter: {
      handle: "@alejandroacd",
      url: "https://twitter.com/alejandroacd",
      tintRGB: "29 161 242",
    },
    instagram: {
      handle: "@alejandroalicontreras",
      url: "https://instagram.com/alejandroalicontreras",
      tintRGB: "225 48 108",
    },
    linkedin: {
      handle: "alejandroacd",
      url: "https://linkedin.com/in/alejandroacd",
      tintRGB: "10 102 194",
    },
  },
  photos,
  stack: ["React", "Next.js", "TypeScript","Claude", "LLM's","Node.js", "GSAP", "Tailwind", "Figma"],
  now: {
    building: {
      label: "This portfolio + a few client projects",
      href: "/",
    },
    reading: {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
    },
  },
} as const;
