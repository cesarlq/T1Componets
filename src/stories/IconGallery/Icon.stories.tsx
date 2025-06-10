import React from 'react';
import IconDisplay from "./IconDisplay";

import T1IconStory from '../../Components/T1IconStory';

export default {
  title: "Foundations/icons",
  // Using NewHomeIcon as default component for the story
  parameters: {},
};

export const ExternalLogos = () => {
  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '3rem',
        justifySelf:'center'
      }}>
      <IconDisplay icon={false} name="T1PaginasLogos">
        <T1IconStory icon="T1PaginasLogos" width={140} height={140} sx={undefined} className={undefined} type={'logo'} />
      </IconDisplay>
      <IconDisplay icon={false} name="T1PagosLogos">
        <T1IconStory icon="T1PagosLogos" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="NewT1PagosLogoWhite">
        <T1IconStory icon="NewT1PagosLogoWhite" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="T1EnviosLogo">
        <T1IconStory icon="T1EnviosLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="T1ComerciosLogo">
        <T1IconStory icon="T1ComerciosLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="AmericanExpressLogo">
        <T1IconStory icon="AmericanExpressLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="CarnetLogo">
        <T1IconStory icon="CarnetLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="MastercardLogo">
        <T1IconStory icon="MastercardLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="VisaLogo">
        <T1IconStory icon="VisaLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="CreditoClaroShopLogo">
        <T1IconStory icon="CreditoClaroShopLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="OxxoLogo">
        <T1IconStory icon="OxxoLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="FedexExpressLogo">
        <T1IconStory icon="FedexExpressLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="EstafetaLogo">
        <T1IconStory icon="EstafetaLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="DhlLogo">
        <T1IconStory icon="DhlLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="ExpressLogo">
        <T1IconStory icon="ExpressLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="ClaroScoreLogo">
        <T1IconStory icon="ClaroScoreLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="BanorteLogo">
        <T1IconStory icon="BanorteLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="BBVALogo">
        <T1IconStory icon="BBVALogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="CitibanamexLogo">
        <T1IconStory icon="CitibanamexLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="HSBCLogo">
        <T1IconStory icon="HSBCLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="InbursaLogo">
        <T1IconStory icon="InbursaLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="InvexLogo">
        <T1IconStory icon="InvexLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="PayPalLogo">
        <T1IconStory icon="PayPalLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="SantanderLogo">
        <T1IconStory icon="SantanderLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="ScotiabankLogo">
        <T1IconStory icon="ScotiabankLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="StripeLogo">
        <T1IconStory icon="StripeLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
    </div>
  );
};

ExternalLogos.storyName = "External Logos";
ExternalLogos.args = {
  width: 140,
  height: 140,
  title: "Icon Title Here",
  classes: [""],
  ariaHidden: false,
  // fill: "#000",
};
ExternalLogos.argTypes = {
  fill: {
    control: {
      type: "color",
    },
  },
};

export const EcommerceIcons = () => {
  return (
    <div  
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '3rem',
        justifySelf:'center'
      }}>
      <IconDisplay icon={false} name="T1Paginas">
        <T1IconStory icon="T1Paginas" width={24} height={24} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="SearsLogo">
        <T1IconStory icon="SearsLogo" width={24} height={24} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="SanbornsLogo">
        <T1IconStory icon="SanbornsLogo" width={24} height={24} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="MercadoLibreIconLogo">
        <T1IconStory icon="MercadoLibreIconLogo" width={24} height={24} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay icon={false} name="AmazonIconLogo">
        <T1IconStory icon="AmazonIconLogo" width={24} height={24} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
    </div>
  );
};
EcommerceIcons.storyName = "Ecommerce Icons";
EcommerceIcons.args = {
  width: 140,
  height: 140,
  title: "Icon Title Here",
  classes: [""],
  // ariaHidden: false,
  // fill: "#000",
};
EcommerceIcons.argTypes = {
  color: {
    control: {
      type: "color",
    },
  },
};

export const AllLegacyIcons = () => {
  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '3rem',
        justifySelf:'center'
      }}>
      <div>
        <IconDisplay icon={true} name="AbacusIcon">
          <T1IconStory icon="AbacusIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="AddressesAlternativeIcon">
          <T1IconStory icon="AddressesAlternativeIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="AddressesIcon">
          <T1IconStory icon="AddressesIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="AlertIcon">
          <T1IconStory icon="AlertIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="AnalysisIcon">
          <T1IconStory icon="AnalysisIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="AntifraudIcon">
          <T1IconStory icon="AntifraudIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="AverageWeightIcon">
          <T1IconStory icon="AverageWeightIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="BagMoneyIcon">
          <T1IconStory icon="BagMoneyIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="BalanceIcon">
          <T1IconStory icon="BalanceIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="BillsIcon">
          <T1IconStory icon="BillsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="BusinessAndFinanceIcon">
          <T1IconStory icon="BusinessAndFinanceIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="CalendarIcon">
          <T1IconStory icon="CalendarIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="CatalogsIcon">
          <T1IconStory icon="CatalogsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="CloseIcon">
          <T1IconStory icon="CloseIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="CoinsIcon">
          <T1IconStory icon="CoinsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="CompanyIcon">
          <T1IconStory icon="CompanyIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="DashboardIcon">
          <T1IconStory icon="DashboardIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="DealIcon">
          <T1IconStory icon="DealIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="DeleteIcon">
          <T1IconStory icon="DeleteIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="DevelopmentIcon">
          <T1IconStory icon="DevelopmentIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="DownloadIcon">
          <T1IconStory icon="DownloadIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="EditIcon">
          <T1IconStory icon="EditIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="EmailIcon">
          <T1IconStory icon="EmailIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="ExitIcon">
          <T1IconStory icon="ExitIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="FilterIcon">
          <T1IconStory icon="FilterIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="FlowIcon">
          <T1IconStory icon="FlowIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="GenerateCollectionsIcon">
          <T1IconStory icon="GenerateCollectionsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="GenerateGuidesIcon">
          <T1IconStory icon="GenerateGuidesIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="GuideHistoryIcon">
          <T1IconStory icon="GuideHistoryIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="GuideTrackingIcon">
          <T1IconStory icon="GuideTrackingIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="HelpIcon">
          <T1IconStory icon="HelpIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="HomeIcon">
          <T1IconStory icon="HomeIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="InventoryIcon">
          <T1IconStory icon="InventoryIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="ListIcon">
          <T1IconStory icon="ListIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="LocationIcon">
          <T1IconStory icon="LocationIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="MoneyIcon">
          <T1IconStory icon="MoneyIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="MyOrdersIcon">
          <T1IconStory icon="MyOrdersIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="MyProductsIcon">
          <T1IconStory icon="MyProductsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NotificationIcon">
          <T1IconStory icon="NotificationIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="PaymentLinkIcon">
          <T1IconStory icon="PaymentLinkIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="RatesIcon">
          <T1IconStory icon="RatesIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="ReportIcon">
          <T1IconStory icon="ReportIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="ReportsIcon">
          <T1IconStory icon="ReportsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="ReputationIcon">
          <T1IconStory icon="ReputationIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="RulesIcon">
          <T1IconStory icon="RulesIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="SalesChannelIcon">
          <T1IconStory icon="SalesChannelIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="SalesChannelsIcon">
          <T1IconStory icon="SalesChannelsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="SalesIcon">
          <T1IconStory icon="SalesIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="SearchIcon">
          <T1IconStory icon="SearchIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="TicketIcon">
          <T1IconStory icon="TicketIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="TrackOrdersIcon">
          <T1IconStory icon="TrackOrdersIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="TransactionsIcon">
          <T1IconStory icon="TransactionsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="UserIcon">
          <T1IconStory icon="UserIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="UsersIcon">
          <T1IconStory icon="UsersIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="VideoIcon">
          <T1IconStory icon="VideoIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="WhatsAppIcon">
          <T1IconStory icon="WhatsAppIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NavigationArrowIcon">
          <T1IconStory icon="NavigationArrowIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="ChargebackIcon">
          <T1IconStory icon="ChargebackIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="DevelopersIcon">
          <T1IconStory icon="DevelopersIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="LinkIcon">
          <T1IconStory icon="LinkIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="GraphicReportsListIcon">
          <T1IconStory icon="GraphicReportsListIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="FinancialCardIcon">
          <T1IconStory icon="FinancialCardIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="CheckIcon">
          <T1IconStory icon="CheckIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="AddIcon">
          <T1IconStory icon="AddIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="PaginationNextIcon">
          <T1IconStory icon="PaginationNextIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="PaginationNextIcon">
          <T1IconStory 
            icon="PaginationNextIcon"
            width={24}
            height={24}
            sx={{ transform: "rotate(180deg)" }} className={undefined} type={'icon'}           />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="PaginationSkipIcon">
          <T1IconStory 
            icon="PaginationSkipIcon"
            width={24}
            height={24}
            sx={{ transform: "rotate(180deg)" }} className={undefined} type={'icon'}           />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="PaginationSkipIcon">
          <T1IconStory icon="PaginationSkipIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NextOutlinedIcon">
          <T1IconStory 
            icon="NextOutlinedIcon"
            width={24}
            height={24}
            sx={{ transform: "rotate(180deg)" }} className={undefined} type={'icon'}           />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NextOutlinedIcon">
          <T1IconStory icon="NextOutlinedIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="SkipOutlinedIcon">
          <T1IconStory 
            icon="SkipOutlinedIcon"
            width={24}
            height={24}
            sx={{ transform: "rotate(180deg)" }} className={undefined} type={'icon'}           />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="SkipOutlinedIcon">
          <T1IconStory icon="SkipOutlinedIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="MenuArrowIcon">
          <T1IconStory icon="MenuArrowIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="MenuArrowIcon">
          <T1IconStory 
            icon="MenuArrowIcon"
            width={24}
            height={24}
            sx={{ transform: "rotate(180deg)" }} className={undefined} type={'icon'}           />
        </IconDisplay>
      </div>
    </div>
  );
};

AllLegacyIcons.storyName = "All Legacy Icons";
AllLegacyIcons.args = {
  width: 140,
  height: 140,
};
AllLegacyIcons.argTypes = {
  color: {
    control: {
      type: "color",
    },
  },
};


export const AllNewIcons = () => {
  return (
    <div  
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '3rem',
        justifySelf:'center'
      }}>
      <div>
        <IconDisplay icon={true} name="NewChangeNameIcon">
          <T1IconStory icon="NewChangeNameIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewChargebacksIcon">
          <T1IconStory icon="NewChargebacksIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCompanyRegistrationIcon">
          <T1IconStory icon="NewCompanyRegistrationIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewDeactivateIcon">
          <T1IconStory icon="NewDeactivateIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewDecisionManagerIcon">
          <T1IconStory icon="NewDecisionManagerIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewDevelopersIcon">
          <T1IconStory icon="NewDevelopersIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewDragAndMoveIcon">
          <T1IconStory icon="NewDragAndMoveIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewFinanceIcon">
          <T1IconStory icon="NewFinanceIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewFlowAdminIcon">
          <T1IconStory icon="NewFlowAdminIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewHomeIcon">
          <T1IconStory icon="NewHomeIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewMyStoreIcon">
          <T1IconStory icon="NewMyStoreIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewPaymentLinkIcon">
          <T1IconStory icon="NewPaymentLinkIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewProfilesIcon">
          <T1IconStory icon="NewProfilesIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewReportsIcon">
          <T1IconStory icon="NewReportsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewRolesAndUsersIcon">
          <T1IconStory icon="NewRolesAndUsersIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewSupplierAdminIcon">
          <T1IconStory icon="NewSupplierAdminIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewTransactionsIcon">
          <T1IconStory icon="NewTransactionsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewHubFlowsIcon">
          <T1IconStory icon="NewHubFlowsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewSettingsIcon">
          <T1IconStory icon="NewSettingsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewExpandMenuIcon">
          <T1IconStory icon="NewExpandMenuIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewExpandMenuIcon">
          <T1IconStory 
            icon="NewExpandMenuIcon"
            width={24}
            height={24}
            sx={{ transform: "rotate(180deg)" }}
            className={undefined} type={'icon'}           />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewRulesetIcon">
          <T1IconStory icon="NewRulesetIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCustomFieldsIcon">
          <T1IconStory icon="NewCustomFieldsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewAntiFraudIcon">
          <T1IconStory icon="NewAntiFraudIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewBalancesIcon">
          <T1IconStory icon="NewBalancesIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewAmexIcon">
          <T1IconStory icon="NewAmexIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewApprovedIcon">
          <T1IconStory icon="NewApprovedIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCalendarIcon">
          <T1IconStory icon="NewCalendarIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCarnetIcon">
          <T1IconStory icon="NewCarnetIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewEditIcon">
          <T1IconStory icon="NewEditIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewExcelIcon">
          <T1IconStory icon="NewExcelIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewFilterIcon">
          <T1IconStory icon="NewFilterIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewInfoIcon">
          <T1IconStory icon="NewInfoIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewMailIcon">
          <T1IconStory icon="NewMailIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewMastercardIcon">
          <T1IconStory icon="NewMastercardIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewSpeiIcon">
          <T1IconStory icon="NewSpeiIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewVisaIcon">
          <T1IconStory icon="NewVisaIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCopyIcon">
          <T1IconStory icon="NewCopyIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewEyeIcon">
          <T1IconStory icon="NewEyeIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewIntegrationIcon">
          <T1IconStory icon="NewIntegrationIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewFileTextIcon">
          <T1IconStory icon="NewFileTextIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewLockIcon">
          <T1IconStory icon="NewLockIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewMobileIcon">
          <T1IconStory icon="NewMobileIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewPCIcon">
          <T1IconStory icon="NewPCIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCameraIcon">
          <T1IconStory icon="NewCameraIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCreditCardIcon">
          <T1IconStory icon="NewCreditCardIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewBoxIcon">
          <T1IconStory icon="NewBoxIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCurrencyIcon">
          <T1IconStory icon="NewCurrencyIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewFacebookIcon">
          <T1IconStory icon="NewFacebookIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewWhatsappIcon">
          <T1IconStory icon="NewWhatsappIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
    </div>
  );
};

export const Iconography = () => {
  return (
    <div>
      <h1>Iconography</h1>
      <p>Our icon system includes several categories of icons for different purposes.</p>
      <ul>
        <li>External Logos - Brand logos for partners and services</li>
        <li>Ecommerce Icons - Icons specific to ecommerce functionality</li>
        <li>Legacy Icons - Our older icon set</li>
        <li>New Icons - Our refreshed icon library</li>
      </ul>
      <p>Select a category from the sidebar to view the specific icons.</p>
    </div>
  );
};
Iconography.storyName = "Iconography";

AllNewIcons.storyName = "All New Icons";
AllNewIcons.args = {
  width: 140,
  height: 140,
};
AllNewIcons.argTypes = {
  color: {
    control: {
      type: "color",
    },
  },
};
