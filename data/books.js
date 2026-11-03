/* 唯一的本機書籍資料庫。新增書籍時只修改本檔。 */
window.BOOKS = [
  {
    id: 'lord-of-mysteries', title: '詭秘之主', author: '愛潛水的烏賊', status: '已讀', progress: null, rating: 5,
    tags: ['奇幻', '蒸汽龐克', '群像', '世界觀'], themes: ['宏大世界觀', '群像'],
    quote: '我們是守護者，也是一群時刻對抗著危險和瘋狂的可憐蟲。',
    readerNote: '如果你喜歡一個會越讀越大、越挖越深的世界，這本很容易讓人陷進去。它不只是在看主角走向非凡，也是在看許多人如何面對未知、危險與瘋狂，仍努力守住自己想守護的事物。',
    synopsis: '在蒸汽與機械逐漸改變生活的世界裡，神祕學、魔藥與被隱藏的危險從未遠離。一段由「愚者」開啟的傳說，也從迷霧深處慢慢展開。',
    source: { label: '《詭秘之主》官方網站', url: 'https://www.lotmworld.com/zh/lom' }, accent: '#89b7ff'
  },
  {
    id: 'circle-of-inevitability', title: '宿命之環', author: '愛潛水的烏賊', status: '閱讀中', progress: '1/4', rating: null,
    tags: ['奇幻', '神祕', '世界觀', '系列作'], themes: ['詭秘之主同世界觀'], quote: '',
    readerNote: '如果還想回到《詭秘之主》的世界、又期待用不同視角走進新的謎團，這本很適合接著讀。現在讀到四分之一，還在慢慢把新的舞台、角色與線索拼起來。',
    synopsis: '《宿命之環》是愛潛水的烏賊創作的西方奇幻小說，故事延續《詭秘之主》所建立的世界觀，開啟一段新的探索。',
    source: { label: '起點讀書《宿命之環》官方活動頁', url: 'https://acts.qidian.com/2023/18230302/index.html' }, accent: '#b29cff'
  },
  {
    id: 'omniscient-readers-viewpoint', title: '全知讀者視角', author: 'sing N song', status: '已讀', progress: null, rating: 5,
    tags: ['韓國小說', '末日', '群像', '元敘事'], themes: ['作者、讀者、主角的關係'],
    quote: '這是拯救某人、毀滅某人，又讓某人活下去的故事。',
    readerNote: '它最吸引人的地方，不只是在講末日生存，而是一直回頭追問：讀者、作者和主角，到底誰有資格決定一個故事要走到哪裡？如果喜歡故事本身也在談論「故事」，這本會很有意思。',
    synopsis: '一名長年追讀網路小說的上班族，發現那部小說中的世界開始在現實展開。為了在崩壞的世界中活下來，他必須帶著自己作為讀者知道的故事前進。',
    source: { label: '《全知讀者視角》台灣中文版資訊', url: 'https://www.bookwalker.com.tw/search?series=16191' }, accent: '#8cd4ff'
  },
  {
    id: 'fake-slackers', title: '偽裝學渣', author: '木瓜黃', status: '已讀', progress: null, rating: 4,
    tags: ['校園', 'BL', '青春', '輕鬆'], themes: ['校園', 'BL'],
    quote: '一起去啊，更遠的地方。',
    readerNote: '表面上是兩個不好惹的「學渣」，實際上卻是把彼此拉進人生的人。它有校園日常的輕快和鬥嘴，也有一起朝著更遠地方走去的那種勇氣，很適合想讀青春感強、節奏舒服的故事時翻開。',
    synopsis: '兩名各自藏著實力的高中生，在校園裡以「學渣」身分相遇；從互相試探到並肩面對學業與成長，故事也隨之展開。',
    source: { label: '晉江文學城《偽裝學渣》作品頁', url: 'https://www.jjwxc.net/onebook.php?novelid=3190033' }, accent: '#82d8d2'
  },
  {
    id: 'mou-mou', title: '某某', author: '木蘇里', status: '已讀', progress: null, rating: 5,
    tags: ['校園', 'BL', '青春', '成長'], themes: ['校園', 'BL'],
    quote: '那個夏天的蟬鳴比哪一年都聒噪，教室窗外枝椏瘋長，卻總也擋不住烈陽。',
    readerNote: '它把校園裡很細小的瞬間寫得很有溫度：教室、盛夏、一起往前走的日子。感情線慢慢發生，卻不會只停在甜；那些長大後才懂得回望的片段，會讓整個故事留下很長的餘韻。',
    synopsis: '兩名高中生因重組家庭而相識，從一開始的不對付，到在校園日常與彼此陪伴中逐漸靠近。',
    source: { label: '晉江文學城《某某》作品頁', url: 'https://www.jjwxc.net/onebook.php?novelid=3173202' }, accent: '#a8c8ff'
  },
  {
    id: 'breaking-through-the-clouds', title: '破雲', author: '淮上', status: '已讀', progress: null, rating: 5,
    tags: ['懸疑', '刑偵推理', 'BL', '案件'], themes: ['懸疑', '刑偵推理', 'BL'],
    quote: '所有戰場到最後，都是信念與自身的較量。',
    readerNote: '如果你想找一部案件夠緊、人物也撐得住的刑偵故事，這本很適合。追查真相的過程有壓力也有節奏，而人物之間在懷疑、信任和信念裡拉扯，讓它不只是解謎而已。',
    synopsis: '一場未解的緝毒行動改變了多人的命運。多年後，隨著新的案件出現，埋藏的線索與真相也被迫再次浮出水面。',
    source: { label: '晉江文學城《破雲》作品頁', url: 'https://www.jjwxc.net/onebook.php?novelid=3395943.2020' }, accent: '#d7a2ff'
  }
];
