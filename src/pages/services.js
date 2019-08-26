import React from 'react'

import Layout from '../layouts/layout'

import TextImageContainer from '../components/TextImageContainer'

import SensorImage from '../images/svg/bio-sensor.svg'
import AnalyticsImage from '../images/svg/analytics.svg'
import CloudImage from '../images/svg/cloud.svg'

const ServicesPage = () => {
  return (
    <Layout title={'Services'}>
      <TextImageContainer
        title={'Sensors'}
        image={SensorImage}
        imageLeft={true}
        greyBG={true}
      >
        We provide a system that is able to gather sensor information on your
        target point. For example sensors for humidity, temperature, counting,
        pressure and flow. An ideal system we recommend is the Raspberry Pi,
        which is a small affordable single-board computer that can be mounted
        anywhere.
      </TextImageContainer>
      <TextImageContainer
        title={'Visualizing Data'}
        image={AnalyticsImage}
        imageLeft={false}
        greyBG={false}
      >
        Big data sets is often gathered from a large network of sensors, and
        putting this data into perspective is key to success.
      </TextImageContainer>
      <TextImageContainer
        title={'Cloud Setup'}
        image={CloudImage}
        imageLeft={true}
        greyBG={true}
      >
        If your service needs to be in the cloud, we will take care of the setup
        process to get your service up and running. A cloud service like Google
        Cloud will eliminate issues with scalability and storage and help future
        proof your service.
      </TextImageContainer>
    </Layout>
  )
}

export default ServicesPage
