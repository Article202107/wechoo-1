import React, {useState} from 'react';
import {Modal, StyleSheet, View, Dimensions} from 'react-native';

const ModalComponent = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [body, setBody] = useState('');
    
    return (
       <Modal
            animationType={'slide'}
            transparent={false}
            visible={modalVisible}
       >
           <View style={styles.container}>
                <View 
                    style={styles.blankSpace}
                    onTouchEnd = {() => setModalVisible(false)} //모달 빈공간을 누르면 창 닫기
                />
                {body}
           </View>
       </Modal>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    }, 
    blankSpace : {
        position : 'absolute',
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height,
    }

});

export default ModalComponent;