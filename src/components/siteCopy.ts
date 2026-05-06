import type { Language } from "@/components/LanguageProvider";

export const copy = {
  en: {
    hero: {
      badge: "Empowering Students. Inspiring Futures.",
      title1: "Learn Today,",
      title2: "Lead Tomorrow.",
      description:
        "Personalized learning programs designed to help students from elementary to high school achieve academic excellence and build future-ready skills.",
      primary: "Book a Consultation",
      secondary: "Explore Programs",
      trust: [
        {
          title: "Expert Teachers",
          subtitle: "Experienced teaching team",
        },
        {
          title: "Personalized Learning",
          subtitle: "Tailored learning plans",
        },
        {
          title: "Proven Results",
          subtitle: "Visible academic growth",
        },
      ],
    },
    programs: {
      eyebrow: "Our Programs",
      title: "Our Programs",
      cta: "View All Programs",
    },
    why: {
      eyebrow: "Why Choose Us",
      title: "Why Choose Us",
      intro:
        "A more focused, more supportive learning experience designed to help every student build confidence and achieve measurable progress.",
      items: [
        {
          title: "Experienced Teachers",
          subtitle: "经验丰富的教师",
          description: "Our teachers are passionate educators with proven teaching experience.",
          cta: "Learn more",
        },
        {
          title: "Personalized Approach",
          subtitle: "个性化方案",
          description: "We tailor learning plans to each student's strengths and goals.",
          cta: "Learn more",
        },
        {
          title: "Proven Results",
          subtitle: "成果可靠",
          description: "Students achieve higher grades and get into top universities.",
          cta: "Learn more",
        },
        {
          title: "Supportive Environment",
          subtitle: "支持性环境",
          description: "Small class sizes and caring support help students thrive.",
          cta: "Learn more",
        },
        {
          title: "Comprehensive Programs",
          subtitle: "全面课程体系",
          description: "A wide range of programs from academics to test prep.",
          cta: "Learn more",
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What Our Students & Parents Say",
    },
    cta: {
      title: "Ready to get started?",
      description:
        "Book a free consultation with our team and find the right program for your child.",
      button: "Book a Consultation",
    },
    booking: {
      title: "Book a Consultation",
      formTitle: "Consultation Form",
      formDescription:
        "Fill out the form below and our team will contact you to confirm the best consultation time and next steps.",
      readyTitle: "Ready to get started?",
      readyDescription:
        "Submit the form and we’ll reach out with the best consultation time.",
      submit: "Submit Request",
      fields: {
        parentName: "Parent Name",
        studentName: "Student Name",
        email: "Email Address",
        phone: "Phone Number",
        gradeLevel: "Grade Level",
        preferredDate: "Preferred Date",
        moreInfo: "Tell us more",
      },
      placeholders: {
        parentName: "Enter parent name",
        studentName: "Enter student name",
        email: "you@example.com",
        phone: "Enter phone number",
        gradeLevel: "e.g. Grade 8",
        preferredDate: "Choose a date",
        moreInfo: "Share your child's goals, interests, or any questions you have",
      },
    },

    stats: [
      { value: "10+", title: "Years of Excellence", subtitle: "多年教育经验" },
      { value: "2000+", title: "Students Supported", subtitle: "学生成功案例" },
      { value: "95%", title: "Satisfaction Rate", subtitle: "家长满意度" },
      { value: "Top Universities", title: "Our Students Get In", subtitle: "获得顶尖大学录取" },
    ],
    footer: {
      intro:
        "Personalized education programs that help students grow with confidence, structure, and long-term academic success.",
      nav: "Navigation",
      programs: "Programs",
      contact: "Contact Us",
      subscribe: "Subscribe to receive program updates and education tips.",
      email: "Email address",
      subscribeButton: "Subscribe",
      copyright: "© 2026 BrightPath Education. All rights reserved.",
    },
  },
  zh: {
    hero: {
      badge: "成就学生，启发未来。",
      title1: "今日学习，",
      title2: "明日领航。",
      description:
        "我们为小学至高中的学生量身打造个性化学习方案，帮助他们实现学业卓越并培养面向未来的能力。",
      primary: "预约咨询",
      secondary: "查看课程",
      trust: [
        {
          title: "资深教师",
          subtitle: "经验丰富的教学团队",
        },
        {
          title: "个性化学习",
          subtitle: "量身定制学习方案",
        },
        {
          title: "成果可见",
          subtitle: "清晰的学业提升",
        },
      ],
    },
    programs: {
      eyebrow: "课程项目",
      title: "我们的课程",
      cta: "查看全部课程",
    },
    why: {
      eyebrow: "选择我们的理由",
      title: "Why Choose Us",
      intro:
        "我们打造更专注、更有支持性的学习体验，帮助每位学生建立自信并取得可衡量的进步。",
      items: [
        {
          title: "资深教师",
          subtitle: "经验丰富的教学团队",
          description: "我们的教师团队热爱教育，拥有扎实的教学经验。",
          cta: "了解更多",
        },
        {
          title: "个性化教学",
          subtitle: "个性化学习方案",
          description: "我们会根据每位学生的优势与目标定制学习计划。",
          cta: "了解更多",
        },
        {
          title: "成果可靠",
          subtitle: "可验证的学习成果",
          description: "帮助学生提升成绩，并进入理想的高等学府。",
          cta: "了解更多",
        },
        {
          title: "支持性环境",
          subtitle: "温暖且高支持的学习环境",
          description: "小班教学与细致支持，帮助学生更好地成长。",
          cta: "了解更多",
        },
        {
          title: "课程体系完善",
          subtitle: "覆盖广泛的课程体系",
          description: "从学科提升到考试准备，提供全面课程支持。",
          cta: "了解更多",
        },
      ],
    },
    testimonials: {
      eyebrow: "真实评价",
      title: "学生与家长怎么说",
    },
    cta: {
      title: "准备开始了吗？",
      description:
        "预约一次免费的咨询，我们会为您的孩子找到最合适的学习方案。",
      button: "预约咨询",
    },
    booking: {
      title: "预约咨询",
      formTitle: "咨询表单",
      formDescription:
        "填写下方表单后，我们会联系您确认最合适的咨询时间与后续步骤。",
      readyTitle: "准备开始了吗？",
      readyDescription:
        "提交表单后，我们会尽快联系您确认咨询时间。",
      submit: "提交预约",
      fields: {
        parentName: "家长姓名",
        studentName: "学生姓名",
        email: "邮箱地址",
        phone: "联系电话",
        gradeLevel: "年级",
        preferredDate: "预约日期",
        moreInfo: "补充说明",
      },
      placeholders: {
        parentName: "请输入家长姓名",
        studentName: "请输入学生姓名",
        email: "you@example.com",
        phone: "请输入联系电话",
        gradeLevel: "例如：八年级",
        preferredDate: "请选择日期",
        moreInfo: "请分享孩子的目标、兴趣或任何问题",
      },
    },
    stats: [
      { value: "10+", title: "卓越教学年限", subtitle: "多年教育经验" },
      { value: "2000+", title: "支持学生人数", subtitle: "学生成功案例" },
      { value: "95%", title: "满意度", subtitle: "家长满意度" },
      { value: "顶尖大学", title: "学生录取方向", subtitle: "获得顶尖大学录取" },
    ],
    footer: {
      intro:
        "BrightPath Education 致力于以清晰结构、持续支持和长期规划帮助学生建立自信并取得学业成功。",
      nav: "导航",
      programs: "课程",
      contact: "联系我们",
      subscribe: "订阅以获取课程更新与教育建议。",
      email: "邮箱地址",
      subscribeButton: "订阅",
      copyright: "© 2026 BrightPath Education. 版权所有。",
    },
  },
} as const;

export function getCopy(language: Language) {
  return copy[language];
}
