import React from "react";

export function FoodFusion() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
      <div className="relative h-48 bg-gray-200 dark:bg-neutral-700 overflow-hidden">
        {/* <!-- Placeholder with gradient --> */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
          <div className="flex space-x-3">
            <a
              href="https://github.com/sheikhamir1/Demo-Projects-Details/blob/main/AllProjectsDetail/FoodFusion.md"
              className="bg-secondary text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/sheikhamir1/Demo-Projects-Details/blob/main/AllProjectsDetail/FoodFusion.md"
              className="bg-primary text-white p-2 rounded-full hover:bg-blue-900 transition-colors duration-300"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
          Food Fusion
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          <p>
            <strong>FoodFusion</strong> is a modern, responsive food delivery
            platform that lets users <strong>browse</strong>,{" "}
            <strong>filter</strong>, and <strong>order meals</strong> from local
            restaurants. It features:
          </p>

          <ul>
            <li>
              🧭 <strong>Pages:</strong> Home, Menu, About, Contact
            </li>
            <li>
              🔍 <strong>Search & Filters:</strong> By category (Pizza, Vegan,
              etc.) & tags (Spicy, New, etc.)
            </li>
            <li>
              👤 <strong>User Auth:</strong> Modal-based Login/Signup with
              social login
            </li>
            <li>
              🛒 <strong>Cart & Checkout:</strong> Cart management,
              delivery/pickup options, multiple payment methods
            </li>

            <li>
              🎨 <strong>Design:</strong> Mobile-friendly, animated UI with
              smooth interactions
            </li>
            <li>
              🛠️ <strong>Tech Stack:</strong> React/Next.js, Node.js or
              Firebase, MongoDB/Firestore, Stripe/PayPal
            </li>
            <li>
              📈 <strong>Future Admin:</strong> Manage menu, orders, analytics,
              and promotions
            </li>
          </ul>
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-md">
            HTML5
          </span>
          <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-md">
            Css3
          </span>
          <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 py-1 px-2 rounded-md">
            Tailwind
          </span>
          <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 py-1 px-2 rounded-md">
            Font awesome
          </span>
          <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 py-1 px-2 rounded-md">
            typography
          </span>
          <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-md">
            JavaScript
          </span>
        </div>
        <div className="flex justify-between items-center">
          <a
            href="https://github.com/sheikhamir1/Demo-Projects-Details/blob/main/AllProjectsDetail/FoodFusion.md"
            className="text-secondary text-white hover:text-blue-700 dark:hover:text-blue-400 font-medium text-sm transition-colors duration-300"
            target="_blank"
          >
            View Details →
          </a>
        </div>
      </div>
    </div>
  );
}
