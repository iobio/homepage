---
layout: post
title: How To Use Genetic Testing Registry
image: /public/images/blog/panel/Gtr/banner.png
subtitle: How to generate gene list using the GTR component?
tags:
  - Aditya Ekawade
  - panel.iobio
---

## How To Use Genetic Testing Registry
<br>
The **Genetic Testing Registry (GTR)** from NCBI allows a user to search for genetic conditions and phenotypes, providing them with publicly-available gene-condition associations. While being quite comprehensive, GTR queries can often be confusing. We’ve remedied this by allowing the user to input a simple disorder term and quickly providing a single list of genes associated with the disorder. Below is a quick summary and a step-by-step workflow of the GTR interface.
<div style="text-align:center">
    <img src="/public/images/blog/panel/Gtr/gtr.png" style="width:100%">
</div>
#### 1. Enter condition name
Start by typing the condition name in the search box provided. Search terms will be autocompleted as you type. You can then simply select your desired term.
<div>
    <img src="/public/images/blog/panel/Gtr/conditions_searched.png" style="width:80%">
</div>
Searched terms are listed below the search box. Searched terms can be removed by clicking the "close" icon (X) on the label.

Additional terms can be added by simply typing into the search box.
<br><br>

####  2. Results
<div>
    <img src="/public/images/blog/panel/Gtr/gtr_results.png" style="width:80%;margin:10px 0px 25px 0px;">
</div>
Gene results are displayed in a simple table, with genes occurring in the most panels at the top.

The genes marked with the “shield icon” are genes that GTR defines as known associated genes. Often times, mutations within these genes are what define the specific disorder.

For example, ATXN10 mutations clinically define Spinocerebellar ataxia 10, and GTR lists ATXN10 as the associated gene for Spinocerebellar ataxia 10.

#### Resources
<div>
    <img src="/public/images/blog/panel/Gtr/resources.png" style="width:60%;margin-top:-30px;margin-bottom: -20px;">
</div>

Additional information about a gene can be found by clicking the resource links (a vertical ellipsis) in the respective row of the table.  
<br><br>
#### 3. Genes selection
<div>
    <img src="/public/images/blog/panel/Gtr/gene_selection_slider.png" style="width:60%;margin-top:-30px;margin-bottom: -20px;">
</div>

The number of genes selected can be changed using the slider. The range of the slider represents the maximum and the minimum number gene panels for the genes in the list.
<br><br>

#### 4. Panels Selection and Definition
<div>
    <img src="/public/images/blog/panel/Gtr/panels_selection.png" style="width:60%;margin-top:-10px;">
</div>

Panels are classified into three categories: Specific, Moderate, and General. By default, specific and moderate panels are selected, providing a refined gene list. The gene list can be expanded by including general panels. Additional information about these specific, moderate and general thresholds can be found by hovering over the checkboxes. Default thresholds can be changed using the slider.

<div>
    <img src="/public/images/blog/panel/Gtr/panels_definition.png" style="width:60%;margin-top:-10px;margin-bottom: -20px;">
</div>
<br><br>
#### 5. Filter cards


#### Search for Genes
<div>
    <img src="/public/images/blog/panel/Gtr/gene_search.png" style="width:60%;margin-top:-30px;margin-bottom: -20px;;">
</div>

Specific genes can be searched for within the loaded gene list.
<br><br>
#### Number of Genes
<div>
    <img src="/public/images/blog/panel/Gtr/genes_selected.png" style="width:60%;margin-top:-30px;margin-bottom: -20px;;">
</div>

The number of genes currently selected and the total number of genes are displayed.
<br><br>
#### Associated Conditions and Modes of Inheritance
<div>
    <img src="/public/images/blog/panel/Gtr/conditions.png" style="width:60%;">
</div>

The associated conditions and the modes of inheritance for the searched condition are displayed.
<div>
    <img src="/public/images/blog/panel/Gtr/conditions_modal.png" style="width:40%;margin:10px 0px 25px 0px;">
</div>

Additional filtering based on associated conditions and modes of inheritance.
<br><br>
#### Panels
<div>
    <img src="/public/images/blog/panel/Gtr/panels_modal.png" style="width:60%;">
</div>

Panels are the tests performed by diagnostic labs. Additional filtering based on panels can be performed here. Panels are categorized and genes are color-coded based on the specific, moderate and general thresholds defined in the Panels card.  
<br><br>
#### Vendors
<div>
    <img src="/public/images/blog/panel/Gtr/vendors.png" style="width:50%;">
</div>

Additional filtering based on the sequencing and testing vendors.
<br><br>
#### 6. Export
<div>
    <img src="/public/images/blog/panel/Gtr/export.png" style="width:50%;">
</div>

Genes can be exported to the clipboard or as a text file using the Export button in the toolbar.
<br><br>
#### 7. Badges
<div>
    <img src="/public/images/blog/panel/Gtr/badge.png" style="width:50%;">
</div>

The number of genes selected is shown in the badge for the respective tool, and are propagated to the Summary page.
