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
    text: "Write 3 plot hooks for a TableTop Fantasy RPG game. A user will specify a location (taver, library, city hall, etc) and you will create 3 unique event/encounter for the players. The plot hooks should not be more than a couple of sentences long and it should be fitting to the location provided by the user. For prompts on the same location try to give them some variation and don't repeat yourself. Separate each generated plot hook with a hash sign '#'  and no white space between them",
  },
  { text: "input: Noble District of a City" },
  {
    text: "output: A local noble has a lost shoe of a fair maiden he is trying to find. He asks for the PCs' assistance in the search.#A cryptic note, scrawled in an unknown tongue, is found tucked inside the collar of a dead pigeon at the city gates.#The players come across two people surrounded by a crowd. They appear to be dueling.",
  },
  { text: "input: Road" },
  {
    text: "output: A man  stops the players and appears to know all of the players by name. He asks them to come back at midnight, when the moon is at its highest.#As the players travel down the road, they come across a group of people gathered around a wagon that has overturned. The people are arguing and blaming each other for the accident.#In the midst of a raging storm, the players find themselves seeking shelter in an abandoned watchtower, unaware of the malevolent entity that lurks within.",
  },
  { text: "input: Tavern" },
  {
    text: "output: The innkeeper asks the party to clean out the attic. They will be allowed to stay for free for their services.#A drunken dwarf asks the players to help him find his missing pet pig, Bartholomew.#The players watch a man takes a sip of his beer, only to instantly drop dead on the floor.",
  },
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
  { text: "input: Library" },
  {
    text: "output: A group of scholars are arguing over a rare book that has been stolen from the library. The players must find the book and return it to the library before it is lost forever.#A young woman approaches the players and asks them to help her find her missing brother. She says that he was last seen in the library, researching a dangerous spell.#The players stumble upon a secret room in the library that contains a collection of forbidden books. If they read any of the books, they will be cursed.",
  },
  { text: "input: Mountain" },
  {
    text: "output: The players come across a group of travelers who have been attacked by bandits. The travelers ask the players for help in retrieving their stolen belongings.#As the players climb the mountain, they come across a cave entrance. They can hear strange noises coming from inside the cave.#The players reach the top of the mountain and find a beautiful meadow. In the middle of the meadow is a crystal-clear lake.",
  },
  { text: "input: Flower Shop" },
  {
    text: "output: The owner of the flower shop is found dead in the back room, surrounded by exotic flowers.#A customer comes into the flower shop and asks for a bouquet of flowers that will make his love fall head over heels for him.#A group of children come into the flower shop and ask for help finding a flower that will grant them a wish.",
  },
  { text: "input: A town carnival" },
  {
    text: "output: A mysterious stranger arrives at the carnival, offering to tell fortunes. The players can choose to have their fortunes told, but they must be prepared for the consequences.#A group of children have gone missing from the carnival. The players must find the children before they come to harm.#The carnival's main attraction, a giant Ferris wheel, suddenly breaks down, leaving people stranded high in the air. The players must find a way to rescue the people before they fall to their deaths.",
  },
];
