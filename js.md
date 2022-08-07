---
class: 'text-center'
theme: apple-basic
layout: fact
routerMode: hash
record: build
selectable: true

penDefaultLang: js,result

hideInToc: true
---

# JavaScript

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
title: Intro
---

# Co? Proč?

- dynamicky typovaný jazyk (nepíšeme datové typy jako v Javě)
- na straně klienta (v prohlížeči) přináší interaktivitu webovým stránkám
- lze použít i na straně serveru
- s Javou nemá nic společného, název byl pouze marketingovým tahem
- velmi tolerantní k chybám, málokdy opravdu spadne
- [pravidelné nové verze](https://en.wikipedia.org/wiki/ECMAScript)
- narozdíl od Javy nemáme **main**, kód prostě píšeme do souboru

---
hideInToc: true
---

# [Jak ho spustíme v prohlížeči?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#how_do_you_add_javascript_to_your_page)

Nejdříve vytvoříme html soubor se základní strukturou, poté máme více možností:

- [Inline](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#internal_javascript) (vložíme **script** tag na konec hlavičky a do něho píšeme)
- [Externí soubor](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#external_javascript) (vložíme **script** tag na konec hlavičky, přidejme atribut **src** s cestou k vašemu js souboru)

Funkčnost našeho skriptu si můžeme ověřit:

<pen name="jOzxRdQ"/>


---
hideInToc: true
---

# Komentáře a výpis

<pen name="MWVGGvz"/>
Středníky na konci řádků nejsou povinné 

---
hideInToc: true
---

# [Proměnné](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)

- Proměnné deklarujeme pomocí klíčových slovíček **let** nebo **const**, datové typy nepíšeme
  - **let** vytváří měnitelnou proměnnou
  - **const** vytváří neměnitelnou proměnnou
  - **var** je zastaralý způsob s odlišným chováním od jiných jazyků 

<pen name="VwXxxXK"/>

Deklarace proměnné je její vytvoření, před použitím ji musíme deklarovat, nemůžeme ale deklarovat 2x se stejným názvem.

---
hideInToc: true
---

# [Datové typy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
Datové typy v js nezapisujeme a nejsou pro proměnné pevné.

- **String**
  - nemáme chary
- **Number**
  - nerozlišujeme datovým typem desetinná a celá čísla
- **Boolean**
- **undefined** (prázdná hodnota, např. když zapomeneme dát proměnné hodnotu)
- **null** (prázdná hodnota)

---
hideInToc: true
---

# [Práce s hodnotami - operátory](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#arithmetic_operators)

<pen name="qBoYKqm"/>

Pozor na tolerantnost k chybám, js nám umožňuje např. dělit string číslem.

---
hideInToc: true
---

# [Stringy a interpolace](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)

<pen name="zYWjaPo"/>

---
hideInToc: true
---

# [Parsování](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

<pen name="JjLvBmx"/>

**NaN** je speciální hodnota, která vyjadřuje, že výsledkem operace mělo být číslo, ale z nějakého důvodu nemohlo, jako např. když počítáme s **undefined** nebo právě při nepovedeném **parsování**.

---
hideInToc: true
---

# [Funkcionality jenom na webu](https://developer.mozilla.org/en-US/docs/Web/API/Window#methods)

<pen name="bGvMjPW" clickToLoad="true" />

V praxi se moc nepoužívají, protože se nedají stylovat, ale nám budou zatím stačit.

---
hideInToc: true
---

# Spouštění js lokálně

- Potřebujeme mít nainstalovaný [node.js](https://nodejs.org/en/download/)
- S [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) je možné pro vstup použít např. [prompt-sync](https://www.npmjs.com/package/prompt-sync)
- Procesům můžeme posílat hodnoty pomocí tzv. [argumentů](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/).

---
hideInToc: true
---

# [Práce se stringy](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods)

<pen name="ZExoMRZ" />


---
hideInToc: true
---

# [Matematické utility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

<pen name="zYWjJXx" />

---
title: Podmínky
---

# [Podmínky](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)


---
hideInToc: true
---

# [Porovnávací](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#comparison_operators) a [slučovací operátory](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#logical_operators_and_or_and_not)

---
hideInToc: true
---

# [Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

Proměnné v JavaScriptu (stejně jako v Javě) existují (a jsou přístupné) pouze ze stejných nebo vnitřních složených závorek

<pen name="yLKjjrr"/>
--- 
hideInToc: true
---

# [Neočekávané chování](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

---
title: Cykly
---

# [Cykly](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)

---
title: Pole
---

# [Pole](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)

---
title: For..in a for..of
---

# [Cykly II - for..in, for..of](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#looping_through_a_collection)

---
title: Object
---

# [Object - Slovník](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

---
title: Funkce
---

# [Funkce](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)

---
title: Import/export
---

# [Moduly a import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)/[export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

---
hideInToc: true
---

# [JSDoc](https://jsdoc.app/tags-returns.html)

---
title: Arrow funkce
---

# [Arrow funkce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---
layout: fact
title: OOP
---

# [OOP](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---
hideInToc: true
---

# [Třídy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---
hideInToc: true
---

# [Atributy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#field_declarations)

CanIUse

---
hideInToc: true
---

# [Metody](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#prototype_methods)

---
hideInToc: true
---

# [Privátní atributy/metody](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

---
hideInToc: true
---

# [Gettery](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) a [settery](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

---
title: Statika
---

# [Statika](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties)

---
layout: center
---

# Historie OOP v JS
Trocha vysvětlení rozdílů mezi arrow a starými funkcemi

---
hideInToc: true
---

# Historie OOP v JS - funkce jako konstruktor
Trocha vysvětlení rozdílů mezi arrow a starými funkcemi

---
hideInToc: true
---

# Historie OOP v JS - protoypy
Trocha vysvětlení rozdílů mezi arrow a starými funkcemi

---
hideInToc: true
---

# Historie OOP v JS - ES6 třídy
Trocha vysvětlení rozdílů mezi arrow a starými funkcemi

---
hideInToc: true
---

# Arrow funkce vs staré funkce uvnitř tříd  

