import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import img_1 from '../../../src/images/img_1.jpg';
import img_2 from '../../../src/images/img_2.jpeg';
import img_3 from '../../../src/images/img_3.jpeg';

const HomePage = () => {
  return (
    <div>
        <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1 className='text'>Broki</h1>
        </Link>
      </div>
     
      <div className="search-bar">
  <select>
    <option value="">Location</option>
    <option value="location1">Location 1</option>
    <option value="location2">Location 2</option>
    {/* Add more location options */}
  </select>
  <select>
    <option value="">Outlet Type</option>
    <option value="outletType1">Outlet Type 1</option>
    <option value="outletType2">Outlet Type 2</option>
    {/* Add more outlet type options */}
  </select>
  <select>
    <option value="">Outlet Zone</option>
    <option value="zone1">Zone 1</option>
    <option value="zone2">Zone 2</option>
    {/* Add more outlet zone options */}
  </select>
  <select>
    <option value="">Outlet Status</option>
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
    {/* Add more outlet status options */}
  </select>
  <button className='navbar_button'>Search</button>
</div>


    </nav>
      <div className="content">
        <h2>Check out these amazing outlets recently listed with us</h2>
        <div className='hotDeals'>
        <Card
           imageUrl={img_1}
            title="Base kitchen Space available for lease in Dwarka Sector 3"
            area="22500"
            monthlyRent="₹ 50,000"
            monthlySales="₹ 2,00,000"
          />
          <Card
            imageUrl={img_2}
            title="Cloud Kitchen For lease in Zamrudpur, loction GK"
            area="30000"
            monthlyRent="₹ 50,000"
            monthlySales="₹ 2,00,000"
          />
          <Card
           imageUrl={img_3}
            title="Base Kitchen For Lease in Safdarjung Enclave"
            monthlyRent="₹ 50,000"
            monthlySales="₹ 8 Lacs"
            />
        </div>
      </div>
    </div>
  );
};



const Card = ({ imageUrl, title, area, monthlyRent, monthlySales }) => (
  <div className="card">
    <img src={imageUrl} alt="Deal" />
    <h3>{title}</h3>
    <div className="details">
      <p>Area: {area} sq ft</p>
      <p>Monthly Rent: {monthlyRent}</p>
      <p>Monthly Sales: {monthlySales}</p>
    </div>
    <div className="buttons">
      <button className="talk-button">Talk to Us</button>
      <button className="share-button">Share</button>
    </div>
  </div>
);


export default HomePage;