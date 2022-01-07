import logo from './logo.svg';
import './App.css';
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

function App() {
  //hardcoded placeholder to start with
  const data = {
    labels: ['State A', 'State B', 'State C', 'State D', 'State E'],
    datasets: [{
        label: 'Number of Cases Per State',
        data: [200, 400, 500, 1000, 2000],
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