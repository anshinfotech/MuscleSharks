import NavbarComp from "../../components/Navbar/Navbar";
import Nav from "./Nav";

const TermsAndConditions = () => {
  return (
    <>
    <NavbarComp />
    <div className="bg-amber-100 p-5">
        <div className=" bg-white w-[80%] m-auto p-5 mb-10">
        <h1 className="text-xl font-bold mb-10 text-center">Terms and Conditions</h1>

        <section className="mb-8">
            <h2 className="mb-1 font-medium">1. Introduction</h2>
            <p className=" text-small">
            Welcome to MuscleSharks, an online store that offers a wide variety of gym supplements and fitness products. These Terms and Conditions govern your access to and use of our website, mobile application, and any other services provided by MuscleSharks (collectively, the "Platform").
            </p>
        </section>

        <section className="mb-8">
            <h2 className="mb-1 font-medium">2. Acceptance of Terms and Conditions</h2>
            <p className=" text-small">
            By accessing or using the Platform, you agree to be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, you may not access or use the Platform.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="mb-1 font-medium">3. User Eligibility</h2>
            <p className=" text-small">
            To use the Platform, you must be at least 18 years of age and capable of entering into legally binding contracts. If you are under 18 years of age, you may not access or use the Platform.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="mb-1 font-medium">4. Account Registration</h2>
            <p className=" text-small">
            To access certain features of the Platform, you may be required to create an account. When creating an account, you agree to provide accurate and up-to-date information about yourself. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="mb-1 font-medium">5. Orders and Payments</h2>
            <p className=" text-small">
            When you place an order on the Platform, you agree to purchase the products or services ordered at the prices listed. You agree to pay all applicable taxes and shipping charges. You may pay for your orders using the payment methods that we make available on the Platform.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="mb-1 font-medium">6. Product Information</h2>
            <p className=" text-small">
            We strive to provide accurate and up-to-date information about our products. However, we cannot guarantee that all information on the Platform is accurate, complete, or up-to-date. We reserve the right to change product information at any time without notice.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="mb-1 font-medium">7. Disclaimer of Warranties</h2>
            <p className=" text-small">
            The products and services offered on the Platform are provided "as is" and without any warranties, express or implied. We disclaim all warranties, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="mb-1 font-medium">8. Limitation of Liability</h2>
            <p className=" text-small">
            In no event shall MuscleSharks, its affiliates, or its suppliers be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of the Platform or any products or services purchased on the Platform.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="mb-1 font-medium">9. Indemnification</h2>
            <p className=" text-small">
            You agree to indemnify, defend, and hold harmless MuscleSharks, its affiliates, and its suppliers from and against any and all claims, liabilities, damages, losses, costs, expenses, and fees (including reasonable attorneys' fees) arising out of or in connection with your use of the Platform or your violation of these Terms and Conditions.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="mb-1 font-medium">10. Intellectual Property Rights</h2>
            <p className=" text-small">
            The Platform and all content on the Platform, including, but not limited to, text, graphics, logos, images, and software, are the property of MuscleSharks or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use any of the content on the Platform without the prior written consent of MuscleSharks.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="mb-1 font-medium">11. Termination</h2>
            <p className=" text-small">
            We may terminate your access to the Platform at any time, for any reason, without notice. Upon termination of your access, you must cease all use of the Platform.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="mb-1 font-medium">12. Governing Law</h2>
            <p className=" text-small">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of [State].
            </p>
        </section>

        <section className="mb-8">
            <h2 className="mb-1 font-medium">13. Changes to Terms and Conditions</h2>
            <p className=" text-small">
            We may modify these Terms and Conditions at any time without notice. You are responsible for reviewing these Terms and Conditions regularly to ensure that you are aware of the current terms.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="mb-1 font-medium">14. Contact Us</h2>
            <p className=" text-small">
            If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:[email protected]">[email protected]</a>.
            </p>
        </section>
        </div>
    </div>
    </>
  );
};

export default TermsAndConditions;
