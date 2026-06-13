export const SITE = {
    name: 'Md. Masum Kamal',
    shortName: 'Masum',
    title: 'Graphic Designer',
    email: 'design@masumkamal.com',
    location: 'Bangladesh',
};

export const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
] as const;

export const STATS = [
    { value: '2+', label: 'Years Experience' },
    { value: '50+', label: 'Designs Created' },
    { value: '100%', label: 'Creative Problem Solver' },
] as const;

export const SKILLS = [
    { name: 'Adobe Photoshop', category: 'Software', level: 95 },
    { name: 'Adobe Illustrator', category: 'Software', level: 92 },
    { name: 'Canva', category: 'Software', level: 90 },
    { name: 'Branding', category: 'Discipline', level: 88 },
    { name: 'Social Media Design', category: 'Discipline', level: 94 },
    { name: 'Print Design', category: 'Discipline', level: 85 },
    { name: 'Marketing Creatives', category: 'Discipline', level: 90 },
    { name: 'Typography', category: 'Craft', level: 87 },
    { name: 'Color Theory', category: 'Craft', level: 89 },
] as const;

export const EXPERIENCES = [
    {
        role: 'Graphic Designer',
        company: 'WebBriks',
        period: 'Nov 2023 — Jul 2025',
        location: 'Remote',
        bullets: [
            'Crafted brand identities, social media creatives, and marketing assets for international clients.',
            'Owned visual direction for campaign launches — from concept boards to final deliverables.',
            'Collaborated with marketing and product teams to translate strategy into pixel-perfect design.',
        ],
    },
] as const;

export const PROJECTS = [
    {
        title: 'Luma Café',
        category: 'Branding',
        year: '2025',
        description: 'Warm, modern identity for a third-wave coffee house.',
        palette: ['#0F172A', '#FF6B35', '#FAF8F5'],
        accent: 'from-orange-400 to-rose-500',
    },
    {
        title: 'Northwind Apparel',
        category: 'Visual Identity',
        year: '2024',
        description:
            'Streetwear identity system with bold typography and editorial layouts.',
        palette: ['#111827', '#2563EB', '#F59E0B'],
        accent: 'from-blue-500 to-indigo-600',
    },
    {
        title: 'Sunrise Bakery',
        category: 'Print Design',
        year: '2024',
        description:
            'Packaging suite and menu redesign for a local bakery chain.',
        palette: ['#7C2D12', '#FB923C', '#FEF3C7'],
        accent: 'from-amber-400 to-orange-600',
    },
    {
        title: 'Pulse Fitness',
        category: 'Social Media Design',
        year: '2025',
        description: 'High-energy campaign system across 30+ social posts.',
        palette: ['#0F172A', '#22D3EE', '#A3E635'],
        accent: 'from-cyan-500 to-lime-500',
    },
    {
        title: 'Aster Skincare',
        category: 'Logo Design',
        year: '2024',
        description:
            'Botanical wordmark and seal for a minimalist skincare brand.',
        palette: ['#1F2937', '#A7F3D0', '#FCE7F3'],
        accent: 'from-emerald-400 to-pink-400',
    },
    {
        title: 'Helix Studio',
        category: 'Marketing Creatives',
        year: '2025',
        description: 'Launch campaign visuals for a SaaS product release.',
        palette: ['#0F172A', '#2563EB', '#FF6B35'],
        accent: 'from-blue-600 to-orange-500',
    },
] as const;

export const CATEGORIES = [
    'All',
    'Branding',
    'Visual Identity',
    'Logo Design',
    'Social Media Design',
    'Print Design',
    'Marketing Creatives',
] as const;

export const PROCESS = [
    {
        step: '01',
        title: 'Research',
        description:
            'Discover the brand, audience, and competitive landscape before a single pixel.',
    },
    {
        step: '02',
        title: 'Concept',
        description:
            'Mood boards, sketches, and visual directions that turn strategy into ideas.',
    },
    {
        step: '03',
        title: 'Design',
        description:
            'Refine typography, color, and layout into a polished, consistent system.',
    },
    {
        step: '04',
        title: 'Delivery',
        description:
            'Production-ready files, brand guidelines, and assets organized for handoff.',
    },
] as const;

type EducationItem = {
    degree: string;
    school: string;
    period: string;
    status: string;
    highlight?: boolean;
};

export const EDUCATION: readonly EducationItem[] = [
    {
        degree: 'BBA in Management',
        school: 'Gaibandha Government College',
        period: 'Current',
        status: 'In Progress',
        highlight: true,
    },
    {
        degree: 'HSC — Business Management & Technology',
        school: 'Gaibandha Government College',
        period: 'Completed',
        status: 'GPA 5.00',
    },
    {
        degree: 'SSC — Humanities',
        school: 'Secondary School Certificate',
        period: 'Completed',
        status: 'GPA 3.78',
    },
];
