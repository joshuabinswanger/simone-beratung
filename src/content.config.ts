import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

/** Ein Angebot pro Markdown-Datei in src/content/angebote/ */
const angebote = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/angebote" }),
  schema: z.object({
    title: z.string(),
    /** Reihenfolge auf der Seite (aufsteigend) */
    order: z.number(),
    /** Ein Satz für Karten und Teaser */
    summary: z.string(),
    /** Kurze Stichworte, die als Liste erscheinen */
    highlights: z.array(z.string()).default([]),
  }),
});

/** Impressum, Datenschutz etc. in src/content/rechtliches/ */
const rechtliches = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/rechtliches" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.string(),
  }),
});

export const collections = { angebote, rechtliches };
