import React, { useEffect, useState } from 'react'
import './style.css'
import './Responsive.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from 'react-modal';


function FilterCourse() {
    const [sortOrder, setSortOrder] = useState("");
    const categories = ["Web Development",
        "Backend Development",
        "Data Science",
        "Machine Learning",
        "Artificial Intelligence",
        "Cloud Computing",
        "Cyber Security",
        "Mobile Development",
        "Game Development",
        "Software Engineering",];
    const levels = ["Beginner", "Intermediate", "Advanced"];
    const languages = ["English", "Hindi"];
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const SortChange = (event) => {
        setSortOrder(event.target.value);
    };
    const [selectedFilters, setSelectedFilters] = useState({
        categories: [],
        levels: [],
        languages: [],
    });

    const handleCheckboxChange = (type, value) => {
        setSelectedFilters((prev) => {
            const updatedValues = prev[type].includes(value)
                ? prev[type].filter((item) => item !== value) // Remove if already selected
                : [...prev[type], value]; // Add if not selected
            return { ...prev, [type]: updatedValues };
        });
    };

    const handleApplyFilters = () => {
        console.log("Selected Filters:", selectedFilters);
        setPopup(false);
    };
    const [popup, setPopup] = useState(false)
    useEffect(() => {
        AOS.init({
            once: true, // Whether animation should happen only once
        });
    }, []);
    return (
        <div>
            <div className="courseCard-border">
                <div className='d-flex justify-content-md-between  flex-wrap'>
                    <div className='d-flex mt-1'>
                        <h4>All Courses</h4>
                        <input type="search" placeholder='Search' className='ms-2 search-course ' />
                    </div>
                    <div></div>
                    <div className='mt-2 d-flex'>
                        <button className='btn filter-button shadow-none' onClick={() => setPopup(true)}>Filter</button>
                        <select name="sort" id="sort" className="p-2 ms-2 shadow-none t" value={sortOrder} onChange={SortChange}>

                            <option value="lowToHigh">Price Low to High</option>
                            <option value="highToLow">Price High to Low</option>
                        </select>
                    </div>
                </div>
                <div>
                    <hr className="w-100 mt-1" />
                </div>
                <Modal isOpen={popup} style={customStyles}>
                    <div className="d-flex justify-content-end">
                        <i className="fa-solid fa-x cursor-p" onClick={() => setPopup(false)}></i>
                    </div>

                    <div className="d-flex p-2">
                        {/* Category Selection */}
                        <div className="me-4">
                            <h6>Category</h6>
                            {categories.map((category, index) => (
                                <div key={index}>
                                    <input
                                        type="checkbox"
                                        id={`category${index}`}
                                        value={category}
                                        checked={selectedFilters.categories.includes(category)}
                                        onChange={() => handleCheckboxChange("categories", category)}
                                    />
                                    <label htmlFor={`category${index}`} className="ps-1">
                                        {category}
                                    </label>
                                    <br />
                                </div>
                            ))}
                        </div>

                        {/* Level Selection */}
                        <div className="me-4">
                            <h6>Level</h6>
                            {levels.map((level, index) => (
                                <div key={index}>
                                    <input
                                        type="checkbox"
                                        id={`level${index}`}
                                        value={level}
                                        checked={selectedFilters.levels.includes(level)}
                                        onChange={() => handleCheckboxChange("levels", level)}
                                    />
                                    <label htmlFor={`level${index}`} className="ps-1">
                                        {level}
                                    </label>
                                    <br />
                                </div>
                            ))}
                        </div>

                        {/* Language Selection */}
                        <div>
                            <h6>Language</h6>
                            {languages.map((language, index) => (
                                <div key={index}>
                                    <input
                                        type="checkbox"
                                        id={`language${index}`}
                                        value={language}
                                        checked={selectedFilters.languages.includes(language)}
                                        onChange={() => handleCheckboxChange("languages", language)}
                                    />
                                    <label htmlFor={`language${index}`} className="ps-1">
                                        {language}
                                    </label>
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Apply Button */}
                    <div className="d-flex justify-content-end">
                        <button className="btn filter-button shadow-none" onClick={handleApplyFilters}>
                            Apply
                        </button>
                    </div>
                </Modal>

                <div className="courseCard-container">
                    <div className="courseCard-box" data-aos="zoom-in-up" data-aos-duration="1000">
                        <div className="courseCard-img-box">
                            <img src="https://fireship.io/courses/react/img/featured.png" alt="" className="courseCard-img" />
                        </div>
                        <div className='courseCard-content'>
                            <h4>₹ 800</h4>
                            <h5>React - The full course</h5>
                            <p className='m-0 light-text'>Created by  <strong>Ayad</strong></p>
                            <p className='m-0 light-text'>Beginner</p>
                        </div>
                    </div>
                    <div className="courseCard-box" data-aos="zoom-in-up" data-aos-duration="1000">
                        <div className="courseCard-img-box">
                            <img src="https://fireship.io/courses/react/img/featured.png" alt="" className="courseCard-img" />
                        </div>
                        <div className='courseCard-content'>
                            <h4>₹ 800</h4>
                            <h5>React - The full course</h5>
                            <p className='m-0 light-text'>Created by  <strong>Ayad</strong></p>
                            <p className='m-0 light-text'>Beginner</p>
                        </div>
                    </div>
                    <div className="courseCard-box" data-aos="zoom-in-up" data-aos-duration="1000">
                        <div className="courseCard-img-box">
                            <img src="https://fireship.io/courses/react/img/featured.png" alt="" className="courseCard-img" />
                        </div>
                        <div className='courseCard-content'>
                            <h4>₹ 800</h4>
                            <h5>React - The full course</h5>
                            <p className='m-0 light-text'>Created by  <strong>Ayad</strong></p>
                            <p className='m-0 light-text'>Beginner</p>
                        </div>
                    </div>
                    <div className="courseCard-box" data-aos="zoom-in-up" data-aos-duration="1000">
                        <div className="courseCard-img-box">
                            <img src="https://fireship.io/courses/react/img/featured.png" alt="" className="courseCard-img" />
                        </div>
                        <div className='courseCard-content'>
                            <h4>₹ 800</h4>
                            <h5>React - The full course</h5>
                            <p className='m-0 light-text'>Created by  <strong>Basil Muneer</strong></p>
                            <p className='m-0 light-text'>Beginner</p>
                        </div>
                    </div>
                    <div className="courseCard-box" data-aos="zoom-in-up" data-aos-duration="1000">
                        <div className="courseCard-img-box">
                            <img src="https://fireship.io/courses/react/img/featured.png" alt="" className="courseCard-img" />
                        </div>
                        <div className='courseCard-content'>
                            <h4>₹ 800</h4>
                            <h5>React - The full course</h5>
                            <p className='m-0 light-text'>Created by  <strong>Basil Muneer</strong></p>
                            <p className='m-0 light-text'>Beginner</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FilterCourse
