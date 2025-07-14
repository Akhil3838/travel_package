import React from 'react';

function PrivacyAndPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-8">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">
          Welcome to our travel website. We are committed to protecting your privacy and ensuring the security of your personal information. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">We may collect the following types of information:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2"><strong>Personal Information:</strong> Name, email address, phone number, passport details (when booking), payment information, and other details you provide when making reservations or creating an account.</li>
          <li className="mb-2"><strong>Travel Preferences:</strong> Information about your travel interests, special requirements, and preferences.</li>
          <li className="mb-2"><strong>Technical Data:</strong> IP address, browser type, device information, and usage data collected through cookies and similar technologies.</li>
          <li><strong>Location Data:</strong> Approximate location based on IP address or precise location if you enable location services on our mobile app.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use your information for the following purposes:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">To process and manage your travel bookings and reservations</li>
          <li className="mb-2">To provide customer support and respond to your inquiries</li>
          <li className="mb-2">To personalize your experience and suggest relevant travel options</li>
          <li className="mb-2">To improve our website, services, and marketing efforts</li>
          <li className="mb-2">To send you promotional offers, newsletters, and travel updates (you can opt-out at any time)</li>
          <li>To comply with legal obligations and prevent fraudulent activities</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Sharing of Information</h2>
        <p className="mb-4">We may share your information with:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Travel service providers (hotels, airlines, tour operators, etc.) to fulfill your bookings</li>
          <li className="mb-2">Payment processors to complete transactions</li>
          <li className="mb-2">Third-party service providers who assist with our business operations (IT services, marketing agencies, etc.)</li>
          <li className="mb-2">Legal authorities when required by law or to protect our rights</li>
          <li>Business partners in case of mergers, acquisitions, or other corporate transactions</li>
        </ul>
        <p>We never sell your personal information to third parties for their marketing purposes.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your personal information. 
          This includes encryption of sensitive data, secure servers, and restricted access to personal information.
        </p>
        <p>
          However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Access and receive a copy of your data</li>
          <li className="mb-2">Request correction of inaccurate information</li>
          <li className="mb-2">Request deletion of your data under certain circumstances</li>
          <li className="mb-2">Object to or restrict processing of your data</li>
          <li>Withdraw consent for marketing communications</li>
        </ul>
        <p>To exercise these rights, please contact us using the information below.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking Technologies</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, 
          and understand where our visitors come from. You can control cookies through your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. 
          We encourage you to review their privacy policies before providing any personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
        <p className="mb-4">
          Our services are not directed to children under 13 (or 16 in some regions). We do not knowingly collect personal information from children. 
          If we become aware that we have collected such information, we will take steps to delete it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on our website 
          and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
        </p>
        <address className="not-italic">
          <p>Email: privacy@yourtravelwebsite.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Mailing Address: 123 Travel Street, Suite 100, City, State, ZIP Code</p>
        </address>
      </section>
    </div>
  );
}

export default PrivacyAndPolicy;