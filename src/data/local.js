const collections = [
  { id: 1, name: "SIL", itemCount: 22 },
  { id: 2, name: "Museum of the Bible", itemCount: 42 },
  { id: 3, name: "UBS", itemCount: 3 },
  { id: 4, name: "unfoldingWord", itemCount: 7 },
];

const entropy = Math.floor(Math.random() * 1000 + 1);

export const getCollectionsLocal = async () => {
  console.info("Getting LOCAL Collections");
  // if (entropy % 3 === 0) {
  //   console.error("Chaos monkey was activated.");
  //   return Promise.reject();
  // }

  return Promise.resolve(collections);
};

export const getCollectionLocal = async (id) => {
  console.info(`Getting LOCAL Collection: ${id}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  if (entropy % 3 === 0) {
    console.error("Chaos monkey was activated.");
    return Promise.reject();
  }

  return Promise.resolve(
    collections.find((collection) => String(collection.id) === id)
  );
};
