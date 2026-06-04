/* ============================================================
   SEARCH + FILTER
============================================================ */
let activeFilter = 'all';

function setFilter(team) {
  activeFilter = team;
  // Update button states
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('filter' + team.charAt(0).toUpperCase() + team.slice(1)).classList.add('active');
  filterCards();
}

function filterCards() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  document.querySelectorAll('.role-card').forEach(card => {
    const team    = card.dataset.team || '';
    const text    = card.innerText.toLowerCase();
    const teamOk  = activeFilter === 'all' || team === activeFilter;
    const searchOk = !query || text.includes(query);
    card.classList.toggle('hidden', !(teamOk && searchOk));
  });
}

/* Staggered card animation on load */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.role-card').forEach((card, i) => {
    card.style.animationDelay = (i * 0.03) + 's';
  });
});
