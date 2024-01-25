import React from 'react';
import Nav from "./Nav";
import NavbarComp from '../../components/Navbar/Navbar';

const ReturnAndRefundPolicy = () => {
  return (
    <>
      <NavbarComp />
      <div className="bg-amber-100 p-5">
        <div className="bg-white w-[80%] m-auto p-5 mb-10">
          <h1 className="text-xl font-bold mb-10 text-center">MuscleSharks Order Cancellation and Return Policy</h1>

          <section className="mb-8">
            <h2 className="mb-1 font-medium">Cancellation Policy</h2>
            <p className="text-small">
              You can cancel your order anytime before it is shipped. Once your order is shipped, it cannot be canceled. However, you may choose to refuse delivery at the time of receipt.
            </p>
            <p className="text-small">
              The time frame for cancellation varies depending on the product category. The order cannot be canceled once the specified time frame has passed.
            </p>
            <p className="text-small">
              In some cases, you may not be able to cancel your order for free after the specified time frame has passed, and a cancellation fee may be charged. The details regarding the time frame and cancellation fee are mentioned on the product page or order confirmation page and are considered final.
            </p>
            <p className="text-small">
              In the event of a cancellation by MuscleSharks due to unforeseen circumstances, a full refund will be initiated for prepaid orders.
            </p>
            <p className="text-small">
              MuscleSharks reserves the right to accept or reject any order cancellation. MuscleSharks also reserves the right to waive or modify the time frame or cancellation fee at its sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-1 font-medium">Return Policy</h2>
            <p className="text-small">
              MuscleSharks offers a return policy that allows you to exchange, replace, or refund certain products under certain conditions. Not all products listed under a particular category have the same return policy.
            </p>
            <p className="text-small">
              For all products, the return policy provided on the product page shall prevail over the general return policy. Please refer to the respective item's applicable return policy on the product page for any exceptions to this return policy.
            </p>
            <table className="mb-4 w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Category</th>
                  <th className="border px-4 py-2">Return Window</th>
                  <th className="border px-4 py-2">Actions Possible</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Supplements</td>
                  <td className="border px-4 py-2">30 days</td>
                  <td className="border px-4 py-2">Exchange, replacement, or refund</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Apparel</td>
                  <td className="border px-4 py-2">14 days</td>
                  <td className="border px-4 py-2">Exchange or replacement</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Accessories</td>
                  <td className="border px-4 py-2">7 days</td>
                  <td className="border px-4 py-2">Exchange or replacement</td>
                </tr>
              </tbody>
            </table>
            <p className="text-small">
              <strong>Part 2 - Conditions for Return</strong>
            </p>
            <ul className="list-disc pl-8">
              <li>The product must be in its original packaging and in resalable condition.</li>
              <li>The product must be accompanied by the original order confirmation email or invoice.</li>
              <li>The product must not be opened or used.</li>
            </ul>
            <p className="text-small">
              <strong>Part 3 - Refund Process</strong>
            </p>
            <ul className="list-disc pl-8">
              <li>Once your return request is approved, you will receive a return authorization number (RAN) via email.</li>
              <li>Pack the product securely in its original packaging along with the RAN and ship it back to the address provided in the email.</li>
              <li>Once we receive the returned product, we will inspect it and initiate the refund process.</li>
              <li>The refund will be processed to the original payment method within 5-7 business days.</li>
            </ul>
            <p className="text-small">
              <strong>Additional Notes</strong>
            </p>
            <ul className="list-disc pl-8">
              <li>Shipping costs for returns will not be refunded unless the product is defective or damaged.</li>
              <li>MuscleSharks reserves the right to reject returns that do not meet the conditions outlined in this policy.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-1 font-medium">Contact Us</h2>
            <p className="text-small">
              If you have any questions about our Order Cancellation and Return Policy, please contact us at [email protected]
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default ReturnAndRefundPolicy;
