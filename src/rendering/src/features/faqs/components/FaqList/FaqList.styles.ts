export const faqListStyles = `
.bg-faqs {
  padding: 72px 0;
  background-color: #EDEDED;
}

@media (max-width: 1023.98px) {
  .bg-faqs {
    padding: 56px 0;
  }
}

@media (max-width: 767.98px) {
  .bg-faqs {
    background-color: transparent;
    padding: 0;
  }
}

.faqs-accordion span[aria-hidden="true"] {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  transform: rotate(180deg);
  font-size: 32px;
  transition: 0.4s;
  color: #757575;
}

.faqs-accordion span[aria-hidden="true"] svg {
  display: none;
}

.faqs-accordion span[aria-hidden="true"]::after {
  content: "";
  width: 32px;
  height: 32px;
  background-image: url("/images/accordion-arrow.svg");
}

.faqs-accordion span[aria-hidden="true"][data-open="true"] {
  transform: rotate(0);
  color: #1b1f27;
}

.faqs-accordion .text-foreground {
  text-align: left;
  font-size: 28px;
  line-height: 32px;
  color: #000000;
  font-family: font-heading;
}

@media (max-width: 768px) {
  .faqs-accordion .text-foreground {
    font-size: 24px;
    line-height: 28px;
  }
}

.faqs-accordion p {
  font-size: 18px;
  color: #000000;
}

.faqs-accordion-list {
  position: relative;
}

.faqs-accordion-list::after {
  content: "";
  position: absolute;
  left: 24px;
  right: 24px;
  top: 0;
  height: 0.5px;
  background-color: #C1C1C1;
  transition: 0.4s;
}

@media (max-width: 767.98px) {
  .faqs-accordion-list::after {
    left: 0px;
    right: 0px;
  }
}

.faqs-accordion-list:last-child::before {
  content: "";
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 0;
  height: 0.5px;
  background-color: #C1C1C1;
  transition: 0.4s;
}

@media (max-width: 767.98px) {
  .faqs-accordion-list:last-child::before {
    left: 0px;
    right: 0px;
  }
}

.faqs-accordion-list[data-open="true"]::after {
  background-color: #1B1F27;
  height: 1px;
  transition: 0.4s;
}
`;
