---
layout: page
title: AI Driving Car
description: An AI-powered coaching framework for learner drivers in automotive industry, combining Reinforcement Learning and advanced planning algorithms to guide, correct, and accelerate skill acquisition, with the goal of optimizing high-performance driving on racetracks (Monza circuit FormulaUno as Use Case).
img: assets/img/projects/related_wang.png
importance: 17
category: work
related_publications: true
---

Master’s Thesis in Computer Science Engineering - Artificial Intelligence and Machine Learning (Politecnico di Milano — Graduation with Honours, October 2021).

## Teaching a Learner Driver Using Reinforcement Learning and Planning Strategies

For my [master’s thesis](https://www.politesi.polimi.it/handle/10589/179442) in Artificial Intelligence at [Politecnico di Milano](https://www.polimi.it/en/), I explored how an AI agent can learn to drive like a human—and even improve faster—with the help of a virtual teacher. The project focused on simulating how a beginner driver (the “student”) could be guided by a more experienced agent (the “teacher”), using a smart learning process inspired by how people learn complex skills.

Driving a sports car at high speeds, especially on a racetrack like Monza, requires precise timing, instinct, and experience. Instead of relying only on trial-and-error, I developed a system where a teacher can provide advice and corrections to a learning driver. This approach makes the learning process not just faster, but smarter.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/pdf/projects/AI-Car-Driving.pdf" title="Crowd4SDG" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    TORCS Simulator, Project Pipeline Execution, Monza Formula1 Circuit
</div>

I used a racing simulator (TORCS) to test this concept, where the AI learns both by analyzing past mistakes (offline) and through real-time guidance (online). I also explored how planning strategies can help the teacher suggest better driving paths—like when to brake, turn, or accelerate—to complete a lap in the shortest possible time.

This project combined elements of machine learning, planning, and driving dynamics, with a goal that goes beyond racing: building smarter systems that can teach, support, and adapt—whether in self-driving cars, simulations, or real-life applications.

More details can be read in the full thesis: {% cite valeriani2020teaching %}. The thesis was carried out under the supervision of [Assistant Professor Marcello Restelli](https://restelli.faculty.polimi.it/MyWebSite/index.shtml) and Researcher Alessandro Lavelli.

##### Technologies & Tools
- Reinforcement Learning (Policy Gradients, PGPE)
- Planning Algorithms (MCTS with multi-step loss)
- Simulation: [TORCS](https://en.wikipedia.org/wiki/TORCS)
- Neural Networks, Transfer Learning, Python

