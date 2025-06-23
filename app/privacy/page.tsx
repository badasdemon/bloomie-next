export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg mb-6">
              Effective date: June 3, 2025
            </p>

            <p className="mb-6">
              Bloomie is a private baby growth journal app. Your data privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>

            <h2>What We Collect</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Photos and videos you choose to upload</li>
              <li>Notes, mood tags, activity labels, and milestones</li>
              <li>Voice recordings</li>
              <li>Email address (only if you connect Google Drive)</li>
              <li>Anonymous usage statistics for analytics</li>
            </ul>

            <h2>How We Use Your Data</h2>
            <p className="mb-4">
              We do not sell or share your data. Your media is stored locally or on your personal Google Drive. Analytics data is used solely to improve app performance and experience.
            </p>

            <h2>Third-Party Services</h2>
            <p className="mb-4">
              Bloomie integrates with the following services:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Google Drive API — for optional media backup</li>
              <li>Supabase — for user authentication and metadata</li>
              <li>RevenueCat — for managing your subscription</li>
            </ul>

            <h2>Children</h2>
            <p className="mb-6">
              This app is designed to be used by parents. Children should not access or use this app directly.
            </p>

            <h2>Contact Us</h2>
            <p className="mb-6">
              For any privacy-related questions, please contact us at <a href="mailto:tangerinlabs@gmail.com" className="text-pink-600 hover:underline">tangerinlabs@gmail.com</a>
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: June 3, 2025
            </p>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
            >
              ← Back to Bloomie
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
