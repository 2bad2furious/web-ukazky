---
class: 'text-center'
theme: apple-basic
layout: fact
routerMode: hash
record: build
selectable: true

penDefaultLang: html,result

hideInToc: true
---

# HTML

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
title: Co je to HTML?
---

# [Co to je HTML?](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

- HyperText Markup Language
- Značkovací jazyk
- Používá tzv. **tagy**, které mohou mít **atributy**, jako např.:
  - **id** - unikátní identifikátor prvku na stránce
  - **class** - třídy pro stylování
  - **src** - zdroj například pro obrázek/video
- Ty se zapisují do <> závorek
- Mohou obsahovat další tagy
- Mohou být **nepárové** nebo **párové** (musíme uzavřít pomocí &lt;/TAG>)

---

# Rozdělení tagů

- Dle párovosti
- Dle významu
    - Některé prvky jsou pouze stylovací nebo úplně bez významu- např. **b, i, div**
    - Některé prvky mají naopak hlubší význam - např. **strong, em, article**
- Podle blokování řádku
    - Některé elementy si vyhradí řádek pro sebe
        - např. **nadpisy, odstavce**
        - říkáme jim ***Blokové***
    - Některé elementy si vyhradí jenom potřebné místo pro obsah
        - např. **span, i, img**
        - říkáme jim ***Inline***

---
hideInToc: true
---

# [Komentáře](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)

<pen name="ExEaMre" />

---
hideInToc: true
---

# [Základní struktura .html souboru](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#anatomy_of_an_html_document)

- Ve spoustě editorů/IDE lze vygenerovat pomocí **!** a **Tab**

<pen name="zYWxbVm" />

---
title: Textové tagy
---

# [Textové tagy](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#inline_text_semantics)

<pen name="wvmBOVg" />

---

# Seznamy

- ***&lt;ol>*** je uspořádaný seznam
- ***&lt;ul>*** je neuspořádaný seznam
- ***&lt;li>*** je prvek seznamu

<pen name="vYREMBE" />

---
hideInToc: true
---

# Seznamy II.

- atributem ***type*** můžeme změnit "číslování" prvků u ***ol***
- u ***ul*** je toto chování ***deprecated*** a budeme muset použít **css**

<pen name="ZExYNdp" />

---
title: Tabulky
---

# [Tabulky](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)

| ***&lt;table>*** - Tabulka                             | ***&lt;tr>*** - Table Row, řádek tabulky  |
|--------------------------------------------------------|-------------------------------------------|
| ***&lt;th>*** - Table Header, hlavičková buňka tabulky | ***&lt;td>*** - Table Data, buňka tabulky |


<pen name="JjLoqQO" />

*Také existují tagy tbody, thead a tfoot, do kterých můžeme korespondující řádky zabalit*

---
hideInToc: true
---

# Tabulky 2

- Můžeme také slučovat buňky v řádku/sloupci pomocí atributů **colspan**/**rowspan**.

<pen name="YzaPboj" />

---
title: Multimédia
---

# [Multimédia](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding)

- ale hlavně obrázky

<pen name="KKoMpeo" />

Existují i **canvas** nebo **audio**.

---
title: Layout tagy
---

# [Layout tagy](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning)

- Tagy pro nějaký určitý obsah, vždy je lepší volit vhodný prvek, aby uživatelé čteček nebo vyhledávače lépe rozuměli obsahu

<pen name="bGvNPNb" />

[MDN - nejen layout tagy](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#sectioning_content)

---
title: Kontejnery
---

# Kontejnery

- obecné prvky pro obalení obsahu
  - hlavně z důvodu stylování

<pen name="NWYPZPW" />

---
title: Formuláře
---

# [Formuláře I](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)

<pen name="zYWGxpX" />

Budeme hodně používat u JavaScriptu.

---
hideInToc: true
---

# Formuláře II

- U políček lze také:
    - nastavovat hodnotu pomocí atributu **value**, u **textarea** se hodnota vkládá dovnitř
    - zabránit zadávání pomocí atributu **disabled**, lze také nastavit na **fieldset** pro všechna políčka najednou
    - specifikovat [**name**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) atribut, pod kterým se data budou posílat (hlavně u SSR nebo form. knihoven)
- Inputy mají mnoho [typů](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) :
    - např. **text** (defaultní), **number**, **email**, **password**, **file**, **submit** (tlačítko pro odeslání), ...
- U buttonů máme více [typů](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type):
    - **submit** (defaultní ve formuláři), **button** (ten neodešle) a **reset**
- Na formulářových prvcích lze vyjádřit [validační pravidla](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) pomocí atributů
    - **min**, **max**, **required**, **type** (např. **email**), **maxlength**, **minlength**
    - existuje také **pattern** (kde zadáte RegEx), ale ten po vás chtít nebudu :)
    - většina prvků, jako např. **select** nebo **input\[type=file]**, má ještě vlastní atributy

---
title: Odkazy
---

# [Odkazy](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

<pen name="OJvXyZE" />

Pomocí atributu [**target**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) můžeme specifikovat, kde se odkaz otevře.
Např. **_blank** ho otevře v nové kartě (dle nastavení prohlížeče).

---

# Další tagy

<pen name="QWmwXwb" />

---
hideInToc: true
---

# Další tagy II

- Tagů je o hodně víc, ale základ máme za sebou

<iframe src="https://www.itnetwork.cz/html-css/html5/html-manual/html-5-abecedni-rejstrik-tagu" class="flex-grow"></iframe>

