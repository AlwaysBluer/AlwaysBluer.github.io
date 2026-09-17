export const site = {
  name: 'AlwaysBluer',
  mark: 'A/B',
  title: 'AlwaysBluer — Agent、评测与数据系统笔记',
  description: '围绕 Agent Quality、评测闭环、Agent 工程和检索数据系统的技术笔记。',
  githubProfile: 'https://github.com/AlwaysBluer',
  repository: 'https://github.com/AlwaysBluer/AlwaysBluer.github.io',
  thesis: '把 Agent 的坏结果，变成可解释、可修改、可验证的系统改进。',
  introduction:
    '我重点关注 Agent Quality、评测闭环和 Agent 工程，也研究检索与数据系统如何成为可靠底座。这里记录判断、证据、实现与复盘。',
} as const;

export const focusAreas = [
  {
    code: 'AQ',
    state: '当前主线',
    title: 'Agent Quality 与评测闭环',
    description:
      '从 badcase、trace 和用户反馈出发，定位问题发生在哪一层，再把候选修复放回可重复的评测环境中验证。',
    questions: ['根因分层', '可复现回放', '独立验收', '成本与回归'],
  },
  {
    code: 'AX',
    state: '长期方法',
    title: 'Agent 工程与实验方法',
    description:
      '把 prompt、skill、context、tool 和 workflow 当成一个完整系统，研究怎样组织它们，才能稳定地产生可验证的改进。',
    questions: ['Agent Harness', '候选实验', '上下文组织', '工具边界'],
  },
  {
    code: 'DS',
    state: '基础设施',
    title: '检索与数据系统',
    description:
      '关注 Search、Vector、Graph 与分析型数据路径，尤其是索引、同步、查询形态和真实运行状态之间的差异。',
    questions: ['检索系统', '向量与图', '索引一致性', '可观测性'],
  },
] as const;

export const validationLoop = [
  {
    title: '改得动',
    description: '知道问题落在哪个组件，也能形成边界清楚的候选变更。',
  },
  {
    title: '跑得起来',
    description: '恢复必要的依赖、数据和状态，让候选在真实约束下执行。',
  },
  {
    title: '评得出来',
    description: '用独立指标、关键切片和回归检查决定接受还是拒绝。',
  },
] as const;

export const writingThreads = [
  '从 badcase 到修复：一次完整 Agent Quality 调试应该留下什么证据',
  '为什么 Dataset rerun 不等于生产回放',
  'Prompt 之外：skill、context、tool 与 workflow 的根因分层',
  '索引状态不是健康证明：如何检查检索链路的真实可用性',
] as const;
