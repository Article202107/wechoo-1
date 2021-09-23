import React, {useState} from 'react';
import PostingData from '../data/PostingData';
import ModalComponent from '../common/ModalComponent';

const Posting = () => {

  const [modalVisible, setModalVisible ] = useState(false);

  const onStart = () => {
    setModalVisible(true);
  }

  return(
    <>
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        body={PostingData}
      />

      <button onClick={onStart}>모달테스트</button>
    </>
  );
}

export default Posting;
