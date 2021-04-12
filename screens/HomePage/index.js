import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading,  Body,  Text, Title, Icon } from 'native-base';
import FavoritesTab from './FavoriteTab';
import LaunchesTab from './LaunchesTab';

class HomePage extends Component {
    state = {
        favorites: []
    }

    addToFavorites = (item, cb) => {
        const favorites = Object.assign([], this.state.favorites);
        const index = favorites.findIndex(f => f.id === item.id);

        if (index === -1) {
            favorites.push(item);
        } else {
            favorites.splice(index, 1);
        }
        this.setState({
            favorites
        });
    }

    isFavorite = (item, cb) => {
        const favorites = Object.assign([], this.state.favorites);
        const index = favorites.findIndex(f => f.id === item.id);
        if (index === -1) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <Container>
                <Header >
                    <Body>
                         <Title>Rocket Launches</Title>
                    </Body>
                </Header>
                <Tabs tabBarPosition="bottom"> 
                    <Tab heading={
                        <TabHeading><Icon name="rocket" />
                            <Text>Launches</Text>
                        </TabHeading>}>
                        <LaunchesTab   favorites={this.state.favorites} addToFavorites={this.addToFavorites} isFavorite={this.isFavorite}/>
                    </Tab>
                    <Tab heading={
                        <TabHeading><Icon name="heart" />
                            <Text>Favorites</Text>
                        </TabHeading>}>
                        <FavoritesTab favorites={this.state.favorites} addToFavorites={this.addToFavorites} isFavorite={this.isFavorite}/>
                    </Tab>
                </Tabs>
            </Container >
        );
    }
}

export default HomePage;