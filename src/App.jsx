import {useState, useEffect} from 'react';
import './App.css';

const bannerImg = '/assets/images/banner.png';

export default function App() {
  return (
    <Home/>
  )
}


function Home() {
  return (
    <>
    <Header></Header>
    <Body></Body>
     {/* <Footer></Footer> */}
    </>
  )
}

function Header() {
  return (
    <header>
      <div className='header-top'>
        <h2 className='mall-name'>Tundrime</h2>
        <div className='btn-container'>
          <button className='header-btn'><i class="fa-solid fa-magnifying-glass"></i></button>
          <button className='header-btn'><i class="fa-solid fa-user"></i></button>
          <button  className='header-btn'> <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
      </div>
      <Banner></Banner>
    </header>
  )
}

function Banner() {
  return (
      <img src={bannerImg} alt="배너이미지" />
  )
}


function Body() {
  return (
    <div className='body-align'>
    <Sidebar></Sidebar>
    <Content></Content>
    </div>
  )
}

function Sidebar() {
  return (
    <div class="sidebar">
    <ul class="menu">
      <h4 className='sidebar-title'>Catelog</h4>
      <li>
      <div class="menu-title" onclick="toggleMenu(this)">All</div>
      </li>
      <li>
        <div class="menu-title" onclick="toggleMenu(this)">Dress</div>
        <ul class="submenu">
          <li><a href="#">New items</a></li>
          <li><a href="#">바지</a></li>
          <li><a href="#">신발</a></li>
        </ul>
      </li>
      <li>
        <div class="menu-title" onclick="toggleMenu(this)">Blouse</div>
        {/* <ul class="submenu">
          <li><a href="#">배송</a></li>
          <li><a href="#">A/S</a></li>
        </ul> */}
      </li>
    </ul>
  </div>
  )
}

//////////////////////////////// 상품 페이지 시작

function Content() {
  return (
    <div className='content'>
      <div className='content-header'>
        {/* 드롭다운 */}
        <button>드롭다운</button>
        <button>드롭다운</button>
        <button>드롭다운</button>
      </div>
      <div className='product-grid'>
        {/* 상품 grid */}
        <ProductList/>
      </div>
    </div>
  )
}


// 서버에서 상품조회 데이터 가져오기
function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // api 호출 함수
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:8080/api/products');
        if(!response.ok) {
          throw new Error('API 호출 실패');
        }

        const data = await response.json();
        
        setProducts(data);
      } catch(error) {
        console.error('상품 데이터 fetch 실패', error);
        
      }
    }
    fetchProducts();

  }, []);



  return (
    <>
    { products.map((item, idx) => {
        return (
        <div className='product-card' key={idx}>
          <img className='product-img' src={item.img} alt={idx}/>
          <h4 className='product-name'>{item.name}</h4>
          <p className='product-price'>{item.price}</p>
        </div>
        )
      })
    }
    </>
  )
}