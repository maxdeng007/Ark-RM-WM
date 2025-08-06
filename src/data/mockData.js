export const mockData = {
  revenue: {
    title: "上周新增创收",
    currentValue: "¥2.8M",
    targetProgress: 82,
    targetValue: "¥22M",
    currentAchieved: "¥18.04M",
    achievementRatio: "82%",
    progressStatus: "healthy", // "healthy", "warning", "critical"
    chartData: [2.1, 2.3, 2.0, 2.5, 2.8, 2.6, 2.9, 2.8],
    ranking: {
      position: 1,
      trophy: "gold"
    },
    leaderboardTitle: "上周创收榜"
  },
  investment: {
    title: "上周新增海投",
    currentValue: "$1.2M",
    targetProgress: 12,
    targetValue: "$22M",
    currentAchieved: "$2.64M",
    achievementRatio: "12%",
    progressStatus: "warning", // "healthy", "warning", "critical"
    chartData: [0.8, 1.0, 0.9, 1.1, 1.3, 1.1, 1.0, 1.2],
    ranking: {
      position: 2,
      trophy: "silver",
      totalValue: "$8.5M"
    },
    leaderboardTitle: "上周海投榜"
  },
  customers: {
    title: "上周新增黄金新客",
    currentValue: "3",
    targetProgress: 75,
    targetValue: "15位",
    currentAchieved: "11.25位",
    achievementRatio: "75%",
    progressStatus: "healthy", // "healthy", "warning", "critical"
    upcomingCustomers: [
      { name: "张先生", gap: "$20,000" },
      { name: "李女士", gap: "$35,000" },
      { name: "王先生", gap: "$45,000" }
    ],
    ranking: {
      position: 3,
      trophy: "bronze",
      totalValue: "12位"
    },
    leaderboardTitle: "上周黄金新客榜"
  },
  leaderboards: {
    revenue: {
      title: "上周创收榜",
      icon: "trophy",
      entries: [
        {
          name: "我",
          avatar: "我",
          value: "¥28.5M",
          rank: 1,
          description: "上周冠军",
          isMe: true
        },
        {
          name: "李经理",
          avatar: "李",
          value: "¥25.2M",
          rank: 2,
          description: "亚军"
        },
        {
          name: "王经理",
          avatar: "王",
          value: "¥22.8M",
          rank: 3,
          description: "季军"
        },
        {
          name: "陈经理",
          avatar: "陈",
          value: "¥20.1M",
          rank: 4,
          description: "第四名"
        },
        {
          name: "刘经理",
          avatar: "刘",
          value: "¥18.9M",
          rank: 5,
          description: "第五名"
        },
        {
          name: "赵经理",
          avatar: "赵",
          value: "¥17.3M",
          rank: 6,
          description: "第六名"
        },
        {
          name: "孙经理",
          avatar: "孙",
          value: "¥16.7M",
          rank: 7,
          description: "第七名"
        },
        {
          name: "周经理",
          avatar: "周",
          value: "¥15.4M",
          rank: 8,
          description: "第八名"
        },
        {
          name: "吴经理",
          avatar: "吴",
          value: "¥14.2M",
          rank: 9,
          description: "第九名"
        },
        {
          name: "郑经理",
          avatar: "郑",
          value: "¥13.8M",
          rank: 10,
          description: "第十名"
        }
      ]
    },
    investment: {
      title: "上周海投榜",
      icon: "globe",
      entries: [
        {
          name: "陈经理",
          avatar: "陈",
          value: "$12.5M",
          rank: 1,
          description: "海投冠军"
        },
        {
          name: "我",
          avatar: "我",
          value: "$8.5M",
          rank: 2,
          description: "海投亚军",
          isMe: true
        },
        {
          name: "赵经理",
          avatar: "赵",
          value: "$7.8M",
          rank: 3,
          description: "海投季军"
        },
        {
          name: "刘经理",
          avatar: "刘",
          value: "$6.9M",
          rank: 4,
          description: "第四名"
        },
        {
          name: "孙经理",
          avatar: "孙",
          value: "$6.2M",
          rank: 5,
          description: "第五名"
        },
        {
          name: "周经理",
          avatar: "周",
          value: "$5.8M",
          rank: 6,
          description: "第六名"
        },
        {
          name: "吴经理",
          avatar: "吴",
          value: "$5.3M",
          rank: 7,
          description: "第七名"
        },
        {
          name: "郑经理",
          avatar: "郑",
          value: "$4.9M",
          rank: 8,
          description: "第八名"
        },
        {
          name: "王经理",
          avatar: "王",
          value: "$4.5M",
          rank: 9,
          description: "第九名"
        },
        {
          name: "张经理",
          avatar: "张",
          value: "$4.1M",
          rank: 10,
          description: "第十名"
        }
      ]
    },
    customers: {
      title: "上周黄金新客榜",
      icon: "crown",
      entries: [
        {
          name: "刘经理",
          avatar: "刘",
          value: "18位",
          rank: 1,
          description: "客户冠军"
        },
        {
          name: "孙经理",
          avatar: "孙",
          value: "15位",
          rank: 2,
          description: "客户亚军"
        },
        {
          name: "我",
          avatar: "我",
          value: "12位",
          rank: 3,
          description: "客户季军",
          isMe: true
        },
        {
          name: "王经理",
          avatar: "王",
          value: "11位",
          rank: 4,
          description: "第四名"
        },
        {
          name: "陈经理",
          avatar: "陈",
          value: "11位",
          rank: 5,
          description: "第五名"
        },
        {
          name: "李经理",
          avatar: "李",
          value: "10位",
          rank: 6,
          description: "第六名"
        },
        {
          name: "赵经理",
          avatar: "赵",
          value: "9位",
          rank: 7,
          description: "第七名"
        },
        {
          name: "周经理",
          avatar: "周",
          value: "8位",
          rank: 8,
          description: "第八名"
        },
        {
          name: "吴经理",
          avatar: "吴",
          value: "7位",
          rank: 9,
          description: "第九名"
        },
        {
          name: "郑经理",
          avatar: "郑",
          value: "6位",
          rank: 10,
          description: "第十名"
        },
        {
          name: "张经理",
          avatar: "张",
          value: "5位",
          rank: 11,
          description: "第十一名"
        }
      ]
    }
  }
} 