---
layout: post
title: "clin.iobio paper"
image: /public/images/blog/clin_paper/2022_01-clin_paper.png
subtitle: A web-based clinical diagnostic workflow to rapidly diagnose genetic disease
tags:
  - Alistair Ward
  - clin.iobio
  - variant
---

Our clin.iobio tool was recently <a href="https://www.mdpi.com/2075-4426/12/1/73" target="_new">published</a> as part of the <a href="https://www.mdpi.com/journal/jpm/special_issues/Clinical_Precision" target="_new">Journal of Personalized Medicine's Special Issue</a> on Precision Medicine in Clinical Practice. In this paper, we describe a real world example of using clin.iobio to rapidly diagnose genetic disease in critically ill newborns in the newborn intensive care unit (NICU).

Clin.iobio is a diagnostic workflow comprising multiple steps powered by other tools in the iobio suite. In the workflow's first step, rapid sampling of the underlying sequencing data provides an overview of basic quality metrics for the sequencing data. In the second step, our <a href="https://bmcmedgenomics.biomedcentral.com/articles/10.1186/s12920-019-0641-1" target="_new">genepanel.iobio</a> tool builds a list of candidate genes based on the provided phenotypes and/or HPO terms. These genes are then passed to <a href="https://www.nature.com/articles/s41598-021-99752-5" target="_new">gene.iobio</a>, along with any variants prioritized by other analysis tools, for annotation, interrogation, and review. The power of gene.iobio is described in our previous <a href="https://iobio.io/2021/11/16/gene_paper" target="_new">blog post</a>. Finally, a report of candidate variants flagged by the analyst are summarized in the findings page.


<div style="text-align: center;margin-top: 30px;margin-bottom:50px">
  <img src="/public/images/blog/clin_paper/figure1.png" class="">
  <div style="font-size:13px;text-align:left">
  A representative clinical case, a a newborn with a fetal akinesia sequence phenotype, as viewed in clin.iobio. 
   </div>
</div>

In the publication's example, a newborn with a fetal akinesia sequence phenotype underwent rapid whole genome sequencing along with his parents. Compound heterozygous variants were quickly identified in the <i>LGI4</i> gene. One of these missense variants was listed as "likely pathogenic" in ClinVar and was associated with "arthrogryposis multiplex congenita" and "fetal akinesia sequence" - the most objective phenotypes for the patient. These variants were ultimately considered diagnostic by the diagnostic team, and resulted in the newborn being moved to palliative care, sparing them from further invasive procedures.

The publication describes how clin.iobio can help all members of a diagnostic team, including those with limited computational expertise, to be actively involved in the diagnostic analysis process. This tool helps to promote a team-based approach to genomic analysis.

Please contact us at <a href="mailto:iobioproject@gmail.com">iobioproject@gmail.com</a> with any comments or questions about gene.iobio or any of our tools in the iobio suite.
