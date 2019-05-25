import React, { PureComponent } from 'react';
import { Text, ScrollView, Image, StyleSheet, View, Button } from 'react-native';
import GridList from 'react-native-grid-list';
import Header from './Header.js';

export default class PosterScreen extends PureComponent {
  renderItemSeparator = ({ item }) => (
    <Image style={styles.image} source={item.thumbnail} />
  );

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Separator */}
        <Text style={{fontSize:18, alignSelf:'center', marginTop:10 }}>Collection of Posters</Text>

        <View style={styles.girdSeparator}>
          <GridList
            showSeparator
            data={itemsSeparator}
            numColumns={2}
            renderItem={this.renderItemSeparator}
            separatorBorderWidth={25}
            separatorBorderColor={'white'}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //margin: '5%',
    //justifyContent: 'center',
  },
  girdSeparator: {
    borderWidth: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

const newImage = {
  0: '52598766_2346457918721358_1579507423201198080_n.jpg?_nc_cat=111&_nc_ht=scontent.fkul15-1.fna&oh=061df416d193b184bf86120f91909f78&oe=5D5A57F6',
  1: '57183798_1272156182937261_574362046599004160_n.jpg?_nc_cat=104&_nc_ht=scontent.fkul15-1.fna&oh=c1854514b4a20b81627da3256be493fa&oe=5D68CDA9',
  2: '56598201_2239186709475764_1364748935163281408_n.jpg?_nc_cat=109&_nc_ht=scontent.fkul15-1.fna&oh=6cad8dbf145495bcde9f1d2d1cfa4cc9&oe=5D533B28',
  3: '47388833_2083359318386943_8978622535218233344_n.jpg?_nc_cat=109&_nc_ht=scontent.fkul15-1.fna&oh=b14b022bbdac36e38e5894fd297aa339&oe=5D61A9BD',
  4: '57449510_2512890385410669_291577500000059392_n.jpg?_nc_cat=111&_nc_ht=scontent.fkul15-1.fna&oh=d6268cbebc22108347d33e104652fcc3&oe=5D684872',
  5: '59523496_1041391439581763_1153383329555283968_n.jpg?_nc_cat=106&_nc_ht=scontent.fkul15-1.fna&oh=13b1cdbfe139826446e3e8b4cf30f0d4&oe=5D9E6870',
};


const image = index => ({
  thumbnail: {
    uri: `https://scontent.fkul15-1.fna.fbcdn.net/v/t1.0-9/${
      newImage[index % (Object.keys(newImage).length)]
    }`,
  },
});

if (newImage[1]===true) {
  let onPress= () => this.props.navigation.navigate('Bubur')
} 


const itemsSeparator = Array.from(Array(10)).map((_, index) => image(index));