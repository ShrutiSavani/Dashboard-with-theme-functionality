import React from 'react'

const OverViewCard = ({ overViewCardData }) => {
    return (
        <div className='col-12 col-sm-6 col-lg-3 overview-box'>
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
}

export default OverViewCard