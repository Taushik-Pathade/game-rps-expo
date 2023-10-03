import { View, Button, Text, StyleSheet , Image } from 'react-native';
import React, { useEffect,   useState } from 'react';
import rock from "./images/rock.png"
import paper from "./images/paper.png"
import scissors from "./images/scissors.png"

const backgroundColors =["#27ae60", "#f1c40f","#c0392b"] ;





const randomImg =()=>{
  const emojis = [rock, paper , scissors];
  const random = Math.round(Math.random()*3)
return emojis[random]
}

const PlayScreen=()=> {

 //counter for implementing function or method
  // and setCounter for Alteration that function/method.

  const [counter, setCounter] = useState(3);


 // UseEffect
 useEffect(() => {

  if (counter < 1 )   return;
  
  // In UseEffect seTimeout we are going to set  minutes number in loop
  // that we altered the setCounter state from 3 to 0
  // in prv we just count down the value from 3 to 0 but we did'nt should that think stop 
  // After View  
  //<View style={styles.container}>
  // We defined werw vour loop gonna stop 
  // When ever the condition is less than 1
  //(counter < 1)
  // So stop the loop and display the image and button
  //After we Click the button all condition are gonna reset and loop
  // will restart again

  const timer = setTimeout(()=>{
setCounter((prv)=> prv - 1);},

600);


return () => {
    clearTimeout(timer)
   }

   
 },
 
 [counter])
// UseEffect




  return (
    <View style={StyleSheet.compose({ backgroundColor: backgroundColors[counter -1]},
    styles.container)}>
     
{

     //(counter < 1)

(counter < 1) ? (
  
  <>
    <Image style={styles.img} source={randomImg()} />
<View style={styles.buttton}>
<Button onPress={()=>setCounter(3)}  title="Play Again" />
</View>
  </>

): <Text style={styles.counter}>{counter}</Text>

}










    </View>
  )
}


const styles = StyleSheet.create({

container:{
justifyContent: "center",
  alignItems: "center",
flex: 1,


},
counter: {
fontSize:200,

},


img:{
width:300,
height:300,
marginBottom:30,

},
buttton:{
  position: "absolute",
  bottom:40,
},
})

export default PlayScreen