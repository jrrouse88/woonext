import { gql } from '@apollo/client';
import Link from 'next/link';
import client from '../../apollo-client';

export default function Products({ products }) {
  return (
    <>
      <h1>Products Page</h1>
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col l3">
              <div className="card">
                <div className="card-image">
                  <img src={product.image.sourceUrl} alt={product.image.altText}/>
                  <span className="card-title">{product.name}</span>
                </div>
                <div className="card-content">
                  <p>{product.shortDescription}</p>
                </div>
                <div className="card-action">
                  <Link href={`/products/${encodeURIComponent(product.slug)}`}>
                    <a>View More</a>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Products {
        products {
          nodes {
            slug
            name
            shortDescription(format: RAW)
            description(format: RAW)
            image {
              sourceUrl
              altText
            }
            productTags {
              nodes {
                name
              }
            }
            ... on SimpleProduct {
              onSale
              price
              regularPrice
            }
            ... on VariableProduct {
              onSale
              price
              regularPrice
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      products: data.products.nodes
    }
  }
}