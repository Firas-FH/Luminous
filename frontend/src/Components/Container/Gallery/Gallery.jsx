import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import './GalleryStyle.css'
import { Link } from 'react-router-dom';


function Gallery() {
    const [data, setData] = useState([]);
    const [activeButton, setActiveButton] = useState(null);
    const [collection, setCollection] = useState([]);
    
    const GalleryData = [
      {
        titile: "Work Events",
        image: './Picture/Gallery/work2.jfif',
      },
      {
        titile: "Seasonal Events",
        image: './Picture/Gallery/season3.jfif',
      },
      {
        titile: "Private Parties",
        image: './Picture/Gallery/private1.jfif',
      },
      {
        titile: "Work Events",
        image: './Picture/Gallery/work8.jfif',
      },
      {
        titile: "Private Parties",
        image: './Picture/Gallery/private2.jfif',
      },
      {
        titile: "Seasonal Events",
        image: './Picture/Gallery/season5.jfif',
      },
      {
        titile: "Private Parties",
        image: './Picture/Gallery/private5.jfif',
      },
      {
        titile: "Seasonal Events",
        image: './Picture/Gallery/season7.jfif',
      },
      {
        titile: "Private Parties",
        image: './Picture/Gallery/private9.jfif',
      },
      {
        titile: "Seasonal Events",
        image: './Picture/Gallery/season8.jfif',
      },
      {
        titile: "Private Parties",
        image: './Picture/Gallery/private6.jfif',
        
      },
      {
        titile: "Work Events",
        image: './Picture/Gallery/work9.jfif',
      },
    ];
  
    useEffect(() => {
      setData(GalleryData);
      
      setCollection([...new Set(GalleryData.map((item) => item.titile))]);
    }, []);
  
    const gallery_filter = (itemData) => {
      const filterData = GalleryData.filter((item) => item.titile == itemData);
      setData(filterData);
    };

    const handleButtonClick = (title) => {
      setActiveButton(title); 
      if (title!== 'All') { 
        setData(GalleryData.filter(item => item.titile === title));
      } else {
        setData(GalleryData); 
      }
    };
  return (
    <>
    <div className='bg-secondarybg'>
      <div className="mx-[9%] py-[40px] ">
      <p className="text-headerscolor font-montserratefont font-semibold text-[20px] mb-[20px]">
            Gallery
          </p>
          <Container className="galleryWrapper">
            <div className="filterItem">
              <ul>
                <li>
                  <button onClick={() => {setData(GalleryData); setActiveButton(null);}}
                    className={activeButton === null? 'active' : ''}>
                      <p className='pt-2 pb-0 text-[12px] sm:text-[12px] md:text-[16px] lg:text-[16px]'>All</p>
                    </button>
                </li>
                {collection.map((item, i) => (
                  <li key={i}>
                    <button
                  
                      onClick={() => {
                        handleButtonClick(item)
                        gallery_filter(item)
                      }}
                      className={activeButton === item? 'active' : '' }
                    >
                      <p className='pt-2 pb-0 text-[12px] sm:text-[12px] md:text-[16px] lg:text-[16px]'>{item}</p>
                      
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <Row className="galleryContainer mb-5 mx-0">
              {data.map((item) => (
                <Col  lg='3' md='6'  className="galleryItem my-1 mx-0 px-1">
                  <div data-aos="zoom-out" data-aos-duration="1500">
                    <img src={item.image} alt=''/>
                    <div className="overlay">
                      <div className="overlay-content">
                        {/* <p>{item.titile}</p> */}
                        <Link to={'/createevent'} className='font-montserratefont'>Plan Your Party</Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
      </div>
    </div>
    </>
  )
}

export default Gallery