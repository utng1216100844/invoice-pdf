const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: 'NAD GLOBAL',
    address: 'Avenida Universidad',
    city: 'Dolores Hidalgo',
    state: "GTO",
    country: "MEX",
    postal_code: 37960
  },
  items: [
    {
      item: "Sistema HONDA",
      description: "Sistema 2019",
      quantity: 2,
      amount: 1500000
    },
    {
      item: "Sistema NISSAN ",
      description: "Sistema 2018",
      quantity: 1,
      amount: 800000
    },
    {
      item: "Sistema MAZDA",
      description: "Sistema 2019",
      quantity: 1,
      amount: 750000
    },
    {
      item: "Sistema ALPURA",
      description: "Sistema 2019",
      quantity: 1,
      amount: 450000
    }
  ],
  subtotal: 8000,
  paid: 0,
  invoice_nr: 1234
};

createInvoice(invoice, "invoice.pdf");
