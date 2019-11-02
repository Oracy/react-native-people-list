import React from 'react'
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native'
import axios from 'axios'

import PeopleList from '../components/PeopleList'

export default class PeoplePage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      people: [],
      loading: false,
      error: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
      axios
        .get('https://randomuser.me/api/?nat=en&results=200')
        .then(response => {
          const { results } = response.data
          this.setState({
            people: results,
            loading: false
          })
        }).catch(err => {
          this.setState({ 
            loading: false,
            error: true })
          console.log(err)
        })
  }

  renderPage() {
    if(this.state.loading)
      return <ActivityIndicator size="large" color="#6ca2f7"/>
    if(this.state.error)
      return <Text style={ styles.error }>Ops, Error</Text>
    return (
      <PeopleList
        people={ this.state.people }
        onPressItem={ pageParams => {
        this.props.navigation.navigate('PeopleDetail', pageParams)}
          }
      />
    )
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.renderPage() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    color: 'red',
    alignSelf: 'center'
  }
})
