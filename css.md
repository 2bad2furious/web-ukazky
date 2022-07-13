---
class: 'text-center'
theme: apple-basic
layout: fact
routerMode: hash
record: build
selectable: true

penDefaultLang: css,result

---

# CSS

---

# Co je to CSS?

- Cascading Style Sheets
- Jazyk pro stylování (primárně) HTML
- Umožňuje nám přidávat vlastnosti prvkům na stránce
- Vlastnosti jednoho prvku můžeme mít nedfinované na více místech

---

# Základní koncepty I

- Vybíráme prvky na stránce (pomocí **selektoru**)
  - těm měníme hodnoty **vlastností**

<pen name="abYZvqN" defaultLang="html,css"/>

---

# [Základní selektory](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

<pen name="KKoMVxg" />

---

# Základní koncepty II

- Jednotlivá pravidla mají různou [specificitu](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
  - pravidla s vyšší specificitou mají přednost
  - id > class > název tagu > * 
- Některé vlastnosti se [dědí](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance), tzn. platí i pro vnořené prvky
- Podle toho, [kde se nachází](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade) (viz další slide), mají také různou důležitost
  - Pravidla definovaná později mají větší
  - pomocí **!important** můžeme také zvýšit důležitost

<pen name="GRxqoBa"/>

---

# Kde všude jsou/lze psát styly?

Seřazeno dle priority od nejnižší po nejvyšší
- nějaké styly už mají prohlížeče
- uživatel si může nějaké styly změnit např. pomocí extensions
- &lt;style> element v hlavičce dokumentu a &lt;link href="**cesta k souboru**" rel="stylesheet"> v hlavičce
- atribut **style** přímo na prvku
  - zde nepíšeme selektory

---

# Pseudo [třídy](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) a [elementy](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
  
<pen name="rNdMJQK" />

---


# [Barvy a jak je lze zadávat](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

<pen name="yLKaKJq" />

---

# Velikosti

- relativní
- absolutní

---

# Textové vlastnosti

- font
- text

---

# Boxmodel

---

# Boxmodel - border

---

# Pozadí

---

# Display

- none
- block
- inline
- inline-block
- flex

---

# Position

- static
- relative
- absolute
- fixed
- sticky
- absolute in relative

---

# Další vlastnosti

- Cursor, opacity, transition, transform, shadow

---

# Ale je toho zase více

<iframe src="https://www.itnetwork.cz/html-css/css3/css-manual/cesky-css-3-manual-rejstrik" class="flex-grow"></iframe>

---

# Prefixing