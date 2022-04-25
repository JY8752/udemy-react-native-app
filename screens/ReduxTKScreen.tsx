import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React, { VFC, useEffect, useState } from 'react';
import tw from 'tailwind-rn';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button, Input } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  addByPayload,
  selectCount,
} from '../slices/counterSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'RdeuxTK'>;

export const ReduxTKScreen: VFC<Props> = ({ navigation }) => {
  const [amount, setAmount] = useState('0');
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const incrementAmount = Number(amount) || 0;

  useEffect(() => {
    console.log('mounted ReduxTK');
    return () => {
      console.log('un-mounted ReduxTK');
    };
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>ReduxTKScreen {count}</Text>
      <View style={tw('my-3')}>
        <Button
          title="Go to FlexBox"
          onPress={() => navigation.navigate('FlexBox')}
        />
      </View>
      <View style={tw('my-1')}>
        <Button title="increment" onPress={() => dispatch(increment())} />
      </View>
      <View style={tw('my-1')}>
        <Button title="decrement" onPress={() => dispatch(decrement())} />
      </View>
      <Input
        placeholder="type add number"
        leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
        value={amount}
        onChangeText={(txt: string) => setAmount(txt)}
      />
      <View>
        <Button
          title="increment by amount"
          onPress={() => {
            dispatch(addByPayload(incrementAmount));
            setAmount('0');
          }}
        />
      </View>
    </View>
  );
};
