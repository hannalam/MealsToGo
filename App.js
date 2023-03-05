import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "react-native-paper";

//import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <FavouritesContextProvider>
          <Navigation />
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
