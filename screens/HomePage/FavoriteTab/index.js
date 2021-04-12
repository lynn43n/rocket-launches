import React, {Component} from 'react';
import { FlatList, StyleSheet} from 'react-native';
import { Text, Thumbnail, View } from 'native-base';
import LaunchItem from '../../../components/LaunchItem';

const styles = StyleSheet.create({
  MainContainer: {
      justifyContent: 'center',
      flex: 1,
      margin:5,
  },

  emptyList: {
      marginTop: 100,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

class FavoriteTab extends Component {
    state={
        isFavorite:true
    }
    
  renderEmptyContainer = () => {
      return <View style={styles.emptyList} ><Text>The list is empty</Text></View>
  }

  renderRow = ({ item }) => {
    return <LaunchItem addToFavorites={this.props.addToFavorites} item={item}  isFavorite= {this.props.isFavorite}/>
  }

  render() {
      return (
          <View style={styles.MainContainer} >
              <FlatList
                  data={this.props.favorites}
                  renderItem={this.renderRow}
                  keyExtractor={(i) => i.id}
                  numColumns={2}
                  ListEmptyComponent={this.renderEmptyContainer()}
              />
          </View>
      );
  }
}
export default FavoriteTab;

