const books = window.BOOKS || [];
const grid = document.querySelector('#book-grid');
const filters = document.querySelector('#filters');
const search = document.querySelector('#search');
const count = document.querySelector('#result-count');
const dialog = document.querySelector('#book-dialog');
let active = '全部';

function card(book) {
  const score = book.rating ? `★ ${book.rating}/5` : book.progress ? `讀到 ${book.progress}` : book.status;
  return `<button class="book-card" data-id="${book.id}"><span class="cover" style="--accent:${book.accent}"><small>${book.tags.slice(0,2).join(' · ')}</small><b>${book.title}</b><i></i></span><span class="book-meta"><strong>${book.title}</strong><em>${book.author}</em><span>${score}</span></span></button>`;
}
function visible() {
  const q = search.value.trim().toLowerCase();
  return books.filter(book => (active === '全部' || book.status === active || book.tags.includes(active)) && [book.title, book.author, ...book.tags, ...book.themes].join(' ').toLowerCase().includes(q));
}
function render() {
  const found = visible();
  count.textContent = `${found.length} 本紀錄`;
  grid.innerHTML = found.length ? found.map(card).join('') : '<p class="empty">還沒有符合的書籍。</p>';
  grid.querySelectorAll('.book-card').forEach(button => button.addEventListener('click', () => openBook(button.dataset.id)));
}
function renderFilters() {
  const values = ['全部', '已讀', '閱讀中', '奇幻', '校園', 'BL', '懸疑', '群像', '世界觀', '末日'];
  filters.innerHTML = values.map(value => `<button class="${value === active ? 'active' : ''}" data-filter="${value}">${value}</button>`).join('');
  filters.querySelectorAll('button').forEach(button => button.addEventListener('click', () => { active = button.dataset.filter; renderFilters(); render(); }));
}
function openBook(id) {
  const book = books.find(item => item.id === id);
  const quote = book.quote ? `<blockquote>「${book.quote}」</blockquote>` : '';
  const rating = book.rating ? `★ ${book.rating}/5` : '尚未評分';
  dialog.querySelector('#dialog-content').innerHTML = `<div class="dialog-cover" style="--accent:${book.accent}"><small>${book.tags.join(' · ')}</small><h2 id="dialog-title">${book.title}</h2></div><div class="dialog-body"><button class="close" aria-label="關閉">×</button><p class="dialog-meta">${book.author}　·　${book.status}${book.progress ? `　·　讀到 ${book.progress}` : ''}　·　${rating}</p><div class="tags">${book.tags.map(tag => `<span>${tag}</span>`).join('')}</div>${quote}<h3>閱讀筆記</h3><p>${book.readerNote}</p><h3>作品簡介</h3><p>${book.synopsis}</p><a class="source" href="${book.source.url}" target="_blank" rel="noreferrer">作品簡介來源：${book.source.label} ↗</a></div>`;
  dialog.showModal();
  dialog.querySelector('.close').addEventListener('click', () => dialog.close());
}
search.addEventListener('input', render);
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
renderFilters(); render();
