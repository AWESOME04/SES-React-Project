import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "./school-logo.png";
import "./Dashboard.css";

const images = [
    require('./1.jpg'),
    require('./2.jpg'),
    require('./3.jpg'),
    require('./4.jpg'),
    require('./5.jpg'),
];

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <div className="sidebar-logo-container">
                    <img className="sidebar-logo" src={logo} alt="SES Logo" />
                </div>
                <h1 className="sidebar-heading">SES Dashboard</h1>
                <ul className="sidebar-menu">
                    <li className="sidebar-menu-item">
                        <Link to="/dashboard" className="sidebar-menu-link">
                            Home
                        </Link>
                    </li>
                    <li className="sidebar-menu-item">
                        <Link to="/dashboard/profile" className="sidebar-menu-link">
                            Profile
                        </Link>
                    </li>
                    <li className="sidebar-menu-item">
                        <Link to="/dashboard/courses" className="sidebar-menu-link">
                            Courses
                        </Link>
                    </li>
                    <li className="sidebar-menu-item">
                        <Link to="/dashboard/grades" className="sidebar-menu-link">
                            Grades
                        </Link>
                    </li>
                    <li className="sidebar-menu-item">
                        <Link to="/dashboard/schedule" className="sidebar-menu-link">
                            Schedule
                        </Link>
                    </li>
                </ul>
                {/* Additional Quick Links */}
                <div className="sidebar-quick-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>
                            <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjktrSPsZ2AAxVMh1wKHZ_LDu0QFnoECBQQAQ&url=https%3A%2F%2Fienabler.ug.edu.gh%2Fpls%2Fprodi41%2Fw99pkg.mi_login&usg=AOvVaw2ulwdt-4iU9i8kDQqxlnmT&opi=89978449" target="_blank" rel="noopener noreferrer">MISWEB</a>
                        </li>
                        <li>
                            <a href="https://sakai.ug.edu.gh/" target="_blank" rel="noopener noreferrer">SAKAI</a>
                        </li>
                        <li>
                            <a href="https://sts.ug.edu.gh/" target="_blank" rel="noopener noreferrer">STS</a>
                        </li>
                        <li>
                            <a href="https://www.ug.edu.gh/" target="_blank" rel="noopener noreferrer">UG Website</a>
                        </li>
                        <li>
                            <a href="https://balme.ug.edu.gh/" target="_blank" rel="noopener noreferrer">UG Library</a>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-footer"></div>
            </div>
            <div className="main-content">
                <h1 className="main-heading">Welcome to SES Dashboard</h1>
                <p className="main-text">
                    "Science can amuse and fascinate us all, but it is engineering that
                    changes the world." - Isaac Asimov
                </p>
                <p className="main-text">
                    "The engineer has been, and is, a maker of history." - James
                    Kip Finch
                </p>
                <p className="main-text">
                    "Scientists study the world as it is; engineers create the world that
                    has never been." - Theodore von Karman
                </p>
                <p className="main-text">
                    "The way to succeed is to double your failure rate." - Thomas J.
                    Watson
                </p>
                <div className="slideshow-container">
                    <Carousel showThumbs={false} infiniteLoop autoPlay>
                        {images.map((imageUrl, index) => (
                            <div key={index}>
                                <img className="slideshow-image" src={imageUrl} alt={`Slide ${index}`} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
