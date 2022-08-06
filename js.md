---
class: 'text-center'
theme: apple-basic
layout: fact
routerMode: hash
record: build
selectable: true

penDefaultLang: js,result

---

# JavaScript

---
layout: center
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

# Komentáře a výpis

<pen name="MWVGGvz"/>

---

# Proměnné

- Proměnné deklarujeme pomocí klíčových slovíček **let** nebo **const**, datové typy nepíšeme
  - **let** vytváří měnitelnou proměnnou
  - **const** vytváří neměnitelnou proměnnou
  - **var** je zastaralý způsob s odlišným chováním od jiných jazyků 

<pen name="VwXxxXK"/>

Deklarace proměnné je její vytvoření, před použitím ji musíme deklarovat, nemůžeme ale deklarovat 2x se stejným názvem.

---

# Datové typy

- **String**
  - nemáme chary
- **Number**
  - nerozlišujeme datovým typem desetinná a celá čísla
- **Boolean**
- **undefined** (prázdná hodnota, např. když zapomeneme dát proměnné hodnotu)
- **null** (prázdná hodnota)



---

# Práce s hodnotami - operátory

<pen name="qBoYKqm"/>

Pozor na tolerantnost k chybám, js nám umožňuje např. dělit string číslem.

---

# Stringy a interpolace

<pen name="zYWjaPo"/>

---

# Parsování

<pen name="JjLvBmx"/>

**NaN** je speciální hodnota, která vyjadřuje, že výsledkem operace mělo být číslo, ale z nějakého důvodu nemohlo, jako např. když počítáme s **undefined** nebo právě při nepovedeném **parsování**.

---

# Funkcionality jenom na webu

<pen name="bGvMjPW" clickToLoad="true" />

V praxi se moc nepoužívají, protože se nedají stylovat, ale nám budou zatím stačit.

---

# Spouštění js lokálně

- Potřebujeme mít nainstalovaný [node.js](https://nodejs.org/en/download/)
- **prompt** ale není součástí js samotného. S [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) je možné použít např. [prompt-sync](https://www.npmjs.com/package/prompt-sync)
- Procesům můžeme posílat hodnoty pomocí tzv. [argumentů](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/).

---

# Práce se stringy

<pen name="ZExoMRZ" />


---

# Matematické utility

<pen name="zYWjJXx" />

---

# Scope

Proměnné v JavaScriptu (stejně jako v Javě) existují (a jsou přístupné) pouze ze stejných nebo vnitřních složených závorek

<pen name="yLKjjrr"/>

---

# Podmínky

--- 

# Neočekávané chování

---

# Cykly

---

# Pole

---

# Cykly II - for..in, for..of

---

# Object - Slovník

---

# Funkce

---

# Moduly a import/export


---

# JSDoc

---

# Arrow funkce

---
layout: fact
---

# OOP

---

# Třídy

---

# Atributy

CanIUse

---

# Metody

---

# Privátní atributy/metody

---

# Gettery a settery

---

# Statika

---
layout: center
---

# Historie OOP v JS
Trocha vysvětlení rozdílů mezi arrow a starými funkcemi

---

# Historie OOP v JS - funkce jako konstruktor
Trocha vysvětlení rozdílů mezi arrow a starými funkcemi

---

# Historie OOP v JS - protoypy
Trocha vysvětlení rozdílů mezi arrow a starými funkcemi

---

# Historie OOP v JS - ES6 třídy
Trocha vysvětlení rozdílů mezi arrow a starými funkcemi

---

# Arrow funkce vs staré funkce uvnitř tříd  

