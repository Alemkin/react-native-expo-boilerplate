import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Container, Content, List, ListItem, Text } from 'native-base'

const ProfileScreen = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style='auto' />
      <Content>
        <List>
          <ListItem itemDivider>
            <Text>A</Text>
          </ListItem>
          <ListItem>
            <Text>Alexander Lemkin</Text>
          </ListItem>
          <ListItem>
            <Text>Ali Connors</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>B</Text>
          </ListItem>
          <ListItem>
            <Text>Beatrice Horowitz</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}

export default ProfileScreen
