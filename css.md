---
class: 'text-center'
theme: apple-basic
layout: fact
routerMode: hash
record: build
selectable: true

penDefaultLang: html,result

---

# CSS

---

# Co je to CSS?

- Cascading Style Sheets
- Jazyk pro stylování (primárně) HTML

---

# Základní koncepty I

- Vybíráme prvky na stránce (pomocí **selektoru**)
  - těm měníme hodnoty **vlastností**

<pen name="abYZvqN"/>

---

# Základní selektory

<pen name="KKoMVxg"/>

---

# Základní koncepty II

- Jednotlivá pravidla mají různou [specificitu](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
  - pravidla s vyšší specificitou mají přednost
  - id > class > název tagu > * 
- Některé vlastnosti se [dědí](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance), tzn. platí i pro vnořené prvky
- Podle toho, [kde se nachází](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade) (viz další slide), mají také různou důležitost
  - Pravidla definovaná později, mají větší
  - pomocí **!important** můžeme také zvýšit důležitost

<pen name="GRxqoBa"/>

---

# Kde všude jsou/lze psát styly?

Způsoby dle priority od nejnižší po nejvyšší
- nějaké styly už mají prohlížeče
- uživatel si může nějaké styly změnit
- &lt;style> element v hlavičce dokumentu a &lt;link href="**cesta k souboru**" rel="stylesheet"> v hlavičce
- atribut **style** přímo na prvku
  - zde nepíšeme selektory

---

# Barvy

TODO: pojmenované, RGB model + alpha, zmínit HSL, atd.

---

# Velikosti

TODO: Relativní a absolutní

---

# Textové vlastnosti

---

# Boxmodel

---

# Boxmodel - border

---

# Pozadí

---

# Display

---

# Další vlastnosti

Cursor, opacity, transition, transform

--- 

# Ale je toho zase více

<iframe src="https://www.itnetwork.cz/html-css/css3/css-manual/cesky-css-3-manual-rejstrik" class="flex-grow"></iframe>
