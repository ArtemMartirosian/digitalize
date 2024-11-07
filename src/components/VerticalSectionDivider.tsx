export const VerticalSectionDivider = () => {
  return (
    <div className=" w-px h-24 relative bg-gradient-to-b from-muted-foreground to-transparent">
      <span className=" block w-2 aspect-square rounded-full absolute left-1/2 -translate-x-1/2 top-0 z-10 bg-muted-foreground"></span>
    </div>
  );
};
