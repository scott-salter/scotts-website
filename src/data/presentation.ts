type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "Scott Salter",
  title: "Scott Salter 👋",
  // profile: "/profile.webp",
  description:
    "Scott Salter is an SEO Manager based in the South West of England. At Gymshark, he leads the SEO & Content team across 15 global websites.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/scottsltr",
    },
    {
      label: "Bento",
      link: "https://bento.me/m-wolff",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/scott-salter/",
    },
  ],
};

export default presentation;
