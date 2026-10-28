/* 代码练习场逻辑:基于 Pyodide 在浏览器中运行 Python */

(() => {
  const editor = document.getElementById('codeEditor');
  const output = document.getElementById('output');
  const runBtn = document.getElementById('runBtn');
  const clearBtn = document.getElementById('clearBtn');
  const statusText = document.getElementById('statusText');
  const spinner = document.getElementById('spinner');
  const versionEl = document.getElementById('pythonVersion');
  const examplesBar = document.getElementById('examplesBar');

  let pyodide = null;
  let ready = false;

  // ---------- Pyodide 初始化 ----------

  async function initPyodide() {
    statusText.textContent = '正在加载 Python 运行时(Pyodide)…';
    try {
      pyodide = await loadPyodide();
      versionEl.textContent = `Python ${pyodide.version}`;
      ready = true;
      statusText.textContent = '准备就绪';
      spinner.classList.remove('on');
      runBtn.disabled = false;
      runBtn.textContent = '▶ 运行';

      loadDefaultCode();
    } catch (err) {
      console.error(err);
      statusText.textContent = '运行时加载失败';
      spinner.classList.remove('on');
      appendOutput('❌ 无法加载 Python 运行时: ' + err.message, 'out-err');
    }
  }

  // ---------- 输出捕获 ----------

  // 重定向 Python 的 stdout/stderr 到前端
  function setupStdio() {
    if (!pyodide) return;

    const originalWrite = pyodide._fs ? null : null;

    // 使用 pyodide.setStdout / setStderr (Pyodide 支持)
    pyodide.setStdout({ batched: (msg) => appendOutput(msg, 'out-line') });
    pyodide.setStderr({ batched: (msg) => appendOutput(msg, 'out-err') });
  }

  function appendOutput(text, cls = '') {
    const div = document.createElement('div');
    div.className = `out-line ${cls}`.trim();
    div.textContent = text;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
  }

  // ---------- 运行代码 ----------

  async function runCode() {
    if (!ready || !pyodide) return;

    const code = editor.value.trim();
    if (!code) return;

    output.innerHTML = '';
    runBtn.disabled = true;
    runBtn.textContent = '执行中…';
    spinner.classList.add('on');
    statusText.textContent = '执行中…';

    try {
      setupStdio();

      // 让 print() 的输出走我们的 stdout 回调
      await pyodide.runPythonAsync(code);

      // 额外打印最后一个表达式的值(REPL 风格)
      appendOutput('✅ 执行完成', 'ok-badge');
    } catch (err) {
      const msg = err && err.message ? err.message : String(err);
      appendOutput(`❌ ${msg}`, 'out-err');
    } finally {
      runBtn.disabled = false;
      runBtn.textContent = '▶ 运行';
      spinner.classList.remove('on');
      statusText.textContent = '就绪';
    }
  }

  // ---------- 默认示例 ----------

  const examples = [
    {
      label: 'Hello World',
      code: "print(\"Hello, Python!\")\nprint(\"欢迎使用在线练习场\")"
    },
    {
      label: '列表推导式',
      code: "nums = range(1, 11)\nsquares = [x * x for x in nums if x % 2 == 0]\nprint(squares)"
    },
    {
      label: '函数与装饰器',
      code: "def timer(func):\n    import time\n    def wrapper(*args):\n        start = time.time()\n        result = func(*args)\n        print(f\"{func.__name__} 耗时: {time.time() - start:.4f}s\")\n        return result\n    return wrapper\n\n@timer\ndef hello():\n    print(\"Hello from decorator!\")\n\nhello()"
    },
    {
      label: '文件操作(pathlib)',
      code: "from pathlib import Path\np = Path('hello.txt')\np.write_text('Hello from Pyodide!', encoding='utf-8')\nprint(p.read_text(encoding='utf-8'))"
    }
  ];

  function renderExamples() {
    examplesBar.innerHTML = '';
    const label = document.createElement('span');
    label.textContent = '示例:';
    label.style.cssText = 'font-size:12px;color:var(--text-faint);align-self:center;margin-right:8px;';
    examplesBar.appendChild(label);

    examples.forEach((ex, i) => {
      const btn = document.createElement('button');
      btn.className = 'ex-chip';
      btn.textContent = ex.label;
      btn.title = ex.code;
      btn.addEventListener('click', () => {
        editor.value = ex.code;
        output.innerHTML = '';
      });
      examplesBar.appendChild(btn);
    });
  }

  function loadDefaultCode() {
    editor.value = examples[0].code;
  }

  // ---------- 事件绑定 ----------

  runBtn.addEventListener('click', runCode);

  clearBtn.addEventListener('click', () => {
    editor.value = '';
    output.innerHTML = '<div class="out-info">输出已清空。</div>';
  });

  editor.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.value = editor.value.slice(0, start) + '    ' + editor.value.slice(end);
      editor.selectionStart = editor.selectionEnd = start + 4;
    }
  });

  // ---------- 启动 ----------

  renderExamples();
  initPyodide();

  window.runCode = runCode; // 暴露供外部调用
})();
