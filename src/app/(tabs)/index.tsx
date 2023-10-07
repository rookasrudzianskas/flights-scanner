import {StyleSheet, Text, View} from 'react-native';
import SearchForm from "../../components/SearchForm";
import {LinearGradient} from "expo-linear-gradient";

export default function TabOneScreen() {
  const onSearch = async (data: any) => {
    console.log(data);
  }

  return (
    <LinearGradient colors={['white', '#f1f6fc']} className="flex flex-1 pt-16">
      <SearchForm
        onSearch={onSearch}
      />
    </LinearGradient>
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
