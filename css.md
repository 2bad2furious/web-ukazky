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
layout: center
---

# Co je to CSS?

- **C**ascading **S**tyle **S**heets
- Jazyk pro stylování (primárně) HTML
- Umožňuje nám přidávat styly prvkům na stránce pomocí vlastností a jejich hodnot

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

# [Zavináče](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule#index)

Alespoň ty nejčastější

- **@import** - použití jiného css souboru
- **@font-face** - deklarace písma pro aplikaci
- **@keyframes** - deklarace animací
- **@media** - aplikuje vložené styly pouze za nějaké podmínky, např. dle rozlišení či místa zobrazení

<div class="flex-grow"/>

Ale o nich více později.

---

# [Hodnoty pro reset vlastností](https://www.kevinpowell.co/article/initial-unset-revert/)

- **inherit** (nastaví hodnotu na poděděnou)
- **initial** (nastaví hodnotu na defaultní dle specifikace)
- **unset** (nastaví hodnotu na poděděnou, pokud je vlastnost děděná, jinak na defaultní dle specifikace)
- **revert** (nastaví hodnotu na poděděnou, pokud je vlastnost děděná, jinak na defaultní prohlížeče nebo uživatele)

<div class="flex-grow"/>

Jestli je musíte použít, pravděpodobně jste už udělali chybu někde jinde. 

---

# Debugování v prohlížeči

<div style="background: url('css-debug.png') no-repeat; background-size: contain" class="flex-grow"/>

Dev console v prohlížeči nám může pomoci zjistit, jaké styly se aplikují, kde jsou definovány, a mnoho dalšího.

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

Alespoň ty hlavní

- **color** (barva písma)
- **font** ([vlastnost](https://developer.mozilla.org/en-US/docs/Web/CSS/font) pro aplikování následujících)
  - **font-family** (název písma, resp. názvy oddělené čárkou, použije se první dostupné)<sup>(1)</sup>
  - **font-size** (velikost písma, většinou v **em**, **rem**)
  - **font-weight** (tloušťka písma, **1-1000**<sup>(2)</sup> nebo **lighter**, **light**, **normal**, **bold**, **bolder**)
- **text**
  - **text-align** (zarovnání textu, např. **start**, **left**, **center**, **end**, **right**, **justify**)<sup>(3)</sup>
  - **text-decoration** (dekorace textu, např. **none**, **underline**, **line-through**)
- **line-width** (výška řádku, většinou v poměru k velikosti písma (např. **1.2**))

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

# [Display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

Alespoň ty hlavní

- **none** (schová element)
- **block** nastaví element jako blokový - vyhradí si celý řádek)
- **inline** (nastaví element jako řádkový - vyhradí si pouze potřebné místo)
- **inline-block** (kombinace **inline** a **block**, vyhradí si jen potřebné místo, ale:
  - může mít např. **width** a **width**
  - a vertikální **margin**/**padding** se chová "normálně")
- **flex** (skládání vnitřních prvků za sebe s možností je roztahovat, posouvat, atd.)
- **grid** (skládání vnitřních prvků do virtuálních boxů)

---

# Display

<pen name="WNzjjJW" />

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
- **box-sizing**
  - **content-box** (default, **width**/**width** nastavuje jenom **obsah**)
  - **border-box** (**width**/**width** nastavuje **obsah** + **padding** + **border**)

<div class="flex-grow"></div>
<footer class="flex gap-2">
<sup>(1)</sup> <div>Viditelný box je box <strong>bez marginu</strong>, tedy <strong>box-sizing: border-box</strong><br>
U inline elementů width a width nebude fungovat
</div>
</footer>

---

# Boxmodel - výška/šířka

- **height**, **min-height**, **max-height** (výška, minimální výška a maximální výška)
- **width**, **min-width**, **max-width** (šírka, minimální šířka a maximální šířka)
- hodnoty lze nastavovat ve velikostních jednotkách nebo **auto** (prohlížeč vybere hodnotu)

---

# Boxmodel - border

- **border** (rámeček, vlastnost pro zkrácený zápis)
  - **border-width** (velikost rámečku), **border-color** (barva rámečku)
  - **border-style** (styl rámečku, lze stylovat i na jednotlivé strany, **solid**, **none**, **dotted**, **dashed**)
  - **border-radius** (zaoblení rohů, lze stylovat i jednotlivé rohy, hodnoty jsou klasické velikosti)

<pen name="yLKgaNQ" />

Pozor, vše kromě **none** a **solid** vypadá v každém prohlížeči jinak.

---

# Boxmodel

<pen name="zYWNBjy" />

---

# Pozadí

- **background** (vlastnost na zkrácený zápis)
  - **background-color** (barva pozadí)
  - **background-image** (obrázek na pozadí, lze zadávat **url(adresa)**) <sup>(1)</sup>
  - **background-repeat** (opakování pozadí)
  - **background-attachment** (propojení pozadí s oknem nebo se skrolováním, např. **fixed**, **local**, **scroll**)
  - **background-size** (velikost pozadí, např. **contain**, **cover**, **50%** nebo **200px**)
  - **background-position** (pozice pozadí)

<div class="flex-grow"></div>
<footer>
<sup>(1)</sup> místo adresy v <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/url"><strong>url</strong></a> lze používat i spoustu jiných hodnot
</footer>

---

# Pozadí

<pen name="ZExLMeZ" />

---

# Position

- **static** (defaultní hodnota)
- **relative** (umožňuje element posunout relativně k jeho původní pozici)
- **fixed** (umožňuje element pozicovat absolutně v okně)
- **sticky** (umožňuje elementu zůstat viditelný co nejdéle to jde)
- **absolute** (umožňuje element pozicovat absolutně v jeho *containing-block*)
  - [*containing-block*](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) je buď **body** nebo nejbližší předek s pozicí jinou než **static**
- vlastností **z-index** nastavíme, který element překrývá který (vyšší hodnota překrývá nižší) 


<pen name="qBomjxM" />

<!-- TODO sticky description -->

---

# Position

<pen name="ExEmmzm" />

---

# Animace

- **animation** ([vlastnost](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) pro zkrácený zápis)
  - **animation-delay**
  - **animation-direction**
  - **animation-duration**
  - **animation-fill-mode**
  - **animation-iteration-count**
  - **animation-name**
  - **animation-play-state**
  - **animation-timing-function**

---

# Animace

<pen name="yLKbbde" />

---

# Další vlastnosti

- **cursor**
- **opacity**
- **transition**
- **transform**
- **shadow**

---

# Ale je toho zase více

<iframe src="https://www.itnetwork.cz/html-css/css3/css-manual/cesky-css-3-manual-rejstrik" class="flex-grow"></iframe>

---

# Prefixing

<div class="flex-grow"/>

Dnes už ...