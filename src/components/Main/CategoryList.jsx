import React from 'react'
import { Link } from 'react-router-dom'
function CategoryList({item,handleCategoryList}) {
    return (
        <div className='main-category-content-wrap'>
            <Link to={`/category_articles/${item.name}`}>
                <div className='category' onClick={handleCategoryList}>
                    <img src={item.img} alt='catgory-image' />
                </div>
            </Link>
            <p className='main-category-content-text'>{item.name}</p>
        </div>
    )
}

export default CategoryList