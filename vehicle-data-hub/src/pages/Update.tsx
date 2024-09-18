import React, { useState } from 'react';
import '../style/Update.css';

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

interface UpdateProps {
  setIsUpdateOpen: (isOpen: boolean) => void; 
}

const Update: React.FC<UpdateProps> = ({ setIsUpdateOpen }) => {
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
    console.log('Vehicle Data Submitted: ', car);
  };

  return (
    <div className="modal-overlay">
      <div className="add-new-container">
        <div className="form-header">
          <h2 className="form-title">Vehicle Update Form</h2>
          <button className="close-button" onClick={() => setIsUpdateOpen(false)}>
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

          <button type="submit" className="submit-button">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
