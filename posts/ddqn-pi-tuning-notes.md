---
title: Design Notes for DDQN-Based PI Parameter Tuning
date: 2025-12-12
category: Reinforcement Learning
excerpt: Key decisions in state design, action discretization, reward construction, and safe online parameter adaptation.
slug: ddqn-pi-tuning-notes
---

Using DDQN to tune PI parameters turns controller adaptation into a discrete sequential decision problem.

## State design

States should contain enough information to characterize the tracking condition and transient trend without introducing unnecessary dimensions.

## Action design

Incremental actions are often easier to constrain than directly outputting unrestricted controller gains.

## Reward design

The reward should balance voltage tracking, overshoot, oscillation, control smoothness, and unsafe operating conditions.
