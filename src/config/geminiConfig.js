import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

export const MODEL_NAME = "gemini-1.0-pro";

export const generationConfig = {
  temperature: 0.9,
  topK: 2,
  topP: 0.9,
  maxOutputTokens: 1024,
};

export const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
];

export const parts = [
  {
    text: "Write a plot hook for a TableTop Fantasy RPG game. A user will specify a location (taver, library, city hall, etc) and you will create a unique event/encounter for the players. The plot hook should not be more than a couple of sentences long and it should be fitting to the location provided by the user.",
  },
  { text: "input: Noble District of a City" },
  {
    text: "output: A local noble has a lost shoe of a fair maiden he is trying to find. He asks for the PCs' assistance in the search.",
  },
  { text: "input: Road" },
  {
    text: "output: A man  stops the players and appears to know all of the players by name. He asks them to come back at midnight, when the moon is at its highest.",
  },
  { text: "input: Tavern" },
  {
    text: "output: The innkeeper asks the party to clean out the attic. They will be allowed to stay for free for their services.",
  },
  { text: "input: City" },
  { text: "output: The players come across two people surrounded by a crowd. They appear to be dueling." },
  { text: "input: Main Square of a City" },
  {
    text: "output: A group of people are setting up for a festival, but they're missing a key ingredient. They ask the PCs to help them find it.",
  },
  { text: "input: Cave" },
  {
    text: "output: Upon entering the cave, the players notice large footprints and a trail of blood leading deeper into the cave.",
  },
  { text: "input: Mountain" },
  {
    text: "output: The players come across a group of travelers who have been attacked by bandits. The travelers ask the players for help in retrieving their stolen belongings.",
  },
  { text: "input: Library" },
  {
    text: "output: A mysterious book — it's binding is made of human skin — has shown up on the shelves, and the library's patrons are terrified.",
  },
  { text: "input: Dungeon" },
  {
    text: "output: As the players enter the dungeon, they hear a faint whispering coming from the walls. If they try to listen closely, they can hear the voices of long-dead prisoners pleading for help.",
  },
  { text: "input: Jungle" },
  {
    text: "output: The players come across a group of animals gathered around a clearing, seemingly transfixed by something in the center.",
  },
  { text: "input: Flower Shop" },
  { text: "output: The owner of the flower shop is found dead in the back room, surrounded by exotic flowers." },
  { text: "input: Tavern" },
  { text: "output: A drunken dwarf asks the players to help him find his missing pet pig, Bartholomew." },
  { text: "input: Road" },
  {
    text: "output: As the players travel down the road, they come across a group of people gathered around a wagon that has overturned. The people are arguing and blaming each other for the accident.",
  },
  { text: "input: Road" },
  {
    text: "output: In the midst of a raging storm, the players find themselves seeking shelter in an abandoned watchtower, unaware of the malevolent entity that lurks within.",
  },
  {
    text: "input: A small town going through an economic crisis",
  },
];
