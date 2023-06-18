import { Montserrat, Hind } from "next/font/google";

export const fontPrimary = Hind({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export const fontSecondary = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "600", "800"],
});
