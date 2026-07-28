window.SITE_DATA = {
  profile: {
    name: "Cheng Hangyu",
    nameZh: "程航宇",
    title: "Researcher in Control Engineering",
    bio: "AI-enabled control and energy management for power electronic converters, microgrids, and hydrogen energy systems.",
    location: "Hangzhou, China",
    affiliation: "Zhejiang University of Technology",
    email: "your-email@example.com",
    avatar: "assets/images/avatar-placeholder.svg",
    links: [
      { label: "Email", url: "mailto:your-email@example.com", icon: "mail" },
      { label: "Google Scholar", url: "#", icon: "scholar" },
      { label: "ORCID", url: "#", icon: "orcid" },
      { label: "GitHub", url: "#", icon: "github" }
    ]
  },

  news: [
    { date: "2026-07", text: "Presented research on intelligent control for a green-hydrogen microgrid at WHEC 2026." },
    { date: "2026-07", text: "Started research on MPC-to-policy learning for high-frequency Buck converter control." },
    { date: "2026-06", text: "Completed edge-device deployment and HIL evaluation of a DDQN-based controller." }
  ],

  research: [
    {
      title: "AI for Power Electronics",
      summary: "Reinforcement learning, policy learning, and neural-network deployment for fast control of DC/DC converters.",
      keywords: ["DRL", "MPC imitation", "DC/DC converters", "Embedded inference"]
    },
    {
      title: "Intelligent Microgrid Control",
      summary: "Control and energy management of microgrids integrating renewable generation, energy storage, and hydrogen systems.",
      keywords: ["Microgrids", "Energy management", "Green hydrogen", "Intelligent dispatch"]
    },
    {
      title: "Advanced Control and Disturbance Rejection",
      summary: "Model-based and observer-based control under parameter uncertainty, nonlinearities, and external disturbances.",
      keywords: ["MPC", "LQR", "ADRC", "Observers"]
    }
  ],

  projects: [
    {
      id: "green-hydrogen-microgrid",
      title: "Green Hydrogen Microgrid DC-Bus Control",
      period: "2025–2026",
      description: "A DDQN-assisted cascaded control framework for regulating the DC bus of a green-hydrogen microgrid, including HIL and edge-device evaluation.",
      tags: ["DDQN", "PI control", "Microgrid", "HIL"],
      highlights: [
        "Online tuning of controller parameters using value-based deep reinforcement learning.",
        "Comparison with conventional and optimization-based control baselines.",
        "ONNX deployment and inference-time evaluation on an edge platform."
      ]
    },
    {
      id: "sst-disturbance-rejection",
      title: "SST Rectifier Disturbance-Rejection Control",
      period: "2026",
      description: "Composite DC-link voltage control combining model reconstruction, disturbance estimation, LQR feedback, and feedforward compensation.",
      tags: ["SST", "LQR", "Disturbance observer", "DC-link"],
      highlights: [
        "Model reconstruction for uncertain rectifier dynamics.",
        "Equivalent-input-disturbance estimation and compensation.",
        "Evaluation under load changes and external disturbances."
      ]
    },
    {
      id: "buck-mpc-policy",
      title: "Buck Converter MPC and Policy Learning",
      period: "2026–present",
      description: "Direct duty-ratio control of a Buck converter using MPC, followed by policy-network learning for fast real-time implementation.",
      tags: ["Buck", "MPC", "Imitation learning", "20 kHz"],
      highlights: [
        "State-space modeling with integral error augmentation.",
        "Constrained predictive control using voltage-tracking objectives.",
        "Exploration of neural policy inference at switching-control rates."
      ]
    },
    {
      id: "microgrid-dispatch",
      title: "Forecast-Aware Microgrid Dispatch",
      period: "Concept study",
      description: "A hybrid MILP–DRL framework that improves power forecasting and corrects dispatch decisions affected by forecast errors.",
      tags: ["MILP", "DRL", "Forecasting", "Energy scheduling"],
      highlights: [
        "Learning-based power-forecast refinement.",
        "Decision correction for grid-purchase and energy-flow commands.",
        "Joint evaluation of forecasting and dispatch performance."
      ]
    }
  ],

  publications: [
    {
      year: "2026",
      title: "DDQN-assisted DC-bus voltage regulation for a green hydrogen microgrid",
      authors: "Cheng Hangyu, et al.",
      venue: "Conference presentation / manuscript information to be updated",
      type: "Conference",
      links: []
    },
    {
      year: "2026",
      title: "Disturbance-rejection voltage control for the rectifier stage of a solid-state transformer",
      authors: "Cheng Hangyu, et al.",
      venue: "Manuscript information to be updated",
      type: "Manuscript",
      links: []
    }
  ],

  posts: window.BLOG_POSTS || []
};
