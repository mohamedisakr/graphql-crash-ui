import React from 'react'
import {useQuery, gql} from '@apollo/client'
import './MainHero.css'
import animals from '../../assets/images'
import {Container} from 'reactstrap'

function MainHero() {
  const {loading, error, data} = useQuery(gql`
    {
      mainCards {
        title
        image
      }
    }
  `)

  if (loading) return <div>loading...</div>
  if (error) return <div>error has occurred</div>
  return (
    <div className="MainHero">
      <Container>
        <div className="header-container">
          <h2>
            Find your <br /> new four-legged <br /> best friend
          </h2>
          <img src={animals.rhino} />
        </div>
        <div className="cards-container">
          {data.mainCards.map((card, index) => {
            return (
              <div key={index} className="card">
                <h3>{card.title}</h3>
                <img src={animals[card.image]} style={{width: '100%'}} />
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default MainHero
