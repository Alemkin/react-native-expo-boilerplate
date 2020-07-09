import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Container, Text, Button } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'

const RootScreen = ({ navigation, loading, error, pokemon }) => {
  return (
    <Container>
      <StatusBar style='light' />
      <Grid>
        <Row style={{ backgroundColor: '#635DB7' }}>
          <Col>
            <Button danger style={{ margin: 5 }}>
              <Text>Click Me 1!</Text>
            </Button>
          </Col>
          <Col>
            <Button success style={{ margin: 5 }}>
              <Text>Click Me 2!</Text>
            </Button>
          </Col>
          <Col>
            <Button primary style={{ margin: 5 }}>
              <Text>Click Me 3!</Text>
            </Button>
          </Col>
        </Row>
        <Row style={{ backgroundColor: '#635DB7' }}>
          <Col>
            <Button warning style={{ margin: 5 }}>
              <Text>Click Me 4!</Text>
            </Button>
          </Col>
          <Col>
            <Button info style={{ margin: 5 }}>
              <Text>Click Me 5!</Text>
            </Button>
          </Col>
          <Col>
            <Button dark style={{ margin: 5 }}>
              <Text>Click Me 6!</Text>
            </Button>
          </Col>
        </Row>
        <Row style={{ backgroundColor: '#635DB7' }}>
          <Col>
            <Button light style={{ margin: 5 }}>
              <Text>Click Me 7!</Text>
            </Button>
          </Col>
          <Col>
            <Button danger style={{ margin: 5 }}>
              <Text>Click Me 8!</Text>
            </Button>
          </Col>
          <Col>
            <Button success style={{ margin: 5 }}>
              <Text>Click Me 9!</Text>
            </Button>
          </Col>
        </Row>
        {
          pokemon.name &&
            <>
              <Row style={{ backgroundColor: '#00CE9F' }}>
                <Col style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text>{`Name: ${pokemon.name}`}</Text>
                </Col>
              </Row>
              <Row style={{ backgroundColor: '#00CE9F' }}>
                <Col size={25} style={{ alignItems: 'center', backgroundColor: 'white', justifyContent: 'center' }}>
                  <Text>{`Weight: ${pokemon.weight}`}</Text>
                </Col>
                <Col size={50} style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text>{`Id: ${pokemon.id}`}</Text>
                </Col>
                <Col size={25} style={{ alignItems: 'center', backgroundColor: 'white', justifyContent: 'center' }}>
                  <Text>{`Order: ${pokemon.order}`}</Text>
                </Col>
              </Row>
            </>
        }
      </Grid>
    </Container>
  )
}

export default RootScreen
