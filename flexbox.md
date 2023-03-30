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

# Flexbox

---
layout: two-cols
class: flex items-center justify-between
hideInToc: true
---

# Obsah

::right::

<Toc columns="1" maxDepth="1" listClass="underline" />

---
title: Motivace
---

# Display inline-block je takové polořešení layoutů

Kromě otravného whitespacu toho taky spoustu neumí (viz dále).

<pen name="dyjeZLo" default-lang="html,result"/>

---
title: Řešení
---

# Řešení: [Flexbox](https://developer.mozilla.org/en-US/docs/Glossary/Flexbox)

Chci mezi nimi prostor, duh

<pen name="YzjLEoq"/>

---

# Základní koncept - container vs items

<div class="text-center">
<img class="w-1/2 mx-auto" src="https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg"/>
<img class="w-1/2 mx-auto" src="https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg"/>
</div>

Zdroj: [Complete guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties)

---

# Základní koncept - osy

<img class="w-3/4 mx-auto" src="https://res.cloudinary.com/practicaldev/image/fetch/s---3gDSFf1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/fsln7je4ax7ft3er28hh.png"/>

<div class="flex-grow"/>


Zdroj: [dev.to/virensuthar/get-started-with-flexbox-3in5](https://dev.to/virensuthar/get-started-with-flexbox-3in5)

---
layout: center
---

# Základní info

- Po primární ose se skládají **items** (potomci **containeru**)
- Primární osa je defaultně ta horizontální
- Sekundární osa je defaultně ta vertikální
- Flexbox zapneme nastavením **display: flex** na **container**
- _Ignoruje_ nastavení **display** na **items**
    - nemusíme tedy na prvky používat **display: inline-block**, aby byly vedle sebe
    - ale můžeme mít např. **display: flex** v itemu a tím zapnout flexbox i uvnitř
- Nastavení os můžeme změnit (viz dále)

---
layout: center
---

# Vlastnosti containeru

---
title: justify-content
clicks: 5
---

## Container - primární osa: [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

<p>
Možné hodnoty: <click-links :to="[[0, 'flex-start'], [1, 'flex-end'], [2, 'center'], [3, 'space-between'], [4, 'space-around'], [5, 'space-evenly']]" class="mt-2" />
</p>

<div v-show-on="0">
Zobrazí na začátku, v defaultním nastavení os to je vlevo
<pen name="ExpLoGK" class="my-1" />
Pozor, flex-start a flex-end se chovají jinak než <strong>start</strong> a <strong>end</strong>. Start a end nekoukají na to, zda je směr otočený (viz flex-direction: *-reverse)
</div>
<div v-show-on="1">
Zobrazí se na konci, v defaultním nastavení os to je vpravo
<pen name="vYajdER" class="my-1" />
Pozor, flex-start a flex-end se chovají jinak než <strong>start</strong> a <strong>end</strong>. Start a end nekoukají na to, zda je směr otočený (viz flex-direction: *-reverse)
</div>
<div v-show-on="2">
Zobrazí se uprostřed
<pen name="QWBrQwX"  class="my-1" />
</div>
<div v-show-on="3">
Mezi prvky vloží stejné místo (rovnoměrně rozdělí volný prostor)
<pen name="ZEjorGQ"  class="my-1" /></div>
<div v-show-on="4">
Vloží místo mezi prvky i vedle krajních. Místo vedle krajních je poloviční. 
<pen name="qByYxdX" class="my-1" /></div>
<div v-show-on="5">
Vloží <b>stejné</b> místo mezi prvky i vedle krajních. 
<pen name="XWBBgEV" class="my-1" /></div>

---
title: align-items
clicks: 3
---

## Container - sekundární osa: [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

<p>
Možné hodnoty: <click-links :to="[[0, 'flex-start'], [1, 'flex-end'], [2, 'center'], [3, 'stretch']]" class="mt-2" />
</p>

<div v-show-on="0">
Zobrazí na začátku, v defaultním nastavení os to je nahoře
<pen name="abjKmxN"  class="mt-1" />
Existují i hodnoty start a end, které se chovají stejně i bez prefixu, ale jsou méně podporované.
</div>
<div v-show-on="1">
Zobrazí se na konci, v defaultním nastavení os to je dole
<pen name="QWBxKPY"  class="mt-1" />
Existují i hodnoty start a end, které se chovají stejně i bez prefixu, ale jsou méně podporované.
</div>
<div v-show-on="2">
Zobrazí se uprostřed
<pen name="RwBJGmj"  class="mt-1" />
</div>
<div v-show-on="3">
Roztáhne prvky (defaultní ve flexboxu)
<pen name="jOpKMoJ" class="mt-1" /></div>


---
title: flex-wrap
clicks: 2
---

## Přetékání itemů z kontejneru - [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)


<p>
Možné hodnoty: <click-links :to="[[0, 'nowrap'], [1, 'wrap'], [2, 'wrap-reverse']]" class="mt-2" />
</p>

<div v-show-on="0">
Hodnoty nepřetečou, pokud to jde (defaultní chování)
<pen name="eYjXvQz"  class="mt-1" />
</div>
<div v-show-on="1">
Hodnoty se začnou rovnat do dalších řádků.
<pen name="poZYeBj"  class="mt-1" />
</div>
<div v-show-on="2">
Hodnoty se začnou rovnat do dalších řádků před ten původní
<pen name="ZEjPeZO"  class="mt-1" />
</div>
---
title: flex-direction
clicks: 3
---

## Změna nastavení os - [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)


<p>
Možné hodnoty: <click-links :to="[[0, 'row'], [1, 'column'], [2, 'row-reverse'], [3, 'column-reverse']]" class="mt-2" />
</p>

<div v-show-on="0">
Hodnoty se skládají v řádku (defaultní chování)
<pen name="abjMWdV"  class="mt-1" />
</div>
<div v-show-on="1">
Hodnoty se skládají do sloupečku
<pen name="GRBemoe"  class="mt-1" />
</div>
<div v-show-on="2">
Hodnoty se skládají do řádku v opačném pořadí
<pen name="NWBJjrP"  class="mt-1" />
</div>
<div v-show-on="3">
Hodnoty se skládají do sloupečku v opačném pořadí
<pen name="PoBLmzr"  class="mt-1" />
</div>

---
hideInToc: true
---

## Problém s mezerami v display:inline-block

Nevíme, který prvek je momentálně na kraji - který už by neměl mít margin

<pen name="jOpKMoJ" class="mt-1" />

---
title: gap
clicks: 1
---

## Container - gap
Margin vs gap: <click-links :to="[[0, 'margin'], [1, 'gap']]" class="mt-0" />

<div v-show-on="0">
Nemůžeme kontrolvat, zda je margin jen uvnitř a ne na krajích.
<pen name="jOvVWdY" class="mt-1"/>
Marginy ve flexu <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">nesplývají</a>.
</div>

<div v-show-on="1">
Gap se aplikuje pouze mezi prvky. mezeru okolo můžeme nastavit např. paddingem containeru.
<pen name="QWVGyBM" class="mt-1"/>
</div>


---
title: row-gap a column-gap
hideInToc: true
clicks: 1
---

## Container - row/column-gap

Margin vs gap: <click-links :to="[[0, 'column-gap'], [1, 'row-gap']]" class="mt-0" />


<div v-show-on="0">
nastavuje mezery mezi prvky, které jsou horizontálně za sebou - tedy mezi sloupečky.
<pen name="WNgorqX" class="mt-1"/>
</div>

<div v-show-on="1">
Nastavuje mezery mezi prvky, které jsou vertikálně za sebou - tedy mezi řádky.
<pen name="YzOpwMy" class="mt-1"/>
</div>

Hodnoty pro column-gap a row-gap lze nastavit i přímo ve vlastnosti gap - napíšeme 2 hodnoty.

---
layout: center
---

# Vlastnosti itemu

---
title: basis, shrink, grow
clicks: 2
---

## Nastavení velikost itemu

- [**flex-basis**](https://www.vzhurudolu.cz/prirucka/css-flex-basis) - velikost itemu na primární ose (width, pokud main osa = řádek), má přednost před width/height
- **flex-shrink** - jak moc je item ochotný se zmenšit (pokud je to nutné), defaultně 1
- **flex-grow** - jak moc by se rád zvětšil (pokud to jde), defaultně 0

<div class="my-1">
Margin vs gap: <click-links :to="[[0, 'Příklad 1'], [1, 'Příklad 2'], [2, 'Full height page']]" class="mt-0" />
</div>

<div v-show-on="0">
<pen name="ZEMNOrd" class="mt-1"/>
</div>

<div v-show-on="1">
<pen name="wvEbWpj" class="mt-1"/>
</div>

<div v-show-on="2">
<pen name="ExezZBy" class="mt-1"/>
</div>


---
title: align-self
---

## Item - align-self 

- Zarovnání itemu na sekundární ose.
- Hodnoty jako u align-items

<pen name="XWPwKYJ" class="mt-1"/>

---
title: order
---

## order 

- Nastaví pořadí prvku (defaultně 0)
- Prvky se řadí podle vzestupně podle nastaveného pořadí
- Hodí se např. při jiných velikostech zařízení

<pen name="NWLVrBO" class="mt-1" />

---
title: align-content
clicks: 6
---

## BONUS: Container - hýbání lajnami po sekundární ose: [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)

<p>
Možné hodnoty: <click-links :to="[[0, 'flex-start'], [1, 'flex-end'], [2, 'center'], [3, 'stretch'], [4, 'justify-content'], [5, 'space-around'], [6, 'space-evenly']]" class="mt-2" />
</p>

<div v-show-on="0">
Zobrazí na začátku, v defaultním nastavení os to je nahoře
<pen name="PoBBjxq"  class="mt-1" />
</div>
<div v-show-on="1">
Zobrazí se na konci, v defaultním nastavení os to je dole
<pen name="bGjjROe"  class="mt-1" />
</div>
<div v-show-on="2">
Zobrazí se uprostřed
<pen name="LYBBLaq"  class="mt-1" />
</div>
<div v-show-on="3">
Roztáhne řádky (defaultní ve flexboxu)
<pen name="NWBBgmb" class="mt-1" /></div>
<div v-show-on="4">
Mezi prvky vloží stejné místo (rovnoměrně rozdělí volný prostor).
<pen name="abjjwrR" class="mt-1" /></div>
<div v-show-on="5">
Vloží <b>stejné</b> místo mezi prvky i vedle krajních. 
<pen name="qByyjzg" class="mt-1" /></div>
<div v-show-on="6">
Existují i hodnoty start a end, které se chovají stejně i bez prefixu, ale jsou méně podporované.
<pen name="RwBBgXw" class="mt-1" /></div>

Existují i hodnoty start a end, které se chovají stejně i bez prefixu, ale jsou méně podporované.
