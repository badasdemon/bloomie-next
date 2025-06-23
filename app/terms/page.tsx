import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Terms of Use
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg mb-6">
              Welcome to Bloomie! These Terms of Use govern your use of our baby journaling app and services.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Acceptance of Terms
            </h2>
            <p className="mb-6">
              By downloading, installing, or using the Bloomie app, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our app.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Description of Service
            </h2>
            <p className="mb-4">
              Bloomie is a private baby journaling app that allows you to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Capture and store photos and videos of your baby</li>
              <li>Create journal entries and milestone notes</li>
              <li>Organize memories with tags and categories</li>
              <li>Share selected content with family and friends</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              User Responsibilities
            </h2>
            <p className="mb-4">
              As a user of Bloomie, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Respect the privacy of others</li>
              <li>Not use the app for any illegal purposes</li>
              <li>Not upload content that violates others&apos; rights</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Content Ownership
            </h2>
            <p className="mb-6">
              You retain ownership of all content you upload to Bloomie. By uploading content, you grant us a limited license to store and display your content within the app.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Privacy and Data Protection
            </h2>
            <p className="mb-6">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Service Availability
            </h2>
            <p className="mb-6">
              We strive to provide reliable service but cannot guarantee uninterrupted access. We may need to perform maintenance or updates that temporarily affect availability.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Termination
            </h2>
            <p className="mb-6">
              You may stop using Bloomie at any time. We may terminate or suspend your account if you violate these terms or for other reasons as outlined in our policies.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Changes to Terms
            </h2>
            <p className="mb-6">
              We may update these Terms of Use from time to time. We will notify you of any material changes through the app or email.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Contact Information
            </h2>
            <p className="mb-6">
              If you have questions about these Terms of Use, please contact us at tangerinlabs@gmail.com
            </p>
            
            <p className="text-sm text-gray-500 mt-8">
              Last updated: January 2025
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
            >
              ← Back to Bloomie
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 