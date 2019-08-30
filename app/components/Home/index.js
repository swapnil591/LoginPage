import React, { Component } from 'react'
import { View, TextInput, Text, Button, Alert} from 'react-native'
import styles from './styles'

class Home extends Component{

    state = {username: "", password: ""}

    
    checkLogin(){
       const {username, password} = this.state     
       if(username == 'admin' && password == "admin"){
           //console.warn('Login is ok')
           this.props.navigation.navigate('dash')
       }else{
           Alert.alert('Error', 'Username/Password mismatch', [{
               text: 'Okay'
           }])
       }
    }

    render() {
        const{ heading, input, parent } = styles
        return (
             <View style={parent}>
                 <Text style={heading}>Login into the application</Text>
                 <TextInput style={input} placeholder="Username" onChangeText={text => this.setState({username: text})}     />
                 <TextInput style={input} placeholder= "Password" secureTextEntry={true} onChangeText={text => this.setState({password: text})} />
                 <Button title="Login"  onPress={() => this.checkLogin()}/>
            </View>
        );
    }
}

export default Home;