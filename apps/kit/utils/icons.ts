export const iconList = () => {
  const iconModules = import.meta.glob("~ui/assets/icons/*.svg", {
    eager: true,
  });
  return [
    { label: "", value: "" },
    ...Object.keys(iconModules).map((path) => {
      const filename = path.split("/").pop() || "";
      return {
        value: filename.replace(".svg", ""),
        label: filename.replace(".svg", ""),
      };
    }),
  ];
};
