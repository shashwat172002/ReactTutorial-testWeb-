import React, { useState } from 'react';
import { Code, Zap, Users, Heart, Lock, Shield, Key } from 'lucide-react';
import ComponentReact from './ComponentReact';

// About React Component
function AboutReact({ onHiddenClick }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <svg viewBox="0 0 841.9 595.3" className="w-24 h-24 mx-auto">
              <g fill="#61DAFB">
                <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
                <circle cx="420.9" cy="296.5" r="45.7"/>
              </g>
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About React
          </h1>
          <p className="text-xl text-slate-300">A JavaScript library for building user interfaces</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all">
            <Code className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Declarative</h3>
            <p className="text-slate-300 leading-relaxed">
              React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all">
            <Zap className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Component-Based</h3>
            <p className="text-slate-300 leading-relaxed">
              Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all">
            <Users className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Learn Once, Write Anywhere</h3>
            <p className="text-slate-300 leading-relaxed">
              We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all">
            <Heart className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Community Driven</h3>
            <p className="text-slate-300 leading-relaxed">
              React is maintained by Meta and a community of individual developers and companies. Thousands of contributors make React better every day, with a rich ecosystem of libraries and tools.
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold mb-4">Why Choose React?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            React has become one of the most popular libraries for building modern web applications. Its component-based architecture promotes reusability and maintainability, while the virtual DOM ensures optimal performance even in complex applications.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Whether you're building a small interactive widget or a large-scale enterprise application, React provides the flexibility and tools you need to succeed. Join millions of developers worldwide who trust React for their projects.
          </p>
        </div>

        {/* Hidden Button - Triple-click on "React" in the main heading to reveal */}
        <button
          onClick={onHiddenClick}
          className="fixed opacity-0 hover:opacity-100 hover:bg-grey-100 transition-all duration-300"
          style={{
            width: '30px',
            height: '30px',
            top: '165px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 50
          }}
          title=""
          aria-label="Hidden admin access"
        />
      </div>
    </div>
  );
}

// Admin Panel Component (Hidden Route)
function AdminPanel({ onBackClick }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <Shield className="w-24 h-24 mx-auto text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <p className="text-xl text-slate-300">Welcome to the secret control center</p>
        </div>

        {/* Admin Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:bg-white/10 transition-all">
            <Lock className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">System Access</h3>
            <p className="text-slate-300 leading-relaxed">
              Full administrative privileges granted. You have access to all system configurations and sensitive operations.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:bg-white/10 transition-all">
            <Key className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Secret Features</h3>
            <p className="text-slate-300 leading-relaxed">
              Unlock hidden features and advanced settings not available to regular users. Customize everything to your needs.
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20 mb-8">
          <h2 className="text-3xl font-bold mb-4">🎉 You Found It!</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Congratulations on discovering the hidden admin panel. This secret route is only accessible to those who know where to look.
          </p>
          <p className="text-slate-300 leading-relaxed">
            This demonstrates how you can create hidden functionality in your React applications with proper routing and state management.
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={onBackClick}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Back to About Page
          </button>
        </div>
      </div>
    </div>
  );
}

// Main App Component with Routing
export default function App() {
  const [currentRoute, setCurrentRoute] = useState('/');

  const navigateToAdmin = () => {
    setCurrentRoute('/hehe');
  };

  const navigateToHome = () => {
    setCurrentRoute('/');
  };

  return (
    <div>
      {currentRoute === '/' && <AboutReact onHiddenClick={navigateToAdmin} />}
      {currentRoute === '/hehe' && <ComponentReact onBackClick={navigateToHome} />}
    </div>
  );
}