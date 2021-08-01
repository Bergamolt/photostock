import React from 'react'
import './Categories.css'

export const Categories = ({}) => {

  const categories = [
    'Editorial',
    'Summer on Film',
    'Wallpapers',
    'Nature',
    'Experimental',
    'People',
    'Architecture'
  ]

  return (
    <div className="categories">
      {
        categories.map(category => (
          <div>
            <span>{category}</span>
          </div>
        ))
      }
    </div>
  )
}
