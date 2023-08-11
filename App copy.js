import { StyleSheet, SafeAreaView,Platform, StatusBar, View, useWindowDimensions } from 'react-native';
import { useDeviceOrientation } from "@react-native-community/hooks"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: useDeviceOrientation() === 'landscape' ? '100%' : '30%'
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c2c2',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  img: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20
  }
});
