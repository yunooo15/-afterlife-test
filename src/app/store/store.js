import { create } from 'zustand'



// 建立 store hook
const usePsyStore = create((set) => ({
	// states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 5,
  score: 0,
  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (newState) => set( (state)=>({ score: newState}) )
}));


const useQuestionStore = create((set) => ({
  questions: {
    "1":{
      title: "若您被鯰魚親吻了，你會怎麼做？",
      options: [
        {title: "切除他的嘴唇並蒸煮他", value: 1},
        {title: "不自禁產生反應但忍住", value: 2},
        {title: "我不行了，我要更多", value: 3},
        {title: "把他做成標本收藏", value: 4}
      ]
    },
    "2":{
      title: "如果有一天你多了一隻眼睛，你希望他會是什麼功能？",
      options: [
        {title: "看到物體的背面", value: 2},
        {title: "幫你睡覺", value: 3},
        {title: "為你流淚", value: 1},
        {title: "與超驗性存在溝通", value: 4}
      ]
    },
    "3":{
      title: "如果你是一滴水，你是在哪覺醒的？",
      options: [
        {title: "空氣", value: 2},
        {title: "海溝", value: 3},
        {title: "河流", value: 1},
        {title: "火山口", value: 4}
      ]
    },
    "4":{
      title: "如果鏡子中能看見的不是自己的身體，你看到的是什麼？",
      options: [
        {title: "完全透明", value: 1},
        {title: "珍珠", value: 2},
        {title: "查克拉", value: 3},
        {title: "公主", value: 4}
      ]
    },
    "5":{
      title: "你最可能為了什麼而哭泣？",
      options: [
        {title: "發明核彈", value: 1},
        {title: "失去愛", value: 2},
        {title: "乾瞪眼十分鐘", value: 3},
        {title: "台灣獨立", value: 4}
      ]
    }
  },
}))



export { usePsyStore, useQuestionStore }