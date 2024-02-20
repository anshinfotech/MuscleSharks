import NavbarComp from "../../components/Navbar/Navbar";
import Nav from "./Nav";

const PrivacyPolicy = () => {
  return (
    <>
      <NavbarComp />
      <div className="bg-amber-100 p-5">
        <div className="bg-white w-[80%] m-auto p-5 mb-10">
          <h1 className="text-xl font-bold mb-10 text-center">MuscleSharks Privacy Policy</h1>

          <section className="mb-8">
            <h2 className="mb-1 font-medium">Introduction</h2>
            <p className="text-small">
              MuscleSharks is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our website, mobile application, or other services (collectively, the "Platform").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-1 font-medium">Collection of Personal Information</h2>
            <p className="text-small">
              We collect personal information about you when you:
              <ul>
                <li>Create an account on our Platform</li>
                <li>Place an order on our Platform</li>
                <li>Contact us for customer support</li>
                <li>Subscribe to our email newsletter</li>
                <li>Participate in surveys or contests</li>
                <li>Use any of our other features or services</li>
              </ul>
              The personal information we collect may include:
              <ul>
                <li>Your name and contact information (such as email address, phone number, and mailing address)</li>
                <li>Your payment information (such as credit card number and billing address)</li>
                <li>Your purchase history</li>
                <li>Your preferences and interests</li>
                <li>Your IP address and device information</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-1 font-medium">Use of Personal Information</h2>
            <p className="text-small">
              We use your personal information to:
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications about our products and services</li>
                <li>Personalize your experience on our Platform</li>
                <li>Improve our products and services</li>
                <li>Protect our business and prevent fraud</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-1 font-medium">Disclosure of Personal Information</h2>
            <p className="text-small">
              We may disclose your personal information to third-party service providers who help us operate our business, such as payment processors, shipping companies, and marketing agencies. We may also disclose your personal information if required by law or if we believe that disclosure is necessary to protect our rights or the rights of others.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-1 font-medium">Data Security</h2>
            <p className="text-small">
              We take reasonable steps to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee the absolute security of your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-1 font-medium">Changes to Our Privacy Policy</h2>
            <p className="text-small">
              We may update our Privacy Policy from time to time. We will notify you of any material changes to our Privacy Policy by email or by posting a notice on our Platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-1 font-medium">Your Choices</h2>
            <p className="text-small">
              You have the right to access, correct, and delete your personal information. You may also opt out of receiving marketing communications from us. To exercise any of these rights, please contact us at [email protected]
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-1 font-medium">Contact Us</h2>
            <p className="text-small">
              If you have any questions about our Privacy Policy, please contact us at musclesharks07@gmail.com
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
