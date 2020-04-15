import React from "react"
import PropTypes from "prop-types"

const EstimateResult = ({ impactData }) => (
  <div className="estimate-result mt-5">
    <h2>Estimate For {impactData.data.region.name}</h2>
    <div className="row">
      <div className="col-md-6">
        <h3>Impact</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Currently Infected
            <span className="badge badge-covid badge-pill">
              {impactData.impact.currentlyInfected}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Infections by Requested Time
            <span className="badge badge-covid badge-pill">
              {impactData.impact.infectionsByRequestedTime}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Severe Cases by Requested Time
            <span className="badge badge-covid badge-pill">
              {impactData.impact.severeCasesByRequestedTime}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Hospital Beds by Requested Time
            <span className="badge badge-covid badge-pill">
              {impactData.impact.hospitalBedsByRequestedTime}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Cases For ICU by Requested Time
            <span className="badge badge-covid badge-pill">
              {impactData.impact.casesForICUByRequestedTime}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Cases For Ventilators by Requested Time
            <span className="badge badge-covid badge-pill">
              {impactData.impact.casesForVentilatorsByRequestedTime}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Dollars In Flight
            <span className="badge badge-covid badge-pill">
              $ {impactData.impact.dollarsInFlight}
            </span>
          </li>
        </ul>
      </div>

      <div className="col-md-6">
        <h3>Severe Impact</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Currently Infected
            <span className="badge badge-covid badge-pill">
              {impactData.severeImpact.currentlyInfected}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Infections by Requested Time
            <span className="badge badge-covid badge-pill">
              {impactData.severeImpact.infectionsByRequestedTime}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Severe Cases by Requested Time
            <span className="badge badge-covid badge-pill">
              {impactData.severeImpact.severeCasesByRequestedTime}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Hospital Beds by Requested Time
            <span className="badge badge-covid badge-pill">
              {impactData.severeImpact.hospitalBedsByRequestedTime}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Cases For ICU by Requested Time
            <span className="badge badge-covid badge-pill">
              {impactData.severeImpact.casesForICUByRequestedTime}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Cases For Ventilators by Requested Time
            <span className="badge badge-covid badge-pill">
              {impactData.severeImpact.casesForVentilatorsByRequestedTime}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Dollars In Flight
            <span className="badge badge-covid badge-pill">
              $ {impactData.severeImpact.dollarsInFlight}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

EstimateResult.propTypes = {
  impactData: PropTypes.object,
}
export default EstimateResult
