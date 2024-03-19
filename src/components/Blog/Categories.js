import React from 'react'
import Category from './Category'
import { slug } from 'github-slugger'

const Categories = ({categories, currentSlug}) => {
  return (
    <div className=' px-12  mt-10 border-t-2 text-dark  border-b-2 border-solid border-gray/80 py-4 flex items-start flex-wrap font-medium '>
        {
            categories.map(cat => 
            <Category  
            key={cat} 
            link={`/categories/${cat}`} name={cat} 
            active={currentSlug === slug(cat)}
            />)
        }
    </div>
  )
}

export default Categories