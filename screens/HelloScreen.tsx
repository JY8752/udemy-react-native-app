import { View, Text } from 'react-native';
import React, { VFC, useEffect, useState, useCallback } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'tailwind-rn';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button, Input } from 'react-native-elements';
import { Child } from '../components/Child';

type Props = NativeStackScreenProps<RootStackParamList, 'Hello'>;

export const HelloScreen: VFC<Props> = ({ navigation }) => {
  const [text, setText] = useState('');
  const [printText, setprintText] = useState('');
  useEffect(() => {
    console.log('mounted Hello');
    return () => {
      console.log('un-mounted Hello');
    };
  }, []);

  //useCallback内でstateの値を使っている場合初期値の状態でメモ化されてしまう。
  //その場合、第二引数に依存関係を指定する必要がある
  const printMsg = useCallback(() => {
    console.log(`Print: ${printText}`);
  }, [printText]);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>HelloScreen</Text>
      <View style={tw('my-3')}>
        <Button
          title="Go to ReduxTK"
          onPress={() => navigation.navigate('RdeuxTK')}
        />
      </View>
      <Text>{text}</Text>
      <Input
        placeholder="type add number"
        leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
        value={text}
        onChangeText={(txt: string) => setText(txt)}
      />
      <Input
        placeholder="type add number"
        leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
        value={printText}
        onChangeText={(txt: string) => setprintText(txt)}
      />
      <Text>{printText}</Text>
      <Child printMsg={printMsg} />
    </View>
  );
};
