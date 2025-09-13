// 资源数据
const resources = {
    literature: [
        // 顶级期刊
        {
            title: "Nature Materials",
            description: "材料科学领域顶级期刊，影响因子约40+",
            url: "https://www.nature.com/nmat/",
            category: "journal",
            tags: ["顶级期刊", "高影响因子"]
        },
        {
            title: "Science",
            description: "国际顶级科学期刊，材料科学重要发表平台",
            url: "https://science.org/",
            category: "journal",
            tags: ["顶级期刊", "综合性"]
        },
        {
            title: "Advanced Materials",
            description: "材料科学领域权威期刊，聚焦前沿材料研究",
            url: "https://onlinelibrary.wiley.com/journal/15214095",
            category: "journal",
            tags: ["权威期刊", "前沿研究"]
        },
        {
            title: "Chemistry of Materials",
            description: "ACS材料化学期刊，固态化学和材料科学",
            url: "https://pubs.acs.org/journal/cmatex",
            category: "journal",
            tags: ["ACS期刊", "材料化学"]
        },
        {
            title: "ACS Materials Letters",
            description: "ACS材料科学快速发表期刊",
            url: "https://pubs.acs.org/journal/amlccd",
            category: "journal",
            tags: ["快速发表", "ACS期刊"]
        },
        {
            title: "Materials Today",
            description: "材料科学综述期刊，权威综述文章",
            url: "https://www.sciencedirect.com/journal/materials-today",
            category: "journal",
            tags: ["综述期刊", "权威"]
        },
        // 数据库
        {
            title: "Web of Science",
            description: "科学引文索引数据库，权威文献检索平台",
            url: "https://www.webofscience.com/",
            category: "database",
            tags: ["引文数据库", "检索平台"]
        },
        {
            title: "Google Scholar",
            description: "免费学术搜索引擎，覆盖广泛学术内容",
            url: "https://scholar.google.com/",
            category: "database",
            tags: ["免费", "搜索引擎"]
        },
        {
            title: "Scopus",
            description: "Elsevier文摘和引文数据库",
            url: "https://www.scopus.com/",
            category: "database",
            tags: ["引文数据库", "Elsevier"]
        },
        {
            title: "中国知网 (CNKI)",
            description: "中国学术文献网络出版平台",
            url: "https://www.cnki.net/",
            category: "database",
            tags: ["中文数据库", "国内权威"]
        },
        {
            title: "arXiv材料科学",
            description: "物理和材料科学预印本服务器",
            url: "https://arxiv.org/list/cond-mat/recent",
            category: "preprint",
            tags: ["预印本", "免费获取"]
        },
        {
            title: "ChemRxiv",
            description: "化学领域预印本服务器",
            url: "https://chemrxiv.org/",
            category: "preprint",
            tags: ["化学预印本", "免费"]
        },
        // 新增的文献搜索平台
        {
            title: "Google Scholar",
            description: "免费学术搜索引擎，覆盖广泛学术内容",
            url: "https://scholar.google.co.jp/",
            category: "database",
            tags: ["免费", "搜索引擎", "学术检索"]
        },
        {
            title: "PubChem",
            description: "NCBI维护的化学数据库，免费化合物信息",
            url: "https://pubchem.ncbi.nlm.nih.gov/",
            category: "database",
            tags: ["化学数据库", "免费", "化合物信息"]
        },
        {
            title: "Reaxys",
            description: "Elsevier专业化学数据库，化学合成路径查询",
            url: "https://www.elsevier.com/zh-cn/products/reaxys",
            category: "database",
            tags: ["化学数据库", "合成路径", "商业数据库"]
        },
        {
            title: "摩熵化学MolAid",
            description: "化合物检索及合成设计平台",
            url: "https://chem.molaid.com/home",
            category: "database",
            tags: ["化合物检索", "合成设计", "中文平台"]
        }
    ],
    programming: [
        // 第一性原理计算
        {
            title: "VASP",
            description: "维也纳从头算分子包，DFT计算软件",
            url: "https://www.vasp.at/",
            category: "ab-initio",
            tags: ["DFT", "商业软件", "主流"]
        },
        {
            title: "Quantum ESPRESSO",
            description: "开源第一性原理计算软件包",
            url: "https://www.quantum-espresso.org/",
            category: "ab-initio",
            tags: ["开源", "DFT", "免费"]
        },
        {
            title: "CASTEP",
            description: "Materials Studio中的DFT计算模块",
            url: "http://www.castep.org/",
            category: "ab-initio",
            tags: ["DFT", "Materials Studio"]
        },
        {
            title: "Gaussian",
            description: "著名的量子化学计算软件包",
            url: "https://gaussian.com/",
            category: "quantum-chemistry",
            tags: ["量子化学", "分子计算"]
        },
        // 分子动力学
        {
            title: "LAMMPS",
            description: "大规模原子/分子并行模拟器",
            url: "https://www.lammps.org/",
            category: "molecular-dynamics",
            tags: ["开源", "分子动力学", "并行计算"]
        },
        {
            title: "GROMACS",
            description: "生物分子分子动力学模拟软件",
            url: "https://www.gromacs.org/",
            category: "molecular-dynamics",
            tags: ["开源", "生物分子", "高性能"]
        },
        {
            title: "Materials Project API",
            description: "材料数据库API接口，大量材料数据",
            url: "https://materialsproject.org/",
            category: "api",
            tags: ["材料数据库", "API", "免费"]
        },
        // Python库
        {
            title: "Pymatgen",
            description: "Python材料分析库，Materials Project核心工具",
            url: "https://pymatgen.org/",
            category: "python-library",
            tags: ["Python", "材料分析", "开源"]
        },
        {
            title: "ASE (Atomic Simulation Environment)",
            description: "原子尺度模拟Python库",
            url: "https://wiki.fysik.dtu.dk/ase/",
            category: "python-library",
            tags: ["Python", "原子模拟", "开源"]
        },
        {
            title: "Phonopy",
            description: "声子计算Python工具包",
            url: "https://phonopy.github.io/phonopy/",
            category: "python-library",
            tags: ["声子计算", "Python", "开源"]
        },
        {
            title: "SUMO",
            description: "固体材料电子结构分析工具",
            url: "https://github.com/SMTG-UCL/sumo",
            category: "python-library",
            tags: ["电子结构", "数据分析", "开源"]
        },
        // 数据库平台
        {
            title: "AFLOW",
            description: "自动化材料发现和设计框架",
            url: "https://www.aflowlib.org/",
            category: "database-platform",
            tags: ["材料数据库", "高通量", "免费"]
        },
        {
            title: "OQMD",
            description: "开放量子材料数据库",
            url: "http://oqmd.org/",
            category: "database-platform",
            tags: ["量子材料", "开放数据", "DFT数据"]
        },
        {
            title: "Materials Cloud",
            description: "计算材料科学云平台",
            url: "https://www.materialscloud.org/",
            category: "cloud-platform",
            tags: ["云计算", "在线工具", "免费"]
        },
        {
            title: "NOMAD",
            description: "欧洲材料和分子数据仓库",
            url: "https://nomad-lab.eu/",
            category: "database-platform",
            tags: ["欧洲项目", "大数据", "开放科学"]
        }
    ],
    visualization: [
        // 晶体结构可视化
        {
            title: "VESTA",
            description: "多功能晶体结构可视化软件",
            url: "https://jp-minerals.org/vesta/en/",
            category: "crystal-structure",
            tags: ["免费", "晶体结构", "多平台"]
        },
        {
            title: "CrystalMaker",
            description: "晶体结构建模与可视化软件",
            url: "https://crystalmaker.com/",
            category: "crystal-structure",
            tags: ["商业软件", "建模", "可视化"]
        },
        {
            title: "Diamond",
            description: "晶体和分子结构可视化软件",
            url: "https://www.crystalimpact.com/diamond/",
            category: "crystal-structure",
            tags: ["晶体结构", "商业软件"]
        },
        // 原子/分子可视化
        {
            title: "OVITO",
            description: "原子模拟数据可视化和分析软件",
            url: "https://www.ovito.org/",
            category: "atomic-visualization",
            tags: ["原子模拟", "数据分析", "免费版本"]
        },
        {
            title: "VMD",
            description: "分子动力学轨迹可视化软件",
            url: "https://www.ks.uiuc.edu/Research/vmd/",
            category: "molecular-visualization",
            tags: ["免费", "分子动力学", "可视化"]
        },
        {
            title: "PyMOL",
            description: "分子结构可视化软件",
            url: "https://pymol.org/2/",
            category: "molecular-visualization",
            tags: ["分子结构", "蛋白质", "商业软件"]
        },
        {
            title: "XCrySDen",
            description: "晶体和分子结构可视化工具",
            url: "http://www.xcrysden.org/",
            category: "crystal-structure",
            tags: ["开源", "Linux", "免费"]
        },
        // 科研绘图
        {
            title: "Origin",
            description: "科学数据分析和绘图软件",
            url: "https://www.originlab.com/",
            category: "scientific-plotting",
            tags: ["数据分析", "科研绘图", "商业软件"]
        },
        {
            title: "MATLAB",
            description: "数值计算和数据可视化平台",
            url: "https://www.mathworks.com/products/matlab.html",
            category: "scientific-plotting",
            tags: ["数值计算", "可视化", "编程"]
        },
        {
            title: "Matplotlib (Python)",
            description: "Python二维绘图库",
            url: "https://matplotlib.org/",
            category: "scientific-plotting",
            tags: ["Python", "开源", "免费"]
        },
        {
            title: "Grace/GracePlot",
            description: "Unix系统下的2D绘图工具",
            url: "http://plasma-gate.weizmann.ac.il/Grace/",
            category: "scientific-plotting",
            tags: ["开源", "Unix/Linux", "2D绘图"]
        },
        // 专业工具
        {
            title: "ImageJ",
            description: "图像处理和分析软件",
            url: "https://imagej.nih.gov/ij/",
            category: "image-processing",
            tags: ["图像处理", "免费", "开源"]
        },
        {
            title: "ChemDraw",
            description: "化学结构绘制软件",
            url: "https://www.perkinelmer.com/category/chemdraw",
            category: "chemical-drawing",
            tags: ["化学结构", "商业软件", "标准工具"]
        },
        {
            title: "Avogadro",
            description: "开源分子编辑器和可视化工具",
            url: "https://avogadro.cc/",
            category: "molecular-editor",
            tags: ["开源", "分子编辑", "免费"]
        }
    ],
    // 新增文档工具分类
    documentTools: [
        {
            title: "Overleaf",
            description: "在线LaTeX编辑器，支持协作编辑和版本控制",
            url: "https://cn.overleaf.com/project",
            category: "latex",
            tags: ["LaTeX", "在线编辑", "协作"]
        },
        {
            title: "Mermaid Chart",
            description: "在线流程图和图表制作工具",
            url: "https://www.mermaidchart.com/",
            category: "diagram",
            tags: ["流程图", "图表制作", "在线工具"]
        },
        {
            title: "稿定PS",
            description: "在线PS软件网页版，免费图片处理工具",
            url: "https://ps.gaoding.com/#/",
            category: "image-editing",
            tags: ["图片处理", "在线PS", "免费"]
        }
    ],
    // 新增学术导航分类
    academicNavigation: [
        {
            title: "Google Scholar",
            description: "Google学术搜索，免费访问学术文献",
            url: "https://scholar.google.co.jp/",
            category: "search",
            tags: ["学术搜索", "免费", "文献检索"]
        },
        {
            title: "Google NotebookLM",
            description: "AI研究工具与思考伙伴，文档分析助手",
            url: "https://notebooklm.google/",
            category: "ai-research",
            tags: ["AI工具", "文档分析", "研究助手"]
        },
        {
            title: "FutureHouse",
            description: "科学研究AI平台，专注科学发现",
            url: "https://www.futurehouse.org/",
            category: "research-platform",
            tags: ["科学研究", "AI平台", "科学发现"]
        },
        {
            title: "MCP Servers",
            description: "模型上下文协议服务器集合，AI工具扩展",
            url: "https://mcp.so/servers?tag=featured",
            category: "ai-tools",
            tags: ["MCP", "AI工具", "扩展平台"]
        }
    ],
    // 新增编程开发分类
    developmentTools: [
        {
            title: "GitHub",
            description: "全球最大的代码托管平台和开源社区",
            url: "https://github.com/",
            category: "code-hosting",
            tags: ["代码托管", "开源", "版本控制"]
        },
        {
            title: "Cursor",
            description: "AI代码编辑器，智能编程助手",
            url: "https://cursor.com/",
            category: "ai-editor",
            tags: ["AI编辑器", "智能编程", "代码助手"]
        },
        {
            title: "uv - Python包管理",
            description: "极快的Python包管理器和项目管理工具",
            url: "https://docs.astral.sh/uv/",
            category: "package-manager",
            tags: ["Python", "包管理", "项目管理"]
        }
    ],
    aiPlatforms: [
        // 通用AI平台
        {
            title: "Claude",
            description: "Anthropic开发的高级AI助手，擅长分析和推理",
            url: "https://claude.ai/",
            category: "general-ai",
            sourceType: "official",
            tags: ["通用AI", "分析推理", "Anthropic"]
        },
        {
            title: "ChatGPT",
            description: "OpenAI开发的对话AI系统，应用广泛",
            url: "https://chatgpt.com/",
            category: "general-ai",
            sourceType: "official",
            tags: ["通用AI", "对话系统", "OpenAI"]
        },
        {
            title: "Google Gemini",
            description: "Google最新多模态AI模型和平台",
            url: "https://gemini.google.com/app",
            category: "general-ai",
            sourceType: "official",
            tags: ["多模态AI", "Google", "通用AI"]
        },
        {
            title: "Google AI Studio",
            description: "Google AI开发平台，模型训练和部署",
            url: "https://aistudio.google.com/",
            category: "development",
            sourceType: "official",
            tags: ["AI开发", "模型训练", "Google"]
        },
        {
            title: "Amazon Nova",
            description: "亚马逊最新AI模型系列，多模态能力",
            url: "https://nova.amazon.com/",
            category: "general-ai",
            sourceType: "official",
            tags: ["多模态AI", "Amazon", "企业AI"]
        },
        // 专业AI工具
        {
            title: "Sider",
            description: "AI侧边栏工具，集成多种AI模型",
            url: "https://sider.ai/zh-CN/chat",
            category: "ai-assistant",
            sourceType: "official",
            tags: ["AI助手", "侧边栏", "多模型集成"]
        },
        {
            title: "Monica",
            description: "Chrome AI助手扩展，支持多种AI功能",
            url: "https://monica.im/home",
            category: "browser-extension",
            sourceType: "official",
            tags: ["浏览器扩展", "AI助手", "Chrome"]
        },
        {
            title: "Poe",
            description: "Quora开发的AI聊天平台，集成多个模型",
            url: "https://poe.com/",
            category: "ai-platform",
            sourceType: "official",
            tags: ["AI聊天", "多模型", "Quora"]
        },
        {
            title: "OpenRouter",
            description: "AI模型API聚合平台，统一访问多种模型",
            url: "https://openrouter.ai/",
            category: "api-platform",
            sourceType: "official",
            tags: ["API聚合", "多模型", "开发者工具"]
        },
        // 材料AI平台官网
        {
            title: "Materials Project",
            description: "基于高通量DFT计算的材料数据库，含AI预测工具",
            url: "https://materialsproject.org/",
            category: "platform",
            sourceType: "official",
            tags: ["材料数据库", "DFT", "免费"]
        },
        {
            title: "NOMAD AI Toolkit",
            description: "NOMAD实验室的AI工具集，用于材料发现",
            url: "https://nomad-lab.eu/aitoolkit/",
            category: "platform",
            sourceType: "official",
            tags: ["AI工具", "材料发现", "欧洲项目"]
        },
        {
            title: "AFLOW Machine Learning",
            description: "AFLOW平台的机器学习材料性质预测工具",
            url: "https://www.aflowlib.org/CrystalDatabase/machine_learning.html",
            category: "platform",
            sourceType: "official",
            tags: ["机器学习", "性质预测", "高通量"]
        },
        {
            title: "Materials Cloud Archive",
            description: "计算材料科学数据和AI模型存储平台",
            url: "https://archive.materialscloud.org/",
            category: "platform",
            sourceType: "official",
            tags: ["数据存储", "AI模型", "开放科学"]
        },
        {
            title: "Citrine Informatics",
            description: "商业材料信息学和AI平台",
            url: "https://citrine.io/",
            category: "platform",
            sourceType: "official",
            tags: ["商业平台", "材料信息学", "AI预测"]
        },
        // AI模型和框架
        {
            title: "MEGNet",
            description: "材料图神经网络，用于材料性质预测",
            url: "https://github.com/materialsvirtuallab/megnet",
            category: "model",
            sourceType: "official",
            tags: ["图神经网络", "性质预测", "开源"]
        },
        {
            title: "ALIGNN",
            description: "NIST开发的原子线图神经网络",
            url: "https://github.com/usnistgov/alignn",
            category: "model",
            sourceType: "official",
            tags: ["图神经网络", "NIST", "材料性质"]
        },
        {
            title: "CGCNN",
            description: "晶体图卷积神经网络",
            url: "https://github.com/txie-93/cgcnn",
            category: "model",
            sourceType: "official",
            tags: ["卷积神经网络", "晶体结构", "开源"]
        },
        {
            title: "DeepMind Materials",
            description: "DeepMind的材料科学AI研究",
            url: "https://deepmind.com/research/highlighted-research/materials-science",
            category: "research",
            sourceType: "official",
            tags: ["DeepMind", "AI研究", "材料科学"]
        },
        {
            title: "Microsoft AI for Materials",
            description: "微软材料科学AI研究项目",
            url: "https://www.microsoft.com/en-us/research/project/materials-science/",
            category: "research",
            sourceType: "official",
            tags: ["Microsoft", "AI研究", "材料科学"]
        },
        // 中国AI平台
        {
            title: "百度飞桨材料科学",
            description: "百度飞桨深度学习框架在材料科学的应用",
            url: "https://www.paddlepaddle.org.cn/",
            category: "platform",
            sourceType: "official",
            tags: ["国产框架", "深度学习", "百度"]
        },
        {
            title: "阿里达摩院材料AI",
            description: "阿里巴巴达摩院材料科学AI研究",
            url: "https://damo.alibaba.com/",
            category: "research",
            sourceType: "official",
            tags: ["阿里巴巴", "达摩院", "AI研究"]
        },
        // 镜像站和国内资源
        {
            title: "GitHub镜像 - FastGit",
            description: "GitHub国内镜像站，可访问开源AI项目",
            url: "https://fastgit.org/",
            category: "mirror",
            sourceType: "mirror",
            tags: ["GitHub镜像", "国内访问", "开源项目"]
        },
        {
            title: "Gitee AI项目",
            description: "Gitee平台上的材料科学AI项目集合",
            url: "https://gitee.com/explore/ai",
            category: "platform",
            sourceType: "mirror",
            tags: ["国产平台", "开源项目", "AI"]
        },
        {
            title: "清华大学 THUNLP",
            description: "清华大学自然语言处理与材料信息学交叉研究",
            url: "https://github.com/thunlp",
            category: "research",
            sourceType: "official",
            tags: ["清华大学", "研究机构", "信息学"]
        },
        {
            title: "中科院材料AI Lab",
            description: "中科院材料科学AI实验室相关项目",
            url: "http://www.cas.cn/",
            category: "research",
            sourceType: "official",
            tags: ["中科院", "研究机构", "国内"]
        },
        {
            title: "OpenI启智平台",
            description: "中国人工智能开源平台，包含材料科学项目",
            url: "https://openi.org.cn/",
            category: "platform",
            sourceType: "mirror",
            tags: ["国产平台", "AI开源", "启智"]
        },
        {
            title: "ModelScope魔搭",
            description: "阿里云模型社区，包含材料科学AI模型",
            url: "https://modelscope.cn/",
            category: "platform",
            sourceType: "mirror",
            tags: ["阿里云", "模型社区", "国产"]
        },
        {
            title: "Jupyter镜像 - TUNA",
            description: "清华TUNA提供的Jupyter相关镜像服务",
            url: "https://mirrors.tuna.tsinghua.edu.cn/",
            category: "mirror",
            sourceType: "mirror",
            tags: ["清华镜像", "Jupyter", "开发环境"]
        },
        {
            title: "PyPI镜像 - 豆瓣",
            description: "豆瓣提供的Python包镜像，加速AI库安装",
            url: "https://pypi.douban.com/simple/",
            category: "mirror",
            sourceType: "mirror",
            tags: ["Python镜像", "包管理", "豆瓣"]
        }
    ]
};

// 搜索功能
function searchResources(query) {
    const results = [];
    const queryLower = query.toLowerCase();
    
    for (const category in resources) {
        resources[category].forEach(resource => {
            const searchText = `${resource.title} ${resource.description} ${resource.tags.join(' ')}`.toLowerCase();
            if (searchText.includes(queryLower)) {
                results.push({...resource, category: category});
            }
        });
    }
    return results;
}

// 过滤功能
function filterAIPlatforms(filterType) {
    if (filterType === 'all') {
        return resources.aiPlatforms;
    }
    return resources.aiPlatforms.filter(platform => platform.sourceType === filterType);
}

// 加载资源卡片
function loadResourceCards() {
    // 映射资源对象的键名到 HTML 中的 section id（驼峰 -> kebab / 确保兼容）
    const keyToId = {
        'documentTools': 'document-tools',
        'academicNavigation': 'academic-navigation',
        'developmentTools': 'development-tools',
        'aiPlatforms': 'ai-platforms'
    };

    for (const category in resources) {
        // 优先使用映射后的 id，如果不存在则尝试使用原始键名小写或原样查找
        const mappedId = keyToId[category] || category;
        const section = document.getElementById(mappedId) || document.getElementById(category) || document.getElementById(category.toLowerCase());
        if (!section) continue;
        const grid = section.querySelector('.resource-grid');
        if (!grid) continue;
        grid.innerHTML = '';
        
        resources[category].forEach(resource => {
            const card = document.createElement('div');
            card.className = 'resource-card';
            card.setAttribute('data-tags', resource.tags.join(' '));
            
            // 添加资源类型标签
            let typeBadge = '';
            if (resource.sourceType) {
                const badgeClass = resource.sourceType === 'official' ? 'badge-official' : 'badge-mirror';
                const badgeText = resource.sourceType === 'official' ? '官网' : '镜像站';
                typeBadge = `<span class="resource-badge ${badgeClass}">${badgeText}</span>`;
            }
            
            // 添加分类标签
            let categoryBadge = '';
            if (resource.category) {
                categoryBadge = `<span class="category-badge">${getCategoryName(resource.category)}</span>`;
            }
            
            // 添加标签
            let tagsHtml = '';
            if (resource.tags && resource.tags.length > 0) {
                tagsHtml = `<div class="tags">${resource.tags.slice(0, 3).map(tag => 
                    `<span class="tag">${tag}</span>`).join('')}</div>`;
            }
            
            card.innerHTML = `
                <div class="card-content">
                    <div class="card-header">
                        <h3>${resource.title}</h3>
                        <div class="badges">
                            ${typeBadge}
                            ${categoryBadge}
                        </div>
                    </div>
                    <p class="description">${resource.description}</p>
                    ${tagsHtml}
                    <div class="card-actions">
                        <a href="${resource.url}" target="_blank" class="visit-btn">访问资源</a>
                        <button class="favorite-btn" onclick="toggleFavorite('${resource.title}')">
                            <span class="heart">♡</span>
                        </button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }
}

// 获取分类中文名称
function getCategoryName(category) {
    const categoryNames = {
        'journal': '期刊',
        'database': '数据库',
        'preprint': '预印本',
        'ab-initio': '第一性原理',
        'molecular-dynamics': '分子动力学',
        'python-library': 'Python库',
        'api': 'API',
        'database-platform': '数据平台',
        'cloud-platform': '云平台',
        'quantum-chemistry': '量子化学',
        'crystal-structure': '晶体结构',
        'atomic-visualization': '原子可视化',
        'molecular-visualization': '分子可视化',
        'scientific-plotting': '科研绘图',
        'image-processing': '图像处理',
        'chemical-drawing': '化学绘图',
        'molecular-editor': '分子编辑',
        'platform': '平台',
        'model': '模型',
        'research': '研究',
        'mirror': '镜像站'
    };
    return categoryNames[category] || category;
}

// 收藏功能
function toggleFavorite(title) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const index = favorites.indexOf(title);
    
    if (index === -1) {
        favorites.push(title);
    } else {
        favorites.splice(index, 1);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButtons();
}

// 更新收藏按钮状态
function updateFavoriteButtons() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const title = btn.onclick.toString().match(/'([^']+)'/)[1];
        const heart = btn.querySelector('.heart');
        if (favorites.includes(title)) {
            heart.textContent = '♥';
            btn.classList.add('favorited');
        } else {
            heart.textContent = '♡';
            btn.classList.remove('favorited');
        }
    });
}

// 搜索功能实现
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        const results = searchResources(query);
        displaySearchResults(results);
    });
}

// 显示搜索结果
function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="no-results">未找到相关资源</p>';
    } else {
        searchResults.innerHTML = results.map(result => `
            <div class="search-result-item">
                <h4>${result.title}</h4>
                <p>${result.description}</p>
                <span class="result-category">${getCategoryName(result.category)}</span>
                <a href="${result.url}" target="_blank">访问</a>
            </div>
        `).join('');
    }
    
    searchResults.style.display = 'block';
}

// AI平台过滤功能
function setupAIFiltering() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新按钮状态
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 过滤内容
            const filterType = this.getAttribute('data-filter');
            const aiSection = document.getElementById('aiPlatforms');
            const grid = aiSection.querySelector('.resource-grid');
            
            const filteredResources = filterAIPlatforms(filterType);
            
            // 重新渲染AI平台卡片
            grid.innerHTML = '';
            filteredResources.forEach(resource => {
                const card = document.createElement('div');
                card.className = 'resource-card';
                
                const typeBadge = resource.sourceType ? 
                    `<span class="resource-badge ${resource.sourceType === 'official' ? 'badge-official' : 'badge-mirror'}">
                        ${resource.sourceType === 'official' ? '官网' : '镜像站'}
                    </span>` : '';
                
                const categoryBadge = `<span class="category-badge">${getCategoryName(resource.category)}</span>`;
                
                const tagsHtml = resource.tags ? 
                    `<div class="tags">${resource.tags.slice(0, 3).map(tag => 
                        `<span class="tag">${tag}</span>`).join('')}</div>` : '';
                
                card.innerHTML = `
                    <div class="card-content">
                        <div class="card-header">
                            <h3>${resource.title}</h3>
                            <div class="badges">
                                ${typeBadge}
                                ${categoryBadge}
                            </div>
                        </div>
                        <p class="description">${resource.description}</p>
                        ${tagsHtml}
                        <div class="card-actions">
                            <a href="${resource.url}" target="_blank" class="visit-btn">访问资源</a>
                            <button class="favorite-btn" onclick="toggleFavorite('${resource.title}')">
                                <span class="heart">♡</span>
                            </button>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
            
            // 更新收藏按钮状态
            setTimeout(updateFavoriteButtons, 100);
        });
    });
}

// 平滑滚动导航
function setupSmoothScrolling() {
    document.querySelectorAll('.category-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offset = document.querySelector('.category-nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - offset - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 返回顶部功能
function setupBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 深色模式切换
function setupDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;
    
    // 检查本地存储的主题设置
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', currentTheme);
    updateDarkModeToggle(currentTheme);
    
    darkModeToggle.addEventListener('click', function() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateDarkModeToggle(newTheme);
    });
}

// 更新深色模式按钮状态
function updateDarkModeToggle(theme) {
    const toggle = document.getElementById('darkModeToggle');
    if (!toggle) return;
    
    toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// 统计功能
function updateResourceCounts() {
    const counts = {};
    for (const category in resources) {
        counts[category] = resources[category].length;
    }
    
    // 更新导航栏中的数字显示
    document.querySelectorAll('.category-nav a').forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        if (counts[targetId]) {
            link.innerHTML += ` <span class="count">(${counts[targetId]})</span>`;
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    loadResourceCards();
    setupSmoothScrolling();
    setupSearch();
    setupAIFiltering();
    setupBackToTop();
    setupDarkMode();
    updateResourceCounts();
    updateFavoriteButtons();
    
    // 添加加载动画
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

// 窗口大小改变时重新调整布局
window.addEventListener('resize', function() {
    // 可以在这里添加响应式布局调整逻辑
});
