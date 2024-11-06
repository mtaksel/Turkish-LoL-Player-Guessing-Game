export interface Player {
  name: string;
  team: string;
  role: string;
  age: number;
  country: string;
  countryCode: string;
}

export const players: Player[] = [
  { name: "Closer", team: "GAM Esports", role: "Jungler", age: 24, country: "Turkey", countryCode: "tr" },
  { name: "Armut", team: "Team BDS", role: "Top", age: 24, country: "Turkey", countryCode: "tr" },
  { name: "Nisqy", team: "Team Heretics", role: "Mid", age: 25, country: "Belgium", countryCode: "be" },
  { name: "BrokenBlade", team: "G2 Esports", role: "Top", age: 23, country: "Germany", countryCode: "de" },
  { name: "Kaori", team: "Team BDS", role: "ADC", age: 22, country: "Turkey", countryCode: "tr" },
  { name: "Caps", team: "G2 Esports", role: "Mid", age: 24, country: "Denmark", countryCode: "dk" },
  { name: "Zanzarah", team: "Team BDS", role: "Jungler", age: 26, country: "Russia", countryCode: "ru" },
  { name: "Ragner", team: "FENERBAHÇE", role: "Top", age: 22, country: "Turkey", countryCode: "tr" },
  { name: "HolyPhoenix", team: "SuperMassive", role: "ADC", age: 28, country: "Turkey", countryCode: "tr" },
  { name: "Farfetch", team: "Galatasaray", role: "Support", age: 23, country: "Turkey", countryCode: "tr" }
];