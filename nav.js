// Shared nav & footer injected into every page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.getElementById('nav-placeholder').innerHTML = `
<nav>
  <div class="nav-inner">
    <a href="index.html" class="logo">Agri<span>Score</span></a>
    <ul class="nav-links">
      <li><a href="solution.html" ${currentPage==='solution.html'?'class="active"':''}>Our Solution</a></li>
      <li><a href="lenders.html" ${currentPage==='lenders.html'?'class="active"':''}>For Lenders</a></li>
      <li><a href="about.html" ${currentPage==='about.html'?'class="active"':''}>About</a></li>
      <li><a href="contact.html" class="nav-cta">Partner With Us</a></li>
    </ul>
  </div>
</nav>`;

document.getElementById('footer-placeholder').innerHTML = `
<footer>
  <div class="footer-inner">
    <div>
      <div class="footer-logo">AgriScore</div>
      <div class="footer-note">Washington D.C. · Harare, Zimbabwe</div>
    </div>
    <div style="text-align:right">
      <div>© 2026 AgriScore. All rights reserved.</div>
    </div>
  </div>
</footer>`;
