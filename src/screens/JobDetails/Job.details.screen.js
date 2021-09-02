import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Job.details.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useSelector } from 'react-redux'

const JobDetails = ({ navigation }) => {
  const data = useSelector(state => state.jobDetailsReducer.jobDetails)

  const renderImages = list => {
    return list.map(item => {
      return (
        <Image
          source={{ uri: item }}
          style={{ width: 50, height: 50, margin: 10 }}
        />
      )
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Icon name={'chevron-back'} size={42} color={'purple'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>
          <Text style={styles.subText}>Job ID: </Text>
          {data.Id}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.subText}>Job Title: </Text>
          {data.Title}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.subText}>Location: </Text>( {data.Latitude},
          {data.Longitude} )
        </Text>
        <View>
          <Text style={[styles.text, { color: '#000' }]}>Job Images: </Text>
          {renderImages(data.ImageList)}
        </View>

        <Text style={styles.text}>
          <Text style={styles.subText}>Status: </Text>
          {data.Status}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.subText}>Job Date: </Text>
          {data.JobDate}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.subText}>Created Date: </Text>
          {data.CreatedOnUtc}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default connect(null, null)(JobDetails)
