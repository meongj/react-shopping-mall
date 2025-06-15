import {useState, useEffect} from 'react';
import './App.css';


export default function App() {
  return (
    <Home/>
  )
}


function Home() {
  return (
    <>
    <Header></Header>
    <Carousel></Carousel>
    <Body></Body>
     {/* <Footer></Footer> */}
    </>
  )
}

function Header() {
  return (
    <header>
      <div className='top-header'>
        <div className="top-header-left">
          <button className='top-header-left-btn'><i class="fa-brands fa-instagram"></i></button>
          {/* 드롭다운 */}
          <ul>01.드롭다운</ul>
          </div>
        <div className="top-header-right">
          <button className="top-header-right-btn">JOIN US</button>
          <button className="top-header-right-btn">LOGIN</button>
          <button className="top-header-right-btn">CART</button>
          <button className="top-header-right-btn">ORDER</button>
          <button className="top-header-right-btn">MY PAGE</button>
        </div>
       
      </div>

      <div className='bottom-header'>
        <h2 className='mall-name'>Day After</h2>
        <div className='btn-container'>
        <button  className='header-btn'> OUTER</button>
        <button  className='header-btn'> TOP</button>
        <button  className='header-btn'> DRESS</button>
        <button  className='header-btn'> BUTTOM</button>
        <button  className='header-btn'> ACESSORY</button>
        <button  className='header-btn'> SHOES&BAG</button>
        <button  className='header-btn'> SALE</button>
        <button  className='header-btn'> ONLY U</button>
        <button  className='header-btn'> COMMUNITY</button>

        </div>
        <div className='bottom-header-right'>
          <input type='text'></input>
          <button  className='header-btn'> <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
      </div>
    </header>
  )
}

function Carousel() {
  return (
     <div className="carousel">
        <button className="carousel-btn prev"> <i class="fa-solid fa-chevron-left"></i> </button>

        <div className="carousel-track-container">
          <div className="carousel-slide current-slide">
            <a href='/'>
            <img  src="../public/assets/images/carousel1.jpg" alt="" />
            <div className='inner-text'>
              <h1>denim jacket</h1>
              <p>간절기에 입기 좋은 데님 자켓으로 툭 걸치기 좋아요 :)</p>
              <p>[3color]</p>
            </div>
            </a>
          </div>
        </div>

        <button className="carousel-btn next"> <i class="fa-solid fa-chevron-right"></i> </button>
     </div>
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