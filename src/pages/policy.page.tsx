import FooterComponent from "@/components/footer.component";
import { Header } from "@/components/ui/header.component";

const PolicyPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-4">
          Effective Date: <strong>25/12/12</strong>
        </p>

        <p className="text-gray-600 mb-6">
          <strong>GO-EASE</strong> is committed to protecting and respecting
          your privacy. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your personal data when you use our
          two-wheeler sharing and rental services (the "Service"), through our
          mobile application or website (the "App").
        </p>
        <p className="text-gray-600 mb-6">
          By accessing or using our Service, you agree to the collection and use
          of your personal data in accordance with this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 mb-2">
          We may collect the following types of information when you use our
          App:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-600">
          <li>
            <strong>Personal Information:</strong> Name, Email address, Phone
            number, Adhar Card, Payment information, Emergency contact details
            (optional).
          </li>
          <li>
            <strong>Location Information:</strong> Real-time location data when
            you use our App to find, rent, or return a two-wheeler.
          </li>
          <li>
            <strong>Usage Data:</strong> Interaction with the app’s features,
            search queries, and technical data (e.g., device information, IP
            address).
          </li>
          <li>
            <strong>Transaction Data:</strong> Rental duration, payment details,
            and rental history.
          </li>
          <li>
            <strong>Communication Data:</strong> Messages, support queries, or
            other communications.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-600">
          <li>To provide and manage the Service.</li>
          <li>To improve the Service and user experience.</li>
          <li>To communicate with you regarding your rental activities.</li>
          <li>To ensure safety and compliance with our terms.</li>
          <li>
            To personalize your experience based on preferences and usage.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          3. How We Share Your Information
        </h2>
        <p className="text-gray-600 mb-6">
          We do not sell or rent your personal data to third parties. However,
          we may share your data under the following circumstances:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-600">
          <li>
            <strong>Service Providers:</strong> Trusted third-party providers
            (e.g., payment processors).
          </li>
          <li>
            <strong>Legal Requirements:</strong> To comply with legal processes
            or laws.
          </li>
          <li>
            <strong>Business Transfers:</strong> During a merger, acquisition,
            or sale of assets.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          4. Data Security
        </h2>
        <p className="text-gray-600 mb-6">
          We implement technical and organizational security measures to protect
          your data. However, no method of transmission or storage is 100%
          secure.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          5. Data Retention
        </h2>
        <p className="text-gray-600 mb-6">
          We retain your personal data as long as necessary to provide the
          Service and comply with legal obligations. Once the data is no longer
          needed, it will be securely deleted or anonymized.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          6. Your Data Protection Rights
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-600">
          <li>
            <strong>Access:</strong> Request access to your data.
          </li>
          <li>
            <strong>Correction:</strong> Update or correct inaccuracies in your
            data.
          </li>
          <li>
            <strong>Deletion:</strong> Request deletion of your data.
          </li>
          <li>
            <strong>Data Portability:</strong> Request a copy of your data in a
            machine-readable format.
          </li>
          <li>
            <strong>Objection:</strong> Object to data processing in certain
            cases (e.g., marketing).
          </li>
        </ul>
        <p className="text-gray-600 mb-6">
          To exercise these rights, contact us at{" "}
          <strong>goeaseofficial2024@gmail.com</strong>.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          7. Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-600 mb-6">
          We use cookies to enhance user experience and analyze usage. You can
          manage cookies through your device settings.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          8. Changes to This Privacy Policy
        </h2>
        <p className="text-gray-600 mb-6">
          We may update this Privacy Policy. Material changes will be notified
          via the App or email.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          9. Contact Us
        </h2>
        <p className="text-gray-600 mb-6">
          For questions or concerns, contact us at:
        </p>
        <ul className="list-none text-gray-600">
          <li>
            <strong>Email:</strong> goeaseofficial2024@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> 8794375190
          </li>
          <li>
            <strong>Address:</strong> Naharlagun, A Sector
          </li>
        </ul>
        <p className="text-gray-600 mt-6">
          This Privacy Policy was last updated on <strong>25/12/2024</strong>.
        </p>
      </div>
      <FooterComponent />
    </div>
  );
};

export default PolicyPage;
