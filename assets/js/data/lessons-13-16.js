/* 课程数据 Part 4:第 13-16 课 */
window.COURSES_PART4 = [
  {
    id: "flask",
    num: "13",
    title: "Python Web 开发：Flask 入门",
    subtitle: "搭建第一个 Web 应用、路由、模板与表单",
    level: "intermediate",
    levelText: "进阶",
    duration: "50 分钟",
    icon: "🌐",
    summary: "使用 Flask 构建轻量级 Web 应用，掌握路由定义、模板渲染、表单处理和静态文件。",
    sections: [
      { t: "h2", text: "什么是 Flask?" },
      { t: "p", text: "Flask 是一个轻量级的 Python Web 框架，被称为「微框架」，核心功能精简，但通过扩展可以很容易地添加数据库、认证、表单验证等功能。适合快速原型开发和中小型项目。" },
      { t: "code", file: "terminal", code: "pip install flask" },
      { t: "h2", text: "第一个 Flask 应用" },
      { t: "code", file: "app.py", code: "from flask import Flask\n\napp = Flask(__name__)\n\n@app.route(\"/\")\ndef hello():\n    return \"Hello, Flask!\"\n\nif __name__ == \"__main__\":\n    app.run(debug=True)" },
      { t: "callout", kind: "info", title: "运行方式", text: "在终端执行 `python app.py`，然后在浏览器打开 `http://127.0.0.1:5000/` 即可看到结果。`debug=True` 会开启自动重载，代码修改后无需手动重启服务器。" },
      { t: "h2", text: "路由与动态 URL" },
      { t: "code", file: "app.py", code: "@app.route(\"/\")\ndef index():\n    return \"首页\"\n\n@app.route(\"/about\")\ndef about():\n    return \"关于我们\"\n\n@app.route(\"/user/<name>\")\ndef user_profile(name):\n    return f\"用户: {name}\"\n\n@app.route(\"/post/<int:post_id>\")\ndef show_post(post_id):\n    return f\"文章 ID: {post_id}\"" },
      { t: "h2", text: "模板渲染" },
      { t: "p", text: "Flask 使用 Jinja2 模板引擎。模板文件放在 `templates/` 目录下，使用 `render_template()` 渲染。" },
      { t: "code", file: "app.py", code: "from flask import render_template\n\n@app.route(\"/hello/<name>\")\ndef hello_name(name):\n    return render_template(\"hello.html\", name=name)" },
      { t: "code", file: "templates/hello.html", code: "<!DOCTYPE html>\n<html>\n<head><title>问候</title></head>\n<body>\n  <h1>Hello, {{ name }}!</h1>\n  <p>欢迎来到我们的 Flask 应用。</p>\n</body>\n</html>" },
      { t: "h2", text: "表单处理" },
      { t: "code", file: "app.py", code: "from flask import request, render_template\n\n@app.route(\"/login\", methods=[\"GET\", \"POST\"])\ndef login():\n    if request.method == \"POST\":\n        username = request.form.get(\"username\")\n        password = request.form.get(\"password\")\n        return f\"欢迎, {username}!\"\n    return render_template(\"login.html\")" },
      { t: "code", file: "templates/login.html", code: "<form method=\"post\">\n  <p>用户名: <input type=\"text\" name=\"username\"></p>\n  <p>密码: <input type=\"password\" name=\"password\"></p>\n  <button type=\"submit\">登录</button>\n</form>" },
      { t: "callout", kind: "warn", title: "表单安全", text: "生产环境中请务必使用 CSRF 保护（Flask-WTF 扩展），并对用户输入进行验证和转义，防止 XSS 攻击。" },
      { t: "h2", text: "项目结构建议" },
      { t: "code", file: "text", code: "my_flask_app/\n├── app.py\n├── templates/\n│   ├── base.html\n│   ├── hello.html\n│   └── login.html\n├── static/\n│   ├── css/style.css\n│   └── js/app.js\n└── requirements.txt" },
      { t: "callout", kind: "tip", title: "下一步", text: "掌握 Flask 基础后，可以学习 Flask-SQLAlchemy（数据库）、Flask-Login（用户认证）、Flask-RESTful（API 开发）。" }
    ],
    quiz: [
      {
        q: "Flask 中 `@app.route(\"/user/<name>\")` 的作用是什么?",
        options: [
          "定义一个名为 name 的固定路由",
          "捕获 URL 动态参数并传给视图函数",
          "重定向到 /user 页面",
          "对 name 参数进行加密"
        ],
        answer: 1,
        explain: "尖括号语法定义了动态 URL 参数，Flask 会将匹配的值作为参数传给视图函数。"
      },
      {
        q: "渲染 HTML 模板应该使用哪个 Flask 函数?",
        options: ["render_page()", "render_template()", "template()", "html()"],
        answer: 1,
        explain: "Flask 提供 `render_template()` 来渲染 `templates/` 目录下的 Jinja2 模板。"
      },
      {
        q: "在视图函数中，如何获取 POST 表单提交的字段?",
        options: ["request.form.get(\"字段名\")", "request.args.get(\"字段名\")", "request.json[\"字段名\"]", "request.data[\"字段名\"]"],
        answer: 0,
        explain: "`request.form` 用于获取 application/x-www-form-urlencoded 格式的表单数据。"
      },
      {
        q: "Flask 被称为「微框架」的原因是?",
        options: ["代码量非常少", "核心功能精简，通过扩展添加功能", "只能开发微型应用", "不支持模板"],
        answer: 1,
        explain: "Flask 核心只提供路由、请求处理等基础功能，数据库、认证等通过扩展库按需添加。"
      }
    ],
    exercise: {
      title: "练习:个人主页应用",
      task: "编写一个 Flask 应用，包含三个页面:首页(/)显示欢迎语，关于页(/about)显示个人简介，联系页(/contact)显示联系方式。使用模板渲染，并在底部显示当前年份。",
      starter: "from flask import Flask, render_template\n\napp = Flask(__name__)\n\n# 首页路由\n\n# 关于页路由\n\n# 联系页路由\n\nif __name__ == \"__main__\":\n    app.run(debug=True)",
      solution: "from flask import Flask, render_template\nfrom datetime import datetime\n\napp = Flask(__name__)\n\n@app.route(\"/\")\ndef index():\n    return render_template(\"index.html\", year=datetime.now().year)\n\n@app.route(\"/about\")\ndef about():\n    return render_template(\"about.html\", year=datetime.now().year)\n\n@app.route(\"/contact\")\ndef contact():\n    return render_template(\"contact.html\", year=datetime.now().year)\n\nif __name__ == \"__main__\":\n    app.run(debug=True)"
    }
  },
  {
    id: "pandas",
    num: "14",
    title: "数据分析入门：Pandas",
    subtitle: "DataFrame、数据清洗、分组聚合与可视化",
    level: "intermediate",
    levelText: "进阶",
    duration: "55 分钟",
    icon: "📊",
    summary: "掌握 Pandas 核心数据结构 Series 和 DataFrame，完成数据导入、清洗、分组聚合和基础可视化。",
    sections: [
      { t: "h2", text: "安装与导入" },
      { t: "code", file: "terminal", code: "pip install pandas matplotlib" },
      { t: "code", file: "python", code: "import pandas as pd\nimport matplotlib.pyplot as plt" },
      { t: "h2", text: "Series 与 DataFrame" },
      { t: "p", text: "Pandas 有两个核心对象：`Series`（一维带标签数组）和 `DataFrame`（二维表格，类似 Excel）。" },
      { t: "code", file: "python", code: "import pandas as pd\n\n# Series\ns = pd.Series([1, 3, 5, 7, 9], index=[\"a\", \"b\", \"c\", \"d\", \"e\"])\nprint(s)\nprint(s[\"b\"])  # 3\n\n# DataFrame\ndata = {\n    \"姓名\": [\"Alice\", \"Bob\", \"Charlie\", \"Diana\"],\n    \"年龄\": [25, 30, 35, 28],\n    \"城市\": [\"北京\", \"上海\", \"广州\", \"深圳\"]\n}\ndf = pd.DataFrame(data)\nprint(df)\n\n# 查看基本信息\nprint(df.shape)        # (4, 3)\nprint(df.columns)      # Index(['姓名', '年龄', '城市'])\nprint(df.dtypes)       # 每列的数据类型" },
      { t: "h2", text: "读取数据" },
      { t: "code", file: "python", code: "# 从 CSV 读取\ndf = pd.read_csv(\"data.csv\")\n\n# 从 Excel 读取\ndf = pd.read_excel(\"data.xlsx\", sheet_name=\"Sheet1\")\n\n# 从 JSON 读取\ndf = pd.read_json(\"data.json\")\n\n# 查看前 5 行\nprint(df.head())\nprint(df.info())" },
      { t: "h2", text: "数据清洗" },
      { t: "code", file: "python", code: "# 处理缺失值\ndf = df.dropna()                    # 删除含缺失值的行\ndf = df.fillna(0)                   # 用 0 填充缺失值\ndf[\"年龄\"] = df[\"年龄\"].fillna(df[\"年龄\"].mean())  # 用平均值填充\n\n# 删除重复行\ndf = df.drop_duplicates()\n\n# 重命名列\ndf = df.rename(columns={\"旧列名\": \"新列名\"})\n\n# 类型转换\ndf[\"年龄\"] = df[\"年龄\"].astype(int)" },
      { t: "h2", text: "数据筛选与排序" },
      { t: "code", file: "python", code: "# 筛选：年龄大于 30 的人\nadults = df[df[\"年龄\"] > 30]\n\n# 多条件筛选\nbeijing_adults = df[(df[\"城市\"] == \"北京\") & (df[\"年龄\"] > 30)]\n\n# 排序\ndf_sorted = df.sort_values(by=\"年龄\", ascending=False)\n\n# 选择特定列\nnames = df[\"姓名\"]          # 返回 Series\nsubset = df[[\"姓名\", \"城市\"]]  # 返回 DataFrame" },
      { t: "h2", text: "分组聚合" },
      { t: "code", file: "python", code: "# 按城市分组，计算平均年龄\navg_age = df.groupby(\"城市\")[\"年龄\"].mean()\nprint(avg_age)\n\n# 多种聚合\nsummary = df.groupby(\"城市\").agg({\n    \"年龄\": [\"mean\", \"min\", \"max\"],\n    \"姓名\": \"count\"\n})\nprint(summary)" },
      { t: "h2", text: "基础可视化" },
      { t: "code", file: "python", code: "import matplotlib.pyplot as plt\n\n# 柱状图：各城市人数\ndf[\"城市\"].value_counts().plot(kind=\"bar\")\nplt.title(\"各城市人数分布\")\nplt.xlabel(\"城市\")\nplt.ylabel(\"人数\")\nplt.show()\n\n# 折线图：年龄分布\ndf[\"年龄\"].plot(kind=\"hist\", bins=10)\nplt.title(\"年龄分布直方图\")\nplt.show()" },
      { t: "callout", kind: "tip", title: "数据分析工作流", text: "典型的 Pandas 工作流:导入数据 → 探索(df.head()/info()/describe()) → 清洗(缺失值/重复值/类型) → 转换(筛选/排序/分组) → 输出(CSV/Excel/图表)。" }
    ],
    quiz: [
      {
        q: "Pandas 中，`df.head()` 默认显示多少行?",
        options: ["5 行", "10 行", "全部行", "1 行"],
        answer: 0,
        explain: "`head()` 默认返回前 5 行，可传入参数指定行数，如 `head(10)`。"
      },
      {
        q: "如何删除 DataFrame 中所有缺失值的行?",
        options: ["df.dropna()", "df.fillna()", "df.remove_null()", "df.clean()"],
        answer: 0,
        explain: "`dropna()` 删除包含 NaN 的行，`how='all'` 可只删除所有值都缺失的行。"
      },
      {
        q: "按某列分组并计算平均值的正确写法是?",
        options: ["df.group(\"城市\").mean()", "df.groupby(\"城市\").mean()", "df.cluster(\"城市\").avg()", "df.sort_by(\"城市\").mean()"],
        answer: 1,
        explain: "`groupby()` 是 Pandas 的分组操作，后接聚合函数如 `.mean()`、`.sum()`、`.count()`。"
      },
      {
        q: "读取 CSV 文件使用哪个函数?",
        options: ["pd.read_csv()", "pd.load_csv()", "pd.import_csv()", "pd.open_csv()"],
        answer: 0,
        explain: "`pd.read_csv()` 是 Pandas 读取 CSV 文件的标准函数。"
      }
    ],
    exercise: {
      title: "练习:销售数据分析",
      task: "给定一个包含 订单ID、产品、数量、单价、地区 的销售数据 DataFrame，完成:1)计算每行的总金额(数量×单价)并添加为新列;2)按地区分组，计算总销售额;3)找出销售额最高的地区;4)将结果保存为 CSV。",
      starter: "import pandas as pd\n\ndata = {\n    \"订单ID\": [1, 2, 3, 4, 5],\n    \"产品\": [\"笔记本\", \"鼠标\", \"键盘\", \"显示器\", \"耳机\"],\n    \"数量\": [2, 5, 3, 1, 4],\n    \"单价\": [4500, 80, 200, 1500, 300],\n    \"地区\": [\"华东\", \"华北\", \"华东\", \"华南\", \"华北\"]\n}\ndf = pd.DataFrame(data)\n\n# 1) 添加总金额列\n# 2) 按地区分组计算总销售额\n# 3) 找出销售额最高地区\n# 4) 保存结果\n",
      solution: "import pandas as pd\n\ndata = {\n    \"订单ID\": [1, 2, 3, 4, 5],\n    \"产品\": [\"笔记本\", \"鼠标\", \"键盘\", \"显示器\", \"耳机\"],\n    \"数量\": [2, 5, 3, 1, 4],\n    \"单价\": [4500, 80, 200, 1500, 300],\n    \"地区\": [\"华东\", \"华北\", \"华东\", \"华南\", \"华北\"]\n}\ndf = pd.DataFrame(data)\n\n# 1) 添加总金额列\ndf[\"总金额\"] = df[\"数量\"] * df[\"单价\"]\n\n# 2) 按地区分组计算总销售额\nregion_sales = df.groupby(\"地区\")[\"总金额\"].sum()\nprint(region_sales)\n\n# 3) 找出销售额最高地区\ntop_region = region_sales.idxmax()\nprint(f\"销售额最高地区: {top_region}\")\n\n# 4) 保存结果\ndf.to_csv(\"sales_with_amount.csv\", index=False, encoding=\"utf-8-sig\")\nregion_sales.to_csv(\"region_sales.csv\", encoding=\"utf-8-sig\")"
    }
  },
  {
    id: "pytest",
    num: "15",
    title: "自动化测试：pytest",
    subtitle: "编写单元测试、断言、fixture 与参数化测试",
    level: "intermediate",
    levelText: "进阶",
    duration: "45 分钟",
    icon: "🧪",
    summary: "掌握 pytest 基础用法，编写可维护的单元测试，使用 fixture 管理测试数据，参数化测试覆盖多种场景。",
    sections: [
      { t: "h2", text: "安装 pytest" },
      { t: "code", file: "terminal", code: "pip install pytest" },
      { t: "h2", text: "编写第一个测试" },
      { t: "p", text: "pytest 约定测试文件命名为 `test_*.py` 或 `*_test.py`，测试函数命名为 `test_*` 开头。使用 Python 原生的 `assert` 进行断言。" },
      { t: "code", file: "calculator.py", code: "def add(a, b):\n    return a + b\n\ndef divide(a, b):\n    if b == 0:\n        raise ValueError(\"不能除以零\")\n    return a / b" },
      { t: "code", file: "test_calculator.py", code: "from calculator import add, divide\n\ndef test_add_positive():\n    assert add(2, 3) == 5\n\ndef test_add_negative():\n    assert add(-1, -2) == -3\n\ndef test_divide():\n    assert divide(10, 2) == 5\n\ndef test_divide_by_zero():\n    try:\n        divide(1, 0)\n        assert False, \"应该抛出 ValueError\"\n    except ValueError:\n        pass" },
      { t: "callout", kind: "info", title: "运行测试", text: "在项目根目录执行 `pytest`，会自动发现并运行所有测试文件。使用 `-v` 参数查看详细输出。" },
      { t: "h2", text: "断言写法" },
      { t: "code", file: "test_calculator.py", code: "def test_string():\n    name = \"Python\"\n    assert name.startswith(\"Py\")\n    assert \"thon\" in name\n    assert len(name) == 6\n\ndef test_list():\n    items = [1, 2, 3]\n    assert 3 in items\n    assert len(items) == 3\n    assert items == [1, 2, 3]\n\ndef test_none():\n    result = None\n    assert result is None" },
      { t: "h2", text: "Fixture:测试数据管理" },
      { t: "p", text: "使用 `@pytest.fixture` 定义可复用的测试数据或资源，测试函数通过参数名注入 fixture。" },
      { t: "code", file: "test_calculator.py", code: "import pytest\n\n@pytest.fixture\ndef calculator_data():\n    return {\"a\": 10, \"b\": 5, \"expected_sum\": 15}\n\ndef test_add_with_fixture(calculator_data):\n    from calculator import add\n    assert add(calculator_data[\"a\"], calculator_data[\"b\"]) == calculator_data[\"expected_sum\"]" },
      { t: "h2", text: "参数化测试" },
      { t: "p", text: "使用 `@pytest.mark.parametrize` 用不同输入运行同一个测试函数，避免重复代码。" },
      { t: "code", file: "test_calculator.py", code: "import pytest\nfrom calculator import add\n\n@pytest.mark.parametrize(\"a,b,expected\", [\n    (1, 2, 3),\n    (0, 0, 0),\n    (-1, 1, 0),\n    (100, 200, 300),\n])\ndef test_add_various(a, b, expected):\n    assert add(a, b) == expected" },
      { t: "h2", text: "测试异常" },
      { t: "code", file: "test_calculator.py", code: "import pytest\nfrom calculator import divide\n\ndef test_divide_by_zero_pytest():\n    with pytest.raises(ValueError, match=\"不能除以零\"):\n        divide(1, 0)" },
      { t: "h2", text: "测试覆盖率" },
      { t: "code", file: "terminal", code: "pip install pytest-cov\npytest --cov=calculator test_calculator.py" },
      { t: "callout", kind: "tip", title: "测试命名规范", text: "测试函数名应描述「测试什么场景 + 预期结果」，如 `test_add_with_negative_numbers_returns_correct_sum`，比 `test_add1` 更易维护。" }
    ],
    quiz: [
      {
        q: "pytest 默认发现测试文件的命名约定是?",
        options: ["test_*.py", "*.test.py", "tests.py", "所有 .py 文件"],
        answer: 0,
        explain: "pytest 默认查找 `test_*.py` 或 `*_test.py` 命名的文件。"
      },
      {
        q: "pytest 中用于定义可复用测试数据的装饰器是?",
        options: ["@pytest.fixture", "@pytest.mark", "@pytest.param", "@pytest.setup"],
        answer: 0,
        explain: "`@pytest.fixture` 定义 fixture，可在测试函数通过参数名注入。"
      },
      {
        q: "参数化测试使用哪个标记?",
        options: ["@pytest.fixture", "@pytest.mark.parametrize", "@pytest.mark.skip", "@pytest.mark.xfail"],
        answer: 1,
        explain: "`@pytest.mark.parametrize` 用于用多组参数运行同一测试。"
      },
      {
        q: "断言某个异常被抛出的正确写法是?",
        options: ["try/except + assert False", "pytest.raises()", "assert_raises()", "expect_exception()"],
        answer: 1,
        explain: "`pytest.raises(ValueError)` 上下文管理器用于断言代码块抛出指定异常。"
      }
    ],
    exercise: {
      title: "练习:编写字符串工具测试",
      task: "创建一个 `string_utils.py`，包含 `reverse(s)`(字符串反转)、`is_palindrome(s)`(判断回文)、`count_vowels(s)`(统计元音)三个函数。编写对应的 `test_string_utils.py`，覆盖正常输入、空字符串、特殊字符等边界情况，并使用参数化测试。",
      starter: "# string_utils.py\ndef reverse(s):\n    pass\n\ndef is_palindrome(s):\n    pass\n\ndef count_vowels(s):\n    pass\n\n# test_string_utils.py\n# 编写测试\n",
      solution: "# string_utils.py\ndef reverse(s):\n    return s[::-1]\n\ndef is_palindrome(s):\n    s = s.lower().replace(\" \", \"\")\n    return s == s[::-1]\n\ndef count_vowels(s):\n    vowels = \"aeiouAEIOU\"\n    return sum(1 for ch in s if ch in vowels)\n\n# test_string_utils.py\nimport pytest\nfrom string_utils import reverse, is_palindrome, count_vowels\n\n@pytest.mark.parametrize(\"s,expected\", [\n    (\"hello\", \"olleh\"),\n    (\"\", \"\"),\n    (\"a\", \"a\"),\n    (\"Python\", \"nohtyP\"),\n])\ndef test_reverse(s, expected):\n    assert reverse(s) == expected\n\n@pytest.mark.parametrize(\"s,expected\", [\n    (\"radar\", True),\n    (\"hello\", False),\n    (\"A man a plan a canal Panama\", True),\n    (\"\", True),\n])\ndef test_is_palindrome(s, expected):\n    assert is_palindrome(s) == expected\n\n@pytest.mark.parametrize(\"s,expected\", [\n    (\"hello\", 2),\n    (\"PYTHON\", 1),\n    (\"\", 0),\n    (\"xyz\", 0),\n])\ndef test_count_vowels(s, expected):\n    assert count_vowels(s) == expected"
    }
  },
  {
    id: "ml-basics",
    num: "16",
    title: "机器学习基础：scikit-learn",
    subtitle: "线性回归、分类、模型评估与预测",
    level: "intermediate",
    levelText: "进阶",
    duration: "60 分钟",
    icon: "🤖",
    summary: "使用 scikit-learn 构建第一个机器学习模型，掌握数据拆分、训练、预测和模型评估指标。",
    sections: [
      { t: "h2", text: "安装依赖" },
      { t: "code", file: "terminal", code: "pip install scikit-learn pandas matplotlib" },
      { t: "h2", text: "机器学习工作流" },
      { t: "p", text: "典型的 scikit-learn 工作流:加载数据 → 特征与目标分离 → 训练/测试集拆分 → 模型实例化 → 拟合(训练) → 预测 → 评估。" },
      { t: "h2", text: "加载内置数据集" },
      { t: "code", file: "python", code: "from sklearn.datasets import load_iris\nimport pandas as pd\n\niris = load_iris()\nprint(iris.feature_names)  # 特征名称\nprint(iris.target_names)   # 类别名称\n\ndf = pd.DataFrame(iris.data, columns=iris.feature_names)\ndf[\"target\"] = iris.target\nprint(df.head())" },
      { t: "h2", text: "数据拆分" },
      { t: "code", file: "python", code: "from sklearn.model_selection import train_test_split\n\nX = df[iris.feature_names]  # 特征\ny = df[\"target\"]            # 目标\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\nprint(f\"训练集: {X_train.shape}, 测试集: {X_test.shape}\")" },
      { t: "callout", kind: "info", title: "为什么拆分数据?", text: "训练集用于训练模型，测试集用于评估模型对未见数据的泛化能力。random_state 保证每次运行结果可复现。" },
      { t: "h2", text: "训练模型:K-近邻分类" },
      { t: "code", file: "python", code: "from sklearn.neighbors import KNeighborsClassifier\n\nmodel = KNeighborsClassifier(n_neighbors=3)\nmodel.fit(X_train, y_train)  # 训练\n\npredictions = model.predict(X_test)  # 预测\nprint(predictions)\nprint(y_test.values)" },
      { t: "h2", text: "模型评估" },
      { t: "code", file: "python", code: "from sklearn.metrics import accuracy_score, classification_report\n\naccuracy = accuracy_score(y_test, predictions)\nprint(f\"准确率: {accuracy:.2%}\")\n\nprint(classification_report(y_test, predictions, target_names=iris.target_names))" },
      { t: "h2", text: "线性回归:预测连续值" },
      { t: "code", file: "python", code: "from sklearn.datasets import load_diabetes\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error, r2_score\n\ndiabetes = load_diabetes()\nX = diabetes.data\ny = diabetes.target\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\nreg = LinearRegression()\nreg.fit(X_train, y_train)\n\ny_pred = reg.predict(X_test)\n\nprint(f\"均方误差 (MSE): {mean_squared_error(y_test, y_pred):.2f}\")\nprint(f\"决定系数 (R²): {r2_score(y_test, y_pred):.2f}\")" },
      { t: "h2", text: "可视化预测结果" },
      { t: "code", file: "python", code: "import matplotlib.pyplot as plt\n\nplt.scatter(y_test, y_pred, alpha=0.7)\nplt.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], 'r--')\nplt.xlabel(\"真实值\")\nplt.ylabel(\"预测值\")\nplt.title(\"糖尿病进展预测: 真实值 vs 预测值\")\nplt.show()" },
      { t: "callout", kind: "warn", title: "避免数据泄露", text: "特征缩放(如 StandardScaler)应在 train_test_split 之后，仅在训练集上 fit，然后 transform 测试集。否则测试集信息会泄露到训练过程，导致评估结果过于乐观。" },
      { t: "h2", text: "下一步学习" },
      { t: "p", text: "掌握基础后，可继续学习:交叉验证(cross_val_score)、网格搜索(GridSearchCV)、管道(Pipeline)、决策树与随机森林、神经网络(MLPClassifier)。" }
    ],
    quiz: [
      {
        q: "train_test_split 中 `test_size=0.2` 的意思是?",
        options: ["20% 的数据用于训练", "20% 的数据用于测试", "随机抽取 20 条数据", "保留 20% 作为验证集"],
        answer: 1,
        explain: "`test_size=0.2` 表示 20% 的数据作为测试集，其余 80% 作为训练集。"
      },
      {
        q: "scikit-learn 中，`model.fit(X, y)` 的作用是?",
        options: ["使用数据训练模型", "对新数据进行预测", "评估模型准确率", "可视化模型"],
        answer: 0,
        explain: "`fit()` 是所有 scikit-learn 模型的训练方法，用特征 X 和目标 y 拟合模型参数。"
      },
      {
        q: "评估分类模型准确率使用哪个指标?",
        options: ["mean_squared_error", "accuracy_score", "r2_score", "classification_report"],
        answer: 1,
        explain: "`accuracy_score` 计算分类准确率（正确预测数/总样本数）。"
      },
      {
        q: "线性回归适用于哪种类型的问题?",
        options: ["分类问题", "回归问题(预测连续数值)", "聚类问题", "图像识别"],
        answer: 1,
        explain: "线性回归用于预测连续数值，如房价、气温、销售额等。"
      }
    ],
    exercise: {
      title: "练习:鸢尾花分类器",
      task: "使用 sklearn 内置的 iris 数据集，训练一个逻辑回归分类器(LogisticRegression)，拆分训练/测试集(80/20)，输出测试集准确率和分类报告。尝试更改 n_neighbors 或 test_size 观察准确率变化。",
      starter: "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score, classification_report\n\n# 加载数据\niris = load_iris()\nX = ...\ny = ...\n\n# 拆分数据\n\n# 训练模型\n\n# 预测与评估\n",
      solution: "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score, classification_report\n\n# 加载数据\niris = load_iris()\nX = iris.data\ny = iris.target\n\n# 拆分数据\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\n# 训练模型\nmodel = LogisticRegression(max_iter=200)\nmodel.fit(X_train, y_train)\n\n# 预测与评估\ny_pred = model.predict(X_test)\n\naccuracy = accuracy_score(y_test, y_pred)\nprint(f\"测试集准确率: {accuracy:.2%}\")\n\nprint(classification_report(y_test, y_pred, target_names=iris.target_names))\n\n# 尝试不同参数\nfor test_size in [0.1, 0.3, 0.5]:\n    X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=test_size, random_state=42)\n    m = LogisticRegression(max_iter=200)\n    m.fit(X_tr, y_tr)\n    acc = accuracy_score(y_te, m.predict(X_te))\n    print(f\"test_size={test_size}: 准确率 {acc:.2%}\")"
    }
  }
];
