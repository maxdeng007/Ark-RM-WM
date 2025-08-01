export const mockData = {
  revenue: {
    title: "新增创收",
    currentValue: "¥2.8M",
    growthRate: 12.5,
    isPositive: true,
    targetProgress: 82,
    targetValue: "¥22M",
    evaluation: "全年目标已达成82% (¥22M), 进度超越80%RM，遥遥领先！",
    chartData: [2.1, 2.3, 2.0, 2.5, 2.8, 2.6, 2.9, 2.8],
    ranking: {
      position: 1,
      change: 0,
      trophy: "gold"
    }
  },
  investment: {
    title: "新增海投",
    currentValue: "$1.2M",
    growthRate: -5.2,
    isPositive: false,
    targetProgress: 12,
    targetValue: "$22M",
    evaluation: "下半年目标达成12% ($22M), 当前进度落后90%RM，需要努力！",
    chartData: [0.8, 1.0, 0.9, 1.1, 1.3, 1.1, 1.0, 1.2],
    ranking: {
      position: 2,
      change: -1,
      trophy: "silver",
      totalValue: "$8.5M"
    }
  },
  customers: {
    title: "新增黄金新客",
    currentValue: "3",
    growthRate: 50,
    isPositive: true,
    targetProgress: 75,
    targetValue: "15位",
    evaluation: "下半年目标已达成75% (15位), 进度超越70%RM，表现优秀！",
    upcomingCustomers: [
      { name: "张先生", gap: "$20,000" },
      { name: "李女士", gap: "$35,000" },
      { name: "王先生", gap: "$45,000" }
    ],
    ranking: {
      position: 3,
      change: 1,
      trophy: "bronze",
      totalValue: "12位"
    }
  },
  leaderboards: {
    revenue: {
      title: "年度创收榜",
      icon: "trophy",
      entries: [
        {
          name: "张经理",
          avatar: "张",
          value: "¥28.5M",
          change: 2.1,
          isPositive: true,
          rank: 1,
          description: "年度冠军"
        },
        {
          name: "李经理",
          avatar: "李",
          value: "¥25.2M",
          change: -1.5,
          isPositive: false,
          rank: 2,
          description: "亚军"
        },
        {
          name: "王经理",
          avatar: "王",
          value: "¥22.8M",
          change: 0.8,
          isPositive: true,
          rank: 3,
          description: "季军"
        },
        {
          name: "陈经理",
          avatar: "陈",
          value: "¥20.1M",
          change: 1.2,
          isPositive: true,
          rank: 4,
          description: "第四名"
        },
        {
          name: "刘经理",
          avatar: "刘",
          value: "¥18.9M",
          change: -0.5,
          isPositive: false,
          rank: 5,
          description: "第五名"
        },
        {
          name: "赵经理",
          avatar: "赵",
          value: "¥17.3M",
          change: 0.9,
          isPositive: true,
          rank: 6,
          description: "第六名"
        },
        {
          name: "孙经理",
          avatar: "孙",
          value: "¥16.7M",
          change: -1.1,
          isPositive: false,
          rank: 7,
          description: "第七名"
        },
        {
          name: "周经理",
          avatar: "周",
          value: "¥15.4M",
          change: 0.3,
          isPositive: true,
          rank: 8,
          description: "第八名"
        },
        {
          name: "吴经理",
          avatar: "吴",
          value: "¥14.2M",
          change: -0.8,
          isPositive: false,
          rank: 9,
          description: "第九名"
        },
        {
          name: "郑经理",
          avatar: "郑",
          value: "¥13.8M",
          change: 0.6,
          isPositive: true,
          rank: 10,
          description: "第十名"
        }
      ]
    },
    investment: {
      title: "下半年海投榜",
      icon: "globe",
      entries: [
        {
          name: "陈经理",
          avatar: "陈",
          value: "$12.5M",
          change: 3.2,
          isPositive: true,
          rank: 1,
          description: "海投冠军"
        },
        {
          name: "李经理",
          avatar: "李",
          value: "$8.5M",
          change: -1.2,
          isPositive: false,
          rank: 2,
          description: "海投亚军"
        },
        {
          name: "赵经理",
          avatar: "赵",
          value: "$7.8M",
          change: 0.5,
          isPositive: true,
          rank: 3,
          description: "海投季军"
        },
        {
          name: "刘经理",
          avatar: "刘",
          value: "$6.9M",
          change: 1.8,
          isPositive: true,
          rank: 4,
          description: "第四名"
        },
        {
          name: "孙经理",
          avatar: "孙",
          value: "$6.2M",
          change: -0.7,
          isPositive: false,
          rank: 5,
          description: "第五名"
        },
        {
          name: "周经理",
          avatar: "周",
          value: "$5.8M",
          change: 0.9,
          isPositive: true,
          rank: 6,
          description: "第六名"
        },
        {
          name: "吴经理",
          avatar: "吴",
          value: "$5.3M",
          change: -1.4,
          isPositive: false,
          rank: 7,
          description: "第七名"
        },
        {
          name: "郑经理",
          avatar: "郑",
          value: "$4.9M",
          change: 0.6,
          isPositive: true,
          rank: 8,
          description: "第八名"
        },
        {
          name: "王经理",
          avatar: "王",
          value: "$4.5M",
          change: -0.3,
          isPositive: false,
          rank: 9,
          description: "第九名"
        },
        {
          name: "张经理",
          avatar: "张",
          value: "$4.1M",
          change: 0.8,
          isPositive: true,
          rank: 10,
          description: "第十名"
        }
      ]
    },
    customers: {
      title: "下半年黄金新客榜",
      icon: "crown",
      entries: [
        {
          name: "刘经理",
          avatar: "刘",
          value: "18位",
          change: 2,
          isPositive: true,
          rank: 1,
          description: "客户冠军"
        },
        {
          name: "孙经理",
          avatar: "孙",
          value: "15位",
          change: -1,
          isPositive: false,
          rank: 2,
          description: "客户亚军"
        },
        {
          name: "王经理",
          avatar: "王",
          value: "12位",
          change: 1,
          isPositive: true,
          rank: 3,
          description: "客户季军"
        },
        {
          name: "陈经理",
          avatar: "陈",
          value: "11位",
          change: 0.5,
          isPositive: true,
          rank: 4,
          description: "第四名"
        },
        {
          name: "李经理",
          avatar: "李",
          value: "10位",
          change: -0.8,
          isPositive: false,
          rank: 5,
          description: "第五名"
        },
        {
          name: "赵经理",
          avatar: "赵",
          value: "9位",
          change: 0.3,
          isPositive: true,
          rank: 6,
          description: "第六名"
        },
        {
          name: "周经理",
          avatar: "周",
          value: "8位",
          change: -0.5,
          isPositive: false,
          rank: 7,
          description: "第七名"
        },
        {
          name: "吴经理",
          avatar: "吴",
          value: "7位",
          change: 0.7,
          isPositive: true,
          rank: 8,
          description: "第八名"
        },
        {
          name: "郑经理",
          avatar: "郑",
          value: "6位",
          change: -0.2,
          isPositive: false,
          rank: 9,
          description: "第九名"
        },
        {
          name: "张经理",
          avatar: "张",
          value: "5位",
          change: 0.4,
          isPositive: true,
          rank: 10,
          description: "第十名"
        }
      ]
    }
  }
} 