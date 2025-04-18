import axios from 'axios';
import focus from './assets/FocusLogo.png';
import background from './assets/bg6.jpg'
import './App.css';
import { useEffect, useState } from 'react';

//NavBar元件
const NavBar = () => {
  return (<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
      <div className="container-fluid">
        <div className="logoFocus">
          <img src={focus} className="img-fluid object-fit-cover" alt="#" />
        </div>
        <a className="navbar-brand" href="#">羽毛球｜擇已所愛</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="https://ywei-chen.github.io/sitefacility.github.io/register.html">登入註冊</a>
            <a className="nav-link" href="#">運動場地</a>
            <a className="nav-link" href="#">關於我們</a>
            <a className="nav-link" href="#">聯絡我們</a>
          </div>
        </div>
      </div>
    </nav>
  </>)
}

//Footer
const Footer = () => {
  return (<>
    <footer className="bg-dark py-4 pt-3 mt-5">
      <div className="footer container d-flex justify-content-center my-3">
        <div className="me-3">©Cpoyright 2024 KaneC. 專題用途</div>
        <div>
          <a href="#" className="footer ext-decoration-none me-1">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="footer text-decoration-none me-1">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="footer text-decoration-none me-1">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  </>)
}

//HotRank
const HotRank = ({ img1, img2, img3, img4, img5, img6 }) => {
  return (<>
    <div className='container-lg'>
    <div className='h4 my-2'>TOP專區</div>
      <div className='dGrid'>
        <a className='dIm1 col-sm-12'>
         <img src={img1} className='object-fit-cover rounded-3 w-100 h-100' alt="#" />
        </a>
        <a className='dIm2 col-sm-12'>
         <img src={img2} className='object-fit-cover rounded-3 w-100 h-100' alt="#" />
        </a>
        <a className='dIm3 col-sm-12'>
          <img src={img3} className='object-fit-cover rounded-3 w-100 h-100' alt="#" />
        </a>
        <a className='dIm4 col-sm-12'>
          <img src={img4} className='object-fit-cover rounded-3 w-100 h-100' alt="#" />
        </a>
        <a className='dIm5 col-sm-12'>
          <img src={img5} className='object-fit-cover rounded-3 w-100 h-100' alt="#" />
        </a>
        <a className='dIm6 col-sm-12'>
          <img src={img6} className='object-fit-cover rounded-3 w-100 h-100' alt="#" />
        </a>
      </div>
    </div>
  </>)
}

const BottonGroup = ({ name }) => {
  return (<>
      <button type="button" className="btn btn-outline-secondary me-2 mb-2 ">{name}</button>
  </>)
}

//Carousel
const Carousel =({source, title, content, img}) => {
  return (<>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className='border border-light-subtle rounded-2 h-100'>
            <div className='p-3 h-100'>
              <div className='img-right'>
                <img src={img} className='rounded-2 w-100' alt="" />
              </div>
              <div className='verflow-hidden text-start'>
                <div className='pb-2'>
                  <small>{source}</small>
                </div>
                <div className='pb-2'>
                  <h5>{title}</h5>
                </div>
                <div className='pb-2'>
                  <small>{content}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className='border border-light-subtle rounded-2 h-100'>
            <div className='p-3 h-100'>
              <div className='img-right'>
                <img src={img} className='rounded-2 w-100' alt="" />
              </div>
              <div className='verflow-hidden text-start'>
                <div className='pb-2'>
                  <small>{source}</small>
                </div>
                <div className='pb-2'>
                  <h5>{title}</h5>
                </div>
                <div className='pb-2'>
                  <small>{content}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className='border border-light-subtle rounded-2 h-100'>
            <div className='p-3 h-100'>
              <div className='img-right'>
                <img src={img} className='rounded-2 w-100' alt="" />
              </div>
              <div className='verflow-hidden text-start'>
                <div className='pb-2'>
                  <small>{source}</small>
                </div>
                <div className='pb-2'>
                  <h5>{title}</h5>
                </div>
                <div className='pb-2'>
                  <small>{content}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </>)
}

//Render
function App() {
  const RankList = [
    {
      name: 'TOP專區',
      pic1: './src/assets/court-7.jpg',
      pic2: './src/assets/court-8.jpg',
      pic3: './src/assets/court-9.jpg',
      pic4: './src/assets/court-10.jpg',
      pic5: './src/assets/court-11.jpg',
      pic6: './src/assets/court-12.jpg'
    }
  ]

  const TopList = [
    { name: '停車場' }, { name: '優惠中' }, { name: '新開幕' }, { name: '暢打球場' }, { name: '冷氣球館' },
    { name: '免費飲水機' },
  ]

  const [dataAPI, setDataAPI] = useState([]);
  const [newsAPI, setNewsAPI] = useState([]);
  useEffect(() => {

    //locationAPI
    (async () => {
      try {
        const res = await axios.get('./taiwan-city-data.json');
        setDataAPI(res.data.data);
        dataAPI.forEach((item, i) => {
          item.id = i + 1;
        });
        console.log(dataAPI);
      } catch (error) {
        console.log(error);
      }
    })();

    //newsAPI
    (async () => {
      const apiKey = '19cb610cdf2543e1ba62ed2c77363b07';
      const newsUrl = "https://newsapi.org/v2/everything?q='羽球'";
      try {
        const res = await axios.get(`${newsUrl}&from=2025-04-1&sortBy=relevancy&apiKey=${apiKey}`);
        const newArr = [...res.data.articles];
        newArr.forEach((item, i) => {
          item.id = i + 1;
        })
        setNewsAPI(newArr.filter((item) => item.id <= 5));
        console.log(newsAPI);
      } catch (error) {
        console.log(error);
      }
    })();

    //初始化RanKlist Key值
    RankList.forEach((item, i) => {
      item.id = i + 1;
    })
    console.log(RankList);

    //初始化Toplist Key值
    TopList.forEach((item, i) => {
      item.id = i + 1;
    })
    console.log(TopList);
  }, [])

  return (
    <>
      <NavBar></NavBar>
      <div style={{ backgroundColor: 'whitesmoke' }} className='mb-5'>
        <div className='img-sec' style={{
          position: 'relative',
          height: '350px',
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${background})`
        }}>
        </div>
        <div className="container-fluid d-flex justify-content-center align-items-center py-3">
          <select className="form-select me-3" style={{ width: '200px' }}>
            <option style={{ display: 'none' }}>城市區域</option>
            {dataAPI.map((item) => {
              return (<option value={item.name} key={item.id}>{item.name}</option>)
            })}
          </select>
          <select className="form-select me-3" style={{ width: '330px' }}>
            <option style={{ display: 'none' }}>球館名稱</option>
            <option value="1">優勢羽球館</option>
            <option value="2">勁拍羽球館</option>
            <option value="3">超強羽球館</option>
            <option value="4">羽利羽球館</option>
          </select>
          <button type="button" className="btn btn-outline-dark">搜尋</button>
        </div>
      </div>
      {RankList.map((item) => {
        return (<HotRank
          key={item.id}
          name={item.name}
          img1={item.pic1}
          img2={item.pic2}
          img3={item.pic3}
          img4={item.pic4}
          img5={item.pic5}
          img6={item.pic6}>
        </HotRank>)
      })}
      <div className='container-lg'>
        <div className='row'>
          <div className='col'>
            {TopList.map((item) => {
              return (<BottonGroup
                key={item.id}
                name={item.name}>
              </BottonGroup>)
            })}
          </div>
        </div>
      </div>
      <div className='container-lg'>
        <div className='row'>
          <div className='col'>
            {newsAPI.map((item) => {
              return (<Carousel
                source={item.source.name}
                title={item.title}
                content={item.description}>
                img={item.urlToImage}
              </Carousel>)
            })}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
