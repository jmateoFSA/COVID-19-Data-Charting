import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { useDispatch, useSelector } from "react-redux";
import { getStatesData } from './actions/statesAction';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.statesData)
  const { loading, error, stateNames, stateCases } = state
  useEffect(() => {
    dispatch(getStatesData())
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
  return (
    <div className="App">
      <Bar data={data} />
    </div>
  );
}

export default App;
