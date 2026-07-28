window.BLOG_POSTS = [
  {
    "slug": "buck-state-space-modeling",
    "title": "Buck Converter State-Space Modeling: From Switching States to an Averaged Model",
    "date": "2026-07-26",
    "category": "Power Electronics",
    "excerpt": "A structured derivation of the continuous-time state-space model of a Buck converter and the assumptions behind state-space averaging.",
    "content": "This note develops a reusable modeling workflow for the continuous-conduction-mode Buck converter. The objective is not only to obtain matrices, but also to clarify the physical meaning of each state and input.\n\n## 1. Select the states\n\nA common choice is the inductor current and capacitor voltage:\n\n$$\nx = [i_L \\quad v_C]^T\n$$\n\n## 2. Write the two switching models\n\nDerive one model for the switch-on interval and another for the switch-off interval. Each model follows directly from the inductor-voltage and capacitor-current relationships.\n\n## 3. Average over one switching period\n\nUse the duty ratio as the weighting factor. The averaged model is suitable for controller design when the control bandwidth is sufficiently lower than the switching frequency.\n\n> **Next step:** add operating-point linearization and the small-signal duty-to-output transfer function.",
    "source": "posts/buck-state-space-modeling.md"
  },
  {
    "slug": "mpc-buck-control-workflow",
    "title": "A Practical MPC Workflow for Direct Duty-Ratio Control of a Buck Converter",
    "date": "2026-07-20",
    "category": "Advanced Control",
    "excerpt": "How to define the prediction model, augmented state, cost function, and duty constraints for direct MPC control.",
    "content": "This article summarizes a practical implementation route for controlling a Buck converter without a cascaded inner–outer loop.\n\n## Model and augmented state\n\nThe converter model is discretized at the controller sampling period. An integral voltage-error state can be added to reduce steady-state error.\n\n## Cost function\n\nFor a voltage-regulation study, the cost can prioritize predicted output-voltage error while retaining a modest penalty on duty-ratio movement.\n\n## Constraints\n\nThe duty ratio must remain within its physical range. Current or voltage constraints can be added when protection and transient limits are part of the study.",
    "source": "posts/mpc-buck-control-workflow.md"
  },
  {
    "slug": "drl-controller-deployment",
    "title": "Deploying a DRL Controller with ONNX: What Latency Should Be Measured?",
    "date": "2026-06-18",
    "category": "Embedded Deployment",
    "excerpt": "A checklist for separating neural-network inference latency from communication, preprocessing, and actuator-update delays.",
    "content": "Reporting only the neural-network inference time can overstate the achievable closed-loop control frequency. A complete timing study should separate the main components of one control cycle.\n\n## Timing components\n\n- Sensor acquisition and data transfer\n- State construction and normalization\n- Policy-network inference\n- Action post-processing and saturation\n- Communication and PWM update\n\nThe worst-case and high-percentile latency are usually more informative than the average alone.",
    "source": "posts/drl-controller-deployment.md"
  },
  {
    "slug": "ddqn-pi-tuning-notes",
    "title": "Design Notes for DDQN-Based PI Parameter Tuning",
    "date": "2025-12-12",
    "category": "Reinforcement Learning",
    "excerpt": "Key decisions in state design, action discretization, reward construction, and safe online parameter adaptation.",
    "content": "Using DDQN to tune PI parameters turns controller adaptation into a discrete sequential decision problem.\n\n## State design\n\nStates should contain enough information to characterize the tracking condition and transient trend without introducing unnecessary dimensions.\n\n## Action design\n\nIncremental actions are often easier to constrain than directly outputting unrestricted controller gains.\n\n## Reward design\n\nThe reward should balance voltage tracking, overshoot, oscillation, control smoothness, and unsafe operating conditions.",
    "source": "posts/ddqn-pi-tuning-notes.md"
  },
  {
    "slug": "boost-small-signal-model",
    "title": "Understanding the Boost Converter Small-Signal Model",
    "date": "2025-08-03",
    "category": "Power Electronics",
    "excerpt": "A conceptual guide to operating-point linearization, the right-half-plane zero, and control-bandwidth limits.",
    "content": "The Boost converter has a non-minimum-phase duty-to-output response in continuous conduction mode. This behavior strongly influences voltage-loop bandwidth.\n\n## Why the right-half-plane zero appears\n\nAn increase in duty ratio initially keeps the diode off for longer, temporarily reducing energy delivered to the output even though the long-term output voltage rises.\n\n## Controller implication\n\nThe voltage-loop crossover frequency should remain well below the right-half-plane-zero frequency, particularly when operating conditions vary.",
    "source": "posts/boost-small-signal-model.md"
  }
];
