/*import React, { useState } from 'react';
import '../style/AddNew.css';

interface CarData {
  first_name: string;
  last_name: string;
  email: string;
  car_make: string;
  car_model: string;
  vin: string;
  manufactured_date: string;
  age_of_vehicle: number;
}

interface AddNewProps {
  setIsAddNewOpen: (isOpen: boolean) => void; 
}
interface AddNewProps {
  setIsUpdtaeOpen: (isOpen: boolean) => void; 
}

const AddNew: React.FC<AddNewProps> = ({ setIsAddNewOpen }) => {
  const [car, setCar] = useState<CarData>({
    first_name: '',
    last_name: '',
    email: '',
    car_make: '',
    car_model: '',
    vin: '',
    manufactured_date: '',
    age_of_vehicle: 1,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCar({
      ...car,
      [name]: name === 'age_of_vehicle' ? Number(value) : value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("save");
    event.currentTarget.submit();
    
  };

  return (
    <div className="modal-overlay">
      <div className="add-new-container">
        <div className="form-header">
          <h2 className="form-title">Add New Vehicle</h2>
          <button className="close-button" onClick={() => setIsAddNewOpen(false)}>
            &times;
          </button>
        </div>

        <form className="add-new-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className='from-name'>First Name:</label>
            <input
              type="text"
              name="first_name"
              value={car.first_name}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className='from-name'>Last Name:</label>
            <input
              type="text"
              name="last_name"
              value={car.last_name}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className='from-name'>Email:</label>
            <input
              type="email"
              name="email"
              value={car.email}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className='from-name'>Car Make:</label>
            <input
              type="text"
              name="car_make"
              value={car.car_make}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className='from-name'>Car Model:</label>
            <input
              type="text"
              name="car_model"
              value={car.car_model}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className='from-name'>VIN:</label>
            <input
              type="text"
              name="vin"
              value={car.vin}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className='from-name'>Manufactured Date:</label>
            <input
              type="date"
              name="manufactured_date"
              value={car.manufactured_date}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className='from-name'>Age Of Vehicle:</label>
            <input
              type="number"
              name="age_of_vehicle"
              value={car.age_of_vehicle}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddNew;*/

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_VEHICLE } from '../AddVehicle'; 
import '../style/AddNew.css';

interface CarData {
  first_name: string;
  last_name: string;
  email: string;
  car_make: string;
  car_model: string;
  vin: string;
  manufactured_date: string;
  age_of_vehicle: number;
}

interface AddNewProps {
  setIsAddNewOpen: (isOpen: boolean) => void;
}

const AddNew: React.FC<AddNewProps> = ({ setIsAddNewOpen }) => {
  const [car, setCar] = useState<CarData>({
    first_name: '',
    last_name: '',
    email: '',
    car_make: '',
    car_model: '',
    vin: '',
    manufactured_date: '',
    age_of_vehicle: 1,
  });

  const [addVehicle] = useMutation(ADD_VEHICLE);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCar({
      ...car,
      [name]: name === 'age_of_vehicle' ? Number(value) : value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addVehicle({
        variables: {
          input: car,
        },
      });
      alert("Vehicle added successfully!");
      setIsAddNewOpen(false);
    } catch (error) {
      console.error("Error adding vehicle:", error);
      alert("Failed to add vehicle.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="add-new-container">
        <div className="form-header">
          <h2 className="form-title">Add New Vehicle</h2>
          <button className="close-button" onClick={() => setIsAddNewOpen(false)}>
            &times;
          </button>
        </div>

        <form className="add-new-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className='form-name'>First Name:</label>
            <input
              type="text"
              name="first_name"
              value={car.first_name}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className='form-name'>Last Name:</label>
            <input
              type="text"
              name="last_name"
              value={car.last_name}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className='form-name'>Email:</label>
            <input
              type="email"
              name="email"
              value={car.email}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className='form-name'>Car Make:</label>
            <input
              type="text"
              name="car_make"
              value={car.car_make}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className='form-name'>Car Model:</label>
            <input
              type="text"
              name="car_model"
              value={car.car_model}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className='form-name'>VIN:</label>
            <input
              type="text"
              name="vin"
              value={car.vin}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className='form-name'>Manufactured Date:</label>
            <input
              type="date"
              name="manufactured_date"
              value={car.manufactured_date}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className='form-name'>Age Of Vehicle:</label>
            <input
              type="number"
              name="age_of_vehicle"
              value={car.age_of_vehicle}
              onChange={handleInputChange}
              required
              className="input-field"
            />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddNew;


