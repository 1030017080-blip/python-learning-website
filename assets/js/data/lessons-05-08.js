/* 课程数据 Part 2:第 5-8 课 */
window.COURSES_PART2 = [
  {
    id: "lists",
    num: "05",
    title: "列表与元组",
    subtitle: "有序集合的增删改查、切片、解包与常用方法",
    level: "beginner",
    levelText: "入门",
    duration: "35 分钟",
    icon: "📋",
    summary: "掌握列表的增删改查、切片、排序、列表推导式,以及元组的不可变特性与解包赋值。",
    sections: [
      { t: "h2", text: "列表:可变的有序序列" },
      { t: "p", text: "列表是 Python 最常用的数据结构,用方括号 `[]` 定义,元素可以是任意类型,甚至嵌套列表。列表是**可变**的:创建后还能增删改。" },
      { t: "code", file: "python", code: "fruits = [\"apple\", \"banana\", \"orange\"]\nmixed = [1, \"hello\", 3.14, True, [1, 2]]\n\nprint(len(fruits))   # 3\nprint(fruits[0])     # apple\nprint(fruits[-1])    # orange" },
      { t: "h3", text: "常用增删改操作" },
      { t: "code", file: "python", code: "fruits = [\"apple\", \"banana\", \"orange\"]\n\n# 增\nfruits.append(\"grape\")         # 末尾添加\nfruits.insert(1, \"pear\")       # 指定位置插入\nfruits.extend([\"melon\", \"kiwi\"]) # 批量追加\n\n# 删\nfruits.remove(\"banana\")        # 按值删除(第一个匹配)\npopped = fruits.pop()           # 弹出最后一个并返回\nfruits.pop(0)                   # 弹出指定索引\ndel fruits[0]                   # 直接删除索引\n\n# 改\nfruits[0] = \"strawberry\"\n\n# 查\nprint(\"apple\" in fruits)         # True\nprint(fruits.index(\"orange\"))    # 索引位置\nprint(fruits.count(\"apple\"))     # 出现次数" },
      { t: "callout", kind: "warn", title: "remove 只删除第一个匹配", text: "如果列表里有重复值,`remove(x)` 只会删除第一个。要删除所有匹配,需要用列表推导式过滤。" },
      { t: "h2", text: "切片:列表的超能力" },
      { t: "p", text: "列表切片语法与字符串完全一致,但列表切片返回的是**新列表**,支持步长和反转。" },
      { t: "code", file: "python", code: "nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n\nprint(nums[2:6])     # [2, 3, 4, 5]\nprint(nums[:5])      # [0, 1, 2, 3, 4]\nprint(nums[5:])      # [5, 6, 7, 8, 9]\nprint(nums[::2])     # [0, 2, 4, 6, 8] 隔一个取一个\nprint(nums[::-1])    # [9, 8, ..., 0] 反转\n\n# 切片赋值:替换一段元素\nnums[2:5] = [\"a\", \"b\"]\nprint(nums)          # [0, 1, 'a', 'b', 5, 6, 7, 8, 9]" },
      { t: "h2", text: "列表推导式" },
      { t: "p", text: "用一行代码生成新列表,语法: `[表达式 for 变量 in 可迭代对象 if 条件]`。这是 Python 最具特色的语法糖。" },
      { t: "code", file: "python", code: "# 基础\nsquares = [x * x for x in range(10)]\nprint(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n\n# 带条件\neven_squares = [x * x for x in range(10) if x % 2 == 0]\nprint(even_squares)  # [0, 4, 16, 36, 64]\n\n# 嵌套循环\npairs = [(x, y) for x in range(3) for y in range(3)]\nprint(pairs)  # [(0,0), (0,1), (0,2), (1,0), ...]\n\n# 嵌套列表扁平化\nmatrix = [[1, 2], [3, 4], [5, 6]]\nflat = [x for row in matrix for x in row]\nprint(flat)  # [1, 2, 3, 4, 5, 6]" },
      { t: "callout", kind: "tip", title: "别滥用推导式", text: "如果逻辑超过两层嵌套或包含复杂的 if-else,普通 for 循环反而更易读。推导式的核心价值是简洁,不是炫技。" },
      { t: "h2", text: "常用列表方法一览" },
      { t: "table", head: ["方法", "作用", "修改原列表?", "返回值"], rows: [
        ["append(x)", "末尾添加 x", "是", "None"],
        ["extend(iter)", "追加多个元素", "是", "None"],
        ["insert(i, x)", "索引 i 处插入 x", "是", "None"],
        ["pop(i)", "删除并返回索引 i 的元素", "是", "被删元素"],
        ["remove(x)", "删除第一个值为 x 的元素", "是", "None"],
        ["clear()", "清空列表", "是", "None"],
        ["index(x)", "返回第一个 x 的索引", "否", "索引"],
        ["count(x)", "统计 x 出现次数", "否", "次数"],
        ["sort(key, rev)", "原地排序", "是", "None"],
        ["reverse()", "原地反转", "是", "None"],
        ["copy()", "浅拷贝", "否", "新列表"]
      ]},
      { t: "h2", text: "排序" },
      { t: "p", text: "`sort()` 是原地排序(改变原列表),返回 None;`sorted()` 返回新列表,原列表不变。两者都支持 `key` 和 `reverse` 参数。" },
      { t: "code", file: "python", code: "words = [\"apple\", \"pie\", \"banana\", \"kiwi\"]\n\n# 按长度排序\nwords.sort(key=len)\nprint(words)   # ['pie', 'kiwi', 'apple', 'banana']\n\n# 降序\ndesc = sorted(words, key=len, reverse=True)\nprint(desc)    # ['banana', 'apple', 'kiwi', 'pie']\nprint(words)   # 原列表已变" },
      { t: "h2", text: "元组:不可变的列表" },
      { t: "p", text: "元组用圆括号 `()` 定义,也可以省略括号用逗号分隔。一旦创建就不能修改,常用于:函数返回多值、作为字典键、保护数据不被意外修改。" },
      { t: "code", file: "python", code: "point = (3, 4)\ncolor = 255, 128, 0  # 省略括号也可以\nempty = ()\nsingle = (42,)  # 单元素必须加逗号\n\n# 访问同列表\nprint(point[0])  # 3\n\n# ❌ 报错:元组不可变\n# point[0] = 10\n\n# 但如果元素是可变对象(如列表),内部内容仍可改\nnested = ([1, 2], [3, 4])\nnested[0].append(99)\nprint(nested)  # ([1, 2, 99], [3, 4])" },
      { t: "h2", text: "解包赋值" },
      { t: "p", text: "把序列的元素一次性赋值给多个变量,列表和元组都支持。" },
      { t: "code", file: "python", code: "# 基本解包\nx, y, z = 1, 2, 3\nname, age, city = [\"Bob\", 25, \"New York\"]\n\n# 交换变量\nx, y = y, x\n\n# 扩展解包(星号表达式)\nfirst, *middle, last = range(10)\nprint(first)    # 0\nprint(middle)   # [1, 2, 3, 4, 5, 6, 7, 8]\nprint(last)     # 9\n\n# 函数返回多值\nmin_val, max_val = min([5, 2, 9]), max([5, 2, 9])\nprint(min_val, max_val)" },
      { t: "h2", text: "浅拷贝 vs 深拷贝" },
      { t: "p", text: "赋值 `b = a` 只是给同一个对象起个新名字。浅拷贝 `a.copy()` 只复制第一层,嵌套对象仍共享。深拷贝 `copy.deepcopy()` 递归复制所有层级。" },
      { t: "code", file: "python", code: "import copy\n\noriginal = [[1, 2], [3, 4]]\nshallow = original.copy()\ndeep = copy.deepcopy(original)\n\noriginal[0].append(99)\nprint(original)  # [[1, 2, 99], [3, 4]]\nprint(shallow)   # [[1, 2, 99], [3, 4]]  共享内层列表\nprint(deep)      # [[1, 2], [3, 4]]     完全独立" },
      { t: "callout", kind: "info", title: "什么时候用元组?", text: "数据在逻辑上是固定的(坐标、RGB 颜色、数据库记录)、作为字典键、函数返回多个无关值时,首选元组;其余情况用列表。" }
    ],
    quiz: [
      {
        q: "`fruits = [\"a\", \"b\"]; fruits += [\"c\"]` 后,fruits 的内容是什么?",
        options: ["[\"a\", \"b\"]", "[\"a\", \"b\", \"c\"]", "[[\"a\", \"b\"], \"c\"]", "报错"],
        answer: 1,
        explain: "`+=` 对列表等同于 extend,会原地追加元素。"
      },
      {
        q: "如何得到列表 `lst` 的浅拷贝?",
        options: ["b = lst", "b = lst[:]", "b = list(lst)", "以上都是"],
        answer: 3,
        explain: "切片 `lst[:]`、构造函数 `list(lst)` 和 `.copy()` 都能得到浅拷贝。"
      },
      {
        q: "定义单元素元组的正确写法是?",
        options: ["(42)", "(42,)", "[42]", "\"42\""],
        answer: 1,
        explain: "单元素元组必须加逗号,否则括号会被视为分组运算符,结果是整数 42。"
      },
      {
        q: "`first, *middle, last = range(5)` 中,middle 的值是什么?",
        options: ["[1, 2, 3]", "[1, 2, 3, 4]", "(1, 2, 3)", "(1, 2, 3, 4)"],
        answer: 0,
        explain: "星号表达式收集剩余元素为列表,range(5) 是 0-4,中间剩下 1,2,3。"
      }
    ],
    exercise: {
      title: "练习:成绩统计器",
      task: "给定一个成绩列表 scores,用列表推导式完成:1)筛选出及格(>=60)的成绩;2)计算平均分;3)找出最高分和最低分;4)把每个成绩加 5 分但不超过 100,生成新列表。",
      starter: "scores = [85, 42, 96, 67, 53, 78, 91, 59, 88, 73]\n\n# 1) 及格成绩\n# 2) 平均分\n# 3) 最高/最低\n# 4) 加分后列表\n",
      solution: "scores = [85, 42, 96, 67, 53, 78, 91, 59, 88, 73]\n\n# 1) 及格成绩\npassed = [s for s in scores if s >= 60]\nprint(\"及格:\", passed)\n\n# 2) 平均分\navg = sum(scores) / len(scores)\nprint(f\"平均分: {avg:.1f}\")\n\n# 3) 最高/最低\nprint(f\"最高: {max(scores)}, 最低: {min(scores)}\")\n\n# 4) 加分但不超 100\nboosted = [min(s + 5, 100) for s in scores]\nprint(\"加分后:\", boosted)"
    }
  },
  {
    id: "dicts-sets",
    num: "06",
    title: "字典与集合",
    subtitle: "键值映射、哈希表原理、去重与集合运算",
    level: "beginner",
    levelText: "入门",
    duration: "30 分钟",
    icon: "🗂️",
    summary: "深入理解字典的键值存取、常用方法、字典推导式;掌握集合的去重、交并差补运算。",
    sections: [
      { t: "h2", text: "字典:键值对的哈希表" },
      { t: "p", text: "字典用大括号 `{}` 定义,存储键值对。键必须是**可哈希**的(不可变类型:数字、字符串、元组),值可以是任意类型。查找、插入、删除平均 O(1)。" },
      { t: "code", file: "python", code: "user = {\"name\": \"Alice\", \"age\": 28, \"city\": \"Beijing\"}\n\n# 访问\nprint(user[\"name\"])        # Alice\nprint(user.get(\"email\"))    # None  不存在不报错\nprint(user.get(\"email\", \"N/A\")) # N/A  提供默认值\n\n# 新增/修改\nuser[\"email\"] = \"alice@example.com\"\nuser[\"age\"] = 29\n\n# 删除\ndel user[\"city\"]\nemail = user.pop(\"email\")  # 删除并返回值\n\nprint(user)" },
      { t: "h3", text: "常用字典方法" },
      { t: "code", file: "python", code: "d = {\"a\": 1, \"b\": 2, \"c\": 3}\n\nprint(list(d.keys()))    # ['a', 'b', 'c']\nprint(list(d.values()))  # [1, 2, 3]\nprint(list(d.items()))   # [('a',1), ('b',2), ('c',3)]\n\n# 遍历\nfor k, v in d.items():\n    print(k, v)\n\n# 合并(Python 3.9+)\nd1 = {\"x\": 1}\nd2 = {\"y\": 2}\nmerged = d1 | d2\nprint(merged)  # {'x': 1, 'y': 2}\n\n# setdefault:键不存在时设置默认值\nprint(d.setdefault(\"d\", 4))  # 4\nprint(d.setdefault(\"a\", 99)) # 1  已存在不改" },
      { t: "h2", text: "字典推导式" },
      { t: "code", file: "python", code: "# 从两个列表构建字典\nnames = [\"Alice\", \"Bob\", \"Charlie\"]\nages = [25, 30, 35]\nd = {name: age for name, age in zip(names, ages)}\nprint(d)  # {'Alice': 25, 'Bob': 30, 'Charlie': 35}\n\n# 过滤\nd2 = {k: v for k, v in d.items() if v >= 30}\nprint(d2)  # {'Bob': 30, 'Charlie': 35}\n\n# 反转键值(值唯一时)\nrev = {v: k for k, v in d.items()}\nprint(rev)" },
      { t: "h2", text: "集合:无序去重的哈希表" },
      { t: "p", text: "集合用大括号 `{}` 定义,但元素之间没有冒号,只有值。集合自动去重,不保证顺序。常用于:去重、成员检测、数学集合运算(交并差补)。" },
      { t: "code", file: "python", code: "s = {1, 2, 3, 2, 1}\nprint(s)  # {1, 2, 3}  自动去重\n\n# 空集合必须用 set()\nempty = set()\n\n# 增删\ns.add(4)\ns.update([5, 6])\ns.remove(2)      # 不存在报错\ns.discard(99)  # 不存在也不报错\ns.pop()        # 随机弹出一个\n\n# 成员检测 O(1)\nprint(3 in s)" },
      { t: "h2", text: "集合运算" },
      { t: "table", head: ["运算", "操作符", "方法", "含义"], rows: [
        ["交集", "A & B", "A.intersection(B)", "两者都有的元素"],
        ["并集", "A | B", "A.union(B)", "任意一方有的元素"],
        ["差集", "A - B", "A.difference(B)", "在 A 不在 B 的元素"],
        ["对称差集", "A ^ B", "A.symmetric_difference(B)", "只在一方出现的元素"],
        ["子集", "A <= B", "A.issubset(B)", "A 的元素全在 B 中"],
        ["超集", "A >= B", "A.issuperset(B)", "B 的元素全在 A 中"]
      ]},
      { t: "code", file: "python", code: "A = {1, 2, 3, 4}\nB = {3, 4, 5, 6}\n\nprint(A & B)  # {3, 4}\nprint(A | B)  # {1, 2, 3, 4, 5, 6}\nprint(A - B)  # {1, 2}\nprint(B - A)  # {5, 6}\nprint(A ^ B)  # {1, 2, 5, 6}" },
      { t: "callout", kind: "tip", title: "集合推导式", text: "语法 `{表达式 for 变量 in 可迭代对象 if 条件}`,与列表推导式类似,结果是集合。`{x for x in range(10) if x % 2 == 0}` → `{0, 2, 4, 6, 8}`。" },
      { t: "h2", text: "frozenset:不可变集合" },
      { t: "p", text: "`frozenset` 是集合的不可变版本,可以作为字典键或放入另一个集合中。" },
      { t: "code", file: "python", code: "fs = frozenset([1, 2, 3])\n# fs.add(4)  # 报错\n\n# 可作为字典键\nd = {fs: \"value\"}\nprint(d)" },
      { t: "callout", kind: "warn", title: "可哈希的含义", text: "列表、字典、集合是可变的,不可哈希,不能做字典键、不能放入集合。元组、字符串、数字、frozenset 可哈希。" }
    ],
    quiz: [
      {
        q: "字典的键可以是列表吗?",
        options: ["可以", "不可以", "只有在 Python 3.10+ 可以", "只有元素是不可变时可以"],
        answer: 1,
        explain: "列表是可变的,不可哈希,不能作为字典键。"
      },
      {
        q: "`d = {\"a\": 1}; print(d.get(\"b\", 0))` 输出什么?",
        options: ["None", "0", "报错", "1"],
        answer: 1,
        explain: "get 方法的第二个参数是默认值,键不存在时返回默认值。"
      },
      {
        q: "集合 `{1, 2, 3} | {3, 4, 5}` 的结果是什么?",
        options: ["{3}", "{1, 2, 4, 5}", "{1, 2, 3, 4, 5}", "{1, 2, 3, 3, 4, 5}"],
        answer: 2,
        explain: "| 是并集运算,自动去重。"
      },
      {
        q: "如何把列表 `['a', 'b', 'a', 'c']` 去重并转回列表?",
        options: ["list(set(lst))", "set(list(lst))", "lst.unique()", "lst.distinct()"],
        answer: 0,
        explain: "set() 去重,list() 转回列表。注意顺序可能改变。"
      }
    ],
    exercise: {
      title: "练习:单词频率统计",
      task: "给定一段英文文本,统计每个单词出现的次数(不区分大小写,忽略标点符号),按频率降序输出前 5 个单词。",
      starter: "text = \"Hello world! Hello Python. Python is great, isn't it? World says hello.\"\n\n# 统计单词频率\n",
      solution: "import re\nfrom collections import Counter\n\ntext = \"Hello world! Hello Python. Python is great, isn't it? World says hello.\"\n\n# 简单处理:小写 + 去标点\nwords = re.findall(r\"\\b\\w+\\b\", text.lower())\n\n# Counter 自动统计频率\ncounter = Counter(words)\n\n# 最常见的 5 个\nfor word, count in counter.most_common(5):\n    print(f\"{word}: {count}\")"
    }
  },
  {
    id: "control-flow",
    num: "07",
    title: "控制流",
    subtitle: "if/else、for/while 循环、break/continue、异常处理",
    level: "beginner",
    levelText: "入门",
    duration: "35 分钟",
    icon: "🔀",
    summary: "掌握条件判断的多种写法、循环结构与控制关键字、异常捕获与自定义异常,写出健壮的代码。",
    sections: [
      { t: "h2", text: "条件判断" },
      { t: "code", file: "python", code: "score = 85\n\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 70:\n    grade = \"C\"\nelse:\n    grade = \"D\"\n\nprint(grade)  # B" },
      { t: "h3", text: "三元表达式" },
      { t: "code", file: "python", code: "age = 20\nstatus = \"成年\" if age >= 18 else \"未成年\"\nprint(status)  # 成年\n\n# 多级嵌套(不推荐)\n# result = \"A\" if x > 90 else (\"B\" if x > 80 else \"C\")" },
      { t: "h3", text: "match-case(Python 3.10+)" },
      { t: "code", file: "python", code: "command = \"start\"\n\nmatch command:\n    case \"start\":\n        print(\"启动\")\n    case \"stop\":\n        print(\"停止\")\n    case \"restart\":\n        print(\"重启\")\n    case _:\n        print(\"未知命令\")\n\n# 结构化模式匹配\npoint = (0, 5)\nmatch point:\n    case (0, 0):\n        print(\"原点\")\n    case (0, y):\n        print(f\"Y 轴: {y}\")\n    case (x, 0):\n        print(f\"X 轴: {x}\")\n    case (x, y):\n        print(f\"点({x}, {y})\")" },
      { t: "callout", kind: "info", title: "match 的强大之处", text: "match 支持解包、守卫条件(`case x if x > 0`)、OR 模式(`case 1 | 2 | 3`)、捕获子模式等,远不止简单的 switch。" },
      { t: "h2", text: "for 循环" },
      { t: "p", text: "Python 的 for 是 **遍历迭代器**,不是传统的计数循环。遍历任何可迭代对象:列表、字符串、字典、range、文件对象等。" },
      { t: "code", file: "python", code: "# 基础遍历\nfor fruit in [\"apple\", \"banana\"]:\n    print(fruit)\n\n# 带索引\nenumerate 从 0 开始\nfor i, fruit in enumerate(fruits):\n    print(i, fruit)\n\nfor i, fruit in enumerate(fruits, start=1):\n    print(f\"{i}. {fruit}\")\n\n# 遍历字典\nfor k, v in {\"a\": 1, \"b\": 2}.items():\n    print(k, v)\n\n# 并行遍历多个序列\nnames = [\"A\", \"B\"]\nages = [20, 25]\nfor name, age in zip(names, ages):\n    print(name, age)" },
      { t: "h2", text: "while 循环" },
      { t: "code", file: "python", code: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1\nelse:\n    print(\"循环正常结束\")\n\n# 无限循环 + break\nwhile True:\n    cmd = input(\"> \")\n    if cmd == \"quit\":\n        break\n    print(f\"执行: {cmd}\")" },
      { t: "h3", text: "break / continue / else" },
      { t: "code", file: "python", code: "# continue 跳过本轮\nfor i in range(10):\n    if i % 2 == 0:\n        continue\n    print(i)  # 1, 3, 5, 7, 9\n\n# break 跳出整个循环\nfor i in range(10):\n    if i == 5:\n        break\n    print(i)  # 0, 1, 2, 3, 4\n\n# else:循环未被 break 中断时执行\nfor i in range(3):\n    print(i)\nelse:\n    print(\"结束\")  # 会执行\n\nfor i in range(3):\n    if i == 1:\n        break\nelse:\n    print(\"结束\")  # 不会执行" },
      { t: "callout", kind: "tip", title: "else 的直观理解", text: "循环的 else 块在「循环正常耗尽」时执行,被 break 打断则不执行。可以把它读作 \"如果没 break 就...\"。" },
      { t: "h2", text: "异常处理" },
      { t: "code", file: "python", code: "# 基本结构\ntry:\n    x = 10 / 0\n    result = int(\"abc\")\nexcept ZeroDivisionError:\n    print(\"不能除以零\")\nexcept ValueError:\n    print(\"字符串不是数字\")\nexcept Exception as e:\n    print(f\"其他错误: {e}\")\nelse:\n    print(\"没有异常时执行\")\nfinally:\n    print(\"无论是否异常都执行\")" },
      { t: "h3", text: "自定义异常" },
      { t: "code", file: "python", code: "class InsufficientFundsError(Exception):\n    \"\"\"余额不足异常\"\"\"\n    def __init__(self, balance, amount):\n        self.balance = balance\n        self.amount = amount\n        super().__init__(f\"余额 {balance} 不足以支付 {amount}\")\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFundsError(balance, amount)\n    return balance - amount\n\ntry:\n    withdraw(100, 150)\nexcept InsufficientFundsError as e:\n    print(e)\n    print(f\"当前余额: {e.balance}\")" },
      { t: "h3", text: "上下文管理器 with" },
      { t: "code", file: "python", code: "# 自动关闭文件,即使中间报错\nwith open(\"data.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello\")\n# 离开块自动 f.close()\n\n# 多资源\nwith open(\"a.txt\") as f1, open(\"b.txt\") as f2:\n    pass" },
      { t: "h2", text: "常见异常类型" },
      { t: "table", head: ["异常", "典型场景"], rows: [
        ["SyntaxError", "语法错误,代码无法运行"],
        ["IndentationError", "缩进错误"],
        ["TypeError", "操作类型不支持,如 \"a\" + 1"],
        ["ValueError", "类型对但值不合法,如 int(\"abc\")"],
        ["IndexError", "序列索引越界"],
        ["KeyError", "字典键不存在"],
        ["AttributeError", "对象没有该属性/方法"],
        ["FileNotFoundError", "文件不存在"],
        ["ZeroDivisionError", "除以零"]
      ]},
      { t: "callout", kind: "warn", title: "别用裸露的 except:", text: "`except:` 会捕获所有异常,包括 KeyboardInterrupt(用户 Ctrl+C)和 SystemExit,导致程序无法正常退出。至少写 `except Exception:`。" }
    ],
    quiz: [
      {
        q: "循环的 else 块在什么情况下执行?",
        options: ["每次循环后", "循环被 break 中断时", "循环正常耗尽(未被 break)时", "永远不执行"],
        answer: 2,
        explain: "else 仅在循环未被 break 打断时执行。"
      },
      {
        q: "下面哪个异常会被 `except Exception:` 捕获?",
        options: ["KeyboardInterrupt", "SystemExit", "ValueError", "以上都会"],
        answer: 2,
        explain: "KeyboardInterrupt 和 SystemExit 继承自 BaseException,不是 Exception 的子类。"
      },
      {
        q: "`match x: case 1 | 2: ...` 的含义是?",
        options: ["x 等于 1 或 2 时匹配", "x 等于 1 和 2 同时匹配", "x 是列表 [1, 2]", "语法错误"],
        answer: 0,
        explain: "| 表示 OR 模式,匹配任意一种情况。"
      },
      {
        q: "使用 `with open(...) as f:` 的主要好处是?",
        options: ["写入速度更快", "自动关闭文件,即使发生异常", "自动创建目录", "自动编码转换"],
        answer: 1,
        explain: "with 保证退出代码块时调用 __exit__,自动释放资源(关闭文件)。"
      }
    ],
    exercise: {
      title: "练习:猜数字游戏",
      task: "编写一个猜数字游戏:程序随机生成 1-100 之间的数字,用户输入猜测,程序提示\"大了\"、\"小了\"或\"猜中了\",限制最多猜 7 次。用 try/except 处理非数字输入,用 while-else 处理猜完次数仍未中。",
      starter: "import random\n\nsecret = random.randint(1, 100)\nmax_attempts = 7\n\n# 你的代码\n",
      solution: "import random\n\nsecret = random.randint(1, 100)\nmax_attempts = 7\n\nfor attempt in range(1, max_attempts + 1):\n    try:\n        guess = int(input(f\"第 {attempt} 次猜测(1-100): \"))\n    except ValueError:\n        print(\"请输入有效数字!\")\n        continue\n    \n    if guess == secret:\n        print(f\"🎉 猜中了!答案是 {secret}\")\n        break\n    elif guess < secret:\n        print(\"大了\")\n    else:\n        print(\"小了\")\nelse:\n    print(f\"次数用完,答案是 {secret}\")"
    }
  },
  {
    id: "functions",
    num: "08",
    title: "函数",
    subtitle: "定义与调用、参数类型、返回值、作用域、装饰器入门",
    level: "beginner",
    levelText: "入门",
    duration: "40 分钟",
    icon: "⚙️",
    summary: "全面掌握函数定义、位置/关键字/默认/可变参数、返回值、作用域链 LEGB、闭包与装饰器基础。",
    sections: [
      { t: "h2", text: "函数基础" },
      { t: "code", file: "python", code: "def greet(name):\n    \"\"\"打招呼函数\"\"\"\n    return f\"Hello, {name}!\"\n\nprint(greet(\"Alice\"))\n\n# 函数是一等公民,可赋值、传参、放入容器\nsay_hi = greet\nprint(say_hi(\"Bob\"))" },
      { t: "h2", text: "参数类型大全" },
      { t: "code", file: "python", code: "def demo(a, b, c=10, *args, d, e=20, **kwargs):\n    print(f\"a={a}, b={b}, c={c}\")\n    print(f\"args={args}\")      # 多余位置参数 -> 元组\n    print(f\"d={d}, e={e}\")\n    print(f\"kwargs={kwargs}\")  # 多余关键字参数 -> 字典\n\n# 调用\ndemo(1, 2, 3, 4, 5, d=6, e=7, f=8, g=9)\n# a=1, b=2, c=3\n# args=(4, 5)\n# d=6, e=7\n# kwargs={'f': 8, 'g': 9}" },
      { t: "h3", text: "参数定义顺序规则" },
      { t: "p", text: "必须参数 → 默认参数 → *args → 命名关键字参数(单独的 * 或带默认值的关键字参数)→ **kwargs。" },
      { t: "h3", text: "强制关键字参数" },
      { t: "code", file: "python", code: "# Python 3:单独的 * 后面的参数必须用关键字传\ndef func(a, b, *, c, d=10):\n    print(a, b, c, d)\n\nfunc(1, 2, c=3)        # ✅\nfunc(1, 2, c=3, d=4)   # ✅\n# func(1, 2, 3, 4)     # ❌ TypeError" },
      { t: "callout", kind: "warn", title: "默认参数的可变对象陷阱", text: "默认参数在函数定义时只计算一次!如果默认值是列表或字典,所有调用会共享同一个对象。" },
      { t: "code", file: "python", code: "# ❌ 错误:所有调用共享同一个列表\ndef add_item(item, lst=[]):\n    lst.append(item)\n    return lst\n\nprint(add_item(1))  # [1]\nprint(add_item(2))  # [1, 2]  累积了!\n\n# ✅ 正确:用 None 做哨兵\ndef add_item_fixed(item, lst=None):\n    if lst is None:\n        lst = []\n    lst.append(item)\n    return lst" },
      { t: "h2", text: "返回值" },
      { t: "code", file: "python", code: "# 多返回值本质是返回元组\ndef min_max(nums):\n    return min(nums), max(nums)\n\nmi, ma = min_max([3, 1, 4])\nprint(mi, ma)  # 1 4\n\n# 显式返回 None(也可省略 return)\ndef do_nothing():\n    pass\nprint(do_nothing())  # None" },
      { t: "h2", text: "作用域与 LEGB 规则" },
      { t: "p", text: "Python 按 **L → E → G → B** 顺序查找变量:Local(局部)→ Enclosing(嵌套函数)→ Global(模块全局)→ Builtins(内置)。" },
      { t: "code", file: "python", code: "x = \"global\"\n\ndef outer():\n    x = \"enclosing\"\n    \n    def inner():\n        x = \"local\"\n        print(x)  # local\n    \n    inner()\n    print(x)      # enclosing\n\nouter()\nprint(x)          # global" },
      { t: "h3", text: "global 与 nonlocal" },
      { t: "code", file: "python", code: "count = 0\n\ndef increment():\n    global count\n    count += 1\n\nincrement()\nprint(count)  # 1\n\n# nonlocal:修改外层函数(非全局)变量\ndef outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x = 20\n    inner()\n    print(x)  # 20\n\nouter()" },
      { t: "h2", text: "闭包" },
      { t: "p", text: "内层函数引用了外层函数的变量,并返回内层函数,形成闭包。闭包会记住创建时的环境。" },
      { t: "code", file: "python", code: "def make_multiplier(n):\n    def multiply(x):\n        return x * n  # 捕获了外层的 n\n    return multiply\n\ntimes3 = make_multiplier(3)\ntimes5 = make_multiplier(5)\n\nprint(times3(10))  # 30\nprint(times5(10))  # 50" },
      { t: "h2", text: "装饰器入门" },
      { t: "p", text: "装饰器是接受函数、返回新函数的高阶函数,用 `@语法糖` 语法应用。常用于:日志、计时、权限校验、缓存。" },
      { t: "code", file: "python", code: "import time\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        elapsed = time.perf_counter() - start\n        print(f\"{func.__name__} 耗时: {elapsed:.4f}s\")\n        return result\n    return wrapper\n\n@timer\ndef slow():\n    time.sleep(0.5)\n    return \"done\"\n\nprint(slow())" },
      { t: "h3", text: "带参数的装饰器" },
      { t: "code", file: "python", code: "def repeat(times):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(times):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef say_hi():\n    print(\"Hi!\")\n\nsay_hi()  # 打印 3 次 Hi!" },
      { t: "callout", kind: "info", title: "functools.wraps", text: "装饰器会丢失原函数的 `__name__`、`__doc__` 等元信息。使用 `from functools import wraps; @wraps(func)` 保留原函数元数据。" },
      { t: "h2", text: "类型提示(可选但推荐)" },
      { t: "code", file: "python", code: "from typing import List, Optional\n\ndef greet(names: List[str], prefix: str = \"Hi\") -> str:\n    return \", \".join(f\"{prefix} {name}\" for name in names)\n\n# Python 3.9+ 可直接用 list[str]\ndef greet2(names: list[str], prefix: str = \"Hi\") -> str:\n    pass" }
    ],
    quiz: [
      {
        q: "下面哪个函数定义会导致可变默认参数陷阱?",
        options: [
          "def f(x, lst=[]):",
          "def f(x, lst=None):",
          "def f(x, lst=()):",
          "def f(x, lst={})"
        ],
        answer: 0,
        explain: "列表和字典作为默认参数会在定义时创建一次,所有调用共享。元组是不可变的没问题。"
      },
      {
        q: "`def f(a, b, *, c):` 中,参数 c 必须怎么传?",
        options: ["位置参数", "关键字参数", "都可以", "不能传"],
        answer: 1,
        explain: "* 后面的参数是强制关键字参数,只能用关键字形式传递。"
      },
      {
        q: "闭包能访问外层函数的局部变量吗?",
        options: ["不能", "只能读不能改", "能读能改(配合 nonlocal)", "只能在定义时捕获值"],
        answer: 2,
        explain: "闭包捕获的是变量引用,加上 nonlocal 可以修改外层变量。"
      },
      {
        q: "装饰器 `@timer` 等价于什么写法?",
        options: ["timer(slow())", "slow = timer(slow)", "slow = timer(slow())", "timer(slow)"],
        answer: 1,
        explain: "@timer 是 slow = timer(slow) 的语法糖。"
      }
    ],
    exercise: {
      title: "练习:实现一个缓存装饰器",
      task: "编写一个 `@cache` 装饰器,缓存函数的调用结果。相同参数再次调用时直接返回缓存值,不再执行函数体。支持位置参数和关键字参数。",
      starter: "import time\n\n# 你的 @cache 装饰器实现\n\n@cache\ndef expensive(x, y):\n    time.sleep(0.5)\n    return x + y\n\n# 测试:第一次调用慢,第二次瞬间返回\n",
      solution: "import time\nfrom functools import wraps\n\ndef cache(func):\n    _cache = {}\n    \n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        key = (args, tuple(sorted(kwargs.items())))\n        if key in _cache:\n            print(f\"[缓存命中] {key}\")\n            return _cache[key]\n        print(f\"[执行函数] {key}\")\n        result = func(*args, **kwargs)\n        _cache[key] = result\n        return result\n    return wrapper\n\n@cache\ndef expensive(x, y):\n    time.sleep(0.5)\n    return x + y\n\nprint(expensive(1, 2))  # 执行函数\nprint(expensive(1, 2))  # 缓存命中\nprint(expensive(2, 3))  # 执行函数"
    }
  }
];