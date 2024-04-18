import React from 'react'

const DashboardCard = ({cardData}) => {
  return (
    <div className="col-12 col-sm-6 col-lg-3 dashboard p-0 ">
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
  )
}

export default DashboardCard