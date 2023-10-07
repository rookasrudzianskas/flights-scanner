import {StyleSheet, Text, View} from 'react-native';
import SearchForm from "../../components/SearchForm";

export default function TabOneScreen() {
  const onSearch = async (data: any) => {
    console.log(data);
  }

  return (
    <View className="pt-16">
      <SearchForm
        onSearch={onSearch}
      />
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
