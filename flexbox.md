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


# Display inline-block je trochu otravný
A taky toho spoustu neumí (viz dále)

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

- Flexbox zapneme nastavením **display: flex** na **container**
- _Ignoruje_ nastavení **display** na **items**
  - nemusíme tedy na prvky používat **display: inline-block**, aby byly vedle sebe
- Primární osa je defaultně ta horizontální
- Sekundární osa je defaultně ta vertikální
- Nastavení os můžeme změnit (viz dále)

---
layout: center
---

# Základní vlastnosti containeru

---
title: Justify content
clicks: 4
---

# Containeru - primární osa: [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

<p>
Možné hodnoty: <click-links :to="[[0, 'flex-start'], [1, 'flex-end'], [2, 'center'], [3, 'space-between'], [4, 'space-around']]" class="mt-2" />
</p>

<div v-show-on="0">
Zobrazí na začátku, v defaultním nastavení os to je vlevo
<pen name="ExpLoGK" class="mt-1" />
</div>
<div v-show-on="1">
Zobrazí se na konci, v defaultním nastavení os to je vpravo
<pen name="vYajdER" v-show-on="1" class="mt-1" />
</div>
<div v-show-on="2">
Zobrazí se uprostřed
<pen name="QWBrQwX" v-show-on="2" class="mt-1" />
</div>
<div v-show-on="3">
Mezi prvky vloží stejné místo (rovnoměrně rozdělí volný prostor)
<pen name="ZEjorGQ" v-show-on="3" class="mt-1" /></div>
<div v-show-on="4">
Vloží místo mezi prvky i vedle krajních. 
<pen name="qByYxdX" v-show-on="4" class="mt-1" /></div>


---
title: align-items
---

# Containeru - sekundární osa: [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

---
title: align-content
---

# Containeru - sekundární osa: [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)

---
title: gap
---

# Container - gap

- gap
- column-gap
- row-gap

---

# Nastavení os a přetékání

- flex-direction
- wrap

---


# Vlastnosti itemu

- flex-basis, shrink, grow
- order
- align-self