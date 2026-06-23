const header = document.querySelector("[data-header]");
const contactForm = document.querySelector(".contact-form");
const languageButtons = document.querySelectorAll("[data-lang]");

const translations = {
  en: {
    pageTitle: "Grete Pedersen | Conductor",
    metaDescription:
      "Grete Pedersen is a Norwegian conductor, educator, and defining artistic voice in Nordic choral music.",
    navLabel: "Primary navigation",
    professionalEnquiries: "Professional enquiries",
    artisticIdentity: "Artistic identity",
    repertoireAreas: "Repertoire areas",
    streamingPlaceholders: "Streaming placeholders",
    contactForm: "Contact form",
    heroAlt: "A quiet Nordic concert hall atmosphere with conductor and choir silhouettes",
    "nav.about": "About",
    "nav.vision": "Vision",
    "nav.biography": "Biography",
    "nav.recordings": "Recordings",
    "nav.contact": "Contact",
    "hero.kicker": "Norwegian conductor · educator · artistic leader",
    "hero.quote": "Listening is the beginning of music.",
    "hero.primary": "Artistic Vision",
    "hero.secondary": "Invite Grete",
    "section.about": "About",
    "about.title": "A defining artistic voice in Nordic choral music.",
    "about.p1":
      "Grete Pedersen is one of Norway's most respected conductors, admired internationally for work that combines exacting musical precision with emotional depth.",
    "about.p2":
      "Her career spans professional choirs, orchestras, contemporary music projects, recordings, education, and guest conducting across Europe.",
    "marquee.listening": "Listening",
    "marquee.space": "Space",
    "marquee.voice": "Human Voice",
    "marquee.nordic": "Nordic Identity",
    "marquee.community": "Community",
    "marquee.precision": "Precision",
    "section.vision": "Artistic Vision",
    "vision.title": "The choir as a place where people learn to listen together.",
    "vision.p1":
      "Pedersen's artistic practice places the human voice at the center of musical and social imagination. Her work explores how sound, silence, and shared breath can create community without reducing complexity.",
    "vision.p2":
      "Rooted in Nordic traditions and contemporary expression, her programming makes space for sacred repertoire, commissioned works, experimental vocal language, and the continuing evolution of choral culture.",
    "concepts.title": "Core Concepts",
    "concepts.one": "Listening as leadership",
    "concepts.two": "Sound shaped by space",
    "concepts.three": "Contemporary courage",
    "concepts.four": "Nordic clarity and warmth",
    "concepts.five": "Community through singing",
    "section.positions": "Major Positions",
    "positions.title": "Institutions shaped by long artistic attention.",
    "positions.soloists.title": "Norwegian Soloists' Choir",
    "positions.soloists.body":
      "Longtime artistic director and chief conductor of one of Europe's most acclaimed professional chamber choirs, known for Nordic repertoire, contemporary music, innovative programming, touring, and award-winning recordings.",
    "positions.education.eyebrow": "Education",
    "positions.education.title": "Norwegian Academy of Music",
    "positions.education.body":
      "Professor, conducting teacher, and mentor to generations of young conductors, with masterclass work focused on sound, interpretation, leadership, and professional choir development.",
    "positions.international.eyebrow": "International",
    "positions.international.title": "Guest Conducting",
    "positions.international.body":
      "Collaborations include the Swedish Radio Choir, BBC Singers, Netherlands Chamber Choir, RIAS Kammerchor, Danish National Vocal Ensemble, professional choirs, orchestras, and festivals.",
    "section.biography": "Biography",
    "bio.title": "A career built through education, ensemble craft, and international exchange.",
    "bio.intro":
      "The full biography can expand into a press-ready version, a long-form narrative, and a downloadable professional biography.",
    "bio.education.title": "Education",
    "bio.education.body": "Conducting studies and advanced artistic training at the Norwegian Academy of Music.",
    "bio.ensemble.title": "Ensemble Leadership",
    "bio.ensemble.body":
      "Transformative artistic leadership with the Norwegian Soloists' Choir over three and a half decades.",
    "bio.touring.title": "International Touring",
    "bio.touring.body": "Performances, festivals, and guest conducting work with leading European professional ensembles.",
    "bio.recordings.title": "Recordings & Awards",
    "bio.recordings.body":
      "Critically acclaimed releases, international recording recognition, and distinguished cultural contributions.",
    "section.repertoire": "Repertoire",
    "repertoire.title": "Music shaped by tradition, experiment, and the courage to commission.",
    "repertoire.tag1": "Nordic Choral Music",
    "repertoire.tag2": "Contemporary Music",
    "repertoire.tag3": "Sacred Music",
    "repertoire.tag4": "A Cappella",
    "repertoire.tag5": "Symphonic Choral Repertoire",
    "repertoire.tag6": "Commissioned Works",
    "repertoire.tag7": "Experimental Vocal Music",
    "repertoire.tag8": "Scandinavian Composers",
    "section.discography": "Discography",
    "recordings.title": "Recordings as living archives of sound, place, and artistic risk.",
    "recordings.body":
      "Extensive recording work with the Norwegian Soloists' Choir includes internationally released, critically acclaimed, and award-winning projects.",
    "recordings.selected.title": "Selected Recordings",
    "recordings.selected.body": "Streaming embeds for Spotify, Apple Music, YouTube, or label pages.",
    "recordings.press.title": "Press Reviews",
    "recordings.press.body": "Critical excerpts, awards, and recording notes.",
    "section.media": "Media",
    "media.title": "A professional press area for interviews, videos, reviews, and downloads.",
    "media.videos.title": "Videos",
    "media.videos.body": "Concert excerpts, interviews, rehearsal footage, and festival appearances.",
    "media.press.title": "Press Kit",
    "media.press.body": "Short bio, long bio, portrait files, repertoire notes, and approved credits.",
    "media.gallery.title": "Gallery",
    "media.gallery.body": "Portraits, conducting, concerts, rehearsals, masterclasses, and recording sessions.",
    "section.masterclasses": "Masterclasses",
    "masterclasses.title": "For conductors, ensembles, festivals, and institutions.",
    "masterclasses.body":
      "Topics include choral sound, artistic interpretation, programming, Nordic repertoire, leadership, contemporary music, professional choir development, and young conductor mentorship.",
    "section.contact": "Contact",
    "contact.title": "Professional enquiries",
    "contact.body":
      "Guest conducting, festivals, masterclasses, media requests, representation, and institutional collaborations.",
    "form.name": "Name",
    "form.email": "Email",
    "form.type": "Enquiry Type",
    "form.guest": "Guest Conducting",
    "form.festival": "Festival",
    "form.masterclass": "Masterclass",
    "form.media": "Media",
    "form.representation": "Representation",
    "form.message": "Message",
    "form.submit": "Send Enquiry",
    "form.noted": "Enquiry Noted",
    "footer.roles": "Conductor · Artistic Director · Educator · Nordic Choral Music",
  },
  no: {
    pageTitle: "Grete Pedersen | Dirigent",
    metaDescription:
      "Grete Pedersen er en norsk dirigent, pedagog og en sentral kunstnerisk stemme i nordisk kormusikk.",
    navLabel: "Hovednavigasjon",
    professionalEnquiries: "Profesjonelle henvendelser",
    artisticIdentity: "Kunstnerisk identitet",
    repertoireAreas: "Repertoarområder",
    streamingPlaceholders: "Plassholdere for strømming",
    contactForm: "Kontaktskjema",
    heroAlt: "En stille nordisk konsertsalatmosfære med dirigent- og korsilhuetter",
    "nav.about": "Om",
    "nav.vision": "Visjon",
    "nav.biography": "Biografi",
    "nav.recordings": "Innspillinger",
    "nav.contact": "Kontakt",
    "hero.kicker": "Norsk dirigent · pedagog · kunstnerisk leder",
    "hero.quote": "Å lytte er begynnelsen på musikken.",
    "hero.primary": "Kunstnerisk visjon",
    "hero.secondary": "Inviter Grete",
    "section.about": "Om",
    "about.title": "En definerende kunstnerisk stemme i nordisk kormusikk.",
    "about.p1":
      "Grete Pedersen er en av Norges mest respekterte dirigenter, internasjonalt beundret for et arbeid som forener presis musikalsk form med emosjonell dybde.",
    "about.p2":
      "Karrieren hennes omfatter profesjonelle kor, orkestre, samtidsmusikalske prosjekter, innspillinger, undervisning og gjestedirigering i Europa.",
    "marquee.listening": "Lytting",
    "marquee.space": "Rom",
    "marquee.voice": "Menneskestemmen",
    "marquee.nordic": "Nordisk identitet",
    "marquee.community": "Fellesskap",
    "marquee.precision": "Presisjon",
    "section.vision": "Kunstnerisk visjon",
    "vision.title": "Koret som et sted der mennesker lærer å lytte sammen.",
    "vision.p1":
      "Pedersens kunstneriske praksis plasserer menneskestemmen i sentrum for musikalsk og sosial forestillingsevne. Arbeidet hennes undersøker hvordan klang, stillhet og felles pust kan skape fellesskap uten å forenkle kompleksitet.",
    "vision.p2":
      "Forankret i nordiske tradisjoner og samtidsuttrykk gir programmeringen hennes rom for sakralt repertoar, bestillingsverk, eksperimentelt vokalspråk og kormusikkens videre utvikling.",
    "concepts.title": "Kjernebegreper",
    "concepts.one": "Lytting som lederskap",
    "concepts.two": "Klang formet av rom",
    "concepts.three": "Samtidskunstnerisk mot",
    "concepts.four": "Nordisk klarhet og varme",
    "concepts.five": "Fellesskap gjennom sang",
    "section.positions": "Sentrale posisjoner",
    "positions.title": "Institusjoner formet av lang kunstnerisk oppmerksomhet.",
    "positions.soloists.title": "Det Norske Solistkor",
    "positions.soloists.body":
      "Mangeårig kunstnerisk leder og sjefdirigent for et av Europas mest anerkjente profesjonelle kammerkor, kjent for nordisk repertoar, samtidsmusikk, nyskapende programmering, turneer og prisbelønte innspillinger.",
    "positions.education.eyebrow": "Utdanning",
    "positions.education.title": "Norges musikkhøgskole",
    "positions.education.body":
      "Professor, dirigentpedagog og mentor for generasjoner av unge dirigenter, med mesterklasser innen klang, fortolkning, lederskap og utvikling av profesjonelle kor.",
    "positions.international.eyebrow": "Internasjonalt",
    "positions.international.title": "Gjestedirigering",
    "positions.international.body":
      "Samarbeid inkluderer Radiokören, BBC Singers, Nederlands Kamerkoor, RIAS Kammerchor, DR Vokalensemblet, profesjonelle kor, orkestre og festivaler.",
    "section.biography": "Biografi",
    "bio.title": "En karriere bygget gjennom utdanning, ensemblearbeid og internasjonal utveksling.",
    "bio.intro":
      "Den fulle biografien kan utvides til en presseversjon, en lengre fortelling og en nedlastbar profesjonell biografi.",
    "bio.education.title": "Utdanning",
    "bio.education.body": "Dirigentstudier og avansert kunstnerisk fordypning ved Norges musikkhøgskole.",
    "bio.ensemble.title": "Ensembleledelse",
    "bio.ensemble.body": "Transformativ kunstnerisk ledelse av Det Norske Solistkor gjennom tre og et halvt tiår.",
    "bio.touring.title": "Internasjonal turnévirksomhet",
    "bio.touring.body": "Konserter, festivaler og gjestedirigering med ledende profesjonelle ensembler i Europa.",
    "bio.recordings.title": "Innspillinger og priser",
    "bio.recordings.body":
      "Kritikerroste utgivelser, internasjonal anerkjennelse for innspillinger og markante bidrag til kulturlivet.",
    "section.repertoire": "Repertoar",
    "repertoire.title": "Musikk formet av tradisjon, eksperiment og motet til å bestille nytt.",
    "repertoire.tag1": "Nordisk kormusikk",
    "repertoire.tag2": "Samtidsmusikk",
    "repertoire.tag3": "Sakral musikk",
    "repertoire.tag4": "A cappella",
    "repertoire.tag5": "Symfonisk korrepertoar",
    "repertoire.tag6": "Bestillingsverk",
    "repertoire.tag7": "Eksperimentell vokalmusikk",
    "repertoire.tag8": "Skandinaviske komponister",
    "section.discography": "Diskografi",
    "recordings.title": "Innspillinger som levende arkiver for klang, sted og kunstnerisk risiko.",
    "recordings.body":
      "Omfattende innspillingsarbeid med Det Norske Solistkor inkluderer internasjonale utgivelser, kritikerroste prosjekter og prisbelønte produksjoner.",
    "recordings.selected.title": "Utvalgte innspillinger",
    "recordings.selected.body": "Strømmeinnbygging for Spotify, Apple Music, YouTube eller plateselskapsider.",
    "recordings.press.title": "Presseomtaler",
    "recordings.press.body": "Kritikerutdrag, priser og innspillingsnotater.",
    "section.media": "Media",
    "media.title": "Et profesjonelt presseområde for intervjuer, videoer, anmeldelser og nedlastinger.",
    "media.videos.title": "Videoer",
    "media.videos.body": "Konsertutdrag, intervjuer, øvingsopptak og festivalopptredener.",
    "media.press.title": "Pressepakke",
    "media.press.body": "Kort biografi, lang biografi, portrettfiler, repertoarnotater og godkjente krediteringer.",
    "media.gallery.title": "Galleri",
    "media.gallery.body": "Portretter, dirigering, konserter, prøver, mesterklasser og innspillingssesjoner.",
    "section.masterclasses": "Mesterklasser",
    "masterclasses.title": "For dirigenter, ensembler, festivaler og institusjoner.",
    "masterclasses.body":
      "Temaer inkluderer korklang, kunstnerisk fortolkning, programmering, nordisk repertoar, lederskap, samtidsmusikk, profesjonell korutvikling og veiledning av unge dirigenter.",
    "section.contact": "Kontakt",
    "contact.title": "Profesjonelle henvendelser",
    "contact.body":
      "Gjestedirigering, festivaler, mesterklasser, mediehenvendelser, representasjon og institusjonelle samarbeid.",
    "form.name": "Navn",
    "form.email": "E-post",
    "form.type": "Type henvendelse",
    "form.guest": "Gjestedirigering",
    "form.festival": "Festival",
    "form.masterclass": "Mesterklasse",
    "form.media": "Media",
    "form.representation": "Representasjon",
    "form.message": "Melding",
    "form.submit": "Send henvendelse",
    "form.noted": "Henvendelse registrert",
    "footer.roles": "Dirigent · Kunstnerisk leder · Pedagog · Nordisk kormusikk",
  },
};

let activeLanguage = localStorage.getItem("language") || "en";

const translate = (language) => {
  const dictionary = translations[language] || translations.en;
  activeLanguage = language;
  document.documentElement.lang = language === "no" ? "no" : "en";
  document.title = dictionary.pageTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":");
      if (attribute && dictionary[key]) {
        element.setAttribute(attribute, dictionary[key]);
      }
    });
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("language", language);
};

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => translate(button.dataset.lang));
});

syncHeader();
translate(activeLanguage);
window.addEventListener("scroll", syncHeader, { passive: true });

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = contactForm.querySelector("button");
  button.textContent = translations[activeLanguage]["form.noted"];
  window.setTimeout(() => {
    button.textContent = translations[activeLanguage]["form.submit"];
  }, 2200);
});
