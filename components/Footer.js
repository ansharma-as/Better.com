import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-5">
      <div className="px-10">
        <h2 className="text-3xl mt-0 font-semibold text-green-700">Better</h2>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[40%_20%_15%_20%] gap-8 px-6 bg-white">
          {/* Column 1 */}
          <div className="bg-white p-4">
            <p className="text-gray-700 mb-4">
              Better is a family of companies serving all your homeownership needs.
            </p>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Better Mortgage</h3>
            <p className="text-gray-700 mb-4">
  We can&apos;t wait to say &ldquo;Welcome home.&rdquo; Apply 100% online, with expert customer support.
</p>

            <h3 className="text-xl font-semibold text-green-700 mb-2">Better Real Estate</h3>
            <p className="text-gray-700 mb-4">
              Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
            </p>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Better Cover</h3>
            <p className="text-gray-700 mb-4">
              Shop, bundle, and save on insurance coverage for home, auto, life, and more.
            </p>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Better Inspect</h3>
            <p className="text-gray-700 mb-4">
              Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.
            </p>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Better Settlement Services</h3>
            <p className="text-gray-700">
              Get transparent rates when you shop for title insurance all in one convenient place.
            </p>
          </div>

          {/* Column 2 */}
          <div className="bg-white p-4">
            <h3 className="text-xl font-semibold text-black mb-4">Resources</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Home affordability calculator</li>
              <li>Mortgage calculator</li>
              <li>Free mortgage calculator</li>
              <li>Mortgage calculator with taxes</li>
              <li>Mortgage calculator with PMI</li>
              <li>Rent vs buy calculator</li>
              <li>HELOC payment calculator</li>
              <li>HELOC vs cash-out refinance calculator</li>
              <li>Buy a home</li>
              <li>Sell a home</li>
              <li>Get home inspection</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="bg-white p-4">
            <h3 className="text-xl font-semibold text-black mb-4">Company</h3>
            <ul className="text-gray-700 space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Media</li>
              <li>Partner With Us</li>
              <li>Learning center</li>
              <li>FAQs</li>
              <li>Investor Relations</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="bg-white p-4">
            <h3 className="text-xl font-semibold text-black mb-4">Contact Us</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Email:</strong> hello@better.com</li>
              <li><strong>Phone:</strong> 415-523-8837</li>
            </ul>
            <h3 className="text-xl font-semibold text-black mt-6 mb-4">Legal</h3>
            <ul className="text-gray-700 space-y-2">
              <li>NMLS Consumer Access</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Disclosures & Licensing</li>
              <li>Affiliated Business</li>
              <li>Browser Disclaimer</li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4 mt-8 ml-4 p-6">
          <Link href="#">
            <img src="/images/footer/facebook.png" alt="Facebook" className="w-6 h-6" />
          </Link>
          <Link href="#">
            <img src="/images/footer/insta.jpeg" alt="Instagram" className="w-6 h-6" />
          </Link>
          <Link href="#">
            <img src="/images/footer/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <div className="mt-8 p-6 text-sm">
        
      <p className="text-xs">
  1 Better Mortgage’s One Day Mortgage&trade; promotion offers qualified
  customers who provide certain required financial
  information/documentation to Better Mortgage within 4 hours of locking
  a rate on a mortgage loan the opportunity to receive an underwriting
  determination from Better Mortgage within 24 hours of their rate lock.
  The underwriting determination is subject to customary terms,
  including fraud and anti-money laundering checks, that take place
  pre-closing and which may trigger additional required documentation
  from the customer. Better Mortgage does not guarantee that initial
  underwriting approval will result in a final underwriting approval.
  See One Day Mortgage&trade; Terms and Conditions.
</p>

        <p className="text-xs mt-4">
          2Better Mortgage’s One Day HELOC™ promotion offers qualified customers
          who provide certain required financial information/documentation to
          Better Mortgage within 4 hours of locking a rate on a HELOC loan the
          opportunity to receive an underwriting determination from Better
          Mortgage within 24 hours of their rate lock. The underwriting
          determination is subject to customary terms, including fraud and
          anti-money laundering checks, that take place pre-closing and which
          may trigger additional required documentation from the customer.
          Better Mortgage does not guarantee that initial underwriting approval
          will result in final underwriting approval. See One Day Heloc™ Terms
          and Conditions.
        </p>
        <p className="text-xs mt-4">
          3Assumes borrowers are eligible for the Automated Valuation Model
          (AVM) to calculate their home value, their loan amount is less than
          $400,000, all required documents are uploaded to their Better Mortgage
          online account within 24 hours of application, closing is scheduled
          for the earliest available date and time, and a notary is readily
          available. Funding timelines may vary and may be longer if an
          appraisal is required to calculate a borrower’s home value.
        </p>

        <hr className="w-full mx-auto border-gray-400 mt-10 " />

        <p className="text-xs mt-10">
          © 2024 Better Home & Finance Holding Company and/or its affiliates.
          Better is a family of companies. Better Mortgage Corporation provides
          home loans; Better Real Estate, LLC and Better Real Estate California
          Inc License # 02164055 provides real estate services; Better Cover,
          LLC sells insurance products; and Better Settlement Services provides
          title insurance services; and Better Inspect, LLC provides home
          inspection services. All rights reserved.
        </p>

        <p className="text-xs mt-6">
          Home lending products offered by Better Mortgage Corporation. Better
          Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade
          Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans
          made or arranged pursuant to a California Finance Lenders Law License.
          Not available in all states. Equal Housing Lender. NMLS Consumer
          Access
        </p>

        <p className="text-xs mt-6">
          Better Real Estate, LLC dba BRE, Better Home Services, BRE Services,
          LLC and Better Real Estate, and operating in the State of California
          through its wholly owned subsidiary Better Real Estate California
          Inc., is a licensed real estate brokerage and maintains its corporate
          headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA
          19106. Here is a full listing of Better Real Estate, LLC’s license
          numbers. Better Real Estate, LLC provides access to real estate
          brokerage services via its nationwide network of partner brokerages
          and real estate agents (“Better Real Estate Partner Agents”). Equal
          Housing Opportunity. All rights reserved.{" "}
        </p>

        <p className="text-xs mt-6">
          Home lending products offered by Better Mortgage Corporation. Better
          Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade
          Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans
          made or arranged pursuant to a California Finance Lenders Law License.
          Not available in all states. Equal Housing Lender. NMLS Consumer
          Access
        </p>

        <p className="text-xs mt-6 text-decoration-line: underline">
          New York State Housing and Anti-Discrimination Notice
        </p>

        <p className="text-xs mt-6 text-decoration-line: underline">New York Standard Operating Procedures </p>

        <p className="text-xs mt-6">
          Texas Real Estate Commission: Information About Brokerage Services |
          Consumer Protection Notice
        </p>

        <p className="text-xs mt-6">
          Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803,
          Philadelphia, PA 19106.
        </p>

        <p className="text-xs mt-6">
          Homeowners insurance policies are offered through Better Cover, LLC, a
          Pennsylvania Resident Producer Agency. License #881593. 325-41
          Chestnut Street, Suite 807, Philadelphia, PA 19106.
        </p>

        <p className="text-xs mt-6">
          Insurance quotes and policies are offered through Better Cover, LLC. A
          Pennsylvania Resident Producer Agency. License #881593. Here is a full
          listing of Better Cover, LLC’s license numbers.
        </p>

        <p className="text-xs mt-6">
          Better Inspect, LLC maintains its corporate headquarters at 325-41
          Chestnut Street, Suite 846, Philadelphia, PA 19106.
        </p>

        <p className="text-xs mt-6">
          Better Mortgage Corporation, Better Real Estate, LLC, Better
          Settlement Services, LLC, Better Cover, LLC, Better Connect, and
          Better Inspect, LLC are separate operating subsidiaries of Better Home
          & Finance Holding Company. Each company is a separate legal entity
          operated and managed through its own management and governance
          structure as required by its state of incorporation, and applicable
          and legal and regulatory requirements. Products not available in all
          states.
        </p>

        <p className="text-xs mt-6">
          Any unauthorized use of any proprietary or intellectual property is
          strictly prohibited. All trademarks, service marks, trade names,
          logos, icons, and domain names are proprietary to Better Home &
          Finance Holding Company. Better Home & Finance Holding Company
          trademarks are federally registered with the U. S. Patent and
          Trademark Office. Better Cover is a registered trademark with the U.S.
          Patent and Trademark Office and is owned by Better Cover, LLC.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
