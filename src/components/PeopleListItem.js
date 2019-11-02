import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { capitalizeFirstLetter } from '../util'

const PeopleListItem = props => {
  const { person, navigateToPeopleDetail } = props
  const { first, last, title } = person.name
  return (
    <TouchableOpacity onPress={() => {
      navigateToPeopleDetail({ person })
    }}>
      <View style={ style.line }>
        <Image style={style.avatar} source={{ uri: person.picture.thumbnail }} />
          <Text style={ style.lineText }>
            { `${
              capitalizeFirstLetter(title)
              }. ${
              capitalizeFirstLetter(last)
                }, ${
              capitalizeFirstLetter(first)
              }`
            }
          </Text>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',

    alignItems: 'center',
    flexDirection: 'row'
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,

    marginLeft: 10,
    borderRadius: 10
  }
})

export default PeopleListItem