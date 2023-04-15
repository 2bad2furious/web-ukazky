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

# Media Queries, Responsivita a Reset.css

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

- zatím stránky (snad) vypadaly dobře na našem monitoru v našem prohlížeči
- co ale monitory ostatních? co telefony?
- co ostatní prohlížeče?

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
- můžeme mít různé styly podle rozlišení, typu zařízení, zda preferuje uživatel tmavý režim, atd.

Otevřete a zavřete kartu s CSS:
<pen name="KKxjqGG" />

---
hideInToc: true
---

# [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

[Primárně budeme měnit vzhled podle šířky zařízení.](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width)

Pro konkrétní šířku a širší:
```css
@media (min-width: 500px) {
  div {
    background: yellow;
  }
}
```

Pro konkrétní šířku a užší:
```css
@media (max-width: 800px) {
  div {
    border: 1px solid red;
  }
}
```

---

# TLDR - časté praktiky

- Na telefonu zobrazujeme méně než na počítači, využijeme **display: none**
- Flex direction pro telefon je **column**, pro počítač **row**
  - upravíme zarovnání

---

# Debugging

<p class="!mb-0">V dev tools si můžeme vybrat rozlišení (případně zařízení), na kterém chceme stránku prohlížet. Finální řešení je ale nutné zkontrolovat na konkrétních zařízeních.</p>

![Debugging](https://firefox-source-docs.mozilla.org/_images/rdmdevtools.png)

---

# Breakpointy

- nemá smysl pixelhuntit a fixovat problémy na každé šířce, kde se web rozbije
- většinou stačí řešit rozložení na několika (2-5) šířkách obrazovky
- příklad 576px, 768px, 992px, 1200px, 1400px
  - breakpointy také často nastavujeme v **em** nebo **rem**
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
  - [srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset) atribut na **img**

---
title: Reset a normalize
---

# Reset.css a normalize.css

Styly, které můžeme načíst do naší stránky, které ulehčí úpravu stylů napříč prohlížeči

- [reset.css](https://meyerweb.com/eric/tools/css/reset/index.html)
  - _resetuje_ defaultní styly prohlížečů
- [normalize.css](https://necolas.github.io/normalize.css/8.0.1/normalize.css)
  - přináší stejné styly pro všechny prohlížeče