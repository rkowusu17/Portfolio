import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="h-8 bg-gray-200 rounded w-32 animate-pulse"></div>
            <div className="hidden md:flex space-x-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-6 bg-gray-200 rounded w-16 animate-pulse"
                ></div>
              ))}
            </div>
            <div className="md:hidden h-6 w-6 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="h-16 bg-gray-200 rounded-lg mb-6 animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded-lg mb-4 max-w-md mx-auto animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mb-2 max-w-2xl mx-auto animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mb-12 max-w-xl mx-auto animate-pulse"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="h-12 bg-gray-200 rounded-full w-40 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded-full w-40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Skeleton */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-10 bg-gray-200 rounded-lg mb-16 max-w-xs mx-auto animate-pulse"></div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded max-w-sm animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded max-w-3/4 animate-pulse"></div>
              </div>

              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded max-w-sm animate-pulse"></div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="h-10 bg-gray-200 rounded animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Skeleton */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="h-10 bg-gray-200 rounded-lg mb-16 max-w-sm mx-auto animate-pulse"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded max-w-3/4 animate-pulse"></div>
                    <div className="flex gap-2">
                      {[1, 2, 3].map((j) => (
                        <div
                          key={j}
                          className="h-6 bg-gray-200 rounded-full w-16 animate-pulse"
                        ></div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <div className="h-10 bg-gray-200 rounded w-20 animate-pulse"></div>
                      <div className="h-10 bg-gray-200 rounded w-20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Skeleton */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-10 bg-gray-200 rounded-lg mb-16 max-w-sm mx-auto animate-pulse"></div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="h-8 bg-gray-200 rounded max-w-sm animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded max-w-3/4 animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                  <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                  <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                  <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="h-8 bg-gray-700 rounded max-w-xs mx-auto animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded max-w-md mx-auto animate-pulse"></div>
            </div>
            <div className="border-t border-gray-800 pt-8 space-y-2">
              <div className="h-4 bg-gray-700 rounded max-w-sm mx-auto animate-pulse"></div>
              <div className="h-3 bg-gray-700 rounded max-w-xs mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkeletonLoader;
