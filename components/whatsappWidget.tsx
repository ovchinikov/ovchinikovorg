'use client';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsappWidget = () => {
  return (
    <FloatingWhatsApp
      phoneNumber='+254768239745'
      accountName='Vinokov Tech Co.'
      notification={true}
    />
  );
};

export default WhatsappWidget;
