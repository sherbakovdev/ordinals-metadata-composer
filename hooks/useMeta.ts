import { State } from "@/types";
import { initialState } from "@/pages";

export const useMeta = (
  metadata: State,
  setMetadata: (metadata: State) => void
) => {
  const set = (field: string, value: string) => {
    setMetadata({
      ...metadata,
      meta: {
        ...metadata.meta,
        [field]: value,
      },
    });
  };

  const reset = () => {
    setMetadata({
      ...metadata,
      meta: {
        ...initialState.meta,
      },
    });
  };

  const download = () => {
    const fileData = JSON.stringify(metadata.meta);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "meta.json";
    link.href = url;
    link.click();
  };

  return {
    set,
    reset,
    download,
  };
};
