import React, { useState, useEffect } from "react";
import { dbService, storageService } from "fbase";

const PostingData = (clickedCtntUid) => {

  const [ctnt_uid,      setCtntUid]     = useState(''); //컨텐츠 UID
  const [ctnt_type,     setCtntType]    = useState(''); //컨텐츠 유형
  const [ctnt_wrt_uid,  setCtntWrtUid]  = useState(''); //작성자 UID
  const [ctnt_wrt_ymd,  setCtntWrtYmd]  = useState(''); //작성일시
  const [ctnt_tit,      setCtntTit]     = useState(''); //제목
  const [ctnt_cn,       setCtntCn]      = useState(''); //글 내용
  const [ctnt_thmbnl,   setCtntThmbnl]  = useState(''); //썸네일
  const [ctnt_ctgry,    setCtntCtgry]   = useState(''); //카테고리
  const [ctnt_img_url1, setCtntImgUrl1] = useState(''); //이미지1 URL
  const [ctnt_img_url2, setCtntImgUrl2] = useState(''); //이미지2 URL
  const [ctnt_img_url3, setCtntImgUrl3] = useState(''); //이미지3 URL
  const [ctnt_status,   setCtntStatus]  = useState(''); //컨텐츠 상태
  const [ctnt_shr_url,  setCtntShrUrl]  = useState(''); //컨텐츠 공유 URL

  //컨텐츠 정보 불러오기
  useEffect(() => {

    const ctntObj = dbService.collection('ctnt');
    const ctntSnapshot = await ctntObj.where("ctnt_uid", "==", clickedCtntUid).get();
    if(!ctntSnapshot.empty){
      setCtntUid(ctntSnapshot.ctnt_uid);
      setCtntType(ctntSnapshot.ctnt_type);
      setCtntWrtUid(ctntSnapshot.ctnt_wrt_uid);
      setCtntWrtYmd(ctntSnapshot.ctnt_wrt_ymd);
      setCtntTit(ctntSnapshot.ctnt_tit);
      setCtntCn(ctntSnapshot.ctnt_cn);
      setCtntThmbnl(ctntSnapshot.ctnt_thmbnl);
      setCtntCtgry(ctntSnapshot.ctnt_ctgry);
      setCtntImgUrl1(ctntSnapshot.ctnt_img_url1);
      setCtntImgUrl2(ctntSnapshot.ctnt_img_url2);
      setCtntImgUrl3(ctntSnapshot.ctnt_img_url3);
      setCtntStatus(ctntSnapshot.ctnt_status);
      setCtntShrUrl(ctntSnapshot.ctnt_shr_url);

    } else {
      alert('잘못된 컨텐츠입니다.');
      return;
    }
  }, []);

}

export default PostingData;
