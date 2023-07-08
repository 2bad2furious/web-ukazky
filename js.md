---
class: 'text-center'
theme: apple-basic
layout: fact
routerMode: hash
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

# [NodeJS](https://nodejs.org/en) - Jak spustíme JS lokálně?

- Nainstalujeme z [https://nodejs.org/en](https://nodejs.org/en)
- Pomocí příkazu `node <názevsouboru>` skript spustíme (Ve Webstormu lze klasicky použít ▶️)


---
hideInToc: true
---

# [Proměnné a výpis](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)

- Proměnné pojmenováváme jako v Javě (bez pomlček, mezer, nesmí začínat čísly, dodržujeme [camelCase](https://cs.wikipedia.org/wiki/CamelCase))
- Proměnné deklarujeme pomocí klíčových slovíček **let** nebo **const**, datové typy nepíšeme
  - **let** vytváří měnitelnou proměnnou
  - **const** vytváří neměnitelnou proměnnou
  - **var** je zastaralý způsob s odlišným chováním od jiných jazyků 

```js
let a = "Ahoj";
a = "čau"; // lze
a = 5 // také lze, js nemá pevné datové typy pro proměnné 
console.log(text); // vypíše proměnnou nebo text

const number = 3;
number = 5; // nelze, const nelze měnit
```

Deklarace proměnné je její vytvoření, před použitím ji musíme deklarovat, nemůžeme ale deklarovat 2x se stejným názvem.
Středníky na konci řádků nejsou povinné, ale jsou doporučené.

---
hideInToc: true
---

# [Datové typy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
Datové typy v js nezapisujeme a viděli jsme, že nejsou pro proměnné pevné.

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

- **+** **-** **\*** **/** **%** ...
- **+=** **+\-** ... 
- **++** **-\-**

```js
let a = 3;
a += 2; // a = 5
a++ // a = 6
```

Pozor na tolerantnost k chybám, js nám umožňuje např. dělit string číslem.

```js
let a = 3 / "pes"; // a = NaN - tzn. Not a Number
console.log(a) // nic nespadlo
```

---
hideInToc: true
---

# [Stringy a interpolace](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)

 - Nerozlišujeme mezi znaky a stringy, můžeme používat **""**, **''** a **``** 
 - Stejně jako v Javě můžeme spojovat stringy s jinými hodnotami pomocí **+**

```js
let pocetBagru = 3;
let text1 = "Mám " + pocetBagru + " bagrů";
// Ve stringách vytvořených pomocí `` můžeme provádět tzv. interpolaci
let text2 = `Mám ${pocetBagru} bagrů`;
console.log(text1, text2);
```

---
hideInToc: true
---

# [Parsování](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

```js
const cisloJakoString = "15.5";

// Získá celé číslo, datový typ je Number
const celeCislo = parseInt(cisloJakoString);
console.log(celeCislo);

// Získá desetinné číslo, datový typ je také Number
const desetinneCislo = parseFloat(cisloJakoString);
console.log(desetinneCislo);

const desetinneCislo2 = Number(cisloJakoString);
console.log(desetinneCislo2);
```

Při neúspěšném parsování vrací **NaN**. 

---
hideInToc: true
---

# Vstup

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
title: Porovnávací/slučovací parametry a podmínky
---

# [Porovnávací](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#comparison_operators) a [slučovací operátory](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#logical_operators_and_or_and_not)


---
title: Podmínky
hideInToc: true
---

# [Podmínky](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

- Podmínky slouží k větvení programu
- Provádí kus kódu, pokud platí logický výraz

<pen name="xxWJMoR"/>

---
hideInToc: true
---

# Podmínky - else

<pen name="OJvwqPB"/>


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
title: Spuštění v prohlížeči
---

# [Jak ho spustíme v prohlížeči?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#how_do_you_add_javascript_to_your_page)

Nejdříve vytvoříme html soubor se základní strukturou, poté máme více možností:

- [Inline](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#internal_javascript) (vložíme **script** tag na konec hlavičky a do něho píšeme)
- [Externí soubor](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#external_javascript) (vložíme **script** tag na konec hlavičky, přidejme atribut **src** s cestou k vašemu js souboru)
  - Pro použití import/export přidat atribut `type="module"`

Funkčnost našeho skriptu si můžeme ověřit:

<pen name="jOzxRdQ"/>
`document.write()` moc často používat nebudeme, proměnná `document` bude však velmi důležitá

---
hideInToc: true
---

# [Funkcionality jenom na webu](https://developer.mozilla.org/en-US/docs/Web/API/Window#methods)

<pen name="bGvMjPW" clickToLoad="true" />

V praxi se moc nepoužívají, protože se nedají stylovat, ale nám budou zatím stačit.

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

