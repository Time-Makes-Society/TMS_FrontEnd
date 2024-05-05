import React, { useEffect, useState } from 'react'

import BookmarkEmpty from '../../assets/feed/bookmark-emptyy.svg';
import BookmarkFill from '../../assets/feed/bookmark-fill.svg';
import Option from '../../assets/feed/option.svg';
import axios from 'axios';
function FeedContent({feed,setFeedList,onClick,feedState}) {
    const [bookmarkState,setBookmarkState] = useState(false);
    const memberId = localStorage.getItem('memberId')
    useEffect(()=>{
        if(feedState==='스크랩'){
            setBookmarkState(true);
        }
        
    },[])
    
    const handleBookmark=(id)=>{
        setBookmarkState(!bookmarkState);
        // 메인페이지에서 scrap get api불러옴 -> 리스트 비교
        // const postBookmark= async() =>{
        //     try{
        //         const response = await axios.post('/api/scrap',{
        //             "memberId": memberId,
        //             "articleId": id
        //         })
        //     }
        //     catch(error){
        //         new Error(error);
        //     }
        // }
        //즐겨찾기 삭제하는 부분
        if(feedState==='스크랩'){
            const deleteBookmark=async() => {
                try{
                    // const response = await axios.delete('/api/scrap/cancel',{
                    //     "memberId": memberId,
                    //     "articleId": id,
                    // })
                    // console.log(response.data)
                    setFeedList((prev)=>(prev.filter((item)=> item.uuidArticleId!==id)))
                }
                catch(error){
                    new Error(error)
                }
            }
            deleteBookmark()
        }
        else{

        }
    }
    return (
        <div className='feed-content' >
            <img src={feed.image} className='feed-image' alt='iamgeUrl' onClick={onClick}/>
            <div className='feed-desc-wrap'>
                <p className='feed-desc-title'>{feed.title}</p>
                <p className='feed-desc-publisher'>{feed.category}</p>
                <img src={bookmarkState ? BookmarkFill : BookmarkEmpty} className='scrab' alt='scrab-image' onClick={() =>handleBookmark(feedState==='스크랩' ? feed.uuidArticleId : feed.id)} />
               
                <img src={Option} className='option' alt='option-image' />
            </div>

        </div>
    )
}

export default FeedContent