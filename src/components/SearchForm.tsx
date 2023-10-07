//@ts-nocheck
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const SearchForm = ({onSearch}) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

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

      <Button title="Search" onPress={onSearchPress} />
    </View>
  );
};

export default SearchForm;
