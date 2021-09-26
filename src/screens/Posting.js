import React, {useState} from 'react';
import ModalComponent from '../common/ModalComponent';
import { Text, View, Image, Dimensions } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Constants from 'expo-constants';

const window = Dimensions.get("window");

class Posting extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      postingData : props.route.params.data,
      imgList : [],
      imgIdx: 0,
    };
  }

  //렌더링이 모두 끝난 뒤 실행되는 함수
  componentDidMount() {

    //postingData 의 ctnt_img_url 모두 배열로 저장
    const imgListArr = [];
    Object.keys(this.state.postingData).map((entries, idx)=>{
      if(entries.indexOf('ctnt_img_url') > -1 ){
        imgListArr.push(this.state.postingData[entries]);
      }
    });

    this.setState({
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      imgList: imgListArr,
    });
  }

  //SWIPE 했을 때 동작 제어
  onSwipe(gestureName, gestureState) {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    switch(gestureName){
      case SWIPE_LEFT :   //다음 이미지
        if(this.state.imgIdx < this.state.imgList.length-1){
          this.setState({ imgIdx : ++this.state.imgIdx});
        }
        break;
      case SWIPE_RIGHT :  //이전 이미지
        if(this.state.imgIdx != 0){
          this.setState({ imgIdx : --this.state.imgIdx});
        }
        break;
    }
  }

  render() {
    
    return (
      <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
        <Text>Posting</Text>
        {/* <Text>{this.state.image}</Text> */}
        <GestureRecognizer
          onSwipe={(direction, state)=> this.onSwipe(direction, state)}
        >
          <Image 
            source={this.state.imgList[this.state.imgIdx]} style={{ height: this.state.height , width: this.state.width }} 
          />
        </GestureRecognizer>  
        
      </View>
    );
  }
}

export default Posting;
