import { View, Text } from 'react-native';
import React, { VFC, memo } from 'react';
import { Button } from 'react-native-elements';
import tw from 'tailwind-rn';

type Props = {
  printMsg: () => void;
};

const ChildMemo: VFC<Props> = ({ printMsg }) => {
  console.log('Child rendered');
  return (
    <View>
      <Text style={tw('my-3')}>Child</Text>
      <Button title="Print" onPress={printMsg} />
    </View>
  );
};
export const Child = memo(ChildMemo);
