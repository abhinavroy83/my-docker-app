"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [buildInfo, setBuildInfo] = useState<{
    version: string;
    buildTime: string;
    gitCommit: string;
  } | null>(null);

  useEffect(() => {
    // Simulate fetching build info
    setBuildInfo({
      version: process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0",
      buildTime: new Date().toISOString(),
      gitCommit: process.env.NEXT_PUBLIC_GIT_COMMIT || "local",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="text-6xl mr-4">🐳</div>
            <div className="text-6xl mr-4">⚛️</div>
            <div className="text-6xl">🐙</div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Next.js + Docker + GitHub
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Complete DevOps setup with automated CI/CD, containerization, and
            deployment
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-3">🐳 Docker</h3>
              <ul className="text-sm text-blue-700 space-y-2 text-left">
                <li>• Multi-stage builds</li>
                <li>• Development & Production</li>
                <li>• Docker Compose</li>
                <li>• Container Registry</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-3">🐙 GitHub</h3>
              <ul className="text-sm text-green-700 space-y-2 text-left">
                <li>• Actions CI/CD</li>
                <li>• Automated testing</li>
                <li>• PR previews</li>
                <li>• Container publishing</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-3">⚛️ Next.js</h3>
              <ul className="text-sm text-purple-700 space-y-2 text-left">
                <li>• App Router</li>
                <li>• TypeScript</li>
                <li>• Standalone output</li>
                <li>• Production optimized</li>
              </ul>
            </div>
          </div>

          {buildInfo && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Build Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium">Version:</span>{" "}
                  {buildInfo.version}
                </div>
                <div>
                  <span className="font-medium">Built:</span>{" "}
                  {new Date(buildInfo.buildTime).toLocaleString()}
                </div>
                <div>
                  <span className="font-medium">Commit:</span>{" "}
                  {buildInfo.gitCommit.substring(0, 7)}
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-left">
              <h4 className="font-semibold mb-2">🚀 Quick Start</h4>
              <code className="block bg-gray-100 p-2 rounded text-xs mb-1">
                git clone your-repo
              </code>
              <code className="block bg-gray-100 p-2 rounded text-xs mb-1">
                ./scripts/setup.sh
              </code>
              <code className="block bg-gray-100 p-2 rounded text-xs">
                npm run docker:dev
              </code>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-left">
              <h4 className="font-semibold mb-2">🔄 CI/CD Pipeline</h4>
              <div className="text-xs space-y-1">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Tests & Linting
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Docker Build
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Registry Push
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Auto Deploy
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          Running in {process.env.NODE_ENV || "development"} mode
        </div>
      </div>
    </div>
  );
}
