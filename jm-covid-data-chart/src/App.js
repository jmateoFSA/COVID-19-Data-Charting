import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Bar, PolarArea } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { useDispatch, useSelector } from "react-redux";
import { getStatesData } from './actions/statesAction';
import { getGlobalData } from './actions/globalAction';

function App() {
  const dispatch = useDispatch();
  const usaData = useSelector(state => state.statesData)
  const globalData = useSelector(state => state.globalData)
  const { loading, error, stateNames, stateCases } = usaData
  const { loading2, error2, countryNames, countryCases } = globalData

  useEffect(() => {
    dispatch(getStatesData())
  }, [dispatch])

  useEffect(() => {
    dispatch(getGlobalData())
  }, [dispatch])

  const data = {
    labels: stateNames,
    datasets: [{
        label: 'COVID-19 Cases Per State',
        data: stateCases,
        backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
        ],
        borderColor: [
            'rgba(0, 0, 0, 0.5)',
        ],
        borderWidth: 1
    }]
}

  const data2 = {
    labels: countryNames,
    datasets: [{
        label: 'Global COVID-19 Cases',
        data: countryCases,
        backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        ],
        borderColor: [
        'rgba(0, 0, 0, 0.5)',
        ],
        hoverOffset: 4
    }]
  }

  return (
    <div className="App">
      <div className="Chart1">
        {loading && <p>Loading Data...</p>}
        {error && <p>An Error Occurred...</p>}
        <Bar data={data} />
      </div>
      <br />
      <div className="Chart2">
        {loading2 && <p>Loading Data...</p>}
        {error2 && <p>An Error Occurred...</p>}
        <PolarArea data={data2} />
      </div>
    </div>
  );
}

export default App;
