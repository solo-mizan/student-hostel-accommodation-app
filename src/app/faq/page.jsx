import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}

// import React from "react";
// import { Accordion, AccordionItem } from "@nextui-org/react";

// export default function Home() {
//   const defaultContent =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

//   return (
//     <Accordion>
//       <AccordionItem
//         key="1"
//         aria-label="Accordion 1"
//         title="What types of rooms do you offer?"
//       >
//         We offer a variety of room options to suit your needs, including single
//         rooms, double rooms (shared with one other student), and even larger
//         shared apartments for groups of friends.
//       </AccordionItem>
//       <AccordionItem
//         key="2"
//         aria-label="Accordion 2"
//         title="Is there a security deposit required?"
//       >
//         Yes, a security deposit is required to secure your room. The exact
//         amount will be listed in your application and lease agreement. The
//         deposit will be refunded at the end of your stay, minus any deductions
//         for damages or unpaid fees.
//       </AccordionItem>
//       <AccordionItem
//         key="3"
//         aria-label="Accordion 3"
//         title="What is the cancellation policy?"
//       >
//         Our cancellation policy varies depending on the time of year and how far
//         in advance you cancel. Please refer to our application and lease
//         agreement for details.
//       </AccordionItem>
//     </Accordion>
//   );
// }
