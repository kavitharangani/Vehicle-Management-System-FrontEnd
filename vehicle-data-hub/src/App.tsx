import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import './App.css';
import { FaBell } from 'react-icons/fa';
import AddNew from './pages/AddNew';
import Update from './pages/Update';
import NotificationPopup from './pages/NotificationPopup';

interface CarData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  car_make: string;
  car_model: string;
  vin: string;
  manufactured_date: string;
  age_of_vehicle: number;
}

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [carData] = useState<CarData[]>([
    
    {
      id: 1,
      first_name: 'Kavindya',
      last_name: 'Tharangani',
      email: 'kavi@example.com',
      car_make: 'Toyota',
      car_model: 'Corolla',
      vin: '1HGCM82',
      manufactured_date: '2020-01-15',
      age_of_vehicle: 3,
    },
    {
      id: 2,
      first_name: 'Kavindya',
      last_name: 'Tharangani',
      email: 'kavi@example.com',
      car_make: 'Toyota',
      car_model: 'Corolla',
      vin: '1HGCM82',
      manufactured_date: '2020-01-15',
      age_of_vehicle: 3,
    },
    {
      id: 3,
      first_name: 'na',
      last_name: 'Tharangani',
      email: 'kavi@example.com',
      car_make: 'Toyota',
      car_model: 'Corolla',
      vin: '1HGCM82',
      manufactured_date: '2020-01-15',
      age_of_vehicle: 3,
    },
    {
      id: 4,
      first_name: 'Kavindya',
      last_name: 'Tharangani',
      email: 'kavi@example.com',
      car_make: 'Toyota',
      car_model: 'Corolla',
      vin: '1HGCM82',
      manufactured_date: '2020-01-15',
      age_of_vehicle: 3,
    },
    {
      id: 5,
      first_name: 'na',
      last_name: 'Tharangani',
      email: 'kavi@example.com',
      car_make: 'Toyota',
      car_model: 'Corolla',
      vin: '1HGCM82',
      manufactured_date: '2020-01-15',
      age_of_vehicle: 5,
    },
    {
      id: 6,
      first_name: 'Kavindya',
      last_name: 'Tharangani',
      email: 'kavi@example.com',
      car_make: 'Toyota',
      car_model: 'Corolla',
      vin: '1HGCM82',
      manufactured_date: '2020-01-15',
      age_of_vehicle: 3,
    },

  ]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4; 
  const [isAddNewOpen, setIsAddNewOpen] = useState<boolean>(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false);
  const [isNotificationPopupVisible, setIsNotificationPopupVisible] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = carData.filter((car) =>
    Object.values(car).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleExport = () => {
    Swal.fire({
      title: 'Exporting Data',
      text: 'Your data is being exported...',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  };

  const handleImport = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      Swal.fire({
        title: 'File Selected',
        text: `Selected file: ${file.name}`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleAddNew = () => {
    setIsAddNewOpen(true);
  };

  const handleDelete = (id: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete the car with ID: ${id}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', `Car with ID: ${id} has been deleted.`, 'success');
      }
    });
  };

  const handleUpdate = () => {
    setIsUpdateOpen(true);
    
  };

  const toggleNotificationPopup = () => {
    setIsNotificationPopupVisible(!isNotificationPopupVisible);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div style={{ padding: '100px' }}>
      <div><h1>WELCOME VEHICLE MANAGE</h1></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ padding: '10px', width: '200px', border: 'none', outline: 'none' }}
        />

        <div>
          <button onClick={handleImport} style={{ marginRight: '10px', padding: '10px 20px' }}>
            Import
          </button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />

          <button onClick={handleExport} style={{ marginRight: '10px', padding: '10px 20px' }}>
            Export
          </button>

          <button onClick={handleAddNew} style={{ marginRight: '10px', padding: '10px 20px' }}>
            Add New
          </button>

          <FaBell
            className="icon notification-icon"
            onClick={toggleNotificationPopup}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      <table border={1} cellPadding="10" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Car Make</th>
            <th>Car Model</th>
            <th>VIN</th>
            <th>Manufactured Date</th>
            <th>Age of Vehicle</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.first_name}</td>
              <td>{car.last_name}</td>
              <td>{car.email}</td>
              <td>{car.car_make}</td>
              <td>{car.car_model}</td>
              <td>{car.vin}</td>
              <td>{car.manufactured_date}</td>
              <td>{car.age_of_vehicle}</td>
              <td>
                <button className="update-btn" onClick={handleUpdate} style={{ marginRight: '5px' }}>
                  Update
                </button>
                <button className="delete-btn" onClick={() => handleDelete(car.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1} style={{ marginRight: '10px' }}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} style={{ marginLeft: '10px' }}>
          Next
        </button>
      </div>

      {isAddNewOpen && (
        <div className="modal">
          <AddNew setIsAddNewOpen={setIsAddNewOpen} /> 
        </div>
      )}

      {isUpdateOpen && (
        <div className="modal">
          <Update setIsUpdateOpen={setIsUpdateOpen} />
        </div>
      )}

      <NotificationPopup
        isVisible={isNotificationPopupVisible}
        onClose={toggleNotificationPopup}
      />
    </div>
  );
};

export default App;
