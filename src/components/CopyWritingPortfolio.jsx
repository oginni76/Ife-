import React, { useState } from 'react';

const CopywritingPortfolio = () => {
  // State to track active category and content
  const [activeCategory, setActiveCategory] = useState('Amateur');
  const [expandedItem, setExpandedItem] = useState(null);
  
  // Portfolio content structure with section-specific drive links
  const portfolioContent = {
    Amateur: {
      items: [
        { id: 1, title: 'First Draft Blog Post', preview: 'An early writing sample showing progression...', content: 'This is the full content of the amateur work...' },
        { id: 2, title: 'Practice Sales Copy', preview: 'Experimenting with persuasive language...', content: 'This is the full content of the practice sales copy...' },
        { id: 3, title: 'College Essay', preview: 'Academic writing sample from early career...', content: 'This is the full content of the college essay...' },
      ],
      driveLink: "https://drive.google.com/drive/folders/1AWJNVyyWAjHwtUWAYRWECoauw0K3xW6g"
    },
    'Social Media': {
      items: [
        { id: 1, title: 'Instagram Campaign', preview: 'Series of captions for product launch...', content: 'This is the full content of the Instagram campaign...' },
        { id: 2, title: 'Twitter Thread', preview: 'Viral thread explaining industry concepts...', content: 'This is the full content of the Twitter thread...' },
        { id: 3, title: 'LinkedIn Articles', preview: 'Professional thought leadership content...', content: 'This is the full content of the LinkedIn articles...' },
      ],
      driveLink: "https://drive.google.com/drive/folders/1Al8EPBZ1Wr3a7-5MEDNlMZfadeF_B2UD"
    },
    Random: {
      items: [
        { id: 1, title: 'Creative Fiction', preview: 'Short story demonstrating creative writing...', content: 'This is the full content of the creative fiction...' },
        { id: 2, title: 'Technical Manual', preview: 'Clear instructions for complex product...', content: 'This is the full content of the technical manual...' },
        { id: 3, title: 'Speech Draft', preview: 'Keynote address for industry conference...', content: 'This is the full content of the speech draft...' },
      ],
      driveLink: "https://drive.google.com/drive/folders/1AvjGvWpTVBzWTOEfCWo7Qz4PkkEAO0O1"
    },
    'Articles/Blogposts': {
      items: [
        { id: 1, title: 'Industry Analysis', preview: 'Deep dive into market trends and forecasts...', content: 'This is the full content of the industry analysis...' },
        { id: 2, title: 'How-To Guide', preview: 'Step-by-step instructions for beginners...', content: 'This is the full content of the how-to guide...' },
        { id: 3, title: 'Case Study', preview: 'Client success story with measured results...', content: 'This is the full content of the case study...' },
      ],
      driveLink: "https://drive.google.com/drive/folders/1AWJNVyyWAjHwtUWAYRWECoauw0K3xW6g"
    },
  };

  // Main portfolio drive link
  const mainDriveLink = "https://drive.google.com/drive/folders/1AsjxK3MFkKRHzENA3xRXTKebj6Tm4qMz";

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setExpandedItem(null); // Reset expanded item when changing categories
  };

  const toggleExpandItem = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <div className="flex flex-col min-h-screen bg-purple-50">
      {/* Header */}
      <header className="bg-purple-800 text-white py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Creative Copywriting Portfolio</h1>
          <p className="text-purple-200">Crafting compelling content that converts</p>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow max-w-6xl mx-auto w-full p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar navigation */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <h2 className="text-xl font-semibold text-purple-900 mb-4 border-b border-purple-200 pb-2">
                Content Categories
              </h2>
              <nav>
                <ul className="space-y-2">
                  {Object.keys(portfolioContent).map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => handleCategoryClick(category)}
                        className={`w-full text-left px-3 py-2 rounded transition-colors ${
                          activeCategory === category
                            ? 'bg-purple-600 text-white font-medium'
                            : 'text-purple-900 hover:bg-purple-100'
                        }`}
                      >
                        {category}
                        <span className="ml-2 text-sm">
                          ({portfolioContent[category].items.length})
                        </span>
                      </button>
                      
                      {/* Category-specific Drive Link */}
                      {activeCategory === category && (
                        <div className="mt-2 ml-3">
                          <a
                            href={portfolioContent[category].driveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-purple-600 hover:text-purple-800 hover:underline flex items-center"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                            View Drive Folder
                          </a>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              
              {/* Main portfolio link */}
              <div className="mt-6 pt-4 border-t border-purple-200">
                <h3 className="text-sm font-semibold text-purple-900 mb-2">
                  Complete Portfolio
                </h3>
                <a
                  href={mainDriveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 hover:underline flex items-center text-sm"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  View All Content
                </a>
              </div>
            </div>
          </aside>

          {/* Content area */}
          <div className="flex-grow">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6 border-b border-purple-200 pb-3">
                <h2 className="text-2xl font-bold text-purple-900">
                  {activeCategory} Content
                </h2>
              </div>
              
              {/* Section-specific drive link */}
              <div className="mb-6 bg-purple-50 p-4 rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-purple-800">
                    {activeCategory} Drive Folder
                  </h3>
                  <p className="text-sm text-purple-600">
                    Access all {activeCategory.toLowerCase()} content files directly
                  </p>
                </div>
                <a
                  href={portfolioContent[activeCategory].driveLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
                >
                  Open Drive
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
              
              {portfolioContent[activeCategory].items.length > 0 ? (
                <div className="space-y-4">
                  {portfolioContent[activeCategory].items.map((item) => (
                    <div key={item.id} className="border border-purple-200 rounded-lg overflow-hidden">
                      <div 
                        className="bg-purple-100 p-4 cursor-pointer flex justify-between items-center"
                        onClick={() => toggleExpandItem(item.id)}
                      >
                        <h3 className="text-lg font-medium text-purple-800">{item.title}</h3>
                        <span className="text-purple-600">
                          {expandedItem === item.id ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          )}
                        </span>
                      </div>
                      
                      {expandedItem === item.id && (
                        <div className="p-4 border-t border-purple-200">
                          <p className="text-gray-700 mb-4">{item.content}</p>
                          <div className="flex justify-end space-x-4">
                            <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                              Download PDF
                            </button>
                            <a 
                              href={portfolioContent[activeCategory].driveLink} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center"
                            >
                              View in Drive
                              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      )}
                      
                      {expandedItem !== item.id && (
                        <div className="p-4 bg-white">
                          <p className="text-gray-600 text-sm">{item.preview}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No content available in this category yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-purple-900 text-purple-200 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <div className="flex items-center mb-3 justify-center md:justify-end">
              <a 
                href={mainDriveLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex items-center"
              >
                We read, we don't judge!🌚
I would normally have put these in the bin, but No Bad Writing, they say. Hence, my first few articles as a beginner. 

                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CopywritingPortfolio;