import React, { Component } from 'react';
import { Content, Card, CardItem,  Text,  Left, Right, View } from 'native-base';
import {  TouchableWithoutFeedback, Linking, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

class LaunchItem extends Component {

    render() {
        const { item } = this.props;
        return (
            <View style= {{flex: 1, flexDirection: 'column', margin: 1 } }>
                <Content>
                    <Card >
                        <CardItem cardBody >
                        <Image source={{ uri: item.image }} style={{height: 250, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem >
                            <Left>
                                    <View > 
                                        <Text style = {styles.headtitle} 
                                            onPress={() => Linking.canOpenURL(item.url) ? Linking.openURL(item.url) : 
                                                           Linking.canOpenURL(item.pad.wiki_url) ?  Linking.openURL(item.pad.wiki_url) ://mission wiki page
                                                           Linking.canOpenURL(rocket.configuration.url) ? Linking.openURL(rocket.configuration.url) : 
                                                           console.log('no URL available') }> {item.name}
                                        </Text>
                                        <Text style = {styles.subtitle}>
                                            {item.pad.location.name}
                                            {'\n'}
                                            {item.window_start}
                                            {'\n'}
                                            {item.status.name}
                                        </Text>
                                    </View>
                            </Left>
                            <Right>
                                        
                                <TouchableWithoutFeedback onPress={() => {this.props.addToFavorites(item);}}>
                                    <View style={styles}>
                                        {   
                                            this.props.isFavorite(item) && <Icon name='heart' style={{ fontSize: 22, color: 'red' }} />
                                        }
                                        {
                                            !this.props.isFavorite(item) && <Icon name='heart' style={{ fontSize: 22, color: 'gray' }} />
                                        }
                                    </View>
                                </TouchableWithoutFeedback>
                            </Right>
                        </CardItem>
                </Card>
            </Content>
          </View>
        );
    }
}

export default LaunchItem;