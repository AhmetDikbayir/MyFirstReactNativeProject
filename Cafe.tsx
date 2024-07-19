import React, {useState} from 'react';
import {Alert, Text, View, Image, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator} from 'react-native';

type CatProps = {
  name: string;
  age: number;
};

const getFullName = (
  firstName: string,
  secondName: string,
  thirdName: string,
) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};



const Cat = (props: CatProps) => {

  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10}}>Hello, I am {props.name}!</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10, color:"aqua"}}>I am {props.age} years old.</Text>
      
      <Pressable onPress={() =>console.log("Image pressed")}>
        <Image
        source={{
          uri: 'https://picsum.photos/200/300',
        }}
        style={{width: 200, height: 200, borderRadius: 100}}
      />
      </Pressable>
    </View>
  );
};

const Cafe = () => {

  const [buttonColor, setButtonColor] = useState('midnightblue');

  const [isModalVisible, setIsModalVisible] = useState(false);

const handlePress=() => {
  console.log("hello"); 
  setButtonColor('red');
  setIsStatusBarVisible(!isStatusBarVisible);
}

const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);
  return (
    <ScrollView style={{backgroundColor: "plum"}}>
      <View style={{height: 80, backgroundColor: "aqua"}}>
        <ActivityIndicator
          color={"midnightblue"}
          size={'large'}/>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor={"lightgreen"}
        hidden={isStatusBarVisible} />
        <Button 
          title='Alert' 
          onPress={() => Alert.alert('Invalid Data!',
                                     "Please enter valid data", 
                                     [{text: 'OK', onPress: () => console.log('OK Pressed')},
                                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed')}
                                     ])}/>
        <Button 
          title="Press me" 
          onPress={() => setIsModalVisible(true)}
          color={buttonColor}/>
      <Text style={{fontSize: 30}}>Hello, my name is {getFullName('John', 'One', 'Twoe')}</Text>  
      </View>
      <View style={{height: 200, width: 200, backgroundColor: "crimson", marginTop: 10}}>
      <Text style={{fontSize: 30}}>Hello, my name is {getFullName('John', 'One', 'Twoe')}</Text>  
      </View>
      <Cat name="Fluffy" age={5} />
      <Button 
        title="Press me" 
        onPress={handlePress}
        color={buttonColor}
        //butonu disable yapar
        //disabled
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={()=> setIsModalVisible(false)}
        animationType='slide' //animationType fade de olabiliyor. O zaman da gölge şeklinde geçiyor
        presentationStyle='pageSheet'
        >
        <View style={{flex: 1, backgroundColor: "lightblue", padding: 60}}>
          <Text>Modal Content</Text>
          <Button title='Close' color="midnightblue"
          onPress={() => setIsModalVisible(false)}/>
        </View>

      </Modal>
      
    </ScrollView>
  );
};

export default Cafe;