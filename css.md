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

# Debugování v prohlížeči

---

# Resetování hodnot

- unset
- initial
- revert
- inherit

---

# [Barvy a jak je lze zadávat](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

<pen name="yLKaKJq" />

---

# [Velikosti](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
Alespoň ty hlavní

- **absolutní**
  - **px** (většinou ekvivalentní k 1 px na obrazovce)
- **relativní k velikosti písma**
  - **em** (velikost písma daného elementu)
  - **rem** (velikost písma kořenového elementu)
- **relativní k velikosti okna**
  - **vh** (1 % výšky okna)
  - **vw** (1 % šířky okna)
- **relativní k velikosti rodiče**
  - **%** (1 % šířky rodiče)

<div class="flex-grow"></div>

Hodnoty s jednotkami píšeme bez mezer (např. 100px).

---

# Textové vlastnosti

- **color** (barva písma)
- **font** ([vlastnost](https://developer.mozilla.org/en-US/docs/Web/CSS/font) pro aplikování následujících)
  - **font-family** (název písma, resp. názvy oddělené čárkou, použije se první dostupné)<sup>(1)</sup>
  - **font-size** (velikost písma, většinou v **em**, **rem**)
  - **font-weight** (tloušťka písma, **1-1000**<sup>(2)</sup> nebo **lighter**, **light**, **normal**, **bold**, **bolder**)
- **text**
  - **text-align** (zarovnání textu, např. **start**, **left**, **center**, **end**, **right**, **justify**)<sup>(3)</sup>
  - **text-decoration** (dekorace textu, např. **none**, **underline**, **line-through**)
- **line-height** (výška řádku, většinou v poměru k velikosti písma (např. **1.2**))

<div class="flex-grow"></div>

<footer>
<sup>(1)</sup> Fonty často hledáme online, např. <a href="https://fonts.google.com">fonts.google.com</a>, do seznamu můžeme také dávat generické názvy (viz ukázka)<br>
<sup>(2)</sup> 1 je nejmenší, 1000 největší tloušťka<br>
<sup>(3)</sup> <strong>start</strong> a <strong>end</strong> se mění podle směru čtení
</footer>

---

# Textové vlastnosti

<pen name="vYRgLZZ"/>


---

# Boxmodel

<img src="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png" alt="Boxmodel"/>

---

# Boxmodel

- **padding** (vnitřní spacing, vlastnost pro zkrácený zápis)
  - **padding-left**, **padding-top**, **padding-right**, **padding-bottom**
  - často se hodí udávat v hodnotách relativních k **font-size**
- **margin** (vnější spacing, vlastnost pro zkrácený zápis)
  - **margin-left**, **margin-top**, **margin-right**, **margin-bottom**
  - často se hodí udávat v hodnotách relativních k **font-size** nebo **auto** pro zabrání co nejvíce místa
- **width** (nastaví šířku obsahu nebo "viditelného" boxu dle **box-sizing**) <sup>(1)</sup>
- **height** (nastaví výšku obsahu nebo "viditelného" boxu dle **box-sizing**) <sup>(1)</sup>
- **box-sizing**
  - **content-box** (default, **width**/**height** nastavuje jenom **obsah**)
  - **border-box** (**width**/**height** nastavuje **obsah** + **padding** + **border**)

<div class="flex-grow"></div>
<footer class="flex gap-2">
<sup>(1)</sup> <div>Viditelný box je box <strong>bez marginu</strong>, tedy <strong>box-sizing: border-box</strong><br>
U inline elementů height a width nebude fungovat
</div>
</footer>

---

# Boxmodel - border

- **border** (rámeček, vlastnost pro zkrácený zápis)
  - **border-width** (velikost rámečku), **border-color** (barva rámečku)
  - **border-style** (styl rámečku, lze stylovat i na jednotlivé strany, **solid**, **none**, **dotted**, **dashed**)
  - **border-radius** (zaoblení rohů, lze stylovat i jednotlivé rohy, hodnoty jsou klasické velikosti)

<pen name="zYWNBjy" />
Pozor, vše kromě none a solid vypadá v každém prohlížeči jinak.

---

# Boxmodel

<pen name="zYWNBjy" />

---

# Pozadí

- **background** (vlastnost na zkrácený zápis)
  - **background-color** (barva pozadí)
  - **background-image** (obrázek na pozadí, lze zadávat **url(adresa)**) <sup>(1)</sup>
  - **background-repeat** (opakování pozadí)
  - **background-attachment**
  - **background-size**
  - **background-position**

<div class="flex-grow"></div>
<footer>
<sup>(1)</sup> místo adresy v <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/url"><strong>url</strong></a> lze používat i spoustu jiných hodnot
</footer>

---

# Pozadí

<pen />

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