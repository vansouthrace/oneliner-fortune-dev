import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "Your code will work on the first try today, but only the code you haven't written yet.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
