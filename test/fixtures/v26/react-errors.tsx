export const Media = () => (
  <>
    <video src="movie.mp4" />
    <img src="image.png" />
  </>
);

export const Action = () => (
  <div role="button" onClick={() => console.log("clicked")} />
);
