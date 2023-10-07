//@ts-nocheck
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {Feather} from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';

const SearchForm = ({onSearch}) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const onSearchPress = async () => {
    onSearch({ from, to });
  };

  return (
    <View className="bg-white rounded-[10px] shadow-lg p-5 m-3">
      <Text className="text-center font-semibold text-base my-2">
        Search the best prices for your next trip!
      </Text>

      <TextInput
        placeholder="From"
        value={from}
        onChangeText={setFrom}
        className="border border-gray-300 rounded-sm p-3 py-3 my-2"
      />
      <TextInput
        placeholder="To"
        value={to}
        onChangeText={setTo}
        className="border border-gray-300 rounded-sm p-3 py-3 my-2"
      />

      <View className="flex flex-row justify-between items-center my-2">
        <Feather name="calendar" size={22} color="gray" />
        <DateTimePicker
          value={departDate}
          onChange={(event, date) => setDepartDate(date || new Date())}
          minimumDate={new Date()}
        />
        <Text style={{ fontSize: 20, color: 'gainsboro', marginLeft: 10 }}>
          |
        </Text>
        <DateTimePicker
          value={returnDate}
          onChange={(event, date) => setReturnDate(date || new Date())}
          minimumDate={departDate}
        />
      </View>

      <Button title="Search" onPress={onSearchPress} />
    </View>
  );
};

export default SearchForm;
