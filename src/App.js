import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const inputData = {
  latitude : 37.620954053275064,
  longitude : 126.84644930369564,
  lang : 'kr',
}

function App() {
  return (
    <div className="App">
      <div className="test_title">
        <span>Testing Title</span>
        <button onClick={loadOpenWeather}>api 호출</button>
        <button onClick={loadForecast}>기상청 호출</button>
      </div>
    </div>
  );
}


function loadOpenWeather() {
  const appId = '11b2a61b3065746fd1a5d3b35e21c1fb';
  axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${inputData.latitude}&lon=${inputData.longitude}&lang=${inputData.lang}&appid=${appId}`)
                      .then((result) => {console.log(result.data)})
                      .catch(() => {console.log('api failed')});
}

function loadForecast() {
  const params = {
    serviceKey : 'WIhsB06waJJMJZMm%2FM4SkVOW7q%2Fe0dtIWgG%2FjNK9eovNSpJl2jaCpkaUOpX6SSgDd4CbGTXZNEeYzl0RZ9e2Sg%3D%3D',
    pageNo : '1',
    numOfRows : '1000',
    dataType: 'JSON',
    base_date : '20220127',
    base_time : '1700',
    nx : '36',
    ny : '126'
  };
  axios.get('http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst', {params: params})
    .then((res) => {console.log(res.data)})
    .catch(() => {console.log('api load failed')});
}

// 성공 url
// http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=WIhsB06waJJMJZMm%2FM4SkVOW7q%2Fe0dtIWgG%2FjNK9eovNSpJl2jaCpkaUOpX6SSgDd4CbGTXZNEeYzl0RZ9e2Sg%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20220127&base_time=0500&nx=36&ny=127

export default App;
