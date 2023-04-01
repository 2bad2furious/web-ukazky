---
class: 'text-center'
theme: apple-basic
layout: fact
routerMode: hash
record: build
selectable: true

penDefaultLang: html,result
hideInToc: true
---

# Media Queries a Responsivita

---
layout: two-cols
class: flex items-center justify-between
hideInToc: true
---

# Obsah

::right::

<Toc columns="1" maxDepth="1" listClass="underline" />

---
layout:  center
---

# Proč vůbec ?

- zatím stránky (snad) vypadaly dobře na našem monitoru
- co ale monitory ostatní? co telefony?

---

# CSS pixely a viewport tag

- TLDR: 
  - pixely v CSS nejsou 1:1 k reálným pixelům, viewport meta tagem přenecháme tento poměr na zařízení
  - pokud chceme používat media queries "rozumně", musíme použít viewport meta tag  
  - viewport meta tag se nám vygeneruje automaticky, pokud používáme Emmet zkratky (**!** + **TAB**)
- [Zdroj 1](https://hacks.mozilla.org/2013/09/css-length-explained/), [Zdroj 2](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

---
title: Media Queries
---

# [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

- takový if pro styly
- můžeme mít různé styly podle rozlišení, typu zařízení, atd.

<pen name="KKxjqGG" />

---

# Breakpointy

- nemá smysl pixelhuntit a fixovat problémy na každé šířce, kde se web rozbije
- většinou stačí řešit rozložení na několika (2-5) šířkách obrazovky
- příklad 576px, 768px, 992px, 1200px, 1400px
- v prostoru mezi breakpointy nám pak mohou pomoci "containers"
  - zúžení obsahu na menší šířku (např. nižší breakpoint) a vycentrování

---
title: Mobile-first
---

# [Mobile-first vs. Desktop-first](https://technobrains.io/mobile-first-or-desktop-first-what-do-you-prefer/)
 
- při stylování je dobré jít "odspoda" 
  - udělat mobilní layout a pak vylepšovat na vyšších šířkách
- spousta stylů bude by default mobile friendly 
  - např. divy zabírají plnou šířku

---
title: Obrázky
---
# [Obrázky](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- obrázky ignorují velikost rodiče
  - většinou stačí nastavit **max-width: 100%**, případně **height: auto**
- taky se hodí načítat menší obrázky, pokud jsme na menších zařízeních
  - pomocí **background-image** a **media queries**
  - **srcset** atribut na **img**