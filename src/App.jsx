import './App.css'
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
const options = {
method: 'GET',
url: 'https://free-news.p.rapidapi.com/v1/search',
params: {q: 'ukraine', lang: 'hi'},
headers: {
  'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
  'X-RapidAPI-Key': '39a4ac8a59msh40ae48ffedc4742p1abf6cjsn1e893f0af755'
}
};

axios.request(options).then(function (response) {
setLoading(false);
setData(response.data.articles);
console.log(response.data.articles)
}).catch(function (error) {
console.error(error);
});
  return (
    <>
    <div className="text-sky-800 md:text-6xl text-3xl md:m-10 m-4 font-thin">Ukraine News</div>

    {loading && <div className="text-2xl mx-auto w-max md:my-10 my-4">Loading...</div>}
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-auto p-4">

      {data.map((item) => {
        return <div key={item.id}>
          <a href={item.link} target="_blank">
            <div className="shadow-lg border-2 m-4 p-3 rounded-lg">
              <img src={item.media} alt="" />
              <div className="">{item.title}</div>
          </div></a>

        </div>
      })}
    </div>

  </>
  )
}

export default App
