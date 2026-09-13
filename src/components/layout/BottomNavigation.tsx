import React from 'react';
import { useApp } from '../../context/AppContext';

export const BottomNavigation: React.FC = () => {
  const { currentTab, setCurrentTab, documents, language } = useApp();

  const expiringCount = documents.filter((d) => d.status === 'expiring' || d.status === 'missing').length;

  interface TabItem {
    id: 'home' | 'jobs' | 'documents' | 'profile';
    labelEs: string;
    labelEn: string;
    icon: string;
    badge?: number;
  }

  const tabs: TabItem[] = [
    { id: 'home', labelEs: 'Home', labelEn: 'Home', icon: 'home' },
    { id: 'jobs', labelEs: 'Employer', labelEn: 'Employer', icon: 'chat_bubble_outline' },
    { id: 'documents', labelEs: 'Calendar', labelEn: 'Calendar', icon: 'calendar_today', badge: expiringCount },
    { id: 'profile', labelEs: 'Profile', labelEn: 'Profile', icon: 'folder' },
  ];

  if (currentTab === 'apply_wizard') {
    return null; // Hide bottom navigation during multi-step registration workflow
  }

  return (
    <div
      className="w-full bg-white drop-shadow-[0px_-4px_2.9px_rgba(181,181,181,0.15)] flex flex-col items-center shrink-0 z-30 select-none border-t border-[#f0f0f0]"
      data-node-id="1997:39906"
      data-name="Navbar"
    >
      {/* Tabs Container */}
      <div className="w-full flex items-center justify-around px-4 pt-3 pb-[6px] gap-[2px]" data-name="Container">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id || (tab.id === 'home' && currentTab === 'welcome_offer');

          return (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id as any)}
              className="flex flex-col items-center justify-center flex-1 py-1 px-1 cursor-pointer group active:scale-95 transition-transform"
              data-name="item"
            >
              <div className="flex flex-col gap-1 items-center w-full">
                {/* Icon Capsule Pill: h-8 (32px), w-16 (64px), active bg #c2e7ff / #d3efff, icon #0045ff */}
                <div
                  className={`h-8 w-16 rounded-full flex items-center justify-center relative transition-colors duration-150 ${
                    isActive ? 'bg-[#c2e7ff] text-[#0045ff]' : 'bg-transparent text-[#525252]'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[24px] ${isActive ? 'icon-filled text-[#0045ff]' : ''}`}>
                    {tab.icon}
                  </span>
                  {tab.badge && tab.badge > 0 ? (
                    <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                      {tab.badge}
                    </span>
                  ) : null}
                </div>

                {/* Text Label */}
                <span
                  className={`font-['Inter',sans-serif] text-[12px] leading-[16px] text-center tracking-[-0.024px] ${
                    isActive ? 'font-semibold text-[#0045ff]' : 'font-normal text-[#525252]'
                  }`}
                >
                  {language === 'es' ? tab.labelEs : tab.labelEn}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Home Indicator Bar Handle */}
      <div className="w-full h-6 flex items-center justify-center">
        <div className="w-[108px] h-[4px] bg-[#191c1b] rounded-full" />
      </div>
    </div>
  );
};
