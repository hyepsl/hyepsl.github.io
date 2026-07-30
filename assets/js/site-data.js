window.SITE_DATA = {
  profile: {
    name: "Hangyu",
    nameZh: "CC",
    title: "Ph.D. Candidate in M.Eng",
    bio: "Microgrid control with artificial intelligence.",
    location: "Gwangju, South Korea",
    affiliation: "Chonnam National University",
    email: "hycnu@outlook.com",
    avatar: "assets/images/leo.png",
    links: [
      { label: "Email", url: "mailto:hycnu@outlook.com", icon: "mail" },
      { label: "GitHub", url: "https://github.com/hyepsl", icon: "github" }
    ]
  },

  news: [
    { date: "2026/06/25", text: "Submitted a revision." },
    { date: "2026/06/22", text: "Participated the WHEC conference in Singapore." },
    { date: "2026/02/01", text: "Received the Chonnam National University Fellowship." }
  ],

  education: [
    {
      degree: "Ph.D. in Mechanical Engineering",
      institution: "Chonnam National University, South Korea",
      detail: " Advisors: Prof. Young-bae Kim and Prof. Seunghun Jung",
      period: "Mar 2023 – Present"
    },
    {
      degree: "B.Eng. in Mechanical Engineering",
      institution: "Wenzhou University, China",
      detail: "Graduated with honors",
      period: "Sep 2018 – Jun 2022"
    }
  ],

  publications: [
    {
      year: "2026",
      title: "Hierarchical model predictive control with multi-agent reinforcement learning for eco-driving of fuel cell hybrid electric vehicles",
      authors: "S. Liu, J. Chen, H. Cheng, S. Jung, and Y. B. Kim",
      venue: "International Journal of Hydrogen Energy, 216, 153914",
      type: "Journal article"
    },


    {
      year: "2026",
      title: "Deep Reinforcement Learning-Based Real-Time Gain Tuning of PI Controller for Green Hydrogen Microgrids",
      authors: "H. Cheng and Y. B. Kim",
      venue: "25th World Hydrogen Energy Conference, Singapore",
      type: "Conference"
    },
    {
      year: "2025",
      title: "A novel reinforcement learning controller for the DC-DC boost converter",
      authors: "H. Cheng, S. Jung, and Y. B. Kim",
      venue: "Energy, 321, 135479",
      type: "Journal article"
    },
    {
      year: "2025",
      title: "Parameter identification with hybrid reinforcement learning algorithm of proton exchange membrane electrolyzer",
      authors: "H. Cheng, J. Chen, S. Liu, S. Jung, and Y. B. Kim",
      venue: "International Journal of Hydrogen Energy, 174, 151187",
      type: "Journal article"
    },
    {
      year: "2025",
      title: "Hierarchical rolling optimization strategy for hybrid electric-hydrogen system based on deep reinforcement learning",
      authors: "H. Cheng, J. Chen, S. Jung, and Y. B. Kim",
      venue: "Energy, 138952",
      type: "Journal article"
    },
    {
      year: "2025",
      title: "Novel energy management strategy for fuel cell/battery hybrid energy systems combining MPC and deep reinforcement learning",
      authors: "S. Liu, H. Cheng, S. Jung, and Y. B. Kim",
      venue: "Energy Conversion and Management, 341, 120081",
      type: "Journal article"
    },
    {
      year: "2025",
      title: "LSTM-Based Rolling Optimization for Integrated Power Systems",
      authors: "H. Cheng and Y. B. Kim",
      venue: "12th International Conference on Power and Energy Systems Engineering, Fukuoka, Japan",
      type: "Conference"
    },
    {
      year: "2024",
      title: "Battery thermal management system optimization using Deep reinforced learning algorithm",
      authors: "H. Cheng, S. Jung, and Y. B. Kim",
      venue: "Applied Thermal Engineering, 236, 121759",
      type: "Journal article"
    },
    {
      year: "2024",
      title: "Compensated Deep Reinforcement Learning Control of a Boost Converter",
      authors: "H. Cheng and Y. B. Kim",
      venue: "Third Asian Conference on Thermal Sciences, Shanghai, China",
      type: "Conference"
    }
  ],

  awards: [
    { year: "2026", title: "Chonnam National University Fellowship", detail: "Ranked 2nd among 77 candidates" },
    { year: "2025", title: "BK21 FOUR Outstanding Paper Award", detail: "Chonnam National University" },
    { year: "2024", title: "BK21 FOUR Scholarship", detail: "Chonnam National University" },
    { year: "2024", title: "Truth Scholarship", detail: "Chonnam National University" },
    { year: "2024", title: "BK21 FOUR Outstanding Paper Award", detail: "Chonnam National University" },
    { year: "2023", title: "Global Scholarship", detail: "Highest-level scholarship for international students" },
    { year: "2023", title: "Truth Scholarship", detail: "Chonnam National University" },
    { year: "2022", title: "Outstanding Graduate", detail: "Wenzhou University" },
    { year: "2022", title: "Outstanding Student Leader", detail: "Wenzhou University" },
    { year: "2020", title: "National Second Prize, University Student Mechanical Design Competition", detail: "China" },
    { year: "2020", title: "Merit Student", detail: "Wenzhou University" },
    { year: "2019–2021", title: "National Encouragement Scholarship", detail: "Three consecutive years" }
  ],

  academicService: [
    { role: "Journal Reviewer", organization: "IEEE Transactions on Industrial Electronics" }
  ],

  skills: [
    {
      category: "Software and methods",
      items: "MATLAB/Simulink, Python, PyTorch, energy-system modeling, advanced control, deep reinforcement learning, and data analysis"
    },
    {
      category: "Experimental systems",
      items: "Fuel cells, electrolyzers, energy storage, and DC/DC converter platform construction, commissioning, data acquisition, hardware-in-the-loop testing, and edge-device deployment"
    }
  ],

  gallery: [
    {
      src: "assets/images/gallery/2024-first-snow.jpg",
      title: "First Snow of 2024",
      date: "2024-12-25",
      location: "Gwangju, South Korea",
      caption: "The first snow of 2024.",
      alt: "Snow-covered trees, paths, and benches at Hallasan"
    },

    {
      src: "assets/images/gallery/2026-01-15.jpg",
      title: "Prelimiary Presentation",
      date: "2026-01-15",
      location: "Gwangju, South Korea",
      caption: "The first snow of 2024.",
      alt: "Maybe I will be a good researcher.",
    }
  ],

  posts: window.BLOG_POSTS || []
};
