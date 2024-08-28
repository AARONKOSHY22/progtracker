import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between w-full h-screen bg-gradient-to-bl from-black via-red-900 to-black bg-no-repeat bg-right-top animate-gradientMove">
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-gray-900 text-white min-h-screen p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button className="text-red-500 font-bold">ESC</button>
            <h1 className="text-3xl font-semibold">Arrays & Hashing</h1>
            <p className="text-xl">(3 / 9)</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: "33%" }}
            ></div>
          </div>

          {/* Prerequisites */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="flex flex-col items-center bg-gray-800 p-4 rounded-md">
              <input type="checkbox" className="mb-2" />
              <span className="text-blue-400">Dynamic Arrays</span>
              <a href="#" className="text-xs text-blue-400">
                Data Structures & Algorithms for Beginners
              </a>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-4 rounded-md">
              <input type="checkbox" className="mb-2" />
              <span className="text-blue-400">Hash Usage</span>
              <a href="#" className="text-xs text-blue-400">
                Data Structures & Algorithms for Beginners
              </a>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-4 rounded-md">
              <input type="checkbox" className="mb-2" />
              <span className="text-blue-400">Hash Implementation</span>
              <a href="#" className="text-xs text-blue-400">
                Data Structures & Algorithms for Beginners
              </a>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-4 rounded-md">
              <input type="checkbox" className="mb-2" />
              <span className="text-blue-400">Prefix Sums</span>
              <a href="#" className="text-xs text-blue-400">
                Advanced Algorithms
              </a>
            </div>
          </div>

          {/* Problem List Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Star</th>
                  <th className="px-4 py-2">Problem</th>
                  <th className="px-4 py-2">Difficulty</th>
                  <th className="px-4 py-2">Video Solution</th>
                  <th className="px-4 py-2">Code</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-800">
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      checked
                      className="form-checkbox text-green-500"
                      readOnly
                    />
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-yellow-500">&#9733;</span>
                  </td>
                  <td className="px-4 py-2">
                    <a href="#" className="text-blue-400">
                      Contains Duplicate
                    </a>
                  </td>
                  <td className="px-4 py-2">Easy</td>
                  <td className="px-4 py-2">
                    <span>&#x1F4FA;</span>
                  </td>
                  <td className="px-4 py-2 text-blue-400">Python</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      checked
                      className="form-checkbox text-green-500"
                      readOnly
                    />
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-yellow-500">&#9733;</span>
                  </td>
                  <td className="px-4 py-2">
                    <a href="#" className="text-blue-400">
                      Valid Anagram
                    </a>
                  </td>
                  <td className="px-4 py-2">Easy</td>
                  <td className="px-4 py-2">
                    <span>&#x1F4FA;</span>
                  </td>
                  <td className="px-4 py-2 text-blue-400">Python</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      checked
                      className="form-checkbox text-green-500"
                      readOnly
                    />
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-yellow-500">&#9733;</span>
                  </td>
                  <td className="px-4 py-2">
                    <a href="#" className="text-blue-400">
                      Two Sum
                    </a>
                  </td>
                  <td className="px-4 py-2">Easy</td>
                  <td className="px-4 py-2">
                    <span>&#x1F4FA;</span>
                  </td>
                  <td className="px-4 py-2 text-blue-400">Python</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="px-4 py-2">
                    <input type="checkbox" className="form-checkbox" />
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-yellow-500">&#9733;</span>
                  </td>
                  <td className="px-4 py-2">
                    <a href="#" className="text-blue-400">
                      Group Anagrams
                    </a>
                  </td>
                  <td className="px-4 py-2">Medium</td>
                  <td className="px-4 py-2">
                    <span>&#x1F4FA;</span>
                  </td>
                  <td className="px-4 py-2 text-blue-400">Python</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="px-4 py-2">
                    <input type="checkbox" className="form-checkbox" />
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-yellow-500">&#9733;</span>
                  </td>
                  <td className="px-4 py-2">
                    <a href="#" className="text-blue-400">
                      Top K Frequent Elements
                    </a>
                  </td>
                  <td className="px-4 py-2">Medium</td>
                  <td className="px-4 py-2">
                    <span>&#x1F4FA;</span>
                  </td>
                  <td className="px-4 py-2 text-blue-400">Python</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="px-4 py-2">
                    <input type="checkbox" className="form-checkbox" />
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-yellow-500">&#9733;</span>
                  </td>
                  <td className="px-4 py-2">
                    <a href="#" className="text-blue-400">
                      Encode and Decode Strings
                    </a>
                  </td>
                  <td className="px-4 py-2">Medium</td>
                  <td className="px-4 py-2">
                    <span>&#x1F4FA;</span>
                  </td>
                  <td className="px-4 py-2 text-blue-400">Python</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="px-4 py-2">
                    <input type="checkbox" className="form-checkbox" />
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-yellow-500">&#9733;</span>
                  </td>
                  <td className="px-4 py-2">
                    <a href="#" className="text-blue-400">
                      Product of Array Except Self
                    </a>
                  </td>
                  <td className="px-4 py-2">Medium</td>
                  <td className="px-4 py-2">
                    <span>&#x1F4FA;</span>
                  </td>
                  <td className="px-4 py-2 text-blue-400">Python</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </main>
    </div>
  );
}
