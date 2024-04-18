import React from 'react';
import data from '../data.json'
import DashboardCard from './DashboardCard';
import OverViewCard from './OverViewCard';

const Home = ({ theme, toggleTheme }) => {
  return (
    <div className="main-container pt-5">
      <div className="container ">
        <div className="container p-0 head mb-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className='heading-text fw-bolder fs-2'>
                Social Media Dashboard
              </div>
              <div className="row">
                <div className="col">
                  <div className="fw-bold card-text">Total Followers: 23,004</div>
                </div>
              </div>
            </div>

            <div className="text-secondary opacity-100 d-md-none">
              <hr />
            </div>
            <div className="col-12 col-md-auto ">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto col-md-auto ">
                  <div className='heading-text fw-bold'>{theme} Mode</div>
                </div>
                <div className="col-auto col-md-auto ">
                  <div className="form-check form-switch position-relative">
                    <div className={`${theme == 'light' ? 'd-none' : ''} toggle-cir position-absolute`} onClick={toggleTheme}></div>
                    <input
                      className="form-check-input border"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      onChange={toggleTheme}
                      checked={theme === 'dark'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" container dashboard-container">
          <div className=" row gap-4  justify-content-center justify-content-sm-start">
            {data && data.cardsData.map((cardData, index) => {
              return (
                <DashboardCard key={index} cardData={cardData} />
              );
            })}
          </div>
        </div>

        <div className="container my-5 p-0">
          <div className="row">
            <div className="card-text fw-bold fs-3 overview-text">
              Overview - Today
            </div>
          </div>
        </div>

        <div className='container overview-container mb-4'>
          <div className='row  gap-4 justify-content-center justify-content-sm-start'>
            {
              data && data.overViewCardsData.map((overViewCardData, index) => {
                return (
                  <OverViewCard key={index} overViewCardData={overViewCardData} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
