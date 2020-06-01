import React from 'react';
import {View, StyleSheet,Text,KeyboardAvoidingView,Image,TextInput,TouchableOpacity, Alert} from 'react-native'



export default class LoginScreen extends React.Componenet{
    constructor(){
        super()
        this.state = ({
            emailId: '',
            password:' '
        })
    }
    Login = async (emailId,password)=>{
        if (emailId && password){
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(emailId,password)
           if (response){
               this.props.navigation.navigate('Transaction')
           } 
        }
        catch (error){
            switch (error.code){
                case 'auth/user-notFound':
                Alert.alert('USER DOES NOT EXIST')
                break ;
                case 'auth/invalid-email':
                    Alert.alert("INCORRECT EMAIL OR PASSWORD")

            }
        }
        }
        else {
            Alert.alert("ENTER EMAIL AND PASSWORD")
        }
    }
    render (){
    return(
        <View style ={styles.loginBox}>
            <Text>LOGIN SCREEN</Text>
        </View>
    )
}
}
<KeyboardAvoidingView style = {{alignItems:'center', marginTop: 20}}>
    <View>
      <Image
      source = {require("../assets/booklogo.jpg")}
      style = {{width: 200, height:200}}
      />  
      <Text style = {{textAlign: 'center',fontSize:30}}>WILY APP</Text>
    </View>
    <View>
    <TextInput
    style = {styles.loginBox}
    placeholder = 'abc@example.com'
    keyboardType = 'email-address'
    onChangeText = {()=>(
        this.setState ({
            emailId: text,
        })
    )}
      
    />
    <TextInput
    style = {styles.loginBox}
    secureTextEntry = {true}
    placeholder = 'Password'
    onChangeText = {()=>(
        this.setState ({
        password: text
    })
    )}
    />

     
    </View>

    <View>
        <TouchableOpacity style = {{height:30,width:90,borderWidth:1.5,marginTop:20,paddingTop :5,boderRadius:20}}
        onPress = {()=>{
            this.Login(this.state.email-Id, this.state.password)
            
        }}
        
        >
        <Text style ={{textAlign:'center'}}>LOGIN</Text>
        </TouchableOpacity>
    </View>
</KeyboardAvoidingView>

const styles = StyleSheet.create({
    loginBox:{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    }
})
