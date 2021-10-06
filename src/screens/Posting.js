import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper/src';
import RBSheet from "react-native-raw-bottom-sheet";

const Posting = ({ route, navigation }) => {

  const [height, setHeight]           = useState('');
  const [width, setWidth]             = useState('');
  const [postingData, setPostingData] = useState('');
  const [imgList, setImgList]         = useState([]);

  const refRBSheet = useRef();

  //init
  useEffect(() => {
    setHeight(Dimensions.get('window').height);
    setWidth(Dimensions.get('window').width);
    setPostingData(route.params.data);
    
    //이미지 URL 만 뽑아서 배열에 insert
    const imgListArr = [];
    Object.keys(route.params.data).map((entries, idx)=>{
      if(entries.indexOf('ctnt_img_url') > -1 ){
        imgListArr.push(route.params.data[entries]);
      }
    });
    setImgList(imgListArr);
  }, []);

  return (
    <>
    <SafeAreaView>
      <View>
        <button style={{position : 'fixed', zIndex: '1'}} onClick={() => refRBSheet.current.open()}>모달</button>
        
        <Swiper 
          showsButtons={false}
          loop={false}
          showsPagination={false}
        >
          {
            imgList.map( (item, index) =>  
              <div 
                key={index}
              >
                <img 
                  key={index} 
                  src={item} 
                  style={{ height: height, width: width }}
                />
              </div>) 
          }
        </Swiper>
        <RBSheet
          ref={refRBSheet}
          animationType={"fade"}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent"
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}
        >
          <div>모달 부분</div>
        </RBSheet>
      </View>
    </SafeAreaView>
    </>
  );
  
}

const styles = StyleSheet.create({
  floatingBtn: {
      position : 'fixed',
  },
})

export default Posting;