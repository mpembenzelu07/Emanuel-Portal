// ==================== ACADEMY DATA ====================
const academies = [
  // Temeke (3 academies)
  { id: 1, name: "Apex Football Academy", district: "Temeke", location: "Temeke Central", coach: "Coach Juma Mkamba", contact: "+255712345678", preview: "UEFA-certified coaching, modern facilities. Produced 5 national youth players.", players: [
    { name: "Abdallah Salum", age: 16, position: "Striker" },
    { name: "Hamisi Juma", age: 15, position: "Midfielder" },
    { name: "Zainab Ali", age: 17, position: "Defender" },
    { name: "Michael John", age: 14, position: "Winger" }
  ]},
  { id: 2, name: "Bima Stars Academy", district: "Temeke", location: "Keko Mwanga", coach: "Coach Mwinyi Hamza", contact: "+255765432109", preview: "Technical mastery & discipline. 3 regional titles.", players: [
    { name: "Iddi Ramadhan", age: 14, position: "Winger" },
    { name: "Asha Nassoro", age: 16, position: "Goalkeeper" },
    { name: "Hussein Rashid", age: 15, position: "Center Back" }
  ]},
  { id: 3, name: "Chamazi Elite", district: "Temeke", location: "Chamazi", coach: "Coach Salum Mbarak", contact: "+255756123987", preview: "Scholarship pathway to European clubs.", players: [
    { name: "Rashid Mfaume", age: 15, position: "Center Back" },
    { name: "Saada Khamis", age: 17, position: "Attacking Mid" },
    { name: "Omar Said", age: 16, position: "Striker" }
  ]},
  // Kinondoni (3 academies)
  { id: 4, name: "Kinondoni United Academy", district: "Kinondoni", location: "Mwananyamala", coach: "Coach Peter Ndlovu", contact: "+255712345111", preview: "Grassroots to pro. 7 graduates in top leagues.", players: [
    { name: "Emmanuel John", age: 16, position: "Striker" },
    { name: "Grace Mushi", age: 15, position: "Midfielder" },
    { name: "Baraka Shija", age: 17, position: "Winger" }
  ]},
  { id: 5, name: "Kunduchi Football Institute", district: "Kinondoni", location: "Kunduchi", coach: "Coach Rose Mbilinyi", contact: "+255765432222", preview: "Women's football excellence & leadership.", players: [
    { name: "Happy Lucas", age: 17, position: "Forward" },
    { name: "Neema Joseph", age: 14, position: "Defender" },
    { name: "Lilian Peter", age: 16, position: "Midfielder" }
  ]},
  { id: 6, name: "Magomeni Elite", district: "Kinondoni", location: "Magomeni", coach: "Coach David Mushi", contact: "+255756123333", preview: "All-round athletic development with sports science.", players: [
    { name: "Baraka Shija", age: 16, position: "Winger" },
    { name: "Amina Seleman", age: 15, position: "Midfielder" },
    { name: "Ibrahim Ally", age: 17, position: "Striker" }
  ]},
  // Ilala (3 academies)
  { id: 7, name: "Kariakoo Stars Academy", district: "Ilala", location: "Kariakoo", coach: "Coach Hassan Juma", contact: "+255712345444", preview: "Intense tactical training, futsal integration.", players: [
    { name: "Juma Othman", age: 17, position: "Striker" },
    { name: "Fatma Kijazi", age: 16, position: "Defender" },
    { name: "Hamza Ramadhan", age: 15, position: "Goalkeeper" }
  ]},
  { id: 8, name: "Ilala City Football", district: "Ilala", location: "Ilala CBD", coach: "Coach Amina Kipande", contact: "+255765432555", preview: "State-of-the-art turf, nutrition programs.", players: [
    { name: "Hassan Bakari", age: 15, position: "Goalkeeper" },
    { name: "Mwanaisha Salim", age: 14, position: "Midfielder" },
    { name: "Kelvin Msigwa", age: 16, position: "Defender" }
  ]},
  { id: 9, name: "Kipawa Rising Stars", district: "Ilala", location: "Kipawa", coach: "Coach Yusuf Ngoma", contact: "+255756123666", preview: "Scholarships for gifted players, after-school programs.", players: [
    { name: "Lulu Mwinyi", age: 16, position: "Winger" },
    { name: "Ibrahim Ally", age: 17, position: "Center Back" },
    { name: "Rehema Abdallah", age: 15, position: "Attacking Mid" }
  ]},
  // Kigamboni (2 academies)
  { id: 10, name: "Kigamboni Sharks Academy", district: "Kigamboni", location: "Kibada", coach: "Coach Fatma Omar", contact: "+255712345777", preview: "Coastal academy with focus on speed & agility.", players: [
    { name: "Suleiman Rashid", age: 15, position: "Striker" },
    { name: "Rehema Abdallah", age: 16, position: "Midfielder" },
    { name: "Ali Mussa", age: 17, position: "Defender" }
  ]},
  { id: 11, name: "Ferry Point Football", district: "Kigamboni", location: "Kigamboni Ferry", coach: "Coach Hamisi Mkude", contact: "+255765432888", preview: "Professional youth setup with partnerships.", players: [
    { name: "Ramadhan Mussa", age: 17, position: "Defender" },
    { name: "Nasra Juma", age: 15, position: "Winger" },
    { name: "Edwin Mboya", age: 16, position: "Striker" }
  ]},
  // Ubungo (2 academies)
  { id: 12, name: "Ubungo Elite Centre", district: "Ubungo", location: "Ubungo Plaza", coach: "Coach Mwita Charles", contact: "+255712345999", preview: "Modern methodology, video analysis.", players: [
    { name: "Edwin Mboya", age: 16, position: "Striker" },
    { name: "Zuhura Nassor", age: 15, position: "Attacking Mid" },
    { name: "Happiness John", age: 14, position: "Winger" }
  ]},
  { id: 13, name: "Kimara Future Stars", district: "Ubungo", location: "Kimara", coach: "Coach Gladness Shayo", contact: "+255765432000", preview: "Holistic development, education + football.", players: [
    { name: "Kelvin Msigwa", age: 17, position: "Goalkeeper" },
    { name: "Neema Shayo", age: 14, position: "Defender" },
    { name: "Abel Makame", age: 16, position: "Midfielder" }
  ]}
];

// ==================== DISTRICT PAGE RENDER ====================
function renderDistrictPage(districtName) {
  const container = document.getElementById('districtAcademiesList');
  if (!container) return;
  const filtered = academies.filter(a => a.district === districtName);
  if (filtered.length === 0) {
    container.innerHTML = '<p style="text-align:center; padding:2rem;">No academies found in this district.</p>';
    return;
  }
  container.innerHTML = filtered.map(academy => `
    <div class="academy-card">
      <div class="card-content">
        <h3>${escapeHtml(academy.name)}</h3>
        <div class="location"><i class="fas fa-map-pin"></i> ${escapeHtml(academy.location)}</div>
        <p class="preview">${escapeHtml(academy.preview)}</p>
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
  let debounceTimer;
  input.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = e.target.value.trim().toLowerCase();
      if (query === '') {
        resultsDiv.innerHTML = '';
        return;
      }
      const filtered = academies.filter(a => 
        a.name.toLowerCase().includes(query) || 
        a.district.toLowerCase().includes(query) || 
        a.coach.toLowerCase().includes(query)
      );
      if (filtered.length === 0) {
        resultsDiv.innerHTML = '<p>No academies found.</p>';
        return;
      }
      resultsDiv.innerHTML = filtered.map(academy => `
        <div class="academy-card">
          <div class="card-content">
            <h3>${escapeHtml(academy.name)}</h3>
            <div class="location"><i class="fas fa-map-pin"></i> ${escapeHtml(academy.location)} · ${academy.district}</div>
            <p class="preview">${escapeHtml(academy.preview)}</p>
            <a href="academy.html?id=${academy.id}" class="btn-details">View Details</a>
          </div>
        </div>
      `).join('');
    }, 300);
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
  const allPlayers = academy.players;
  const renderPlayers = (players) => {
    if (!players.length) return '<p>No players listed yet.</p>';
    return `<div class="players-grid">${players.map(p => `
      <div class="player-card">
        <div class="player-name">${escapeHtml(p.name)}</div>
        <div class="player-age">Age: ${p.age}</div>
        <div class="player-pos">${escapeHtml(p.position)}</div>
      </div>
    `).join('')}</div>`;
  };
  // Unique positions for filter
  const positions = [...new Set(allPlayers.map(p => p.position))];
  const filterButtons = positions.map(pos => `<button class="filter-btn" data-pos="${escapeHtml(pos)}">${escapeHtml(pos)}</button>`).join('');
  
  container.innerHTML = `
    <div class="detail-card">
      <h1 class="academy-name">${escapeHtml(academy.name)}</h1>
      <div class="info-row"><i class="fas fa-location-dot"></i> ${escapeHtml(academy.location)}, ${academy.district}</div>
      <div class="info-row"><i class="fas fa-chalkboard-user"></i> Head Coach: ${escapeHtml(academy.coach)}</div>
      <div class="info-row"><i class="fas fa-phone-alt"></i> ${escapeHtml(academy.contact)} 
        <a href="https://wa.me/${academy.contact.replace(/\D/g,'')}?text=Hello%20I%20am%20interested%20in%20${encodeURIComponent(academy.name)}" target="_blank" class="whatsapp-btn"><i class="fab fa-whatsapp"></i> WhatsApp</a>
      </div>
      <div class="players-section">
        <h3>⚽ Player Roster (${allPlayers.length})</h3>
        <div class="filter-bar"><button class="filter-btn active" data-pos="all">All</button>${filterButtons}</div>
        <div id="playersListContainer">${renderPlayers(allPlayers)}</div>
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

// ==================== HELPER: ESCAPE HTML ====================
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(c) {
    return c;
  });
}

// ==================== INITIALIZATION ====================
// Run when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // District page (if element exists)
  if (document.getElementById('districtAcademiesList')) {
    // The page will call renderDistrictPage with the district name from inline script
    // We don't call it here because the district name is passed from the HTML.
    // However, we can also detect from body class or something, but we rely on inline calls.
  }
  // Index page
  if (document.getElementById('districtsGrid')) {
    renderDistricts();
  }
  if (document.getElementById('globalSearchInput')) {
    initGlobalSearch();
  }
  // Academy details page
  if (document.getElementById('academyDetailRoot')) {
    loadAcademyDetail();
  }
});
