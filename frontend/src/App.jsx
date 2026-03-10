import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import FAQ from './pages/FAQ';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import Pricing from './pages/Pricing';
import Careers from './pages/Careers';
import Portfolio from './pages/Portfolio';
import PortfolioDetails from './pages/PortfolioDetails';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Proprietorship from './pages/registration/Proprietorship';
import FssaiRegistration from './pages/registrations_and_licenses/FssaiRegistration';
import ImportExportLicense from './pages/registrations_and_licenses/ImportExportLicense';
import ProfessionalConsultationBusiness from './pages/registration/ProfessionalConsultationBusiness';
import DigitalSignature from './pages/registrations_and_licenses/DigitalSignature';
import ApedaRegistration from './pages/registrations_and_licenses/ApedaRegistration';
import IcegateRegistration from './pages/registrations_and_licenses/IcegateRegistration';
import RcmcRegistration from './pages/registrations_and_licenses/RcmcRegistration';
import IecEkyc from './pages/registrations_and_licenses/IecEkyc';
import IecModification from './pages/registrations_and_licenses/IecModification';
import FssaiStateLicense from './pages/registrations_and_licenses/FssaiStateLicense';
import FssaiCentralLicense from './pages/registrations_and_licenses/FssaiCentralLicense';
import FssaiModification from './pages/registrations_and_licenses/FssaiModification';
import FssaiRenewal from './pages/registrations_and_licenses/FssaiRenewal';
import EpfRegistration from './pages/registrations_and_licenses/EpfRegistration';
import EsiRegistration from './pages/registrations_and_licenses/EsiRegistration';
import GstRegistration from './pages/services/GstRegistration';
import GstFormLut from './pages/services/GstFormLut';
import GstFilings from './pages/services/GstFilings';
import GstModification from './pages/services/GstModification';
import GSTEWayBilling from './pages/services/GSTEWayBilling';
import GSTR9Audit from './pages/services/GSTR9Audit';
import TrademarkRegistration from './pages/intellectual-property/TrademarkRegistration';
import TrademarkObjection from './pages/intellectual-property/TrademarkObjection';
import TrademarkHearing from './pages/intellectual-property/TrademarkHearing';
import TrademarkOpposition from './pages/intellectual-property/TrademarkOpposition';
import TrademarkLegalCertificate from './pages/intellectual-property/TrademarkLegalCertificate';
import CopyrightServices from './pages/intellectual-property/CopyrightServices';
import DesignService from './pages/intellectual-property/DesignService';
import PatentServices from './pages/intellectual-property/PatentServices';
import IPRDispute from './pages/intellectual-property/IPRDispute';
import ExpeditedTrademark from './pages/intellectual-property/ExpeditedTrademark';
import InternationalTrademark from './pages/intellectual-property/InternationalTrademark';
import LegalConsultationIP from './pages/intellectual-property/LegalConsultationIP';
import PrivateLimitedCompliance from './pages/roc-compliance/PrivateLimitedCompliance';
import LlpCompliance from './pages/roc-compliance/LLPCompliance';
import PublicLimitedCompliance from './pages/roc-compliance/PublicLimitedCompliance';
import NidhiLimitedCompliance from './pages/roc-compliance/NidhiLimitedCompliance';
import Section8Compliance from './pages/roc-compliance/Section8Compliance';
import DirectorEkyc from './pages/roc-compliance/DirectorEkyc';
import RocAmendment from './pages/roc-compliance/RocAmendment';
import ShareTransfer from './pages/roc-compliance/ShareTransfer';
import OnePersonCompany from './pages/registration/OnePersonCompany';
import PartnershipFirm from './pages/registration/PartnershipFirm';
import PrivateLimited from './pages/registration/PrivateLimited';
import LLP from './pages/registration/LLP';
import PublicLimited from './pages/registration/PublicLimited';
import Nidhi from './pages/registration/Nidhi';
import Section8 from './pages/registration/Section8';
import NGO from './pages/registration/NGO';
import IndianSubsidiary from './pages/registration/IndianSubsidiary';
import ITR1 from './pages/tax-accounting/ITR1';
import ITR2 from './pages/tax-accounting/ITR2';
import ITR3 from './pages/tax-accounting/ITR3';
import ITR4 from './pages/tax-accounting/ITR4';
import ITR5 from './pages/tax-accounting/ITR5';
import ITR6 from './pages/tax-accounting/ITR6';
import ITR7 from './pages/tax-accounting/ITR7';
import TaxAudit from './pages/tax-accounting/TaxAudit';
import FinancialPreparation from './pages/tax-accounting/FinancialPreparation';
import Bookkeeping from './pages/tax-accounting/Bookkeeping';
import IncomeTaxNotice from './pages/tax-accounting/IncomeTaxNotice';
import IncomeTaxScrutiny from './pages/tax-accounting/IncomeTaxScrutiny';
import IncomeTaxReturns from './pages/tax-accounting/IncomeTaxReturns';
import UtilisationCertification from './pages/tax-accounting/UtilisationCertification';
import NetWorthCertification from './pages/tax-accounting/NetWorthCertification';
import AuthorizedCapitalIncrease from './pages/roc-compliance/AuthorizedCapitalIncrease';
import CommencementINC20A from './pages/roc-compliance/CommencementINC20A';
import OPCCompliance from './pages/roc-compliance/OPCCompliance';
import CompanyClosure from './pages/roc-compliance/CompanyClosure';
import Form12A from './pages/tax-accounting/Form12A';
import Form80G from './pages/tax-accounting/Form80G';
import Legal from './pages/others/Legal';
import ISOCertification from './pages/others/ISOCertification';
import StartupIndia from './pages/others/StartupIndia';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProfessionalConsultationTax from './pages/tax-accounting/ProfessionalConsultationTax';

import ScrollToTop from './components/ScrollToTop';
import PageWrapper from './components/PageWrapper';
import ChatWidget from './ChatWidget';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/service-details" element={<PageWrapper><ServiceDetails /></PageWrapper>} />
          <Route path="/news" element={<PageWrapper><News /></PageWrapper>} />
          <Route path="/news-details/:id" element={<PageWrapper><NewsDetails /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
          <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
          <Route path="/team-details" element={<PageWrapper><TeamDetails /></PageWrapper>} />
          <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
          <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
          <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
          <Route path="/portfolio-details" element={<PageWrapper><PortfolioDetails /></PageWrapper>} />
          <Route path="/shop" element={<PageWrapper><Shop /></PageWrapper>} />
          <Route path="/product-details/:id" element={<PageWrapper><ProductDetails /></PageWrapper>} />
          <Route path="/cart" element={<PageWrapper><Cart /></PageWrapper>} />
          <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
          <Route path="/registration/proprietorship" element={<PageWrapper><Proprietorship /></PageWrapper>} />
          <Route path="/services/fssai-registration" element={<PageWrapper><FssaiRegistration /></PageWrapper>} />
          <Route path="/services/import-export-license" element={<PageWrapper><ImportExportLicense /></PageWrapper>} />
          <Route path="/services/digital-signature" element={<PageWrapper><DigitalSignature /></PageWrapper>} />
          <Route path="/services/apeda-registration" element={<PageWrapper><ApedaRegistration /></PageWrapper>} />
          <Route path="/services/icegate-registration" element={<PageWrapper><IcegateRegistration /></PageWrapper>} />
          <Route path="/services/rcmc-registration" element={<PageWrapper><RcmcRegistration /></PageWrapper>} />
          <Route path="/services/iec-ekyc" element={<PageWrapper><IecEkyc /></PageWrapper>} />
          <Route path="/services/iec-modification" element={<PageWrapper><IecModification /></PageWrapper>} />
          <Route path="/services/fssai-state-license" element={<PageWrapper><FssaiStateLicense /></PageWrapper>} />
          <Route path="/services/fssai-central-license" element={<PageWrapper><FssaiCentralLicense /></PageWrapper>} />
          <Route path="/services/fssai-modification" element={<PageWrapper><FssaiModification /></PageWrapper>} />
          <Route path="/services/fssai-renewal" element={<PageWrapper><FssaiRenewal /></PageWrapper>} />
          <Route path="/registration/professional-consultation" element={<PageWrapper><ProfessionalConsultationBusiness /></PageWrapper>} />
          <Route path="/services/epf-registration" element={<PageWrapper><EpfRegistration /></PageWrapper>} />
          <Route path="/services/esi-registration" element={<PageWrapper><EsiRegistration /></PageWrapper>} />
          <Route path="/services/gst-registration" element={<PageWrapper><GstRegistration /></PageWrapper>} />
          <Route path="/services/gst-form-lut" element={<PageWrapper><GstFormLut /></PageWrapper>} />
          <Route path="/services/gst-filings" element={<PageWrapper><GstFilings /></PageWrapper>} />
          <Route path="/services/gst-modification" element={<PageWrapper><GstModification /></PageWrapper>} />
          <Route path="/services/gst-eway-billing" element={<PageWrapper><GSTEWayBilling /></PageWrapper>} />
          <Route path="/services/gstr-9-audit" element={<PageWrapper><GSTR9Audit /></PageWrapper>} />
          <Route path="/services/trademark-registration" element={<PageWrapper><TrademarkRegistration /></PageWrapper>} />
          <Route path="/services/trademark-objection" element={<PageWrapper><TrademarkObjection /></PageWrapper>} />
          <Route path="/services/trademark-hearing" element={<PageWrapper><TrademarkHearing /></PageWrapper>} />
          <Route path="/services/trademark-opposition" element={<PageWrapper><TrademarkOpposition /></PageWrapper>} />
          <Route path="/services/trademark-legal-certificate" element={<PageWrapper><TrademarkLegalCertificate /></PageWrapper>} />
          <Route path="/services/copyright-services" element={<PageWrapper><CopyrightServices /></PageWrapper>} />
          <Route path="/services/design-service" element={<PageWrapper><DesignService /></PageWrapper>} />
          <Route path="/services/patent-services" element={<PageWrapper><PatentServices /></PageWrapper>} />
          <Route path="/services/ipr-dispute" element={<PageWrapper><IPRDispute /></PageWrapper>} />
          <Route path="/services/expedited-trademark" element={<PageWrapper><ExpeditedTrademark /></PageWrapper>} />
          <Route path="/services/international-trademark" element={<PageWrapper><InternationalTrademark /></PageWrapper>} />
          <Route path="/services/legal-consultation-ip" element={<PageWrapper><LegalConsultationIP /></PageWrapper>} />
          <Route path="/services/private-limited-compliance" element={<PageWrapper><PrivateLimitedCompliance /></PageWrapper>} />
          <Route path="/services/llp-compliance" element={<PageWrapper><LlpCompliance /></PageWrapper>} />
          <Route path="/services/public-limited-compliance" element={<PageWrapper><PublicLimitedCompliance /></PageWrapper>} />
          <Route path="/services/nidhi-limited-compliance" element={<PageWrapper><NidhiLimitedCompliance /></PageWrapper>} />
          <Route path="/services/section-8-compliance" element={<PageWrapper><Section8Compliance /></PageWrapper>} />
          <Route path="/services/director-ekyc" element={<PageWrapper><DirectorEkyc /></PageWrapper>} />
          <Route path="/services/roc-amendment" element={<PageWrapper><RocAmendment /></PageWrapper>} />
          <Route path="/services/share-transfer" element={<PageWrapper><ShareTransfer /></PageWrapper>} />
          <Route path="/registration/opc" element={<PageWrapper><OnePersonCompany /></PageWrapper>} />
          <Route path="/registration/partnership" element={<PageWrapper><PartnershipFirm /></PageWrapper>} />
          <Route path="/registration/private-limited" element={<PageWrapper><PrivateLimited /></PageWrapper>} />
          <Route path="/registration/llp" element={<PageWrapper><LLP /></PageWrapper>} />
          <Route path="/registration/public-limited" element={<PageWrapper><PublicLimited /></PageWrapper>} />
          <Route path="/registration/nidhi" element={<PageWrapper><Nidhi /></PageWrapper>} />
          <Route path="/registration/section-8" element={<PageWrapper><Section8 /></PageWrapper>} />
          <Route path="/registration/ngo" element={<PageWrapper><NGO /></PageWrapper>} />
          <Route path="/registration/indian-subsidiary" element={<PageWrapper><IndianSubsidiary /></PageWrapper>} />
          <Route path="/tax-accounting/itr1" element={<PageWrapper><ITR1 /></PageWrapper>} />
          <Route path="/tax-accounting/itr2" element={<PageWrapper><ITR2 /></PageWrapper>} />
          <Route path="/tax-accounting/itr3" element={<PageWrapper><ITR3 /></PageWrapper>} />
          <Route path="/tax-accounting/itr4" element={<PageWrapper><ITR4 /></PageWrapper>} />
          <Route path="/tax-accounting/itr5" element={<PageWrapper><ITR5 /></PageWrapper>} />
          <Route path="/tax-accounting/itr6" element={<PageWrapper><ITR6 /></PageWrapper>} />
          <Route path="/tax-accounting/itr7" element={<PageWrapper><ITR7 /></PageWrapper>} />
          <Route path="/tax-accounting/tax-audit" element={<PageWrapper><TaxAudit /></PageWrapper>} />
          <Route path="/tax-accounting/financial-preparation" element={<PageWrapper><FinancialPreparation /></PageWrapper>} />
          <Route path="/tax-accounting/bookkeeping" element={<PageWrapper><Bookkeeping /></PageWrapper>} />
          <Route path="/tax-accounting/income-tax-notice" element={<PageWrapper><IncomeTaxNotice /></PageWrapper>} />
          <Route path="/tax-accounting/income-tax-scrutiny" element={<PageWrapper><IncomeTaxScrutiny /></PageWrapper>} />
          <Route path="/tax-accounting/income-tax-returns" element={<PageWrapper><IncomeTaxReturns /></PageWrapper>} />
          <Route path="/services/authorized-capital-increase" element={<PageWrapper><AuthorizedCapitalIncrease /></PageWrapper>} />
          <Route path="/services/commencement-inc20a" element={<PageWrapper><CommencementINC20A /></PageWrapper>} />
          <Route path="/services/opc-compliance" element={<PageWrapper><OPCCompliance /></PageWrapper>} />
          <Route path="/services/utilisation-certification" element={<PageWrapper><UtilisationCertification /></PageWrapper>} />
          <Route path="/services/net-worth-certification" element={<PageWrapper><NetWorthCertification /></PageWrapper>} />
          <Route path="/services/company-closure" element={<PageWrapper><CompanyClosure /></PageWrapper>} />
          <Route path="/tax-accounting/form-12a" element={<PageWrapper><Form12A /></PageWrapper>} />
          <Route path="/tax-accounting/form-80g" element={<PageWrapper><Form80G /></PageWrapper>} />
          <Route path="/tax-accounting/professional-consultation" element={<PageWrapper><ProfessionalConsultationTax /></PageWrapper>} />
          <Route path="/others/legal" element={<PageWrapper><Legal /></PageWrapper>} />
          <Route path="/others/iso-certification" element={<PageWrapper><ISOCertification /></PageWrapper>} />
          <Route path="/others/startup-india" element={<PageWrapper><StartupIndia /></PageWrapper>} />
          <Route path="/terms-and-conditions" element={<PageWrapper><TermsAndConditions /></PageWrapper>} />
          <Route path="/refund-policy" element={<PageWrapper><RefundPolicy /></PageWrapper>} />
          <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;

