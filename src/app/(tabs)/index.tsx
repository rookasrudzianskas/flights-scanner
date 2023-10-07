import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import SearchForm from "../../components/SearchForm";

export default function TabOneScreen() {
  return (
    <View className="pt-16">
      <SearchForm onSearch={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
