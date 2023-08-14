export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Gymshark SEO",
    techs: ["SEO", "Leadership"],
    link: "https://playful-licorice-bffb1b.netlify.app/posts/gymshark",
  },
  {
    title: "Winston's Wish",
    techs: ["SEO", "Digital Marketing"],
    link: "https://scott-salter.com/posts/winstons-wish/",
  },
  {
    title: "Blushes",
    techs: ["SEO"],
    link: "https://scott-salter.com/posts/blushes/",
  },
  {
    title: "Edinburgh Natural Skincare Company",
    techs: ["SEO", "Digital Marketing"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
