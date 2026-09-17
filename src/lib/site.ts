/**
 * Lädt die redaktionellen Inhalte aus src/content/site.yaml und
 * src/content/werdegang.yaml. Beide Dateien sind ohne Programmierkenntnisse
 * editierbar; die Typen hier beschreiben, welche Felder erwartet werden.
 */
import { load as parseYaml } from "js-yaml";
import siteRaw from "../content/site.yaml?raw";
import werdegangRaw from "../content/werdegang.yaml?raw";

export interface Link {
  label: string;
  href: string;
}

export interface TitledText {
  title: string;
  text: string;
}

export interface SiteContent {
  /** Name, wie er im Logo/Footer erscheint */
  name: string;
  /** Titel/Qualifikationen als Kurzzeile, z. B. «lic. iur. · CAS Spiritual Care» */
  credentials: string;
  /** Kurzer Untertitel der Praxis, z. B. «Spirituelle Beratung & Begleitung» */
  tagline: string;
  /** Meta-Description für Suchmaschinen (max. ~155 Zeichen) */
  description: string;
  location: string;
  contact: {
    email: string;
    phone: string;
    /** Adresszeilen; leer lassen, falls noch nicht bekannt */
    address: string[];
    /** Endpoint eines Formulardienstes (z. B. Formspree). Leer = Formular ausgeblendet */
    formEndpoint: string;
  };
  nav: Link[];
  hero: {
    /** Wörter, die in der Animation wechseln */
    words: string[];
    /** Statischer Satzanfang vor dem animierten Wort, z. B. «Raum für» */
    prefix: string;
    lead: string;
    primaryCta: Link;
    secondaryCta: Link;
  };
  values: TitledText[];
  home: {
    pillarsTitle: string;
    pillars: (TitledText & { href: string })[];
    approach: { title: string; intro: string; points: TitledText[] };
    aboutTeaser: { title: string; text: string; cta: Link };
    contactCta: { title: string; text: string; cta: Link };
  };
  angebot: {
    title: string;
    intro: string;
    formatsTitle: string;
    formats: TitledText[];
    audiencesTitle: string;
    audiences: TitledText[];
    topicsTitle: string;
    topics: string[];
    processTitle: string;
    process: TitledText[];
    costs: TitledText;
  };
  ueberMich: {
    title: string;
    lead: string;
    paragraphs: string[];
    haltung: { title: string; points: TitledText[] };
    languages: string[];
  };
  kontakt: {
    title: string;
    intro: string;
    confidentiality: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      success: string;
    };
  };
  footer: {
    note: string;
  };
}

export interface Station {
  from: string;
  to: string;
  role: string;
  org: string;
  place?: string;
  note?: string;
}

export interface Education {
  year: string;
  title: string;
  org: string;
}

export interface Werdegang {
  stationsTitle: string;
  stations: Station[];
  educationTitle: string;
  education: Education[];
}

export const site = parseYaml(siteRaw) as SiteContent;
export const werdegang = parseYaml(werdegangRaw) as Werdegang;
