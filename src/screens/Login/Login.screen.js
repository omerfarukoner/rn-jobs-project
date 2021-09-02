import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from 'react-native'
import styles from './Login.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getTokenRequest } from '../../stores/actions/token.action'
import { getJobs } from '../../stores/actions/job.action'
const Login = ({ navigation }) => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.tokenReducer.token)
  const isLoading = useSelector(state => state.jobReducer.isLoading)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onPressLogin = async () => {
    await dispatch(getTokenRequest(username, password))
    await dispatch(getJobs(token))
    if (token != null && !isLoading) {
      return navigation.navigate('Home')
    }
    return alert('Wrong Password/Username!')
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              placeholderTextColor="#003f5c"
              onChangeText={username => setUsername(username)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {isLoading && (
        <ActivityIndicator size="large" style={styles.activityIndicator} />
      )}
    </>
  )
}

export default connect(null, null)(Login)
