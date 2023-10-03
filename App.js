import React,{useState} from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import PlayScreen from './pages/PlayScreen';

export default function App() {
  const [play, setPlay] = useState(true);

  return play ? (
    <View style={styles.container}>
    <Text style={styles.text}>Rock Paper Scissors</Text>
  <Text style={styles.icons} >✊ ✋ ✌</Text>
  <View style={styles.button}>
    <Button color={"#e84118"} buttonStyle={styles.button} onPress={()=>setPlay(false)} title='Play'/>
  </View>
  </View>
    
    ):(

<PlayScreen/>
  );
}


const styles = StyleSheet.create({
container:{
 backgroundColor: "#00a8ff",
flex:1,
alignItems:"center",
justifyContent:"center",
},

icons:{
  fontSize:65,
  marginTop:30,
},

button:{
width:300,
marginTop:20,


},

text:{

 fontSize:30,
}

})

