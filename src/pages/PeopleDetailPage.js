import React from 'react'
import { ScrollView, Image, StyleSheet } from 'react-native'

import Line from '../components/Line'

export default class PeopleDetailPage extends React.Component {
  render() {
    const { person } = this.props.navigation.state.params
    return(
      <ScrollView style={ styles.container }>
        <Image
          source={{ uri: person.picture.large }}
          style={ styles.avatar }
        />
        <ScrollView style={ styles.detailContainer }>
          <Line label="Email: " content={ person.email }/>
          <Line label="City: " content={ person.location.city }/>
          <Line label="State: " content={ person.location.state }/>
          <Line label="Nationality: " content={ person.nat }/>
          <Line label="Phone: " content={ person.phone }/>
          <Line label="Cel: " content={ person.cell }/>
        </ScrollView>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  avatar: {
    aspectRatio: 1
  },
  detailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1
  }
})