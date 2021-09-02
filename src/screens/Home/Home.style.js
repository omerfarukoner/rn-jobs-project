import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,

    backgroundColor: '#FFF'
  },
  item: {
    borderBottomWidth: 5,
    borderColor: '#eee',
    padding: 12,
    marginVertical: 12
  },
  text: { fontSize: 18, color: '#808080', fontWeight: 'bold' },
  subText: { fontSize: 18, color: '#000' },
  flatList: {
    paddingHorizontal: 24
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})
