import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getJobDetails } from '../../stores/actions/job.details.action'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const jobs = useSelector(state => state.jobReducer.jobs)
  const token = useSelector(state => state.tokenReducer.token)
  const isLoading = useSelector(state => state.jobDetailsReducer.isLoading)

  const onPressItem = async id => {
    await dispatch(getJobDetails(token, id))
    navigation.push('Details')
  }

  const renderItem = data => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(data.Job.Id)}
        style={styles.item}>
        <Text style={styles.text}>
          <Text style={styles.subText}>Job ID: </Text>
          {data.Job.Id}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.subText}>Job Title: </Text>
          {data.Job.Title}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.subText}>Customer Name: </Text>
          {data.Job.CustomerName}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.subText}>Status: </Text>
          {data.Job.Status}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Icon name={'chevron-back'} size={42} color={'purple'} />
      </TouchableOpacity>
      <FlatList
        style={styles.flatList}
        data={jobs}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={data => data.Job.Id}
      />

      {isLoading && (
        <ActivityIndicator size="large" style={styles.activityIndicator} />
      )}
    </SafeAreaView>
  )
}

export default connect(null, null)(Home)
