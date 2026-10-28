/* 课程数据 Part 3:第 9-12 课 */
window.COURSES_PART3 = [
  {
    id: "oop",
    num: "09",
    title: "面向对象编程(OOP)",
    subtitle: "类与对象、继承、多态、特殊方法、抽象基类",
    level: "intermediate",
    levelText: "进阶",
    duration: "45 分钟",
    icon: "🏗️",
    summary: "从类与对象开始,学习继承与多态,掌握 __init__/__str__/__repr__ 等特殊方法,以及 abc 抽象基类。",
    sections: [
      { t: "h2", text: "类与对象" },
      { t: "p", text: "类是对象的蓝图,对象是类的实例。类用关键字 `class` 定义,首字母习惯大写(大驼峰)。`__init__` 是构造方法,用于初始化实例属性。" },
      { t: "code", file: "python", code: "class Dog:\n    # 类属性:所有实例共享\n    species = \"Canis familiaris\"\n    \n    def __init__(self, name, age):\n        # 实例属性:每个对象独立\n        self.name = name\n        self.age = age\n    \n    def bark(self):\n        return f\"{self.name} says: Woof!\"\n\nmy_dog = Dog(\"Buddy\", 3)\nprint(my_dog.name)    # Buddy\nprint(my_dog.species) # Canis familiaris\nprint(my_dog.bark())  # Buddy says: Woof!\n\nanother_dog = Dog(\"Max\", 5)\nprint(another_dog.species)  # Canis familiaris  共享类属性" },
      { t: "h3", text: "self 是什么?" },
      { t: "p", text: "`self` 指向当前实例本身。在方法里,`self.name` 访问实例属性,`self.bark()` 调用实例方法。它不是关键字,只是惯例名称,但强烈建议用 `self`。" },
      { t: "h2", text: "实例方法 vs 类方法 vs 静态方法" },
      { t: "table", head: ["类型", "装饰器", "第一个参数", "可访问", "典型用途"], rows: [
        ["实例方法", "无", "self", "实例属性、类属性", "操作具体对象的业务逻辑"],
        ["类方法", "@classmethod", "cls", "类属性", "作为构造器(替代构造函数)"],
        ["静态方法", "@staticmethod", "无", "仅参数", "与类相关但不操作状态的工具函数"]
      ]},
      { t: "code", file: "python", code: "class Employee:\n    company = \"Tech Corp\"  # 类属性\n    \n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n    \n    def give_raise(self, amount):          # 实例方法\n        self.salary += amount\n        return self.salary\n    \n    @classmethod\n    def from_string(cls, emp_str):         # 替代构造器\n        name, salary = emp_str.split(\",\")\n        return cls(name, int(salary))\n    \n    @staticmethod\n    def is_workday(day):                   # 工具函数\n        return day.weekday() < 5\n\n# 调用\ne1 = Employee(\"Alice\", 8000)\ne2 = Employee.from_string(\"Bob,9000\")\nprint(e2.name, e2.salary)\nimport datetime\nprint(Employee.is_workday(datetime.date.today()))" },
      { t: "h2", text: "继承与多态" },
      { t: "p", text: "子类继承父类的属性和方法,可以重写(override)父类方法。多态意味着不同子类对象可以以相同接口被调用,但表现出不同行为。" },
      { t: "code", file: "python", code: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return f\"{self.name} makes a sound\"\n\nclass Dog(Animal):\n    def speak(self):                       # 重写\n        return f\"{self.name} says: Woof!\"\n\nclass Cat(Animal):\n    def speak(self):                       # 重写\n        return f\"{self.name} says: Meow!\"\n\n# super():调用父类方法\nclass Puppy(Dog):\n    def __init__(self, name, breed):\n        super().__init__(name)             # 调用 Dog.__init__\n        self.breed = breed\n\n# 多态:同一接口,不同表现\nanimals = [Dog(\"Buddy\"), Cat(\"Kitty\"), Puppy(\"Max\", \"Golden\")]\nfor a in animals:\n    print(a.speak())\n# Buddy says: Woof!\n# Kitty says: Meow!\n# Max says: Woof!" },
      { t: "h2", text: "特殊方法(Dunder Methods)" },
      { t: "table", head: ["方法", "触发时机", "示例"], rows: [
        ["__init__", "创建对象时", "obj = MyClass()"],
        ["__str__", "print(obj) / str(obj)", "人类可读的字符串"],
        ["__repr__", "交互模式显示 / repr(obj)", "开发者调试用字符串"],
        ["__len__", "len(obj)", "返回长度"],
        ["__getitem__", "obj[i]", "支持索引访问"],
        ["__setitem__", "obj[i] = x", "支持索引赋值"],
        ["__contains__", "x in obj", "支持 in 运算符"],
        ["__call__", "obj()", "对象像函数一样调用"],
        ["__enter__ / __exit__", "with obj:", "上下文管理器"]
      ]},
      { t: "code", file: "python", code: "class Book:\n    def __init__(self, title, author, pages):\n        self.title = title\n        self.author = author\n        self.pages = pages\n    \n    def __str__(self):\n        return f\"《{self.title}》 by {self.author}\"\n    \n    def __repr__(self):\n        return f\"Book(title={self.title!r}, pages={self.pages})\"\n    \n    def __len__(self):\n        return self.pages\n    \n    def __getitem__(self, key):\n        attrs = {\"title\": self.title, \"author\": self.author, \"pages\": self.pages}\n        return attrs[key]\n    \n    def __call__(self):\n        print(f\"Reading {self.title}...\")\n\nb = Book(\"Python 101\", \"Alice\", 300)\nprint(str(b))        # 《Python 101》 by Alice\nprint(len(b))        # 300\nprint(b[\"author\"])   # Alice\nb()                  # Reading Python 101..." },
      { t: "h2", text: "属性访问控制与 property" },
      { t: "p", text: "Python 没有真正的私有属性,单下划线 `_name` 表示「内部使用,请不要外部访问」,双下划线 `__name` 会触发名称改编(name mangling),让外部访问变困难。更推荐用 `property` 做受控访问。" },
      { t: "code", file: "python", code: "class Temperature:\n    def __init__(self, celsius):\n        self._celsius = celsius\n    \n    @property\n    def celsius(self):\n        return self._celsius\n    \n    @celsius.setter\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError(\"低于绝对零度\")\n        self._celsius = value\n    \n    @property\n    def fahrenheit(self):\n        return self._celsius * 9 / 5 + 32\n\nt = Temperature(25)\nprint(t.fahrenheit)   # 77.0\n# t.celsius = -300    # ValueError" },
      { t: "h2", text: "抽象基类 abc" },
      { t: "p", text: "使用 `abc.ABC` 和 `@abstractmethod` 定义抽象基类,强制子类实现指定方法,防止直接实例化不完整的类。" },
      { t: "code", file: "python", code: "from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\nclass Circle(Shape):\n    def __init__(self, r):\n        self.r = r\n    \n    def area(self):                     # 必须实现\n        return 3.14159 * self.r ** 2\n\n# s = Shape()   # TypeError: Cannot instantiate abstract class\nc = Circle(5)\nprint(c.area())  # 78.53975" },
      { t: "callout", kind: "info", title: "什么时候用 OOP?", text: "当你需要描述「有状态且有行为」的实体时(用户、订单、游戏角色、设备),OOP 最合适。简单的数据处理任务,函数式风格通常更清晰。" }
    ],
    quiz: [
      {
        q: "self 在类方法中的作用是什么?",
        options: ["指向类本身", "指向当前实例对象", "指向父类", "是 Python 关键字"],
        answer: 1,
        explain: "self 指向当前实例,用于访问实例属性和方法。"
      },
      {
        q: "@classmethod 的第一个参数传统上命名为什么?",
        options: ["self", "cls", "type", "klass"],
        answer: 1,
        explain: "cls 是类方法的惯例命名,指向类本身。"
      },
      {
        q: "super() 的作用是?",
        options: ["调用父类的方法", "创建父类实例", "检查继承关系", "禁止继承"],
        answer: 0,
        explain: "super() 返回父类对象,用于调用父类的方法(通常是 __init__)。"
      },
      {
        q: "抽象基类(ABC)能直接实例化吗?",
        options: ["能", "不能", "只能在 Python 3.10+ 实例化", "必须加 @abstractmethod 装饰器才能实例化"],
        answer: 1,
        explain: "ABC 包含抽象方法时,不能直接实例化,必须子类实现所有抽象方法。"
      }
    ],
    exercise: {
      title: "练习:银行账户系统",
      task: "设计一个 BankAccount 类:有账户号(account_number)、持有人(owner)、余额(balance)属性;提供 deposit(存款)、withdraw(取款,余额不足不允许)、get_balance 查询;实现 __str__ 打印账户信息。再创建一个 SavingsAccount 子类,增加利率(rate)和 apply_interest 方法。",
      starter: "class BankAccount:\n    # 请在此实现\n    pass\n\nclass SavingsAccount(BankAccount):\n    # 请在此实现\n    pass\n\n# 测试代码\nacc = SavingsAccount(\"123456\", \"Alice\", 1000, rate=0.05)\nacc.deposit(500)\nacc.withdraw(200)\nacc.apply_interest()\nprint(acc)\n",
      solution: "class BankAccount:\n    def __init__(self, account_number, owner, balance=0):\n        self.account_number = account_number\n        self.owner = owner\n        self.balance = balance\n    \n    def deposit(self, amount):\n        if amount <= 0:\n            raise ValueError(\"存款金额必须大于 0\")\n        self.balance += amount\n        return self.balance\n    \n    def withdraw(self, amount):\n        if amount <= 0:\n            raise ValueError(\"取款金额必须大于 0\")\n        if amount > self.balance:\n            raise ValueError(\"余额不足\")\n        self.balance -= amount\n        return self.balance\n    \n    def get_balance(self):\n        return self.balance\n    \n    def __str__(self):\n        return f\"Account({self.account_number}) - {self.owner}: ¥{self.balance:.2f}\"\n\nclass SavingsAccount(BankAccount):\n    def __init__(self, account_number, owner, balance=0, rate=0.0):\n        super().__init__(account_number, owner, balance)\n        self.rate = rate\n    \n    def apply_interest(self):\n        self.balance *= (1 + self.rate)\n        return self.balance"
    }
  },
  {
    id: "modules-packages",
    num: "10",
    title: "模块与包",
    subtitle: "import 机制、标准库常用模块、第三方包、虚拟环境",
    level: "intermediate",
    levelText: "进阶",
    duration: "35 分钟",
    icon: "📦",
    summary: "掌握 import 系统、常用标准库(os/sys/math/datetime/collections),第三方包安装,以及虚拟环境管理。",
    sections: [
      { t: "h2", text: "模块基础" },
      { t: "p", text: "一个 `.py` 文件就是一个模块,用 `import` 导入。模块内的顶层代码在首次导入时执行,之后会被缓存。" },
      { t: "code", file: "python", code: "# math_utils.py\ndef add(a, b):\n    return a + b\n\n# main.py\nimport math_utils\nprint(math_utils.add(1, 2))\n\nfrom math_utils import add   # 直接导入函数\nprint(add(3, 4))\n\nimport math_utils as mu       # 别名\nprint(mu.add(5, 6))" },
      { t: "h3", text: "__name__ 与 __main__" },
      { t: "p", text: "每个模块都有一个内置变量 `__name__`。直接运行文件时它是 `__main__`,被 import 时是模块名。常用于写可直接运行也可被导入的代码。" },
      { t: "code", file: "python", code: "def main():\n    print(\"Hello\")\n\nif __name__ == \"__main__\":\n    main()" },
      { t: "h2", text: "标准库常用模块" },
      { t: "table", head: ["模块", "用途", "常用函数/类"], rows: [
        ["os", "操作系统交互", "os.path.join, os.getcwd, os.makedirs"],
        ["sys", "解释器与运行时", "sys.argv, sys.exit, sys.path"],
        ["math", "数学函数", "math.sqrt, math.pi, math.floor"],
        ["datetime", "日期时间", "datetime.now, timedelta, strftime"],
        ["collections", "增强容器", "Counter, deque, defaultdict, namedtuple"],
        ["json", "JSON 序列化", "json.dumps, json.loads"],
        ["re", "正则表达式", "re.findall, re.sub, re.match"],
        ["random", "随机数", "random.randint, random.choice, random.shuffle"],
        ["pathlib", "面向对象的路径操作", "Path(\".\").glob(\"*.py\")"],
        ["functools", "高阶函数工具", "lru_cache, wraps, partial"]
      ]},
      { t: "h3", text: "datetime 实用示例" },
      { t: "code", file: "python", code: "from datetime import datetime, timedelta\n\nnow = datetime.now()\nprint(now.strftime(\"%Y-%m-%d %H:%M:%S\"))\n\nfuture = now + timedelta(days=7)\nprint(future.strftime(\"%Y-%m-%d\"))\n\n# 时间差\ndelta = future - now\nprint(delta.total_seconds())" },
      { t: "h3", text: "collections 实用容器" },
      { t: "code", file: "python", code: "from collections import Counter, defaultdict, deque\n\n# Counter:计数器\nwords = [\"a\", \"b\", \"a\", \"c\", \"b\", \"a\"]\nprint(Counter(words))  # Counter({'a': 3, 'b': 2, 'c': 1})\n\n# defaultdict:自动提供默认值\nd = defaultdict(list)\nd[\"a\"].append(1)\nd[\"a\"].append(2)\nprint(d[\"b\"])  # []  不存在自动创建空列表\n\n# deque:两端高效插入删除\nq = deque([1, 2, 3])\nq.appendleft(0)\nq.pop()" },
      { t: "h2", text: "包(Package)与目录结构" },
      { t: "p", text: "包是含有 `__init__.py` 的目录,用于组织多个模块。`__init__.py` 可以是空文件,也可以用来暴露包的公共 API。" },
      { t: "code", file: "text", code: "my_project/\n├── main.py\n└── mypackage/\n    ├── __init__.py\n    ├── utils.py\n    └── models.py\n\n# 导入\nfrom mypackage import utils\nfrom mypackage.models import User" },
      { t: "h2", text: "第三方包与 pip" },
      { t: "code", file: "terminal", code: "# 安装包\npip install requests pandas\n\n# 指定版本\npip install requests==2.31.0\n\n# 查看已安装\npip list\n\n# 导出依赖\npip freeze > requirements.txt\n\n# 从文件安装\npip install -r requirements.txt\n\n# 升级\npip install --upgrade requests" },
      { t: "h2", text: "虚拟环境:隔离项目依赖" },
      { t: "p", text: "不同项目可能依赖同一包的不同版本,虚拟环境为每个项目创建独立的 Python 环境,避免冲突。推荐使用内置的 `venv`。" },
      { t: "code", file: "terminal", code: "# 创建虚拟环境\npython -m venv .venv\n\n# 激活(Windows)\n.venv\\Scripts\\activate\n\n# 激活(macOS/Linux)\nsource .venv/bin/activate\n\n# 安装依赖\npip install -r requirements.txt\n\n# 退出\ndeactivate" },
      { t: "h2", text: "导入路径与 sys.path" },
      { t: "p", text: "Python 按 `sys.path` 列表中的顺序查找模块。运行脚本时,脚本所在目录会自动加入 sys.path。如果导入失败,检查当前工作目录和 PYTHONPATH。" },
      { t: "code", file: "python", code: "import sys\nprint(sys.path)\n\n# 临时添加搜索路径\nsys.insert(0, \"/path/to/module\")" },
      { t: "callout", kind: "warn", title: "相对导入的坑", text: "包内部使用相对导入(如 `from . import utils`)时,不能直接运行该模块文件(`python utils.py`),必须作为包的一部分运行(`python -m mypackage.utils`)。相对导入只在包内部有效。" }
    ],
    quiz: [
      {
        q: "直接运行模块文件时,`__name__` 的值是什么?",
        options: ["模块文件名", "__main__", "None", "包名"],
        answer: 1,
        explain: "直接运行时 `__name__ == \"__main__\"`。"
      },
      {
        q: "以下哪个不是 Python 标准库模块?",
        options: ["os", "sys", "requests", "json"],
        answer: 2,
        explain: "requests 是第三方库,需要 pip 安装;os/sys/json 都是标准库。"
      },
      {
        q: "`pip freeze > requirements.txt` 的作用是?",
        options: ["安装所有依赖", "导出当前环境的已安装包列表", "升级所有包", "创建虚拟环境"],
        answer: 1,
        explain: "冻结当前环境所有已安装包的名称和版本,便于在其他环境重建。"
      },
      {
        q: "虚拟环境的主要目的是?",
        options: ["提高运行速度", "隔离不同项目的依赖版本", "自动安装第三方包", "替代 pip"],
        answer: 1,
        explain: "避免不同项目之间依赖版本冲突。"
      }
    ],
    exercise: {
      title: "练习:实现一个日志分析小工具",
      task: "编写脚本,读取一个包含日志行的文本文件,统计各日志级别(INFO/ERROR/WARN)出现次数,并把统计结果写入 JSON 文件。使用 pathlib 处理路径,collections.Counter 统计,json 模块序列化。",
      starter: "from pathlib import Path\nfrom collections import Counter\nimport json\n\n# 日志文件路径\nlog_file = Path(\"sample.log\")\n\n# 你的代码:读取文件,统计级别,写出 stats.json\n",
      solution: "from pathlib import Path\nfrom collections import Counter\nimport json\nimport re\n\nlog_file = Path(\"sample.log\")\noutput_file = Path(\"stats.json\")\n\n# 读取日志\nlevels = []\npattern = re.compile(r\"\\b(INFO|ERROR|WARN|WARNING|DEBUG)\\b\")\n\nwith log_file.open(\"r\", encoding=\"utf-8\") as f:\n    for line in f:\n        match = pattern.search(line)\n        if match:\n            levels.append(match.group(1).upper())\n\n# 统计\nstats = dict(Counter(levels))\n\n# 写入 JSON\nwith output_file.open(\"w\", encoding=\"utf-8\") as f:\n    json.dump(stats, f, ensure_ascii=False, indent=2)\n\nprint(\"统计完成:\", stats)"
    }
  },
  {
    id: "file-io",
    num: "11",
    title: "文件与异常",
    subtitle: "文本/二进制文件读写、CSV/JSON 序列化、上下文管理器",
    level: "intermediate",
    levelText: "进阶",
    duration: "35 分钟",
    icon: "📄",
    summary: "掌握 with open 读写文本和二进制文件,CSV 与 JSON 处理,路径操作,以及常见文件操作异常的捕获。",
    sections: [
      { t: "h2", text: "文本文件读写" },
      { t: "p", text: "使用 `with open(...) as f:` 自动管理文件关闭。总是指定 `encoding=\"utf-8\"`,避免跨平台乱码。" },
      { t: "code", file: "python", code: "# 写入(覆盖)\nwith open(\"note.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello\\n\")\n    f.write(\"Python\\n\")\n\n# 追加\nwith open(\"note.txt\", \"a\", encoding=\"utf-8\") as f:\n    f.write(\"More content\\n\")\n\n# 读取全部\nwith open(\"note.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n    print(content)\n\n# 逐行读取(适合大文件)\nwith open(\"note.txt\", \"r\", encoding=\"utf-8\") as f:\n    for line in f:\n        print(line.strip())" },
      { t: "h2", text: "二进制文件" },
      { t: "code", file: "python", code: "# 读写图片等二进制文件\nwith open(\"photo.jpg\", \"rb\") as f:\n    data = f.read()\n\nwith open(\"photo_copy.jpg\", \"wb\") as f:\n    f.write(data)\n\n# pickle:序列化 Python 对象\nimport pickle\n\ndata = {\"name\": \"Alice\", \"score\": 95}\nwith open(\"data.pkl\", \"wb\") as f:\n    pickle.dump(data, f)\n\nwith open(\"data.pkl\", \"rb\") as f:\n    loaded = pickle.load(f)\n\nprint(loaded)" },
      { t: "callout", kind: "warn", title: "pickle 安全警告", text: "不要反序列化不信任的 pickle 数据,它可能执行任意代码。对外部交换数据请使用 JSON。" },
      { t: "h2", text: "CSV 文件处理" },
      { t: "code", file: "python", code: "import csv\n\n# 写入 CSV\nrows = [[\"name\", \"score\"], [\"Alice\", 95], [\"Bob\", 88]]\nwith open(\"scores.csv\", \"w\", newline=\"\", encoding=\"utf-8\") as f:\n    writer = csv.writer(f)\n    writer.writerows(rows)\n\n# 读取 CSV\nwith open(\"scores.csv\", \"r\", encoding=\"utf-8\") as f:\n    reader = csv.DictReader(f)  # 按字典读取,第一行作为键\n    for row in reader:\n        print(row[\"name\"], row[\"score\"])" },
      { t: "h2", text: "JSON 序列化" },
      { t: "code", file: "python", code: "import json\n\n# 对象 -> JSON 字符串\ndata = {\"name\": \"Alice\", \"skills\": [\"Python\", \"Go\"], \"active\": True}\njson_str = json.dumps(data, ensure_ascii=False, indent=2)\nprint(json_str)\n\n# JSON 字符串 -> 对象\nparsed = json.loads(json_str)\nprint(parsed[\"name\"])\n\n# 读写 JSON 文件\nwith open(\"data.json\", \"w\", encoding=\"utf-8\") as f:\n    json.dump(data, f, ensure_ascii=False, indent=2)\n\nwith open(\"data.json\", \"r\", encoding=\"utf-8\") as f:\n    loaded = json.load(f)" },
      { t: "h2", text: "pathlib:现代路径操作" },
 { t: "code", file: "python", code: "from pathlib import Path\n\np = Path(\"data/reports/2024\")\n\n# 创建目录(递归,不存在才创建)\np.mkdir(parents=True, exist_ok=True)\n\n# 路径拼接\nreport = p / \"monthly.pdf\"\nprint(report)              # data/reports/2024/monthly.pdf\nprint(report.exists())     # False\nprint(report.suffix)       # .pdf\nprint(report.stem)         # monthly\nprint(report.parent)       # data/reports/2024\n\n# 遍历文件\nfor py_file in Path(\".\").glob(\"*.py\"):\n    print(py_file)\n\n# 读写文本(一行搞定)\nreport.write_text(\"Hello\", encoding=\"utf-8\")\nprint(report.read_text(encoding=\"utf-8\"))" },
      { t: "h2", text: "常见文件异常" },
      { t: "table", head: ["异常", "场景", "处理建议"], rows: [
        ["FileNotFoundError", "文件不存在", "检查路径,或用 try/except 兜底"],
        ["PermissionError", "无权限读写", "检查文件权限,以适当用户运行"],
        ["IsADirectoryError", "把目录当文件打开", "确认路径指向文件"],
        ["UnicodeDecodeError", "编码不匹配", "指定正确的 encoding,如 utf-8"],
        ["OSError", "底层系统错误", "磁盘满、只挂载只读等"]
      ]},
      { t: "code", file: "python", code: "from pathlib import Path\nimport json\n\ndef load_config(path):\n    p = Path(path)\n    try:\n        data = json.loads(p.read_text(encoding=\"utf-8\"))\n    except FileNotFoundError:\n        print(f\"配置文件 {p} 不存在,使用默认配置\")\n        data = {}\n    except json.JSONDecodeError:\n        print(f\"配置文件 {p} 格式错误\")\n        data = {}\n    return data\n\nconfig = load_config(\"config.json\")" },
      { t: "callout", kind: "tip", title: "大文件处理技巧", text: "不要用 `f.read()` 一次性读入大文件,会撑爆内存。用 `for line in f:` 逐行处理,或按固定块大小读取: `while chunk := f.read(8192):`。" }
    ],
    quiz: [
      {
        q: "打开文件时最推荐的编码是什么?",
        options: ["gbk", "utf-8", "ascii", "latin-1"],
        answer: 1,
        explain: "UTF-8 是现代标准编码,跨平台兼容性最好。"
      },
      {
        q: "`with open(...) as f:` 保证了什么?",
        options: ["文件一定存在", "代码块结束后自动关闭文件", "自动创建目录", "自动压缩文件"],
        answer: 1,
        explain: "with 语句的上下文管理器保证退出时调用 close()。"
      },
      {
        q: "读取大文件时不推荐使用什么方法?",
        options: ["for line in f:", "f.read(8192)", "f.read()", "f.readline()"],
        answer: 2,
        explain: "f.read() 一次性把整个文件读入内存,大文件会导致内存溢出。"
      },
      {
        q: "哪个模块用于处理 CSV 文件?",
        options: ["json", "csv", "pathlib", "pickle"],
        answer: 1,
        explain: "csv 模块提供了 reader/writer/DictReader/DictWriter。"
      }
    ],
    exercise: {
      title: "练习:学生成绩导出工具",
      task: "给定学生成绩字典列表,把数据写入 CSV 文件,再读取该文件并计算每科平均分,最后把平均分结果保存为 JSON 文件。",
      starter: "import csv\nimport json\nfrom pathlib import Path\n\nstudents = [\n    {\"name\": \"Alice\", \"math\": 90, \"english\": 85},\n    {\"name\": \"Bob\", \"math\": 78, \"english\": 92},\n    {\"name\": \"Charlie\", \"math\": 88, \"english\": 81}\n]\n\ncsv_file = Path(\"students.csv\")\njson_file = Path(\"averages.json\")\n\n# 1. 写入 CSV\n# 2. 读取 CSV 计算平均分\n# 3. 写入 JSON\n",
      solution: "import csv\nimport json\nfrom pathlib import Path\n\nstudents = [\n    {\"name\": \"Alice\", \"math\": 90, \"english\": 85},\n    {\"name\": \"Bob\", \"math\": 78, \"english\": 92},\n    {\"name\": \"Charlie\", \"math\": 88, \"english\": 81}\n]\n\ncsv_file = Path(\"students.csv\")\njson_file = Path(\"averages.json\")\n\n# 1. 写入 CSV\nfields = [\"name\", \"math\", \"english\"]\nwith csv_file.open(\"w\", newline=\"\", encoding=\"utf-8\") as f:\n    writer = csv.DictWriter(f, fieldnames=fields)\n    writer.writeheader()\n    writer.writerows(students)\n\n# 2. 读取 CSV 计算平均分\nmath_scores = []\nenglish_scores = []\nwith csv_file.open(\"r\", encoding=\"utf-8\") as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        math_scores.append(int(row[\"math\"]))\n        english_scores.append(int(row[\"english\"]))\n\naverages = {\n    \"math\": sum(math_scores) / len(math_scores),\n    \"english\": sum(english_scores) / len(english_scores)\n}\n\n# 3. 写入 JSON\nwith json_file.open(\"w\", encoding=\"utf-8\") as f:\n    json.dump(averages, f, ensure_ascii=False, indent=2)\n\nprint(\"平均分:\", averages)"
    }
  },
  {
    id: "capstone",
    num: "12",
    title: "综合实战:天气查询小工具",
    subtitle: "调用天气 API、解析 JSON、命令行交互、错误处理、打包运行",
    level: "intermediate",
    levelText: "综合实战",
    duration: "60 分钟",
    icon: "🌤️",
    summary: "综合运用 requests 请求 API、json 解析、argparse 命令行参数、异常处理、pathlib 配置文件,完成一个可运行的天气查询命令行工具。",
    sections: [
      { t: "h2", text: "项目目标" },
      { t: "p", text: "编写一个命令行工具 `weather.py`,用户输入城市名,程序调用公开天气 API 获取当前天气并美化输出。支持:指定城市、单位切换(摄氏/华氏)、缓存最近查询结果、优雅错误处理。" },
      { t: "h2", text: "核心依赖" },
      { t: "code", file: "terminal", code: "pip install requests\n# 建议在虚拟环境中安装" },
      { t: "h2", text: "完整代码" },
      { t: "code", file: "weather.py", code: "import argparse\nimport json\nimport sys\nfrom pathlib import Path\n\nimport requests\n\nCACHE_FILE = Path(\"~/.weather_cache.json\").expanduser()\nAPI_BASE = \"https://wttr.in/{city}?format=j1\"\n\n\ndef load_cache():\n    if not CACHE_FILE.exists():\n        return {}\n    try:\n        return json.loads(CACHE_FILE.read_text(encoding=\"utf-8\"))\n    except (json.JSONDecodeError, OSError):\n        return {}\n\n\ndef save_cache(cache):\n    try:\n        CACHE_FILE.write_text(\n            json.dumps(cache, ensure_ascii=False, indent=2),\n            encoding=\"utf-8\",\n        )\n    except OSError as e:\n        print(f\"\u8b66\u544a:\u65e0\u6cd5\u5199\u5165\u7f13\u5b58: {e}\", file=sys.stderr)\n\n\ndef fetch_weather(city, use_cache=True):\n    cache = load_cache() if use_cache else {}\n    if city in cache:\n        print(f\"[\u7f13\u5b58\u547d\u4e2d] {city}\")\n        return cache[city]\n\n    url = API_BASE.format(city=city)\n    try:\n        resp = requests.get(url, timeout=10)\n        resp.raise_for_status()\n        data = resp.json()\n    except requests.RequestException as e:\n        print(f\"\u8bf7\u6c42\u5931\u8d25: {e}\", file=sys.stderr)\n        return None\n\n    cache[city] = data\n    save_cache(cache)\n    return data\n\n\ndef format_weather(data, city, unit=\"c\"):\n    if not data:\n        return \"\u65e0\u6cd5\u83b7\u53d6\u5929\u6c14\u4fe1\u606f\"\n\n    current = data[\"current_condition\"][0]\n    temp = current[f\"temp_{unit}C\"]\n    feels = current[f\"FeelsLike{unit}C\"]\n    desc = current[\"weatherDesc\"][0][\"value\"]\n    humidity = current[\"humidity\"]\n    wind = current[f\"windspeed{unit.upper()}\"]\n\n    return (\n        f\"\\n\ud83d\udccd {city}\\n\"\n        f\"\ud83c\udf21\ufe0f  \u6e29\u5ea6: {temp}\u00b0{'C' if unit == 'c' else 'F'} (\u4f53\u611f {feels}\u00b0)\\n\"\n        f\"\u2601\ufe0f  \u5929\u6c14: {desc}\\n\"\n        f\"\ud83d\udca7 \u6e7f\u5ea6: {humidity}%\\n\"\n        f\"\ud83d\udca8 \u98ce\u901f: {wind} {'km/h' if unit == 'c' else 'mph'}\\n\"\n    )\n\n\ndef main():\n    parser = argparse.ArgumentParser(description=\"\u7b80\u5355\u5929\u6c14\u67e5\u8be2\u5de5\u5177\")\n    parser.add_argument(\"city\", help=\"\u57ce\u5e02\u540d,\u4f8b\u5982 Beijing\")\n    parser.add_argument(\"--unit\", choices=[\"c\", \"f\"], default=\"c\",\n                        help=\"\u6e29\u5ea6\u5355\u4f4d: c \u6444\u6c0f\u5ea6 / f \u534e\u6c0f\u5ea6\")\n    parser.add_argument(\"--no-cache\", action=\"store_true\",\n                        help=\"\u4e0d\u4f7f\u7528\u7f13\u5b58,\u5f3a\u5236\u91cd\u65b0\u8bf7\u6c42\")\n    args = parser.parse_args()\n\n    data = fetch_weather(args.city, use_cache=not args.no_cache)\n    print(format_weather(data, args.city, args.unit))\n\n\nif __name__ == \"__main__\":\n    main()\n" },
      { t: "h2", text: "代码要点解读" },
      { t: "h3", text: "1. 命令行参数:argparse" },
      { t: "p", text: "argparse 自动生成帮助信息(`--help`)、处理位置参数和可选参数,比手动解析 `sys.argv` 更健壮。" },
      { t: "h3", text: "2. API 请求:requests" },
      { t: "p", text: "requests 是 Python 事实标准的 HTTP 库,比标准库 urllib 更简洁。`raise_for_status()` 在 HTTP 错误时抛出异常,便于统一处理。" },
      { t: "h3", text: "3. 缓存:pathlib + json" },
      { t: "p", text: "把查询结果持久化到用户主目录下的 `.weather_cache.json`,下次查询同一城市直接读取本地缓存,减少 API 调用。" },
      { t: "h3", text: "4. 错误处理" },
      { t: "p", text: "用 try/except 包裹网络请求和文件操作,网络超时、API 返回异常、缓存文件损坏都有兜底逻辑,程序不会意外崩溃。" },
      { t: "h2", text: "运行示例" },
      { t: "code", file: "terminal", code: "$ python weather.py Beijing\n\n📍 Beijing\n🌡️  温度: 25°C (体感 27°C)\n☁️  天气: 多云\n💧 湿度: 45%\n💨 风速: 12 km/h\n\n$ python weather.py Shanghai --unit f --no-cache" },
      { t: "callout", kind: "tip", title: "扩展练习", text: "尝试添加以下功能:1)支持多天预报(API 返回的 weather 数组);2)把输出保存为文件;3)加入颜色输出(colorama 库);4)将工具打包成可执行文件(pyinstaller)。" },
      { t: "h2", text: "恭喜!" },
      { t: "p", text: "你已经完成了 Python 学习网站的全部 12 节课程,从环境搭建、基础语法到面向对象、模块、文件操作,最后实战了一个天气查询工具。接下来可以继续探索:Web 开发(Flask/Django)、数据分析(Pandas)、自动化测试(Pytest)或机器学习(scikit-learn)。编程最好的老师是实践,动手写代码才是进步的捷径。" }
    ],
    quiz: [
      {
        q: "requests 库中,`raise_for_status()` 的作用是?",
        options: ["自动重试请求", "HTTP 状态码为错误时抛出异常", "解析 JSON 响应", "设置请求超时"],
        answer: 1,
        explain: "当响应状态码表示错误(4xx/5xx)时,抛出 HTTPError 异常。"
      },
      {
        q: "Path(\"~/.weather_cache.json\").expanduser() 的作用是?",
        options: ["展开 ~ 为用户主目录", "创建隐藏文件", "检查文件是否存在", "将路径转为绝对路径"],
        answer: 0,
        explain: "expanduser() 把 ~ 展开为当前用户的主目录路径。"
      },
      {
        q: "argparse 的 `action=\"store_true\"` 表示什么?",
        options: ["参数存储为字符串", "参数出现即为 True,不出现为 False", "参数值自动转为整数", "参数必须提供"],
        answer: 1,
        explain: "store_true 用于布尔开关参数,如 --no-cache。"
      },
      {
        q: "缓存机制在这天气工具中的主要好处是?",
        options: ["让界面更好看", "减少重复 API 调用,加快响应", "自动更新天气数据", "支持多城市同时查询"],
        answer: 1,
        explain: "缓存避免对同一城市重复请求外部 API,节省流量和时间。"
      }
    ],
    exercise: {
      title: "练习:为天气工具添加多天预报",
      task: "在现有天气工具基础上,增加 `--days` 参数(默认 1),显示未来 N 天的天气预报(日期、最高/最低温度、天气描述)。wttr.in API 返回的 `weather` 数组包含多天数据。",
      starter: "# 在 fetch_weather 和 format_weather 之间添加多天预报逻辑\n",
      solution: "def fetch_weather(city, use_cache=True):\n    cache = load_cache() if use_cache else {}\n    if city in cache:\n        print(f\"[缓存命中] {city}\")\n        return cache[city]\n    \n    url = API_BASE.format(city=city)\n    try:\n        resp = requests.get(url, timeout=10)\n        resp.raise_for_status()\n        data = resp.json()\n    except requests.RequestException as e:\n        print(f\"请求失败: {e}\", file=sys.stderr)\n        return None\n    \n    cache[city] = data\n    save_cache(cache)\n    return data\n\n\ndef format_weather(data, city, unit=\"c\", days=1):\n    if not data:\n        return \"无法获取天气信息\"\n    \n    lines = [f\"\\n📍 {city}\"]\n    \n    # 当前天气\n    current = data[\"current_condition\"][0]\n    temp = current[f\"temp_{unit}C\"]\n    desc = current[\"weatherDesc\"][0][\"value\"]\n    lines.append(f\"🌡️  当前: {temp}° {'C' if unit=='c' else 'F'} - {desc}\")\n    \n    # 未来预报\n    for day in data.get(\"weather\", [])[:days]:\n        date = day[\"date\"]\n        maxt = day[f\"maxtemp{unit}C\"]\n        mint = day[f\"mintemp{unit}C\"]\n        desc = day[\"hourly\"][0][\"weatherDesc\"][0][\"value\"]\n        lines.append(f\"📅 {date}: {mint}~{maxt}°, {desc}\")\n    \n    return \"\\n\".join(lines)"
    }
  }
];