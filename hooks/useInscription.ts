import { Inscription, State } from "@/types";

const inscription: Inscription = {
  id: "",
  meta: {
    name: "",
  },
  attributes: [],
};

export const useInscription = (
  metadata: State,
  setMetadata: (metadata: State) => void
) => {
  const add = () => {
    const newMetadata = { ...metadata };
    newMetadata.inscriptions.push(inscription);
    setMetadata(newMetadata);
  };

  const reset = () => {
    const newMetadata = { ...metadata };
    newMetadata.inscriptions = [];
    setMetadata(newMetadata);
  };

  const set = (index: number, key: keyof Inscription, value: any) => {
    const newMetadata = { ...metadata };
    const inscription = newMetadata.inscriptions[index];
    inscription[key] = value;
    setMetadata(newMetadata);
  };

  const download = () => {
    const fileData = JSON.stringify(metadata.inscriptions);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "inscriptions.json";
    link.href = url;
    link.click();
  };

  const remove = (index: number) => {
    const newMetadata = { ...metadata };
    newMetadata.inscriptions.splice(index, 1);
    setMetadata(newMetadata);
  };

  const addAttribute = (index: number) => {
    const newMetadata = { ...metadata };
    const inscription = newMetadata.inscriptions[index];
    inscription.attributes.push({ trait_type: "", value: "" });
    setMetadata(newMetadata);
  };

  const setAttribute = (
    index: number,
    attributeIndex: number,
    key: keyof Inscription["attributes"][0],
    value: any
  ) => {
    const newMetadata = { ...metadata };
    const inscription = newMetadata.inscriptions[index];
    const attribute = inscription.attributes[attributeIndex];
    attribute[key] = value;
    setMetadata(newMetadata);
  };

  const removeAttribute = (index: number, attributeIndex: number) => {
    const newMetadata = { ...metadata };
    const inscription = newMetadata.inscriptions[index];
    inscription.attributes.splice(attributeIndex, 1);
    setMetadata(newMetadata);
  };

  return {
    add,
    set,
    reset,
    remove,
    download,
    addAttribute,
    setAttribute,
    removeAttribute,
  };
};
