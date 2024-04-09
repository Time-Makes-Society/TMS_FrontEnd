import React from 'react'
const dummydata=[
    {id:1, name:'스포츠'},
    {id:2, name:'IT/과학'},
    {id:3, name:'정치'},
    {id:4, name:'경제'},
    {id:5, name:'연재'},
    {id:6, name:'연예'},
    {id:7, name:'문화'},
    {id:8, name:'포토'},
    {id:9, name:'국제'},
]
function Category() {
  return (
    <div className='category-wrap'>
        <div className='category-header'>
            <h1>관심있는 주제를 모두 선택해주세요</h1>
            <p>관심있는 주제를 한가지 이상 선택해 주세요.<br/>
            내게 꼭 맞는 뉴스를 추천해 드릴게요!
            </p>
            
        </div>
        <div className='category-content-wrap'>
            {dummydata.map((data)=>{
                return (
                    <div className='category-content'> {data.name} </div>
                )
                   
                
            })}
        </div>
    </div>
  )
}

export default Category