// ==================== DATA ====================
const academies = [
  // Temeke
  { id: 1, name: "A-Academy", district: "Temeke", location: "Temeke Mjini", coach: "Coach Juma", contact: "+255712345678", preview: "High-performance center with UEFA licensed coaches.", players: [
    { name: "Abdallah Salum", age: 16, position: "Striker" }, { name: "Hamisi Juma", age: 15, position: "Midfielder" }, { name: "Zainab Ali", age: 17, position: "Defender" }
  ]},
  { id: 2, name: "B-Academy", district: "Temeke", location: "Keko", coach: "Coach Mwinyi", contact: "+255765432109", preview: "Focus on technical development and discipline.", players: [
    { name: "Iddi Ramadhan", age: 14, position: "Winger" }, { name: "Asha Nassoro", age: 16, position: "Goalkeeper" }
  ]},
  { id: 3, name: "C-Academy", district: "Temeke", location: "Temeke", coach: "Coach Salum", contact: "+255756123987", preview: "Elite youth program with scholarships.", players: [
    { name: "Rashid Mfaume", age: 15, position: "Center Back" }, { name: "Saada Khamis", age: 17, position: "Attacking Mid" }
  ]},
  // Kinondoni
  { id: 4, name: "D-Academy", district: "Kinondoni", location: "Mwananyamala", coach: "Coach Peter", contact: "+255712345678", preview: "Grassroots to pro pathway.", players: [
    { name: "Emmanuel John", age: 16, position: "Striker" }, { name: "Grace Mushi", age: 15, position: "Midfielder" }
  ]},
  { id: 5, name: "E-Academy", district: "Kinondoni", location: "Kinondoni B", coach: "Coach Rose", contact: "+255765432109", preview: "Women's football excellence.", players: [
    { name: "Happy Lucas", age: 17, position: "Forward" }, { name: "Neema Joseph", age: 14, position: "Defender" }
  ]},
  { id: 6, name: "F-Academy", district: "Kinondoni", location: "Magomeni", coach: "Coach David", contact: "+255756123987", preview: "All-round athletic development.", players: [
    { name: "Baraka Shija", age: 16, position: "Winger" }, { name: "Amina Seleman", age: 15, position: "Midfielder" }
  ]},
  // Ilala
  { id: 7, name: "G-Academy", district: "Ilala", location: "Kariakoo", coach: "Coach Hassan", contact: "+255712345678", preview: "Intense tactical training.", players: [
    { name: "Juma Othman", age: 17, position: "Striker" }, { name: "Fatma Kijazi", age: 16, position: "Defender" }
  ]},
  { id: 8, name: "H-Academy", district: "Ilala", location: "Ilala CBD", coach: "Coach Amina", contact: "+255765432109", preview: "State-of-the-art facilities.", players: [
    { name: "Hassan Bakari", age: 15, position: "Goalkeeper" }, { name: "Mwanaisha Salim", age: 14, position: "Midfielder" }
  ]},
  { id: 9, name: "I-Academy", district: "Ilala", location: "Kipawa", coach: "Coach Yusuf", contact: "+255756123987", preview: "Scholarships for gifted players.", players: [
    { name: "Lulu Mwinyi", age: 16, position: "Winger" }, { name: "Ibrahim Ally", age: 17, position: "Center Back" }
  ]},
  // Kigamboni
  { id: 10, name: "J-Academy", district: "Kigamboni", location: "Kibada", coach: "Coach Fatma", contact: "+255712345678", preview: "Coastal academy with focus on speed.", players: [
    { name: "Suleiman Rashid", age: 15, position: "Striker" }, { name: "Rehema Abdallah", age: 16, position: "Midfielder" }
  ]},
  { id: 11, name: "K-Academy", district: "Kigamboni", location: "Kigamboni Ferry", coach: "Coach Hamisi", contact: "+255765432109", preview: "Professional youth setup.", players: [
    { name: "Ramadhan Mussa", age: 17, position: "Defender" }, { name: "Nasra Juma", age: 15, position: "Winger" }
  ]},
  // Ubungo
  { id: 12, name: "L-Academy", district: "Ubungo", location: "Ubungo Plaza", coach: "Coach Mwita", contact: "+255712345678", preview: "Modern methodology.", players: [
    { name: "Edwin Mboya", age: 16, position: "Striker" }, { name: "Zuhura Nassor", age: 15, position: "Attacking Mid" }
  ]},
  { id: 13, name: "M-Academy", district: "Ubungo", location: "Kimara", coach: "Coach Gladness", contact: "+255765432109", preview: "Holistic player development.", players: [
    { name: "Kelvin Msigwa", age: 17, position: "Goalkeeper" }, { name: "Neema Shayo", age: 14, position: "Defender" }
  ]}
];

// ==================== DISTRICT PAGE RENDER ====================
function renderDistrictPage(districtName) {
  const container = document.getElementById('districtAcademiesList');
  if (!container) return;
  const filtered = academies.filter(a => a.district === districtName);
  if (filtered.length === 0) {
    container.innerHTML = '<p>No academies found in this district.</p>';
    return;
  }
  container.innerHTML = filtered.map(academy => `
    <div class="academy-card">
      <div class="card-content">
        <h3>${academy.name}</h3>
        <div class="location"><i class="fas fa-map-pin"></i> ${academy.location}</div>
        <p class="preview">${academy.preview}</p>
        <a href="academy.html?id=${academy.id}" class="btn-details">View Details <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  `).join('');
}

// ==================== INDEX: DISTRICTS & GLOBAL SEARCH ====================
function renderDistricts() {
  const container = document.getElementById('districtsGrid');
  if (!container) return;
  const districts = [...new Set(academies.map(a => a.district))];
  container.innerHTML = districts.map(district => {
    const count = academies.filter(a => a.district === district).length;
    return `
      <a href="${district.toLowerCase()}.html" class="district-card">
        <h3><i class="fas fa-futbol"></i> ${district}</h3>
        <p>${count} elite academies</p>
        <span class="badge">Explore <i class="fas fa-chevron-right"></i></span>
      </a>
    `;
  }).join('');
}

function initGlobalSearch() {
  const input = document.getElementById('globalSearchInput');
  const resultsDiv = document.getElementById('globalSearchResults');
  if (!input || !resultsDiv) return;
  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query === '') { resultsDiv.innerHTML = ''; return; }
    const filtered = academies.filter(a => 
      a.name.toLowerCase().includes(query) || 
      a.district.toLowerCase().includes(query) || 
      a.coach.toLowerCase().includes(query)
    );
    if (filtered.length === 0) { resultsDiv.innerHTML = '<p>No academies found.</p>'; return; }
    resultsDiv.innerHTML = filtered.map(academy => `
      <div class="academy-card">
        <div class="card-content">
          <h3>${academy.name}</h3>
          <div class="location"><i class="fas fa-map-pin"></i> ${academy.location} · ${academy.district}</div>
          <p class="preview">${academy.preview}</p>
          <a href="academy.html?id=${academy.id}" class="btn-details">View Details</a>
        </div>
      </div>
    `).join('');
  });
}

// ==================== ACADEMY DETAIL PAGE ====================
function loadAcademyDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const academy = academies.find(a => a.id === id);
  const container = document.getElementById('academyDetailRoot');
  if (!academy || !container) {
    container.innerHTML = '<div class="detail-card"><p>Academy not found. <a href="index.html">Back to home</a></p></div>';
    return;
  }
  let playersHTML = '';
  let allPlayers = academy.players;
  const renderPlayers = (players) => {
    if (!players.length) return '<p>No players listed yet.</p>';
    return `<div class="players-grid">${players.map(p => `
      <div class="player-card">
        <div class="player-name">${p.name}</div>
        <div class="player-age">Age: ${p.age}</div>
        <div class="player-pos">${p.position}</div>
      </div>
    `).join('')}</div>`;
  };
  playersHTML = renderPlayers(allPlayers);
  
  // filter by position UI
  const positions = [...new Set(allPlayers.map(p => p.position))];
  const filterButtons = positions.map(pos => `<button class="filter-btn" data-pos="${pos}">${pos}</button>`).join('');
  
  container.innerHTML = `
    <div class="detail-card">
      <h1 class="academy-name">${academy.name}</h1>
      <div class="info-row"><i class="fas fa-location-dot"></i> ${academy.location}, ${academy.district}</div>
      <div class="info-row"><i class="fas fa-chalkboard-user"></i> Coach: ${academy.coach}</div>
      <div class="info-row"><i class="fas fa-phone-alt"></i> ${academy.contact} <a href="https://wa.me/${academy.contact.replace(/\D/g,'')}?text=Hello%20I%20am%20interested%20in%20${encodeURIComponent(academy.name)}" target="_blank" class="whatsapp-btn"><i class="fab fa-whatsapp"></i> WhatsApp</a></div>
      <div class="players-section">
        <h3>⚽ Players (${allPlayers.length})</h3>
        <div class="filter-bar"><button class="filter-btn active" data-pos="all">All</button>${filterButtons}</div>
        <div id="playersListContainer">${playersHTML}</div>
      </div>
    </div>
  `;
  
  // attach filtering
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const pos = btn.getAttribute('data-pos');
      const filtered = pos === 'all' ? allPlayers : allPlayers.filter(p => p.position === pos);
      document.getElementById('playersListContainer').innerHTML = renderPlayers(filtered);
    });
  });
}

// Run on page load if functions exist
if (document.getElementById('districtsGrid')) renderDistricts();
if (document.getElementById('globalSearchInput')) initGlobalSearch();
