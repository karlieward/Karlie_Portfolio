import CaseStudySlides from './CaseStudySlides'

// Exported from Figma: the latest Neue App slides (bottom row, 206:3712 → 213:15)
const SLIDES = [
  'Neue App: title page and brief',
  'Journey map',
  'User research and persona',
  'Competitive analysis',
  'Positioning matrix',
  'Competitive user task flows',
  'User task flow',
  'Paper prototype and feedback',
  'Digital wireframe and feedback',
  'Possible style guides',
  'Icons and branding',
  'High-fidelity prototype: first iteration feedback',
  'Final style guide',
  'Final high-fidelity prototype',
  'Link to the prototype',
  'Figma to code',
  'Thank you',
]

const PROTOTYPE = 'https://www.figma.com/proto/buCouJuFG5o9Uyx4wqhT8h/NEUE-APP?team_id=1415715963632767103&node-id=162-2395&page-id=125%3A835&starting-point-node-id=162%3A2507&t=SvNLmQ6WP31K6jg0-1'

const LINKS = {
  15: [{ href: PROTOTYPE, label: 'Open the Neue prototype in Figma', box: [33.5, 0, 39, 94] }],
  16: [{ href: 'https://github.com/karlieward/neue-app.git', label: 'View the Neue code on GitHub', box: [54, 69, 9.5, 6] }],
}

export default function NeueCaseStudy({ onBack }) {
  return <CaseStudySlides folder="neue" slides={SLIDES} links={LINKS} onBack={onBack} />
}
