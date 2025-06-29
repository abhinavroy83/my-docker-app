export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🐳 Next.js + Docker
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Your Next.js application is running successfully in a Docker
            container!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">🚀 Features</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-stage Docker build</li>
                <li>• Optimized for production</li>
                <li>• Standalone output</li>
                <li>• Security best practices</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                📦 Container Info
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Node.js 18 Alpine</li>
                <li>• Non-root user</li>
                <li>• Port 3000 exposed</li>
                <li>• Production ready</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Commands
          </h2>
          <div className="space-y-2 text-left">
            <code className="block bg-gray-100 p-2 rounded text-sm">
              docker build -t nextjs-app .
            </code>
            <code className="block bg-gray-100 p-2 rounded text-sm">
              docker run -p 3000:3000 nextjs-app
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
