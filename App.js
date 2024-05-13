import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import colors from "./src/utils/colors";
import Focus from "./src/features/focus";
import { FocusHistory } from "./src/features/FocusHistory";
import { Timer } from "./src/features/timer";

export default function App() {
  const [currentSubject, setCurrentSubject] = React.useState(null);
  const [history, setHistory] = React.useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {currentSubject ? (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      ) : (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
    backgroundColor: colors.darkBlue,
  },
});
