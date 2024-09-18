import { gql } from '@apollo/client';

export const ADD_VEHICLE = gql`
  mutation AddVehicle($input: VehicleInput!) {
    addVehicle(input: $input) {
      id
      first_name
      last_name
      email
      car_make
      car_model
      vin
      manufactured_date
      age_of_vehicle
    }
  }
`;
