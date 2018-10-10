/**
 * This function coverts a DOM Tree into JavaScript Object.
 * @param srcDOM: DOM Tree to be converted.
 */
function xml2json(srcDOM) {
  let children = [...srcDOM.children];

  // base case for recursion.
  if (!children.length) {
    return srcDOM.innerHTML
  }

  // initializing object to be returned.
  let jsonResult = {};

  for (let child of children) {

    // checking is child has siblings of same name.
    let childIsArray = children.filter(eachChild => eachChild.nodeName === child.nodeName).length > 1;

    // if child is array, save the values as array, else as strings.
    if (childIsArray) {
      if (jsonResult[child.nodeName] === undefined) {
        jsonResult[child.nodeName] = [xml2json(child)];
      } else {
        jsonResult[child.nodeName].push(xml2json(child));
      }
    } else {
      jsonResult[child.nodeName] = xml2json(child);
    }
  }

  return jsonResult;
}

// testing the function
let xmlstr = `<?xml version="1.0"?>
<Events>
<Event xml:lang="en" id="2018/8420" href="http://www.nyartbeat.com/event/2018/8420">
<Name>Takashi Kunitani “Spaceless Space”</Name>
<Venue href="http://www.nyartbeat.com/venue/01AD9BAD">
<Name>ULTERIOR</Name>
<Type>Gallery</Type>
<Address>172 Attorney St., New York, NY 10002</Address>
<Phone>214-783-0759</Phone>
<Fax></Fax>
<Access>Between Stanton and E. Houston Sts. Subway: F/J/M/Z to Delancey/Essex Street.</Access>
<Area areaId="lower_east_side">Lower East Side</Area>
<OpeningHour>12:00:00</OpeningHour>
<ClosingHour>19:00:00</ClosingHour>
<DaysClosed mon="1" tue="1" wed="1" thu="0" fri="0" sat="0" sun="0" hol="0" />
<ScheduleDetails></ScheduleDetails>
<ScheduleNote></ScheduleNote>
</Venue>
<Media>3D: Installation</Media>
<Description><![CDATA[Ulterior Gallery presents its third year with Takashi Kunitani’s second solo exhibition with the gallery, Spaceless Space.

Kunitani’s ongoing series of installations are comprised of multiple neon tubes that the artist deforms with his own breath. Through this breathing process, Kunitani expands the internal volume of the glass tube, blurring the boundary between the inside and outside of the sculpture. In these installations, viewers see the chemical elements neon and argon captured within the multilateral, transparent surface of the sculpture. This ephemerality of the object itself, combined with the expansive visual nature of blown glass and radiant neon tubes, translates the space where Kunitani’s neon is enacted into an expanded volume without clear boundaries between object, space, and viewer.

For this exhibition at Ulterior, Kunitani will realize a full-room installation of red (neon) and blue (argon) tubes. The artist states: “The placement of these two different colors reflects my idea of a board game, as if we were in the game without knowing the rules or how each piece should be placed… We just need to judge where to be, how to see, from the given circumstances, as the ephemeral viewing experience is unique to the individual.” These neon works form an expansive apparatus designed to activate the tension between viewer and artwork. Decisions made by visitors as they move through the space individualize the viewing experience, making each moment unique.

In the years since he began working on it in 2001, Kunitani’s series of sculpture installations, Spaceless Space, has become his signature work. While room-sized installations of works from this series have been shown at museums in Kyoto, Hyogo, and Osaka, and in other galleries and non-profit spaces in Japan, the exhibition at Ulterior represents the first full-scale exhibition of these works that the artist has exhibited outside of Japan.

Takashi Kunitani was born in Kyoto, Japan in 1974 and graduated from Seian University of Art and Design in Shiga Prefecture, Japan in 1997, where he studied under Norio Imai, one of the prominent Gutai artists. Kunitani’s works have been the subject of numerous solo and group exhibitions, including: Something Red, Kyoto Art Center, Kyoto, Japan (solo, 2018); Takashi Kunitani: Deep Projection, Hyogo Prefectural Museum of Art, Hyogo, Japan (solo, 2015); Two Passages, Nuit Blanche Kyoto 2012, Kyoto Art Center, Kyoto, Japan (2012); Today’s Artist 48: Takashi Kunitani—The Vertical Horizon, Osaka Contemporary Art Center, Osaka, Japan (solo, 2007); Criterium 54: Takashi Kunitani, Art Tower Mito, Ibaraki, Japan (solo, 2003). He lives and works in Kyoto.]]></Description>
<Image src="http://www.nyartbeat.com/media/event/2018/8420-30" width="30" />
<Image src="http://www.nyartbeat.com/media/event/2018/8420-80" width="80" />
<Image src="http://www.nyartbeat.com/media/event/2018/8420-170" width="170" />
<Karma>1.47727</Karma>
<Price free="1">Free</Price>
<DateStart>2018-09-08</DateStart>
<DateEnd>2018-10-14</DateEnd>
<ScheduleNote></ScheduleNote>
<Party type="1" date="2018-09-08" start="18:00:00" end="20:00:00">Opening Reception</Party>
<DaysBeforeEnd>4</DaysBeforeEnd>
<PermanentEvent>0</PermanentEvent>
<Distance>314.2086149559</Distance>
<Datum>world</Datum>
<Latitude>40.720781</Latitude>
<Longitude>-73.983026</Longitude>
</Event>

<Event xml:lang="en" id="2018/F63A" href="http://www.nyartbeat.com/event/2018/F63A">
<Name>“Minimal Impact” Exhibition</Name>
<Venue href="http://www.nyartbeat.com/venue/2C1F50AF">
<Name>Lichtundfire</Name>
<Type>Gallery</Type>
<Address>175 Rivington St., New York, NY 10002</Address>
<Phone>212-387-8505</Phone>
<Fax></Fax>
<Access>Between: Clinton and Attorney Sts. Subway: F or J/M/Z to Delancey / Essex Street.</Access>
<Area areaId="lower_east_side">Lower East Side</Area>
<OpeningHour>12:00:00</OpeningHour>
<ClosingHour>18:00:00</ClosingHour>
<DaysClosed mon="1" tue="1" wed="0" thu="0" fri="0" sat="0" sun="0" hol="0" />
<ScheduleDetails>sundays openinghour 13:00</ScheduleDetails>
<ScheduleNote></ScheduleNote>
</Venue>
<Media>2D: Painting</Media>
<Media>2D: Drawing</Media>
<Description><![CDATA[Lichtundfire presents Minimal Impact, a carefully constructed and focused exhibition of mixed media paintings, drawings and works on paper, through the lens of three artists, Augustus Goertz, Alan Steele, and Christopher Stout, all of whom have shown their work in the past at Lichtundfire.

Taking the common meaning of the term to another level of connotation- the Minimal Impact here lies in the sparsity of the application, delicate expression or subtle reference, however resulting in a powerful conceptual language.

In many ways, closely linked, however differing in their practice and in the execution of their mediums, the individual artist’s work strongly stands alone yet ‘inter pares’- within equals- creating a visual dialogue between textures, lines and hues.

Augustus Goertz, a process painter, conceives sensible poetic abstractions. Referring to them as ‘controlled improvisations’ his surfaces - out of an amalgamate of ingredients- span from the sparse to the compact, with paint from the bolt colorful to the monochromatic sublime.

“Each series has an overriding conception. Within the confines of this trajectory, there’s a lot of room for improvisation and experimentation during the creative act. Trying to push the limits of what paint or other chemicals can do. Painting is, among other things, philosophy made manifest. One can say, the artist works in the area just ahead of the scientist, like a scout.”

Alan Steele’s carefully crafted drawings/works on paper evoke the concept of the Japanese Wabi-Sabi where concept and composition align to conceive the highest form of perfect imperfection/ imperfect perfection.

“The earliest initial idea was to create a map that would set before me an ordered totality so that ideas and concepts, which are finite and particular, may have a setting in an infinity. In this way local control, preplanning and decisions, can be manifested and articulated.

The map was to serve as a yardstick, that by its repeated use in measuring would generated a continuum of ideas. Thus the work would be free to move in a unlimited extension toward the infinite.”

Christopher Stout’s elegant, monochromatic multi-panel paintings, radiate and soundly resonate and yet seem to hover in an enigmatic space we cannot enter. As an abstract reductive artist his work concerns “a dance between the questions of “what is the construct of painting?” and “what is the construct of sculpture?””. His quest, as Stout phrases it, “is the additive outcome in merging the vocabularies of both disciplines.”

Augustus Goertz is a New York artist, who was born and raised in New York City. He holds a BFA from the San Francisco Art Institute in San Francisco, CA. This is his 11th appearance at Lichtundfire, where he previously also co-curated the exhibition SPORTSVERGNUEGEN with artist, curator, writer D. Dominick Lombardi.

Alan Steele was born in Caracas, Venezuela and holds a BFA from the School of Visual Arts (SVA), NYC, NY and an MFA from Rhode Island School of Design (RISD), Providence, RI. He previously took part in one exhibition at Lichtundfire.

Christopher Stout is new York based artist, born and raised in Maryland. Previously, Stout had 2 solo exhibition at Lichtundfire an this is his 8th appearance at the gallery.


]]></Description>
<Image src="http://www.nyartbeat.com/media/event/2018/F63A-30" width="30" />
<Image src="http://www.nyartbeat.com/media/event/2018/F63A-80" width="80" />
<Image src="http://www.nyartbeat.com/media/event/2018/F63A-170" width="170" />
<Karma>0</Karma>
<Price free="1">Free</Price>
<DateStart>2018-10-03</DateStart>
<DateEnd>2018-11-04</DateEnd>
<ScheduleNote></ScheduleNote>
<Party type="1" date="2018-10-03" start="17:30:00" end="20:30:00">Opening Reception</Party>
<DaysBeforeEnd>25</DaysBeforeEnd>
<PermanentEvent>0</PermanentEvent>
<Distance>398.46868553211</Distance>
<Datum>world</Datum>
<Latitude>40.71879</Latitude>
<Longitude>-73.984707</Longitude>
</Event>

<Event xml:lang="en" id="2018/44F6" href="http://www.nyartbeat.com/event/2018/44F6">
<Name>Pedro Wirz “breastfed tadpole”</Name>
<Venue href="http://www.nyartbeat.com/venue/58B68230">
<Name>Kai Matsumiya</Name>
<Type>Gallery</Type>
<Address>153 ½ Stanton St., New York, NY 10002</Address>
<Phone>646-455-3588</Phone>
<Fax></Fax>
<Access>Between Suffolk and Clinton St. Subway: F to 2nd Avenue or J/M/Z to Essex Street. </Access>
<Area areaId="lower_east_side">Lower East Side</Area>
<OpeningHour>12:00:00</OpeningHour>
<ClosingHour>18:00:00</ClosingHour>
<DaysClosed mon="1" tue="1" wed="0" thu="0" fri="0" sat="0" sun="0" hol="0" />
<ScheduleDetails></ScheduleDetails>
<ScheduleNote></ScheduleNote>
</Venue>
<Media>3D: Installation</Media>
<Description><![CDATA[“In the nights of annihilation of the last war, the frame of mankind was shaken by a feeling that resembled the bliss of the epileptic. And the revolts that followed it were the first attempt of mankind to bring the new body under its control. The power of the proletariat is the measure of its convalescence. If it is not gripped to the very marrow by the discipline of this power, no pacifist polemics will save it. Living substance conquers the frenzy of destruction only in the ecstasy of procreation”. – Walter Benjamin, excerpt in “to the Planetarium” from “One-Way Street”.

“Art does not reproduce the visible, rather, it makes the visible” – Max Ernst, excerpt from “The Creative Credo”.

Pedro Wirz continues his second solo exhibition, titled “breastfed tadpole”, at Kai Matsumiya. Consider the world enveloped with office carpet where it serves as the chief nutritive source like soil. In such a world, nature, culture, and technology integrate not as separate entities but as a cohesive ecosystem.  Office carpet serves as the soil for twigs. Frog like critters with mammalian components reveal themselves as neither living or dead. Letters represent nothing else but the end of language. Inorganic materials are expected to birth something unwitnessed. Technology itself finally bleeds alongside nature as if both are intertwined as one. Animalistic and insect-like architectures resembling nests, cocoons, and eggs fuse with human cultural practices. Raw new cosmic life abounds.

Substances from the tropical forests, Swiss parks, junk yards, soil, latex manufacturing, and discarded toys and ornaments comprise the materials of Wirz’s art works. A large degree of the artist’s research for his practice is also informed by his upbringing in the Paraiba Valley, Brazil. The region’s layered, primordial, modern and contemporary landscape has been the site of massive demographic shifts as European royalty, slaves, indigenous people, merchantmen, industrialists, and failed techies collide within its varied multifarious histories. As a result, the region has produced art, architecture, and culture that appear as if all had been undergoing the process of beginning, mixing, and resetting.  Part of Wirz’s impetus, then, originates from the adopted spirit and perspective of a child reconfiguring, completing,  nd beginning anew lost objects, dying landscapes, and incomplete mythologies of post-apocalyptic and dystopian environs.

Recent solo and two person exhibitions include Jan Kiefer, Pedro Wirz, 2018 (Galerie Nagel Draxler, Cologne); Fábula, Frisson, Melancolia (Instituto Tomie Ohtake, São Paulo, 2017); Dobrar de Espinho, Anzol (Murias Centeno Gallery, Porto, 2017); and The Horse Who Drank Beer (Kai Matsumiya Gallery, New York, 2016). His work has also been presented at the Tinguely Museum (2016), CCS Bard Hessel Museum of Art (2015), Künstlerhaus Stuttgart (2013), Dortmunder Kunstverein (2013), Palais de Tokyo (2013), and Kunsthalle Basel (2011). In 2016, he was the artist in residence at the Swiss Institute Rome, and he has recently completed a residency at the Akademie der Künste in Berlin.

Wirz has been awarded the ProHelvetia Cahier d’Artistes Prize 2018 and will have his first monographic book presented in Basel next June, during Art Basel.

His work is currently on view at the Kunst Raum Riehen in Basel, and Kunsthaus Pasquart, both in Switzerland. Other upcoming projects include solo exhibitions in January at LongTang, Zürich, February at Centre Culturel Suisse in Paris, May at Kunsthaus Langenthal and his debut solo show at Galerie Nagel Draxler.

Born in 1981 in Pindamonhangaba, Brazil, Wirz currently lives and works in Zürich, Switzerland.]]></Description>
<Image src="http://www.nyartbeat.com/media/event/2018/44F6-30" width="30" />
<Image src="http://www.nyartbeat.com/media/event/2018/44F6-80" width="80" />
<Image src="http://www.nyartbeat.com/media/event/2018/44F6-170" width="170" />
<Karma>0</Karma>
<Price free="1">Free</Price>
<DateStart>2018-09-16</DateStart>
<DateEnd>2018-10-26</DateEnd>
<ScheduleNote></ScheduleNote>
<Party type="1" date="2018-09-16" start="16:00:00" end="20:00:00">Opening Reception</Party>
<DaysBeforeEnd>16</DaysBeforeEnd>
<PermanentEvent>0</PermanentEvent>
<Distance>447.49984909415</Distance>
<Datum>world</Datum>
<Latitude>40.720222</Latitude>
<Longitude>-73.985111</Longitude>
</Event>

<Event xml:lang="en" id="2018/D5C6" href="http://www.nyartbeat.com/event/2018/D5C6">
<Name>Sara Greenberger Rafferty “Testing”</Name>
<Venue href="http://www.nyartbeat.com/venue/CF2617B7">
<Name>Rachel Uffner Gallery</Name>
<Type>Gallery</Type>
<Address>170 Suffolk St., New York, NY 10002 </Address>
<Phone>212-274-0064</Phone>
<Fax></Fax>
<Access>Between Houston and Stanton Sts.  Subway: F to Delancey.</Access>
<Area areaId="lower_east_side">Lower East Side</Area>
<OpeningHour>11:00:00</OpeningHour>
<ClosingHour>18:00:00</ClosingHour>
<DaysClosed mon="1" tue="1" wed="0" thu="0" fri="0" sat="0" sun="0" hol="0" />
<ScheduleDetails></ScheduleDetails>
<ScheduleNote></ScheduleNote>
</Venue>
<Media>3D: Installation</Media>
<Description><![CDATA[Rachel Uffner Gallery presents an exhibition of new works by Sara Greenberger Rafferty. For her fifth solo show with the gallery, Rafferty has created a suite of works in kiln-formed glass - a new process and medium for the artist. Using a limited palette, Rafferty’s glass works function as image, screen, and material. They are transparent and translucent images formed and deformed by the kiln’s metamorphic heat and the intrinsic properties of glass.
]]></Description>
<Image src="http://www.nyartbeat.com/media/event/2018/D5C6-30" width="30" />
<Image src="http://www.nyartbeat.com/media/event/2018/D5C6-80" width="80" />
<Image src="http://www.nyartbeat.com/media/event/2018/D5C6-170" width="170" />
<Karma>1.42857</Karma>
<Price free="1">Free</Price>
<DateStart>2018-09-12</DateStart>
<DateEnd>2018-10-28</DateEnd>
<ScheduleNote></ScheduleNote>
<Party type="1" date="2018-09-12" start="18:00:00" end="20:00:00">Opening Reception</Party>
<DaysBeforeEnd>18</DaysBeforeEnd>
<PermanentEvent>0</PermanentEvent>
<Distance>452.33352537097</Distance>
<Datum>world</Datum>
<Latitude>40.720852</Latitude>
<Longitude>-73.984863</Longitude>
</Event>

<Event xml:lang="en" id="2018/DC00" href="http://www.nyartbeat.com/event/2018/DC00">
<Name>“Ten Years” Exhibition</Name>
<Venue href="http://www.nyartbeat.com/venue/CF2617B7">
<Name>Rachel Uffner Gallery</Name>
<Type>Gallery</Type>
<Address>170 Suffolk St., New York, NY 10002 </Address>
<Phone>212-274-0064</Phone>
<Fax></Fax>
<Access>Between Houston and Stanton Sts.  Subway: F to Delancey.</Access>
<Area areaId="lower_east_side">Lower East Side</Area>
<OpeningHour>11:00:00</OpeningHour>
<ClosingHour>18:00:00</ClosingHour>
<DaysClosed mon="1" tue="1" wed="0" thu="0" fri="0" sat="0" sun="0" hol="0" />
<ScheduleDetails></ScheduleDetails>
<ScheduleNote></ScheduleNote>
</Venue>
<Media>2D: Painting</Media>
<Media>2D: Drawing</Media>
<Media>3D: Installation</Media>
<Description><![CDATA[Rachel Uffner Gallery presents Ten Years, a special exhibition commemorating the gallery’s tenth anniversary. For this exhibition, which also marks the gallery’s 80th show, each of the sixteen represented artists have generously agreed to showcase a new or never-before-seen piece. Ten Years features works reflective of each artist’s aesthetic and process while also displaying the breadth of the gallery’s program.]]></Description>
<Image src="http://www.nyartbeat.com/media/event/2018/DC00-30" width="30" />
<Image src="http://www.nyartbeat.com/media/event/2018/DC00-80" width="80" />
<Image src="http://www.nyartbeat.com/media/event/2018/DC00-170" width="170" />
<Karma>0</Karma>
<Price free="1">Free</Price>
<DateStart>2018-09-12</DateStart>
<DateEnd>2018-10-28</DateEnd>
<ScheduleNote></ScheduleNote>
<Party type="1" date="2018-09-12" start="18:00:00" end="20:00:00">Opening Reception</Party>
<DaysBeforeEnd>18</DaysBeforeEnd>
<PermanentEvent>0</PermanentEvent>
<Distance>452.33352537097</Distance>
<Datum>world</Datum>
<Latitude>40.720852</Latitude>
<Longitude>-73.984863</Longitude>
</Event>

<Event xml:lang="en" id="2018/A2A2" href="http://www.nyartbeat.com/event/2018/A2A2">
<Name>Shane Darwent “Flat End Dome”</Name>
<Venue href="http://www.nyartbeat.com/venue/FF3B9854">
<Name>Spencer Brownstone Gallery</Name>
<Type>Gallery</Type>
<Address>170-B Suffolk St., New York, NY 10002 </Address>
<Phone>212-334-3455</Phone>
<Fax>212-274-1157</Fax>
<Access>Between Stanton and E.Houston St. Subway: F to 2nd Avenue. </Access>
<Area areaId="lower_east_side">Lower East Side</Area>
<OpeningHour>11:00:00</OpeningHour>
<ClosingHour>18:00:00</ClosingHour>
<DaysClosed mon="1" tue="1" wed="0" thu="0" fri="0" sat="0" sun="0" hol="0" />
<ScheduleDetails></ScheduleDetails>
<ScheduleNote></ScheduleNote>
</Venue>
<Media>2D: Painting</Media>
<Media>2D: Photography</Media>
<Media>3D: Sculpture</Media>
<Description><![CDATA[Spencer Brownstone Gallery presents Flat End Dome, our first exhibition with artist Shane Darwent. Utilizing a wide range of materials and mediums Darwent unpacks the visual vernacular of American architecture and reassembles them into monuments of urban living.

Darwent’s interests lie somewhere in between the city and the suburbs. Vinyl siding, fences with broken links, and gravel forms, familiar in any region, are featured in his work. His dismantling and collaging of veneers and faux-material exposes their mimicry and converts them into monuments to these memories.

The three large-scale sculptures, Basalt, Ballast, and Bus Stop are composed of multiple store front awnings. These illuminated monoliths are instantly recognizable and yet easily overlooked by those traversing the city. The vivid colors and drum-tight vinyl that seem to herald prosperity often fade and loosen overtime. In Darwent’s work, these events offer opportunity to patch and transform, becoming painterly swatches of colors and shapes.

Shane Darwent is a studio artist whose interdisciplinary practice fuses architecture, sculpture, painting and photography to explore the poetic potential of the ex urban built vernacular. Exhibiting internationally, Darwent has been an artist-in-residence at Ragdale, the Ucross Foundation and the Jentel Artist Residency Program, as well as a Core Fellow at Penland School of Crafts. Recently named an Outstanding Student in Contemporary Sculpture by International Sculpture Center, Shane has received numerous grants including an Individual Artist Fellowship from the Tennessee Arts Commission. He holds his MFA from the University of Michigan and a BFA from the Maryland Institute College of Art. Recent exhibition venues include the Art Gallery of Windsor, Wasserman Projects in Detroit, Belger Arts Center in Kansas City, the Spring Break Art Show in New York City, and Oklahoma Contemporary in Oklahoma City. Darwent is currently an artist-in-residence at the Tulsa Artist Fellowship in Tulsa, Oklahoma.]]></Description>
<Image src="http://www.nyartbeat.com/media/event/2018/A2A2-30" width="30" />
<Image src="http://www.nyartbeat.com/media/event/2018/A2A2-80" width="80" />
<Image src="http://www.nyartbeat.com/media/event/2018/A2A2-170" width="170" />
<Karma>0</Karma>
<Price free="1">Free</Price>
<DateStart>2018-09-12</DateStart>
<DateEnd>2018-10-28</DateEnd>
<ScheduleNote></ScheduleNote>
<Party type="1" date="2018-09-12" start="18:00:00" end="20:00:00">Opening Reception</Party>
<DaysBeforeEnd>18</DaysBeforeEnd>
<PermanentEvent>0</PermanentEvent>
<Distance>460.44208121498</Distance>
<Datum>world</Datum>
<Latitude>40.720852</Latitude>
<Longitude>-73.984969</Longitude>
</Event>

</Events>
`;

// converting to DOM Tree
const parser = new DOMParser();
const srcDOM = parser.parseFromString(xmlstr, "application/xml");

// Converting DOM Tree To JSON.
console.log(xml2json(srcDOM));
this.setState({compactJson: xml2json(srcDOM) })
