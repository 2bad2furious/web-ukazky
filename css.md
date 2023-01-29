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
title: Co je to CSS, Základní selektory
---

# Co je to CSS?

- **C**ascading **S**tyle **S**heets
- Jazyk pro stylování (primárně) HTML
- Umožňuje nám přidávat styly prvkům na stránce pomocí vlastností a jejich hodnot
- K jeho správnému používání je nutná znalost HTML (co je element, atribut, potomek, předek, atd.) a základní principy
  fungování WEBU

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

# Selektor podle názvu tagu
Vybere všechny elementy se specifikovaným **názvem tagu** (např. p, a, h1, h2, atd.)

<pen name="jOKPRaM" />


---
hideInToc: true
---

# Selektor podle atributu id

Vybere prvek s danou hodnotou atributu **id**. Používáme #.

<pen name="wvXaZXM" />

Pro každou hodnotu id by měl existovat jen jeden prvek. Pokud potřebujeme vybírat více elementů najednou, využijeme třídu.

---
hideInToc: true
---

# Selektor podle třídy

Vybere všechny prvky, které v atributu class obsahují danou třídu. Používáme tečku.

<pen name="yLENrEX" defaultLang="html,result" />

Prvek může obsahovat víc tříd oddělených mezerou.


---
hideInToc: true
---

# Seznam selektorů

Použije dané styly pro všechny prvky odpovídající všem selektorům. Selektory oddělujeme čárkou.

<pen name="xxzGezJ" />

---
hideInToc: true
---

# Kombinování selektorů - potomek v předkovi

Vybere všechny potomky odpovídající danému selektoru, které mají předka s daným selektorem.


<pen name="GRGJLBK" />

---
hideInToc: true
---

# Kombinování selektorů - dítě v rodiči

Vybere všechny děti odpovídající danému selektoru, které mají rodiče s daným selektorem. 

<pen name="OJEVGwV" />


---
hideInToc: true
---

# [Rekapitulace základních selektorů](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
Plus nějaké pokročilé

<pen name="KKoMVxg" />

---
hideInToc: true
---

# Základní koncepty II

- Jednotlivá pravidla mají různou [specificitu](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
    - pravidla s vyšší specificitou mají přednost
    - id > class > název tagu > *
- Některé vlastnosti se [dědí](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance), tzn. platí i pro vnořené
  prvky
- Podle toho, [kde se nachází](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade) (viz další slide), mají také
  různou důležitost
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
hideInToc: true
---

# [Debugování v prohlížeči](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)

<div style="background: url('https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS/inspecting1.png') no-repeat; background-size: contain" class="flex-grow"/>

[https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS/inspecting1.png](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS/inspecting1.png)

Dev console v prohlížeči nám může pomoci zjistit, jaké styly se aplikují, kde jsou definovány, a mnoho dalšího.

---
title: Pseudo třídy a elementy
clicks: 4
---

# [Pseudo třídy](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

Platí, pokud je element v nějakém stavu, zapisujeme za :

Příklady: <click-links :to="[[0, 'hover'], [1, 'active a focus'], [2, 'target a visited'], [3, 'children'], [4, 'ostatní']]" class="mb-2 mt-3" />

<pen name="ExRVYZr" v-show-on="0" />
<pen name="rNKOByq" v-show-on="1" />
<pen name="wvXKwpq" v-show-on="2" />
<pen name="rNdMJQK" v-show-on="3" />
<pen name="BaVoBxd" v-show-on="4" />

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
title: Funkce
hideInToc: true
---

# [Funkce](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions)

složitější hodnoty

- **rgb()**, **rgba()** (barvy)
- **calc()** (provádění matematických operací pro spočítání hodnoty), **min()**, **max()** (vybere extrém ze seznamu)
- **linear-gradient()** (barevné přechody)
- **scale**, **rotate**, **transform** (změna rozměrů/pozice prvku)

---
title: Barvy a velikosti
---

# [Barvy a jak je lze zadávat](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

<pen name="yLKaKJq" />

Můžeme také zadat **transparent** pro průhlednou barvu.

---
hideInToc: true
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
    - **font-weight** (tloušťka písma, **1-1000**<sup>(2)</sup> nebo **lighter**, **light**, **normal**, **bold**, **
      bolder**)
- **text**
    - **text-align** (zarovnání textu, např. **start**, **left**, **center**, **end**, **right**, **justify**)<sup>(
      3)</sup>
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

# Pozadí

- **background-color** (barva pozadí)

<pen name="xxjqYGj"/>

Vlastnosti **background** a **background-color** zatím pro naše účely fungují stejně, **background** však umí
nastavovat i víc než jen barvu, ale o tom později.

---
hideInToc: true
---

# Rekapitulace 1

Umíme tvořit základní webové stránky, které
- mají vlastní styl textu/písma
- mají pozadí

## Co dál?
- Jak zajistit pozadí bylo trochu širší/vyšší než text, nebo
- dát prvkům rámeček, nebo
- prvky oddělit větší mezerou?

---

# Boxmodel

Struktura každého prvku

<img src="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png" alt="Boxmodel"/>

[https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png)

---
hideInToc: true
---

# [Boxmodel](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

- **padding** (vnitřní spacing, mezera mezi obsahem a krajem prvku, vlastnost pro zkrácený zápis)
    - **padding-left**, **padding-top**, **padding-right**, **padding-bottom**
    - pozor, vertikální padding se u **inline** elementů chová [_divně_](https://codepen.io/2bad2furious/pen/abGYEVV?editors=1100)
    - často se hodí udávat v hodnotách relativních k **font-size**
- **margin** (vnější spacing, mezera mezi krajem prvku a rodičem/sourozenci, vlastnost pro zkrácený zápis)
    - **margin-left**, **margin-top**, **margin-right**, **margin-bottom**
    - často se hodí udávat v hodnotách relativních k **font-size** nebo **auto** pro zabrání co nejvíce místa 
      - **auto** se například k centrování, ale je potřeba, aby centrovaný element nebyl **inline** a měl pevnou šířku
    - vertikální margin u **inline** prvků nebude fungovat 

<div class="flex-grow"></div>

Pozor, marginy <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">se občas kombinují</a>. 

---
hideInToc: true
---

# Boxmodel - výška/šířka

- **height**, **min-height**, **max-height** (výška, minimální výška a maximální výška)
- **width**, **min-width**, **max-width** (šírka, minimální šířka a maximální šířka)
    - hodnoty lze nastavovat ve velikostních jednotkách nebo **auto** (prohlížeč vybere hodnotu)
- **box-sizing**
    - **content-box** (default, **width**/**height** nastavuje jenom **obsah**)
    - **border-box** (**width**/**height** nastavuje **obsah** + **padding** + **border**)

<pen name="eYrLwBG" />

<footer class="flex gap-2">
U <strong>inline</strong> elementů width a height nebude fungovat
</footer>

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

# Horizontální centrování

Inline v blocku.

<pen name="LYmJgjz" defaultLang="html,result" />

Můžeme použít **text-align:center**

---
hideInToc: true
---

# Horizontální centrování

Menší block v blocku.

<pen name="xxjaypr" defaultLang="html,result" />

Můžeme použít **margin auto** na **obě strany**, ale musíme mít **pevně nastavenou šířku**.

---
title: Tabulky a seznamy
---

# Stylování tabulek

<pen name="JjvKKVa"/>

---
hideInToc: true
---

# Rekapitulace 2

Umíme tvořit pokročilejší webové stránky:
- stylujeme barvy textu, pozadí
- umíme prvky roztáhnout, oddělovat mezerami

## Co dál
- Co ale, kdybychom chtěli tyto roztažené prvky dávat vedle sebe?
- Jaktože můžeme dát vertikální padding/margin inputu ale ne spanu?

---
title: Display
---

# [Display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

Alespoň ty hlavní hodnoty

- **none** (schová element)
- **block** (nastaví element jako blokový - vyhradí si celý řádek)
- **inline** (nastaví element jako řádkový - vyhradí si pouze potřebné místo)
- **inline-block** (kombinace **inline** a **block** - vyhradí si jen potřebné místo, ale:
  - může mít např. **width** a **height**
  - a vertikální **margin**/**padding** se chová "normálně"
  - z toho důvodu většinou používáme pro možnost nastavení těchto vlastností na **defaultně inline** prvcích)
- **flex** (skládání vnitřních prvků za sebe s možností je roztahovat, posouvat, atd.)<sup>(1)</sup>
- **grid** (skládání vnitřních prvků do virtuální tabulky)<sup>(1)</sup>
- další jako table-cell, table-row, table<sup>(1)</sup>

<div class="flex-grow"></div>
<footer>
<sup>(1)</sup> Tyto zatím řešit nebudeme.
</footer>

---
hideInToc: true
---

# Display

none vs inline vs block vs inline-block

<pen name="WNzjjJW" />

---
hideInToc: true
---

# Stylování seznamů

- **list-style** ([vlastnost](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style) pro zkrácený zápis)
  - **list-style-type** (značka prvku, **none**/**square**/**decimal**/**disc**/...)
  - **list-style-position** (pozice značky prvku - **inside**/**outside**, defualtní hodnota je outside)
  - **list-style-image** (obrázek místo defaultní značky)

<pen name="YzLWWRg"/>


---
hideInToc: true
---

# Stylování seznamů - proč

<pen name="qBKaxrP"/>

Typicky například v hlavičkách chceme používat seznam, ale prvky chceme zobrazit po svém.

---

# Vertikální zarovnání inline-block prvků
Můžeme použít vertical-align.

<pen name="vYjoLNX" />

---
hideInToc: true
clicks: 4
---

# [Vertikální zarovnání](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)

**inline/inline-block** prvků a v buňkách tabulky.

- **middle**, **top**, **bottom**, **sub**, **sup**
- **baseline** (default, zarovná na spodní hranu textu okolo)

<p>
Příklady: <click-links :to="[[0, 'baseline'], [1, 'sub'], [2, 'middle'], [3, 'top'], [4, 'bottom']]" class="mt-2" />
<span class="ml-3 text-gray-100 text-sm align-middle">(Zkuste odkomentovat nastavení display a padding.)</span>
</p>

<pen name="jOxgWwe" v-show-on="0" />
<pen name="QWreaVJ" v-show-on="1" />
<pen name="LYmwegb" v-show-on="2" />
<pen name="GRdVyYy" v-show-on="3" />
<pen name="OJEZWeJ" v-show-on="4" />


---

# Pozadí 2

- **background** ([vlastnost](https://developer.mozilla.org/en-US/docs/Web/CSS/background) na zkrácený zápis)
    - **background-image** (obrázek na pozadí, lze zadávat **url(adresa)**) <sup>(1)</sup>
    - **background-repeat** (opakování pozadí)
    - **background-attachment** (propojení pozadí s oknem nebo se skrolováním, např. **fixed**, **local**, **scroll**)
    - **background-size** (velikost pozadí, např. **contain**, **cover**, **50%** nebo **200px**)
    - **background-position** (pozice pozadí)


<div class="flex-grow"></div>
Pozadí nijak neroztáhne prvek. Pokud tedy nemá výšku/šířku, nic vidět nebude.
<footer>
<sup>(1)</sup> místo adresy v <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/url"><strong>url</strong></a> lze používat i spoustu jiných hodnot
</footer>

---
hideInToc: true
---

# Pozadí 2

<pen name="ZExLMeZ" />

---
title: Position
---

# [Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

- **static** (defaultní hodnota)
- **relative** (umožňuje element posunout relativně k jeho původní pozici)
- **fixed** (umožňuje element pozicovat vůči oknu, nezabírá místo)
- **absolute** (umožňuje element pozicovat absolutně v jeho *containing-block*, nezabírá místo)
  - [*containing-block*](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) je buď **body** nebo
    nejbližší předek s pozicí jinou než **static**
- **sticky** (umožňuje elementu zůstat viditelný co nejdéle, ukážeme si později)
- vlastností **z-index** nastavíme, který element překrývá který (vyšší hodnota překrývá nižší)

<pen name="qBomjxM" />

<!-- TODO sticky description -->

---
hideInToc: true
---

# Position

<pen name="ExEmmzm" />

---

# Přechody a animace

- **transition** ([vlastnost](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) pro zkrácený zápis)
    - **transition-property** (vlastnosti, kterou chceme "animovat", např. **background** nebo **all**)
    - **transition-duration** (délka přechodu, zadáváme hodnotu s časovou jednotkou, např. **250ms** nebo **.25s**)
    - **transition-timing-function** ([křivka přechodu](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function),
      např. **linear** nebo **ease-in**)
    - **transition-delay** (zpoždění animace, stejná syntax jako **transition-duration**)

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
hideInToc: true
---

# [@Keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) a [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

- naše pojmenovaná animace
- v **@keyframes** deklarujeme, jaké styly se mají použít v jakém snímku animace
  - snímky jsou buď v procentech nebo **from**/**to**
  - můžeme také dělat stejné styly pro více snímků (spojíme čárkou)
- používáme vlastností **animation** ([vlastnost](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) pro zkrácený
  zápis)
  - **animation-name** (název naší animace)
  - **animation-duration** (délka animace v [čase](https://developer.mozilla.org/en-US/docs/Web/CSS/time), např. **.2s**)
  - **animation-timing-function** (funkce rychlosti průběhu, např. **linear** (default), **ease**)
  - **animation-delay** (délka prodlevy, než animace začne, udáváme v čase)
  - **animation-iteration-count** (počet opakování animace, např. **1** (default), **2**, **infinite**)
  - **animation-direction** (v jakém směru animace jede, např. **normal** (default), **reverse**, **alternate**)
  - **animation-play-state** (pozastavení/spuštění animace)
  - **animation-fill-mode** (nastavení, jaké styly si má element ponechat po průběhu animace, např. **none**, **forwards** (ty z posl. _snímku_), **backwards** (ty z prvního _snímku_))

---
hideInToc: true
---

# Animace

<pen name="LYmWJwr"/>

---
title: Gradienty
---

# [Linear gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)

Také existují [radial-gradienty](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient).

- používáme místo obrázků, nejčastěji na **pozadí**
- definujeme seznam barev, případně v jaké části má k přechodu dojít
- lze nastavit i rotace gradientu
- často využíváme generátorů

<pen name="GRdWddw" />

---

# Další vlastnosti

- **cursor** (změní styl kurzoru po dobu najetí na element)
- **opacity** (změní průhlednost elementu)
- **box-shadow** (nastaví stín elementu, hodnoty jsou složitější, často používáme [generátory](https://www.cssmatic.com/box-shadow))
- **outline** (nastaví "border", který ale nezabírá místo)
- **transform** (umožňuje měnit zobrazení, např. zvětšení, rotace, posunutí podobně jako **display:absolute**)
- **visibility** (umožňuje schovat element, ale stále bude na stránce, klikatelný, atd. **hidden**/**visible**)

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
