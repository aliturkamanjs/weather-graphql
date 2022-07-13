import { gql } from '@apollo/client'

export const GET_WEATHER = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      country
      name
      coord {
        lon
        lat
      }
      weather {
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          visibility
          humidity
        }
        timestamp
        summary {
          title
          description
          icon
        }
      }
    }
  }
`
