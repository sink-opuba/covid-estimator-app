import React, { useState } from "react"
import PropTypes from "prop-types"

const EstimatorForm = ({ handleData }) => {
  const [formValue, setFormValue] = useState({
    region: {
      name: "Africa",
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71,
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614,
  })

  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setFormValue({
      ...formValue,
      [name]: !isNaN(value) ? +value : value.trim(),
    })
  }
  const handleRegionChange = (event) => {
    const { name, value } = event.target
    formValue["region"][name] = !isNaN(value) ? +value : value.trim()
    setFormValue({
      ...formValue,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleData(formValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="region">Region</label>
          <input
            type="text"
            className="form-control"
            id="region"
            value={formValue.region.name}
            required
            name="name"
            onChange={handleRegionChange}
          />
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="avgAge">Average Age</label>
          <input
            type="number"
            className="form-control"
            id="avgAge"
            value={formValue.region.avgAge}
            name="avgAge"
            onChange={handleRegionChange}
          />
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="avgDailyIncome">Average Daily Income</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <input
              type="number"
              className="form-control"
              id="avgDailyIncome"
              value={formValue.region.avgDailyIncomeInUSD}
              required
              name="avgDailyIncomeInUSD"
              onChange={handleRegionChange}
            />
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="avgDailyIncPop">
            Average Income Population (In %)
          </label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">%</div>
            </div>
            <input
              type="number"
              className="form-control"
              id="avgDailyIncPop"
              value={formValue.region.avgDailyIncomePopulation}
              required
              min="0.1"
              max="1.0"
              step="0.01"
              name="avgDailyIncomePopulation"
              onChange={handleRegionChange}
            />
          </div>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="periodType">Period Type</label>
          <select
            name="periodType"
            id="periodType"
            className="form-control"
            data-period-type
            value={formValue.periodType}
            onChange={handleChange}
            onBlur={handleChange}
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </select>
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="timeToElapse">Time To Elapse</label>
          <input
            type="number"
            className="form-control"
            id="timeToElapse"
            value={formValue.timeToElapse}
            required
            data-time-to-elapse
            name="timeToElapse"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="reportedCases">Reported Cases</label>
          <input
            type="number"
            className="form-control"
            id="reportedCases"
            required
            data-reported-cases
            name="reportedCases"
            value={formValue.reportedCases}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="population">Population</label>
          <input
            type="number"
            className="form-control"
            id="population"
            required
            data-population
            name="population"
            value={formValue.population}
            onChange={handleChange}
          />
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="totalHospitalBeds">Total Hospital Beds</label>
          <input
            type="number"
            className="form-control"
            id="totalHospitalBeds"
            required
            data-total-hospital-beds
            name="totalHospitalBeds"
            value={formValue.totalHospitalBeds}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-covid mt-2" data-go-estimate>
        Get Estimate
      </button>
    </form>
  )
}
EstimatorForm.propTypes = {
  handleData: PropTypes.func,
}

export default EstimatorForm
