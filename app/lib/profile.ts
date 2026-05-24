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
  bio: "Football, great food, and the probability math behind every poker hand. I shoot night light combinations, collect wine recommendations, and stay obsessed with where AI and dystopian aesthetics intersect. Based in Buenos Aires, always building.",
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
  spotifyPlaylist: {
    tracks: [
      { title: "Out Of Focus",                    artist: "Spratta",                       duration: "2:55" },
      { title: "Timeless (feat. Playboi Carti)",  artist: "The Weeknd, Playboi Carti",     duration: "4:16" },
      { title: "Afterthought",                    artist: "Joji, BENEE",                   duration: "3:14" },
      { title: "Thinking Bout You",               artist: "rei brown, Joji",               duration: "3:10" },
      { title: "Blue Seats (812)",                artist: "Jonathan May",                  duration: "3:31" },
      { title: "2 On (feat. ScHoolboy Q)",        artist: "Tinashe, ScHoolboy Q",          duration: "3:47" },
      { title: "LOVE YOU LESS",                   artist: "Joji",                          duration: "3:21" },
      { title: "After Hours",                     artist: "The Weeknd",                    duration: "6:01" },
      { title: "Breathe",                         artist: "88rising, Joji, Don Krez",      duration: "2:05" },
      { title: "scared 2 die",                    artist: "451",                           duration: "3:19" },
      { title: "TELL 'EM YOU'RE MINE",            artist: "alan vrong",                    duration: "2:38" },
    ],
  },
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
