/* 课程详情页逻辑 */

(() => {
  const COURSES = [];

  // 合并四部分数据
  if (window.COURSES_PART1) COURSES.push(...window.COURSES_PART1);
  if (window.COURSES_PART2) COURSES.push(...window.COURSES_PART2);
  if (window.COURSES_PART3) COURSES.push(...window.COURSES_PART3);
  if (window.COURSES_PART4) COURSES.push(...window.COURSES_PART4);

  const COURSE_BY_ID = {};
  COURSES.forEach(c => { COURSE_BY_ID[c.id] = c; });

  // DOM 元素
  const els = {
    sidebarList: document.getElementById('sidebarList'),
    lessonNum: document.getElementById('lessonNum'),
    lessonLevel: document.getElementById('lessonLevel'),
    lessonDuration: document.getElementById('lessonDuration'),
    lessonTitle: document.getElementById('lessonTitle'),
    lessonSubtitle: document.getElementById('lessonSubtitle'),
    lessonContent: document.getElementById('lessonContent'),
    prevLink: document.getElementById('prevLink'),
    prevName: document.getElementById('prevName'),
    nextLink: document.getElementById('nextLink'),
    nextName: document.getElementById('nextName'),
    progressText: document.getElementById('progressText'),
    progressFill: document.getElementById('progressFill'),
    navCta: document.getElementById('navCta')
  };

  // 从 URL 查询参数获取课程 id
  const params = new URLSearchParams(location.search);
  let currentId = params.get('id') || 'intro';
  if (!COURSE_BY_ID[currentId]) currentId = 'intro';

  // 进度存储(localStorage)
  const STORAGE_KEY = 'py_learn_progress';
  let completed = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));

  // ---------- 工具函数 ----------

  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // 支持 **粗体**、`行内代码`、[链接](url) 的轻量富文本
  function richText(text) {
    let html = escapeHtml(text);
    html = html.replace(/`([^`]+)`/g, '<span class="inline-code">$1</span>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return html;
  }

  function renderCode(code) {
    const KEYWORDS = 'def|class|if|elif|else|for|while|try|except|finally|with|as|import|from|return|yield|raise|assert|in|is|and|or|not|True|False|None|async|await|lambda|global|nonlocal|del|break|continue|pass|match|case';
    const TOKEN_RE = new RegExp(
      '(\\"\\"\\"[\\s\\S]*?\\"\\"\\"|\\\'\\\'\\\'[\\s\\S]*?\\\'\\\'\\\')|' +          // 三引号字符串
      '("([^"\\\\\\n]|\\\\.)*"|\\\'([^\\\'\\\\\\n]|\\\\.)*\\\'|`([^`\\\\]|\\\\.)*`)|' + // 普通字符串
      '(#.*)|' +                                                                  // 注释
      '(\\b(?:' + KEYWORDS + ')\\b)|' +                                           // 关键字
      '(\\b\\d+\\.?\\d*(?:[eE][+-]?\\d+)?\\b)|' +                                 // 数字
      '(@\\w+)|' +                                                                // 装饰器
      '(\\b[A-Za-z_]\\w*)(?=\\s*\\()|' +                                          // 函数调用
      '(\\b[A-Z][A-Za-z0-9_]*\\b)',                                               // 类名/常量
      'g'
    );

    const AMP = String.fromCharCode(38);
    const LT = String.fromCharCode(60);
    const GT = String.fromCharCode(62);
    const esc = s => s.split(AMP).join(AMP + 'amp;').split(LT).join(AMP + 'lt;').split(GT).join(AMP + 'gt;');
    let out = '';
    let last = 0;
    let m;
    while ((m = TOKEN_RE.exec(code)) !== null) {
      out += esc(code.slice(last, m.index));
      const t = m[0];
      if (m[1]) out += `<span class="tok-str">${esc(t)}</span>`;
      else if (m[2]) out += `<span class="tok-str">${esc(t)}</span>`;
      else if (m[3]) out += `<span class="tok-com">${esc(t)}</span>`;
      else if (m[4]) out += `<span class="tok-kw">${esc(t)}</span>`;
      else if (m[5]) out += `<span class="tok-num">${esc(t)}</span>`;
      else if (m[6]) out += `<span class="tok-cls">${esc(t)}</span>`;
      else if (m[7]) out += `<span class="tok-fn">${esc(t)}</span>`;
      else if (m[8]) out += `<span class="tok-cls">${esc(t)}</span>`;
      else out += esc(t);
      last = m.index + t.length;
      if (TOKEN_RE.lastIndex === m.index) TOKEN_RE.lastIndex++;
    }
    out += esc(code.slice(last));
    return `<pre>${out}</pre>`;
  }

  // ---------- 进度 ----------

  function updateProgress() {
    const done = Array.from(completed).filter(id => COURSE_BY_ID[id]).length;
    els.progressText.textContent = `${done} / ${COURSES.length}`;
    if (els.progressFill) {
      const pct = COURSES.length ? (done / COURSES.length) * 100 : 0;
      els.progressFill.style.width = `${pct}%`;
    }
    // 全部课程完成且至少完成过一节，显示证书入口
    const certBtn = document.getElementById('certBtn');
    if (certBtn) {
      certBtn.style.display = (done === COURSES.length && done > 0) ? 'inline-block' : 'none';
    }
  }

  function markCompleted(id) {
    completed.add(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completed)));
    renderSidebar();
    updateProgress();
  }

  // ---------- 课程内容渲染 ----------

  function renderSection(section) {
    switch (section.t) {
      case 'h2':
        return `<h2>${richText(section.text)}</h2>`;
      case 'h3':
        return `<h3>${richText(section.text)}</h3>`;
      case 'p':
        return `<p>${richText(section.text)}</p>`;
      case 'ul':
        return `<ul>${section.items.map(i => `<li>${richText(i)}</li>`).join('')}</ul>`;
      case 'code':
        return `<div class="code-block"><div class="code-block-head">${escapeHtml(section.file || 'code')}</div>${renderCode(section.code)}</div>`;
      case 'callout':
        return `<div class="callout ${section.kind || 'info'}"><div class="callout-title">${escapeHtml(section.title || '提示')}</div><p>${escapeHtml(section.text || section.content || '')}</p></div>`;
      case 'table':
        return `<div class="table-wrap"><table><thead><tr>${section.head.map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>${section.rows.map(r => `<tr>${r.map(c => `<td>${escapeHtml(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      case 'quiz':
        return renderQuiz(section);
      case 'exercise':
        return renderExercise(section);
      default:
        return `<p>${escapeHtml(JSON.stringify(section))}</p>`;
    }
  }

  function renderQuiz(section) {
    const qIdx = section.qIdx || 1;
    const html = `
      <div class="quiz">
        <div class="quiz-head">
          <h3>${escapeHtml(section.title || '小测验')}</h3>
          <span class="q-idx">Q${qIdx}</span>
        </div>
        <div class="quiz-question">${escapeHtml(section.q)}</div>
        <div class="options" id="quiz-options-${qIdx}">
          ${section.options.map((opt, i) => `
            <label class="option" data-index="${i}" onclick="handleQuizAnswer(${qIdx}, ${i})">
              <span class="marker">${String.fromCharCode(65 + i)}</span>
              <span>${escapeHtml(opt)}</span>
            </label>
          `).join('')}
        </div>
        <div class="quiz-feedback" id="quiz-feedback-${qIdx}"></div>
        <div class="quiz-nav">
          <span class="quiz-score" id="quiz-score-${qIdx}"></span>
        </div>
      </div>
    `;
    return html;
  }

  // 将 handleQuizAnswer 挂到全局，供 HTML onclick 调用
  const QUIZ_STATE_KEY = 'py_quiz_state';
  let quizState = JSON.parse(localStorage.getItem(QUIZ_STATE_KEY) || '{}');

  window.handleQuizAnswer = (qIdx, selectedIdx) => {
    const optionsEl = document.getElementById(`quiz-options-${qIdx}`);
    const feedbackEl = document.getElementById(`quiz-feedback-${qIdx}`);
    const scoreEl = document.getElementById(`quiz-score-${qIdx}`);
    if (!optionsEl || !feedbackEl) return;

    // 找到对应的 quiz 数据
    let quizData = null;
    COURSES.forEach(c => {
      c.sections.forEach(s => {
        if (s.t === 'quiz' && (s.qIdx || 1) === qIdx) quizData = s;
      });
    });
    if (!quizData) return;

    const correctIdx = quizData.answer;
    const options = optionsEl.querySelectorAll('.option');

    options.forEach((opt, i) => {
      opt.classList.remove('correct', 'wrong', 'reveal');
      opt.style.cursor = 'default';
      opt.onclick = null;
    });

    const isCorrect = selectedIdx === correctIdx;
    if (isCorrect) {
      options[selectedIdx].classList.add('correct');
      feedbackEl.className = 'quiz-feedback show ok';
      feedbackEl.textContent = `✅ 正确！${quizData.explain}`;
    } else {
      options[selectedIdx].classList.add('wrong');
      options[correctIdx].classList.add('correct', 'reveal');
      feedbackEl.className = 'quiz-feedback show no';
      feedbackEl.textContent = `❌ 不正确。${quizData.explain}`;
    }

    // 更新本课得分（持久化到 localStorage，按课程 id 分组）
    if (!quizState[currentId]) quizState[currentId] = {};
    quizState[currentId][qIdx] = { answered: true, correct: isCorrect, userIdx: selectedIdx };
    localStorage.setItem(QUIZ_STATE_KEY, JSON.stringify(quizState));

    // 计算本课得分
    let correctCount = 0;
    let answeredCount = 0;
    const courseQuizState = quizState[currentId] || {};
    Object.values(courseQuizState).forEach(s => {
      if (s.answered) {
        answeredCount += 1;
        if (s.correct) correctCount += 1;
      }
    });
    scoreEl.textContent = `本课测验：${correctCount} / ${answeredCount} 答对`;

    // 全部答对则标记课程完成
    const all = COURSES.find(c => c.id === currentId);
    const totalQuizzes = all ? all.sections.filter(s => s.t === 'quiz').length : 0;
    if (answeredCount >= totalQuizzes && correctCount === totalQuizzes && totalQuizzes > 0) {
      markCompleted(currentId);
    }
  };

  function renderExercise(section) {
    const exKey = `ex_${section.title.replace(/\s+/g, '_')}`;
    const solutionShown = localStorage.getItem(exKey) === '1';
    return `
      <div class="exercise">
        <h3>💻 ${escapeHtml(section.title)}</h3>
        <div class="task">${escapeHtml(section.task)}</div>
        <div class="starter">${escapeHtml(section.starter || '')}</div>
        <button class="reveal-btn" id="reveal-${exKey}">${solutionShown ? '隐藏参考答案' : '查看参考答案'}</button>
        <div class="solution" id="solution-${exKey}" style="display:${solutionShown ? 'block' : 'none'};margin-top:12px;padding:12px;background:var(--surface);border:1px solid var(--border);border-radius:9px;">
          <div style="font-size:12.5px;color:var(--text-faint);margin-bottom:6px;">参考答案</div>
          <pre style="font-family:var(--mono);font-size:13.3px;line-height:1.8;color:var(--text);overflow-x:auto;">${escapeHtml(section.solution || '')}</pre>
        </div>
      </div>
    `;
  }

  function renderLesson(course) {
    if (!course) return;

    // 页头
    els.lessonNum.textContent = course.num;
    els.lessonLevel.textContent = course.levelText;
    els.lessonLevel.className = `course-level lv-${course.level}`;
    els.lessonDuration.textContent = course.duration;
    els.lessonTitle.textContent = course.title;
    els.lessonSubtitle.textContent = course.subtitle;

    // 正文(为测验编号,便于评分)
    let quizCounter = 0;
    const html = course.sections.map(section => {
      if (section.t === 'quiz') {
        quizCounter += 1;
        section.qIdx = quizCounter;
      }
      return renderSection(section);
    }).join('');
    els.lessonContent.innerHTML = html;

    // 代码块复制按钮
    els.lessonContent.querySelectorAll('.code-block').forEach(block => {
      const head = block.querySelector('.code-block-head');
      if (!head || head.querySelector('.copy-btn')) return;
      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.textContent = '复制';
      btn.addEventListener('click', () => {
        const code = block.querySelector('pre').innerText;
        navigator.clipboard.writeText(code).then(() => {
          btn.textContent = '已复制';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = '复制';
            btn.classList.remove('copied');
          }, 1600);
        }).catch(() => {
          btn.textContent = '复制失败';
        });
      });
      head.appendChild(btn);
    });

    // 练习按钮事件
    course.sections.forEach((section, idx) => {
      if (section.t === 'exercise') {
        const exKey = `ex_${section.title.replace(/\s+/g, '_')}`;
        const btn = document.getElementById(`reveal-${exKey}`);
        if (btn) {
          btn.addEventListener('click', () => {
            const shown = localStorage.getItem(exKey) === '1';
            localStorage.setItem(exKey, shown ? '0' : '1');
            const sol = document.getElementById(`solution-${exKey}`);
            if (sol) sol.style.display = shown ? 'none' : 'block';
            btn.textContent = shown ? '查看参考答案' : '隐藏参考答案';
          });
        }
      }
    });

    // 导航
    const idx = COURSES.findIndex(c => c.id === course.id);
    const prev = COURSES[idx - 1];
    const next = COURSES[idx + 1];

    if (prev) {
      els.prevLink.href = `lesson.html?id=${prev.id}`;
      els.prevName.textContent = prev.title;
    } else {
      els.prevLink.style.display = 'none';
    }

    if (next) {
      els.nextLink.href = `lesson.html?id=${next.id}`;
      els.nextName.textContent = next.title;
    } else {
      els.nextLink.style.display = 'none';
    }

    // 标题
    document.title = `${course.num} ${course.title} | Python 学习网站`;

    // 顶部 CTA 按钮指向当前课
    if (els.navCta) {
      els.navCta.href = `lesson.html?id=${course.id}`;
    }

    // 证书按钮跳转
    const certBtn = document.getElementById('certBtn');
    if (certBtn) {
      certBtn.addEventListener('click', () => {
        location.href = 'certificate.html';
      });
    }

    // 进度：如果当前课有测验且全部正确，可视为完成
    updateProgress();

    // 恢复测验状态（持久化到 localStorage）
    restoreQuizState();
  }

  // ---------- 测验状态恢复 ----------
  // 页面加载后，根据 localStorage 保存的测验状态，恢复已回答的测验显示
  function restoreQuizState() {
    const saved = quizState[currentId];
    if (!saved) return;

    const quizEls = els.lessonContent.querySelectorAll('.quiz');
    quizEls.forEach(quizEl => {
      const qIdxEl = quizEl.querySelector('.q-idx');
      if (!qIdxEl) return;
      const qIdx = parseInt(qIdxEl.textContent.replace('Q', ''), 10);
      const state = saved[qIdx];
      if (!state || !state.answered) return;

      const options = quizEl.querySelectorAll('.option');
      const feedbackEl = quizEl.querySelector('.quiz-feedback');
      const scoreEl = quizEl.querySelector('.quiz-score');

      // 找到正确答案索引：需要重新读取 quiz 数据
      let quizData = null;
      COURSES.forEach(c => {
        c.sections.forEach(s => {
          if (s.t === 'quiz' && (s.qIdx || 1) === qIdx) quizData = s;
        });
      });
      if (!quizData) return;
      const correctIdx = quizData.answer;

      options.forEach((opt, i) => {
        opt.style.cursor = 'default';
        opt.onclick = null;
        if (i === correctIdx) {
          opt.classList.add('correct');
        } else if (i === state.userIdx && state.userIdx !== correctIdx) {
          opt.classList.add('wrong');
        } else if (i === state.userIdx && state.userIdx === correctIdx) {
          opt.classList.add('correct');
        }
      });

      if (feedbackEl) {
        if (state.correct) {
          feedbackEl.className = 'quiz-feedback show ok';
          feedbackEl.textContent = `✅ 正确！`;
        } else {
          feedbackEl.className = 'quiz-feedback show no';
          feedbackEl.textContent = `❌ 不正确。`;
        }
      }
    });
  }

  // ---------- 侧边栏 ----------

  function renderSidebar() {
    els.sidebarList.innerHTML = COURSES.map((c, i) => {
      const done = completed.has(c.id);
      return `
        <div class="side-item ${done ? 'active' : ''} ${c.id === currentId ? 'active' : ''}" onclick="location='lesson.html?id=${c.id}'">
          <span class="idx">${c.num}</span>
          <span>${escapeHtml(c.title)}</span>
          ${done ? '<span class="badge">✓</span>' : ''}
        </div>
      `;
    }).join('');
  }

  // ---------- 启动 ----------

  renderSidebar();
  renderLesson(COURSE_BY_ID[currentId]);
  updateProgress();

  // 移动端菜单
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }
  // 主题切换初始化
  if (window.initThemeToggle) window.initThemeToggle();
})();
