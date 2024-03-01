const response =
  "# The village elder tasks the players with hunting down a legendary beast that has been terrorizing the nearby countryside.#A group of travelers arrive in the village, claiming to be from a distant land. They offer the players a chance to join them on their journey, but something about their story doesn't add up.#The players witness a strange ritual being performed in the village square. When they investigate, they discover that the villagers are worshipping an ancient evil.";

export const splitResponse = (response) => {
  //Returns an array of plot hooks
  // Each plot hook is separated by a hash sign '#'
  let plotHooks = response.split("#").map((hook) => hook.trim());

  // Sometimes the AI will put a hash sign at the end/beginning of the response
  // so we delete any  empty strings from the array
  plotHooks = plotHooks.filter((hook) => hook !== "");
  console.log({ plotHooks });

  return plotHooks;
};
