---
class: 'text-center'
theme: apple-basic
layout: fact
routerMode: hash
record: build
selectable: true
defaultFiddleLangs:

- html
- result

---

# HTML

---
layout: center
---

# Co to je HTML?

- HyperText Markup Language
- Značkovací jazyk
- Používá tzv. **tagy**, které mohou mít **atributy**
- Ty se zapisují do <> závorek
- Mohou obsahovat další tagy
- Mohou být **nepárové** nebo **párové** (musíme uzavřít pomocí &lt;/TAG>)

---

# Rozdělení tagů

- Dle párovosti
- Dle významnosti
    - Některé prvky jsou pouze stylovací - např. **b, i, div**
    - Některé prvky mají naopak hlubší význam - např. **strong, em, article**
- Podle blokování řádku
    - Některé elementy si vyhradí řádek pro sebe
        - např. **nadpisy, odstavce**
        - říkáme jim ***Blokové***
    - Některé elementy si vyhradí jenom potřebné místo pro obsah
        - např. **span, i, img**
        - říkáme jim ***Inline***

---

# Komentáře

<jsfiddle source="2bad2furious/nhouLgz2"/>

---

# Základní struktura .html souboru

- Ve spoustě editorů/IDE lze vygenerovat pomocí **!** a **Tab**

<jsfiddle source="2bad2furious/drakLxeo"></jsfiddle>

---

# Textové tagy

<jsfiddle source="2bad2furious/2afvgtkm/"></jsfiddle>

---

# Seznamy

- ***&lt;ol>*** je uspořádaný seznam
- ***&lt;ul>*** je neuspořádaný seznam
- ***&lt;li>*** je prvek seznamu

<jsfiddle source="2bad2furious/zaxmoqvh"></jsfiddle>

---

# Seznamy II.

- atributem ***type*** můžeme změnit "číslování" prvků u ***ol***
- u ***ul*** je toto chování ***deprecated*** a budeme muset použít **css**

<jsfiddle source="2bad2furious/pfdvkcge"></jsfiddle>

---

# Tabulka

| ***&lt;table>*** - Tabulka                             | ***&lt;tr>*** - Table Row, řádek tabulky  |
|--------------------------------------------------------|-------------------------------------------|
| ***&lt;th>*** - Table Header, hlavičková buňka tabulky | ***&lt;td>*** - Table Data, buňka tabulky |

<jsfiddle source="2bad2furious/t4zsv76n" :height="null"/>

*Také existují tagy tbody a thead*

---

# Layout tagy

TODO

---

# Kontejnery

TODO

---

# Další tagy

TODO

