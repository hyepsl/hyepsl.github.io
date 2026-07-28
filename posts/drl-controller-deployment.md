---
title: Deploying a DRL Controller with ONNX: What Latency Should Be Measured?
date: 2026-06-18
category: Embedded Deployment
excerpt: A checklist for separating neural-network inference latency from communication, preprocessing, and actuator-update delays.
slug: drl-controller-deployment
---

Reporting only the neural-network inference time can overstate the achievable closed-loop control frequency. A complete timing study should separate the main components of one control cycle.

## Timing components

- Sensor acquisition and data transfer
- State construction and normalization
- Policy-network inference
- Action post-processing and saturation
- Communication and PWM update

The worst-case and high-percentile latency are usually more informative than the average alone.
