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
</div>
<div v-show-on="1">
Zobrazí se na konci, v defaultním nastavení os to je vpravo
<pen name="vYajdER" class="my-1" />
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
Existují i hodnoty start a end, které se chovají stejně i bez prefixu, ale jsou méně podporované.

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
</div>
<div v-show-on="1">
Zobrazí se na konci, v defaultním nastavení os to je dole
<pen name="QWBxKPY"  class="mt-1" />
</div>
<div v-show-on="2">
Zobrazí se uprostřed
<pen name="RwBJGmj"  class="mt-1" />
</div>
<div v-show-on="3">
Roztáhne prvky (defaultní ve flexboxu)
<pen name="jOpKMoJ" class="mt-1" /></div>
Existují i hodnoty start a end, které se chovají stejně i bez prefixu, ale jsou méně podporované.

---
title: gap
---

## Container - gap

- gap
- column-gap
- row-gap

---
title: flex-direction, wrap
---

## Nastavení os a přetékání

- flex-direction
- wrap

---
title: align-content
clicks: 6
---

## Container - hýbání lajnami po sekundární ose: [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)

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
---
layout: center
---

# Vlastnosti itemu

---
title: basis, shrink, grow
---

## Nastavení velikost itemu

- flex-basis, shrink, grow

---
title: align-self
---

## Zarovnání itemu na sekundární ose

- align-self

---
title: order
---

## Změna pořadí prvků

Hodí se např. při jiných velikostech zařízení

- order
