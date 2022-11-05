export const PRODUCTS_QUERY = `
{
  products{
    data{
			id
      attributes{
        title
        slug
        price
        image{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}
`;

export const GET_PRODUCT_QUERY = `
  query getProduct($slug: String!){
    products(filters:{slug:{eq:$slug}}){
      data{
        attributes{
          title
          slug
          description
          price
          image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;
