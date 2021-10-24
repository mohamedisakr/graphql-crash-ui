import React from 'react'
import {useQuery, gql} from '@apollo/client'
import {Container} from 'react-bootstrap'
import animals from '../../assets/images'
import star from '../../assets/svg/star.svg'
import './AnimalPage.css'
import {useParams} from 'react-router-dom'

const ANIMAL_VIEW_QUERY = gql`
  query GetAnimal($slug: String!) {
    animal(slug: $slug) {
      id
      image
      title
      price
      description
      stock
    }
  }
`

function AnimalPage() {
  const {slug} = useParams()
  const {loading, error, data} = useQuery(ANIMAL_VIEW_QUERY, {
    variables: {slug},
  })

  if (loading) return <div>loading...</div>
  if (error) return <div>error has occurred</div>
  const {id, image, title, price, description, stock} = data.animal
  return (
    <div className="py-5">
      <Container>
        <div key={id} className="d-flex">
          <img
            src={animals[image]}
            className="product-img"
            style={{marginRight: '1rem'}}
          />
          <div className="text-container">
            <h1>{title}</h1>
            <div className="star-container">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <div className="rating-stock-container">
                <p>1402 rating</p>
                <p>{stock} in stock</p>
              </div>
            </div>
            <div className="about-container">
              <h4>About this Animal</h4>
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
          </div>
          <div className="cart-container border">
            <p className="price">
              <span>CAD$ {price}</span>
            </p>
            <p className="delivery-time">
              FREE delivery: Thursday, Feb 25 Details
              <button className="buy-now-btn" style={{marginTop: '2rem'}}>
                Add to Cart
              </button>
              <button>Buy Now</button>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AnimalPage
