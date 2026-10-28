/* 课程数据 Part 1:第 1-4 课 */
window.COURSES_PART1 = [
  {
    id: "intro",
    num: "01",
    title: "Python 入门与环境搭建",
    subtitle: "认识 Python,装好开发环境,跑出第一行代码",
    level: "beginner",
    levelText: "入门",
    duration: "20 分钟",
    icon: "🚀",
    summary: "了解 Python 是什么、能做什么,完成本地环境安装,并写出你的第一个程序。",
    sections: [
      { t: "h2", text: "为什么选择 Python?" },
      { t: "p", text: "Python 是一门通用型编程语言,以「语法简洁、可读性强」著称。它不像 C 语言那样需要手动管理内存,也不像 Java 那样必须经过冗长的类结构设计,几乎可以直接把想法翻译成代码。"},
      { t: "p", text: "正因为这个特点,Python 已经渗透到各行各业:数据科学用 Pandas 和 NumPy,机器学习用 PyTorch,自动化运维用 Ansible,Web 后端用 Django 和 Flask,网络爬虫用 Scrapy。它既是初学者的第一门语言,也是高级工程师日常的工具。"},
      { t: "code", file: "python", code: "# 用 5 行代码表达一个想法,这就是 Python\nnames = [\"小明\", \"小红\", \"小刚\"]\n\nfor i, name in enumerate(names, start=1):\n    print(f\"{i}. 欢迎你, {name}!\")" },
      { t: "callout", kind: "tip", title: "学习建议", text: "Python 的学习曲线前段非常平缓。你不需要先理解指针和内存分配,就能写出真正能跑的程序——这正是它适合作为第一门语言的原因。" },
      { t: "h2", text: "安装 Python" },
      { t: "p", text: "Python 有两个并行的版本分支:Python 2 已经停止维护,Python 3 是当前主流。学习新代码时只需认准 Python 3(目前 3.12 / 3.13 是主流版本)。"},
      { t: "ul", items: [
        "Windows:前往 [python.org/downloads](https://www.python.org/downloads/) 下载安装包,安装时务必勾选 **Add Python to PATH**。",
        "macOS:系统自带 Python 3,也可以用 Homebrew 执行 `brew install python` 获得更新版本。",
        "Linux:多数发行版已预装,执行 `python3 --version` 验证即可。"
      ]},
      { t: "code", file: "terminal", code: "# 验证安装,应该能看到类似输出\n$ python --version\nPython 3.13.1" },
      { t: "callout", kind: "warn", title: "常见坑", text: "在 Windows 上如果命令行提示 'python 不是内部或外部命令',说明安装时没勾选 Add Python to PATH。此时重新运行安装包 → Modify → 勾选即可。" },
      { t: "h2", text: "你的第一个程序" },
      { t: "p", text: "新建一个文件 `hello.py`,写入下面的内容,然后用 `python hello.py` 运行它。" },
      { t: "code", file: "hello.py", code: "print(\"Hello, Python!\")\nprint(\"欢迎来到 Python 学习之路\")" },
      { t: "p", text: "运行后终端会输出两行文字。`print()` 是 Python 最常用的内置函数,作用是把内容显示到屏幕上——它的括号里可以放字符串、数字、变量,甚至计算表达式。" },
      { t: "h2", text: "交互式解释器:即时代码反馈" },
      { t: "p", text: "在终端输入 `python` 启动交互模式(也叫 REPL,Read-Eval-Print-Loop)。它会逐行执行你输入的代码并立刻返回结果,是学习语法最快的方式。" },
      { t: "code", file: "交互模式", code: ">>> 2 + 3 * 4\n14\n>>> name = \"Python\"\n>>> print(f\"我正在学 {name}\")\n我正在学 Python\n>>> exit()  # 退出交互模式" },
      { t: "table", head: ["场景", "推荐方式", "原因"], rows: [
        ["写正式项目", "保存为 .py 文件后运行", "便于修改、复用、版本管理"],
        ["快速试一小段代码", "交互模式 REPL", "立刻看到结果,不用反复保存"],
        ["调试问题", "pdb 调试器 / IDE 断点", "能逐行查看变量状态"]
      ]},
      { t: "h2", text: "代码注释" },
      { t: "p", text: "注释是写给人看的说明文字,Python 解释器会直接忽略它。好的注释解释「为什么这么做」,而不是重复「做了什么」。" },
      { t: "code", file: "python", code: "# 单行注释:以 # 开头\n\ndef calculate_discount(price, rate):\n    \"\"\"\n    多行注释(文档字符串):\n    通常放在函数或类的开头,用于说明用途。\n    \"\"\"\n    return price * (1 - rate)  # 行尾注释" },
      { t: "callout", kind: "info", title: "约定", text: "Python 社区遵循 PEP 8 规范:使用 4 个空格缩进、函数名用小写加下划线、类名用大驼峰。这是官方认可的风格指南,几乎所有 Python 项目都在用。" }
    ],
    quiz: [
      {
        q: "在 Windows 安装 Python 时,哪个选项必须勾上,否则命令行无法使用 python 命令?",
        options: ["Install launcher for all users", "Add Python to PATH", "Create shortcuts for installed files", "Install documentation"],
        answer: 1,
        explain: "Add Python to PATH 会把 Python 的可执行目录加入系统环境变量,这样在任意目录下都能调用 python。"
      },
      {
        q: "下面哪一段代码是正确的 Python 注释写法?",
        options: ["// 这是注释", "<!-- 这是注释 -->", "# 这是注释", "/* 这是注释 */"],
        answer: 2,
        explain: "Python 使用 # 作为单行注释符,这是它区别于 C/Java/HTML 的语法特征。"
      },
      {
        q: "在交互模式(REPL)中输入 `2 + 3 * 4` 后,会得到什么结果?",
        options: ["20", "14", "11", "5"],
        answer: 1,
        explain: "乘法优先级高于加法,先算 3 * 4 = 12,再算 2 + 12 = 14。"
      }
    ],
    exercise: {
      title: "第一个练习:个人信息卡",
      task: "编写一段 Python 代码,定义三个变量(name 姓名、age 年龄、city 所在城市),然后用一行 print 输出类似「我是小明,今年 18 岁,来自北京」这样的一句话。",
      starter: "# 在下面写出你的代码\n",
      solution: "name = \"小明\"\nage = 18\ncity = \"北京\"\n\nprint(f\"我是{name},今年 {age} 岁,来自{city}\")"
    }
  },
  {
    id: "variables",
    num: "02",
    title: "变量与数据类型",
    subtitle: "Python 有哪几种内置类型?怎么给数据起名字?",
    level: "beginner",
    levelText: "入门",
    duration: "25 分钟",
    icon: "📦",
    summary: "掌握变量命名规则,理解字符串、整数、浮点数、布尔值和 None 的区别与类型转换。",
    sections: [
      { t: "h2", text: "变量:给数据起个名字" },
      { t: "p", text: "变量就是把一个值绑定到一个名字上。Python 使用 `=` 赋值,不需要像 Java 那样提前声明类型。" },
      { t: "code", file: "python", code: "message = \"Hello, World!\"\ncount = 100\nprice = 19.9\n\nprint(message)\nprint(count)\nprint(price)" },
      { t: "callout", kind: "info", title: "Python 是动态类型语言", text: "变量的类型在运行时由值决定,可以随时改变。同一个变量名可以先后指向字符串和数字——虽然不推荐这样写,但它不会报错。" },
      { t: "h2", text: "命名规范(PEP 8)" },
      { t: "ul", items: [
        "由字母、数字、下划线组成,不能以数字开头。",
        "区分大小写,`userName` 和 `username` 是两个不同的变量。",
        "多个单词用下划线连接,称为 **snake_case**:`user_name`、`total_price`。",
        "避免使用 Python 关键字:`if`、`class`、`for`、`True` 等作为变量名会直接报语法错误。",
        "常量习惯用全大写表示:`MAX_RETRIES = 3`。"
      ]},
      { t: "code", file: "python", code: "# ❌ 错误:以数字开头 / 使用关键字\n# 2fast = \"too fast\"\n# class = \"Python\"\n\n# ✅ 推荐\nuser_name = \"Alice\"\n_max_score = 100\nPI = 3.14159" },
      { t: "h2", text: "常用内置数据类型" },
      { t: "table", head: ["类型", "写法", "说明"], rows: [
        ["字符串 str", '"hello' + "' 或 'hello'", "文本,不可变,用引号包裹"],
        ["整数 int", "42、-7、0", "不带小数点的数字"],
        ["浮点数 float", "3.14、1.0、1e-3", "带小数或科学计数法"],
        ["布尔 bool", "True / False", "逻辑真值,首字母必须大写"],
        ["空值 NoneType", "None", "表示「没有值」,等同于 null"]
      ]},
      { t: "h3", text: "字符串" },
      { t: "p", text: "字符串用引号包裹,单引号和双引号效果相同。如果字符串内部含有引号,可以用另一种引号来包裹,或者使用三引号处理多行文本。" },
      { t: "code", file: "python", code: "name = \"Alice\"\nmsg = 'It\\'s fine'\npoem = \"\"\"第一行\n第二行\n第三行\"\"\"\n\nprint(name, msg)\nprint(poem)" },
      { t: "h3", text: "数字" },
      { t: "p", text: "整数没有大小上限(Python 3 支持任意精度),浮点数遵循 IEEE 754 标准,约 15-16 位有效数字。两者可以互相转换,但要注意大整数转浮点可能丢失精度。" },
      { t: "code", file: "python", code: "a = 10\nb = 3\n\nprint(a / b)   # 3.3333333333333335  真除法,永远返回 float\nprint(a // b)  # 3                整除(向下取整)\nprint(a % b)   # 1                取余\nprint(a ** b)  # 1000             幂运算" },
      { t: "h3", text: "布尔值与 None" },
      { t: "p", text: "布尔值只有 True 和 False 两个取值,首字母必须大写。在条件判断中,空字符串、0、空列表等「假值」会被视为 False。" },
      { t: "code", file: "python", code: "is_python_fun = True\nhas_value = False\nresult = None  # 常用于表示「函数还没返回结果」\n\nprint(bool(\"\"))       # False  空字符串是假值\nprint(bool([0]))      # True   非空列表都是真值\nprint(bool(0))       # False" },
      { t: "h2", text: "类型转换" },
      { t: "p", text: "使用 `str()`、`int()`、`float()`、`bool()` 等内置函数进行显式转换。把字符串转数字时,如果内容不是合法数字会抛出 `ValueError`。" },
      { t: "code", file: "python", code: "age_text = \"25\"\nage = int(age_text)        # 字符串 -> 整数\nprice = float(\"19.9\")     # 字符串 -> 浮点数\nlabel = str(100)           # 整数 -> 字符串\n\nprint(age + 5)             # 30\nprint(int(\"3.9\"))         # 3   小数部分被截断\n# int(\"hello\")           # ValueError: invalid literal for int()" },
      { t: "callout", kind: "tip", title: "用 type() 查看类型", text: "不确定一个值是什么类型时,直接运行 `print(type(value))`,会输出 <class 'int'> 这样的结果。这是排查类型相关 bug 最快的办法。" },
      { t: "h2", text: "多变量赋值与常量" },
      { t: "code", file: "python", code: "x, y, z = 1, 2, 3\nname, age = \"Bob\", 30\n\na = b = c = 0  # 链式赋值,三者都是 0\n\n# 交换两个变量不需要临时变量\nx, y = y, x" }
    ],
    quiz: [
      {
        q: "下面哪个变量名是符合 Python 规范的?",
        options: ["2nd_place", "my-name", "user_name", "class"],
        answer: 2,
        explain: "变量名不能以数字开头、不能用连字符、不能用关键字。user_name 完整符合 PEP 8 的 snake_case 规范。"
      },
      {
        q: "`print(10 / 3)` 与 `print(10 // 3)` 的输出分别是?",
        options: ["3.3333333333333335 和 3", "3 和 3", "3.33 和 3", "3 和 3.0"],
        answer: 0,
        explain: "/ 是真除法,返回 float;// 是整除(向下取整),返回 int。"
      },
      {
        q: "执行 `bool([])` 的结果是什么?",
        options: ["True", "False", "None", "报错"],
        answer: 1,
        explain: "空列表属于 Python 的「假值」之一,转换为布尔值时得到 False。"
      },
      {
        q: "以下哪个值是 NoneType 类型?",
        options: ["False", "0", "None", "\"空字符串\""],
        answer: 2,
        explain: "None 是 Python 中表示「空/缺失」的唯一内置值,属于 NoneType。"
      }
    ],
    exercise: {
      title: "练习:变量类型探索器",
      task: "定义 5 个不同类型的变量(字符串、整数、浮点数、布尔值、None),分别用 print 打印它们,并用 type() 打印每个变量的类型。",
      starter: "# 定义变量并输出值和类型\n",
      solution: "name = \"Python\"\nversion = 3.13\nrating = 4.9\nis_free = True\nauthor = None\n\nfor var in [name, version, rating, is_free, author]:\n    print(var, type(var))"
    }
  },
  {
    id: "operators",
    num: "03",
    title: "运算符与表达式",
    subtitle: "算术、比较、逻辑、成员运算符全掌握",
    level: "beginner",
    levelText: "入门",
    duration: "25 分钟",
    icon: "🧮",
    summary: "系统梳理 Python 的各类运算符,理解运算符优先级与链式比较等实用技巧。",
    sections: [
      { t: "h2", text: "算术运算符" },
      { t: "table", head: ["运算符", "含义", "示例", "结果"], rows: [
        ["+", "加", "3 + 2", "5"],
        ["-", "减", "3 - 2", "1"],
        ["*", "乘", "3 * 2", "6"],
        ["/", "真除", "7 / 2", "3.5"],
        ["//", "整除", "7 // 2", "3"],
        ["%", "取模", "7 % 2", "1"],
        ["**", "幂", "2 ** 10", "1024"]
      ]},
      { t: "p", text: "取模运算 `%` 用途非常广:判断奇偶、判断闰年、取循环下标等。注意 Python 的 `%` 会根据结果符号调整行为,`-7 % 3` 的结果是 2 而不是 -1。" },
      { t: "code", file: "python", code: "print(7 % 3)    # 1\nprint(-7 % 3)   # 2   Python 的取模结果与除数同号\nprint(2 ** 0.5) # 1.4142135623730951" },
      { t: "h2", text: "复合赋值运算符" },
      { t: "code", file: "python", code: "count = 10\ncount += 5   # 等价于 count = count + 5\ncount -= 3\ncount *= 2\ncount /= 4\ncount **= 2\ncount %= 7\n\n# 字符串也支持 +=,表示拼接\ngreeting = \"Hello\"\ngreeting += \", World\"" },
      { t: "h2", text: "比较运算符" },
      { t: "table", head: ["运算符", "含义", "示例"], rows: [
        ["==", "等于", "a == b"],
        ["!=", "不等于", "a != b"],
        [">", "大于", "a > b"],
        ["<", "小于", "a < b"],
        [">=", "大于等于", "a >= b"],
        ["<=", "小于等于", "a <= b"]
      ]},
      { t: "callout", kind: "warn", title: "别把 = 和 == 搞混", text: "`=` 是赋值,把右边的值交给左边的名字;`==` 是比较,判断两边是否相等。写 `if x = 5` 会直接报 SyntaxError。" },
      { t: "h2", text: "链式比较:Python 的优雅之处" },
      { t: "p", text: "Python 支持把多个比较连在一起写,数学上完全等价,代码可读性却好得多。" },
      { t: "code", file: "python", code: "age = 25\n\n# 传统写法\nif 18 <= age <= 60:\n    print(\"在工作年龄段\")\n\n# 链式写法\nif 18 <= age <= 60:\n    print(\"在工作年龄段\")" },
      { t: "h2", text: "逻辑运算符" },
      { t: "table", head: ["运算符", "含义", "真值表"], rows: [
        ["and", "逻辑与", "两者都为真时结果为真"],
        ["or", "逻辑或", "至少一个为真时结果为真"],
        ["not", "逻辑非", "把真值取反"]
      ]},
      { t: "code", file: "python", code: "age = 20\nhas_ticket = True\nis_vip = False\n\n# and / or 返回的是「操作数」本身,不是布尔值\nprint(age > 18 and has_ticket)   # True\nprint(age < 18 or has_ticket)    # True\nprint(not is_vip)                # True\n\n# 常见惯用法:or 提供默认值\nname = input(\"请输入名字: \") or \"匿名用户\"\nprint(name)" },
      { t: "callout", kind: "tip", title: "短路求值", text: "`and` 和 `or` 都是短路的——左边能决定结果时,右边根本不会执行。这既是性能优化,也是防错技巧:`result = obj and obj.attr` 不会在 obj 为 None 时报 AttributeError。" },
      { t: "h2", text: "成员运算符 in" },
      { t: "p", text: "`in` 判断某个元素是否存在于容器中,返回布尔值。对字符串还能判断子串。" },
      { t: "code", file: "python", code: "fruits = [\"apple\", \"banana\", \"orange\"]\n\nprint(\"banana\" in fruits)      # True\nprint(\"grape\" not in fruits)   # True\n\ntext = \"Hello World\"\nprint(\"World\" in text)         # True  子串判断\nprint(\"Hello\" in text)" },
      { t: "h2", text: "身份运算符 is" },
      { t: "p", text: "`is` 比较的是两个对象是不是「同一个」(内存地址相同),而 `==` 比较的是「值是否相等」。日常最常见的 `is` 用途是判断是否为 None。" },
      { t: "code", file: "python", code: "a = [1, 2, 3]\nb = a\nc = [1, 2, 3]\n\nprint(a == c)   # True  值相等\nprint(a is c)   # False 是两个不同的列表对象\nprint(a is b)   # True  b 就是 a 本身\n\nresult = None\nif result is None:\n    print(\"还没有结果\")" },
      { t: "callout", kind: "warn", title: "字符串驻留的小陷阱", text: "短字符串在 CPython 中可能被自动驻留(intern),导致 `is` 结果看似随机。判断内容请始终用 `==`,判断 None 请用 `is None`。" },
      { t: "h2", text: "运算符优先级" },
      { t: "p", text: "从高到低大致是:括号 → 幂 `**` → 正负号 → 乘除模 → 加减 → 位运算 → 比较 → `not` → `and` → `or`。**任何时候,拿不准就加括号。**" },
      { t: "code", file: "python", code: "print(2 + 3 * 4)        # 14\nprint((2 + 3) * 4)      # 20\nprint(2 + 3 * 4 ** 2)   # 50\n\n# 链式比较的优先级高于 and / or\nprint(True and 1 < 2 < 3)  # True" }
    ],
    quiz: [
      {
        q: "要判断 age 是否在 18 到 60 之间(含端点),最符合 Python 风格的写法是?",
        options: [
          "if age > 18 and age < 60:",
          "if 18 <= age <= 60:",
          "if age >= 18 | age <= 60:",
          "if (18 < age) < 60:"
        ],
        answer: 1,
        explain: "Python 支持链式比较,`18 <= age <= 60` 简洁且语义明确。"
      },
      {
        q: "`print(0 or \"default\")` 的输出是?",
        options: ["0", "default", "None", "False"],
        answer: 1,
        explain: "or 返回第一个真值操作数。0 是假值,所以返回 \"default\"。"
      },
      {
        q: "下列哪个运算符用于判断对象身份(即是否为同一个对象)?",
        options: ["==", "!=", "is", "in"],
        answer: 2,
        explain: "is 比较内存身份,== 比较值是否相等。"
      },
      {
        q: "`print(2 ** 3 ** 2)` 的结果是?",
        options: ["64", "512", "36", "12"],
        answer: 1,
        explain: "幂运算符是右结合的,先算 3 ** 2 = 9,再算 2 ** 9 = 512。"
      }
    ],
    exercise: {
      title: "练习:BMI 计算器",
      task: "定义 height(米)和 weight(千克)两个变量,计算 BMI = weight / (height ** 2),并根据 BMI 输出对应的健康评价:低于 18.5 偏瘦,18.5~24 正常,24~28 偏胖,28 以上 肥胖。",
      starter: "height = 1.75\nweight = 70\n\n# 计算 BMI 并判断\n",
      solution: "height = 1.75\nweight = 70\n\nbmi = weight / (height ** 2)\nprint(f\"BMI: {bmi:.1f}\")\n\nif bmi < 18.5:\n    print(\"偏瘦\")\nelif bmi < 24:\n    print(\"正常\")\nelif bmi < 28:\n    print(\"偏胖\")\nelse:\n    print(\"肥胖\")"
    }
  },
  {
    id: "strings",
    num: "04",
    title: "字符串处理",
    subtitle: "索引、切片、格式化与常用字符串方法",
    level: "beginner",
    levelText: "入门",
    duration: "30 分钟",
    icon: "📝",
    summary: "吃透字符串的索引与切片,掌握 f-string 格式化以及日常最常用的字符串方法。",
    sections: [
      { t: "h2", text: "字符串是不可变的序列" },
      { t: "p", text: "字符串是字符组成的序列,和列表一样支持索引和切片,但它是**不可变**的——一旦创建就不能修改其内容。任何「看起来像修改」的操作,实际上都会返回一个新的字符串。" },
      { t: "code", file: "python", code: "s = \"Python\"\n\n# ❌ 报错:字符串不可变\n# s[0] = \"J\"\n\n# ✅ 返回新字符串\ns2 = \"J\" + s[1:]\nprint(s2)   # Jython" },
      { t: "h2", text: "索引与切片" },
      { t: "p", text: "索引从 0 开始,负数索引从末尾往回数。切片语法是 `字符串[起始:结束:步长]`,左闭右开——包含起始位置,不包含结束位置。" },
      { t: "code", file: "python", code: "s = \"Python\"\n\nprint(s[0])      # P\nprint(s[-1])     # n    最后一个字符\nprint(s[0:3])    # Pyt\nprint(s[:2])     # Py   省略起始即从 0 开始\nprint(s[2:])     # thon 省略结束即到末尾\nprint(s[::2])    # Pto  步长为 2,隔一个取一个\nprint(s[::-1])   # nohtyP 反转" },
      { t: "callout", kind: "tip", title: "切片不会越界报错", text: "取超出范围的切片只会返回空字符串或已有部分,不会抛异常。但**单个索引**越界会报 IndexError,访问前记得用 len() 检查长度。" },
      { t: "h2", text: "常用字符串方法" },
      { t: "h3", text: "大小写与空白处理" },
      { t: "code", file: "python", code: "s = \"  Hello Python World  \"\n\nprint(s.upper())          # HELLO PYTHON WORLD\nprint(s.lower())          # hello python world\nprint(s.strip())          # 去掉两端空白\nprint(s.lstrip())         # 只去左边\nprint(s.rstrip())         # 只去右边\nprint(s.title())          # 每个单词首字母大写\n\n# 链式调用:先去空白再转大写\nprint(s.strip().upper())" },
      { t: "h3", text: "查找与替换" },
      { t: "code", file: "python", code: "text = \"Python is fun, Python is powerful\"\n\nprint(text.find(\"Python\"))      # 0   首次出现的位置,找不到返回 -1\nprint(text.count(\"Python\"))     # 2   出现次数\nprint(text.replace(\"Python\", \"Py\"))  # 替换全部\nprint(text.replace(\"Python\", \"Py\", 1)) # 只替换第一个\n\nprint(\"Python\" in text)         # True  子串判断\nprint(text.startswith(\"Python\")) # True\nprint(text.endswith(\"powerful\")) # True" },
      { t: "h3", text: "分割与连接" },
      { t: "code", file: "python", code: "csv = \"apple,banana,orange\"\nitems = csv.split(\",\")\nprint(items)              # ['apple', 'banana', 'orange']\n\n# splitlines 拆分多行文本\nlines = \"a\\nb\\nc\".splitlines()\nprint(lines)              # ['a', 'b', 'c']\n\n# join:用分隔符把字符串列表拼起来\nresult = \"-\".join(items)\nprint(result)             # apple-banana-orange" },
      { t: "callout", kind: "warn", title: "split 的陷阱", text: "`\"a,b,\".split(\",\")` 的结果是 `['a', 'b', '']`,末尾有一个空字符串。如果希望忽略空值,传 `split(\",\")` 后用 `if item` 过滤,或使用 `csv` 标准库模块。" },
      { t: "h2", text: "f-string:现代格式化方式" },
      { t: "p", text: "Python 3.6 引入的 f-string 是目前最推荐的字符串格式化方式。把 f 写在引号前,花括号里的表达式会直接求值并转成字符串。" },
      { t: "code", file: "python", code: "name = \"Alice\"\nage = 30\nscore = 95.678\n\nprint(f\"{name} 今年 {age} 岁\")\nprint(f\"成绩: {score:.1f}\")          # 保留 1 位小数\nprint(f\"进度: {45:>6}%\")            # 右对齐,宽度 6\nprint(f\"进度: {45:<6}%\")            # 左对齐\nprint(f\"进度: {45:^6}%\")            # 居中\nprint(f\"整数: {42:08d}\")            # 补零,共 8 位\nprint(f\"千分位: {1234567:,}\")        # 1,234,567" },
      { t: "h3", text: "f-string 的高级用法" },
      { t: "code", file: "python", code: "user = {\"name\": \"Bob\", \"age\": 22}\n\n# 字典取值直接放进 f-string\nprint(f\"{user['name']} is {user['age']}\")\n\n# 计算表达式\nwidth, height = 10, 20\nprint(f\"面积: {width * height}\")\n\n# 多行 f-string\nmsg = f\"\"\"\n姓名: {name}\n年龄: {age}\n\"\"\"\nprint(msg)" },
      { t: "callout", kind: "info", title: "其他格式化方式", text: "老式的 `%` 占位符和 `str.format()` 仍然可用,常见于旧代码中。新代码请直接用 f-string:它更快、更可读、语法更接近自然语言。" },
      { t: "h2", text: "字符串 vs 列表" },
      { t: "p", text: "字符串看起来像列表,但两者方法不同:列表用 `append()` 添加元素,字符串用 `+` 拼接;列表用 `sort()`,字符串用 `sorted()` 返回新列表。" },
      { t: "code", file: "python", code: "letters = list(\"abc\")\nletters.append(\"d\")\nprint(letters)          # ['a', 'b', 'c', 'd']\n\nchars = sorted(\"dcba\")\nprint(chars)            # ['a', 'b', 'c', 'd']\nprint(\"\".join(chars))  # abcd" }
    ],
    quiz: [
      {
        q: "`s = \"Hello World\"`,`s[::-1]` 的结果是什么?",
        options: ["dlroW olleH", "Hello World", "H", "d l r o W o l l e H"],
        answer: 0,
        explain: "步长为 -1 表示从后往前遍历,得到反转后的字符串。"
      },
      {
        q: "下面哪段代码可以正确地把 3.14159 格式化为保留 2 位小数的字符串?",
        options: [
          "f\"{3.14159:.2f}\"",
          "f\"{3.14159:.2}\"",
          "\"%.2\" % 3.14159",
          "f\"{3.14159:f}\""
        ],
        answer: 0,
        explain: "格式说明符 .Nf 表示保留 N 位小数,.2f 中的 f 表示浮点数类型。"
      },
      {
        q: "`\"a,b,c\".split(\",\")` 返回的是什么类型?",
        options: ["字符串", "元组", "列表", "字典"],
        answer: 2,
        explain: "split() 返回列表(list)。"
      },
      {
        q: "哪个方法用于去除字符串两端的空白字符?",
        options: ["trim()", "clean()", "strip()", "rstrip()"],
        answer: 2,
        explain: "strip() 去掉两端空白,lstrip()/rstrip() 分别只处理左端/右端。"
      }
    ],
    exercise: {
      title: "练习:用户名格式化器",
      task: "接收一个用户名(可能有多余空格和大小写混杂),去除两端空白,转成小写,再用首字母大写的方式输出;同时输出一段隐藏版:保留首尾字符,中间用 * 替代,长度不足 4 的直接原样输出。",
      starter: "raw = \"  zhangSan  \"\n\n# 输出规范化用户名与隐藏版\n",
      solution: "raw = \"  zhangSan  \"\n\ncleaned = raw.strip()\ndisplay = cleaned.capitalize()\nprint(display)\n\nif len(cleaned) > 4:\n    masked = cleaned[0] + \"*\" * (len(cleaned) - 2) + cleaned[-1]\nelse:\n    masked = cleaned\nprint(masked)"
    }
  }
];
