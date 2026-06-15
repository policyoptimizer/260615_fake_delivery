// 1. 가상 음식점 및 메뉴 데이터 정의
const restaurants = [
  {
    id: "chicken-01",
    name: "참았다치킨",
    category: "치킨",
    tagline: "바삭함은 상상으로 충분할지도 몰라요",
    rating: 4.9,
    statusText: "바삭바삭 갓 튀긴 상상의 맛 🍗",
    menus: [
      {
        id: "chicken-set",
        name: "상상 후라이드 세트",
        price: 24000,
        calories: 1200,
        description: "주문하지 않아도 바삭함을 떠올릴 수 있는 황금빛 프라이드 치킨"
      },
      {
        id: "spicy-chicken",
        name: "마음속 양념치킨",
        price: 26000,
        calories: 1350,
        description: "달콤 매콤한 비법 양념 소스가 골고루 버무려진 치킨"
      },
      {
        id: "garlic-chicken",
        name: "의지충전 갈릭간장치킨",
        price: 27000,
        calories: 1300,
        description: "마늘 향이 은은하게 감도는 단짠 감동의 마늘 간장 치킨"
      }
    ]
  },
  {
    id: "pizza-01",
    name: "상상피자클럽",
    category: "피자",
    tagline: "한 조각 대신 한 번 참기",
    rating: 4.8,
    statusText: "가상 치즈가 쭉 늘어나는 만족감 🍕",
    menus: [
      {
        id: "dream-pizza",
        name: "상상 페퍼로니 피자",
        price: 23000,
        calories: 1500,
        description: "페퍼로니가 가득 차 있어 먹은 척하기 완벽한 정통 아메리칸 피자"
      },
      {
        id: "sweet-potato-pizza",
        name: "구름 고구마 무스 피자",
        price: 25000,
        calories: 1400,
        description: "달콤하고 부드러운 고구마 골드 무스가 테두리를 채운 피자"
      }
    ]
  },
  {
    id: "bunsik-01",
    name: "가짜분식연구소",
    category: "분식",
    tagline: "매콤달콤한 떡볶이가 당길 때",
    rating: 4.7,
    statusText: "스트레스를 날려줄 가상의 매콤함 🌶️",
    menus: [
      {
        id: "bunsik-set",
        name: "시뮬레이션 떡튀순 세트",
        price: 18500,
        calories: 980,
        description: "매콤 떡볶이, 모둠 튀김, 순대로 채운 환상의 분식 삼총사"
      },
      {
        id: "magic-gimbap",
        name: "제로칼로리 마약꼬마김밥",
        price: 6000,
        calories: 320,
        description: "겨자 소스에 콕 찍어 먹어 든든한 상상을 주는 꼬마김밥"
      }
    ]
  },
  {
    id: "yasik-01",
    name: "야식유혹상회",
    category: "야식",
    tagline: "밤 11시, 가장 위험한 순간의 구원자",
    rating: 4.8,
    statusText: "다음 날 아침 얼굴 붓기 절대 방지 🐽",
    menus: [
      {
        id: "jokbal-set",
        name: "눈 감아 족발 보쌈 세트",
        price: 38000,
        calories: 1800,
        description: "야들야들하고 부드러운 콜라겐 족발과 촉촉한 수육 보쌈 세트"
      },
      {
        id: "spicy-feet",
        name: "마음만 불닭발구이",
        price: 22000,
        calories: 850,
        description: "스트레스를 한 번에 날려버릴 화끈한 직화 매운 닭발"
      }
    ]
  },
  {
    id: "dessert-01",
    name: "상상디저트카페",
    category: "디저트",
    tagline: "달콤함이 필요하지만 꾹 참아내기",
    rating: 4.6,
    statusText: "아메리카노 향이 솔솔 풍기는 기분 ☕",
    menus: [
      {
        id: "croffle-set",
        name: "가상 크로플 & 아일랜드 티",
        price: 12000,
        calories: 650,
        description: "바삭 촉촉한 크로플에 달콤 시원한 에이드를 매칭한 디저트"
      },
      {
        id: "castella-tea",
        name: "마인드 카스텔라 & 밀크티",
        price: 14000,
        calories: 780,
        description: "입안에서 사르르 녹아내리는 촉촉한 우유 카스텔라와 진한 밀크티"
      }
    ]
  }
];

// 긴급 대처 행동 처방전 목록
const emergencyPrescriptions = [
  "시원한 물 한 컵을 가득 마시고 5분간 심호흡해 보세요. 뇌가 물이 필요한 신호를 배고픔으로 착각하는 경우가 많습니다.",
  "냉장고 문을 열어보고, 지금 바로 먹을 수 있는 건강한 야채나 과일이 있는지 점검해 보세요.",
  "장바구니에 먹고 싶은 음식을 담아두기만 하고, 타이머를 10분만 켜보세요. 10분 뒤에 다시 생각해 봅시다.",
  "가벼운 스트레칭이나 실내 제자리걸음을 5분간 해보세요. 신체 활동이 배달 앱을 보고 싶은 충동을 분산시킵니다.",
  "즉시 욕실로 가 양치질을 깨끗이 해보세요. 민트 향의 강력한 치약 성분은 식욕을 일시적으로 잠재웁니다.",
  "지금 배달을 참았을 때 얻을 수 있는 성취감과, 이 돈으로 나중에 사고 싶었던 위시리스트 상품의 가격을 비교해 보세요!"
];

// 2. 전역 애플리케이션 상태 관리 객체
const state = {
  currentView: "home", // "home", "restaurants", "menu", "cart", "success"
  selectedRestaurantId: null,
  selectedCategory: "전체", // "전체", "치킨", "피자", "분식", "야식", "디저트"
  cart: [], // { menu: Object, count: Number, restaurantId: String }
  lastSuccess: null // { savedMoney: Number, avoidedCalories: Number }
};

// 3. 로컬 스토리지 키 및 헬퍼 함수
const STATS_KEY = "deliveryBreak_stats";

function getStats() {
  const defaultStats = {
    totalSavedMoney: 0,
    totalAvoidedCalories: 0,
    successCount: 0,
    streak: 0,
    lastSuccessDate: ""
  };
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return defaultStats;
    return JSON.parse(raw);
  } catch (e) {
    console.error("로컬 스토리지 파싱 실패:", e);
    return defaultStats;
  }
}

function saveStats(stats) {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error("로컬 스토리지 저장 실패:", e);
  }
}

// 4. 날짜 도우미 함수 (스트릭 계산용)
function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getYesterdayDateString() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return getLocalDateString(yesterday);
}

// 5. 전역 내비게이션 활성화 처리 및 화면 이동
function navigate(view, params = {}) {
  state.currentView = view;
  if (view === "menu") {
    state.selectedRestaurantId = params.restaurantId;
  }
  
  // 렌더링 호출
  renderApp();
  
  // 스크롤 상단으로 리셋
  const contentEl = document.getElementById("app-content");
  if (contentEl) {
    contentEl.scrollTop = 0;
  }
}

// 하단 내비게이션 바 하이라이트 상태 업데이트
function updateNavHighlight() {
  const navHome = document.getElementById("nav-home");
  const navList = document.getElementById("nav-list");
  const navCart = document.getElementById("nav-cart");
  
  if (!navHome || !navList || !navCart) return;

  // 모든 액티브 해제
  navHome.classList.remove("active");
  navList.classList.remove("active");
  navCart.classList.remove("active");

  if (state.currentView === "home") {
    navHome.classList.add("active");
  } else if (state.currentView === "restaurants" || state.currentView === "menu") {
    navList.classList.add("active");
  } else if (state.currentView === "cart") {
    navCart.classList.add("active");
  }
}

// 장바구니 뱃지 숫자 업데이트
function updateCartBadge() {
  const cartBadge = document.getElementById("cart-count");
  if (!cartBadge) return;
  
  const totalItems = state.cart.reduce((sum, item) => sum + item.count, 0);
  cartBadge.textContent = totalItems;
  
  // 장바구니에 아이템이 있으면 팝 애니메이션 추가
  const badgeContainer = document.getElementById("header-cart-badge");
  if (badgeContainer) {
    if (totalItems > 0) {
      badgeContainer.classList.add("pulse");
    } else {
      badgeContainer.classList.remove("pulse");
    }
  }
}

// 토스트 메시지 알림 띄우기
function showToast(message) {
  // 기존 토스트 제거
  const oldToast = document.querySelector(".toast-message");
  if (oldToast) {
    oldToast.remove();
  }
  
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.textContent = message;
  document.body.appendChild(toast);
  
  // 1.5초 후 제거
  setTimeout(() => {
    toast.classList.add("fade-out");
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }, 1500);
}

// 6. 각 화면별 HTML 생성 함수

// 화면 1. 홈 화면
function renderHome() {
  const stats = getStats();
  const formattedMoney = stats.totalSavedMoney.toLocaleString();
  
  return `
    <div class="view-home animate-fade-in">
      <div class="welcome-section">
        <h2 class="home-title">배달 충동이<br>느껴지는 지금!</h2>
        <p class="home-subtitle">딱 주문한 척까지만 해보세요.<br>지갑과 건강이 동시에 건강해집니다.</p>
      </div>

      <!-- 누적 대시보드 카드 -->
      <div class="dashboard-card">
        <div class="dashboard-header">
          <span class="dashboard-badge">📊 나의 누적 참기 기록</span>
          ${stats.streak > 0 ? `<span class="streak-badge">🔥 연속 성공 ${stats.streak}일차</span>` : ""}
        </div>
        <div class="dashboard-grid">
          <div class="dashboard-item">
            <span class="item-label">💰 아낀 금액</span>
            <span class="item-value">${formattedMoney}원</span>
          </div>
          <div class="dashboard-item">
            <span class="item-label">🥗 피한 칼로리</span>
            <span class="item-value">${stats.totalAvoidedCalories.toLocaleString()} kcal</span>
          </div>
          <div class="dashboard-item">
            <span class="item-label">🙌 참기 횟수</span>
            <span class="item-value">${stats.successCount}회</span>
          </div>
        </div>
      </div>

      <!-- 메인 액션 버튼 세트 -->
      <div class="action-buttons-group">
        <button class="btn btn-primary btn-large btn-bounce" onclick="navigate('restaurants')">
          🍔 배달앱처럼 둘러보기
        </button>
        <button class="btn btn-secondary btn-large" onclick="openEmergencyModal()">
          🚨 지금 너무 시키고 싶어요!
        </button>
      </div>

      <!-- 앱 안내 팁 섹션 -->
      <div class="tip-section">
        <h4>💡 배달 참기 꿀팁</h4>
        <p>평균적으로 10분만 욕구를 참아내면 배달 주문의 뇌 과학적 자극이 절반 이상 사그라듭니다. 든든한 상상 배달 서비스를 이용해 보세요!</p>
      </div>
    </div>
  `;
}

// 화면 2. 음식점 목록 화면
function renderRestaurantList() {
  const categories = ["전체", "치킨", "피자", "분식", "야식", "디저트"];
  
  // 카테고리 필터링 적용
  const filteredRestaurants = state.selectedCategory === "전체" 
    ? restaurants 
    : restaurants.filter(r => r.category === state.selectedCategory);

  const categoryButtonsHTML = categories.map(cat => {
    const isActive = state.selectedCategory === cat ? "active" : "";
    return `<button class="category-btn ${isActive}" onclick="setCategory('${cat}')">${cat}</button>`;
  }).join("");

  const restaurantListHTML = filteredRestaurants.length > 0 
    ? filteredRestaurants.map(res => {
        // 식당별 대표 가격 범위 (메뉴 중 최소 가격 기준 표시)
        const minPrice = res.menus.length > 0 ? Math.min(...res.menus.map(m => m.price)) : 0;
        const totalCalories = res.menus.length > 0 ? res.menus[0].calories : 0;
        
        return `
          <div class="restaurant-card" onclick="navigate('menu', { restaurantId: '${res.id}' })">
            <div class="restaurant-info">
              <div class="restaurant-header-row">
                <span class="res-category">${res.category}</span>
                <span class="res-rating">⭐ ${res.rating.toFixed(1)}</span>
              </div>
              <h3 class="res-name">${res.name}</h3>
              <p class="res-tagline">${res.tagline}</p>
              <p class="res-status">${res.statusText}</p>
              <div class="res-meta">
                <span>💰 최소 예상가 ${minPrice.toLocaleString()}원</span>
                <span>🥗 약 ${totalCalories} kcal</span>
              </div>
            </div>
            <div class="restaurant-go-arrow">👉</div>
          </div>
        `;
      }).join("")
    : `<div class="empty-list">해당 카테고리의 가상 음식점이 없습니다.</div>`;

  return `
    <div class="view-restaurants animate-fade-in">
      <div class="view-header">
        <h2 class="view-title">오늘은 무엇을 참아볼까요?</h2>
        <p class="view-subtitle">메뉴를 고르고 장바구니에 마음껏 담아보세요.</p>
      </div>

      <!-- 카테고리 슬라이더 -->
      <div class="category-slider">
        ${categoryButtonsHTML}
      </div>

      <!-- 식당 카드 목록 -->
      <div class="restaurant-list">
        ${restaurantListHTML}
      </div>
    </div>
  `;
}

// 카테고리 변경 처리 함수
window.setCategory = function(category) {
  state.selectedCategory = category;
  renderApp();
};

// 화면 3. 메뉴 상세 화면
function renderMenuDetail() {
  const restaurant = restaurants.find(r => r.id === state.selectedRestaurantId);
  if (!restaurant) {
    return `<div class="error-view">음식점을 찾을 수 없습니다. <button onclick="navigate('restaurants')">돌아가기</button></div>`;
  }

  const menusHTML = restaurant.menus.map(menu => {
    return `
      <div class="menu-item-card">
        <div class="menu-info">
          <h4 class="menu-name">${menu.name}</h4>
          <p class="menu-description">${menu.description}</p>
          <div class="menu-meta">
            <span class="menu-price">${menu.price.toLocaleString()}원</span>
            <span class="menu-calories">🔥 ${menu.calories} kcal</span>
          </div>
        </div>
        <button class="btn-add-cart btn-bounce" onclick="addToFakeCart('${restaurant.id}', '${menu.id}')">
          담은 척하기
        </button>
      </div>
    `;
  }).join("");

  return `
    <div class="view-menu animate-fade-in">
      <div class="menu-header">
        <button class="btn-back" onclick="navigate('restaurants')">🔙 뒤로가기</button>
        <h2 class="restaurant-title">${restaurant.name}</h2>
        <p class="restaurant-tag">${restaurant.tagline}</p>
        <span class="restaurant-badge-rating">⭐ ${restaurant.rating.toFixed(1)} 평점</span>
      </div>

      <div class="menu-list-container">
        <h3>🍔 참기 좋은 메뉴 리스트</h3>
        <div class="menu-list">
          ${menusHTML}
        </div>
      </div>

      <div class="menu-floating-footer">
        <button class="btn btn-primary btn-large" onclick="navigate('cart')">
          🛒 담은 척한 내역 확인하기
        </button>
      </div>
    </div>
  `;
}

// 장바구니에 아이템 추가 로직
window.addToFakeCart = function(restaurantId, menuId) {
  const restaurant = restaurants.find(r => r.id === restaurantId);
  if (!restaurant) return;
  const menu = restaurant.menus.find(m => m.id === menuId);
  if (!menu) return;

  // 장바구니 검색
  const existingItemIndex = state.cart.findIndex(
    item => item.restaurantId === restaurantId && item.menu.id === menuId
  );

  if (existingItemIndex > -1) {
    state.cart[existingItemIndex].count += 1;
  } else {
    state.cart.push({
      restaurantId: restaurantId,
      restaurantName: restaurant.name,
      menu: menu,
      count: 1
    });
  }

  updateCartBadge();
  showToast(`🛒 "${menu.name}"을(를) 장바구니에 담은 척했습니다!`);
};

// 화면 4. 장바구니 화면
function renderCart() {
  if (state.cart.length === 0) {
    return `
      <div class="view-cart empty animate-fade-in">
        <div class="empty-cart-icon">🛒</div>
        <h3>장바구니가 비어 있습니다.</h3>
        <p>먹고 싶은 가짜 메뉴들을 담은 척해 보세요!</p>
        <button class="btn btn-primary" onclick="navigate('restaurants')">가상 음식 둘러보기</button>
      </div>
    `;
  }

  // 총 예상 금액 및 총 예상 칼로리 합산
  const totalAmount = state.cart.reduce((sum, item) => sum + (item.menu.price * item.count), 0);
  const totalCalories = state.cart.reduce((sum, item) => sum + (item.menu.calories * item.count), 0);

  const cartItemsHTML = state.cart.map((item, idx) => {
    return `
      <div class="cart-item">
        <div class="cart-item-detail">
          <span class="cart-item-restaurant">[${item.restaurantName}]</span>
          <h4 class="cart-item-name">${item.menu.name}</h4>
          <span class="cart-item-meta">${item.menu.price.toLocaleString()}원 | ${item.menu.calories} kcal</span>
        </div>
        <div class="cart-item-controls">
          <button class="btn-qty" onclick="changeQty(${idx}, -1)">-</button>
          <span class="qty-num">${item.count}</span>
          <button class="btn-qty" onclick="changeQty(${idx}, 1)">+</button>
          <button class="btn-delete-item" onclick="deleteCartItem(${idx})">❌</button>
        </div>
      </div>
    `;
  }).join("");

  return `
    <div class="view-cart animate-fade-in">
      <div class="view-header">
        <h2 class="view-title">장바구니 (담은 척한 목록)</h2>
        <p class="view-subtitle">실제 배달비와 칼로리를 절약하기 직전입니다.</p>
      </div>

      <div class="cart-items-list">
        ${cartItemsHTML}
      </div>

      <!-- 요약 정보 -->
      <div class="cart-summary-card">
        <div class="summary-row">
          <span>총 예상 주문액</span>
          <span class="summary-price">${totalAmount.toLocaleString()}원</span>
        </div>
        <div class="summary-row">
          <span>피할 수 있는 칼로리</span>
          <span class="summary-calories">${totalCalories.toLocaleString()} kcal</span>
        </div>
      </div>

      <!-- 하단 주문 참기 버튼 -->
      <div class="cart-action-buttons">
        <button class="btn btn-primary btn-large btn-bounce" onclick="completeAbstinence()">
          😇 진짜 주문하지 않고 참기
        </button>
        <button class="btn btn-muted" onclick="clearCart()">
          🧹 장바구니 비우기
        </button>
      </div>
    </div>
  `;
}

// 장바구니 수량 조정
window.changeQty = function(index, delta) {
  if (state.cart[index]) {
    state.cart[index].count += delta;
    if (state.cart[index].count <= 0) {
      state.cart.splice(index, 1);
    }
    updateCartBadge();
    renderApp();
  }
};

// 장바구니 개별 아이템 삭제
window.deleteCartItem = function(index) {
  if (state.cart[index]) {
    const itemName = state.cart[index].menu.name;
    state.cart.splice(index, 1);
    updateCartBadge();
    showToast(`🗑️ "${itemName}" 삭제 완료`);
    renderApp();
  }
};

// 장바구니 전체 비우기
window.clearCart = function() {
  if (confirm("담은 척한 메뉴를 모두 비우시겠습니까?")) {
    state.cart = [];
    updateCartBadge();
    showToast("🧹 장바구니가 깨끗해졌습니다.");
    renderApp();
  }
};

// "진짜 주문하지 않고 참기" 최종 처리
window.completeAbstinence = function() {
  if (state.cart.length === 0) return;

  const totalAmount = state.cart.reduce((sum, item) => sum + (item.menu.price * item.count), 0);
  const totalCalories = state.cart.reduce((sum, item) => sum + (item.menu.calories * item.count), 0);

  // 로컬 스토리지에 업데이트
  const updatedStats = recordSuccess(totalAmount, totalCalories);

  // 성공 화면을 위해 상태 전달
  state.lastSuccess = {
    savedMoney: totalAmount,
    avoidedCalories: totalCalories,
    stats: updatedStats
  };

  // 장바구니 비우기
  state.cart = [];
  updateCartBadge();

  // 성공 페이지로 이동
  navigate("success");
};

// 로컬 스토리지 성공 기록 누적 로직
function recordSuccess(savedMoney, avoidedCalories) {
  const stats = getStats();
  const todayStr = getLocalDateString();
  const yesterdayStr = getYesterdayDateString();

  stats.totalSavedMoney += savedMoney;
  stats.totalAvoidedCalories += avoidedCalories;
  stats.successCount += 1;

  if (stats.lastSuccessDate === todayStr) {
    // 당일 중복 성공 시 스트릭 유지
    // 누적액 등은 쌓이지만 streak은 오늘 이미 계산 완료 상태
  } else if (stats.lastSuccessDate === yesterdayStr) {
    // 연속 성공
    stats.streak += 1;
  } else {
    // 스트릭이 끊겼거나 생애 첫 참기 성공
    stats.streak = 1;
  }
  
  stats.lastSuccessDate = todayStr;
  saveStats(stats);
  return stats;
}

// 화면 5. 성공 화면
function renderSuccess() {
  const successData = state.lastSuccess;
  if (!successData) {
    return `
      <div class="view-success animate-fade-in">
        <div class="success-icon">🎉</div>
        <h3>기록이 없습니다.</h3>
        <button class="btn btn-primary" onclick="navigate('home')">홈으로 가기</button>
      </div>
    `;
  }

  const { savedMoney, avoidedCalories, stats } = successData;
  const motivationPhrases = [
    "지금의 선택이 내일의 몸과 지갑을 가볍게 만듭니다! ✨",
    "대단해요! 배달 앱의 마케팅 유혹을 멋지게 이겨내셨습니다. 👏",
    "오늘 절약한 금액으로 더 가치 있는 나만의 기쁨을 채워보세요. 🎈",
    "칼로리 폭탄에서 건강하게 대피하셨습니다! 내일 아침 몸이 한결 가볍겠어요. 🧘"
  ];
  const phrase = motivationPhrases[Math.floor(Math.random() * motivationPhrases.length)];

  return `
    <div class="view-success animate-fade-in">
      <div class="success-icon-container">
        <span class="confetti-emoji">🎉</span>
        <div class="success-badge-mark">오늘의 참기 성공!</div>
      </div>

      <h2 class="success-title">오늘 배달을 참았습니다</h2>
      <p class="success-quote">"${phrase}"</p>

      <!-- 이번 절약 상세 -->
      <div class="success-saving-board">
        <div class="save-title">이번 도전으로 아낀 내역</div>
        <div class="save-row">
          <span>💸 절약한 금액</span>
          <strong>${savedMoney.toLocaleString()}원</strong>
        </div>
        <div class="save-row">
          <span>🥗 피한 칼로리</span>
          <strong>${avoidedCalories.toLocaleString()} kcal</strong>
        </div>
      </div>

      <!-- 누적 대시보드 요약 -->
      <div class="success-accumulated-board">
        <div class="save-title">누적 절약 현황</div>
        <div class="accumulated-grid">
          <div class="acc-item">
            <span>누적 참기</span>
            <strong>${stats.successCount}회</strong>
          </div>
          <div class="acc-item">
            <span>연속 성공</span>
            <strong>${stats.streak}일</strong>
          </div>
          <div class="acc-item">
            <span>총 아낀 돈</span>
            <strong>${stats.totalSavedMoney.toLocaleString()}원</strong>
          </div>
        </div>
      </div>

      <div class="success-action-buttons">
        <button class="btn btn-success btn-large btn-bounce" onclick="copyShareText(${savedMoney}, ${stats.totalSavedMoney})">
          📋 공유 문구 복사하기
        </button>
        <button class="btn btn-primary btn-large" onclick="navigate('home')">
          🏠 홈으로 가기
        </button>
      </div>
      
      <!-- 복사 실패 및 수동 공유용 텍스트 필드 (기본 hidden) -->
      <div id="fallback-share-container" class="share-fallback hidden">
        <p>클립보드 복사가 지원되지 않는 환경입니다. 아래 문구를 직접 복사해 보세요:</p>
        <textarea id="fallback-share-text" readonly class="fallback-textarea"></textarea>
      </div>
    </div>
  `;
}

// 공유 문구 클립보드 복사 함수
window.copyShareText = function(savedMoney, totalSavedMoney) {
  const shareText = `오늘 배달을 참아서 ${savedMoney.toLocaleString()}원을 아꼈습니다. 누적 절약 금액은 ${totalSavedMoney.toLocaleString()}원입니다. #배달참기시뮬레이터`;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareText)
      .then(() => {
        showToast("📋 공유 문구가 클립보드에 복사되었습니다!");
      })
      .catch(err => {
        console.error("클립보드 복사 실패:", err);
        showFallbackShare(shareText);
      });
  } else {
    showFallbackShare(shareText);
  }
};

function showFallbackShare(text) {
  const container = document.getElementById("fallback-share-container");
  const textarea = document.getElementById("fallback-share-text");
  if (container && textarea) {
    container.classList.remove("hidden");
    textarea.value = text;
    textarea.select();
    showToast("⚠️ 문구를 수동으로 복사해 주세요.");
  }
}

// 7. 긴급 모달창 관리
window.openEmergencyModal = function() {
  const modal = document.getElementById("emergency-modal");
  const messageEl = document.getElementById("emergency-message");
  if (!modal || !messageEl) return;

  // 랜덤 처방 선택
  const randomIndex = Math.floor(Math.random() * emergencyPrescriptions.length);
  messageEl.textContent = emergencyPrescriptions[randomIndex];

  modal.classList.remove("hidden");
  modal.classList.add("show");
};

window.closeEmergencyModal = function() {
  const modal = document.getElementById("emergency-modal");
  if (!modal) return;
  
  modal.classList.remove("show");
  // 애니메이션 효과 후 hidden 추가
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 250);
};

// 8. 전역 렌더링 함수
function renderApp() {
  const contentEl = document.getElementById("app-content");
  if (!contentEl) return;

  let viewHTML = "";

  switch (state.currentView) {
    case "home":
      viewHTML = renderHome();
      break;
    case "restaurants":
      viewHTML = renderRestaurantList();
      break;
    case "menu":
      viewHTML = renderMenuDetail();
      break;
    case "cart":
      viewHTML = renderCart();
      break;
    case "success":
      viewHTML = renderSuccess();
      break;
    default:
      viewHTML = renderHome();
  }

  contentEl.innerHTML = viewHTML;
  
  // 내비게이션 바 및 헤더 뱃지 업데이트
  updateNavHighlight();
  updateCartBadge();
}

// 9. 앱 로드 및 초기 이벤트 바인딩
document.addEventListener("DOMContentLoaded", () => {
  renderApp();
  
  // 모달 오버레이 바깥 영역 클릭 시 모달 닫기
  const modal = document.getElementById("emergency-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeEmergencyModal();
      }
    });
  }
});
