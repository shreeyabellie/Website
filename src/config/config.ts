// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Shreeya Ramdass Bellie',
    title: 'Student | BSc Economics with Data Science',
    image: getAsset('public/images/Photo.png'), // Customize or replace with your profile image
    description:
      'A first-year B.Sc. Economics with Data Science student, driven by creativity, analytical curiosity, and leadership rooted in empathy. Skilled at working with teams, writing stories, and solving problems in different situations. Enjoys blending analytical thinking with creative expression to create balanced, effective solutions. Adaptive, multilingual, and wired for cross-functional collaboration.\n' +
      '\n' +
      'Chirst University, Economic Research.\n' +
      '\n' +
      'Currently pursuing Bsc. Economics and Data Science\n',
    tagline: 'Intellectually rigorous. Casually unhinged.',
    location: 'Banglore, India',
  },

  seo: {
    title: 'Your Name – Your Title',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Student', 'Economic Research'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'Your Blog Title',
      url: getAsset('static_page/project_management_blog.html'), // Replace with your static HTML page
    },
  ],


  education: [
    {
      institution: 'Christ (Deemed to be University)',
      degree: 'BSc Economics with Data Science',
      year: '2025-2028',
    },
    {
      institution: 'BVM Global',
      degree: 'Senior Secondary',
      year: '2020-2025',
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Your Certificate or Specialization',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Course 1', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Course 2', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
    {
      title: 'Another Certificate',
      file: getAsset('images/education/Certifications/download.svg'),
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Intern',
      place: 'Smitam NGO',
      time: '(11/2025 – Present)',
    },
    {
      title: 'Story Writing Cohort Head',
      place: 'Vignette Windows',
      time: '(07/2025 – Present)',
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'Project Title 1',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Short description of your project and what it does...',
      Githublink: 'https://github.com/your-username/your-project',
    },
    {
      title: 'Project Title 2',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Another project summary...',
      Githublink: 'https://github.com/your-username/another-project',
    },
  ],

  books: [
    {
      title: 'Your Book Title',
      description: 'Short description of your book or resource.',
      image: getAsset('images/book_cover_placeholder.png'),
      link: 'https://example.com/your-book',
    },
  ],

  contact: {
    email: 'shreeya.bellie@gmail.com',
    linkedin: 'www.linkedin.com/in/shreeya-ramdass-bellie',
    github: 'https://github.com/your-username',
  },
};

export default siteConfig;
