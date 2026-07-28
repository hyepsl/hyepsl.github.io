---
title: Buck Converter State-Space Modeling: From Switching States to an Averaged Model
date: 2026-07-26
category: Power Electronics
excerpt: A structured derivation of the continuous-time state-space model of a Buck converter and the assumptions behind state-space averaging.
slug: buck-state-space-modeling
---

This note develops a reusable modeling workflow for the continuous-conduction-mode Buck converter. The objective is not only to obtain matrices, but also to clarify the physical meaning of each state and input.

## 1. Select the states

A common choice is the inductor current and capacitor voltage:

$$
x = [i_L \quad v_C]^T
$$

## 2. Write the two switching models

Derive one model for the switch-on interval and another for the switch-off interval. Each model follows directly from the inductor-voltage and capacitor-current relationships.

## 3. Average over one switching period

Use the duty ratio as the weighting factor. The averaged model is suitable for controller design when the control bandwidth is sufficiently lower than the switching frequency.

> **Next step:** add operating-point linearization and the small-signal duty-to-output transfer function.
