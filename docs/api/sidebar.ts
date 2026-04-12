import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/checkvies-automated-api",
    },
    {
      type: "category",
      label: "ApiVatCheck",
      items: [
        {
          type: "doc",
          id: "api/get-details-of-a-single-vat-number-check-request",
          label: "Get details of a single VAT number check request",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/start-vat-number-check",
          label: "Start VAT number check",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-states-of-vat-number-requests-list",
          label: "Get states of VAT number requests list",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
