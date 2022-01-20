/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    id: 1,
    question: "What is the mode of payment of the application?",
    answer:
      "The mode of payment will be directly In-App purchase on App Store and Google Play Store. You may use your Gcash / Credit Card to pay for the Application Fee",
  },
  {
    id: 2,
    question: "Will I be able to get refund If I am dissatisfied with the service?",
    answer:
      "Yes absolutely but in order to request a refund the admin would like to ask any serious reasons for refund and will be verified with the teachers so that we will improve our service in the future releases",
  },
  // More questions...
];

export default function Faq() {
  return (
    <div className="bg-green-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">
          Frequently asked questions
        </h2>
        <div className="mt-6 border-t border-indigo-300 border-opacity-25 pt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg leading-6 font-medium text-white">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-indigo-200">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
