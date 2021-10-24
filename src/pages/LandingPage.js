import React from 'react'
import {useQuery, gql} from '@apollo/client'
import MainHero from '../components/MainHero/MainHero'
import CategoryDisplay from '../components/CategoryDisplay/CategoryDisplay'
import CardDisplay from '../components/CardDisplay/CardDisplay'

const ANIMALS_QUERY = gql`
  query GetAnimals {
    animals {
      id
      image
      title
      price
      slug
    }
  }
`

function LandingPage() {
  const {loading, error, data} = useQuery(ANIMALS_QUERY)

  if (loading) return <div>loading...</div>
  if (error) return <div>error has occurred</div>
  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data.animals} />
    </div>
  )
}

export default LandingPage
