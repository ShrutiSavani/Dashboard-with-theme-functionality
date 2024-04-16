import React from 'react';
import data from '../data.json'
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
                  <div className='heading-text fw-bold'>{theme == 'light' ? 'Dark Mode' : 'Light Mode'}</div>
                </div>
                <div className="col-auto col-md-auto ">
                  <div className="form-check form-switch position-relative">
                    <div className={`${theme == 'light' ? 'd-none' : ''} toggle-cir position-absolute`}></div>
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
                <div key={index} className="col-12 col-sm-6 col-lg-3 dashboard p-0 ">
                  <div className="text-center my-4">
                    <img src={cardData.appIconImage} className='pe-2' />
                    <div className="d-inline fw-bold card-text dashboard-name ">
                      {cardData.headerName}
                    </div>
                  </div>
                  <div className=" text-center fw-bolder heading-text dashboard-rank lh-1 my-1">
                    {cardData.cardScore}
                  </div>
                  <div className=" text-center card-text dashboard-followers">
                    {cardData.commType.split('').join(' ')}
                  </div>
                  <div className="text-center my-3">
                    <img src={cardData.arrowImg} className='pe-2' />
                    <div
                      className={`d-inline fw-bold ${cardData.arrowImg == '../assets/icon-down.svg' ? 'text-danger dashboard-arrow-text' : 'dashboard-arrow-text'}`}
                    >
                      {cardData.todayScore} <span>Today</span>
                    </div>
                  </div>
                </div>
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
                  <div key={index} className='col-12 col-sm-6 col-lg-3 overview-box'>
                    <div className="d-flex justify-content-between align-items-center my-4">
                      <div className='fw-bold card-text overview-text'>{overViewCardData.overViewType}</div>
                      <img className="" src={overViewCardData.appIconImage} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className='fw-bold heading-text overview-rank'>{overViewCardData.overViewScore}</div>
                      <div>
                        <img src={overViewCardData.arrowImg} className='pe-2' />
                        <div className={`d-inline fw-bold overview-pr ${overViewCardData.arrowImg == '../assets/icon-down.svg' ? 'text-danger dashboard-arrow-text' : 'dashboard-arrow-text'}`}>{overViewCardData.todayScore}%</div>
                      </div>
                    </div>
                  </div>
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
