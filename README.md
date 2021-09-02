# Cypress.io bootcamp
Repozitár k [Cypress.io bootcamp](https://filiphric.sk/bootcamp)

## O autorovi
Volám sa Filip. Som QA lead vo firme [Slido](https://www.sli.do/) a [Cypress ambasádor](https://cypress.io/ambassadors/)

## Čo sa nachádza v repozitári
Súčasťou repozitára je aplikácia a všetky učebné materiály k workshop. Väčšina kapitol kurzu začína súborom `zaciatok.js` alebo `zaciatok.ts`. Konečný stav kódu je uložený v súbore `zaver.js` alebo `zaver.ts`. Väčšina kapitol taktiež obsahuje súbor `zoznamsa.js` alebo `zoznamsa.ts`, v ktorom sú praktické cvičenia, ktoré riešime na workshope.

## Trello aplikácia
Aplikácia je napodobeninou aplikácie [Trello](https://trello.com). V aplikácii možno vytvárať boardy a zoznamy úloh. Medzi boardami je možné úlohy presúvať meniť ich stav, nastaviť im deadline či dokonca uploadnúť obrázok.

### Inštalácia
Inštalácia je jednoduchá, stačí zadať príkaz
1. `npm install`
2. `npm start`
3. A otvoriť aplikáciu v prehliadači na lokalite http://localhost:3000

### Databáza
Databázou je obyčajný json súbor, nachádzajúci sa v `trelloapp/public/data/data.json`. Uploadované súbory sa ukladajú do foldra `trelloapp/public/images`.

### Špeciálne API endpointy určené na uľahčenie práce s aplikáciou
- Toto je zoznam endpointov, ktoré nevolá samotná aplikácia, no umožňujú meniť stav databázy podľa požiadaviek
- tieto endpointy nevyžadujú autorizáciu
---
#### POST /reset
Odstráni všetky boardy, listy, karty a userov

---
#### DELETE /boards
Odstráni všetky boardy, zoznamy a karty

---
#### DELETE /lists
Odstráni všetky zoznamy a karty

---
#### DELETE /cards
Odstráni všetky karty

---
#### DELETE /users
Odstráni všetkých userov

---
### Ostatné API endpointy
- zoznam štandardných endpointov, ktoré sa vyskytujú pri interakcii s aplikáciou
---
#### GET /boards
Vráti zoznam všetkých verejných a vlastných boardov.
##### príklad API odpovede (neautorizovaný user):
```json
[
  {
    "name": "new project",
    "user": 0,
    "id": 27315982008,
    "starred": false,
    "created": "2020-09-01"
  },
  {
    "name": "moon landing 2",
    "user": 0,
    "id": 14254049205,
    "starred": true,
    "created": "2020-09-01"
  }
]
```
##### príklad API odpovede (neautorizovaný user):
```json
[
  {
    "name": "new project",
    "user": 0,
    "id": 27315982008,
    "starred": false,
    "created": "2020-09-01"
  },
  {
    "name": "moon landing 2",
    "user": 0,
    "id": 14254049205,
    "starred": true,
    "created": "2020-09-01"
  },
  {
    "name": "private board",
    "user": 1, // user id autora boardu
    "id": 6606529940,
    "starred": false,
    "created": "2020-09-01"
  }
]
```
---
#### POST /boards
Vytvorí nový board
##### príklad tela API volania:
```json
{
  "name": "moon landing 2"
}
```
##### príklad odpovede API:
```json
{
  "name": "moon landing 2",
  "user": 1,
  "id": 22559285486,
  "starred": false,
  "created": "2020-09-01",
  "lists": [],
  "cards": []
}
```
---
#### GET /boards/{boardId}
Vráti detaily boardu s id `{boardId}`
##### príklad API odpovede (neautorizovaný user):
```json
{
  "name": "new project",
  "user": 0,
  "id": 27315982008,
  "starred": false,
  "created": "2020-09-01"
}
```
---
#### PATCH /boards/{boardId}
Upraví board s ID `{boardId}`. Možno zmeniť názov, alebo ohviezdičkovanie boardu
##### príklad tela API volania:
```json
{
  "starred": true
}
```
---
#### DELETE /boards/{boardId}
Odstráni board s ID `{boardId}`

---
#### POST /lists
Vytvorí nový list (zoznam)
##### príklad tela API volania
```json
{
  "boardId": {boardId}, // povinný údaj
  "title": "to do"
}

```
---
#### PATCH /lists/{listId}
Upraví list s ID `{listId}`
##### príklad tela API volania
```json
{
  "title": "renamed list"
}

```
---
#### DELETE /lists/{listId}
Odstráni list s ID `{listId}`

---
#### POST /cards
Vytvorí novú kartu
##### príklad tela API volania
```json
{
  "boardId": {boardId}, // povinný údaj
  "listId": {listId}, // povinný údaj
  "title": "buy milk"
}

```
---
#### PATCH /cards/{cardId}
Upraví kartu s ID `{cardId}`
##### príklad tela API volania
```json
{
  "completed": true
}

```
---
#### DELETE /cards/{cardId}
Odstráni kartu s ID `{cardId}`

---
#### GET /users
Vráti informácie o autorizovanom používateľovi.
##### príklad API odpovede (autorizovaný user):
```json
{
  "user": {
    "email": "filip@example.com",
    "password": "$2a$10$MV7UPL.5O8uoIUvdmCOXMuOIJ/mLA3FzWC3HsuYIwspKuEWe9Y6Ae",
    "id": 1
  }
}
```
---
#### POST /signup
Vytvorí nového používateľa
##### príklad tela API volania:
```json
{
  "email": "filip@example.com",
  "password": "nbusr1234"
}
```
#### POST /welcomeemail
Odošle požiadavku na server o zaslanie uvítacieho emailu.
##### príklad tela API volania:
```json
{
  "email": "filip@example.com"
}
```
---
#### POST /login
Prihlási používateľa
##### príklad tela API volania:
```json
{
  "email": "filip@example.com",
  "password": "nbusr1234"
}
```
---