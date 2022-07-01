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

penDefaultLang: html

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

<pen name="ExEaMre" />

---

# Základní struktura .html souboru

- Ve spoustě editorů/IDE lze vygenerovat pomocí **!** a **Tab**

<pen name="zYWxbVm" />

---

# Textové tagy

<pen name="wvmBOVg" />

---

# Seznamy

- ***&lt;ol>*** je uspořádaný seznam
- ***&lt;ul>*** je neuspořádaný seznam
- ***&lt;li>*** je prvek seznamu

<pen name="vYREMBE" />

---

# Seznamy II.

- atributem ***type*** můžeme změnit "číslování" prvků u ***ol***
- u ***ul*** je toto chování ***deprecated*** a budeme muset použít **css**

<pen name="ZExYNdp" />

---

# Tabulka

| ***&lt;table>*** - Tabulka                             | ***&lt;tr>*** - Table Row, řádek tabulky  |
|--------------------------------------------------------|-------------------------------------------|
| ***&lt;th>*** - Table Header, hlavičková buňka tabulky | ***&lt;td>*** - Table Data, buňka tabulky |


*Také existují tagy tbody, thead a tfoot, do kterých můžeme korespondující řádky zabalit*

<pen name="JjLoqQO" />

---

# Tabulka 2

- Můžeme také slučovat buňky v řádku/sloupci pomocí atributů **colspan**/**rowspan**.

<pen name="YzaPboj" />

---

# Layout tagy

TODO
<pen name="bGvNPNb" />

---

# Kontejnery

TODO
<pen name="NWYPZPW" />

---

# Další tagy

TODO

<pen name="QWmwXwb" />

