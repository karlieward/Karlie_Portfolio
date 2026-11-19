import CaseStudySlides from './CaseStudySlides'

// Exported from Figma: Desktop V2 (node 139:46), one image per 1920×1080 section
const SLIDES = [
  'Wards Dairy: Creating a custom inventory system',
  'The assignment: Started as a class project',
  'The background: Inventory was my job',
  'The stakeholders: Who this affects',
  'The users: Designed with two roles in mind',
  'The problem: One system for one vendor',
  'The goal: One system for ALL vendors',
  'The challenges: Designing as both client and teammate',
  'The product: Built for tablet and desktop',
  'The product on tablet',
  'The product on desktop',
  'The tech stack: How it’s built',
  'The future: Reports, predictions, and integration',
  'The impact: Less managing. More savings.',
  'The lesson: I’d sketch before I code',
]

const LINKS = {
  12: [{ href: 'https://github.com/karlieward/DairyFarm_Inventory', label: 'View the code on GitHub', box: [4, 88, 50, 5] }],
}

export default function DairyCaseStudy({ onBack }) {
  return <CaseStudySlides folder="dairy" slides={SLIDES} links={LINKS} onBack={onBack} />
}
