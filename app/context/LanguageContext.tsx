"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'mr' | 'hi'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations with Mantra Builders branding
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    ecoClub: 'Mantra Eco-Club',
    home: 'Home',
    dashboard: 'Dashboard',
    admin: 'Admin',
    reports: 'Reports',

    // Hero Section
    'hero.badge': 'Mantra Builders | Sustainable Living Initiative',
    'hero.title': 'Mantra Eco-Club Activity Tracker',
    'hero.subtitle': 'A comprehensive digital platform for Mantra Builders to monitor, track, and celebrate Eco-Club activities across all residential communities.',
    'hero.btn1': 'Project Dashboard',
    'hero.btn2': 'Admin Monitor',

    // Stats
    'stats.projects': 'Projects Registered',
    'stats.active': 'Active Eco-Clubs',
    'stats.activities': 'Activities This Month',
    'stats.residents': 'Residents Engaged',

    // Proposal Section
    'proposal.badge': 'Mantra Sustainability Framework',
    'proposal.title': 'Digital Tracking Framework for Eco-Clubs',
    'proposal.description': 'A unified digital system to track implementation of Eco-Club activities across all residential communities under Mantra Builders.',
    'proposal.initiative': 'Mantra Builders Initiative',
    'proposal.initiativeText': 'Promoting sustainable living and environmental consciousness among residents across all Mantra communities.',

    // Objectives
    'obj.title': 'Eco-Club Objectives',
    'obj1': 'Develop environmental awareness among residents',
    'obj2': 'Promote sustainable habits and responsible behaviour',
    'obj3': 'Encourage participation in conservation activities',
    'obj4': 'Connect residents with nature and local environment',
    'obj5': 'Support Mantra\'s sustainability goals',

    // Activities
    'activities.title': 'Recommended Activities to Track',
    'activities.subtitle': 'Each residential community is encouraged to conduct at least one activity per month',

    // Tracking System
    'tracking.title': 'Proposed Tracking System',
    'tracking1.title': 'Digital Activity Logging',
    'tracking1.desc': 'Residential societies log each activity with date, description, resident participation count, and photo evidence directly on the platform.',
    'tracking2.title': 'Real-Time Analytics',
    'tracking2.desc': 'Zonal and regional managers can view real-time dashboards showing activity completion rates, participation trends, and community-level comparisons.',
    'tracking3.title': 'Hierarchical Monitoring',
    'tracking3.desc': 'Community Managers, Zonal Heads, and Regional Directors each have tailored dashboards for their jurisdiction level.',
    'tracking4.title': 'Recognition & Ranking',
    'tracking4.desc': 'Automatic scoring and ranking of eco-clubs based on activity frequency, resident participation, and diversity of activities conducted.',

    // Implementation Plan
    'plan.title': 'Implementation Plan',
    'plan.phase1': 'Project Registration & Eco-Club Formation',
    'plan.phase1.items': 'All residential societies register on the platform with unique ID|Appoint Eco-Club coordinator (society management representative)|Register resident volunteers|Complete eco-club formation checklist',
    'plan.phase2': 'Activity Logging & Documentation',
    'plan.phase2.items': 'Monthly activity submission with photos/reports|Resident participation tracking|Activity categorization as per guidelines|Notice board display documentation',
    'plan.phase3': 'Monitoring & Reporting',
    'plan.phase3.items': 'Zonal-level manager dashboards for monitoring|Regional-level aggregated reports|Corporate-level analytics and trends|Periodic performance assessment',
    'plan.phase4': 'Recognition & Scaling',
    'plan.phase4.items': 'Best performing eco-club identification|Awards and recognition at regional/corporate level|Community involvement metrics|Annual impact assessment report',

    // Platform Preview
    'preview.badge': 'Platform Preview',
    'preview.title': 'Built for Every Stakeholder',
    'preview.desc': 'From project coordinators logging activities to corporate leadership analyzing trends, the platform serves every level of the residential community hierarchy.',
    'preview.coordinator': 'Project Coordinators',
    'preview.coordinator.desc': 'Log activities, upload photos, manage resident volunteers, and track monthly compliance.',
    'preview.manager': 'Zonal & Regional Managers',
    'preview.manager.desc': 'Monitor eco-club implementation, view regional analytics, and identify underperforming communities.',
    'preview.leadership': 'Corporate Leadership',
    'preview.leadership.desc': 'Access cross-community analytics, generate reports, and recognize best-performing eco-clubs.',

    // CTA Section
    'cta.title': 'Ready to Transform Your Community?',
    'cta.description': 'Join Mantra Builders\' initiative to create sustainable, eco-friendly residential communities. Track activities, engage residents, and make a real impact on the environment.',
    'cta.btn1': 'View Mantra Dashboard',
    'cta.btn2': 'Download Implementation Guide',

    // Footer
    'footer.initiative': 'A Mantra Builders initiative under Sustainable Living to track and promote environmental activities in residential communities.',
    'footer.platform': 'Platform',
    'footer.project': 'Project Dashboard',
    'footer.admin': 'Admin Monitor',
    'footer.reports': 'Reports & Analytics',
    'footer.resources': 'Resources',
    'footer.guidelines': 'Activity Guidelines',
    'footer.portal': 'Mantra Sustainability Portal',
    'footer.contact': 'Contact',
    'footer.address1': 'Mantra Builders - Sustainability Wing',
    'footer.address2': '3rd Floor, Bund Garden Rd, next to INOX Bund Garden',
    'footer.address3': 'Pune, Camp, Pune, Maharashtra 411001',
    'footer.copyright': 'Mantra Builders - Sustainability Initiative. Supporting sustainable communities.',
  },
  mr: {
    ecoClub: 'मंत्रा इको-क्लब',
    home: 'मुख्यपृष्ठ',
    dashboard: 'डॅशबोर्ड',
    admin: 'प्रशासन',
    reports: 'अहवाल',
  },
  hi: {
    ecoClub: 'मंत्रा इको-क्लब',
    home: 'होम',
    dashboard: 'डैशबोर्ड',
    admin: 'एडमिन',
    reports: 'रिपोर्ट्स',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}