import React, { useState } from 'react';
import './ProfileInfo.css';

function ProfileInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullname: '',
    email: '',
    phone: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Save updated profile (local update only)
  const handleSave = () => {
    console.log('Profile updated:', profile);
    setIsEditing(false);
  };

  // Mock logout function
  const logOut = () => {
    console.log('User logged out');
  };

  return (
    <div>
      <div className="productCard-border p-3">
        <h3 className="san-font">Profile</h3>
        <hr />
        <div className="row">
          <div className="col-12">
            <label className="san-font">Full Name:</label>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-user me-2"></i>
              <input
                type="text"
                className=" p-1"
                name="firstName"
                value={profile.fullname}
                onChange={handleInputChange}
                disabled={!isEditing}
                aria-label="First Name"
              />
            </div>
          </div>

         

          <div className="col-12 mt-2">
            <label className="san-font">Email:</label>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-envelope me-2"></i>
              <input
                type="email"
                className=" p-1"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                aria-label="Email"
              />
            </div>
          </div>

          <div className="col-12 mt-2">
            <label className="san-font">Phone Number:</label>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-phone me-2"></i>
              <input
                type="tel"
                className="ol p-1"
                name="phone"
                value={profile.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                aria-label="Phone Number"
              />
            </div>
          </div>

          <div className="col-12 mt-3">
            <p className="san-font">
              Change Password{' '}
              <span className="san-font text-danger cursor-pointer">Click here</span>
            </p>
          </div>

          <p className="text-danger logout-butt cursor-pointer" onClick={logOut}>
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </p>

          <div className="col-12">
            {isEditing ? (
              <button className="btn btn-success mt-2 shadow-none" onClick={handleSave}>
                Save
              </button>
            ) : (
              <button className="btn btn-outline-primary shadow-none mt-2" onClick={toggleEdit}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
