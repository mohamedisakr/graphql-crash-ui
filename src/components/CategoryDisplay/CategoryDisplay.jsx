import React, {useState} from 'react'
import {useQuery, gql} from '@apollo/client'
import './CategoryDisplay.css'
import {Container} from 'react-bootstrap'
import animals from '../../assets/images'

import {Link} from 'react-router-dom'

const CATEGORIES_QUERY = gql`
  query GetCategories {
    categories {
      id
      image
      category
      slug
    }
  }
`

function CategoryDisplay() {
  const {loading, error, data} = useQuery(CATEGORIES_QUERY)

  if (loading) return <div>loading...</div>
  if (error) return <div>error has occurred</div>
  return (
    <div className="CategoryDisplay">
      <Container className="CategoryDisplay-container">
        {data.categories.map(({category, slug, image}) => {
          return (
            <Link
              to={`/products/${slug}`}
              className="CategoryDisplay-card-container"
            >
              <div className="CategoryDisplay-card">
                <img src={animals[image]} />
              </div>
              <h3>{category}</h3>
            </Link>
          )
        })}
      </Container>
    </div>
  )
}

export default CategoryDisplay
