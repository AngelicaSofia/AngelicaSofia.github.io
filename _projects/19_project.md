---
layout: page
title: KGE-Perf
description: This project investigates how different KGE algorithms behave in terms of memory and speed across diverse hardware setups. The goal is to bridge the gap between research and real-world applicability, offering insights for scalable, efficient deployments.
img: assets/img/projects/KGE.png
importance: 19
category: work
related_publications: true
---

The project was developed as part of an extra research initiative in the Advanced Computer Architectures course at university, under the guidance of [Ordinary Professor Marco D. Santambrogio](https://www.deib.polimi.it/ita/personale/dettagli/356156) and [PhD Guido Walter di Donato](https://github.com/gwdidonato), and represents a concrete application of architectural and algorithmic principles to real-world AI systems.

## Exploring the Runtime Performance of Knowledge Graph Embedding Methods

As structured information became increasingly central in data-driven applications, Knowledge Graphs (KGs) emerged as powerful tools for modeling complex relationships across domains like healthcare, e-commerce, and natural language processing. While **Knowledge Graph Embedding (KGE)** techniques made it possible to transform these structured graphs into compact, vector-based representations—making them more computationally manageable—most research had focused on improving model accuracy, overlooking runtime efficiency, a critical factor for real-world deployment.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/pdf/projects/KGE-performance.pdf" title="Poli4SDGMockups" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Summary results in terms of total wall-clock time required for the training of the different KGE models, Knowledge Graphs (KG) State of the Art, KGE-Perf framework.
</div>

This project addressed that gap by proposing KGE-Perf, a performance-evaluation framework designed to assess the runtime behavior of popular KGE models. The framework allowed systematic benchmarking of memory usage, training and inference time, and the effectiveness of various hardware setups, including multi-threaded CPU, vectorized instructions, and GPU acceleration. Built on top of the AmpliGraph library, KGE-Perf ensured methodological consistency across experiments and reduced bias introduced by differing implementations.

Through **more than 630 hours of experiments**, the project evaluated state-of-the-art KGE methods such as TransE, DistMult, and ConvKB on multiple open-access datasets. The analysis revealed critical trade-offs between **computational efficiency and scalability**, offering actionable insights for applying KGE models in industrial contexts where hardware constraints and performance predictability are key. Projects results culminated in a peer-reviewed paper presented at the IEEE RTSI (Research and Technologies for Society and Industry) conference, {% cite ieeeRTSI9597228 %}.
