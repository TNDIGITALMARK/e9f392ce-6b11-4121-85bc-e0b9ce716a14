'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ColorPreset {
  name: string;
  colors: {
    pink: string;
    pinkDark: string;
    accent: string;
  };
}

const colorPresets: ColorPreset[] = [
  {
    name: 'Classic Pink',
    colors: {
      pink: '330 100% 89%',
      pinkDark: '330 100% 75%',
      accent: '350 82% 77%',
    },
  },
  {
    name: 'Pastel Blue',
    colors: {
      pink: '200 100% 90%',
      pinkDark: '200 80% 70%',
      accent: '210 70% 65%',
    },
  },
  {
    name: 'Mint Green',
    colors: {
      pink: '150 40% 85%',
      pinkDark: '150 50% 65%',
      accent: '160 60% 55%',
    },
  },
  {
    name: 'Lavender',
    colors: {
      pink: '270 60% 90%',
      pinkDark: '270 50% 75%',
      accent: '280 45% 65%',
    },
  },
  {
    name: 'Peach',
    colors: {
      pink: '20 100% 85%',
      pinkDark: '20 90% 70%',
      accent: '25 85% 60%',
    },
  },
  {
    name: 'Coral',
    colors: {
      pink: '10 85% 80%',
      pinkDark: '10 75% 65%',
      accent: '15 70% 55%',
    },
  },
];

export function ColorCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(0);

  useEffect(() => {
    const savedPreset = localStorage.getItem('colorPreset');
    if (savedPreset) {
      const presetIndex = parseInt(savedPreset, 10);
      setSelectedPreset(presetIndex);
      applyColorPreset(colorPresets[presetIndex]);
    }
  }, []);

  const applyColorPreset = (preset: ColorPreset) => {
    const root = document.documentElement;
    root.style.setProperty('--brand-pink', preset.colors.pink);
    root.style.setProperty('--brand-pink-dark', preset.colors.pinkDark);
    root.style.setProperty('--brand-accent', preset.colors.accent);
  };

  const handlePresetChange = (index: number) => {
    setSelectedPreset(index);
    applyColorPreset(colorPresets[index]);
    localStorage.setItem('colorPreset', index.toString());
  };

  const resetToDefault = () => {
    setSelectedPreset(0);
    applyColorPreset(colorPresets[0]);
    localStorage.removeItem('colorPreset');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-pink-dark))] text-[hsl(var(--brand-black))] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-fade-in"
        aria-label="Open color customizer"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </button>

      {/* Color Customizer Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-scale-in">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[hsl(var(--brand-black))] font-display">
                  Customize Colors
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Choose a color scheme to personalize your experience
              </p>
            </div>

            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              {colorPresets.map((preset, index) => (
                <button
                  key={preset.name}
                  onClick={() => handlePresetChange(index)}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${
                    selectedPreset === index
                      ? 'border-[hsl(var(--brand-black))] bg-gray-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-gray-900">
                      {preset.name}
                    </span>
                    {selectedPreset === index && (
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <div
                      className="flex-1 h-12 rounded-lg shadow-inner"
                      style={{ backgroundColor: `hsl(${preset.colors.pink})` }}
                    ></div>
                    <div
                      className="flex-1 h-12 rounded-lg shadow-inner"
                      style={{
                        backgroundColor: `hsl(${preset.colors.pinkDark})`,
                      }}
                    ></div>
                    <div
                      className="flex-1 h-12 rounded-lg shadow-inner"
                      style={{ backgroundColor: `hsl(${preset.colors.accent})` }}
                    ></div>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
              <button
                onClick={resetToDefault}
                className="w-full bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Reset to Default
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
