import {FlatList, StyleSheet, Text, View} from 'react-native';
import SearchForm from "../../components/SearchForm";
import {LinearGradient} from "expo-linear-gradient";
import items from "../../../assets/data.json";
import FlightOptionItem from "../../components/FlightOptionItem";
import {useState} from "react";
import SearchFlights from "../../services/api";

export default function TabOneScreen() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = async (data: any) => {
    setLoading(true);
    setItems([]);

    const response = await SearchFlights(data);
    setItems(response.data);
    setLoading(false);
  };

  return (
    <LinearGradient colors={['white', '#f1f6fc']} className="flex flex-1 pt-16">
      <View>
        <SearchForm
          onSearch={onSearch}
        />
      </View>

      <FlatList
        data={items}
        renderItem={({ item }) => <FlightOptionItem flight={item} />}
        showsVerticalScrollIndicator={false}
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
