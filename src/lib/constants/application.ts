export const jobTypes = [
  { value: "full-time", label: "正社員" },
  { value: "part-time", label: "パートタイム" },
  { value: "contract", label: "契約社員" },
  { value: "internship", label: "インターンシップ" },
];
// JobPosition型を定義
export interface JobPosition {
    title: string;
  }
export const experienceLevels = [
  { value: "entry", label: "新卒/未経験" },
  { value: "junior", label: "1-3年" },
  { value: "mid", label: "3-5年" },
  { value: "senior", label: "5年以上" },
  { value: "lead", label: "リーダー/マネージャー" },
];

export const educationLevels = [
  { value: "high-school", label: "高校" },
  { value: "associate", label: "短大/専門学校" },
  { value: "bachelor", label: "大学" },
  { value: "master", label: "大学院" },
  { value: "doctor", label: "博士" },
]; 