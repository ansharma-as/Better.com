import MortgageCalculator from "@/components/Calculator";
import Navbar from "@/components/Navbar";
// import MortgagePaymentBreakdown from "@/components/MortgagePaymentBreakdown";
import Footer from "@/components/Footer";

export default function Calc() {
  return (
    <div className="flex flex-col space-y-20">
      <div className="">
        <Navbar />
      </div>

      <div className="">
        <MortgageCalculator />
      </div>

      <div className="w-[90%] mx-auto ">
        <hr className="h-4 border-black " />
        <div className="mt-6 text-3xl font-bold">
          <p>How does a Mortgage Calculator help me?</p>
        </div>

        <div className="text-sm mt-5 p-2 text-gray-500">
          <p>
            When deciding how much house you can afford, one of the most
            important pieces to determine is whether a home will fit into your
            monthly budget. A mortgage calculator helps you understand the
            monthly cost of a home. And ours will allow you to enter different
            down payments and interest rates to help determine what is
            affordable for you.
          </p>
        </div>

        <hr className="h-4 border-black  mt-8" />

        <div className="mt-6 text-3xl font-bold">
          <p>How does a Mortgage Calculator help me?</p>
        </div>

        <div className="text-sm mt-5 p-2 text-gray-500">
          <p>
            Lenders determine how much you can afford on a monthly housing
            payment by calculating your debt-to-income ratio (DTI). The maximum
            DTI you can have in order to qualify for most mortgage loans is
            often between 45-50%, with your anticipated housing costs included.
          </p>
          <p>
            Your DTI is the balance between your income and your debt. It helps
            lenders understand how safe or risky it is for them to approve your
            loan. A DTI ratio represents how much of your gross monthly income
            is spoken for by creditors, and how much of it is left over to you
            as disposable income. It’s most commonly written as a percentage.
            For example, if you pay half your monthly income in debt payments,
            you would have a DTI of 50%.
          </p>
        </div>

        <div className="mx-auto text-center text-sm space-y-4">
          <p>Formula for calculating your debt-to-income (DTI) ratio:</p>

          <img
            src="/images/Calculator/dti-formula.jpg"
            alt="Debt-to-Income Ratio Formula"
            className="mx-auto my-4 w-1/3 md:w-2/3 mt-4"
          />

          <p>Here’s an example of what calculating your DTI might look like:</p>

          <img
            src="/images/Calculator/dti-example.jpg"
            alt="Debt-to-Income Ratio Formula"
            className="mx-auto my-4 w-1/2 md:w-2/3 mt-4"
          />

        </div>

        <hr className="h-4 border-black  mt-8" />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
