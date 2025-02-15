export type HeadingSizes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingFontStyle = "body" | "display";

export type HeadingProps = {
  size: HeadingSizes;
  styleSize: HeadingSizes;
  text: string;
  fontStyle?: HeadingFontStyle;
};
