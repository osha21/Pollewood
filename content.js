/*
  ============================================================
  POLLEWOOD – PAGE CONTENT
  This is the only file you need to edit to change the text.
  ============================================================

  HOW TO EDIT
  - Each section has a title and text in four languages: en, da, de, fr.
  - Text goes between the `backticks`. Keep the backticks!
  - Leave an empty line to start a new paragraph.
  - Start a line with "- " to make a bullet point.
  - **two stars** around words makes them bold.
  - [Link text](https://example.com) makes a link (works for maps too).
  - Replace everything in [square brackets] with real information.

  IMAGES
  - Put photos in the "images" folder, then list them in a section:
      images: ["images/livingroom.jpg", "images/kitchen.jpg"],
  - Up to 4 photos per section look best. Use an empty list [] for none.
  - File names are case-sensitive: "Kitchen.JPG" is not "kitchen.jpg".

  ADD / REMOVE / REORDER SECTIONS
  - Copy a whole block from { to }, (including the comma) to add one.
  - Delete a block to remove it. Move blocks to change the order.
  - Each section needs a unique id (lowercase, no spaces).

  PRIVACY: this page is public. Do NOT put door codes, key-box codes
  or the full address here. Send those to guests via Airbnb instead.
*/

const SITE = {
  name: "Pollewood",

  languages: { en: "English", da: "Dansk", de: "Deutsch", fr: "Français" },
  defaultLanguage: "en",

  heroImage: "images/hero.jpg",

  tagline: {
    en: "Welcome! Everything you need for your stay.",
    da: "Velkommen! Alt du har brug for under dit ophold.",
    de: "Willkommen! Alles, was Sie für Ihren Aufenthalt brauchen.",
    fr: "Bienvenue ! Tout ce qu'il vous faut pour votre séjour.",
  },

  sections: [
    {
      id: "welcome",
      title: { en: "Welcome", da: "Velkommen", de: "Willkommen", fr: "Bienvenue" },
      images: [],
      text: {
        en: `We're happy to have you here. This page has everything you need to know about the apartment, the house rules and the area around it.

If you have any questions during your stay, send us a message through Airbnb.`,
        da: `Vi er glade for at have dig her. På denne side finder du alt, hvad du skal vide om lejligheden, husreglerne og området omkring den.

Hvis du har spørgsmål under dit ophold, så skriv til os via Airbnb.`,
        de: `Schön, dass Sie da sind. Auf dieser Seite finden Sie alles Wissenswerte über die Wohnung, die Hausregeln und die Umgebung.

Wenn Sie während Ihres Aufenthalts Fragen haben, schreiben Sie uns einfach über Airbnb.`,
        fr: `Nous sommes ravis de vous accueillir. Vous trouverez sur cette page tout ce qu'il faut savoir sur l'appartement, le règlement intérieur et les environs.

Pour toute question pendant votre séjour, envoyez-nous un message via Airbnb.`,
      },
    },

    {
      id: "apartment",
      title: { en: "The apartment", da: "Lejligheden", de: "Die Wohnung", fr: "L'appartement" },
      images: ["images/apartment-1.jpg", "images/apartment-2.jpg", "images/apartment-3.jpg"],
      text: {
        en: `**Wi-Fi:** [network name] – password: [password]

- **Kitchen:** [what's available – coffee machine, dishwasher, etc.]
- **Heating:** [how to adjust it]
- **TV:** [how to turn it on / which remote]
- **Washing machine:** [where it is and how to use it]
- **Bed linen and towels:** [where to find extras]`,
        da: `**Wi-Fi:** [netværksnavn] – adgangskode: [adgangskode]

- **Køkken:** [hvad der er – kaffemaskine, opvaskemaskine osv.]
- **Varme:** [hvordan den reguleres]
- **TV:** [hvordan det tændes / hvilken fjernbetjening]
- **Vaskemaskine:** [hvor den står, og hvordan den bruges]
- **Sengetøj og håndklæder:** [hvor der er ekstra]`,
        de: `**WLAN:** [Netzwerkname] – Passwort: [Passwort]

- **Küche:** [Ausstattung – Kaffeemaschine, Spülmaschine usw.]
- **Heizung:** [wie man sie einstellt]
- **Fernseher:** [wie man ihn einschaltet / welche Fernbedienung]
- **Waschmaschine:** [wo sie steht und wie man sie benutzt]
- **Bettwäsche und Handtücher:** [wo es zusätzliche gibt]`,
        fr: `**Wi-Fi :** [nom du réseau] – mot de passe : [mot de passe]

- **Cuisine :** [équipements – machine à café, lave-vaisselle, etc.]
- **Chauffage :** [comment le régler]
- **Télévision :** [comment l'allumer / quelle télécommande]
- **Lave-linge :** [où il se trouve et comment l'utiliser]
- **Draps et serviettes :** [où trouver des extras]`,
      },
    },

    {
      id: "checkin",
      title: { en: "Check-in & check-out", da: "Ankomst & afrejse", de: "Check-in & Check-out", fr: "Arrivée & départ" },
      images: [],
      text: {
        en: `**Check-in:** from [15:00]
**Check-out:** by [11:00]

Before you leave:
- Put used towels in the bathroom
- Run the dishwasher or wash up
- Take out the rubbish
- Close the windows and turn off the lights
- [Where to leave the keys]`,
        da: `**Ankomst:** fra kl. [15:00]
**Afrejse:** senest kl. [11:00]

Inden du tager af sted:
- Læg brugte håndklæder på badeværelset
- Sæt opvaskemaskinen i gang eller vask op
- Tag skraldet med ud
- Luk vinduerne og sluk lyset
- [Hvor nøglerne skal efterlades]`,
        de: `**Check-in:** ab [15:00] Uhr
**Check-out:** bis [11:00] Uhr

Bevor Sie abreisen:
- Benutzte Handtücher ins Badezimmer legen
- Spülmaschine einschalten oder abwaschen
- Müll hinausbringen
- Fenster schließen und Licht ausschalten
- [Wo die Schlüssel hinterlegt werden]`,
        fr: `**Arrivée :** à partir de [15h00]
**Départ :** avant [11h00]

Avant de partir :
- Laissez les serviettes utilisées dans la salle de bain
- Lancez le lave-vaisselle ou faites la vaisselle
- Sortez les poubelles
- Fermez les fenêtres et éteignez les lumières
- [Où laisser les clés]`,
      },
    },

    {
      id: "rules",
      title: { en: "House rules", da: "Husregler", de: "Hausregeln", fr: "Règlement intérieur" },
      images: [],
      text: {
        en: `- No smoking inside the apartment
- No parties or events
- Quiet hours from [22:00] to [07:00]
- [Pets allowed / not allowed]
- Please sort the rubbish: [how and where]
- Treat the apartment as if it were your own home`,
        da: `- Rygning er ikke tilladt i lejligheden
- Ingen fester eller arrangementer
- Ro fra kl. [22:00] til [07:00]
- [Kæledyr tilladt / ikke tilladt]
- Sortér venligst affaldet: [hvordan og hvor]
- Pas på lejligheden, som var det dit eget hjem`,
        de: `- Rauchen in der Wohnung ist nicht erlaubt
- Keine Partys oder Veranstaltungen
- Nachtruhe von [22:00] bis [07:00] Uhr
- [Haustiere erlaubt / nicht erlaubt]
- Bitte den Müll trennen: [wie und wo]
- Bitte behandeln Sie die Wohnung wie Ihr eigenes Zuhause`,
        fr: `- Il est interdit de fumer dans l'appartement
- Pas de fêtes ni d'événements
- Calme de [22h00] à [7h00]
- [Animaux acceptés / non acceptés]
- Merci de trier les déchets : [comment et où]
- Prenez soin de l'appartement comme s'il s'agissait du vôtre`,
      },
    },

    {
      id: "area",
      title: { en: "In the area", da: "I området", de: "In der Umgebung", fr: "Dans les environs" },
      images: ["images/area-1.jpg", "images/area-2.jpg"],
      text: {
        en: `**Groceries**
- [Supermarket name] – [walking distance] – [Open in maps](https://maps.google.com/?q=Supermarket+name)

**Food & coffee**
- [Restaurant or café] – [a short tip]
- [Restaurant or café] – [a short tip]

**Things to see and do**
- [Beach, park, museum…] – [a short description]
- [Another place] – [a short description]

**Getting around**
- [Nearest bus stop / train station and how to get to the city centre]`,
        da: `**Indkøb**
- [Supermarkedets navn] – [gåafstand] – [Åbn i kort](https://maps.google.com/?q=Supermarket+name)

**Mad & kaffe**
- [Restaurant eller café] – [et kort tip]
- [Restaurant eller café] – [et kort tip]

**Seværdigheder og oplevelser**
- [Strand, park, museum …] – [en kort beskrivelse]
- [Et andet sted] – [en kort beskrivelse]

**Transport**
- [Nærmeste busstoppested / togstation og hvordan man kommer ind til centrum]`,
        de: `**Einkaufen**
- [Name des Supermarkts] – [Gehzeit] – [In Karten öffnen](https://maps.google.com/?q=Supermarket+name)

**Essen & Kaffee**
- [Restaurant oder Café] – [ein kurzer Tipp]
- [Restaurant oder Café] – [ein kurzer Tipp]

**Sehenswertes und Aktivitäten**
- [Strand, Park, Museum …] – [eine kurze Beschreibung]
- [Ein anderer Ort] – [eine kurze Beschreibung]

**Unterwegs**
- [Nächste Bushaltestelle / nächster Bahnhof und wie man ins Zentrum kommt]`,
        fr: `**Courses**
- [Nom du supermarché] – [distance à pied] – [Ouvrir dans Maps](https://maps.google.com/?q=Supermarket+name)

**Restaurants & cafés**
- [Restaurant ou café] – [un petit conseil]
- [Restaurant ou café] – [un petit conseil]

**À voir et à faire**
- [Plage, parc, musée…] – [une courte description]
- [Un autre lieu] – [une courte description]

**Se déplacer**
- [Arrêt de bus / gare la plus proche et comment rejoindre le centre-ville]`,
      },
    },

    {
      id: "help",
      title: { en: "Help & emergencies", da: "Hjælp & nødsituationer", de: "Hilfe & Notfälle", fr: "Aide & urgences" },
      images: [],
      text: {
        en: `**Emergency (police, fire, ambulance):** [112](tel:112)
**Medical advice outside opening hours:** [phone number]
**Nearest pharmacy:** [name and address]

For anything about the apartment, message us on Airbnb.`,
        da: `**Nødopkald (politi, brand, ambulance):** [112](tel:112)
**Lægevagt:** [telefonnummer]
**Nærmeste apotek:** [navn og adresse]

Har du spørgsmål om lejligheden, så skriv til os på Airbnb.`,
        de: `**Notruf (Polizei, Feuerwehr, Rettungsdienst):** [112](tel:112)
**Ärztlicher Bereitschaftsdienst:** [Telefonnummer]
**Nächste Apotheke:** [Name und Adresse]

Bei Fragen zur Wohnung schreiben Sie uns über Airbnb.`,
        fr: `**Urgences (police, pompiers, ambulance) :** [112](tel:112)
**Médecin de garde :** [numéro de téléphone]
**Pharmacie la plus proche :** [nom et adresse]

Pour toute question sur l'appartement, écrivez-nous sur Airbnb.`,
      },
    },
  ],

  footer: {
    en: "Have a wonderful stay!",
    da: "Hav et dejligt ophold!",
    de: "Einen schönen Aufenthalt!",
    fr: "Excellent séjour !",
  },
};
