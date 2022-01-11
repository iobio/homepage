---
layout: post
title: "clin.iobio paper"
image: /public/images/blog/clin_paper/2022_01-clin_paper.png
subtitle: A web-based clinical diagnostic workflow
tags:
  - Alistair Ward
  - clin.iobio
  - variant
---

Our clin.iobio tool was recently <a href="https://www.mdpi.com/2075-4426/12/1/73" target="_new">published</a> as part of the Journal of Personalized Medicine's <a href="https://www.mdpi.com/journal/jpm/special_issues/Clinical_Precision" target="_new">Special Issue</a> on Precision Medicine in Clinical Practice. This publication gives a real world example of using intuitive, web-based tools to rapidly diagnose genetic disease in critically ill newborns in the newborn intensive care unit (NICU). In this example, a newborn with a fetal akinesia sequence phenotype underwent rapid whole genome sequencing along with his parents.

The clin.iobio tool is a diagnostic workflow comprising multiple steps. Rapid sampling of the underlying data provides an overview of basic quality metrics for the sequencing data; our <a href="https://bmcmedgenomics.biomedcentral.com/articles/10.1186/s12920-019-0641-1" target="_new">genepanel.iobio</a> tool builds a list of candidate genes based on the provided phenotypes and/or HPO terms, which are passed to <a href="https://www.nature.com/articles/s41598-021-99752-5" target="_new">gene.iobio</a> for annotation and interrogation. The power of gene.iobio is also described in our previous <a href="https://iobio.io/2021/11/16/gene_paper" target="_new">blog post</a>. Finally, a report of candidate variants flagged by the analyst are summarized in the findings page.

In the case described in the publication, compound heterozygous variants were identified in the <i>LGI4</i> gene. One of these missense variants was listed as "likely pathogenic" in ClinVar and was associated with "arthrogryposis multiplex congenita" and "fetal akinesia sequence" - the most objective phenotypes for the patient. These variants were ultimately considered diagnostic by the diagnostic team, and resulted in the newborn being moved to palliative care, sparing them from further invasive procedures.

The publication describes how clin.iobio can help all members of a diagnostic team, including those with limited computational expertise, to be actively involved in the diagnostic analysis process. This tool helps to promote a team-based approach to genomic analysis.

Please contact us at <a href="mailto:iobioproject@gmail.com">iobioproject@gmail.com</a> with any comments or questions about gene.iobio or any of our tools in the iobio suite.
