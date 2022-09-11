---
class: 'text-center'
theme: apple-basic
layout: fact
routerMode: hash
record: build
selectable: true

penDefaultLang: css,result
hideInToc: true
---

# CSS

---
layout: two-cols
class: flex items-center justify-between
hideInToc: true
---

# Obsah

::right::

<Toc columns="1" maxDepth="1" listClass="underline" />

---
layout: center
---

# Co je to CSS?

- **C**ascading **S**tyle **S**heets
- Jazyk pro stylování (primárně) HTML
- Umožňuje nám přidávat styly prvkům na stránce pomocí vlastností a jejich hodnot

---
hideInToc: true
---

# Základní koncepty I

- Vybíráme prvky na stránce (pomocí **selektoru**)
  - těm měníme hodnoty **vlastností**

<pen name="abYZvqN" defaultLang="html,css"/>

---
hideInToc: true
---

# [Základní selektory](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

<pen name="KKoMVxg" />

---
hideInToc: true
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
hideInToc: true
---

# [Kde všude jsou/lze psát styly?](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)

Seřazeno dle priority od nejnižší po nejvyšší
- nějaké styly už mají prohlížeče
- uživatel si může nějaké styly změnit např. pomocí extensions
- &lt;style> element v hlavičce dokumentu a &lt;link href="**cesta k souboru**" rel="stylesheet"> v hlavičce
- atribut **style** přímo na prvku
  - zde nepíšeme selektory

---
title: Pseudo třídy a elementy
---

# [Pseudo třídy](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- platí, pokud je element v nějakém stavu, zapisujeme za :
  
<pen name="rNdMJQK" />

---
hideInToc: true
---

# [Pseudo elementy](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
- upravujeme část elementů, zapisujeme za dvěma ::

<pen name="ExLygXG" />

---
hideInToc: true
---

# [Zavináče](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule#index)

Alespoň ty nejčastější

- **@import** - použití jiného css souboru
- **@font-face** - deklarace písma pro aplikaci
- **@keyframes** - deklarace animací
- **@media** - aplikuje vložené styly pouze za nějaké podmínky, např. dle rozlišení či místa zobrazení
- **@supports** - aplikuje vložené styly, pouze pokud je/není podporovaná určitá funkcionalita 

<div class="flex-grow"/>

Ale o nich více později.

---
hideInToc: true
---

# [Hodnoty pro reset vlastností](https://www.kevinpowell.co/article/initial-unset-revert/)

- **inherit** (nastaví hodnotu na poděděnou)
- **initial** (nastaví hodnotu na defaultní dle specifikace)
- **unset** (nastaví hodnotu na poděděnou, pokud je vlastnost děděná, jinak na defaultní dle specifikace)
- **revert** (nastaví hodnotu na poděděnou, pokud je vlastnost děděná, jinak na defaultní prohlížeče nebo uživatele)

<div class="flex-grow"/>

Jestli je musíte použít, pravděpodobně jste už udělali chybu někde jinde. 

---
hideInToc: true
---

# [Debugování v prohlížeči](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)

<div style="background: url('https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS/inspecting1.png') no-repeat; background-size: contain" class="flex-grow"/>

[https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS/inspecting1.png](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS/inspecting1.png)

Dev console v prohlížeči nám může pomoci zjistit, jaké styly se aplikují, kde jsou definovány, a mnoho dalšího.

---
title: Barvy
---

# [Barvy a jak je lze zadávat](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

<pen name="yLKaKJq" />

---
title: Velikosti
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
title: Textové vlastnosti
---

# [Textové vlastnosti](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)

Alespoň ty hlavní

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
hideInToc: true
---

# Textové vlastnosti

<pen name="vYRgLZZ"/>


---
title: Display
---


# [Display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

Alespoň ty hlavní hodnoty

- **none** (schová element)
- **block** nastaví element jako blokový - vyhradí si celý řádek)
- **inline** (nastaví element jako řádkový - vyhradí si pouze potřebné místo)
- **inline-block** (kombinace **inline** a **block**, vyhradí si jen potřebné místo, ale:
  - může mít např. **width** a **height**
  - a vertikální **margin**/**padding** se chová "normálně")
- **flex** (skládání vnitřních prvků za sebe s možností je roztahovat, posouvat, atd.)
- **grid** (skládání vnitřních prvků do virtuálních boxů)

---
hideInToc: true
---

# Display

<pen name="WNzjjJW" />

---

# Boxmodel

<img src="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png" alt="Boxmodel"/>

[https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png)

---
hideInToc: true
---

# [Boxmodel](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

- **padding** (vnitřní spacing, vlastnost pro zkrácený zápis)
  - **padding-left**, **padding-top**, **padding-right**, **padding-bottom**
  - často se hodí udávat v hodnotách relativních k **font-size**
- **margin** (vnější spacing, vlastnost pro zkrácený zápis)
  - **margin-left**, **margin-top**, **margin-right**, **margin-bottom**
  - často se hodí udávat v hodnotách relativních k **font-size** nebo **auto** pro zabrání co nejvíce místa
- **box-sizing**
  - **content-box** (default, **width**/**height** nastavuje jenom **obsah**)
  - **border-box** (**width**/**height** nastavuje **obsah** + **padding** + **border**)

<div class="flex-grow"></div>
<footer class="flex gap-2">
<sup>(1)</sup> <div>Viditelný box je box <strong>bez marginu</strong>, tedy <strong>box-sizing: border-box</strong><br>
U inline elementů width a width nebude fungovat
</div>
</footer>

---
hideInToc: true
---

# Boxmodel - výška/šířka

- **height**, **min-height**, **max-height** (výška, minimální výška a maximální výška)
- **width**, **min-width**, **max-width** (šírka, minimální šířka a maximální šířka)
- hodnoty lze nastavovat ve velikostních jednotkách nebo **auto** (prohlížeč vybere hodnotu)

---
hideInToc: true
---

# Boxmodel - border

- **border** (rámeček, vlastnost pro zkrácený zápis)
  - **border-width** (velikost rámečku), **border-color** (barva rámečku)
  - **border-style** (styl rámečku, lze stylovat i na jednotlivé strany, **solid**, **none**, **dotted**, **dashed**)
  - **border-radius** (zaoblení rohů, lze stylovat i jednotlivé rohy, hodnoty jsou klasické velikosti)

<pen name="yLKgaNQ" />

Pozor, vše kromě **none** a **solid** vypadá v každém prohlížeči jinak.

---
hideInToc: true
---

# Boxmodel

<pen name="zYWNBjy" />

---

# Pozadí

- **background** ([vlastnost](https://developer.mozilla.org/en-US/docs/Web/CSS/background) na zkrácený zápis)
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
hideInToc: true
---

# Pozadí

<pen name="ZExLMeZ" />

---
title: Position
---

# [Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

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
title: Seznamy a tabulky
---

# Seznamy

- **list-style** ([vlastnost](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style) pro zkrácený zápis)
  - **list-style-type** (značka prvku, **none**/**square**/**decimal**/**disc**/...)
  - **list-style-position** (pozice značky prvku - **inside**/**outside**, defualtní hodnota je outside)
  - **list-style-image** (obrázek místo defaultní značky)

<pen name="YzLWWRg"/>

---

# Tabulky

<pen name="JjvKKVa"/>

---
hideInToc: true
---

# Position

<pen name="ExEmmzm" />

---

# Přechody

- **transition** ([vlastnost](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) pro zkrácený zápis)
  - **transition-property** (vlastnosti, kterou chceme "animovat", např. **background** nebo **all**)
  - **transition-duration** (délka přechodu, zadáváme hodnotu s časovou jednotkou, např. **250ms** nebo **.25s**)
  - **transition-timing-function** ([křivka přechodu](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function), např. **linear** nebo **ease-in**)
  - **transition-delay** (zpoždění animace, stejná syntax jako **transition-duration**)

---
hideInToc: true
---

# Přechody

<pen name="GRxdxbZ"/>

---
hideInToc: true
---

# [Animovatelné vlastnosti](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

nejsou všechny, ale např. tyto jsou:

- **background**
- **border**
- **top**, **bottom**, **left**, **right**
- **margin**, **padding**

--- 

# Další vlastnosti

- **cursor** (změní styl kurzoru po dobu najetí na element)
- **opacity** (změní průhlednost elementu)
- **box-shadow** (nastaví stín elementu)
- **animation** (využije **@keyframe** animaci s přesnější definicí průběhu)
- **transform** (umožňuje měnit zobrazení, např. zvětšení, rotace, posunutí podobně jako **display:absolute**)

---
hideInToc: true
---

# Ale je toho zase více

<iframe src="https://www.itnetwork.cz/html-css/css3/css-manual/cesky-css-3-manual-rejstrik" class="flex-grow"></iframe>

---
title: Prefixing
---

# [Prefixing](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix)

- prefix před vlastnosti
- pro experimentální funkčnosti (zprovoznění funkčnosti na starších prohlížečích, kde byla experimentální)

```css {2-5}
.animated {
  -webkit-transition: all 4s ease;
  -moz-transition: all 4s ease;
  -ms-transition: all 4s ease;
  -o-transition: all 4s ease;
  transition: all 4s ease;
}
```

<div class="flex-grow"/>

Dnes už se z více důvodů prefixy moc do prohlížečů nepřidávají. Prefixing pro nás pak v praxi něco dělá automaticky.
