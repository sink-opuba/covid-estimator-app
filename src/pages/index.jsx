import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EstimatorForm from "../components/form"
import EstimateResult from "../components/estimateResult"
import covid19ImpactEstimator from "../estimator"

const IndexPage = () => {
  const [impactData, setImpactData] = useState(null)
  const estimateData = async (data) => {
    const impactData = await covid19ImpactEstimator(data)
    setImpactData(impactData)
  }
  return (
    <Layout>
      <SEO title="Home" />
      <div className="index-container">
        <h2>
          A simple yet novel Covid-19 infection impact estimator. Fill out the
          form and get impact estimate for your region.
        </h2>
        <EstimatorForm handleData={estimateData} />

        {impactData && <EstimateResult impactData={impactData} />}
      </div>
    </Layout>
  )
}

export default IndexPage
