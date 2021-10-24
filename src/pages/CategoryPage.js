import React from 'react'
import {useQuery, gql} from '@apollo/client'
import {useParams} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import CardDisplay from '../components/CardDisplay/CardDisplay'

const CATEGORY_WITH_ANIMALS = gql`
  query GetCategoryWithAnimals($slug: String!) {
    category(slug: $slug) {
      id
      image
      category
      slug
      animals {
        id
        title
        price
        image
      }
    }
  }
`

function CategoryPage() {
  const {slug} = useParams()
  const {loading, error, data} = useQuery(CATEGORY_WITH_ANIMALS, {
    variables: {slug},
  })

  if (loading) return <div>loading...</div>
  if (error) return <div>error has occurred</div>

  const {category, animals} = data.category
  return (
    <div className="py-5">
      <Container>
        <h1 className="text-capitalize">
          {category}
          <CardDisplay animals={animals} />
        </h1>
      </Container>
    </div>
  )
}

export default CategoryPage
